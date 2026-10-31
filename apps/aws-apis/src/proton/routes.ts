import { createRoute, z } from '@hono/zod-openapi'

const IntegerSchema = z.int().openapi('Integer')

const ResourceCountsSummarySchema = z
  .object({
    behindMajor: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of resources of this type in the Amazon Web Services account that need a major template version update.',
        }),
    ).exactOptional(),
    behindMinor: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of resources of this type in the Amazon Web Services account that need a minor template version update.',
        }),
    ).exactOptional(),
    failed: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of resources of this type in the Amazon Web Services account that failed to deploy.',
        }),
    ).exactOptional(),
    total: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of resources of this type in the Amazon Web Services account.',
        }),
    ),
    upToDate: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of resources of this type in the Amazon Web Services account that are up-to-date with their template.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['total'], description: 'Summary counts of each Proton resource types.' })
  .openapi('ResourceCountsSummary')

type CountsSummaryType = {
  components?: z.infer<typeof ResourceCountsSummarySchema> & { [key: string]: unknown }
  environmentTemplates?: z.infer<typeof ResourceCountsSummarySchema> & { [key: string]: unknown }
  environments?: z.infer<typeof ResourceCountsSummarySchema> & { [key: string]: unknown }
  pipelines?: z.infer<typeof ResourceCountsSummarySchema> & { [key: string]: unknown }
  serviceInstances?: z.infer<typeof ResourceCountsSummarySchema> & { [key: string]: unknown }
  serviceTemplates?: z.infer<typeof ResourceCountsSummarySchema> & { [key: string]: unknown }
  services?: z.infer<typeof ResourceCountsSummarySchema> & { [key: string]: unknown }
}

const EnvironmentAccountConnectionArnSchema = z.string().openapi('EnvironmentAccountConnectionArn')

const RoleArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov):iam::\d{12}:role\/([\w+=,.@-]{1,512}[\/:])*([\w+=,.@-]{1,64})$/,
  )
  .min(1)
  .max(2048)
  .openapi('RoleArn')

const AwsAccountIdSchema = z
  .string()
  .regex(/^\d{12}$/)
  .openapi('AwsAccountId')

const ResourceNameSchema = z
  .string()
  .regex(/^[0-9A-Za-z]+[0-9A-Za-z_\-]*$/)
  .min(1)
  .max(100)
  .openapi('ResourceName')

const EnvironmentAccountConnectionIdSchema = z
  .string()
  .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  .openapi('EnvironmentAccountConnectionId')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov):[a-zA-Z0-9-]+:[a-zA-Z0-9-]*:\d{12}:([\w+=,.@-]+[\/:])*[\w+=,.@-]+$/,
  )
  .min(1)
  .max(200)
  .openapi('Arn')

const EnvironmentAccountConnectionStatusSchema = z
  .enum(['PENDING', 'CONNECTED', 'REJECTED'])
  .openapi('EnvironmentAccountConnectionStatus')

const EnvironmentAccountConnectionSchema = z
  .object({
    arn: EnvironmentAccountConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the environment account connection.',
        }),
    ),
    codebuildRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.',
        }),
    ).exactOptional(),
    componentRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.</p> <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any environments running in the account.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    environmentAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The environment account that's connected to the environment account connection.",
        }),
    ),
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the environment that's associated with the environment account connection.",
        }),
    ),
    id: EnvironmentAccountConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment account connection.' }),
    ),
    lastModifiedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the environment account connection was last modified.',
        }),
    ),
    managementAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the management account that's connected to the environment account connection.",
        }),
    ),
    requestedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the environment account connection request was made.',
        }),
    ),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The IAM service role that's associated with the environment account connection.",
        }),
    ),
    status: EnvironmentAccountConnectionStatusSchema.and(
      z.any().openapi({ description: 'The status of the environment account connection.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'environmentAccountId',
      'environmentName',
      'id',
      'lastModifiedAt',
      'managementAccountId',
      'requestedAt',
      'roleArn',
      'status',
    ],
    description: 'Detailed data of an Proton environment account connection resource.',
  })
  .openapi('EnvironmentAccountConnection')

const AcceptEnvironmentAccountConnectionOutputSchema = z
  .object({
    environmentAccountConnection: EnvironmentAccountConnectionSchema.and(
      z
        .any()
        .openapi({
          description: "The environment account connection data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['environmentAccountConnection'] })
  .openapi('AcceptEnvironmentAccountConnectionOutput')

const AcceptEnvironmentAccountConnectionInputSchema = z
  .object({
    id: EnvironmentAccountConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment account connection.' }),
    ),
  })
  .openapi({ required: ['id'], title: 'AcceptEnvironmentAccountConnectionInput' })
  .openapi('AcceptEnvironmentAccountConnectionInput')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ComponentArnSchema = z.string().openapi('ComponentArn')

const DeploymentStatusSchema = z
  .enum([
    'IN_PROGRESS',
    'FAILED',
    'SUCCEEDED',
    'DELETE_IN_PROGRESS',
    'DELETE_FAILED',
    'DELETE_COMPLETE',
    'CANCELLING',
    'CANCELLED',
  ])
  .openapi('DeploymentStatus')

const StatusMessageSchema = z.string().openapi('StatusMessage')

const DescriptionSchema = z.string().min(0).max(500).openapi('Description')

const StringSchema = z.string().openapi('String')

const SpecContentsSchema = z.string().min(1).max(51200).openapi('SpecContents')

const ComponentSchema = z
  .object({
    arn: ComponentArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the component.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the component was created.' }),
    ),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The component deployment status.' }),
    ),
    deploymentStatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({ description: 'The message associated with the component deployment status.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the component.' }),
    ).exactOptional(),
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Proton environment that this component is associated with.',
        }),
    ),
    lastClientRequestToken: StringSchema.and(
      z.any().openapi({ description: 'The last token the client requested.' }),
    ).exactOptional(),
    lastDeploymentAttemptedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when a deployment of the component was last attempted.',
        }),
    ).exactOptional(),
    lastDeploymentSucceededAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the component was last deployed successfully.' }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the component was last modified.' }),
    ),
    name: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the component.' })),
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.',
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.',
        }),
    ).exactOptional(),
    serviceSpec: SpecContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'createdAt', 'deploymentStatus', 'environmentName', 'lastModifiedAt', 'name'],
    description:
      '<p>Detailed data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  })
  .openapi('Component')

const CancelComponentDeploymentOutputSchema = z
  .object({
    component: ComponentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The detailed data of the component with the deployment that is being canceled.',
        }),
    ),
  })
  .openapi({ required: ['component'] })
  .openapi('CancelComponentDeploymentOutput')

const CancelComponentDeploymentInputSchema = z
  .object({
    componentName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the component with the deployment to cancel.' }),
    ),
  })
  .openapi({ required: ['componentName'], title: 'CancelComponentDeploymentInput' })
  .openapi('CancelComponentDeploymentInput')

const EnvironmentArnSchema = z.string().openapi('EnvironmentArn')

const ProvisioningSchema = z.literal('CUSTOMER_MANAGED').openapi('Provisioning')

const RepositoryArnSchema = z.string().openapi('RepositoryArn')

const GitBranchNameSchema = z.string().min(1).max(200).openapi('GitBranchName')

const RepositoryNameSchema = z
  .string()
  .regex(/[A-Za-z0-9_.-].*\/[A-Za-z0-9_.-].*/)
  .min(1)
  .max(100)
  .openapi('RepositoryName')

const RepositoryProviderSchema = z
  .enum(['GITHUB', 'GITHUB_ENTERPRISE', 'BITBUCKET'])
  .openapi('RepositoryProvider')

const RepositoryBranchSchema = z
  .object({
    arn: RepositoryArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the linked repository.' }),
    ),
    branch: GitBranchNameSchema.and(z.any().openapi({ description: 'The repository branch.' })),
    name: RepositoryNameSchema.and(z.any().openapi({ description: 'The repository name.' })),
    provider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
  })
  .openapi({
    required: ['arn', 'branch', 'name', 'provider'],
    description: 'Detail data for a linked repository branch.',
  })
  .openapi('RepositoryBranch')

const TemplateVersionPartSchema = z
  .string()
  .regex(/^(0|([1-9]{1}\d*))$/)
  .min(1)
  .max(20)
  .openapi('TemplateVersionPart')

const EnvironmentSchema = z
  .object({
    arn: EnvironmentArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the environment.' }),
    ),
    codebuildRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your behalf.',
        }),
    ).exactOptional(),
    componentRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision.</p> <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the environment was created.' }),
    ),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The environment deployment status.' }),
    ),
    deploymentStatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'An environment deployment status message.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the environment.' }),
    ).exactOptional(),
    environmentAccountConnectionId: EnvironmentAccountConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the environment account connection that's used to provision infrastructure resources in an environment account.",
        }),
    ).exactOptional(),
    environmentAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the environment account that the environment infrastructure resources are provisioned in.',
        }),
    ).exactOptional(),
    lastDeploymentAttemptedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when a deployment of the environment was last attempted.',
        }),
    ),
    lastDeploymentSucceededAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the environment was last deployed successfully.' }),
    ),
    name: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the environment.' })),
    protonServiceRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.',
        }),
    ).exactOptional(),
    provisioning: ProvisioningSchema.and(
      z
        .any()
        .openapi({
          description:
            'When included, indicates that the environment template is for customer provisioned and managed infrastructure.',
        }),
    ).exactOptional(),
    provisioningRepository: RepositoryBranchSchema.and(
      z
        .any()
        .openapi({
          description:
            'The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository that has been registered with Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateRepository.html">CreateRepository</a>.',
        }),
    ).exactOptional(),
    spec: SpecContentsSchema.and(
      z.any().openapi({ description: 'The environment spec.' }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The major version of the environment template.' }),
    ),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The minor version of the environment template.' }),
    ),
    templateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the environment template.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'deploymentStatus',
      'lastDeploymentAttemptedAt',
      'lastDeploymentSucceededAt',
      'name',
      'templateMajorVersion',
      'templateMinorVersion',
      'templateName',
    ],
    description:
      'Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.',
  })
  .openapi('Environment')

const CancelEnvironmentDeploymentOutputSchema = z
  .object({
    environment: EnvironmentSchema.and(
      z.any().openapi({ description: "The environment summary data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['environment'] })
  .openapi('CancelEnvironmentDeploymentOutput')

const CancelEnvironmentDeploymentInputSchema = z
  .object({
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the environment with the deployment to cancel.' }),
    ),
  })
  .openapi({ required: ['environmentName'], title: 'CancelEnvironmentDeploymentInput' })
  .openapi('CancelEnvironmentDeploymentInput')

const ServiceInstanceArnSchema = z.string().openapi('ServiceInstanceArn')

const ServiceInstanceSchema = z
  .object({
    arn: ServiceInstanceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the service instance.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service instance was created.' }),
    ),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The service instance deployment status.' }),
    ),
    deploymentStatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The message associated with the service instance deployment status.',
        }),
    ).exactOptional(),
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the environment that the service instance was deployed into.',
        }),
    ),
    lastClientRequestToken: StringSchema.and(
      z.any().openapi({ description: 'The last client request token received.' }),
    ).exactOptional(),
    lastDeploymentAttemptedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when a deployment of the service instance was last attempted.',
        }),
    ),
    lastDeploymentSucceededAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the service instance was last deployed successfully.',
        }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service instance.' }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service that the service instance belongs to.' }),
    ),
    spec: SpecContentsSchema.and(
      z
        .any()
        .openapi({ description: 'The service spec that was used to create the service instance.' }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The major version of the service template that was used to create the service instance.',
        }),
    ),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minor version of the service template that was used to create the service instance.',
        }),
    ),
    templateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service template that was used to create the service instance.',
        }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'deploymentStatus',
      'environmentName',
      'lastDeploymentAttemptedAt',
      'lastDeploymentSucceededAt',
      'name',
      'serviceName',
      'templateMajorVersion',
      'templateMinorVersion',
      'templateName',
    ],
    description: 'Detailed data of an Proton service instance resource.',
  })
  .openapi('ServiceInstance')

const CancelServiceInstanceDeploymentOutputSchema = z
  .object({
    serviceInstance: ServiceInstanceSchema.and(
      z
        .any()
        .openapi({ description: "The service instance summary data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['serviceInstance'] })
  .openapi('CancelServiceInstanceDeploymentOutput')

const CancelServiceInstanceDeploymentInputSchema = z
  .object({
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service instance with the deployment to cancel.',
        }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service with the service instance deployment to cancel.',
        }),
    ),
  })
  .openapi({
    required: ['serviceInstanceName', 'serviceName'],
    title: 'CancelServiceInstanceDeploymentInput',
  })
  .openapi('CancelServiceInstanceDeploymentInput')

const ServicePipelineSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the service pipeline.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service pipeline was created.' }),
    ),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The deployment status of the service pipeline.' }),
    ),
    deploymentStatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'A service pipeline deployment status message.' }),
    ).exactOptional(),
    lastDeploymentAttemptedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when a deployment of the service pipeline was last attempted.',
        }),
    ),
    lastDeploymentSucceededAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the service pipeline was last deployed successfully.',
        }),
    ),
    spec: SpecContentsSchema.and(
      z
        .any()
        .openapi({ description: 'The service spec that was used to create the service pipeline.' }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The major version of the service template that was used to create the service pipeline.',
        }),
    ),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minor version of the service template that was used to create the service pipeline.',
        }),
    ),
    templateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service template that was used to create the service pipeline.',
        }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'deploymentStatus',
      'lastDeploymentAttemptedAt',
      'lastDeploymentSucceededAt',
      'templateMajorVersion',
      'templateMinorVersion',
      'templateName',
    ],
    description: 'Detailed data of an Proton service instance pipeline resource.',
  })
  .openapi('ServicePipeline')

const CancelServicePipelineDeploymentOutputSchema = z
  .object({
    pipeline: ServicePipelineSchema.and(
      z
        .any()
        .openapi({ description: "The service pipeline detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['pipeline'] })
  .openapi('CancelServicePipelineDeploymentOutput')

const CancelServicePipelineDeploymentInputSchema = z
  .object({
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service with the service pipeline deployment to cancel.',
        }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'CancelServicePipelineDeploymentInput' })
  .openapi('CancelServicePipelineDeploymentInput')

const CreateComponentOutputSchema = z
  .object({
    component: ComponentSchema.and(
      z.any().openapi({ description: 'The detailed data of the created component.' }),
    ),
  })
  .openapi({ required: ['component'] })
  .openapi('CreateComponentOutput')

const ClientTokenSchema = z
  .string()
  .regex(/^[!-~]*$/)
  .min(0)
  .max(64)
  .openapi('ClientToken')

const TemplateManifestContentsSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('TemplateManifestContents')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: 'The key of the resource tag.' })),
    value: TagValueSchema.and(z.any().openapi({ description: 'The value of the resource tag.' })),
  })
  .openapi({ required: ['key', 'value'], description: 'A description of a resource tag.' })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(50).openapi('TagList')

const TemplateFileContentsSchema = z.string().min(1).max(51200).openapi('TemplateFileContents')

const CreateComponentInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client token for the created component.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'An optional customer-provided description of the component.' }),
    ).exactOptional(),
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the Proton environment that you want to associate this component with. You must specify this when you don't specify <code>serviceInstanceName</code> and <code>serviceName</code>.",
        }),
    ).exactOptional(),
    manifest: TemplateManifestContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A path to a manifest file that lists the Infrastructure as Code (IaC) file, template language, and rendering engine for infrastructure that a custom component provisions.',
        }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The customer-provided name of the component.' }),
    ),
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the service instance that you want to attach this component to. If you don't specify this, the component isn't attached to any service instance. Specify both <code>serviceInstanceName</code> and <code>serviceName</code> or neither of them.",
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the service that <code>serviceInstanceName</code> is associated with. If you don't specify this, the component isn't attached to any service instance. Specify both <code>serviceInstanceName</code> and <code>serviceName</code> or neither of them.",
        }),
    ).exactOptional(),
    serviceSpec: SpecContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service spec that you want the component to use to access service inputs. Set this only when you attach the component to a service instance.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton component. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    templateFile: TemplateFileContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.</p> <note> <p>Components support a single IaC file, even if you use Terraform as your template language.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['manifest', 'name', 'templateFile'], title: 'CreateComponentInput' })
  .openapi('CreateComponentInput')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const CreateEnvironmentOutputSchema = z
  .object({
    environment: EnvironmentSchema.and(
      z.any().openapi({ description: "The environment detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['environment'] })
  .openapi('CreateEnvironmentOutput')

const RepositoryBranchInputSchema = z
  .object({
    branch: GitBranchNameSchema.and(z.any().openapi({ description: 'The repository branch.' })),
    name: RepositoryNameSchema.and(z.any().openapi({ description: 'The repository name.' })),
    provider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
  })
  .openapi({
    required: ['branch', 'name', 'provider'],
    description: 'Detail input data for a linked repository branch.',
  })
  .openapi('RepositoryBranchInput')

const CreateEnvironmentInputSchema = z
  .object({
    codebuildRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your behalf.</p> <p>To use CodeBuild-based provisioning for the environment or for any service instance running in the environment, specify either the <code>environmentAccountConnectionId</code> or <code>codebuildRoleArn</code> parameter.</p>',
        }),
    ).exactOptional(),
    componentRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision.</p> <p>You must specify <code>componentRoleArn</code> to allow directly defined components to be associated with this environment.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: "A description of the environment that's being created and deployed.",
        }),
    ).exactOptional(),
    environmentAccountConnectionId: EnvironmentAccountConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the environment account connection that you provide if you\'re provisioning your environment infrastructure resources to an environment account. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p> <p>To use Amazon Web Services-managed provisioning for the environment, specify either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and omit the <code>provisioningRepository</code> parameter.</p>',
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the environment.' })),
    protonServiceRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p> <p>To use Amazon Web Services-managed provisioning for the environment, specify either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and omit the <code>provisioningRepository</code> parameter.</p>',
        }),
    ).exactOptional(),
    provisioningRepository: RepositoryBranchInputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>To use self-managed provisioning for the environment, specify this parameter and omit the <code>environmentAccountConnectionId</code> and <code>protonServiceRoleArn</code> parameters.</p>',
        }),
    ).exactOptional(),
    spec: SpecContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A YAML formatted string that provides inputs as defined in the environment template bundle schema file. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> in the <i>Proton User Guide</i>.',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton environment. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The major version of the environment template.' }),
    ),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The minor version of the environment template.' }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the environment template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'spec', 'templateMajorVersion', 'templateName'],
    title: 'CreateEnvironmentInput',
  })
  .openapi('CreateEnvironmentInput')

const CreateEnvironmentAccountConnectionOutputSchema = z
  .object({
    environmentAccountConnection: EnvironmentAccountConnectionSchema.and(
      z
        .any()
        .openapi({
          description: "The environment account connection detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['environmentAccountConnection'] })
  .openapi('CreateEnvironmentAccountConnectionOutput')

const CreateEnvironmentAccountConnectionInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When included, if two identical requests are made with the same client token, Proton returns the environment account connection that the first request created.',
        }),
    ).exactOptional(),
    codebuildRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.',
        }),
    ).exactOptional(),
    componentRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.</p> <p>You must specify <code>componentRoleArn</code> to allow directly defined components to be associated with any environments running in this account.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the Proton environment that's created in the associated management account.",
        }),
    ),
    managementAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the management account that accepts or rejects the environment account connection. You create and manage the Proton environment in this account. If the management account accepts the environment account connection, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. Proton uses this role to provision infrastructure resources in the associated environment account.",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['environmentName', 'managementAccountId'],
    title: 'CreateEnvironmentAccountConnectionInput',
  })
  .openapi('CreateEnvironmentAccountConnectionInput')

const EnvironmentTemplateArnSchema = z.string().openapi('EnvironmentTemplateArn')

const DisplayNameSchema = z.string().min(1).max(100).openapi('DisplayName')

const FullTemplateVersionNumberSchema = z
  .string()
  .regex(/^(0|([1-9]{1}\d*)).(0|([1-9]{1}\d*))$/)
  .min(1)
  .max(10)
  .openapi('FullTemplateVersionNumber')

const EnvironmentTemplateSchema = z
  .object({
    arn: EnvironmentTemplateArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the environment template.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the environment template was created.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the environment template.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the environment template as displayed in the developer interface.',
        }),
    ).exactOptional(),
    encryptionKey: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The customer provided encryption key for the environment template.',
        }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the environment template was last modified.' }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
    provisioning: ProvisioningSchema.and(
      z
        .any()
        .openapi({
          description:
            'When included, indicates that the environment template is for customer provisioned and managed infrastructure.',
        }),
    ).exactOptional(),
    recommendedVersion: FullTemplateVersionNumberSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the recommended version of the environment template.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'createdAt', 'lastModifiedAt', 'name'],
    description: 'The environment template data.',
  })
  .openapi('EnvironmentTemplate')

const CreateEnvironmentTemplateOutputSchema = z
  .object({
    environmentTemplate: EnvironmentTemplateSchema.and(
      z
        .any()
        .openapi({
          description: "The environment template detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['environmentTemplate'] })
  .openapi('CreateEnvironmentTemplateOutput')

const CreateEnvironmentTemplateInputSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the environment template.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The environment template name as displayed in the developer interface.',
        }),
    ).exactOptional(),
    encryptionKey: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'A customer provided encryption key that Proton uses to encrypt data.',
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
    provisioning: ProvisioningSchema.and(
      z
        .any()
        .openapi({
          description:
            'When included, indicates that the environment template is for customer provisioned and managed infrastructure.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateEnvironmentTemplateInput' })
  .openapi('CreateEnvironmentTemplateInput')

const EnvironmentTemplateVersionArnSchema = z.string().openapi('EnvironmentTemplateVersionArn')

const TemplateSchemaSchema = z.string().min(1).max(51200).openapi('TemplateSchema')

const TemplateVersionStatusSchema = z
  .enum(['REGISTRATION_IN_PROGRESS', 'REGISTRATION_FAILED', 'DRAFT', 'PUBLISHED'])
  .openapi('TemplateVersionStatus')

const EnvironmentTemplateVersionSchema = z
  .object({
    arn: EnvironmentTemplateVersionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the version of an environment template.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the version of an environment template was created.',
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the minor version of an environment template.' }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the version of an environment template was last modified.',
        }),
    ),
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            "The latest major version that's associated with the version of an environment template.",
        }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The minor version of an environment template.' }),
    ),
    recommendedMinorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({ description: 'The recommended minor version of the environment template.' }),
    ).exactOptional(),
    schema: TemplateSchemaSchema.and(
      z.any().openapi({ description: 'The schema of the version of an environment template.' }),
    ).exactOptional(),
    status: TemplateVersionStatusSchema.and(
      z.any().openapi({ description: 'The status of the version of an environment template.' }),
    ),
    statusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({ description: 'The status message of the version of an environment template.' }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the version of an environment template.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastModifiedAt',
      'majorVersion',
      'minorVersion',
      'status',
      'templateName',
    ],
    description: 'The environment template version data.',
  })
  .openapi('EnvironmentTemplateVersion')

const CreateEnvironmentTemplateVersionOutputSchema = z
  .object({
    environmentTemplateVersion: EnvironmentTemplateVersionSchema.and(
      z
        .any()
        .openapi({
          description: "The environment template detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['environmentTemplateVersion'] })
  .openapi('CreateEnvironmentTemplateVersionOutput')

const S3BucketSchema = z
  .string()
  .regex(/^[a-z0-9]+[a-z0-9-\.]+[a-z0-9]+$/)
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const S3KeySchema = z.string().min(1).max(1024).openapi('S3Key')

const S3ObjectSourceSchema = z
  .object({
    bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the S3 bucket that contains a template bundle.' }),
    ),
    key: S3KeySchema.and(
      z
        .any()
        .openapi({ description: 'The path to the S3 bucket that contains a template bundle.' }),
    ),
  })
  .openapi({ required: ['bucket', 'key'], description: 'Template bundle S3 bucket data.' })
  .openapi('S3ObjectSource')

const TemplateVersionSourceInputSchema = z
  .object({
    s3: S3ObjectSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An S3 source object that includes the template bundle S3 path and name for a template minor version.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Template version source data.', required: [] })
  .openapi('TemplateVersionSourceInput')

const CreateEnvironmentTemplateVersionInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When included, if two identical requests are made with the same client token, Proton returns the environment template version that the first request created.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the new version of an environment template.' }),
    ).exactOptional(),
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To create a new minor version of the environment template, include <code>major Version</code>.</p> <p>To create a new major and minor version of the environment template, exclude <code>major Version</code>.</p>',
        }),
    ).exactOptional(),
    source: TemplateVersionSourceInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that includes the template bundle S3 bucket path and name for the new version of an template.',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton environment template version. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
  })
  .openapi({ required: ['source', 'templateName'], title: 'CreateEnvironmentTemplateVersionInput' })
  .openapi('CreateEnvironmentTemplateVersionInput')

const RepositorySchema = z
  .object({
    arn: RepositoryArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the linked repository.' }),
    ),
    connectionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account.',
        }),
    ),
    encryptionKey: ArnSchema.and(
      z.any().openapi({ description: 'Your customer Amazon Web Services KMS encryption key.' }),
    ).exactOptional(),
    name: RepositoryNameSchema.and(z.any().openapi({ description: 'The repository name.' })),
    provider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
  })
  .openapi({
    required: ['arn', 'connectionArn', 'name', 'provider'],
    description:
      'Detailed data of a linked repository—a repository that has been registered with Proton.',
  })
  .openapi('Repository')

const CreateRepositoryOutputSchema = z
  .object({
    repository: RepositorySchema.and(
      z
        .any()
        .openapi({ description: "The repository link's detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['repository'] })
  .openapi('CreateRepositoryOutput')

const CreateRepositoryInputSchema = z
  .object({
    connectionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html">Setting up for Proton</a> in the <i>Proton User Guide</i>.',
        }),
    ),
    encryptionKey: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of your customer Amazon Web Services Key Management Service (Amazon Web Services KMS) key.',
        }),
    ).exactOptional(),
    name: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The repository name (for example, <code>myrepos/myrepo</code>).',
        }),
    ),
    provider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton repository. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectionArn', 'name', 'provider'], title: 'CreateRepositoryInput' })
  .openapi('CreateRepositoryInput')

const ServiceArnSchema = z.string().openapi('ServiceArn')

const RepositoryIdSchema = z.string().min(1).max(200).openapi('RepositoryId')

const ServiceStatusSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'CREATE_FAILED_CLEANUP_IN_PROGRESS',
    'CREATE_FAILED_CLEANUP_COMPLETE',
    'CREATE_FAILED_CLEANUP_FAILED',
    'CREATE_FAILED',
    'ACTIVE',
    'DELETE_IN_PROGRESS',
    'DELETE_FAILED',
    'UPDATE_IN_PROGRESS',
    'UPDATE_FAILED_CLEANUP_IN_PROGRESS',
    'UPDATE_FAILED_CLEANUP_COMPLETE',
    'UPDATE_FAILED_CLEANUP_FAILED',
    'UPDATE_FAILED',
    'UPDATE_COMPLETE_CLEANUP_FAILED',
  ])
  .openapi('ServiceStatus')

const ServiceSchema = z
  .object({
    arn: ServiceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the service.' }),
    ),
    branchName: GitBranchNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the code repository branch that holds the code that's deployed in Proton.",
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service was created.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the service.' }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service was last modified.' }),
    ),
    name: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the service.' })),
    pipeline: ServicePipelineSchema.and(
      z.any().openapi({ description: 'The service pipeline detail data.' }),
    ).exactOptional(),
    repositoryConnectionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the repository connection. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol">Setting up an AWS CodeStar connection</a> in the <i>Proton User Guide</i>.',
        }),
    ).exactOptional(),
    repositoryId: RepositoryIdSchema.and(
      z.any().openapi({ description: 'The ID of the source code repository.' }),
    ).exactOptional(),
    spec: SpecContentsSchema.and(
      z.any().openapi({ description: 'The formatted specification that defines the service.' }),
    ),
    status: ServiceStatusSchema.and(z.any().openapi({ description: 'The status of the service.' })),
    statusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'A service status message.' }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
  })
  .openapi({
    required: ['arn', 'createdAt', 'lastModifiedAt', 'name', 'spec', 'status', 'templateName'],
    description: 'Detailed data of an Proton service resource.',
  })
  .openapi('Service')

const CreateServiceOutputSchema = z
  .object({
    service: ServiceSchema.and(
      z.any().openapi({ description: "The service detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['service'] })
  .openapi('CreateServiceOutput')

const CreateServiceInputSchema = z
  .object({
    branchName: GitBranchNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the code repository branch that holds the code that's deployed in Proton. <i>Don't</i> include this parameter if your service template <i>doesn't</i> include a service pipeline.",
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the Proton service.' }),
    ).exactOptional(),
    name: ResourceNameSchema.and(z.any().openapi({ description: 'The service name.' })),
    repositoryConnectionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the repository connection. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol">Setting up an AWS CodeStar connection</a> in the <i>Proton User Guide</i>. <i>Don\'t</i> include this parameter if your service template <i>doesn\'t</i> include a service pipeline.',
        }),
    ).exactOptional(),
    repositoryId: RepositoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the code repository. <i>Don't</i> include this parameter if your service template <i>doesn't</i> include a service pipeline.",
        }),
    ).exactOptional(),
    spec: SpecContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A link to a spec file that provides inputs as defined in the service template bundle schema file. The spec file is in YAML format. <i>Don’t</i> include pipeline inputs in the spec if your service template <i>doesn’t</i> include a service pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-create-svc.html">Create a service</a> in the <i>Proton User Guide</i>.',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton service. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The major version of the service template that was used to create the service.',
        }),
    ),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minor version of the service template that was used to create the service.',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the service template that's used to create the service.",
        }),
    ),
  })
  .openapi({
    required: ['name', 'spec', 'templateMajorVersion', 'templateName'],
    title: 'CreateServiceInput',
  })
  .openapi('CreateServiceInput')

const CreateServiceInstanceOutputSchema = z
  .object({
    serviceInstance: ServiceInstanceSchema.and(
      z.any().openapi({ description: 'The detailed data of the service instance being created.' }),
    ),
  })
  .openapi({ required: ['serviceInstance'] })
  .openapi('CreateServiceInstanceOutput')

const CreateServiceInstanceInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client token of the service instance to create.' }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service instance to create.' }),
    ),
    serviceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service the service instance is added to.' }),
    ),
    spec: SpecContentsSchema.and(
      z.any().openapi({ description: 'The spec for the service instance you want to create.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton service instance. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To create a new major and minor version of the service template, <i>exclude</i> <code>major Version</code>.',
        }),
    ).exactOptional(),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To create a new minor version of the service template, include a <code>major Version</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'serviceName', 'spec'], title: 'CreateServiceInstanceInput' })
  .openapi('CreateServiceInstanceInput')

const OpsFilePathSchema = z.string().min(1).max(4096).openapi('OpsFilePath')

const ServiceSyncConfigSchema = z
  .object({
    branch: GitBranchNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the code repository branch that holds the service code Proton will sync with.',
        }),
    ),
    filePath: OpsFilePathSchema.and(
      z.any().openapi({ description: 'The file path to the service sync configuration file.' }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the code repository that holds the service code Proton will sync with.',
        }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository provider that holds the repository Proton will sync with.',
        }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service that the service instance is added to.' }),
    ),
  })
  .openapi({
    required: ['branch', 'filePath', 'repositoryName', 'repositoryProvider', 'serviceName'],
    description: 'Detailed data of the service sync configuration.',
  })
  .openapi('ServiceSyncConfig')

const CreateServiceSyncConfigOutputSchema = z
  .object({
    serviceSyncConfig: ServiceSyncConfigSchema.and(
      z.any().openapi({ description: 'The detailed data of the Proton Ops file.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateServiceSyncConfigOutput')

const CreateServiceSyncConfigInputSchema = z
  .object({
    branch: GitBranchNameSchema.and(
      z.any().openapi({ description: 'The repository branch for your Proton Ops file.' }),
    ),
    filePath: OpsFilePathSchema.and(
      z.any().openapi({ description: 'The path to the Proton Ops file.' }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name.' }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The provider type for your repository.' }),
    ),
    serviceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service the Proton Ops file is for.' }),
    ),
  })
  .openapi({
    required: ['branch', 'filePath', 'repositoryName', 'repositoryProvider', 'serviceName'],
    title: 'CreateServiceSyncConfigInput',
  })
  .openapi('CreateServiceSyncConfigInput')

const ServiceTemplateArnSchema = z.string().openapi('ServiceTemplateArn')

const ServiceTemplateSchema = z
  .object({
    arn: ServiceTemplateArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the service template.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service template was created.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the service template.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The service template name as displayed in the developer interface.',
        }),
    ).exactOptional(),
    encryptionKey: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The customer provided service template encryption key that's used to encrypt data.",
        }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service template was last modified.' }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
    pipelineProvisioning: ProvisioningSchema.and(
      z
        .any()
        .openapi({
          description:
            "If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included in the service template. Otherwise, a service pipeline <i>isn't</i> included in the service template.",
        }),
    ).exactOptional(),
    recommendedVersion: FullTemplateVersionNumberSchema.and(
      z.any().openapi({ description: 'The recommended version of the service template.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'createdAt', 'lastModifiedAt', 'name'],
    description: 'Detailed data of an Proton service template resource.',
  })
  .openapi('ServiceTemplate')

const CreateServiceTemplateOutputSchema = z
  .object({
    serviceTemplate: ServiceTemplateSchema.and(
      z
        .any()
        .openapi({ description: "The service template detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['serviceTemplate'] })
  .openapi('CreateServiceTemplateOutput')

const CreateServiceTemplateInputSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the service template.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service template as displayed in the developer interface.',
        }),
    ).exactOptional(),
    encryptionKey: ArnSchema.and(
      z
        .any()
        .openapi({
          description: "A customer provided encryption key that's used to encrypt data.",
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
    pipelineProvisioning: ProvisioningSchema.and(
      z
        .any()
        .openapi({
          description:
            "By default, Proton provides a service pipeline for your service. When this parameter is included, it indicates that an Proton service pipeline <i>isn't</i> provided for your service. After it's included, it <i>can't</i> be changed. For more information, see <a href=\"https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles\">Template bundles</a> in the <i>Proton User Guide</i>.",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateServiceTemplateInput' })
  .openapi('CreateServiceTemplateInput')

const ServiceTemplateVersionArnSchema = z.string().openapi('ServiceTemplateVersionArn')

const CompatibleEnvironmentTemplateSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The major version of the compatible environment template.' }),
    ),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The compatible environment template name.' }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'templateName'],
    description: 'Compatible environment template data.',
  })
  .openapi('CompatibleEnvironmentTemplate')

const CompatibleEnvironmentTemplateListSchema = z
  .array(CompatibleEnvironmentTemplateSchema)
  .openapi('CompatibleEnvironmentTemplateList')

const ServiceTemplateSupportedComponentSourceTypeSchema = z
  .literal('DIRECTLY_DEFINED')
  .openapi('ServiceTemplateSupportedComponentSourceType')

const ServiceTemplateSupportedComponentSourceInputListSchema = z
  .array(ServiceTemplateSupportedComponentSourceTypeSchema)
  .openapi('ServiceTemplateSupportedComponentSourceInputList')

const ServiceTemplateVersionSchema = z
  .object({
    arn: ServiceTemplateVersionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the version of a service template.',
        }),
    ),
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of compatible environment template names for the major version of a service template.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the version of a service template was created.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the version of a service template.' }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the version of a service template was last modified.',
        }),
    ),
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            "The latest major version that's associated with the version of a service template.",
        }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The minor version of a service template.' }),
    ),
    recommendedMinorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The recommended minor version of the service template.' }),
    ).exactOptional(),
    schema: TemplateSchemaSchema.and(
      z.any().openapi({ description: 'The schema of the version of a service template.' }),
    ).exactOptional(),
    status: TemplateVersionStatusSchema.and(
      z.any().openapi({ description: 'The service template version status.' }),
    ),
    statusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'A service template version status message.' }),
    ).exactOptional(),
    supportedComponentSources: ServiceTemplateSupportedComponentSourceInputListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of supported component sources. Components with supported sources can be attached to service instances based on this service template version.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the version of a service template.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'compatibleEnvironmentTemplates',
      'createdAt',
      'lastModifiedAt',
      'majorVersion',
      'minorVersion',
      'status',
      'templateName',
    ],
    description: 'Detailed data of an Proton service template version resource.',
  })
  .openapi('ServiceTemplateVersion')

const CreateServiceTemplateVersionOutputSchema = z
  .object({
    serviceTemplateVersion: ServiceTemplateVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The service template version summary of detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['serviceTemplateVersion'] })
  .openapi('CreateServiceTemplateVersionOutput')

const CompatibleEnvironmentTemplateInputSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The major version of the compatible environment template.' }),
    ),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The compatible environment template name.' }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'templateName'],
    description: 'Compatible environment template data.',
  })
  .openapi('CompatibleEnvironmentTemplateInput')

const CompatibleEnvironmentTemplateInputListSchema = z
  .array(CompatibleEnvironmentTemplateInputSchema)
  .min(1)
  .max(10)
  .openapi('CompatibleEnvironmentTemplateInputList')

const CreateServiceTemplateVersionInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When included, if two identical requests are made with the same client token, Proton returns the service template version that the first request created.',
        }),
    ).exactOptional(),
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of environment template objects that are compatible with the new service template version. A service instance based on this service template version can run in environments based on compatible templates.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the new version of a service template.' }),
    ).exactOptional(),
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To create a new minor version of the service template, include a <code>major Version</code>.</p> <p>To create a new major and minor version of the service template, <i>exclude</i> <code>major Version</code>.</p>',
        }),
    ).exactOptional(),
    source: TemplateVersionSourceInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that includes the template bundle S3 bucket path and name for the new version of a service template.',
        }),
    ),
    supportedComponentSources: ServiceTemplateSupportedComponentSourceInputListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of supported component sources. Components with supported sources can be attached to service instances based on this service template version.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of metadata items that you can associate with the Proton service template version. A tag is a key-value pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
  })
  .openapi({
    required: ['compatibleEnvironmentTemplates', 'source', 'templateName'],
    title: 'CreateServiceTemplateVersionInput',
  })
  .openapi('CreateServiceTemplateVersionInput')

const SubdirectorySchema = z.string().min(1).max(4096).openapi('Subdirectory')

const TemplateTypeSchema = z.enum(['ENVIRONMENT', 'SERVICE']).openapi('TemplateType')

const TemplateSyncConfigSchema = z
  .object({
    branch: GitBranchNameSchema.and(z.any().openapi({ description: 'The repository branch.' })),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The repository name (for example, <code>myrepos/myrepo</code>).',
        }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
    subdirectory: SubdirectorySchema.and(
      z.any().openapi({ description: 'A subdirectory path to your template bundle version.' }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(z.any().openapi({ description: 'The template name.' })),
    templateType: TemplateTypeSchema.and(z.any().openapi({ description: 'The template type.' })),
  })
  .openapi({
    required: ['branch', 'repositoryName', 'repositoryProvider', 'templateName', 'templateType'],
    description: 'The detail data for a template sync configuration.',
  })
  .openapi('TemplateSyncConfig')

const CreateTemplateSyncConfigOutputSchema = z
  .object({
    templateSyncConfig: TemplateSyncConfigSchema.and(
      z
        .any()
        .openapi({
          description: "The template sync configuration detail data that's returned by Proton.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTemplateSyncConfigOutput')

const CreateTemplateSyncConfigInputSchema = z
  .object({
    branch: GitBranchNameSchema.and(
      z.any().openapi({ description: 'The repository branch for your template.' }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The repository name (for example, <code>myrepos/myrepo</code>).',
        }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The provider type for your repository.' }),
    ),
    subdirectory: SubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'A repository subdirectory path to your template bundle directory. When included, Proton limits the template bundle search to this repository directory.',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of your registered template.' }),
    ),
    templateType: TemplateTypeSchema.and(
      z.any().openapi({ description: 'The type of the registered template.' }),
    ),
  })
  .openapi({
    required: ['branch', 'repositoryName', 'repositoryProvider', 'templateName', 'templateType'],
    title: 'CreateTemplateSyncConfigInput',
  })
  .openapi('CreateTemplateSyncConfigInput')

const DeleteComponentOutputSchema = z
  .object({
    component: ComponentSchema.and(
      z.any().openapi({ description: 'The detailed data of the component being deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteComponentOutput')

const DeleteComponentInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the component to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteComponentInput' })
  .openapi('DeleteComponentInput')

const DeleteEnvironmentOutputSchema = z
  .object({
    environment: EnvironmentSchema.and(
      z.any().openapi({ description: 'The detailed data of the environment being deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteEnvironmentOutput')

const DeleteEnvironmentInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteEnvironmentInput' })
  .openapi('DeleteEnvironmentInput')

const DeleteEnvironmentAccountConnectionOutputSchema = z
  .object({
    environmentAccountConnection: EnvironmentAccountConnectionSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data of the environment account connection being deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteEnvironmentAccountConnectionOutput')

const DeleteEnvironmentAccountConnectionInputSchema = z
  .object({
    id: EnvironmentAccountConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment account connection to delete.' }),
    ),
  })
  .openapi({ required: ['id'], title: 'DeleteEnvironmentAccountConnectionInput' })
  .openapi('DeleteEnvironmentAccountConnectionInput')

const DeleteEnvironmentTemplateOutputSchema = z
  .object({
    environmentTemplate: EnvironmentTemplateSchema.and(
      z
        .any()
        .openapi({ description: 'The detailed data of the environment template being deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteEnvironmentTemplateOutput')

const DeleteEnvironmentTemplateInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteEnvironmentTemplateInput' })
  .openapi('DeleteEnvironmentTemplateInput')

const DeleteEnvironmentTemplateVersionOutputSchema = z
  .object({
    environmentTemplateVersion: EnvironmentTemplateVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data of the environment template version being deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteEnvironmentTemplateVersionOutput')

const DeleteEnvironmentTemplateVersionInputSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The environment template major version to delete.' }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The environment template minor version to delete.' }),
    ),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'minorVersion', 'templateName'],
    title: 'DeleteEnvironmentTemplateVersionInput',
  })
  .openapi('DeleteEnvironmentTemplateVersionInput')

const DeleteRepositoryOutputSchema = z
  .object({
    repository: RepositorySchema.and(
      z
        .any()
        .openapi({
          description: "The deleted repository link's detail data that's returned by Proton.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRepositoryOutput')

const DeleteRepositoryInputSchema = z
  .object({
    name: RepositoryNameSchema.and(z.any().openapi({ description: 'The repository name.' })),
    provider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
  })
  .openapi({ required: ['name', 'provider'], title: 'DeleteRepositoryInput' })
  .openapi('DeleteRepositoryInput')

const DeleteServiceOutputSchema = z
  .object({
    service: ServiceSchema.and(
      z.any().openapi({ description: 'The detailed data of the service being deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteServiceOutput')

const DeleteServiceInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteServiceInput' })
  .openapi('DeleteServiceInput')

const DeleteServiceSyncConfigOutputSchema = z
  .object({
    serviceSyncConfig: ServiceSyncConfigSchema.and(
      z.any().openapi({ description: 'The detailed data for the service sync config.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteServiceSyncConfigOutput')

const DeleteServiceSyncConfigInputSchema = z
  .object({
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that you want to delete the service sync configuration for.',
        }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'DeleteServiceSyncConfigInput' })
  .openapi('DeleteServiceSyncConfigInput')

const DeleteServiceTemplateOutputSchema = z
  .object({
    serviceTemplate: ServiceTemplateSchema.and(
      z.any().openapi({ description: 'The detailed data of the service template being deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteServiceTemplateOutput')

const DeleteServiceTemplateInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteServiceTemplateInput' })
  .openapi('DeleteServiceTemplateInput')

const DeleteServiceTemplateVersionOutputSchema = z
  .object({
    serviceTemplateVersion: ServiceTemplateVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data of the service template version being deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteServiceTemplateVersionOutput')

const DeleteServiceTemplateVersionInputSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The service template major version to delete.' }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The service template minor version to delete.' }),
    ),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'minorVersion', 'templateName'],
    title: 'DeleteServiceTemplateVersionInput',
  })
  .openapi('DeleteServiceTemplateVersionInput')

const DeleteTemplateSyncConfigOutputSchema = z
  .object({
    templateSyncConfig: TemplateSyncConfigSchema.and(
      z
        .any()
        .openapi({
          description: "The template sync configuration detail data that's returned by Proton.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteTemplateSyncConfigOutput')

const DeleteTemplateSyncConfigInputSchema = z
  .object({
    templateName: ResourceNameSchema.and(z.any().openapi({ description: 'The template name.' })),
    templateType: TemplateTypeSchema.and(z.any().openapi({ description: 'The template type.' })),
  })
  .openapi({ required: ['templateName', 'templateType'], title: 'DeleteTemplateSyncConfigInput' })
  .openapi('DeleteTemplateSyncConfigInput')

const RoleArnOrEmptyStringSchema = z
  .string()
  .regex(
    /(^$)|(^arn:(aws|aws-cn|aws-us-gov):iam::\d{12}:role\/([\w+=,.@-]{1,512}[\/:])*([\w+=,.@-]{1,64})$)/,
  )
  .min(0)
  .max(2048)
  .openapi('RoleArnOrEmptyString')

const AccountSettingsSchema = z
  .object({
    pipelineCodebuildRoleArn: RoleArnOrEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the service role that Proton uses for provisioning pipelines. Proton assumes this role for CodeBuild-based provisioning.',
        }),
    ).exactOptional(),
    pipelineProvisioningRepository: RepositoryBranchSchema.and(
      z
        .any()
        .openapi({
          description:
            'The linked repository for pipeline provisioning. Required if you have environments configured for self-managed provisioning with services that include pipelines. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.',
        }),
    ).exactOptional(),
    pipelineServiceRoleArn: RoleArnOrEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by customer-owned automation for self-managed provisioning.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Proton settings that are used for multiple services in the Amazon Web Services account.',
    required: [],
  })
  .openapi('AccountSettings')

const GetAccountSettingsOutputSchema = z
  .object({
    accountSettings: AccountSettingsSchema.and(
      z
        .any()
        .openapi({
          description: "The Proton pipeline service role detail data that's returned by Proton.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccountSettingsOutput')

const GetAccountSettingsInputSchema = z
  .object({})
  .openapi({ title: 'GetAccountSettingsInput' })
  .openapi('GetAccountSettingsInput')

const GetComponentOutputSchema = z
  .object({
    component: ComponentSchema.and(
      z.any().openapi({ description: 'The detailed data of the requested component.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetComponentOutput')

const GetComponentInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the component that you want to get the detailed data for.',
        }),
    ),
  })
  .openapi({ required: ['name'], title: 'GetComponentInput' })
  .openapi('GetComponentInput')

const GetEnvironmentOutputSchema = z
  .object({
    environment: EnvironmentSchema.and(
      z.any().openapi({ description: 'The detailed data of the requested environment.' }),
    ),
  })
  .openapi({ required: ['environment'] })
  .openapi('GetEnvironmentOutput')

const GetEnvironmentInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the environment that you want to get the detailed data for.',
        }),
    ),
  })
  .openapi({ required: ['name'], title: 'GetEnvironmentInput' })
  .openapi('GetEnvironmentInput')

const GetEnvironmentAccountConnectionOutputSchema = z
  .object({
    environmentAccountConnection: EnvironmentAccountConnectionSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data of the requested environment account connection.',
        }),
    ),
  })
  .openapi({ required: ['environmentAccountConnection'] })
  .openapi('GetEnvironmentAccountConnectionOutput')

const GetEnvironmentAccountConnectionInputSchema = z
  .object({
    id: EnvironmentAccountConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the environment account connection that you want to get the detailed data for.',
        }),
    ),
  })
  .openapi({ required: ['id'], title: 'GetEnvironmentAccountConnectionInput' })
  .openapi('GetEnvironmentAccountConnectionInput')

const GetEnvironmentTemplateOutputSchema = z
  .object({
    environmentTemplate: EnvironmentTemplateSchema.and(
      z.any().openapi({ description: 'The detailed data of the requested environment template.' }),
    ),
  })
  .openapi({ required: ['environmentTemplate'] })
  .openapi('GetEnvironmentTemplateOutput')

const GetEnvironmentTemplateInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the environment template that you want to get the detailed data for.',
        }),
    ),
  })
  .openapi({ required: ['name'], title: 'GetEnvironmentTemplateInput' })
  .openapi('GetEnvironmentTemplateInput')

const GetEnvironmentTemplateVersionOutputSchema = z
  .object({
    environmentTemplateVersion: EnvironmentTemplateVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data of the requested environment template version.',
        }),
    ),
  })
  .openapi({ required: ['environmentTemplateVersion'] })
  .openapi('GetEnvironmentTemplateVersionOutput')

const GetEnvironmentTemplateVersionInputSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To get environment template major version detail data, include <code>major Version</code>.',
        }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To get environment template minor version detail data, include <code>minorVersion</code>.',
        }),
    ),
    templateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the environment template a version of which you want to get detailed data for.',
        }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'minorVersion', 'templateName'],
    title: 'GetEnvironmentTemplateVersionInput',
  })
  .openapi('GetEnvironmentTemplateVersionInput')

const GetRepositoryOutputSchema = z
  .object({
    repository: RepositorySchema.and(
      z
        .any()
        .openapi({ description: "The repository link's detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['repository'] })
  .openapi('GetRepositoryOutput')

const GetRepositoryInputSchema = z
  .object({
    name: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The repository name, for example <code>myrepos/myrepo</code>.' }),
    ),
    provider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
  })
  .openapi({ required: ['name', 'provider'], title: 'GetRepositoryInput' })
  .openapi('GetRepositoryInput')

const RepositorySyncEventSchema = z
  .object({
    event: StringSchema.and(
      z.any().openapi({ description: 'Event detail for a repository sync attempt.' }),
    ),
    externalId: StringSchema.and(
      z.any().openapi({ description: 'The external ID of the sync event.' }),
    ).exactOptional(),
    time: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the sync event occurred.' }),
    ),
    type: StringSchema.and(z.any().openapi({ description: 'The type of event.' })),
  })
  .openapi({
    required: ['event', 'time', 'type'],
    description: 'Repository sync event detail data for a sync attempt.',
  })
  .openapi('RepositorySyncEvent')

const RepositorySyncEventsSchema = z
  .array(RepositorySyncEventSchema)
  .openapi('RepositorySyncEvents')

const RepositorySyncStatusSchema = z
  .enum(['INITIATED', 'IN_PROGRESS', 'SUCCEEDED', 'FAILED', 'QUEUED'])
  .openapi('RepositorySyncStatus')

const RepositorySyncAttemptSchema = z
  .object({
    events: RepositorySyncEventsSchema.and(
      z.any().openapi({ description: 'Detail data for sync attempt events.' }),
    ),
    startedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the sync attempt started.' }),
    ),
    status: RepositorySyncStatusSchema.and(
      z.any().openapi({ description: 'The sync attempt status.' }),
    ),
  })
  .openapi({
    required: ['events', 'startedAt', 'status'],
    description: 'Detail data for a repository sync attempt activated by a push to a repository.',
  })
  .openapi('RepositorySyncAttempt')

const GetRepositorySyncStatusOutputSchema = z
  .object({
    latestSync: RepositorySyncAttemptSchema.and(
      z
        .any()
        .openapi({
          description: "The repository sync status detail data that's returned by Proton.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRepositorySyncStatusOutput')

const SyncTypeSchema = z.enum(['TEMPLATE_SYNC', 'SERVICE_SYNC']).openapi('SyncType')

const GetRepositorySyncStatusInputSchema = z
  .object({
    branch: GitBranchNameSchema.and(z.any().openapi({ description: 'The repository branch.' })),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name.' }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
    syncType: SyncTypeSchema.and(z.any().openapi({ description: 'The repository sync type.' })),
  })
  .openapi({
    required: ['branch', 'repositoryName', 'repositoryProvider', 'syncType'],
    title: 'GetRepositorySyncStatusInput',
  })
  .openapi('GetRepositorySyncStatusInput')

const CountsSummarySchema: z.ZodType<CountsSummaryType> = z
  .lazy(() =>
    z
      .object({
        components: ResourceCountsSummarySchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>The total number of components in the Amazon Web Services account.</p> <p>The semantics of the <code>components</code> field are different from the semantics of results for other infrastructure-provisioning resources. That's because at this time components don't have associated templates, therefore they don't have the concept of staleness. The <code>components</code> object will only contain <code>total</code> and <code>failed</code> members.</p>",
            }),
        ).exactOptional(),
        environmentTemplates: ResourceCountsSummarySchema.and(
          z
            .any()
            .openapi({
              description:
                'The total number of environment templates in the Amazon Web Services account. The <code>environmentTemplates</code> object will only contain <code>total</code> members.',
            }),
        ).exactOptional(),
        environments: ResourceCountsSummarySchema.and(
          z
            .any()
            .openapi({
              description:
                'The staleness counts for Proton environments in the Amazon Web Services account. The <code>environments</code> object will only contain <code>total</code> members.',
            }),
        ).exactOptional(),
        pipelines: ResourceCountsSummarySchema.and(
          z
            .any()
            .openapi({
              description:
                'The staleness counts for Proton pipelines in the Amazon Web Services account.',
            }),
        ).exactOptional(),
        serviceInstances: ResourceCountsSummarySchema.and(
          z
            .any()
            .openapi({
              description:
                'The staleness counts for Proton service instances in the Amazon Web Services account.',
            }),
        ).exactOptional(),
        serviceTemplates: ResourceCountsSummarySchema.and(
          z
            .any()
            .openapi({
              description:
                'The total number of service templates in the Amazon Web Services account. The <code>serviceTemplates</code> object will only contain <code>total</code> members.',
            }),
        ).exactOptional(),
        services: ResourceCountsSummarySchema.and(
          z
            .any()
            .openapi({
              description:
                'The staleness counts for Proton services in the Amazon Web Services account.',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'Summary counts of each Proton resource type.', required: [] }),
  )
  .openapi('CountsSummary')

const GetResourcesSummaryOutputSchema = z
  .object({
    counts: CountsSummarySchema.and(
      z.any().openapi({ description: 'Summary counts of each Proton resource type.' }),
    ),
  })
  .openapi({ required: ['counts'] })
  .openapi('GetResourcesSummaryOutput')

const GetResourcesSummaryInputSchema = z
  .object({})
  .openapi({ title: 'GetResourcesSummaryInput' })
  .openapi('GetResourcesSummaryInput')

const GetServiceOutputSchema = z
  .object({
    service: ServiceSchema.and(
      z.any().openapi({ description: 'The detailed data of the requested service.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceOutput')

const GetServiceInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service that you want to get the detailed data for.',
        }),
    ),
  })
  .openapi({ required: ['name'], title: 'GetServiceInput' })
  .openapi('GetServiceInput')

const GetServiceInstanceOutputSchema = z
  .object({
    serviceInstance: ServiceInstanceSchema.and(
      z.any().openapi({ description: 'The detailed data of the requested service instance.' }),
    ),
  })
  .openapi({ required: ['serviceInstance'] })
  .openapi('GetServiceInstanceOutput')

const GetServiceInstanceInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a service instance that you want to get the detailed data for.',
        }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service that you want the service instance input for.',
        }),
    ),
  })
  .openapi({ required: ['name', 'serviceName'], title: 'GetServiceInstanceInput' })
  .openapi('GetServiceInstanceInput')

const SHASchema = z.string().min(1).max(255).openapi('SHA')

const RevisionSchema = z
  .object({
    branch: GitBranchNameSchema.and(z.any().openapi({ description: 'The repository branch.' })),
    directory: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The repository directory changed by a commit and push that activated the sync attempt.',
        }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name.' }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
    sha: SHASchema.and(
      z.any().openapi({ description: 'The secure hash algorithm (SHA) hash for the revision.' }),
    ),
  })
  .openapi({
    required: ['branch', 'directory', 'repositoryName', 'repositoryProvider', 'sha'],
    description: 'Revision detail data for a commit and push that activates a sync attempt',
  })
  .openapi('Revision')

const ResourceSyncEventSchema = z
  .object({
    event: StringSchema.and(z.any().openapi({ description: 'A resource sync event.' })),
    externalId: StringSchema.and(
      z.any().openapi({ description: 'The external ID for the event.' }),
    ).exactOptional(),
    time: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the event occurred.' }),
    ),
    type: StringSchema.and(z.any().openapi({ description: 'The type of event.' })),
  })
  .openapi({
    required: ['event', 'time', 'type'],
    description: 'Detail data for a resource sync event.',
  })
  .openapi('ResourceSyncEvent')

const ResourceSyncEventsSchema = z.array(ResourceSyncEventSchema).openapi('ResourceSyncEvents')

const ResourceSyncStatusSchema = z
  .enum(['INITIATED', 'IN_PROGRESS', 'SUCCEEDED', 'FAILED'])
  .openapi('ResourceSyncStatus')

const ResourceSyncAttemptSchema = z
  .object({
    events: ResourceSyncEventsSchema.and(
      z.any().openapi({ description: 'An array of events with detail data.' }),
    ),
    initialRevision: RevisionSchema.and(
      z
        .any()
        .openapi({ description: 'Detail data for the initial repository commit, path and push.' }),
    ),
    startedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the sync attempt started.' }),
    ),
    status: ResourceSyncStatusSchema.and(
      z.any().openapi({ description: 'The status of the sync attempt.' }),
    ),
    target: StringSchema.and(z.any().openapi({ description: 'The resource that is synced to.' })),
    targetRevision: RevisionSchema.and(
      z.any().openapi({ description: 'Detail data for the target revision.' }),
    ),
  })
  .openapi({
    required: ['events', 'initialRevision', 'startedAt', 'status', 'target', 'targetRevision'],
    description: 'Detail data for a resource sync attempt activated by a push to a repository.',
  })
  .openapi('ResourceSyncAttempt')

const GetServiceInstanceSyncStatusOutputSchema = z
  .object({
    desiredState: RevisionSchema.and(
      z
        .any()
        .openapi({
          description: "The service instance sync desired state that's returned by Proton",
        }),
    ).exactOptional(),
    latestSuccessfulSync: ResourceSyncAttemptSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data of the latest successful sync with the service instance.',
        }),
    ).exactOptional(),
    latestSync: ResourceSyncAttemptSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data of the latest sync with the service instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceInstanceSyncStatusOutput')

const GetServiceInstanceSyncStatusInputSchema = z
  .object({
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service instance that you want the sync status input for.',
        }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service that the service instance belongs to.' }),
    ),
  })
  .openapi({
    required: ['serviceInstanceName', 'serviceName'],
    title: 'GetServiceInstanceSyncStatusInput',
  })
  .openapi('GetServiceInstanceSyncStatusInput')

const SyncBlockerContextSchema = z
  .object({
    key: StringSchema.and(
      z.any().openapi({ description: 'The key for the sync blocker context.' }),
    ),
    value: StringSchema.and(
      z.any().openapi({ description: 'The value of the sync blocker context.' }),
    ),
  })
  .openapi({
    required: ['key', 'value'],
    description: 'Detailed data of the context of the sync blocker.',
  })
  .openapi('SyncBlockerContext')

const SyncBlockerContextsSchema = z.array(SyncBlockerContextSchema).openapi('SyncBlockerContexts')

const BlockerStatusSchema = z.enum(['ACTIVE', 'RESOLVED']).openapi('BlockerStatus')

const BlockerTypeSchema = z.literal('AUTOMATED').openapi('BlockerType')

const SyncBlockerSchema = z
  .object({
    contexts: SyncBlockerContextsSchema.and(
      z.any().openapi({ description: 'The contexts for the sync blocker.' }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the sync blocker was created.' }),
    ),
    createdReason: StringSchema.and(
      z.any().openapi({ description: 'The reason why the sync blocker was created.' }),
    ),
    id: StringSchema.and(z.any().openapi({ description: 'The ID of the sync blocker.' })),
    resolvedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time the sync blocker was resolved.' }),
    ).exactOptional(),
    resolvedReason: StringSchema.and(
      z.any().openapi({ description: 'The reason the sync blocker was resolved.' }),
    ).exactOptional(),
    status: BlockerStatusSchema.and(
      z.any().openapi({ description: 'The status of the sync blocker.' }),
    ),
    type: BlockerTypeSchema.and(z.any().openapi({ description: 'The type of the sync blocker.' })),
  })
  .openapi({
    required: ['createdAt', 'createdReason', 'id', 'status', 'type'],
    description: 'Detailed data of the sync blocker.',
  })
  .openapi('SyncBlocker')

const LatestSyncBlockersSchema = z.array(SyncBlockerSchema).openapi('LatestSyncBlockers')

const ServiceSyncBlockerSummarySchema = z
  .object({
    latestBlockers: LatestSyncBlockersSchema.and(
      z.any().openapi({ description: 'The latest active blockers for the synced service.' }),
    ).exactOptional(),
    serviceInstanceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service instance that you want sync your service configuration with.',
        }),
    ).exactOptional(),
    serviceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the service that you want to get the sync blocker summary for. If given a service instance name and a service name, it will return the blockers only applying to the instance that is blocked.</p> <p>If given only a service name, it will return the blockers that apply to all of the instances. In order to get the blockers for a single instance, you will need to make two distinct calls, one to get the sync blocker summary for the service and the other to get the sync blocker for the service instance.</p>',
        }),
    ),
  })
  .openapi({
    required: ['serviceName'],
    description:
      '<p>If a service instance is manually updated, Proton wants to prevent accidentally overriding a manual change.</p> <p>A blocker is created because of the manual update or deletion of a service instance. The summary describes the blocker as being active or resolved.</p>',
  })
  .openapi('ServiceSyncBlockerSummary')

const GetServiceSyncBlockerSummaryOutputSchema = z
  .object({
    serviceSyncBlockerSummary: ServiceSyncBlockerSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data of the requested service sync blocker summary.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceSyncBlockerSummaryOutput')

const GetServiceSyncBlockerSummaryInputSchema = z
  .object({
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service instance that you want to get the service sync blocker summary for. If given bothe the instance name and the service name, only the instance is blocked.',
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that you want to get the service sync blocker summary for. If given only the service name, all instances are blocked.',
        }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'GetServiceSyncBlockerSummaryInput' })
  .openapi('GetServiceSyncBlockerSummaryInput')

const GetServiceSyncConfigOutputSchema = z
  .object({
    serviceSyncConfig: ServiceSyncConfigSchema.and(
      z
        .any()
        .openapi({ description: 'The detailed data of the requested service sync configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceSyncConfigOutput')

const GetServiceSyncConfigInputSchema = z
  .object({
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that you want to get the service sync configuration for.',
        }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'GetServiceSyncConfigInput' })
  .openapi('GetServiceSyncConfigInput')

const GetServiceTemplateOutputSchema = z
  .object({
    serviceTemplate: ServiceTemplateSchema.and(
      z.any().openapi({ description: 'The detailed data of the requested service template.' }),
    ),
  })
  .openapi({ required: ['serviceTemplate'] })
  .openapi('GetServiceTemplateOutput')

const GetServiceTemplateInputSchema = z
  .object({
    name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service template that you want to get detailed data for.',
        }),
    ),
  })
  .openapi({ required: ['name'], title: 'GetServiceTemplateInput' })
  .openapi('GetServiceTemplateInput')

const GetServiceTemplateVersionOutputSchema = z
  .object({
    serviceTemplateVersion: ServiceTemplateVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The detailed data of the requested service template version.' }),
    ),
  })
  .openapi({ required: ['serviceTemplateVersion'] })
  .openapi('GetServiceTemplateVersionOutput')

const GetServiceTemplateVersionInputSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To get service template major version detail data, include <code>major Version</code>.',
        }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To get service template minor version detail data, include <code>minorVersion</code>.',
        }),
    ),
    templateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service template a version of which you want to get detailed data for.',
        }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'minorVersion', 'templateName'],
    title: 'GetServiceTemplateVersionInput',
  })
  .openapi('GetServiceTemplateVersionInput')

const GetTemplateSyncConfigOutputSchema = z
  .object({
    templateSyncConfig: TemplateSyncConfigSchema.and(
      z
        .any()
        .openapi({
          description: "The template sync configuration detail data that's returned by Proton.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTemplateSyncConfigOutput')

const GetTemplateSyncConfigInputSchema = z
  .object({
    templateName: ResourceNameSchema.and(z.any().openapi({ description: 'The template name.' })),
    templateType: TemplateTypeSchema.and(z.any().openapi({ description: 'The template type.' })),
  })
  .openapi({ required: ['templateName', 'templateType'], title: 'GetTemplateSyncConfigInput' })
  .openapi('GetTemplateSyncConfigInput')

const GetTemplateSyncStatusOutputSchema = z
  .object({
    desiredState: RevisionSchema.and(
      z
        .any()
        .openapi({ description: "The template sync desired state that's returned by Proton." }),
    ).exactOptional(),
    latestSuccessfulSync: ResourceSyncAttemptSchema.and(
      z
        .any()
        .openapi({
          description: "The details of the last successful sync that's returned by Proton.",
        }),
    ).exactOptional(),
    latestSync: ResourceSyncAttemptSchema.and(
      z.any().openapi({ description: "The details of the last sync that's returned by Proton." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTemplateSyncStatusOutput')

const GetTemplateSyncStatusInputSchema = z
  .object({
    templateName: ResourceNameSchema.and(z.any().openapi({ description: 'The template name.' })),
    templateType: TemplateTypeSchema.and(z.any().openapi({ description: 'The template type.' })),
    templateVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The template major version.' }),
    ),
  })
  .openapi({
    required: ['templateName', 'templateType', 'templateVersion'],
    title: 'GetTemplateSyncStatusInput',
  })
  .openapi('GetTemplateSyncStatusInput')

const EmptyNextTokenSchema = z.string().length(0).openapi('EmptyNextToken')

const OutputKeySchema = z.string().min(1).max(1024).openapi('OutputKey')

const OutputValueStringSchema = z.string().min(1).max(1024).openapi('OutputValueString')

const OutputSchema = z
  .object({
    key: OutputKeySchema.and(z.any().openapi({ description: 'The output key.' })).exactOptional(),
    valueString: OutputValueStringSchema.and(
      z.any().openapi({ description: 'The output value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An infrastructure as code defined resource output.', required: [] })
  .openapi('Output')

const OutputsListSchema = z.array(OutputSchema).openapi('OutputsList')

const ListComponentOutputsOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.',
        }),
    ).exactOptional(),
    outputs: OutputsListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of component Infrastructure as Code (IaC) outputs.' }),
    ),
  })
  .openapi({ required: ['outputs'] })
  .openapi('ListComponentOutputsOutput')

const ListComponentOutputsInputSchema = z
  .object({
    componentName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the component whose outputs you want.' }),
    ),
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['componentName'], title: 'ListComponentOutputsInput' })
  .openapi('ListComponentOutputsInput')

const ProvisionedResourceIdentifierSchema = z
  .string()
  .min(1)
  .max(200)
  .openapi('ProvisionedResourceIdentifier')

const ProvisionedResourceNameSchema = z.string().min(1).max(200).openapi('ProvisionedResourceName')

const ProvisionedResourceEngineSchema = z
  .enum(['CLOUDFORMATION', 'TERRAFORM'])
  .openapi({ description: 'List of provisioning engines' })
  .openapi('ProvisionedResourceEngine')

const ProvisionedResourceSchema = z
  .object({
    identifier: ProvisionedResourceIdentifierSchema.and(
      z.any().openapi({ description: 'The provisioned resource identifier.' }),
    ).exactOptional(),
    name: ProvisionedResourceNameSchema.and(
      z.any().openapi({ description: 'The provisioned resource name.' }),
    ).exactOptional(),
    provisioningEngine: ProvisionedResourceEngineSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource provisioning engine. At this time, <code>CLOUDFORMATION</code> can be used for Amazon Web Services-managed provisioning, and <code>TERRAFORM</code> can be used for self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detail data for a provisioned resource.', required: [] })
  .openapi('ProvisionedResource')

const ProvisionedResourceListSchema = z
  .array(ProvisionedResourceSchema)
  .openapi('ProvisionedResourceList')

const ListComponentProvisionedResourcesOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of provisioned resources.',
        }),
    ).exactOptional(),
    provisionedResources: ProvisionedResourceListSchema.and(
      z.any().openapi({ description: 'An array of provisioned resources for a component.' }),
    ),
  })
  .openapi({ required: ['provisionedResources'] })
  .openapi('ListComponentProvisionedResourcesOutput')

const ListComponentProvisionedResourcesInputSchema = z
  .object({
    componentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the component whose provisioned resources you want.',
        }),
    ),
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources that was previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['componentName'], title: 'ListComponentProvisionedResourcesInput' })
  .openapi('ListComponentProvisionedResourcesInput')

const ComponentSummarySchema = z
  .object({
    arn: ComponentArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the component.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the component was created.' }),
    ),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The component deployment status.' }),
    ),
    deploymentStatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({ description: 'The message associated with the component deployment status.' }),
    ).exactOptional(),
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Proton environment that this component is associated with.',
        }),
    ),
    lastDeploymentAttemptedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when a deployment of the component was last attempted.',
        }),
    ).exactOptional(),
    lastDeploymentSucceededAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the component was last deployed successfully.' }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the component was last modified.' }),
    ),
    name: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the component.' })),
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.',
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'createdAt', 'deploymentStatus', 'environmentName', 'lastModifiedAt', 'name'],
    description:
      '<p>Summary data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  })
  .openapi('ComponentSummary')

const ComponentSummaryListSchema = z.array(ComponentSummarySchema).openapi('ComponentSummaryList')

const NextTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9+=\/]+$/)
  .openapi('NextToken')

const ListComponentsOutputSchema = z
  .object({
    components: ComponentSummaryListSchema.and(
      z.any().openapi({ description: 'An array of components with summary data.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next component in the array of components, after the current requested list of components.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['components'] })
  .openapi('ListComponentsOutput')

const MaxPageResultsSchema = z.int().min(1).max(100).openapi('MaxPageResults')

const ListComponentsInputSchema = z
  .object({
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an environment for result list filtering. Proton returns components associated with the environment or attached to service instances running in it.',
        }),
    ).exactOptional(),
    maxResults: MaxPageResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of components to list.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next component in the array of components, after the list of components that was previously requested.',
        }),
    ).exactOptional(),
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a service instance for result list filtering. Proton returns the component attached to the service instance, if any.',
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a service for result list filtering. Proton returns components attached to service instances of the service.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListComponentsInput', required: [] })
  .openapi('ListComponentsInput')

const EnvironmentAccountConnectionSummarySchema = z
  .object({
    arn: EnvironmentAccountConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the environment account connection.',
        }),
    ),
    componentRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.</p> <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any environments running in the account.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    environmentAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the environment account that's connected to the environment account connection.",
        }),
    ),
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the environment that's associated with the environment account connection.",
        }),
    ),
    id: EnvironmentAccountConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment account connection.' }),
    ),
    lastModifiedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the environment account connection was last modified.',
        }),
    ),
    managementAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the management account that's connected to the environment account connection.",
        }),
    ),
    requestedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the environment account connection request was made.',
        }),
    ),
    roleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The IAM service role that's associated with the environment account connection.",
        }),
    ),
    status: EnvironmentAccountConnectionStatusSchema.and(
      z.any().openapi({ description: 'The status of the environment account connection.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'environmentAccountId',
      'environmentName',
      'id',
      'lastModifiedAt',
      'managementAccountId',
      'requestedAt',
      'roleArn',
      'status',
    ],
    description: 'Summary data of an Proton environment account connection resource.',
  })
  .openapi('EnvironmentAccountConnectionSummary')

const EnvironmentAccountConnectionSummaryListSchema = z
  .array(EnvironmentAccountConnectionSummarySchema)
  .openapi('EnvironmentAccountConnectionSummaryList')

const ListEnvironmentAccountConnectionsOutputSchema = z
  .object({
    environmentAccountConnections: EnvironmentAccountConnectionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of environment account connections with details that's returned by Proton. ",
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment account connection in the array of environment account connections, after the current requested list of environment account connections.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['environmentAccountConnections'] })
  .openapi('ListEnvironmentAccountConnectionsOutput')

const EnvironmentAccountConnectionRequesterAccountTypeSchema = z
  .enum(['MANAGEMENT_ACCOUNT', 'ENVIRONMENT_ACCOUNT'])
  .openapi('EnvironmentAccountConnectionRequesterAccountType')

const EnvironmentAccountConnectionStatusListSchema = z
  .array(EnvironmentAccountConnectionStatusSchema)
  .openapi('EnvironmentAccountConnectionStatusList')

const ListEnvironmentAccountConnectionsInputSchema = z
  .object({
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The environment name that's associated with each listed environment account connection.",
        }),
    ).exactOptional(),
    maxResults: MaxPageResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of environment account connections to list.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment account connection in the array of environment account connections, after the list of environment account connections that was previously requested.',
        }),
    ).exactOptional(),
    requestedBy: EnvironmentAccountConnectionRequesterAccountTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of account making the <code>ListEnvironmentAccountConnections</code> request.',
        }),
    ),
    statuses: EnvironmentAccountConnectionStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'The status details for each listed environment account connection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['requestedBy'], title: 'ListEnvironmentAccountConnectionsInput' })
  .openapi('ListEnvironmentAccountConnectionsInput')

const ListEnvironmentOutputsOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment output in the array of environment outputs, after the current requested list of environment outputs.',
        }),
    ).exactOptional(),
    outputs: OutputsListSchema.and(
      z.any().openapi({ description: 'An array of environment outputs with detail data.' }),
    ),
  })
  .openapi({ required: ['outputs'] })
  .openapi('ListEnvironmentOutputsOutput')

const ListEnvironmentOutputsInputSchema = z
  .object({
    environmentName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The environment name.' }),
    ),
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment output in the array of environment outputs, after the list of environment outputs that was previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['environmentName'], title: 'ListEnvironmentOutputsInput' })
  .openapi('ListEnvironmentOutputsInput')

const ListEnvironmentProvisionedResourcesOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment provisioned resource in the array of provisioned resources, after the current requested list of environment provisioned resources.',
        }),
    ).exactOptional(),
    provisionedResources: ProvisionedResourceListSchema.and(
      z.any().openapi({ description: 'An array of environment provisioned resources.' }),
    ),
  })
  .openapi({ required: ['provisionedResources'] })
  .openapi('ListEnvironmentProvisionedResourcesOutput')

const ListEnvironmentProvisionedResourcesInputSchema = z
  .object({
    environmentName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The environment name.' }),
    ),
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment provisioned resource in the array of environment provisioned resources, after the list of environment provisioned resources that was previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['environmentName'], title: 'ListEnvironmentProvisionedResourcesInput' })
  .openapi('ListEnvironmentProvisionedResourcesInput')

const EnvironmentTemplateVersionSummarySchema = z
  .object({
    arn: EnvironmentTemplateVersionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the version of an environment template.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the version of an environment template was created.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the version of an environment template.' }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the version of an environment template was last modified.',
        }),
    ),
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            "The latest major version that's associated with the version of an environment template.",
        }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The version of an environment template.' }),
    ),
    recommendedMinorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({ description: 'The recommended minor version of the environment template.' }),
    ).exactOptional(),
    status: TemplateVersionStatusSchema.and(
      z.any().openapi({ description: 'The status of the version of an environment template.' }),
    ),
    statusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({ description: 'The status message of the version of an environment template.' }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastModifiedAt',
      'majorVersion',
      'minorVersion',
      'status',
      'templateName',
    ],
    description: 'A summary of the version of an environment template detail data.',
  })
  .openapi('EnvironmentTemplateVersionSummary')

const EnvironmentTemplateVersionSummaryListSchema = z
  .array(EnvironmentTemplateVersionSummarySchema)
  .openapi('EnvironmentTemplateVersionSummaryList')

const ListEnvironmentTemplateVersionsOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the list of major or minor versions that was previously requested.',
        }),
    ).exactOptional(),
    templateVersions: EnvironmentTemplateVersionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of major or minor versions of an environment template detail data.',
        }),
    ),
  })
  .openapi({ required: ['templateVersions'] })
  .openapi('ListEnvironmentTemplateVersionsOutput')

const ListEnvironmentTemplateVersionsInputSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To view a list of minor of versions under a major version of an environment template, include <code>major Version</code>.</p> <p>To view a list of major versions of an environment template, <i>exclude</i> <code>major Version</code>.</p>',
        }),
    ).exactOptional(),
    maxResults: MaxPageResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of major or minor versions of an environment template to list.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the list of major or minor versions that was previously requested.',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
  })
  .openapi({ required: ['templateName'], title: 'ListEnvironmentTemplateVersionsInput' })
  .openapi('ListEnvironmentTemplateVersionsInput')

const EnvironmentTemplateSummarySchema = z
  .object({
    arn: EnvironmentTemplateArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the environment template.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the environment template was created.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the environment template.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the environment template as displayed in the developer interface.',
        }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the environment template was last modified.' }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
    provisioning: ProvisioningSchema.and(
      z
        .any()
        .openapi({
          description:
            'When included, indicates that the environment template is for customer provisioned and managed infrastructure.',
        }),
    ).exactOptional(),
    recommendedVersion: FullTemplateVersionNumberSchema.and(
      z.any().openapi({ description: 'The recommended version of the environment template.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'createdAt', 'lastModifiedAt', 'name'],
    description: 'The environment template data.',
  })
  .openapi('EnvironmentTemplateSummary')

const EnvironmentTemplateSummaryListSchema = z
  .array(EnvironmentTemplateSummarySchema)
  .openapi('EnvironmentTemplateSummaryList')

const ListEnvironmentTemplatesOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment template in the array of environment templates, after the current requested list of environment templates.',
        }),
    ).exactOptional(),
    templates: EnvironmentTemplateSummaryListSchema.and(
      z.any().openapi({ description: 'An array of environment templates with detail data.' }),
    ),
  })
  .openapi({ required: ['templates'] })
  .openapi('ListEnvironmentTemplatesOutput')

const ListEnvironmentTemplatesInputSchema = z
  .object({
    maxResults: MaxPageResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of environment templates to list.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment template in the array of environment templates, after the list of environment templates that was previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEnvironmentTemplatesInput', required: [] })
  .openapi('ListEnvironmentTemplatesInput')

const EnvironmentSummarySchema = z
  .object({
    arn: EnvironmentArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the environment.' }),
    ),
    componentRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision.</p> <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the environment was created.' }),
    ),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The environment deployment status.' }),
    ),
    deploymentStatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'An environment deployment status message.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the environment.' }),
    ).exactOptional(),
    environmentAccountConnectionId: EnvironmentAccountConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the environment account connection that the environment is associated with.',
        }),
    ).exactOptional(),
    environmentAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the environment account that the environment infrastructure resources are provisioned in.',
        }),
    ).exactOptional(),
    lastDeploymentAttemptedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when a deployment of the environment was last attempted.',
        }),
    ),
    lastDeploymentSucceededAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the environment was last deployed successfully.' }),
    ),
    name: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the environment.' })),
    protonServiceRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.',
        }),
    ).exactOptional(),
    provisioning: ProvisioningSchema.and(
      z
        .any()
        .openapi({
          description:
            'When included, indicates that the environment template is for customer provisioned and managed infrastructure.',
        }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The major version of the environment template.' }),
    ),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The minor version of the environment template.' }),
    ),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'deploymentStatus',
      'lastDeploymentAttemptedAt',
      'lastDeploymentSucceededAt',
      'name',
      'templateMajorVersion',
      'templateMinorVersion',
      'templateName',
    ],
    description:
      'Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.',
  })
  .openapi('EnvironmentSummary')

const EnvironmentSummaryListSchema = z
  .array(EnvironmentSummarySchema)
  .openapi('EnvironmentSummaryList')

const ListEnvironmentsOutputSchema = z
  .object({
    environments: EnvironmentSummaryListSchema.and(
      z.any().openapi({ description: 'An array of environment detail data summaries.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment in the array of environments, after the current requested list of environments.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['environments'] })
  .openapi('ListEnvironmentsOutput')

const EnvironmentTemplateFilterSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description: 'Include <code>majorVersion</code> to filter search for a major version.',
        }),
    ),
    templateName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Include <code>templateName</code> to filter search for a template name.',
        }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'templateName'],
    description: 'A search filter for environment templates.',
  })
  .openapi('EnvironmentTemplateFilter')

const EnvironmentTemplateFilterListSchema = z
  .array(EnvironmentTemplateFilterSchema)
  .openapi('EnvironmentTemplateFilterList')

const ListEnvironmentsInputSchema = z
  .object({
    environmentTemplates: EnvironmentTemplateFilterListSchema.and(
      z.any().openapi({ description: 'An array of the versions of the environment template.' }),
    ).exactOptional(),
    maxResults: MaxPageResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of environments to list.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next environment in the array of environments, after the list of environments that was previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEnvironmentsInput', required: [] })
  .openapi('ListEnvironmentsInput')

const RepositorySummarySchema = z
  .object({
    arn: RepositoryArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the linked repository.' }),
    ),
    connectionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the of your connection that connects Proton to your repository.',
        }),
    ),
    name: RepositoryNameSchema.and(z.any().openapi({ description: 'The repository name.' })),
    provider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
  })
  .openapi({
    required: ['arn', 'connectionArn', 'name', 'provider'],
    description:
      'Summary data of a linked repository—a repository that has been registered with Proton.',
  })
  .openapi('RepositorySummary')

const RepositorySummaryListSchema = z
  .array(RepositorySummarySchema)
  .openapi('RepositorySummaryList')

const ListRepositoriesOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next repository in the array of repositories, after the current requested list of repositories. ',
        }),
    ).exactOptional(),
    repositories: RepositorySummaryListSchema.and(
      z.any().openapi({ description: 'An array of repository links.' }),
    ),
  })
  .openapi({ required: ['repositories'] })
  .openapi('ListRepositoriesOutput')

const ListRepositoriesInputSchema = z
  .object({
    maxResults: MaxPageResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of repositories to list.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next repository in the array of repositories, after the list of repositories previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRepositoriesInput', required: [] })
  .openapi('ListRepositoriesInput')

const RepositorySyncDefinitionSchema = z
  .object({
    branch: GitBranchNameSchema.and(z.any().openapi({ description: 'The repository branch.' })),
    directory: StringSchema.and(
      z.any().openapi({ description: 'The directory in the repository.' }),
    ),
    parent: StringSchema.and(z.any().openapi({ description: 'The resource that is synced from.' })),
    target: StringSchema.and(z.any().openapi({ description: 'The resource that is synced to.' })),
  })
  .openapi({
    required: ['branch', 'directory', 'parent', 'target'],
    description: 'A repository sync definition.',
  })
  .openapi('RepositorySyncDefinition')

const RepositorySyncDefinitionListSchema = z
  .array(RepositorySyncDefinitionSchema)
  .openapi('RepositorySyncDefinitionList')

const ListRepositorySyncDefinitionsOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the current requested list of repository sync definitions.',
        }),
    ).exactOptional(),
    syncDefinitions: RepositorySyncDefinitionListSchema.and(
      z.any().openapi({ description: 'An array of repository sync definitions.' }),
    ),
  })
  .openapi({ required: ['syncDefinitions'] })
  .openapi('ListRepositorySyncDefinitionsOutput')

const ListRepositorySyncDefinitionsInputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the list of repository sync definitions previously requested.',
        }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The repository name.' }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
    syncType: SyncTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The sync type. The only supported value is <code>TEMPLATE_SYNC</code>.',
        }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'repositoryProvider', 'syncType'],
    title: 'ListRepositorySyncDefinitionsInput',
  })
  .openapi('ListRepositorySyncDefinitionsInput')

const ListServiceInstanceOutputsOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next output in the array of outputs, after the current requested list of outputs.',
        }),
    ).exactOptional(),
    outputs: OutputsListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of service instance Infrastructure as Code (IaC) outputs.',
        }),
    ),
  })
  .openapi({ required: ['outputs'] })
  .openapi('ListServiceInstanceOutputsOutput')

const ListServiceInstanceOutputsInputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.',
        }),
    ).exactOptional(),
    serviceInstanceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service instance whose outputs you want.' }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that <code>serviceInstanceName</code> is associated to.',
        }),
    ),
  })
  .openapi({
    required: ['serviceInstanceName', 'serviceName'],
    title: 'ListServiceInstanceOutputsInput',
  })
  .openapi('ListServiceInstanceOutputsInput')

const ListServiceInstanceProvisionedResourcesOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of provisioned resources.',
        }),
    ).exactOptional(),
    provisionedResources: ProvisionedResourceListSchema.and(
      z.any().openapi({ description: 'An array of provisioned resources for a service instance.' }),
    ),
  })
  .openapi({ required: ['provisionedResources'] })
  .openapi('ListServiceInstanceProvisionedResourcesOutput')

const ListServiceInstanceProvisionedResourcesInputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources that was previously requested.',
        }),
    ).exactOptional(),
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service instance whose provisioned resources you want.',
        }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that <code>serviceInstanceName</code> is associated to.',
        }),
    ),
  })
  .openapi({
    required: ['serviceInstanceName', 'serviceName'],
    title: 'ListServiceInstanceProvisionedResourcesInput',
  })
  .openapi('ListServiceInstanceProvisionedResourcesInput')

const ServiceInstanceSummarySchema = z
  .object({
    arn: ServiceInstanceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the service instance.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service instance was created.' }),
    ),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The service instance deployment status.' }),
    ),
    deploymentStatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'A service instance deployment status message.' }),
    ).exactOptional(),
    environmentName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the environment that the service instance was deployed into.',
        }),
    ),
    lastDeploymentAttemptedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when a deployment of the service was last attempted.' }),
    ),
    lastDeploymentSucceededAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service was last deployed successfully.' }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service instance.' }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service that the service instance belongs to.' }),
    ),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The service instance template major version.' }),
    ),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The service instance template minor version.' }),
    ),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'deploymentStatus',
      'environmentName',
      'lastDeploymentAttemptedAt',
      'lastDeploymentSucceededAt',
      'name',
      'serviceName',
      'templateMajorVersion',
      'templateMinorVersion',
      'templateName',
    ],
    description: 'Summary data of an Proton service instance resource.',
  })
  .openapi('ServiceInstanceSummary')

const ServiceInstanceSummaryListSchema = z
  .array(ServiceInstanceSummarySchema)
  .openapi('ServiceInstanceSummaryList')

const ListServiceInstancesOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next service instance in the array of service instances, after the current requested list of service instances.',
        }),
    ).exactOptional(),
    serviceInstances: ServiceInstanceSummaryListSchema.and(
      z.any().openapi({ description: 'An array of service instances with summary data.' }),
    ),
  })
  .openapi({ required: ['serviceInstances'] })
  .openapi('ListServiceInstancesOutput')

const ListServiceInstancesFilterBySchema = z
  .enum([
    'name',
    'deploymentStatus',
    'templateName',
    'serviceName',
    'deployedTemplateVersionStatus',
    'environmentName',
    'lastDeploymentAttemptedAtBefore',
    'lastDeploymentAttemptedAtAfter',
    'createdAtBefore',
    'createdAtAfter',
  ])
  .openapi('ListServiceInstancesFilterBy')

const ListServiceInstancesFilterValueSchema = z.string().openapi('ListServiceInstancesFilterValue')

const ListServiceInstancesFilterSchema = z
  .object({
    key: ListServiceInstancesFilterBySchema.and(
      z.any().openapi({ description: 'The name of a filtering criterion.' }),
    ).exactOptional(),
    value: ListServiceInstancesFilterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value to filter by.</p> <p>With the date/time keys (<code>*At{Before,After}</code>), the value is a valid <a href="https://datatracker.ietf.org/doc/html/rfc3339.html">RFC 3339</a> string with no UTC offset and with an optional fractional precision (for example, <code>1985-04-12T23:20:50.52Z</code>).</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filtering criterion to scope down the result list of the <a>ListServiceInstances</a> action.',
    required: [],
  })
  .openapi('ListServiceInstancesFilter')

const ListServiceInstancesFilterListSchema = z
  .array(ListServiceInstancesFilterSchema)
  .openapi('ListServiceInstancesFilterList')

const ListServiceInstancesSortBySchema = z
  .enum([
    'name',
    'deploymentStatus',
    'templateName',
    'serviceName',
    'environmentName',
    'lastDeploymentAttemptedAt',
    'createdAt',
  ])
  .openapi('ListServiceInstancesSortBy')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const ListServiceInstancesInputSchema = z
  .object({
    filters: ListServiceInstancesFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of filtering criteria that scope down the result list. By default, all service instances in the Amazon Web Services account are returned.',
        }),
    ).exactOptional(),
    maxResults: MaxPageResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of service instances to list.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next service in the array of service instances, after the list of service instances that was previously requested.',
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service that the service instance belongs to.' }),
    ).exactOptional(),
    sortBy: ListServiceInstancesSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The field that the result list is sorted by.</p> <p>When you choose to sort by <code>serviceName</code>, service instances within each service are sorted by service instance name.</p> <p>Default: <code>serviceName</code> </p>',
        }),
    ).exactOptional(),
    sortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: '<p>Result list sort order.</p> <p>Default: <code>ASCENDING</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServiceInstancesInput', required: [] })
  .openapi('ListServiceInstancesInput')

const ListServicePipelineOutputsOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next output in the array of outputs, after the current requested list of outputs.',
        }),
    ).exactOptional(),
    outputs: OutputsListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of service pipeline Infrastructure as Code (IaC) outputs.',
        }),
    ),
  })
  .openapi({ required: ['outputs'] })
  .openapi('ListServicePipelineOutputsOutput')

const ListServicePipelineOutputsInputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.',
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: "The name of the service whose pipeline's outputs you want." }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'ListServicePipelineOutputsInput' })
  .openapi('ListServicePipelineOutputsInput')

const ListServicePipelineProvisionedResourcesOutputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of provisioned resources.',
        }),
    ).exactOptional(),
    provisionedResources: ProvisionedResourceListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of provisioned resources for a service and pipeline.' }),
    ),
  })
  .openapi({ required: ['provisionedResources'] })
  .openapi('ListServicePipelineProvisionedResourcesOutput')

const ListServicePipelineProvisionedResourcesInputSchema = z
  .object({
    nextToken: EmptyNextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources that was previously requested.',
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the service whose pipeline's provisioned resources you want.",
        }),
    ),
  })
  .openapi({ required: ['serviceName'], title: 'ListServicePipelineProvisionedResourcesInput' })
  .openapi('ListServicePipelineProvisionedResourcesInput')

const ServiceTemplateVersionSummarySchema = z
  .object({
    arn: ServiceTemplateVersionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the version of a service template.',
        }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the version of a service template was created.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the version of a service template.' }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the version of a service template was last modified.',
        }),
    ),
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            "The latest major version that's associated with the version of a service template.",
        }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The minor version of a service template.' }),
    ),
    recommendedMinorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The recommended minor version of the service template.' }),
    ).exactOptional(),
    status: TemplateVersionStatusSchema.and(
      z.any().openapi({ description: 'The service template minor version status.' }),
    ),
    statusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'A service template minor version status message.' }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastModifiedAt',
      'majorVersion',
      'minorVersion',
      'status',
      'templateName',
    ],
    description: 'Summary data of an Proton service template version resource.',
  })
  .openapi('ServiceTemplateVersionSummary')

const ServiceTemplateVersionSummaryListSchema = z
  .array(ServiceTemplateVersionSummarySchema)
  .openapi('ServiceTemplateVersionSummaryList')

const ListServiceTemplateVersionsOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next major or minor version in the array of major or minor versions of a service template, after the current requested list of service major or minor versions.',
        }),
    ).exactOptional(),
    templateVersions: ServiceTemplateVersionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of major or minor versions of a service template with detail data.',
        }),
    ),
  })
  .openapi({ required: ['templateVersions'] })
  .openapi('ListServiceTemplateVersionsOutput')

const ListServiceTemplateVersionsInputSchema = z
  .object({
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To view a list of minor of versions under a major version of a service template, include <code>major Version</code>.</p> <p>To view a list of major versions of a service template, <i>exclude</i> <code>major Version</code>.</p>',
        }),
    ).exactOptional(),
    maxResults: MaxPageResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of major or minor versions of a service template to list.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next major or minor version in the array of major or minor versions of a service template, after the list of major or minor versions that was previously requested.',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
  })
  .openapi({ required: ['templateName'], title: 'ListServiceTemplateVersionsInput' })
  .openapi('ListServiceTemplateVersionsInput')

const ServiceTemplateSummarySchema = z
  .object({
    arn: ServiceTemplateArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the service template.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service template was created.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the service template.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The service template name as displayed in the developer interface.',
        }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service template was last modified.' }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
    pipelineProvisioning: ProvisioningSchema.and(
      z
        .any()
        .openapi({
          description:
            "If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included in the service template, otherwise a service pipeline <i>isn't</i> included in the service template.",
        }),
    ).exactOptional(),
    recommendedVersion: FullTemplateVersionNumberSchema.and(
      z.any().openapi({ description: 'The recommended version of the service template.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'createdAt', 'lastModifiedAt', 'name'],
    description: 'Summary data of an Proton service template resource.',
  })
  .openapi('ServiceTemplateSummary')

const ServiceTemplateSummaryListSchema = z
  .array(ServiceTemplateSummarySchema)
  .openapi('ServiceTemplateSummaryList')

const ListServiceTemplatesOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next service template in the array of service templates, after the current requested list of service templates.',
        }),
    ).exactOptional(),
    templates: ServiceTemplateSummaryListSchema.and(
      z.any().openapi({ description: 'An array of service templates with detail data.' }),
    ),
  })
  .openapi({ required: ['templates'] })
  .openapi('ListServiceTemplatesOutput')

const ListServiceTemplatesInputSchema = z
  .object({
    maxResults: MaxPageResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of service templates to list.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next service template in the array of service templates, after the list of service templates previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServiceTemplatesInput', required: [] })
  .openapi('ListServiceTemplatesInput')

const ServiceSummarySchema = z
  .object({
    arn: ServiceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the service.' }),
    ),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service was created.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the service.' }),
    ).exactOptional(),
    lastModifiedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the service was last modified.' }),
    ),
    name: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the service.' })),
    status: ServiceStatusSchema.and(z.any().openapi({ description: 'The status of the service.' })),
    statusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'A service status message.' }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
  })
  .openapi({
    required: ['arn', 'createdAt', 'lastModifiedAt', 'name', 'status', 'templateName'],
    description: 'Summary data of an Proton service resource.',
  })
  .openapi('ServiceSummary')

const ServiceSummaryListSchema = z.array(ServiceSummarySchema).openapi('ServiceSummaryList')

const ListServicesOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next service in the array of services, after the current requested list of services.',
        }),
    ).exactOptional(),
    services: ServiceSummaryListSchema.and(
      z.any().openapi({ description: 'An array of services with summaries of detail data.' }),
    ),
  })
  .openapi({ required: ['services'] })
  .openapi('ListServicesOutput')

const ListServicesInputSchema = z
  .object({
    maxResults: MaxPageResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of services to list.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next service in the array of services, after the list of services that was previously requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServicesInput', required: [] })
  .openapi('ListServicesInput')

const ListTagsForResourceOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next resource tag in the array of resource tags, after the current requested list of resource tags.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of resource tags with detail data.' }),
    ),
  })
  .openapi({ required: ['tags'] })
  .openapi('ListTagsForResourceOutput')

const ListTagsForResourceInputSchema = z
  .object({
    maxResults: MaxPageResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of tags to list.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates the location of the next resource tag in the array of resource tags, after the list of resource tags that was previously requested.',
        }),
    ).exactOptional(),
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource for the listed tags.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const NotifyResourceDeploymentStatusChangeOutputSchema = z
  .object({})
  .openapi('NotifyResourceDeploymentStatusChangeOutput')

const DeploymentIdSchema = z
  .string()
  .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  .openapi('DeploymentId')

const NotifyResourceDeploymentStatusChangeInputOutputsListSchema = z
  .array(OutputSchema)
  .min(0)
  .max(50)
  .openapi('NotifyResourceDeploymentStatusChangeInputOutputsList')

const ResourceDeploymentStatusSchema = z
  .enum(['IN_PROGRESS', 'FAILED', 'SUCCEEDED'])
  .openapi({ description: 'The state that a PR-based deployment can be updated to.' })
  .openapi('ResourceDeploymentStatus')

const NotifyResourceDeploymentStatusChangeInputStatusMessageStringSchema = z
  .string()
  .min(0)
  .max(5000)
  .openapi('NotifyResourceDeploymentStatusChangeInputStatusMessageString')

const NotifyResourceDeploymentStatusChangeInputSchema = z
  .object({
    deploymentId: DeploymentIdSchema.and(
      z.any().openapi({ description: 'The deployment ID for your provisioned resource.' }),
    ).exactOptional(),
    outputs: NotifyResourceDeploymentStatusChangeInputOutputsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The provisioned resource state change detail data that's returned by Proton.",
        }),
    ).exactOptional(),
    resourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The provisioned resource Amazon Resource Name (ARN).' }),
    ),
    status: ResourceDeploymentStatusSchema.and(
      z.any().openapi({ description: 'The status of your provisioned resource.' }),
    ).exactOptional(),
    statusMessage: NotifyResourceDeploymentStatusChangeInputStatusMessageStringSchema.and(
      z
        .any()
        .openapi({ description: 'The deployment status message for your provisioned resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceArn'], title: 'NotifyResourceDeploymentStatusChangeInput' })
  .openapi('NotifyResourceDeploymentStatusChangeInput')

const RejectEnvironmentAccountConnectionOutputSchema = z
  .object({
    environmentAccountConnection: EnvironmentAccountConnectionSchema.and(
      z
        .any()
        .openapi({
          description: "The environment connection account detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['environmentAccountConnection'] })
  .openapi('RejectEnvironmentAccountConnectionOutput')

const RejectEnvironmentAccountConnectionInputSchema = z
  .object({
    id: EnvironmentAccountConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment account connection to reject.' }),
    ),
  })
  .openapi({ required: ['id'], title: 'RejectEnvironmentAccountConnectionInput' })
  .openapi('RejectEnvironmentAccountConnectionInput')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const TagResourceInputSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Proton resource to apply customer tags to.',
        }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of customer tags to apply to the Proton resource.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const UntagResourceInputSchema = z
  .object({
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to remove customer tags from.',
        }),
    ),
    tagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of customer tag keys that indicate the customer tags to be removed from the resource.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateAccountSettingsOutputSchema = z
  .object({
    accountSettings: AccountSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Proton pipeline service role and repository data shared across the Amazon Web Services account.',
        }),
    ),
  })
  .openapi({ required: ['accountSettings'] })
  .openapi('UpdateAccountSettingsOutput')

const BooleanSchema = z.boolean().openapi('Boolean')

const UpdateAccountSettingsInputSchema = z
  .object({
    deletePipelineProvisioningRepository: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set to <code>true</code> to remove a configured pipeline repository from the account settings. Don't set this field if you are updating the configured pipeline repository.",
        }),
    ).exactOptional(),
    pipelineCodebuildRoleArn: RoleArnOrEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Proton assumes this role for CodeBuild-based provisioning.',
        }),
    ).exactOptional(),
    pipelineProvisioningRepository: RepositoryBranchInputSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A linked repository for pipeline provisioning. Specify it if you have environments configured for self-managed provisioning with services that include pipelines. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>To remove a previously configured repository, set <code>deletePipelineProvisioningRepository</code> to <code>true</code>, and don't set <code>pipelineProvisioningRepository</code>.</p>",
        }),
    ).exactOptional(),
    pipelineServiceRoleArn: RoleArnOrEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by customer-owned automation for self-managed provisioning.</p> <p>To remove a previously configured ARN, specify an empty string.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateAccountSettingsInput', required: [] })
  .openapi('UpdateAccountSettingsInput')

const UpdateComponentOutputSchema = z
  .object({
    component: ComponentSchema.and(
      z.any().openapi({ description: 'The detailed data of the updated component.' }),
    ),
  })
  .openapi({ required: ['component'] })
  .openapi('UpdateComponentOutput')

const ComponentDeploymentUpdateTypeSchema = z
  .enum(['NONE', 'CURRENT_VERSION'])
  .openapi('ComponentDeploymentUpdateType')

const ResourceNameOrEmptySchema = z
  .string()
  .regex(/(^$)|^[0-9A-Za-z]+[0-9A-Za-z_\-]*$/)
  .min(0)
  .max(100)
  .openapi('ResourceNameOrEmpty')

const UpdateComponentInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client token for the updated component.' }),
    ).exactOptional(),
    deploymentType: ComponentDeploymentUpdateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The deployment type. It defines the mode for updating a component, as follows:</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated. You can only specify <code>description</code> in this mode.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the component is deployed and updated with the new <code>serviceSpec</code>, <code>templateSource</code>, and/or <code>type</code> that you provide. Only requested parameters are updated.</p> </dd> </dl>",
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'An optional customer-provided description of the component.' }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the component to update.' }),
    ),
    serviceInstanceName: ResourceNameOrEmptySchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the service instance that you want to attach this component to. Don't specify to keep the component's current service instance attachment. Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both <code>serviceInstanceName</code> and <code>serviceName</code> or for neither of them.",
        }),
    ).exactOptional(),
    serviceName: ResourceNameOrEmptySchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the service that <code>serviceInstanceName</code> is associated with. Don't specify to keep the component's current service instance attachment. Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both <code>serviceInstanceName</code> and <code>serviceName</code> or for neither of them.",
        }),
    ).exactOptional(),
    serviceSpec: SpecContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service spec that you want the component to use to access service inputs. Set this only when the component is attached to a service instance.',
        }),
    ).exactOptional(),
    templateFile: TemplateFileContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.</p> <note> <p>Components support a single IaC file, even if you use Terraform as your template language.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['deploymentType', 'name'], title: 'UpdateComponentInput' })
  .openapi('UpdateComponentInput')

const UpdateEnvironmentOutputSchema = z
  .object({
    environment: EnvironmentSchema.and(
      z.any().openapi({ description: "The environment detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['environment'] })
  .openapi('UpdateEnvironmentOutput')

const DeploymentUpdateTypeSchema = z
  .enum(['NONE', 'CURRENT_VERSION', 'MINOR_VERSION', 'MAJOR_VERSION'])
  .openapi('DeploymentUpdateType')

const UpdateEnvironmentInputSchema = z
  .object({
    codebuildRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your behalf.',
        }),
    ).exactOptional(),
    componentRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision.</p> <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    deploymentType: DeploymentUpdateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that is higher than the major version in use and a minor version (optional).</p> </dd> </dl>",
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the environment update.' }),
    ).exactOptional(),
    environmentAccountConnectionId: EnvironmentAccountConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the environment account connection.</p> <p>You can only update to a new environment account connection if it was created in the same environment account that the current environment account connection was created in and is associated with the current environment.</p>',
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment to update.' }),
    ),
    protonServiceRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make API calls to other services your behalf.',
        }),
    ).exactOptional(),
    provisioningRepository: RepositoryBranchInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.',
        }),
    ).exactOptional(),
    spec: SpecContentsSchema.and(
      z.any().openapi({ description: 'The formatted specification that defines the update.' }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The major version of the environment to update.' }),
    ).exactOptional(),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The minor version of the environment to update.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['deploymentType', 'name'], title: 'UpdateEnvironmentInput' })
  .openapi('UpdateEnvironmentInput')

const UpdateEnvironmentAccountConnectionOutputSchema = z
  .object({
    environmentAccountConnection: EnvironmentAccountConnectionSchema.and(
      z
        .any()
        .openapi({
          description: "The environment account connection detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['environmentAccountConnection'] })
  .openapi('UpdateEnvironmentAccountConnectionOutput')

const UpdateEnvironmentAccountConnectionInputSchema = z
  .object({
    codebuildRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.',
        }),
    ).exactOptional(),
    componentRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.</p> <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any environments running in the account.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    id: EnvironmentAccountConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the environment account connection to update.' }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the IAM service role that's associated with the environment account connection to update.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['id'], title: 'UpdateEnvironmentAccountConnectionInput' })
  .openapi('UpdateEnvironmentAccountConnectionInput')

const UpdateEnvironmentTemplateOutputSchema = z
  .object({
    environmentTemplate: EnvironmentTemplateSchema.and(
      z
        .any()
        .openapi({
          description: "The environment template detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['environmentTemplate'] })
  .openapi('UpdateEnvironmentTemplateOutput')

const UpdateEnvironmentTemplateInputSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the environment template update.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the environment template to update as displayed in the developer interface.',
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template to update.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'UpdateEnvironmentTemplateInput' })
  .openapi('UpdateEnvironmentTemplateInput')

const UpdateEnvironmentTemplateVersionOutputSchema = z
  .object({
    environmentTemplateVersion: EnvironmentTemplateVersionSchema.and(
      z
        .any()
        .openapi({
          description: "The environment template version detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['environmentTemplateVersion'] })
  .openapi('UpdateEnvironmentTemplateVersionOutput')

const UpdateEnvironmentTemplateVersionInputSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of environment template version to update.' }),
    ).exactOptional(),
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To update a major version of an environment template, include <code>major Version</code>.',
        }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To update a minor version of an environment template, include <code>minorVersion</code>.',
        }),
    ),
    status: TemplateVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the environment template minor version to update.',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the environment template.' }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'minorVersion', 'templateName'],
    title: 'UpdateEnvironmentTemplateVersionInput',
  })
  .openapi('UpdateEnvironmentTemplateVersionInput')

const UpdateServiceOutputSchema = z
  .object({
    service: ServiceSchema.and(
      z.any().openapi({ description: "The service detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['service'] })
  .openapi('UpdateServiceOutput')

const UpdateServiceInputSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The edited service description.' }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service to edit.' }),
    ),
    spec: SpecContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the service instances to add and the existing service instances to remain. Omit the existing service instances to delete from the list. <i>Don\'t</i> include edits to the existing service instances or pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-update.html">Edit a service</a> in the <i>Proton User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'UpdateServiceInput' })
  .openapi('UpdateServiceInput')

const UpdateServiceInstanceOutputSchema = z
  .object({
    serviceInstance: ServiceInstanceSchema.and(
      z
        .any()
        .openapi({ description: "The service instance summary data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['serviceInstance'] })
  .openapi('UpdateServiceInstanceOutput')

const UpdateServiceInstanceInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'The client token of the service instance to update.' }),
    ).exactOptional(),
    deploymentType: DeploymentUpdateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The deployment type. It defines the mode for updating a service instance, as follows:</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this deployment type.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>",
        }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service instance to update.' }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service that the service instance belongs to.' }),
    ),
    spec: SpecContentsSchema.and(
      z
        .any()
        .openapi({
          description: 'The formatted specification that defines the service instance update.',
        }),
    ).exactOptional(),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The major version of the service template to update.' }),
    ).exactOptional(),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z.any().openapi({ description: 'The minor version of the service template to update.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['deploymentType', 'name', 'serviceName'],
    title: 'UpdateServiceInstanceInput',
  })
  .openapi('UpdateServiceInstanceInput')

const UpdateServicePipelineOutputSchema = z
  .object({
    pipeline: ServicePipelineSchema.and(
      z.any().openapi({ description: 'The pipeline details that are returned by Proton.' }),
    ),
  })
  .openapi({ required: ['pipeline'] })
  .openapi('UpdateServicePipelineOutput')

const UpdateServicePipelineInputSchema = z
  .object({
    deploymentType: DeploymentUpdateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The deployment type.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>",
        }),
    ),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service to that the pipeline is associated with.',
        }),
    ),
    spec: SpecContentsSchema.and(
      z.any().openapi({ description: 'The spec for the service pipeline to update.' }),
    ),
    templateMajorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The major version of the service template that was used to create the service that the pipeline is associated with.',
        }),
    ).exactOptional(),
    templateMinorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minor version of the service template that was used to create the service that the pipeline is associated with.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['deploymentType', 'serviceName', 'spec'],
    title: 'UpdateServicePipelineInput',
  })
  .openapi('UpdateServicePipelineInput')

const UpdateServiceSyncBlockerOutputSchema = z
  .object({
    serviceInstanceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service instance that you want to update the service sync blocker for.',
        }),
    ).exactOptional(),
    serviceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service that you want to update the service sync blocker for.',
        }),
    ),
    serviceSyncBlocker: SyncBlockerSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed data on the service sync blocker that was updated.',
        }),
    ),
  })
  .openapi({ required: ['serviceName', 'serviceSyncBlocker'] })
  .openapi('UpdateServiceSyncBlockerOutput')

const UpdateServiceSyncBlockerInputSchema = z
  .object({
    id: StringSchema.and(z.any().openapi({ description: 'The ID of the service sync blocker.' })),
    resolvedReason: StringSchema.and(
      z.any().openapi({ description: 'The reason the service sync blocker was resolved.' }),
    ),
  })
  .openapi({ required: ['id', 'resolvedReason'], title: 'UpdateServiceSyncBlockerInput' })
  .openapi('UpdateServiceSyncBlockerInput')

const UpdateServiceSyncConfigOutputSchema = z
  .object({
    serviceSyncConfig: ServiceSyncConfigSchema.and(
      z.any().openapi({ description: 'The detailed data of the Proton Ops file.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateServiceSyncConfigOutput')

const UpdateServiceSyncConfigInputSchema = z
  .object({
    branch: GitBranchNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the code repository branch where the Proton Ops file is found.',
        }),
    ),
    filePath: OpsFilePathSchema.and(
      z.any().openapi({ description: 'The path to the Proton Ops file.' }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the Proton Ops file is found.' }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository provider where the Proton Ops file is found.',
        }),
    ),
    serviceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service the Proton Ops file is for.' }),
    ),
  })
  .openapi({
    required: ['branch', 'filePath', 'repositoryName', 'repositoryProvider', 'serviceName'],
    title: 'UpdateServiceSyncConfigInput',
  })
  .openapi('UpdateServiceSyncConfigInput')

const UpdateServiceTemplateOutputSchema = z
  .object({
    serviceTemplate: ServiceTemplateSchema.and(
      z
        .any()
        .openapi({ description: "The service template detail data that's returned by Proton." }),
    ),
  })
  .openapi({ required: ['serviceTemplate'] })
  .openapi('UpdateServiceTemplateOutput')

const UpdateServiceTemplateInputSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the service template update.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the service template to update that's displayed in the developer interface.",
        }),
    ).exactOptional(),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template to update.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'UpdateServiceTemplateInput' })
  .openapi('UpdateServiceTemplateInput')

const UpdateServiceTemplateVersionOutputSchema = z
  .object({
    serviceTemplateVersion: ServiceTemplateVersionSchema.and(
      z
        .any()
        .openapi({
          description: "The service template version detail data that's returned by Proton.",
        }),
    ),
  })
  .openapi({ required: ['serviceTemplateVersion'] })
  .openapi('UpdateServiceTemplateVersionOutput')

const UpdateServiceTemplateVersionInputSchema = z
  .object({
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of environment template objects that are compatible with this service template version. A service instance based on this service template version can run in environments based on compatible templates.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of a service template version to update.' }),
    ).exactOptional(),
    majorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To update a major version of a service template, include <code>major Version</code>.',
        }),
    ),
    minorVersion: TemplateVersionPartSchema.and(
      z
        .any()
        .openapi({
          description:
            'To update a minor version of a service template, include <code>minorVersion</code>.',
        }),
    ),
    status: TemplateVersionStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The status of the service template minor version to update.' }),
    ).exactOptional(),
    supportedComponentSources: ServiceTemplateSupportedComponentSourceInputListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of supported component sources. Components with supported sources can be attached to service instances based on this service template version.</p> <note> <p>A change to <code>supportedComponentSources</code> doesn\'t impact existing component attachments to instances based on this template version. A change only affects later associations.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service template.' }),
    ),
  })
  .openapi({
    required: ['majorVersion', 'minorVersion', 'templateName'],
    title: 'UpdateServiceTemplateVersionInput',
  })
  .openapi('UpdateServiceTemplateVersionInput')

const UpdateTemplateSyncConfigOutputSchema = z
  .object({
    templateSyncConfig: TemplateSyncConfigSchema.and(
      z
        .any()
        .openapi({
          description: "The template sync configuration detail data that's returned by Proton.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTemplateSyncConfigOutput')

const UpdateTemplateSyncConfigInputSchema = z
  .object({
    branch: GitBranchNameSchema.and(
      z.any().openapi({ description: 'The repository branch for your template.' }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The repository name (for example, <code>myrepos/myrepo</code>).',
        }),
    ),
    repositoryProvider: RepositoryProviderSchema.and(
      z.any().openapi({ description: 'The repository provider.' }),
    ),
    subdirectory: SubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'A subdirectory path to your template bundle version. When included, limits the template bundle search to this repository directory.',
        }),
    ).exactOptional(),
    templateName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The synced template name.' }),
    ),
    templateType: TemplateTypeSchema.and(
      z.any().openapi({ description: 'The synced template type.' }),
    ),
  })
  .openapi({
    required: ['branch', 'repositoryName', 'repositoryProvider', 'templateName', 'templateType'],
    title: 'UpdateTemplateSyncConfigInput',
  })
  .openapi('UpdateTemplateSyncConfigInput')

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

export const postXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection',
  description:
    '<p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>',
  operationId: 'AcceptEnvironmentAccountConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.AcceptEnvironmentAccountConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.AcceptEnvironmentAccountConnection'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AcceptEnvironmentAccountConnectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptEnvironmentAccountConnectionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CancelComponentDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CancelComponentDeployment',
  description:
    '<p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'CancelComponentDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CancelComponentDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CancelComponentDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelComponentDeploymentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelComponentDeploymentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CancelEnvironmentDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment',
  description:
    '<p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>',
  operationId: 'CancelEnvironmentDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CancelEnvironmentDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CancelEnvironmentDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelEnvironmentDeploymentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelEnvironmentDeploymentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment',
  description:
    '<p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>',
  operationId: 'CancelServiceInstanceDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CancelServiceInstanceDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CancelServiceInstanceDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelServiceInstanceDeploymentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelServiceInstanceDeploymentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CancelServicePipelineDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment',
  description:
    '<p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>',
  operationId: 'CancelServicePipelineDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CancelServicePipelineDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CancelServicePipelineDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelServicePipelineDeploymentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelServicePipelineDeploymentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateComponentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateComponent',
  description:
    '<p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'CreateComponent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateComponent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateComponent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateComponentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateComponentOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateEnvironment',
  description:
    '<p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'CreateEnvironment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateEnvironment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateEnvironment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEnvironmentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEnvironmentOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection',
  description:
    '<p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>',
  operationId: 'CreateEnvironmentAccountConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateEnvironmentAccountConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.CreateEnvironmentAccountConnection'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEnvironmentAccountConnectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEnvironmentAccountConnectionOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateEnvironmentTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate',
  description:
    '<p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn\'t</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>',
  operationId: 'CreateEnvironmentTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateEnvironmentTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateEnvironmentTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEnvironmentTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEnvironmentTemplateOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion',
  description:
    "Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.",
  operationId: 'CreateEnvironmentTemplateVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateEnvironmentTemplateVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.CreateEnvironmentTemplateVersion'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEnvironmentTemplateVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEnvironmentTemplateVersionOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateRepository',
  description:
    '<p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'CreateRepository',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateRepository'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRepositoryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRepositoryOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateService',
  description:
    'Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.',
  operationId: 'CreateService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateService'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateServiceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateServiceInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateServiceInstance',
  description: 'Create a service instance.',
  operationId: 'CreateServiceInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateServiceInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateServiceInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServiceInstanceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceInstanceOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateServiceSyncConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig',
  description: 'Create the Proton Ops configuration file.',
  operationId: 'CreateServiceSyncConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateServiceSyncConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateServiceSyncConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServiceSyncConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceSyncConfigOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateServiceTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateServiceTemplate',
  description:
    'Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.',
  operationId: 'CreateServiceTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateServiceTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateServiceTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServiceTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceTemplateOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateServiceTemplateVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion',
  description:
    "Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.",
  operationId: 'CreateServiceTemplateVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateServiceTemplateVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateServiceTemplateVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServiceTemplateVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceTemplateVersionOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720CreateTemplateSyncConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig',
  description:
    '<p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'CreateTemplateSyncConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.CreateTemplateSyncConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.CreateTemplateSyncConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateTemplateSyncConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTemplateSyncConfigOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteComponentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteComponent',
  description:
    '<p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'DeleteComponent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteComponent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteComponent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteComponentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteComponentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteEnvironment',
  description: 'Delete an environment.',
  operationId: 'DeleteEnvironment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteEnvironment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteEnvironment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEnvironmentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEnvironmentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection',
  description:
    '<p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You\'re responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>',
  operationId: 'DeleteEnvironmentAccountConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteEnvironmentAccountConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.DeleteEnvironmentAccountConnection'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEnvironmentAccountConnectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEnvironmentAccountConnectionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteEnvironmentTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate',
  description:
    'If no other major or minor versions of an environment template exist, delete the environment template.',
  operationId: 'DeleteEnvironmentTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteEnvironmentTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteEnvironmentTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEnvironmentTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEnvironmentTemplateOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion',
  description:
    "<p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>",
  operationId: 'DeleteEnvironmentTemplateVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteEnvironmentTemplateVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.DeleteEnvironmentTemplateVersion'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEnvironmentTemplateVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEnvironmentTemplateVersionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteRepository',
  description: 'De-register and unlink your repository.',
  operationId: 'DeleteRepository',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteRepository'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRepositoryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRepositoryOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteService',
  description:
    '<p>Delete a service, with its instances and pipeline.</p> <note> <p>You can\'t delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>',
  operationId: 'DeleteService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteService'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteServiceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServiceOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteServiceSyncConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig',
  description: 'Delete the Proton Ops file.',
  operationId: 'DeleteServiceSyncConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteServiceSyncConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteServiceSyncConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteServiceSyncConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServiceSyncConfigOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteServiceTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate',
  description:
    'If no other major or minor versions of the service template exist, delete the service template.',
  operationId: 'DeleteServiceTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteServiceTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteServiceTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteServiceTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServiceTemplateOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteServiceTemplateVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion',
  description:
    "<p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>",
  operationId: 'DeleteServiceTemplateVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteServiceTemplateVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteServiceTemplateVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteServiceTemplateVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServiceTemplateVersionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720DeleteTemplateSyncConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig',
  description: 'Delete a template sync configuration.',
  operationId: 'DeleteTemplateSyncConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.DeleteTemplateSyncConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.DeleteTemplateSyncConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteTemplateSyncConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTemplateSyncConfigOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetAccountSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetAccountSettings',
  description: 'Get detail data for Proton account-wide settings.',
  operationId: 'GetAccountSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetAccountSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetAccountSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAccountSettingsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountSettingsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetComponentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetComponent',
  description:
    '<p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'GetComponent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetComponent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetComponent'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetComponentInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComponentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetEnvironment',
  description: 'Get detailed data for an environment.',
  operationId: 'GetEnvironment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetEnvironment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetEnvironment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEnvironmentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEnvironmentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection',
  description:
    '<p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>',
  operationId: 'GetEnvironmentAccountConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetEnvironmentAccountConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetEnvironmentAccountConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEnvironmentAccountConnectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEnvironmentAccountConnectionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetEnvironmentTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate',
  description: 'Get detailed data for an environment template.',
  operationId: 'GetEnvironmentTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetEnvironmentTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetEnvironmentTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEnvironmentTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEnvironmentTemplateOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion',
  description: 'Get detailed data for a major or minor version of an environment template.',
  operationId: 'GetEnvironmentTemplateVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetEnvironmentTemplateVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetEnvironmentTemplateVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetEnvironmentTemplateVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEnvironmentTemplateVersionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetRepository',
  description: 'Get detail data for a linked repository.',
  operationId: 'GetRepository',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetRepository'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRepositoryInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRepositoryOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetRepositorySyncStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus',
  description:
    '<p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn\'t tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can\'t use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>',
  operationId: 'GetRepositorySyncStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetRepositorySyncStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetRepositorySyncStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRepositorySyncStatusInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRepositorySyncStatusOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetResourcesSummaryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetResourcesSummary',
  description:
    '<p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it\'s behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'GetResourcesSummary',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetResourcesSummary')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetResourcesSummary'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResourcesSummaryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcesSummaryOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetService',
  description: 'Get detailed data for a service.',
  operationId: 'GetService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetService'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetServiceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetServiceInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetServiceInstance',
  description:
    'Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.',
  operationId: 'GetServiceInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetServiceInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetServiceInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetServiceInstanceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceInstanceOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus',
  description: 'Get the status of the synced service instance.',
  operationId: 'GetServiceInstanceSyncStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetServiceInstanceSyncStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetServiceInstanceSyncStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetServiceInstanceSyncStatusInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceInstanceSyncStatusOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary',
  description: 'Get detailed data for the service sync blocker summary.',
  operationId: 'GetServiceSyncBlockerSummary',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetServiceSyncBlockerSummary')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetServiceSyncBlockerSummary'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetServiceSyncBlockerSummaryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceSyncBlockerSummaryOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetServiceSyncConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig',
  description: 'Get detailed information for the service sync configuration.',
  operationId: 'GetServiceSyncConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetServiceSyncConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetServiceSyncConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetServiceSyncConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceSyncConfigOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetServiceTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetServiceTemplate',
  description: 'Get detailed data for a service template.',
  operationId: 'GetServiceTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetServiceTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetServiceTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetServiceTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceTemplateOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetServiceTemplateVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion',
  description: 'Get detailed data for a major or minor version of a service template.',
  operationId: 'GetServiceTemplateVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetServiceTemplateVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetServiceTemplateVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetServiceTemplateVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceTemplateVersionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetTemplateSyncConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig',
  description: 'Get detail data for a template sync configuration.',
  operationId: 'GetTemplateSyncConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetTemplateSyncConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetTemplateSyncConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetTemplateSyncConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTemplateSyncConfigOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720GetTemplateSyncStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus',
  description: 'Get the status of a template sync.',
  operationId: 'GetTemplateSyncStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.GetTemplateSyncStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.GetTemplateSyncStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetTemplateSyncStatusInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTemplateSyncStatusOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListComponentOutputsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListComponentOutputs',
  description:
    '<p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'ListComponentOutputs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListComponentOutputs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListComponentOutputs'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListComponentOutputsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComponentOutputsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListComponentProvisionedResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources',
  description:
    '<p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'ListComponentProvisionedResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListComponentProvisionedResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.ListComponentProvisionedResources'],
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListComponentProvisionedResourcesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComponentProvisionedResourcesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListComponentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListComponents',
  description:
    '<p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'ListComponents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListComponents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListComponents'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListComponentsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComponentsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections',
  description:
    '<p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>',
  operationId: 'ListEnvironmentAccountConnections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListEnvironmentAccountConnections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.ListEnvironmentAccountConnections'],
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEnvironmentAccountConnectionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentAccountConnectionsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListEnvironmentOutputsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs',
  description: 'List the infrastructure as code outputs for your environment.',
  operationId: 'ListEnvironmentOutputs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListEnvironmentOutputs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListEnvironmentOutputs'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEnvironmentOutputsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentOutputsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources',
  description: 'List the provisioned resources for your environment.',
  operationId: 'ListEnvironmentProvisionedResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListEnvironmentProvisionedResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.ListEnvironmentProvisionedResources'],
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEnvironmentProvisionedResourcesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentProvisionedResourcesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions',
  description: 'List major or minor versions of an environment template with detail data.',
  operationId: 'ListEnvironmentTemplateVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListEnvironmentTemplateVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListEnvironmentTemplateVersions'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEnvironmentTemplateVersionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentTemplateVersionsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListEnvironmentTemplatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates',
  description: 'List environment templates.',
  operationId: 'ListEnvironmentTemplates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListEnvironmentTemplates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListEnvironmentTemplates'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEnvironmentTemplatesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentTemplatesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListEnvironments',
  description: 'List environments with detail data summaries.',
  operationId: 'ListEnvironments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListEnvironments')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListEnvironments'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEnvironmentsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListRepositoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListRepositories',
  description: 'List linked repositories with detail data.',
  operationId: 'ListRepositories',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListRepositories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListRepositories'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRepositoriesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRepositoriesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions',
  description: 'List repository sync definitions with detail data.',
  operationId: 'ListRepositorySyncDefinitions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListRepositorySyncDefinitions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListRepositorySyncDefinitions'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRepositorySyncDefinitionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRepositorySyncDefinitionsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListServiceInstanceOutputsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs',
  description: 'Get a list service of instance Infrastructure as Code (IaC) outputs.',
  operationId: 'ListServiceInstanceOutputs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListServiceInstanceOutputs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListServiceInstanceOutputs'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServiceInstanceOutputsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServiceInstanceOutputsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources',
    description: 'List provisioned resources for a service instance with details.',
    operationId: 'ListServiceInstanceProvisionedResources',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AwsProton20200720.ListServiceInstanceProvisionedResources')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AwsProton20200720.ListServiceInstanceProvisionedResources'],
              },
            },
          }),
      }),
      query: z.object({
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ListServiceInstanceProvisionedResourcesInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListServiceInstanceProvisionedResourcesOutputSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAwsProton20200720ListServiceInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListServiceInstances',
  description:
    'List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.',
  operationId: 'ListServiceInstances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListServiceInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListServiceInstances'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServiceInstancesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServiceInstancesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListServicePipelineOutputsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs',
  description: 'Get a list of service pipeline Infrastructure as Code (IaC) outputs.',
  operationId: 'ListServicePipelineOutputs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListServicePipelineOutputs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListServicePipelineOutputs'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServicePipelineOutputsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServicePipelineOutputsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources',
    description: 'List provisioned resources for a service and pipeline with details.',
    operationId: 'ListServicePipelineProvisionedResources',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AwsProton20200720.ListServicePipelineProvisionedResources')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AwsProton20200720.ListServicePipelineProvisionedResources'],
              },
            },
          }),
      }),
      query: z.object({
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ListServicePipelineProvisionedResourcesInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListServicePipelineProvisionedResourcesOutputSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAwsProton20200720ListServiceTemplateVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions',
  description: 'List major or minor versions of a service template with detail data.',
  operationId: 'ListServiceTemplateVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListServiceTemplateVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListServiceTemplateVersions'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServiceTemplateVersionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServiceTemplateVersionsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListServiceTemplatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListServiceTemplates',
  description: 'List service templates with detail data.',
  operationId: 'ListServiceTemplates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListServiceTemplates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListServiceTemplates'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServiceTemplatesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServiceTemplatesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListServicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListServices',
  description: 'List services with summaries of detail data.',
  operationId: 'ListServices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListServices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListServices'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListServicesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServicesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.ListTagsForResource',
  description:
    'List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.',
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
      'X-Amz-Target': z
        .literal('AwsProton20200720.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.ListTagsForResource'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange',
    description:
      '<p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>',
    operationId: 'NotifyResourceDeploymentStatusChange',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AwsProton20200720.NotifyResourceDeploymentStatusChange')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AwsProton20200720.NotifyResourceDeploymentStatusChange'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: NotifyResourceDeploymentStatusChangeInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: NotifyResourceDeploymentStatusChangeOutputSchema },
        },
      },
      480: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      486: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection',
  description:
    '<p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can\'t</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that\'s connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>',
  operationId: 'RejectEnvironmentAccountConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.RejectEnvironmentAccountConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.RejectEnvironmentAccountConnection'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RejectEnvironmentAccountConnectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectEnvironmentAccountConnectionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.TagResource',
  description:
    '<p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
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
      'X-Amz-Target': z
        .literal('AwsProton20200720.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UntagResource',
  description:
    '<p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>',
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
      'X-Amz-Target': z
        .literal('AwsProton20200720.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UntagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UntagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateAccountSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateAccountSettings',
  description:
    'Update Proton settings that are used for multiple services in the Amazon Web Services account.',
  operationId: 'UpdateAccountSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateAccountSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateAccountSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAccountSettingsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAccountSettingsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateComponentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateComponent',
  description:
    '<p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can\'t update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>',
  operationId: 'UpdateComponent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateComponent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateComponent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateComponentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateComponentOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateEnvironment',
  description:
    "<p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html\">Environments</a> and <a href=\"https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html\">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>",
  operationId: 'UpdateEnvironment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateEnvironment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateEnvironment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEnvironmentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEnvironmentOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection',
  description:
    '<p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>',
  operationId: 'UpdateEnvironmentAccountConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateEnvironmentAccountConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.UpdateEnvironmentAccountConnection'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEnvironmentAccountConnectionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEnvironmentAccountConnectionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateEnvironmentTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate',
  description: 'Update an environment template.',
  operationId: 'UpdateEnvironmentTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateEnvironmentTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateEnvironmentTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEnvironmentTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEnvironmentTemplateOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion',
  description: 'Update a major or minor version of an environment template.',
  operationId: 'UpdateEnvironmentTemplateVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateEnvironmentTemplateVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AwsProton20200720.UpdateEnvironmentTemplateVersion'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEnvironmentTemplateVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEnvironmentTemplateVersionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateService',
  description:
    '<p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can\'t</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can\'t delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>',
  operationId: 'UpdateService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateService'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateServiceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateServiceInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateServiceInstance',
  description:
    '<p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can\'t update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>',
  operationId: 'UpdateServiceInstance',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateServiceInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateServiceInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceInstanceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceInstanceOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateServicePipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateServicePipeline',
  description:
    "<p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>",
  operationId: 'UpdateServicePipeline',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateServicePipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateServicePipeline'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServicePipelineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServicePipelineOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateServiceSyncBlockerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker',
  description: 'Update the service sync blocker by resolving it.',
  operationId: 'UpdateServiceSyncBlocker',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateServiceSyncBlocker')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateServiceSyncBlocker'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceSyncBlockerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceSyncBlockerOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateServiceSyncConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig',
  description: 'Update the Proton Ops config file.',
  operationId: 'UpdateServiceSyncConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateServiceSyncConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateServiceSyncConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceSyncConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceSyncConfigOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateServiceTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate',
  description: 'Update a service template.',
  operationId: 'UpdateServiceTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateServiceTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateServiceTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceTemplateOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateServiceTemplateVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion',
  description: 'Update a major or minor version of a service template.',
  operationId: 'UpdateServiceTemplateVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateServiceTemplateVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateServiceTemplateVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceTemplateVersionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceTemplateVersionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAwsProton20200720UpdateTemplateSyncConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig',
  description:
    'Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.',
  operationId: 'UpdateTemplateSyncConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AwsProton20200720.UpdateTemplateSyncConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AwsProton20200720.UpdateTemplateSyncConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTemplateSyncConfigInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTemplateSyncConfigOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
