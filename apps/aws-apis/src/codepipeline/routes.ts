import { createRoute, z } from '@hono/zod-openapi'

const LambdaFunctionArnSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:lambda:.+:[0-9]{12}:function:.+/)
  .min(1)
  .max(140)
  .openapi('LambdaFunctionArn')

const LambdaExecutorConfigurationSchema = z
  .object({
    lambdaFunctionArn: LambdaFunctionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the Lambda function used by the action engine.' }),
    ),
  })
  .openapi({
    required: ['lambdaFunctionArn'],
    description:
      'Details about the configuration for the <code>Lambda</code> action engine, or executor.',
  })
  .openapi('LambdaExecutorConfiguration')

const AccountIdSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .openapi('AccountId')

const PollingAccountListSchema = z
  .array(AccountIdSchema)
  .min(1)
  .max(1000)
  .openapi('PollingAccountList')

const ServicePrincipalSchema = z.string().min(1).max(128).openapi('ServicePrincipal')

const PollingServicePrincipalListSchema = z
  .array(ServicePrincipalSchema)
  .min(1)
  .max(10)
  .openapi('PollingServicePrincipalList')

const JobWorkerExecutorConfigurationSchema = z
  .object({
    pollingAccounts: PollingAccountListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The accounts in which the job worker is configured and might poll for jobs as part of the action execution.',
        }),
    ).exactOptional(),
    pollingServicePrincipals: PollingServicePrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service Principals in which the job worker is configured and might poll for jobs as part of the action execution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the polling configuration for the <code>JobWorker</code> action engine, or executor.',
    required: [],
  })
  .openapi('JobWorkerExecutorConfiguration')

type ExecutorConfigurationType = {
  lambdaExecutorConfiguration?: z.infer<typeof LambdaExecutorConfigurationSchema> & {
    [key: string]: unknown
  }
  jobWorkerExecutorConfiguration?: z.infer<typeof JobWorkerExecutorConfigurationSchema> & {
    [key: string]: unknown
  }
}

const ArtifactLocationTypeSchema = z.literal('S3').openapi('ArtifactLocationType')

const S3BucketNameSchema = z.string().openapi('S3BucketName')

const S3ObjectKeySchema = z.string().openapi('S3ObjectKey')

const S3ArtifactLocationSchema = z
  .object({
    bucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the S3 bucket.' }),
    ),
    objectKey: S3ObjectKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key of the object in the S3 bucket, which uniquely identifies the object in the bucket.',
        }),
    ),
  })
  .openapi({
    required: ['bucketName', 'objectKey'],
    description: 'The location of the S3 bucket that contains a revision.',
  })
  .openapi('S3ArtifactLocation')

type ArtifactLocationType = {
  type?: z.infer<typeof ArtifactLocationTypeSchema> & { [key: string]: unknown }
  s3Location?: z.infer<typeof S3ArtifactLocationSchema> & { [key: string]: unknown }
}

const JobStatusSchema = z
  .enum(['Created', 'Queued', 'Dispatched', 'InProgress', 'TimedOut', 'Succeeded', 'Failed'])
  .openapi('JobStatus')

const AcknowledgeJobOutputSchema = z
  .object({
    status: JobStatusSchema.and(
      z.any().openapi({ description: 'Whether the job worker has received the specified job.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of an AcknowledgeJob action.', required: [] })
  .openapi('AcknowledgeJobOutput')

const JobIdSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi('JobId')

const NonceSchema = z.string().min(1).max(50).openapi('Nonce')

const AcknowledgeJobInputSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique system-generated ID of the job for which you want to confirm receipt.',
        }),
    ),
    nonce: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Get this number from the response of the <a>PollForJobs</a> request that returned this job.',
        }),
    ),
  })
  .openapi({
    required: ['jobId', 'nonce'],
    title: 'AcknowledgeJobInput',
    description: 'Represents the input of an AcknowledgeJob action.',
  })
  .openapi('AcknowledgeJobInput')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InvalidNonceExceptionSchema = z.any().openapi('InvalidNonceException')

const JobNotFoundExceptionSchema = z.any().openapi('JobNotFoundException')

const AcknowledgeThirdPartyJobOutputSchema = z
  .object({
    status: JobStatusSchema.and(
      z.any().openapi({ description: 'The status information for the third party job, if any.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of an AcknowledgeThirdPartyJob action.',
    required: [],
  })
  .openapi('AcknowledgeThirdPartyJobOutput')

const ThirdPartyJobIdSchema = z.string().min(1).max(512).openapi('ThirdPartyJobId')

const ClientTokenSchema = z.string().min(1).max(256).openapi('ClientToken')

const AcknowledgeThirdPartyJobInputSchema = z
  .object({
    jobId: ThirdPartyJobIdSchema.and(
      z.any().openapi({ description: 'The unique system-generated ID of the job.' }),
    ),
    nonce: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Get this number from the response to a <a>GetThirdPartyJobDetails</a> request.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.',
        }),
    ),
  })
  .openapi({
    required: ['jobId', 'nonce', 'clientToken'],
    title: 'AcknowledgeThirdPartyJobInput',
    description: 'Represents the input of an AcknowledgeThirdPartyJob action.',
  })
  .openapi('AcknowledgeThirdPartyJobInput')

const InvalidClientTokenExceptionSchema = z.any().openapi('InvalidClientTokenException')

const ActionCategorySchema = z
  .enum(['Source', 'Build', 'Deploy', 'Test', 'Invoke', 'Approval'])
  .openapi('ActionCategory')

const ActionOwnerSchema = z.enum(['AWS', 'ThirdParty', 'Custom']).openapi('ActionOwner')

const ActionProviderSchema = z
  .string()
  .regex(/[0-9A-Za-z_-]+/)
  .min(1)
  .max(35)
  .openapi('ActionProvider')

const VersionSchema = z
  .string()
  .regex(/[0-9A-Za-z_-]+/)
  .min(1)
  .max(9)
  .openapi('Version')

const ActionTypeIdSchema = z
  .object({
    category: ActionCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the following values. </p> <ul> <li> <p>Source</p> </li> <li> <p>Build</p> </li> <li> <p>Test</p> </li> <li> <p>Deploy</p> </li> <li> <p>Invoke</p> </li> <li> <p>Approval</p> </li> </ul>',
        }),
    ),
    owner: ActionOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creator of the action being called. There are three valid values for the <code>Owner</code> field in the action category section within your pipeline structure: <code>AWS</code>, <code>ThirdParty</code>, and <code>Custom</code>. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.',
        }),
    ),
    provider: ActionProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as <code>CodeDeploy</code>. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.',
        }),
    ),
    version: VersionSchema.and(
      z.any().openapi({ description: 'A string that describes the action version.' }),
    ),
  })
  .openapi({
    required: ['category', 'owner', 'provider', 'version'],
    description: 'Represents information about an action type.',
  })
  .openapi('ActionTypeId')

const UrlSchema = z.string().min(1).max(2048).openapi('Url')

const UrlTemplateSchema = z.string().min(1).max(2048).openapi('UrlTemplate')

const ActionTypeSettingsSchema = z
  .object({
    thirdPartyConfigurationUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.',
        }),
    ).exactOptional(),
    entityUrlTemplate: UrlTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL returned to the CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for a CodeDeploy deployment group. This link is provided as part of the action display in the pipeline.',
        }),
    ).exactOptional(),
    executionUrlTemplate: UrlTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL returned to the CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for CodeDeploy. This link is shown on the pipeline view page in the CodePipeline console and provides a link to the execution entity of the external action.',
        }),
    ).exactOptional(),
    revisionUrlTemplate: UrlTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL returned to the CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about the settings for an action type.',
    required: [],
  })
  .openapi('ActionTypeSettings')

const ActionConfigurationKeySchema = z.string().min(1).max(50).openapi('ActionConfigurationKey')

const BooleanSchema = z.boolean().openapi('Boolean')

const DescriptionSchema = z.string().min(1).max(160).openapi('Description')

const ActionConfigurationPropertyTypeSchema = z
  .enum(['String', 'Number', 'Boolean'])
  .openapi('ActionConfigurationPropertyType')

const ActionConfigurationPropertySchema = z
  .object({
    name: ActionConfigurationKeySchema.and(
      z.any().openapi({ description: 'The name of the action configuration property.' }),
    ),
    required: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the configuration property is a required value.' }),
    ),
    key: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the configuration property is a key.' }),
    ),
    secret: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether the configuration property is secret. Secrets are hidden from all calls except for <code>GetJobDetails</code>, <code>GetThirdPartyJobDetails</code>, <code>PollForJobs</code>, and <code>PollForThirdPartyJobs</code>.</p> <p>When updating a pipeline, passing * * * * * without changing any other values of the action preserves the previous value of the secret.</p>',
        }),
    ),
    queryable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates that the property is used with <code>PollForJobs</code>. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.</p> <p>If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.</p>',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the action configuration property that is displayed to users.',
        }),
    ).exactOptional(),
    type: ActionConfigurationPropertyTypeSchema.and(
      z.any().openapi({ description: 'The type of the configuration property.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'required', 'key', 'secret'],
    description: 'Represents information about an action configuration property.',
  })
  .openapi('ActionConfigurationProperty')

const ActionConfigurationPropertyListSchema = z
  .array(ActionConfigurationPropertySchema)
  .max(10)
  .openapi('ActionConfigurationPropertyList')

const MinimumArtifactCountSchema = z.int().min(0).max(5).openapi('MinimumArtifactCount')

const MaximumArtifactCountSchema = z.int().min(0).max(5).openapi('MaximumArtifactCount')

const ArtifactDetailsSchema = z
  .object({
    minimumCount: MinimumArtifactCountSchema.and(
      z
        .any()
        .openapi({ description: 'The minimum number of artifacts allowed for the action type.' }),
    ),
    maximumCount: MaximumArtifactCountSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of artifacts allowed for the action type.' }),
    ),
  })
  .openapi({
    required: ['minimumCount', 'maximumCount'],
    description: 'Returns information about the details of an artifact.',
  })
  .openapi('ArtifactDetails')

const ActionTypeSchema = z
  .object({
    id: ActionTypeIdSchema.and(
      z.any().openapi({ description: 'Represents information about an action type.' }),
    ),
    settings: ActionTypeSettingsSchema.and(
      z.any().openapi({ description: 'The settings for the action type.' }),
    ).exactOptional(),
    actionConfigurationProperties: ActionConfigurationPropertyListSchema.and(
      z.any().openapi({ description: 'The configuration properties for the action type.' }),
    ).exactOptional(),
    inputArtifactDetails: ArtifactDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the input artifact for the action, such as its commit ID.',
        }),
    ),
    outputArtifactDetails: ArtifactDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the output artifact of the action, such as its commit ID.',
        }),
    ),
  })
  .openapi({
    required: ['id', 'inputArtifactDetails', 'outputArtifactDetails'],
    description: 'Returns information about the details of an action type.',
  })
  .openapi('ActionType')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: "The tag's key." })),
    value: TagValueSchema.and(z.any().openapi({ description: "The tag's value." })),
  })
  .openapi({
    required: ['key', 'value'],
    description: 'A tag is a key-value pair that is used to manage the resource.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateCustomActionTypeOutputSchema = z
  .object({
    actionType: ActionTypeSchema.and(
      z.any().openapi({ description: 'Returns information about the details of an action type.' }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'Specifies the tags applied to the custom action.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['actionType'],
    description: 'Represents the output of a <code>CreateCustomActionType</code> operation.',
  })
  .openapi('CreateCustomActionTypeOutput')

const CreateCustomActionTypeInputSchema = z
  .object({
    category: ActionCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The category of the custom action, such as a build action or a test action.',
        }),
    ),
    provider: ActionProviderSchema.and(
      z
        .any()
        .openapi({
          description: 'The provider of the service used in the custom action, such as CodeDeploy.',
        }),
    ),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version identifier of the custom action.' }),
    ),
    settings: ActionTypeSettingsSchema.and(
      z
        .any()
        .openapi({ description: 'URLs that provide users information about this custom action.' }),
    ).exactOptional(),
    configurationProperties: ActionConfigurationPropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration properties for the custom action.</p> <note> <p>You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html">Create a Custom Action for a Pipeline</a>.</p> </note>',
        }),
    ).exactOptional(),
    inputArtifactDetails: ArtifactDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the input artifact for the action, such as its commit ID.',
        }),
    ),
    outputArtifactDetails: ArtifactDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the output artifact of the action, such as its commit ID.',
        }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the custom action.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['category', 'provider', 'version', 'inputArtifactDetails', 'outputArtifactDetails'],
    title: 'CreateCustomActionTypeInput',
    description: 'Represents the input of a CreateCustomActionType operation.',
  })
  .openapi('CreateCustomActionTypeInput')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const InvalidTagsExceptionSchema = z.any().openapi('InvalidTagsException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const PipelineNameSchema = z
  .string()
  .regex(/[A-Za-z0-9.@\-_]+/)
  .min(1)
  .max(100)
  .openapi('PipelineName')

const RoleArnSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:iam::[0-9]{12}:role\/.*/)
  .max(1024)
  .openapi('RoleArn')

const ArtifactStoreTypeSchema = z.literal('S3').openapi('ArtifactStoreType')

const ArtifactStoreLocationSchema = z
  .string()
  .regex(/[a-zA-Z0-9\-\.]+/)
  .min(3)
  .max(63)
  .openapi('ArtifactStoreLocation')

const EncryptionKeyIdSchema = z.string().min(1).max(400).openapi('EncryptionKeyId')

const EncryptionKeyTypeSchema = z.literal('KMS').openapi('EncryptionKeyType')

const EncryptionKeySchema = z
  .object({
    id: EncryptionKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID used to identify the key. For an Amazon Web Services KMS key, you can use the key ID, the key ARN, or the alias ARN.</p> <note> <p>Aliases are recognized only in the account that created the KMS key. For cross-account actions, you can only use the key ID or key ARN to identify the key. Cross-account actions involve using the role from the other account (AccountB), so specifying the key ID will use the key from the other account (AccountB).</p> </note>',
        }),
    ),
    type: EncryptionKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of encryption key, such as an Amazon Web Services KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.",
        }),
    ),
  })
  .openapi({
    required: ['id', 'type'],
    description:
      'Represents information about the key used to encrypt data in the artifact store, such as an Amazon Web Services Key Management Service (Key Management Service) key.',
  })
  .openapi('EncryptionKey')

const ArtifactStoreSchema = z
  .object({
    type: ArtifactStoreTypeSchema.and(
      z.any().openapi({ description: 'The type of the artifact store, such as S3.' }),
    ),
    location: ArtifactStoreLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same Amazon Web Services Region as the pipeline to store your pipeline artifacts.',
        }),
    ),
    encryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption key used to encrypt the data in the artifact store, such as an Amazon Web Services Key Management Service key. If this is undefined, the default key for Amazon S3 is used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type', 'location'],
    description:
      '<p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>',
  })
  .openapi('ArtifactStore')

const ArtifactStoreMapSchema = z.record(z.string(), ArtifactStoreSchema).openapi('ArtifactStoreMap')

const StageNameSchema = z
  .string()
  .regex(/[A-Za-z0-9.@\-_]+/)
  .min(1)
  .max(100)
  .openapi('StageName')

const BlockerNameSchema = z.string().min(1).max(100).openapi('BlockerName')

const BlockerTypeSchema = z.literal('Schedule').openapi('BlockerType')

const BlockerDeclarationSchema = z
  .object({
    name: BlockerNameSchema.and(z.any().openapi({ description: 'Reserved for future use.' })),
    type: BlockerTypeSchema.and(z.any().openapi({ description: 'Reserved for future use.' })),
  })
  .openapi({ required: ['name', 'type'], description: 'Reserved for future use.' })
  .openapi('BlockerDeclaration')

const StageBlockerDeclarationListSchema = z
  .array(BlockerDeclarationSchema)
  .openapi('StageBlockerDeclarationList')

const ActionNameSchema = z
  .string()
  .regex(/[A-Za-z0-9.@\-_]+/)
  .min(1)
  .max(100)
  .openapi('ActionName')

const ActionRunOrderSchema = z.int().min(1).max(999).openapi('ActionRunOrder')

const ActionConfigurationValueSchema = z
  .string()
  .min(1)
  .max(1000)
  .openapi('ActionConfigurationValue')

const ActionConfigurationMapSchema = z
  .record(z.string(), ActionConfigurationValueSchema)
  .openapi('ActionConfigurationMap')

const ArtifactNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_\-]+/)
  .min(1)
  .max(100)
  .openapi('ArtifactName')

const OutputArtifactSchema = z
  .object({
    name: ArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the output of an artifact, such as "My App".</p> <p>The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.</p> <p>Output artifact names must be unique within a pipeline.</p>',
        }),
    ),
  })
  .openapi({
    required: ['name'],
    description: 'Represents information about the output of an action.',
  })
  .openapi('OutputArtifact')

const OutputArtifactListSchema = z.array(OutputArtifactSchema).openapi('OutputArtifactList')

const InputArtifactSchema = z
  .object({
    name: ArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the artifact to be worked on (for example, "My App").</p> <p>Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action input artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip</p> <p>The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.</p>',
        }),
    ),
  })
  .openapi({
    required: ['name'],
    description:
      'Represents information about an artifact to be worked on, such as a test or build artifact.',
  })
  .openapi('InputArtifact')

const InputArtifactListSchema = z.array(InputArtifactSchema).openapi('InputArtifactList')

const AWSRegionNameSchema = z.string().min(4).max(30).openapi('AWSRegionName')

const ActionNamespaceSchema = z
  .string()
  .regex(/[A-Za-z0-9@\-_]+/)
  .min(1)
  .max(100)
  .openapi('ActionNamespace')

const ActionDeclarationSchema = z
  .object({
    name: ActionNameSchema.and(z.any().openapi({ description: "The action declaration's name." })),
    actionTypeId: ActionTypeIdSchema.and(
      z.any().openapi({ description: 'Specifies the action type and the provider of the action.' }),
    ),
    runOrder: ActionRunOrderSchema.and(
      z.any().openapi({ description: 'The order in which actions are run.' }),
    ).exactOptional(),
    configuration: ActionConfigurationMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action\'s configuration. These are key-value pairs that specify input values for an action. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements">Action Structure Requirements in CodePipeline</a>. For the list of configuration properties for the CloudFormation action type in CodePipeline, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-action-reference.html">Configuration Properties Reference</a> in the <i>CloudFormation User Guide</i>. For template snippets with examples, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-parameter-override-functions.html">Using Parameter Override Functions with CodePipeline Pipelines</a> in the <i>CloudFormation User Guide</i>.</p> <p>The values can be represented in either JSON or YAML format. For example, the JSON configuration item format is as follows: </p> <p> <i>JSON:</i> </p> <p> <code>"Configuration" : { Key : Value },</code> </p>',
        }),
    ).exactOptional(),
    outputArtifacts: OutputArtifactListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ID of the result of the action declaration, such as a test or build artifact.',
        }),
    ).exactOptional(),
    inputArtifacts: InputArtifactListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ID of the artifact consumed by the action, such as a test or build artifact.',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.',
        }),
    ).exactOptional(),
    region: AWSRegionNameSchema.and(
      z
        .any()
        .openapi({
          description: "The action declaration's Amazon Web Services Region, such as us-east-1.",
        }),
    ).exactOptional(),
    namespace: ActionNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'actionTypeId'],
    description: 'Represents information about an action declaration.',
  })
  .openapi('ActionDeclaration')

const StageActionDeclarationListSchema = z
  .array(ActionDeclarationSchema)
  .openapi('StageActionDeclarationList')

const StageDeclarationSchema = z
  .object({
    name: StageNameSchema.and(z.any().openapi({ description: 'The name of the stage.' })),
    blockers: StageBlockerDeclarationListSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
    actions: StageActionDeclarationListSchema.and(
      z.any().openapi({ description: 'The actions included in a stage.' }),
    ),
  })
  .openapi({
    required: ['name', 'actions'],
    description: 'Represents information about a stage and its definition.',
  })
  .openapi('StageDeclaration')

const PipelineStageDeclarationListSchema = z
  .array(StageDeclarationSchema)
  .openapi('PipelineStageDeclarationList')

const PipelineVersionSchema = z.int().min(1).openapi('PipelineVersion')

const PipelineDeclarationSchema = z
  .object({
    name: PipelineNameSchema.and(z.any().openapi({ description: 'The name of the pipeline.' })),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no <code>actionRoleArn</code>, or to use to assume roles for actions with an <code>actionRoleArn</code>.',
        }),
    ),
    artifactStore: ArtifactStoreSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents information about the S3 bucket where artifacts are stored for the pipeline.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>',
        }),
    ).exactOptional(),
    artifactStores: ArtifactStoreMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A mapping of <code>artifactStore</code> objects and their corresponding Amazon Web Services Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>',
        }),
    ).exactOptional(),
    stages: PipelineStageDeclarationListSchema.and(
      z.any().openapi({ description: 'The stage in which to perform the action.' }),
    ),
    version: PipelineVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the pipeline. A new pipeline always has a version number of 1. This number is incremented when a pipeline is updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'roleArn', 'stages'],
    description: 'Represents the structure of actions and stages to be performed in the pipeline.',
  })
  .openapi('PipelineDeclaration')

const CreatePipelineOutputSchema = z
  .object({
    pipeline: PipelineDeclarationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the structure of actions and stages to be performed in the pipeline. ',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'Specifies the tags applied to the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>CreatePipeline</code> action.',
    required: [],
  })
  .openapi('CreatePipelineOutput')

const CreatePipelineInputSchema = z
  .object({
    pipeline: PipelineDeclarationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the structure of actions and stages to be performed in the pipeline. ',
        }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipeline'],
    title: 'CreatePipelineInput',
    description: 'Represents the input of a <code>CreatePipeline</code> action.',
  })
  .openapi('CreatePipelineInput')

const PipelineNameInUseExceptionSchema = z.any().openapi('PipelineNameInUseException')

const InvalidStageDeclarationExceptionSchema = z.any().openapi('InvalidStageDeclarationException')

const InvalidActionDeclarationExceptionSchema = z.any().openapi('InvalidActionDeclarationException')

const InvalidBlockerDeclarationExceptionSchema = z
  .any()
  .openapi('InvalidBlockerDeclarationException')

const InvalidStructureExceptionSchema = z.any().openapi('InvalidStructureException')

const DeleteCustomActionTypeInputSchema = z
  .object({
    category: ActionCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The category of the custom action that you want to delete, such as source or deploy.',
        }),
    ),
    provider: ActionProviderSchema.and(
      z
        .any()
        .openapi({
          description: 'The provider of the service used in the custom action, such as CodeDeploy.',
        }),
    ),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the custom action to delete.' }),
    ),
  })
  .openapi({
    required: ['category', 'provider', 'version'],
    title: 'DeleteCustomActionTypeInput',
    description:
      'Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.',
  })
  .openapi('DeleteCustomActionTypeInput')

const DeletePipelineInputSchema = z
  .object({
    name: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline to be deleted.' }),
    ),
  })
  .openapi({
    required: ['name'],
    title: 'DeletePipelineInput',
    description: 'Represents the input of a <code>DeletePipeline</code> action.',
  })
  .openapi('DeletePipelineInput')

const DeleteWebhookOutputSchema = z.object({}).openapi('DeleteWebhookOutput')

const WebhookNameSchema = z
  .string()
  .regex(/[A-Za-z0-9.@\-_]+/)
  .min(1)
  .max(100)
  .openapi('WebhookName')

const DeleteWebhookInputSchema = z
  .object({
    name: WebhookNameSchema.and(
      z.any().openapi({ description: 'The name of the webhook you want to delete.' }),
    ),
  })
  .openapi({ required: ['name'], title: 'DeleteWebhookInput' })
  .openapi('DeleteWebhookInput')

const DeregisterWebhookWithThirdPartyOutputSchema = z
  .object({})
  .openapi('DeregisterWebhookWithThirdPartyOutput')

const DeregisterWebhookWithThirdPartyInputSchema = z
  .object({
    webhookName: WebhookNameSchema.and(
      z.any().openapi({ description: 'The name of the webhook you want to deregister.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeregisterWebhookWithThirdPartyInput', required: [] })
  .openapi('DeregisterWebhookWithThirdPartyInput')

const WebhookNotFoundExceptionSchema = z.any().openapi('WebhookNotFoundException')

const StageTransitionTypeSchema = z.enum(['Inbound', 'Outbound']).openapi('StageTransitionType')

const DisabledReasonSchema = z
  .string()
  .regex(/[a-zA-Z0-9!@ \(\)\.\*\?\-]+/)
  .min(1)
  .max(300)
  .openapi('DisabledReason')

const DisableStageTransitionInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the pipeline in which you want to disable the flow of artifacts from one stage to another.',
        }),
    ),
    stageName: StageNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stage where you want to disable the inbound or outbound transition of artifacts.',
        }),
    ),
    transitionType: StageTransitionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether artifacts are prevented from transitioning into the stage and being processed by the actions in that stage (inbound), or prevented from transitioning from the stage after they have been processed by the actions in that stage (outbound).',
        }),
    ),
    reason: DisabledReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.',
        }),
    ),
  })
  .openapi({
    required: ['pipelineName', 'stageName', 'transitionType', 'reason'],
    title: 'DisableStageTransitionInput',
    description: 'Represents the input of a <code>DisableStageTransition</code> action.',
  })
  .openapi('DisableStageTransitionInput')

const PipelineNotFoundExceptionSchema = z.any().openapi('PipelineNotFoundException')

const StageNotFoundExceptionSchema = z.any().openapi('StageNotFoundException')

const EnableStageTransitionInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the pipeline in which you want to enable the flow of artifacts from one stage to another.',
        }),
    ),
    stageName: StageNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stage where you want to enable the transition of artifacts, either into the stage (inbound) or from that stage to the next stage (outbound).',
        }),
    ),
    transitionType: StageTransitionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether artifacts are allowed to enter the stage and be processed by the actions in that stage (inbound) or whether already processed artifacts are allowed to transition to the next stage (outbound).',
        }),
    ),
  })
  .openapi({
    required: ['pipelineName', 'stageName', 'transitionType'],
    title: 'EnableStageTransitionInput',
    description: 'Represents the input of an <code>EnableStageTransition</code> action.',
  })
  .openapi('EnableStageTransitionInput')

const ActionTypeDescriptionSchema = z.string().min(1).max(1024).openapi('ActionTypeDescription')

const ExecutorConfigurationSchema: z.ZodType<ExecutorConfigurationType> = z
  .lazy(() =>
    z
      .object({
        lambdaExecutorConfiguration: LambdaExecutorConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'Details about the <code>Lambda</code> executor of the action type.',
            }),
        ).exactOptional(),
        jobWorkerExecutorConfiguration: JobWorkerExecutorConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'Details about the <code>JobWorker</code> executor of the action type.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>.',
        required: [],
      }),
  )
  .openapi('ExecutorConfiguration')

const ExecutorTypeSchema = z.enum(['JobWorker', 'Lambda']).openapi('ExecutorType')

const PolicyStatementsTemplateSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi('PolicyStatementsTemplate')

const JobTimeoutSchema = z.int().min(60).max(43200).openapi('JobTimeout')

const ActionTypeExecutorSchema = z
  .object({
    configuration: ExecutorConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action configuration properties for the action type. These properties are specified in the action definition when the action type is created.',
        }),
    ),
    type: ExecutorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The integration model used to create and update the action type, <code>Lambda</code> or <code>JobWorker</code>. ',
        }),
    ),
    policyStatementsTemplate: PolicyStatementsTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The policy statement that specifies the permissions in the CodePipeline customer account that are needed to successfully run an action.</p> <p>To grant permission to another account, specify the account ID as the Principal, a domain-style identifier defined by the service, for example <code>codepipeline.amazonaws.com</code>.</p> <note> <p>The size of the passed JSON policy document cannot exceed 2048 characters.</p> </note>',
        }),
    ).exactOptional(),
    jobTimeout: JobTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timeout in seconds for the job. An action execution can have multiple jobs. This is the timeout for a single job, not the entire action execution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['configuration', 'type'],
    description:
      'The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.',
  })
  .openapi('ActionTypeExecutor')

const ActionTypeOwnerSchema = z
  .string()
  .regex(/AWS|ThirdParty/)
  .openapi('ActionTypeOwner')

const ActionTypeIdentifierSchema = z
  .object({
    category: ActionCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines what kind of action can be taken in the stage, one of the following:</p> <ul> <li> <p> <code>Source</code> </p> </li> <li> <p> <code>Build</code> </p> </li> <li> <p> <code>Test</code> </p> </li> <li> <p> <code>Deploy</code> </p> </li> <li> <p> <code>Approval</code> </p> </li> <li> <p> <code>Invoke</code> </p> </li> </ul>',
        }),
    ),
    owner: ActionTypeOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creator of the action type being called: <code>AWS</code> or <code>ThirdParty</code>.',
        }),
    ),
    provider: ActionProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The provider of the action type being called. The provider name is supplied when the action type is created.',
        }),
    ),
    version: VersionSchema.and(
      z.any().openapi({ description: 'A string that describes the action type version.' }),
    ),
  })
  .openapi({
    required: ['category', 'owner', 'provider', 'version'],
    description: 'Specifies the category, owner, provider, and version of the action type.',
  })
  .openapi('ActionTypeIdentifier')

const MinimumActionTypeArtifactCountSchema = z
  .int()
  .min(0)
  .max(10)
  .openapi('MinimumActionTypeArtifactCount')

const MaximumActionTypeArtifactCountSchema = z
  .int()
  .min(0)
  .max(10)
  .openapi('MaximumActionTypeArtifactCount')

const ActionTypeArtifactDetailsSchema = z
  .object({
    minimumCount: MinimumActionTypeArtifactCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of artifacts that can be used with the action type. For example, you should specify a minimum and maximum of zero input artifacts for an action type with a category of <code>source</code>.',
        }),
    ),
    maximumCount: MaximumActionTypeArtifactCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of artifacts that can be used with the actiontype. For example, you should specify a minimum and maximum of zero input artifacts for an action type with a category of <code>source</code>.',
        }),
    ),
  })
  .openapi({
    required: ['minimumCount', 'maximumCount'],
    description:
      'Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.',
  })
  .openapi('ActionTypeArtifactDetails')

const AllowedAccountSchema = z
  .string()
  .regex(/[0-9]{12}|\*/)
  .openapi('AllowedAccount')

const AllowedAccountsSchema = z
  .array(AllowedAccountSchema)
  .min(1)
  .max(1000)
  .openapi('AllowedAccounts')

const ActionTypePermissionsSchema = z
  .object({
    allowedAccounts: AllowedAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Amazon Web Services account IDs with access to use the action type in their pipelines.',
        }),
    ),
  })
  .openapi({
    required: ['allowedAccounts'],
    description: 'Details identifying the users with permissions to use the action type.',
  })
  .openapi('ActionTypePermissions')

const ActionTypeUrlsSchema = z
  .object({
    configurationUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL returned to the CodePipeline console that contains a link to the page where customers can configure the external action.',
        }),
    ).exactOptional(),
    entityUrlTemplate: UrlTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL returned to the CodePipeline console that provides a deep link to the resources of the external system, such as a status page. This link is provided as part of the action display in the pipeline.',
        }),
    ).exactOptional(),
    executionUrlTemplate: UrlTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The link to an execution page for the action type in progress. For example, for a CodeDeploy action, this link is shown on the pipeline view page in the CodePipeline console, and it links to a CodeDeploy status page.',
        }),
    ).exactOptional(),
    revisionUrlTemplate: UrlTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL returned to the CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type.',
    required: [],
  })
  .openapi('ActionTypeUrls')

const ActionTypeDeclarationSchema = z
  .object({
    description: ActionTypeDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the action type to be updated.' }),
    ).exactOptional(),
    executor: ActionTypeExecutorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the executor for an action type that was created with any supported integration model.',
        }),
    ),
    id: ActionTypeIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action category, owner, provider, and version of the action type to be updated.',
        }),
    ),
    inputArtifactDetails: ActionTypeArtifactDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details for the artifacts, such as application files, to be worked on by the action. For example, the minimum and maximum number of input artifacts allowed.',
        }),
    ),
    outputArtifactDetails: ActionTypeArtifactDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details for the output artifacts, such as a built application, that are the result of the action. For example, the minimum and maximum number of output artifacts allowed.',
        }),
    ),
    permissions: ActionTypePermissionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Details identifying the accounts with permissions to use the action type.',
        }),
    ).exactOptional(),
    properties: z
      .any()
      .exactOptional()
      .openapi({ description: 'The properties of the action type to be updated.' }),
    urls: ActionTypeUrlsSchema.and(
      z.any().openapi({ description: 'The links associated with the action type to be updated.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['executor', 'id', 'inputArtifactDetails', 'outputArtifactDetails'],
    description:
      'The parameters for the action type definition that are provided when the action type is created or updated.',
  })
  .openapi('ActionTypeDeclaration')

const GetActionTypeOutputSchema = z
  .object({
    actionType: ActionTypeDeclarationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action type information for the requested action type, such as the action type ID.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetActionTypeOutput')

const GetActionTypeInputSchema = z
  .object({
    category: ActionCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines what kind of action can be taken in the stage. The following are the valid values:</p> <ul> <li> <p> <code>Source</code> </p> </li> <li> <p> <code>Build</code> </p> </li> <li> <p> <code>Test</code> </p> </li> <li> <p> <code>Deploy</code> </p> </li> <li> <p> <code>Approval</code> </p> </li> <li> <p> <code>Invoke</code> </p> </li> </ul>',
        }),
    ),
    owner: ActionTypeOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creator of an action type that was created with any supported integration model. There are two valid values: <code>AWS</code> and <code>ThirdParty</code>.',
        }),
    ),
    provider: ActionProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The provider of the action type being called. The provider name is specified when the action type is created.',
        }),
    ),
    version: VersionSchema.and(
      z.any().openapi({ description: 'A string that describes the action type version.' }),
    ),
  })
  .openapi({ required: ['category', 'owner', 'provider', 'version'], title: 'GetActionTypeInput' })
  .openapi('GetActionTypeInput')

const ActionTypeNotFoundExceptionSchema = z.any().openapi('ActionTypeNotFoundException')

const ActionConfigurationSchema = z
  .object({
    configuration: ActionConfigurationMapSchema.and(
      z.any().openapi({ description: 'The configuration data for the action.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about an action configuration.', required: [] })
  .openapi('ActionConfiguration')

const StageContextSchema = z
  .object({
    name: StageNameSchema.and(
      z.any().openapi({ description: 'The name of the stage.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about a stage to a job worker.', required: [] })
  .openapi('StageContext')

const ActionExecutionIdSchema = z.string().openapi('ActionExecutionId')

const ActionContextSchema = z
  .object({
    name: ActionNameSchema.and(
      z.any().openapi({ description: 'The name of the action in the context of a job.' }),
    ).exactOptional(),
    actionExecutionId: ActionExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description: "The system-generated unique ID that corresponds to an action's execution.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the context of an action in the stage of a pipeline to a job worker.',
    required: [],
  })
  .openapi('ActionContext')

const PipelineArnSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:codepipeline:.+:[0-9]{12}:.+/)
  .openapi('PipelineArn')

const PipelineExecutionIdSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi('PipelineExecutionId')

const PipelineContextSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the pipeline. This is a user-specified value. Pipeline names must be unique across all pipeline names under an Amazon Web Services account.',
        }),
    ).exactOptional(),
    stage: StageContextSchema.and(
      z.any().openapi({ description: 'The stage of the pipeline.' }),
    ).exactOptional(),
    action: ActionContextSchema.and(
      z
        .any()
        .openapi({
          description: 'The context of an action to a job worker in the stage of a pipeline.',
        }),
    ).exactOptional(),
    pipelineArn: PipelineArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the pipeline.' }),
    ).exactOptional(),
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z.any().openapi({ description: 'The execution ID of the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>',
    required: [],
  })
  .openapi('PipelineContext')

const RevisionSchema = z.string().min(1).max(1500).openapi('Revision')

const ArtifactLocationSchema: z.ZodType<ArtifactLocationType> = z
  .lazy(() =>
    z
      .object({
        type: ArtifactLocationTypeSchema.and(
          z.any().openapi({ description: 'The type of artifact in the location.' }),
        ).exactOptional(),
        s3Location: S3ArtifactLocationSchema.and(
          z.any().openapi({ description: 'The S3 bucket that contains the artifact.' }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Represents information about the location of an artifact.',
        required: [],
      }),
  )
  .openapi('ArtifactLocation')

const ArtifactSchema = z
  .object({
    name: ArtifactNameSchema.and(
      z.any().openapi({ description: "The artifact's name." }),
    ).exactOptional(),
    revision: RevisionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The artifact's revision ID. Depending on the type of object, this could be a commit ID (GitHub) or a revision ID (Amazon S3).",
        }),
    ).exactOptional(),
    location: ArtifactLocationSchema.and(
      z.any().openapi({ description: 'The location of an artifact.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip',
    required: [],
  })
  .openapi('Artifact')

const ArtifactListSchema = z.array(ArtifactSchema).openapi('ArtifactList')

const AccessKeyIdSchema = z.string().openapi('AccessKeyId')

const SecretAccessKeySchema = z.string().openapi('SecretAccessKey')

const SessionTokenSchema = z.string().openapi('SessionToken')

const AWSSessionCredentialsSchema = z
  .object({
    accessKeyId: AccessKeyIdSchema.and(
      z.any().openapi({ description: 'The access key for the session.' }),
    ),
    secretAccessKey: SecretAccessKeySchema.and(
      z.any().openapi({ description: 'The secret access key for the session.' }),
    ),
    sessionToken: SessionTokenSchema.and(
      z.any().openapi({ description: 'The token for the session.' }),
    ),
  })
  .openapi({
    required: ['accessKeyId', 'secretAccessKey', 'sessionToken'],
    description:
      'Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in CodePipeline.',
  })
  .openapi('AWSSessionCredentials')

const ContinuationTokenSchema = z.string().min(1).max(2048).openapi('ContinuationToken')

const JobDataSchema = z
  .object({
    actionTypeId: ActionTypeIdSchema.and(
      z.any().openapi({ description: 'Represents information about an action type.' }),
    ).exactOptional(),
    actionConfiguration: ActionConfigurationSchema.and(
      z.any().openapi({ description: 'Represents information about an action configuration.' }),
    ).exactOptional(),
    pipelineContext: PipelineContextSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents information about a pipeline to a job worker.</p> <note> <p>Includes <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom jobs.</p> </note>',
        }),
    ).exactOptional(),
    inputArtifacts: ArtifactListSchema.and(
      z.any().openapi({ description: 'The artifact supplied to the job.' }),
    ).exactOptional(),
    outputArtifacts: ArtifactListSchema.and(
      z.any().openapi({ description: 'The output of the job.' }),
    ).exactOptional(),
    artifactCredentials: AWSSessionCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifacts for the pipeline in CodePipeline.',
        }),
    ).exactOptional(),
    continuationToken: ContinuationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-generated token, such as a deployment ID, required by a job to continue the job asynchronously.',
        }),
    ).exactOptional(),
    encryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents information about the key used to encrypt data in the artifact store, such as an KMS key. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents other information about a job required for a job worker to complete the job.',
    required: [],
  })
  .openapi('JobData')

const JobDetailsSchema = z
  .object({
    id: JobIdSchema.and(
      z.any().openapi({ description: 'The unique system-generated ID of the job.' }),
    ).exactOptional(),
    data: JobDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents other information about a job required for a job worker to complete the job. ',
        }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account ID associated with the job.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about the details of a job.', required: [] })
  .openapi('JobDetails')

const GetJobDetailsOutputSchema = z
  .object({
    jobDetails: JobDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The details of the job.</p> <note> <p>If AWSSessionCredentials is used, a long-running job can call <code>GetJobDetails</code> again to obtain new credentials.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetJobDetails</code> action.',
    required: [],
  })
  .openapi('GetJobDetailsOutput')

const GetJobDetailsInputSchema = z
  .object({
    jobId: JobIdSchema.and(
      z.any().openapi({ description: 'The unique system-generated ID for the job.' }),
    ),
  })
  .openapi({
    required: ['jobId'],
    title: 'GetJobDetailsInput',
    description: 'Represents the input of a <code>GetJobDetails</code> action.',
  })
  .openapi('GetJobDetailsInput')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const PipelineMetadataSchema = z
  .object({
    pipelineArn: PipelineArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the pipeline.' }),
    ).exactOptional(),
    created: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the pipeline was created, in timestamp format.',
        }),
    ).exactOptional(),
    updated: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the pipeline was last updated, in timestamp format.',
        }),
    ).exactOptional(),
    pollingDisabledAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that polling for source changes (periodic checks) was stopped for the pipeline, in timestamp format. You can migrate (update) a polling pipeline to use event-based change detection. For example, for a pipeline with a CodeCommit source, we recommend you migrate (update) your pipeline to use CloudWatch Events. To learn more, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/update-change-detection.html">Migrate polling pipelines to use event-based change detection</a> in the CodePipeline User Guide.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a pipeline.', required: [] })
  .openapi('PipelineMetadata')

const GetPipelineOutputSchema = z
  .object({
    pipeline: PipelineDeclarationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the structure of actions and stages to be performed in the pipeline. ',
        }),
    ).exactOptional(),
    metadata: PipelineMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the pipeline metadata information returned as part of the output of a <code>GetPipeline</code> action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetPipeline</code> action.',
    required: [],
  })
  .openapi('GetPipelineOutput')

const GetPipelineInputSchema = z
  .object({
    name: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the pipeline for which you want to get information. Pipeline names must be unique in an Amazon Web Services account.',
        }),
    ),
    version: PipelineVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the pipeline. If you do not specify a version, defaults to the current version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    title: 'GetPipelineInput',
    description: 'Represents the input of a <code>GetPipeline</code> action.',
  })
  .openapi('GetPipelineInput')

const PipelineVersionNotFoundExceptionSchema = z.any().openapi('PipelineVersionNotFoundException')

const PipelineExecutionStatusSchema = z
  .enum(['Cancelled', 'InProgress', 'Stopped', 'Stopping', 'Succeeded', 'Superseded', 'Failed'])
  .openapi('PipelineExecutionStatus')

const PipelineExecutionStatusSummarySchema = z.string().openapi('PipelineExecutionStatusSummary')

const RevisionChangeIdentifierSchema = z
  .string()
  .min(1)
  .max(100)
  .openapi('RevisionChangeIdentifier')

const RevisionSummarySchema = z.string().min(1).max(2048).openapi('RevisionSummary')

const ArtifactRevisionSchema = z
  .object({
    name: ArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an artifact. This name might be system-generated, such as "MyApp", or defined by the user when an action is created.',
        }),
    ).exactOptional(),
    revisionId: RevisionSchema.and(
      z.any().openapi({ description: 'The revision ID of the artifact.' }),
    ).exactOptional(),
    revisionChangeIdentifier: RevisionChangeIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'An additional identifier for a revision, such as a commit date or, for artifacts stored in Amazon S3 buckets, the ETag value.',
        }),
    ).exactOptional(),
    revisionSummary: RevisionSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information about the most recent revision of the artifact. For GitHub and CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the user-provided content of a <code>codepipeline-artifact-revision-summary</code> key specified in the object metadata.',
        }),
    ).exactOptional(),
    created: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the most recent revision of the artifact was created, in timestamp format.',
        }),
    ).exactOptional(),
    revisionUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID for the artifact revision. For artifacts stored in GitHub or CodeCommit repositories, the commit ID is linked to a commit details page.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents revision details of an artifact. ', required: [] })
  .openapi('ArtifactRevision')

const ArtifactRevisionListSchema = z.array(ArtifactRevisionSchema).openapi('ArtifactRevisionList')

const PipelineExecutionSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the pipeline with the specified pipeline execution.',
        }),
    ).exactOptional(),
    pipelineVersion: PipelineVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version number of the pipeline with the specified pipeline execution.',
        }),
    ).exactOptional(),
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z.any().openapi({ description: 'The ID of the pipeline execution.' }),
    ).exactOptional(),
    status: PipelineExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the pipeline execution.</p> <ul> <li> <p>Cancelled: The pipeline’s definition was updated before the pipeline execution could be completed.</p> </li> <li> <p>InProgress: The pipeline execution is currently running.</p> </li> <li> <p>Stopped: The pipeline execution was manually stopped. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p> </li> <li> <p>Stopping: The pipeline execution received a request to be manually stopped. Depending on the selected stop mode, the execution is either completing or abandoning in-progress actions. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p> </li> <li> <p>Succeeded: The pipeline execution was completed successfully. </p> </li> <li> <p>Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-superseded">Superseded Executions</a>.</p> </li> <li> <p>Failed: The pipeline execution was not completed successfully.</p> </li> </ul>',
        }),
    ).exactOptional(),
    statusSummary: PipelineExecutionStatusSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'A summary that contains a description of the pipeline execution status.',
        }),
    ).exactOptional(),
    artifactRevisions: ArtifactRevisionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ArtifactRevision</code> objects included in a pipeline execution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents information about an execution of a pipeline.',
    required: [],
  })
  .openapi('PipelineExecution')

const GetPipelineExecutionOutputSchema = z
  .object({
    pipelineExecution: PipelineExecutionSchema.and(
      z.any().openapi({ description: 'Represents information about the execution of a pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetPipelineExecution</code> action.',
    required: [],
  })
  .openapi('GetPipelineExecutionOutput')

const GetPipelineExecutionInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the pipeline about which you want to get execution details.',
        }),
    ),
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pipeline execution about which you want to get execution details.',
        }),
    ),
  })
  .openapi({
    required: ['pipelineName', 'pipelineExecutionId'],
    title: 'GetPipelineExecutionInput',
    description: 'Represents the input of a <code>GetPipelineExecution</code> action.',
  })
  .openapi('GetPipelineExecutionInput')

const PipelineExecutionNotFoundExceptionSchema = z
  .any()
  .openapi('PipelineExecutionNotFoundException')

const StageExecutionStatusSchema = z
  .enum(['Cancelled', 'InProgress', 'Failed', 'Stopped', 'Stopping', 'Succeeded'])
  .openapi('StageExecutionStatus')

const StageExecutionSchema = z
  .object({
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the pipeline execution associated with the stage.' }),
    ),
    status: StageExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the stage, or for a completed stage, the last status of the stage.</p> <note> <p>A status of cancelled means that the pipeline’s definition was updated before the stage execution could be completed.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['pipelineExecutionId', 'status'],
    description: 'Represents information about the run of a stage.',
  })
  .openapi('StageExecution')

const EnabledSchema = z.boolean().openapi('Enabled')

const LastChangedBySchema = z.string().openapi('LastChangedBy')

const LastChangedAtSchema = z.iso.datetime({ offset: true }).openapi('LastChangedAt')

const TransitionStateSchema = z
  .object({
    enabled: EnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the transition between stages is enabled (true) or disabled (false).',
        }),
    ).exactOptional(),
    lastChangedBy: LastChangedBySchema.and(
      z.any().openapi({ description: 'The ID of the user who last changed the transition state.' }),
    ).exactOptional(),
    lastChangedAt: LastChangedAtSchema.and(
      z.any().openapi({ description: 'The timestamp when the transition state was last changed.' }),
    ).exactOptional(),
    disabledReason: DisabledReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-specified reason why the transition between two stages of a pipeline was disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents information about the state of transitions between one stage and another stage.',
    required: [],
  })
  .openapi('TransitionState')

const ActionRevisionSchema = z
  .object({
    revisionId: RevisionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated unique ID that identifies the revision number of the action.',
        }),
    ),
    revisionChangeId: RevisionChangeIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the change that set the state to this revision (for example, a deployment ID or timestamp).',
        }),
    ),
    created: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the most recent version of the action was created, in timestamp format.',
        }),
    ),
  })
  .openapi({
    required: ['revisionId', 'revisionChangeId', 'created'],
    description: 'Represents information about the version (or revision) of an action.',
  })
  .openapi('ActionRevision')

const ActionExecutionStatusSchema = z
  .enum(['InProgress', 'Abandoned', 'Succeeded', 'Failed'])
  .openapi('ActionExecutionStatus')

const ExecutionSummarySchema = z.string().min(1).max(2048).openapi('ExecutionSummary')

const ActionExecutionTokenSchema = z.string().openapi('ActionExecutionToken')

const LastUpdatedBySchema = z.string().openapi('LastUpdatedBy')

const ExecutionIdSchema = z.string().min(1).max(1500).openapi('ExecutionId')

const PercentageSchema = z.int().min(0).max(100).openapi('Percentage')

const CodeSchema = z.string().openapi('Code')

const MessageSchema = z.string().min(1).max(5000).openapi('Message')

const ErrorDetailsSchema = z
  .object({
    code: CodeSchema.and(
      z.any().openapi({ description: 'The system ID or number code of the error.' }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: 'The text of the error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about an error in CodePipeline.', required: [] })
  .openapi('ErrorDetails')

const ActionExecutionSchema = z
  .object({
    actionExecutionId: ActionExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>ID of the workflow action execution in the current stage. Use the <a>GetPipelineState</a> action to retrieve the current action execution details of the current stage.</p> <note> <p>For older executions, this field might be empty. The action execution ID is available for executions run on or after March 2020.</p> </note>',
        }),
    ).exactOptional(),
    status: ActionExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the action, or for a completed action, the last status of the action.',
        }),
    ).exactOptional(),
    summary: ExecutionSummarySchema.and(
      z.any().openapi({ description: 'A summary of the run of the action.' }),
    ).exactOptional(),
    lastStatusChange: TimestampSchema.and(
      z.any().openapi({ description: 'The last status change of the action.' }),
    ).exactOptional(),
    token: ActionExecutionTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the <code>GetPipelineState</code> command. It is used to validate that the approval request corresponding to this token is still valid.',
        }),
    ).exactOptional(),
    lastUpdatedBy: LastUpdatedBySchema.and(
      z.any().openapi({ description: 'The ARN of the user who last changed the pipeline.' }),
    ).exactOptional(),
    externalExecutionId: ExecutionIdSchema.and(
      z.any().openapi({ description: 'The external ID of the run of the action.' }),
    ).exactOptional(),
    externalExecutionUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of a resource external to Amazon Web Services that is used when running the action (for example, an external repository URL).',
        }),
    ).exactOptional(),
    percentComplete: PercentageSchema.and(
      z.any().openapi({ description: 'A percentage of completeness of the action as it runs.' }),
    ).exactOptional(),
    errorDetails: ErrorDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of an error returned by a URL external to Amazon Web Services.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about the run of an action.', required: [] })
  .openapi('ActionExecution')

const ActionStateSchema = z
  .object({
    actionName: ActionNameSchema.and(
      z.any().openapi({ description: 'The name of the action.' }),
    ).exactOptional(),
    currentRevision: ActionRevisionSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents information about the version (or revision) of an action.',
        }),
    ).exactOptional(),
    latestExecution: ActionExecutionSchema.and(
      z.any().openapi({ description: 'Represents information about the run of an action.' }),
    ).exactOptional(),
    entityUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A URL link for more information about the state of the action, such as a deployment group details page.',
        }),
    ).exactOptional(),
    revisionUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A URL link for more information about the revision, such as a commit details page.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about the state of an action.', required: [] })
  .openapi('ActionState')

const ActionStateListSchema = z.array(ActionStateSchema).openapi('ActionStateList')

const StageStateSchema = z
  .object({
    stageName: StageNameSchema.and(
      z.any().openapi({ description: 'The name of the stage.' }),
    ).exactOptional(),
    inboundExecution: StageExecutionSchema.exactOptional(),
    inboundTransitionState: TransitionStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The state of the inbound transition, which is either enabled or disabled.',
        }),
    ).exactOptional(),
    actionStates: ActionStateListSchema.and(
      z.any().openapi({ description: 'The state of the stage.' }),
    ).exactOptional(),
    latestExecution: StageExecutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the latest execution in the stage, including its ID and status.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about the state of the stage.', required: [] })
  .openapi('StageState')

const StageStateListSchema = z.array(StageStateSchema).openapi('StageStateList')

const GetPipelineStateOutputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the pipeline for which you want to get the state.' }),
    ).exactOptional(),
    pipelineVersion: PipelineVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version number of the pipeline.</p> <note> <p>A newly created pipeline is always assigned a version number of <code>1</code>.</p> </note>',
        }),
    ).exactOptional(),
    stageStates: StageStateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the pipeline stage output information, including stage name, state, most recent run details, whether the stage is disabled, and other data.',
        }),
    ).exactOptional(),
    created: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the pipeline was created, in timestamp format.',
        }),
    ).exactOptional(),
    updated: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the pipeline was last updated, in timestamp format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetPipelineState</code> action.',
    required: [],
  })
  .openapi('GetPipelineStateOutput')

const GetPipelineStateInputSchema = z
  .object({
    name: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the pipeline about which you want to get information.',
        }),
    ),
  })
  .openapi({
    required: ['name'],
    title: 'GetPipelineStateInput',
    description: 'Represents the input of a <code>GetPipelineState</code> action.',
  })
  .openapi('GetPipelineStateInput')

const ThirdPartyJobDataSchema = z
  .object({
    actionTypeId: ActionTypeIdSchema.and(
      z.any().openapi({ description: 'Represents information about an action type.' }),
    ).exactOptional(),
    actionConfiguration: ActionConfigurationSchema.and(
      z.any().openapi({ description: 'Represents information about an action configuration.' }),
    ).exactOptional(),
    pipelineContext: PipelineContextSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents information about a pipeline to a job worker.</p> <note> <p>Does not include <code>pipelineArn</code> and <code>pipelineExecutionId</code> for ThirdParty jobs.</p> </note>',
        }),
    ).exactOptional(),
    inputArtifacts: ArtifactListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the artifact that is worked on by the action, if any. This name might be system-generated, such as "MyApp", or it might be defined by the user when the action is created. The input artifact name must match the name of an output artifact generated by an action in an earlier action or stage of the pipeline.',
        }),
    ).exactOptional(),
    outputArtifacts: ArtifactListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the artifact that is the result of the action, if any. This name might be system-generated, such as "MyBuiltApp", or it might be defined by the user when the action is created.',
        }),
    ).exactOptional(),
    artifactCredentials: AWSSessionCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in CodePipeline. ',
        }),
    ).exactOptional(),
    continuationToken: ContinuationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-generated token, such as a CodeDeploy deployment ID, that a job requires to continue the job asynchronously.',
        }),
    ).exactOptional(),
    encryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption key used to encrypt and decrypt data in the artifact store for the pipeline, such as an Amazon Web Services Key Management Service (Amazon Web Services KMS) key. This is optional and might not be present.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents information about the job data for a partner action.',
    required: [],
  })
  .openapi('ThirdPartyJobData')

const ThirdPartyJobDetailsSchema = z
  .object({
    id: ThirdPartyJobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier used to identify the job details in CodePipeline.',
        }),
    ).exactOptional(),
    data: ThirdPartyJobDataSchema.and(
      z.any().openapi({ description: 'The data to be returned by the third party job worker.' }),
    ).exactOptional(),
    nonce: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an <a>AcknowledgeThirdPartyJob</a> request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.',
    required: [],
  })
  .openapi('ThirdPartyJobDetails')

const GetThirdPartyJobDetailsOutputSchema = z
  .object({
    jobDetails: ThirdPartyJobDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of the job, including any protected values defined for the job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>GetThirdPartyJobDetails</code> action.',
    required: [],
  })
  .openapi('GetThirdPartyJobDetailsOutput')

const GetThirdPartyJobDetailsInputSchema = z
  .object({
    jobId: ThirdPartyJobIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique system-generated ID used for identifying the job.' }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.',
        }),
    ),
  })
  .openapi({
    required: ['jobId', 'clientToken'],
    title: 'GetThirdPartyJobDetailsInput',
    description: 'Represents the input of a <code>GetThirdPartyJobDetails</code> action.',
  })
  .openapi('GetThirdPartyJobDetailsInput')

const InvalidJobExceptionSchema = z.any().openapi('InvalidJobException')

const StringSchema = z.string().openapi('String')

const ResolvedActionConfigurationMapSchema = z
  .record(z.string(), StringSchema)
  .openapi('ResolvedActionConfigurationMap')

const S3BucketSchema = z.string().min(3).max(63).openapi('S3Bucket')

const S3KeySchema = z.string().min(1).max(100).openapi('S3Key')

const S3LocationSchema = z
  .object({
    bucket: S3BucketSchema.and(
      z.any().openapi({ description: "The Amazon S3 artifact bucket for an action's artifacts." }),
    ).exactOptional(),
    key: S3KeySchema.and(z.any().openapi({ description: 'The artifact name.' })).exactOptional(),
  })
  .openapi({
    description: "The Amazon S3 artifact location for an action's artifacts.",
    required: [],
  })
  .openapi('S3Location')

const ArtifactDetailSchema = z
  .object({
    name: ArtifactNameSchema.and(
      z.any().openapi({ description: 'The artifact object name for the action execution.' }),
    ).exactOptional(),
    s3location: S3LocationSchema.and(
      z.any().openapi({ description: 'The Amazon S3 artifact location for the action execution.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Artifact details for the action execution, such as the artifact location.',
    required: [],
  })
  .openapi('ArtifactDetail')

const ArtifactDetailListSchema = z.array(ArtifactDetailSchema).openapi('ArtifactDetailList')

const ActionExecutionInputSchema = z
  .object({
    actionTypeId: ActionTypeIdSchema.exactOptional(),
    configuration: ActionConfigurationMapSchema.and(
      z.any().openapi({ description: 'Configuration data for an action execution.' }),
    ).exactOptional(),
    resolvedConfiguration: ResolvedActionConfigurationMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration data for an action execution with all variable references replaced with their real values for the execution.',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline. ',
        }),
    ).exactOptional(),
    region: AWSRegionNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region for the action, such as us-east-1.',
        }),
    ).exactOptional(),
    inputArtifacts: ArtifactDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of input artifacts of the action that correspond to the action execution.',
        }),
    ).exactOptional(),
    namespace: ActionNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Input information used for an action execution.', required: [] })
  .openapi('ActionExecutionInput')

const ExternalExecutionIdSchema = z.string().openapi('ExternalExecutionId')

const ExternalExecutionSummarySchema = z.string().openapi('ExternalExecutionSummary')

const ActionExecutionResultSchema = z
  .object({
    externalExecutionId: ExternalExecutionIdSchema.and(
      z
        .any()
        .openapi({ description: "The action provider's external ID for the action execution." }),
    ).exactOptional(),
    externalExecutionSummary: ExternalExecutionSummarySchema.and(
      z.any().openapi({ description: "The action provider's summary for the action execution." }),
    ).exactOptional(),
    externalExecutionUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deepest external link to the external resource (for example, a repository URL or deployment endpoint) that is used when running the action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Execution result information, such as the external execution ID.',
    required: [],
  })
  .openapi('ActionExecutionResult')

const OutputVariablesValueSchema = z.string().openapi('OutputVariablesValue')

const OutputVariablesMapSchema = z
  .record(z.string(), OutputVariablesValueSchema)
  .openapi('OutputVariablesMap')

const ActionExecutionOutputSchema = z
  .object({
    outputArtifacts: ArtifactDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of output artifacts of the action that correspond to the action execution.',
        }),
    ).exactOptional(),
    executionResult: ActionExecutionResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'Execution result information listed in the output details for an action execution.',
        }),
    ).exactOptional(),
    outputVariables: OutputVariablesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The outputVariables field shows the key-value pairs that were output as part of that execution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Output details listed for an action execution, such as the action execution result.',
    required: [],
  })
  .openapi('ActionExecutionOutput')

const ActionExecutionDetailSchema = z
  .object({
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z.any().openapi({ description: 'The pipeline execution ID for the action execution.' }),
    ).exactOptional(),
    actionExecutionId: ActionExecutionIdSchema.and(
      z.any().openapi({ description: 'The action execution ID.' }),
    ).exactOptional(),
    pipelineVersion: PipelineVersionSchema.and(
      z.any().openapi({ description: 'The version of the pipeline where the action was run.' }),
    ).exactOptional(),
    stageName: StageNameSchema.and(
      z.any().openapi({ description: 'The name of the stage that contains the action.' }),
    ).exactOptional(),
    actionName: ActionNameSchema.and(
      z.any().openapi({ description: 'The name of the action.' }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'The start time of the action execution.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last update time of the action execution.' }),
    ).exactOptional(),
    status: ActionExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status of the action execution. Status categories are <code>InProgress</code>, <code>Succeeded</code>, and <code>Failed</code>.',
        }),
    ).exactOptional(),
    input: ActionExecutionInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Input details for the action execution, such as role ARN, Region, and input artifacts.',
        }),
    ).exactOptional(),
    output: ActionExecutionOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Output details for the action execution, such as the action execution result.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action. ',
    required: [],
  })
  .openapi('ActionExecutionDetail')

const ActionExecutionDetailListSchema = z
  .array(ActionExecutionDetailSchema)
  .openapi('ActionExecutionDetailList')

const NextTokenSchema = z.string().min(1).max(2048).openapi('NextToken')

const ListActionExecutionsOutputSchema = z
  .object({
    actionExecutionDetails: ActionExecutionDetailListSchema.and(
      z
        .any()
        .openapi({
          description: 'The details for a list of recent executions, such as action execution ID.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent <code>ListActionExecutions</code> call to return the next set of action executions in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListActionExecutionsOutput')

const ActionExecutionFilterSchema = z
  .object({
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The pipeline execution ID used to filter action execution history.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Filter values for the action execution.', required: [] })
  .openapi('ActionExecutionFilter')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListActionExecutionsInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the pipeline for which you want to list action execution history.',
        }),
    ),
    filter: ActionExecutionFilterSchema.and(
      z
        .any()
        .openapi({ description: 'Input information used to filter action execution history.' }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. Action execution history is retained for up to 12 months, based on action execution start times. Default value is 100. </p> <note> <p>Detailed execution history is available for executions run on or after February 21, 2019.</p> </note>',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that was returned from the previous <code>ListActionExecutions</code> call, which can be used to return the next set of action executions in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['pipelineName'], title: 'ListActionExecutionsInput' })
  .openapi('ListActionExecutionsInput')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ActionTypeListSchema = z.array(ActionTypeSchema).openapi('ActionTypeList')

const ListActionTypesOutputSchema = z
  .object({
    actionTypes: ActionTypeListSchema.and(
      z.any().openapi({ description: 'Provides details of the action types.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the amount of returned information is significantly large, an identifier is also returned. It can be used in a subsequent list action types call to return the next set of action types in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['actionTypes'],
    description: 'Represents the output of a <code>ListActionTypes</code> action.',
  })
  .openapi('ListActionTypesOutput')

const ListActionTypesInputSchema = z
  .object({
    actionOwnerFilter: ActionOwnerSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters the list of action types to those created by a specified entity.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous list action types call, which can be used to return the next set of action types in the list.',
        }),
    ).exactOptional(),
    regionFilter: AWSRegionNameSchema.and(
      z.any().openapi({ description: 'The Region to filter on for the list of action types.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListActionTypesInput',
    description: 'Represents the input of a <code>ListActionTypes</code> action.',
    required: [],
  })
  .openapi('ListActionTypesInput')

const SourceRevisionSchema = z
  .object({
    actionName: ActionNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the action that processed the revision to the source artifact.',
        }),
    ),
    revisionId: RevisionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated unique ID that identifies the revision number of the artifact.',
        }),
    ).exactOptional(),
    revisionSummary: RevisionSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information about the most recent revision of the artifact. For GitHub and CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the user-provided content of a <code>codepipeline-artifact-revision-summary</code> key specified in the object metadata.',
        }),
    ).exactOptional(),
    revisionUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID for the artifact revision. For artifacts stored in GitHub or CodeCommit repositories, the commit ID is linked to a commit details page.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['actionName'],
    description:
      'Information about the version (or revision) of a source artifact that initiated a pipeline execution.',
  })
  .openapi('SourceRevision')

const SourceRevisionListSchema = z.array(SourceRevisionSchema).openapi('SourceRevisionList')

const TriggerTypeSchema = z
  .enum([
    'CreatePipeline',
    'StartPipelineExecution',
    'PollForSourceChanges',
    'Webhook',
    'CloudWatchEvent',
    'PutActionRevision',
  ])
  .openapi('TriggerType')

const TriggerDetailSchema = z.string().min(0).max(1024).openapi('TriggerDetail')

const ExecutionTriggerSchema = z
  .object({
    triggerType: TriggerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of change-detection method, command, or user interaction that started a pipeline execution.',
        }),
    ).exactOptional(),
    triggerDetail: TriggerDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Detail related to the event that started a pipeline execution, such as the webhook ARN of the webhook that triggered the pipeline execution or the user ARN for a user-initiated <code>start-pipeline-execution</code> CLI command.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The interaction or event that started a pipeline execution.',
    required: [],
  })
  .openapi('ExecutionTrigger')

const StopPipelineExecutionReasonSchema = z.string().max(200).openapi('StopPipelineExecutionReason')

const StopExecutionTriggerSchema = z
  .object({
    reason: StopPipelineExecutionReasonSchema.and(
      z.any().openapi({ description: 'The user-specified reason the pipeline was stopped.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The interaction that stopped a pipeline execution.', required: [] })
  .openapi('StopExecutionTrigger')

const PipelineExecutionSummarySchema = z
  .object({
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z.any().openapi({ description: 'The ID of the pipeline execution.' }),
    ).exactOptional(),
    status: PipelineExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the pipeline execution.</p> <ul> <li> <p>InProgress: The pipeline execution is currently running.</p> </li> <li> <p>Stopped: The pipeline execution was manually stopped. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p> </li> <li> <p>Stopping: The pipeline execution received a request to be manually stopped. Depending on the selected stop mode, the execution is either completing or abandoning in-progress actions. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-executions-stopped">Stopped Executions</a>.</p> </li> <li> <p>Succeeded: The pipeline execution was completed successfully. </p> </li> <li> <p>Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts.html#concepts-superseded">Superseded Executions</a>.</p> </li> <li> <p>Failed: The pipeline execution was not completed successfully.</p> </li> </ul>',
        }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the pipeline execution began, in timestamp format.',
        }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time of the last change to the pipeline execution, in timestamp format.',
        }),
    ).exactOptional(),
    sourceRevisions: SourceRevisionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the source artifact revisions that initiated a pipeline execution.',
        }),
    ).exactOptional(),
    trigger: ExecutionTriggerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The interaction or event that started a pipeline execution, such as automated change detection or a <code>StartPipelineExecution</code> API call.',
        }),
    ).exactOptional(),
    stopTrigger: StopExecutionTriggerSchema.and(
      z.any().openapi({ description: 'The interaction that stopped a pipeline execution.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a pipeline execution.', required: [] })
  .openapi('PipelineExecutionSummary')

const PipelineExecutionSummaryListSchema = z
  .array(PipelineExecutionSummarySchema)
  .openapi('PipelineExecutionSummaryList')

const ListPipelineExecutionsOutputSchema = z
  .object({
    pipelineExecutionSummaries: PipelineExecutionSummaryListSchema.and(
      z.any().openapi({ description: 'A list of executions in the history of a pipeline.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that can be used in the next <code>ListPipelineExecutions</code> call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>ListPipelineExecutions</code> action.',
    required: [],
  })
  .openapi('ListPipelineExecutionsOutput')

const ListPipelineExecutionsInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the pipeline for which you want to get execution summary information.',
        }),
    ),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. Pipeline history is limited to the most recent 12 months, based on pipeline execution start times. Default value is 100.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that was returned from the previous <code>ListPipelineExecutions</code> call, which can be used to return the next set of pipeline executions in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineName'],
    title: 'ListPipelineExecutionsInput',
    description: 'Represents the input of a <code>ListPipelineExecutions</code> action.',
  })
  .openapi('ListPipelineExecutionsInput')

const PipelineSummarySchema = z
  .object({
    name: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline.' }),
    ).exactOptional(),
    version: PipelineVersionSchema.and(
      z.any().openapi({ description: 'The version number of the pipeline.' }),
    ).exactOptional(),
    created: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the pipeline was created, in timestamp format.',
        }),
    ).exactOptional(),
    updated: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time of the last update to the pipeline, in timestamp format.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns a summary of a pipeline.', required: [] })
  .openapi('PipelineSummary')

const PipelineListSchema = z.array(PipelineSummarySchema).openapi('PipelineList')

const ListPipelinesOutputSchema = z
  .object({
    pipelines: PipelineListSchema.and(
      z.any().openapi({ description: 'The list of pipelines.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the amount of returned information is significantly large, an identifier is also returned. It can be used in a subsequent list pipelines call to return the next set of pipelines in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>ListPipelines</code> action.',
    required: [],
  })
  .openapi('ListPipelinesOutput')

const MaxPipelinesSchema = z.int().min(1).max(1000).openapi('MaxPipelines')

const ListPipelinesInputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous list pipelines call. It can be used to return the next set of pipelines in the list.',
        }),
    ).exactOptional(),
    maxResults: MaxPipelinesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of pipelines to return in a single call. To retrieve the remaining pipelines, make another call with the returned nextToken value. The minimum value you can specify is 1. The maximum accepted value is 1000.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListPipelinesInput',
    description: 'Represents the input of a <code>ListPipelines</code> action.',
    required: [],
  })
  .openapi('ListPipelinesInput')

const ListTagsForResourceOutputSchema = z
  .object({
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent API call to return the next page of the list. The ListTagsforResource call lists all available tags in one call and does not use pagination.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const ResourceArnSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:codepipeline:.+:[0-9]{12}:.+/)
  .openapi('ResourceArn')

const ListTagsForResourceInputSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource to get tags for.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that was returned from the previous API call, which would be used to return the next page of the list. The ListTagsforResource call lists all available tags in one call and does not use pagination.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidArnExceptionSchema = z.any().openapi('InvalidArnException')

const JsonPathSchema = z.string().min(1).max(150).openapi('JsonPath')

const MatchEqualsSchema = z.string().min(1).max(150).openapi('MatchEquals')

const WebhookFilterRuleSchema = z
  .object({
    jsonPath: JsonPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JsonPath expression that is applied to the body/payload of the webhook. The value selected by the JsonPath expression must match the value specified in the <code>MatchEquals</code> field. Otherwise, the request is ignored. For more information, see <a href="https://github.com/json-path/JsonPath">Java JsonPath implementation</a> in GitHub.',
        }),
    ),
    matchEquals: MatchEqualsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value selected by the <code>JsonPath</code> expression must match what is supplied in the <code>MatchEquals</code> field. Otherwise, the request is ignored. Properties from the target action configuration can be included as placeholders in this value by surrounding the action configuration key with curly brackets. For example, if the value supplied here is "refs/heads/{Branch}" and the target action has an action configuration property called "Branch" with a value of "main", the <code>MatchEquals</code> value is evaluated as "refs/heads/main". For a list of action configuration properties for built-in action types, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements">Pipeline Structure Reference Action Requirements</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jsonPath'],
    description: 'The event criteria that specify when a webhook notification is sent to your URL.',
  })
  .openapi('WebhookFilterRule')

const WebhookFiltersSchema = z.array(WebhookFilterRuleSchema).max(5).openapi('WebhookFilters')

const WebhookAuthenticationTypeSchema = z
  .enum(['GITHUB_HMAC', 'IP', 'UNAUTHENTICATED'])
  .openapi('WebhookAuthenticationType')

const WebhookAuthConfigurationAllowedIPRangeSchema = z
  .string()
  .min(1)
  .max(100)
  .openapi('WebhookAuthConfigurationAllowedIPRange')

const WebhookAuthConfigurationSecretTokenSchema = z
  .string()
  .min(1)
  .max(100)
  .openapi('WebhookAuthConfigurationSecretToken')

const WebhookAuthConfigurationSchema = z
  .object({
    AllowedIPRange: WebhookAuthConfigurationAllowedIPRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property used to configure acceptance of webhooks in an IP address range. For IP, only the <code>AllowedIPRange</code> property must be set. This property must be set to a valid CIDR range.',
        }),
    ).exactOptional(),
    SecretToken: WebhookAuthConfigurationSecretTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property used to configure GitHub authentication. For GITHUB_HMAC, only the <code>SecretToken</code> property must be set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The authentication applied to incoming webhook trigger requests.',
    required: [],
  })
  .openapi('WebhookAuthConfiguration')

const WebhookDefinitionSchema = z
  .object({
    name: WebhookNameSchema.and(z.any().openapi({ description: 'The name of the webhook.' })),
    targetPipeline: PipelineNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the pipeline you want to connect to the webhook.' }),
    ),
    targetAction: ActionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline.',
        }),
    ),
    filters: WebhookFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of rules applied to the body/payload sent in the POST request to a webhook URL. All defined rules must pass for the request to be accepted and the pipeline started.',
        }),
    ),
    authentication: WebhookAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.</p> <ul> <li> <p>For information about the authentication scheme implemented by GITHUB_HMAC, see <a href="https://developer.github.com/webhooks/securing/">Securing your webhooks</a> on the GitHub Developer website.</p> </li> <li> <p> IP rejects webhooks trigger requests unless they originate from an IP address in the IP range whitelisted in the authentication configuration.</p> </li> <li> <p> UNAUTHENTICATED accepts all webhook trigger requests regardless of origin.</p> </li> </ul>',
        }),
    ),
    authenticationConfiguration: WebhookAuthConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Properties that configure the authentication applied to incoming webhook trigger requests. The required properties depend on the authentication type. For GITHUB_HMAC, only the <code>SecretToken </code>property must be set. For IP, only the <code>AllowedIPRange </code>property must be set to a valid CIDR range. For UNAUTHENTICATED, no properties can be set.',
        }),
    ),
  })
  .openapi({
    required: [
      'name',
      'targetPipeline',
      'targetAction',
      'filters',
      'authentication',
      'authenticationConfiguration',
    ],
    description: 'Represents information about a webhook and its definition.',
  })
  .openapi('WebhookDefinition')

const WebhookUrlSchema = z.string().min(1).max(1000).openapi('WebhookUrl')

const WebhookErrorMessageSchema = z.string().openapi('WebhookErrorMessage')

const WebhookErrorCodeSchema = z.string().openapi('WebhookErrorCode')

const WebhookLastTriggeredSchema = z.iso.datetime({ offset: true }).openapi('WebhookLastTriggered')

const WebhookArnSchema = z.string().openapi('WebhookArn')

const ListWebhookItemSchema = z
  .object({
    definition: WebhookDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The detail returned for each webhook, such as the webhook authentication type and filter rules.',
        }),
    ),
    url: WebhookUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique URL generated by CodePipeline. When a POST request is made to this URL, the defined pipeline is started as long as the body of the post request satisfies the defined authentication and filtering conditions. Deleting and re-creating a webhook makes the old URL invalid and generates a new one.',
        }),
    ),
    errorMessage: WebhookErrorMessageSchema.and(
      z.any().openapi({ description: 'The text of the error message about the webhook.' }),
    ).exactOptional(),
    errorCode: WebhookErrorCodeSchema.and(
      z.any().openapi({ description: 'The number code of the error.' }),
    ).exactOptional(),
    lastTriggered: WebhookLastTriggeredSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a webhook was last successfully triggered, in timestamp format.',
        }),
    ).exactOptional(),
    arn: WebhookArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the webhook.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'Specifies the tags applied to the webhook.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['definition', 'url'],
    description:
      'The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.',
  })
  .openapi('ListWebhookItem')

const WebhookListSchema = z.array(ListWebhookItemSchema).openapi('WebhookList')

const ListWebhooksOutputSchema = z
  .object({
    webhooks: WebhookListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON detail returned for each webhook in the list output for the ListWebhooks call.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent ListWebhooks call to return the next set of webhooks in the list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWebhooksOutput')

const ListWebhooksInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that was returned from the previous ListWebhooks call, which can be used to return the next set of webhooks in the list.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWebhooksInput', required: [] })
  .openapi('ListWebhooksInput')

const JobSchema = z
  .object({
    id: JobIdSchema.and(
      z.any().openapi({ description: 'The unique system-generated ID of the job.' }),
    ).exactOptional(),
    data: JobDataSchema.and(
      z.any().openapi({ description: 'Other data about a job.' }),
    ).exactOptional(),
    nonce: NonceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-generated random number that CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an <a>AcknowledgeJob</a> request.',
        }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account to use when performing the job.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about a job.', required: [] })
  .openapi('Job')

const JobListSchema = z.array(JobSchema).openapi('JobList')

const PollForJobsOutputSchema = z
  .object({
    jobs: JobListSchema.and(
      z.any().openapi({ description: 'Information about the jobs to take action on.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>PollForJobs</code> action.',
    required: [],
  })
  .openapi('PollForJobsOutput')

const MaxBatchSizeSchema = z.int().min(1).openapi('MaxBatchSize')

const ActionConfigurationQueryableValueSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .min(1)
  .max(50)
  .openapi('ActionConfigurationQueryableValue')

const QueryParamMapSchema = z
  .record(z.string(), ActionConfigurationQueryableValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 1)
  .openapi('QueryParamMap')

const PollForJobsInputSchema = z
  .object({
    actionTypeId: ActionTypeIdSchema.and(
      z.any().openapi({ description: 'Represents information about an action type.' }),
    ),
    maxBatchSize: MaxBatchSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of jobs to return in a poll for jobs call.' }),
    ).exactOptional(),
    queryParam: QueryParamMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of property names and values. For an action type with no queryable properties, this value must be null or an empty map. For an action type with a queryable property, you must supply that property as a key in the map. Only jobs whose action configuration matches the mapped value are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['actionTypeId'],
    title: 'PollForJobsInput',
    description: 'Represents the input of a <code>PollForJobs</code> action.',
  })
  .openapi('PollForJobsInput')

const ClientIdSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi('ClientId')

const ThirdPartyJobSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>clientToken</code> portion of the <code>clientId</code> and <code>clientToken</code> pair used to verify that the calling entity is allowed access to the job and its details.',
        }),
    ).exactOptional(),
    jobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier used to identify the job in CodePipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A response to a <code>PollForThirdPartyJobs</code> request returned by CodePipeline when there is a job to be worked on by a partner action.',
    required: [],
  })
  .openapi('ThirdPartyJob')

const ThirdPartyJobListSchema = z.array(ThirdPartyJobSchema).openapi('ThirdPartyJobList')

const PollForThirdPartyJobsOutputSchema = z
  .object({
    jobs: ThirdPartyJobListSchema.and(
      z.any().openapi({ description: 'Information about the jobs to take action on.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>PollForThirdPartyJobs</code> action.',
    required: [],
  })
  .openapi('PollForThirdPartyJobsOutput')

const PollForThirdPartyJobsInputSchema = z
  .object({
    actionTypeId: ActionTypeIdSchema.and(
      z.any().openapi({ description: 'Represents information about an action type.' }),
    ),
    maxBatchSize: MaxBatchSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of jobs to return in a poll for jobs call.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['actionTypeId'],
    title: 'PollForThirdPartyJobsInput',
    description: 'Represents the input of a <code>PollForThirdPartyJobs</code> action.',
  })
  .openapi('PollForThirdPartyJobsInput')

const PutActionRevisionOutputSchema = z
  .object({
    newRevision: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the artifact revision was previously used in an execution of the specified pipeline.',
        }),
    ).exactOptional(),
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z.any().openapi({ description: 'The ID of the current workflow state of the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>PutActionRevision</code> action.',
    required: [],
  })
  .openapi('PutActionRevisionOutput')

const PutActionRevisionInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the pipeline that starts processing the revision to the source.',
        }),
    ),
    stageName: StageNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stage that contains the action that acts on the revision.',
        }),
    ),
    actionName: ActionNameSchema.and(
      z.any().openapi({ description: 'The name of the action that processes the revision.' }),
    ),
    actionRevision: ActionRevisionSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents information about the version (or revision) of an action.',
        }),
    ),
  })
  .openapi({
    required: ['pipelineName', 'stageName', 'actionName', 'actionRevision'],
    title: 'PutActionRevisionInput',
    description: 'Represents the input of a <code>PutActionRevision</code> action.',
  })
  .openapi('PutActionRevisionInput')

const ActionNotFoundExceptionSchema = z.any().openapi('ActionNotFoundException')

const PutApprovalResultOutputSchema = z
  .object({
    approvedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp showing when the approval or rejection was submitted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>PutApprovalResult</code> action.',
    required: [],
  })
  .openapi('PutApprovalResultOutput')

const ApprovalSummarySchema = z.string().min(0).max(512).openapi('ApprovalSummary')

const ApprovalStatusSchema = z.enum(['Approved', 'Rejected']).openapi('ApprovalStatus')

const ApprovalResultSchema = z
  .object({
    summary: ApprovalSummarySchema.and(
      z
        .any()
        .openapi({ description: 'The summary of the current status of the approval request.' }),
    ),
    status: ApprovalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response submitted by a reviewer assigned to an approval action request.',
        }),
    ),
  })
  .openapi({
    required: ['summary', 'status'],
    description: 'Represents information about the result of an approval request.',
  })
  .openapi('ApprovalResult')

const ApprovalTokenSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi('ApprovalToken')

const PutApprovalResultInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline that contains the action. ' }),
    ),
    stageName: StageNameSchema.and(
      z.any().openapi({ description: 'The name of the stage that contains the action.' }),
    ),
    actionName: ActionNameSchema.and(
      z.any().openapi({ description: 'The name of the action for which approval is requested.' }),
    ),
    result: ApprovalResultSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents information about the result of the approval request.',
        }),
    ),
    token: ApprovalTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the <a>GetPipelineState</a> action. It is used to validate that the approval request corresponding to this token is still valid.',
        }),
    ),
  })
  .openapi({
    required: ['pipelineName', 'stageName', 'actionName', 'result', 'token'],
    title: 'PutApprovalResultInput',
    description: 'Represents the input of a <code>PutApprovalResult</code> action.',
  })
  .openapi('PutApprovalResultInput')

const InvalidApprovalTokenExceptionSchema = z.any().openapi('InvalidApprovalTokenException')

const ApprovalAlreadyCompletedExceptionSchema = z.any().openapi('ApprovalAlreadyCompletedException')

const FailureTypeSchema = z
  .enum([
    'JobFailed',
    'ConfigurationError',
    'PermissionError',
    'RevisionOutOfSync',
    'RevisionUnavailable',
    'SystemUnavailable',
  ])
  .openapi('FailureType')

const FailureDetailsSchema = z
  .object({
    type: FailureTypeSchema.and(z.any().openapi({ description: 'The type of the failure.' })),
    message: MessageSchema.and(z.any().openapi({ description: 'The message about the failure.' })),
    externalExecutionId: ExecutionIdSchema.and(
      z.any().openapi({ description: 'The external ID of the run of the action that failed.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type', 'message'],
    description: 'Represents information about failure details.',
  })
  .openapi('FailureDetails')

const PutJobFailureResultInputSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique system-generated ID of the job that failed. This is the same ID returned from <code>PollForJobs</code>.',
        }),
    ),
    failureDetails: FailureDetailsSchema.and(
      z.any().openapi({ description: 'The details about the failure of a job.' }),
    ),
  })
  .openapi({
    required: ['jobId', 'failureDetails'],
    title: 'PutJobFailureResultInput',
    description: 'Represents the input of a <code>PutJobFailureResult</code> action.',
  })
  .openapi('PutJobFailureResultInput')

const InvalidJobStateExceptionSchema = z.any().openapi('InvalidJobStateException')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const CurrentRevisionSchema = z
  .object({
    revision: RevisionSchema.and(
      z.any().openapi({ description: 'The revision ID of the current version of an artifact.' }),
    ),
    changeIdentifier: RevisionChangeIdentifierSchema.and(
      z.any().openapi({ description: 'The change identifier for the current revision.' }),
    ),
    created: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the most recent revision of the artifact was created, in timestamp format.',
        }),
    ).exactOptional(),
    revisionSummary: RevisionSummarySchema.and(
      z.any().openapi({ description: 'The summary of the most recent revision of the artifact.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['revision', 'changeIdentifier'],
    description: 'Represents information about a current revision.',
  })
  .openapi('CurrentRevision')

const ExecutionDetailsSchema = z
  .object({
    summary: ExecutionSummarySchema.and(
      z.any().openapi({ description: 'The summary of the current status of the actions.' }),
    ).exactOptional(),
    externalExecutionId: ExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated unique ID of this action used to identify this job worker in any external systems, such as CodeDeploy.',
        }),
    ).exactOptional(),
    percentComplete: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of work completed on the action, represented on a scale of 0 to 100 percent.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.',
    required: [],
  })
  .openapi('ExecutionDetails')

const PutJobSuccessResultInputSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique system-generated ID of the job that succeeded. This is the same ID returned from <code>PollForJobs</code>.',
        }),
    ),
    currentRevision: CurrentRevisionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the current revision of the artifact successfully worked on by the job.',
        }),
    ).exactOptional(),
    continuationToken: ContinuationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by a job worker, such as a CodeDeploy deployment ID, that a successful job provides to identify a custom action in progress. Future jobs use this token to identify the running instance of the action. It can be reused to return more information about the progress of the custom action. When the action is complete, no continuation token should be supplied.',
        }),
    ).exactOptional(),
    executionDetails: ExecutionDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The execution details of the successful job, such as the actions taken by the job worker.',
        }),
    ).exactOptional(),
    outputVariables: OutputVariablesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs produced as output by a job worker that can be made available to a downstream action configuration. <code>outputVariables</code> can be included only when there is no continuation token on the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobId'],
    title: 'PutJobSuccessResultInput',
    description: 'Represents the input of a <code>PutJobSuccessResult</code> action.',
  })
  .openapi('PutJobSuccessResultInput')

const OutputVariablesSizeExceededExceptionSchema = z
  .any()
  .openapi('OutputVariablesSizeExceededException')

const PutThirdPartyJobFailureResultInputSchema = z
  .object({
    jobId: ThirdPartyJobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the job that failed. This is the same ID returned from <code>PollForThirdPartyJobs</code>.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.',
        }),
    ),
    failureDetails: FailureDetailsSchema.and(
      z.any().openapi({ description: 'Represents information about failure details.' }),
    ),
  })
  .openapi({
    required: ['jobId', 'clientToken', 'failureDetails'],
    title: 'PutThirdPartyJobFailureResultInput',
    description: 'Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.',
  })
  .openapi('PutThirdPartyJobFailureResultInput')

const PutThirdPartyJobSuccessResultInputSchema = z
  .object({
    jobId: ThirdPartyJobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the job that successfully completed. This is the same ID returned from <code>PollForThirdPartyJobs</code>.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The clientToken portion of the clientId and clientToken pair used to verify that the calling entity is allowed access to the job and its details.',
        }),
    ),
    currentRevision: CurrentRevisionSchema.and(
      z.any().openapi({ description: 'Represents information about a current revision.' }),
    ).exactOptional(),
    continuationToken: ContinuationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token generated by a job worker, such as a CodeDeploy deployment ID, that a successful job provides to identify a partner action in progress. Future jobs use this token to identify the running instance of the action. It can be reused to return more information about the progress of the partner action. When the action is complete, no continuation token should be supplied.',
        }),
    ).exactOptional(),
    executionDetails: ExecutionDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobId', 'clientToken'],
    title: 'PutThirdPartyJobSuccessResultInput',
    description: 'Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action.',
  })
  .openapi('PutThirdPartyJobSuccessResultInput')

const PutWebhookOutputSchema = z
  .object({
    webhook: ListWebhookItemSchema.and(
      z
        .any()
        .openapi({
          description:
            'The detail returned from creating the webhook, such as the webhook name, webhook URL, and webhook ARN.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutWebhookOutput')

const PutWebhookInputSchema = z
  .object({
    webhook: WebhookDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The detail provided in an input file to create the webhook, such as the webhook name, the pipeline name, and the action name. Give the webhook a unique name that helps you identify it. You might name the webhook after the pipeline and action it targets so that you can easily recognize what it's used for later.",
        }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the webhook.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['webhook'], title: 'PutWebhookInput' })
  .openapi('PutWebhookInput')

const InvalidWebhookFilterPatternExceptionSchema = z
  .any()
  .openapi('InvalidWebhookFilterPatternException')

const InvalidWebhookAuthenticationParametersExceptionSchema = z
  .any()
  .openapi('InvalidWebhookAuthenticationParametersException')

const RegisterWebhookWithThirdPartyOutputSchema = z
  .object({})
  .openapi('RegisterWebhookWithThirdPartyOutput')

const RegisterWebhookWithThirdPartyInputSchema = z
  .object({
    webhookName: WebhookNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an existing webhook created with PutWebhook to register with a supported third party. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'RegisterWebhookWithThirdPartyInput', required: [] })
  .openapi('RegisterWebhookWithThirdPartyInput')

const RetryStageExecutionOutputSchema = z
  .object({
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the current workflow execution in the failed stage.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>RetryStageExecution</code> action.',
    required: [],
  })
  .openapi('RetryStageExecutionOutput')

const StageRetryModeSchema = z.literal('FAILED_ACTIONS').openapi('StageRetryMode')

const RetryStageExecutionInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline that contains the failed stage.' }),
    ),
    stageName: StageNameSchema.and(
      z.any().openapi({ description: 'The name of the failed stage to be retried.' }),
    ),
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pipeline execution in the failed stage to be retried. Use the <a>GetPipelineState</a> action to retrieve the current pipelineExecutionId of the failed stage',
        }),
    ),
    retryMode: StageRetryModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scope of the retry attempt. Currently, the only supported value is FAILED_ACTIONS.',
        }),
    ),
  })
  .openapi({
    required: ['pipelineName', 'stageName', 'pipelineExecutionId', 'retryMode'],
    title: 'RetryStageExecutionInput',
    description: 'Represents the input of a <code>RetryStageExecution</code> action.',
  })
  .openapi('RetryStageExecutionInput')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const StageNotRetryableExceptionSchema = z.any().openapi('StageNotRetryableException')

const NotLatestPipelineExecutionExceptionSchema = z
  .any()
  .openapi('NotLatestPipelineExecutionException')

const StartPipelineExecutionOutputSchema = z
  .object({
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique system-generated ID of the pipeline execution that was started.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>StartPipelineExecution</code> action.',
    required: [],
  })
  .openapi('StartPipelineExecutionOutput')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(128)
  .openapi('ClientRequestToken')

const StartPipelineExecutionInputSchema = z
  .object({
    name: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline to start.' }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated unique ID used to identify a unique execution request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    title: 'StartPipelineExecutionInput',
    description: 'Represents the input of a <code>StartPipelineExecution</code> action.',
  })
  .openapi('StartPipelineExecutionInput')

const StopPipelineExecutionOutputSchema = z
  .object({
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique system-generated ID of the pipeline execution that was stopped.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopPipelineExecutionOutput')

const StopPipelineExecutionInputSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline to stop.' }),
    ),
    pipelineExecutionId: PipelineExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pipeline execution to be stopped in the current stage. Use the <code>GetPipelineState</code> action to retrieve the current pipelineExecutionId.',
        }),
    ),
    abandon: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use this option to stop the pipeline execution by abandoning, rather than finishing, in-progress actions.</p> <note> <p>This option can lead to failed or out-of-sequence tasks.</p> </note>',
        }),
    ).exactOptional(),
    reason: StopPipelineExecutionReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this option to enter comments, such as the reason the pipeline was stopped.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pipelineName', 'pipelineExecutionId'],
    title: 'StopPipelineExecutionInput',
  })
  .openapi('StopPipelineExecutionInput')

const PipelineExecutionNotStoppableExceptionSchema = z
  .any()
  .openapi('PipelineExecutionNotStoppableException')

const DuplicatedStopRequestExceptionSchema = z.any().openapi('DuplicatedStopRequestException')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const TagResourceInputSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource you want to add tags to.',
        }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags you want to modify or add to the resource.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceInputSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) of the resource to remove tags from.',
        }),
    ),
    tagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of keys for the tags to be removed from the resource.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateActionTypeInputSchema = z
  .object({
    actionType: ActionTypeDeclarationSchema.and(
      z
        .any()
        .openapi({ description: 'The action type definition for the action type to be updated.' }),
    ),
  })
  .openapi({ required: ['actionType'], title: 'UpdateActionTypeInput' })
  .openapi('UpdateActionTypeInput')

const RequestFailedExceptionSchema = z.any().openapi('RequestFailedException')

const UpdatePipelineOutputSchema = z
  .object({
    pipeline: PipelineDeclarationSchema.and(
      z.any().openapi({ description: 'The structure of the updated pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of an <code>UpdatePipeline</code> action.',
    required: [],
  })
  .openapi('UpdatePipelineOutput')

const UpdatePipelineInputSchema = z
  .object({
    pipeline: PipelineDeclarationSchema.and(
      z.any().openapi({ description: 'The name of the pipeline to be updated.' }),
    ),
  })
  .openapi({
    required: ['pipeline'],
    title: 'UpdatePipelineInput',
    description: 'Represents the input of an <code>UpdatePipeline</code> action.',
  })
  .openapi('UpdatePipelineInput')

const PropertyDescriptionSchema = z.string().min(1).max(250).openapi('PropertyDescription')

const ActionTypePropertySchema = z
  .object({
    name: ActionConfigurationKeySchema.and(
      z.any().openapi({ description: 'The property name that is displayed to users.' }),
    ),
    optional: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the configuration property is an optional value.' }),
    ),
    key: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the configuration property is a key.' }),
    ),
    noEcho: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to omit the field value entered by the customer in the log. If <code>true</code>, the value is not saved in CloudTrail logs for the action execution.',
        }),
    ),
    queryable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that the property is used with polling. An action type can have up to one queryable property. If it has one, that property must be both required and not secret.',
        }),
    ).exactOptional(),
    description: PropertyDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description of the property that is displayed to users.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'optional', 'key', 'noEcho'],
    description:
      'Represents information about each property specified in the action configuration, such as the description and key name that display for the customer using the action type.',
  })
  .openapi('ActionTypeProperty')

const ActionTypePropertiesSchema = z
  .array(ActionTypePropertySchema)
  .max(10)
  .openapi('ActionTypeProperties')

const OutputVariablesKeySchema = z
  .string()
  .regex(/[A-Za-z0-9@\-_]+/)
  .openapi('OutputVariablesKey')

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

export const postXAmzTargetCodePipeline20150709AcknowledgeJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob',
  description:
    'Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.',
  operationId: 'AcknowledgeJob',
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
        .literal('CodePipeline_20150709.AcknowledgeJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.AcknowledgeJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AcknowledgeJobInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcknowledgeJobOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidNonceException',
      content: { 'application/json': { schema: InvalidNonceExceptionSchema } },
    },
    482: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob',
  description:
    'Confirms a job worker has received the specified job. Used for partner actions only.',
  operationId: 'AcknowledgeThirdPartyJob',
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
        .literal('CodePipeline_20150709.AcknowledgeThirdPartyJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.AcknowledgeThirdPartyJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AcknowledgeThirdPartyJobInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcknowledgeThirdPartyJobOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidNonceException',
      content: { 'application/json': { schema: InvalidNonceExceptionSchema } },
    },
    482: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709CreateCustomActionTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType',
  description:
    'Creates a new custom action that can be used in all pipelines associated with the Amazon Web Services account. Only used for custom actions.',
  operationId: 'CreateCustomActionType',
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
        .literal('CodePipeline_20150709.CreateCustomActionType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.CreateCustomActionType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCustomActionTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCustomActionTypeOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'InvalidTagsException',
      content: { 'application/json': { schema: InvalidTagsExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709CreatePipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.CreatePipeline',
  description:
    '<p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>',
  operationId: 'CreatePipeline',
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
        .literal('CodePipeline_20150709.CreatePipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.CreatePipeline'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePipelineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePipelineOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PipelineNameInUseException',
      content: { 'application/json': { schema: PipelineNameInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidStageDeclarationException',
      content: { 'application/json': { schema: InvalidStageDeclarationExceptionSchema } },
    },
    483: {
      description: 'InvalidActionDeclarationException',
      content: { 'application/json': { schema: InvalidActionDeclarationExceptionSchema } },
    },
    484: {
      description: 'InvalidBlockerDeclarationException',
      content: { 'application/json': { schema: InvalidBlockerDeclarationExceptionSchema } },
    },
    485: {
      description: 'InvalidStructureException',
      content: { 'application/json': { schema: InvalidStructureExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    487: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    488: {
      description: 'InvalidTagsException',
      content: { 'application/json': { schema: InvalidTagsExceptionSchema } },
    },
    489: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709DeleteCustomActionTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType',
  description:
    '<p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>',
  operationId: 'DeleteCustomActionType',
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
        .literal('CodePipeline_20150709.DeleteCustomActionType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.DeleteCustomActionType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCustomActionTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709DeletePipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.DeletePipeline',
  description: 'Deletes the specified pipeline.',
  operationId: 'DeletePipeline',
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
        .literal('CodePipeline_20150709.DeletePipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.DeletePipeline'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePipelineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709DeleteWebhookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.DeleteWebhook',
  description:
    'Deletes a previously created webhook by name. Deleting the webhook stops CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.',
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
      'X-Amz-Target': z
        .literal('CodePipeline_20150709.DeleteWebhook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.DeleteWebhook'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteWebhookInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWebhookOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty',
  description:
    'Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.',
  operationId: 'DeregisterWebhookWithThirdParty',
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
        .literal('CodePipeline_20150709.DeregisterWebhookWithThirdParty')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodePipeline_20150709.DeregisterWebhookWithThirdParty'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterWebhookWithThirdPartyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterWebhookWithThirdPartyOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'WebhookNotFoundException',
      content: { 'application/json': { schema: WebhookNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709DisableStageTransitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.DisableStageTransition',
  description:
    'Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.',
  operationId: 'DisableStageTransition',
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
        .literal('CodePipeline_20150709.DisableStageTransition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.DisableStageTransition'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableStageTransitionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    482: {
      description: 'StageNotFoundException',
      content: { 'application/json': { schema: StageNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709EnableStageTransitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.EnableStageTransition',
  description: 'Enables artifacts in a pipeline to transition to a stage in a pipeline.',
  operationId: 'EnableStageTransition',
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
        .literal('CodePipeline_20150709.EnableStageTransition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.EnableStageTransition'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableStageTransitionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    482: {
      description: 'StageNotFoundException',
      content: { 'application/json': { schema: StageNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709GetActionTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.GetActionType',
  description:
    'Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.',
  operationId: 'GetActionType',
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
        .literal('CodePipeline_20150709.GetActionType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.GetActionType'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetActionTypeInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetActionTypeOutputSchema } },
    },
    480: {
      description: 'ActionTypeNotFoundException',
      content: { 'application/json': { schema: ActionTypeNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709GetJobDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.GetJobDetails',
  description:
    '<p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>',
  operationId: 'GetJobDetails',
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
        .literal('CodePipeline_20150709.GetJobDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.GetJobDetails'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetJobDetailsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobDetailsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709GetPipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.GetPipeline',
  description:
    'Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.',
  operationId: 'GetPipeline',
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
        .literal('CodePipeline_20150709.GetPipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.GetPipeline'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetPipelineInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPipelineOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    482: {
      description: 'PipelineVersionNotFoundException',
      content: { 'application/json': { schema: PipelineVersionNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709GetPipelineExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution',
  description:
    'Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.',
  operationId: 'GetPipelineExecution',
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
        .literal('CodePipeline_20150709.GetPipelineExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.GetPipelineExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPipelineExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPipelineExecutionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    482: {
      description: 'PipelineExecutionNotFoundException',
      content: { 'application/json': { schema: PipelineExecutionNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709GetPipelineStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.GetPipelineState',
  description:
    '<p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>',
  operationId: 'GetPipelineState',
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
        .literal('CodePipeline_20150709.GetPipelineState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.GetPipelineState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPipelineStateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPipelineStateOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails',
  description:
    '<p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>',
  operationId: 'GetThirdPartyJobDetails',
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
        .literal('CodePipeline_20150709.GetThirdPartyJobDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.GetThirdPartyJobDetails'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetThirdPartyJobDetailsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetThirdPartyJobDetailsOutputSchema } },
    },
    480: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidJobException',
      content: { 'application/json': { schema: InvalidJobExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709ListActionExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.ListActionExecutions',
  description: 'Lists the action executions that have occurred in a pipeline.',
  operationId: 'ListActionExecutions',
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
        .literal('CodePipeline_20150709.ListActionExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.ListActionExecutions'] },
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
      content: { 'application/json': { schema: ListActionExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListActionExecutionsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'PipelineExecutionNotFoundException',
      content: { 'application/json': { schema: PipelineExecutionNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709ListActionTypesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.ListActionTypes',
  description: 'Gets a summary of all CodePipeline action types associated with your account.',
  operationId: 'ListActionTypes',
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
        .literal('CodePipeline_20150709.ListActionTypes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.ListActionTypes'] },
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
      content: { 'application/json': { schema: ListActionTypesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListActionTypesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709ListPipelineExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions',
  description: 'Gets a summary of the most recent executions for a pipeline.',
  operationId: 'ListPipelineExecutions',
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
        .literal('CodePipeline_20150709.ListPipelineExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.ListPipelineExecutions'] },
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
      content: { 'application/json': { schema: ListPipelineExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPipelineExecutionsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709ListPipelinesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.ListPipelines',
  description: 'Gets a summary of all of the pipelines associated with your account.',
  operationId: 'ListPipelines',
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
        .literal('CodePipeline_20150709.ListPipelines')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.ListPipelines'] },
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
    body: { content: { 'application/json': { schema: ListPipelinesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPipelinesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.ListTagsForResource',
  description: 'Gets the set of key-value pairs (metadata) that are used to manage the resource.',
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
        .literal('CodePipeline_20150709.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.ListTagsForResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709ListWebhooksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.ListWebhooks',
  description:
    'Gets a listing of all the webhooks in this Amazon Web Services Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.',
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
      'X-Amz-Target': z
        .literal('CodePipeline_20150709.ListWebhooks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.ListWebhooks'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListWebhooksInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWebhooksOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PollForJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PollForJobs',
  description:
    '<p>Returns information about any jobs for CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains <code>AWS</code> or <code>ThirdParty</code> in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>',
  operationId: 'PollForJobs',
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
        .literal('CodePipeline_20150709.PollForJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.PollForJobs'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PollForJobsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PollForJobsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ActionTypeNotFoundException',
      content: { 'application/json': { schema: ActionTypeNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PollForThirdPartyJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs',
  description:
    '<p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>',
  operationId: 'PollForThirdPartyJobs',
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
        .literal('CodePipeline_20150709.PollForThirdPartyJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.PollForThirdPartyJobs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PollForThirdPartyJobsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PollForThirdPartyJobsOutputSchema } },
    },
    480: {
      description: 'ActionTypeNotFoundException',
      content: { 'application/json': { schema: ActionTypeNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PutActionRevisionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PutActionRevision',
  description: 'Provides information to CodePipeline about new revisions to a source.',
  operationId: 'PutActionRevision',
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
        .literal('CodePipeline_20150709.PutActionRevision')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.PutActionRevision'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutActionRevisionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutActionRevisionOutputSchema } },
    },
    480: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    481: {
      description: 'StageNotFoundException',
      content: { 'application/json': { schema: StageNotFoundExceptionSchema } },
    },
    482: {
      description: 'ActionNotFoundException',
      content: { 'application/json': { schema: ActionNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PutApprovalResultRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PutApprovalResult',
  description:
    'Provides the response to a manual approval request to CodePipeline. Valid responses include Approved and Rejected.',
  operationId: 'PutApprovalResult',
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
        .literal('CodePipeline_20150709.PutApprovalResult')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.PutApprovalResult'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutApprovalResultInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutApprovalResultOutputSchema } },
    },
    480: {
      description: 'InvalidApprovalTokenException',
      content: { 'application/json': { schema: InvalidApprovalTokenExceptionSchema } },
    },
    481: {
      description: 'ApprovalAlreadyCompletedException',
      content: { 'application/json': { schema: ApprovalAlreadyCompletedExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'StageNotFoundException',
      content: { 'application/json': { schema: StageNotFoundExceptionSchema } },
    },
    484: {
      description: 'ActionNotFoundException',
      content: { 'application/json': { schema: ActionNotFoundExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PutJobFailureResultRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult',
  description:
    'Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.',
  operationId: 'PutJobFailureResult',
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
        .literal('CodePipeline_20150709.PutJobFailureResult')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.PutJobFailureResult'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutJobFailureResultInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PutJobSuccessResultRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult',
  description:
    'Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.',
  operationId: 'PutJobSuccessResult',
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
        .literal('CodePipeline_20150709.PutJobSuccessResult')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.PutJobSuccessResult'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutJobSuccessResultInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
    483: {
      description: 'OutputVariablesSizeExceededException',
      content: { 'application/json': { schema: OutputVariablesSizeExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult',
  description:
    'Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.',
  operationId: 'PutThirdPartyJobFailureResult',
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
        .literal('CodePipeline_20150709.PutThirdPartyJobFailureResult')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodePipeline_20150709.PutThirdPartyJobFailureResult'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutThirdPartyJobFailureResultInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
    483: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult',
  description:
    'Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.',
  operationId: 'PutThirdPartyJobSuccessResult',
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
        .literal('CodePipeline_20150709.PutThirdPartyJobSuccessResult')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodePipeline_20150709.PutThirdPartyJobSuccessResult'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutThirdPartyJobSuccessResultInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'JobNotFoundException',
      content: { 'application/json': { schema: JobNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidJobStateException',
      content: { 'application/json': { schema: InvalidJobStateExceptionSchema } },
    },
    483: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709PutWebhookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.PutWebhook',
  description:
    "Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.",
  operationId: 'PutWebhook',
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
        .literal('CodePipeline_20150709.PutWebhook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.PutWebhook'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutWebhookInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutWebhookOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidWebhookFilterPatternException',
      content: { 'application/json': { schema: InvalidWebhookFilterPatternExceptionSchema } },
    },
    483: {
      description: 'InvalidWebhookAuthenticationParametersException',
      content: {
        'application/json': { schema: InvalidWebhookAuthenticationParametersExceptionSchema },
      },
    },
    484: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    486: {
      description: 'InvalidTagsException',
      content: { 'application/json': { schema: InvalidTagsExceptionSchema } },
    },
    487: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty',
  description:
    'Configures a connection between the webhook that was created and the external tool with events to be detected.',
  operationId: 'RegisterWebhookWithThirdParty',
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
        .literal('CodePipeline_20150709.RegisterWebhookWithThirdParty')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodePipeline_20150709.RegisterWebhookWithThirdParty'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterWebhookWithThirdPartyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterWebhookWithThirdPartyOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'WebhookNotFoundException',
      content: { 'application/json': { schema: WebhookNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709RetryStageExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.RetryStageExecution',
  description:
    'Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.',
  operationId: 'RetryStageExecution',
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
        .literal('CodePipeline_20150709.RetryStageExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.RetryStageExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RetryStageExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RetryStageExecutionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'StageNotFoundException',
      content: { 'application/json': { schema: StageNotFoundExceptionSchema } },
    },
    484: {
      description: 'StageNotRetryableException',
      content: { 'application/json': { schema: StageNotRetryableExceptionSchema } },
    },
    485: {
      description: 'NotLatestPipelineExecutionException',
      content: { 'application/json': { schema: NotLatestPipelineExecutionExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709StartPipelineExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution',
  description:
    'Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.',
  operationId: 'StartPipelineExecution',
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
        .literal('CodePipeline_20150709.StartPipelineExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.StartPipelineExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartPipelineExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartPipelineExecutionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709StopPipelineExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution',
  description:
    'Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.',
  operationId: 'StopPipelineExecution',
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
        .literal('CodePipeline_20150709.StopPipelineExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.StopPipelineExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopPipelineExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopPipelineExecutionOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'PipelineNotFoundException',
      content: { 'application/json': { schema: PipelineNotFoundExceptionSchema } },
    },
    483: {
      description: 'PipelineExecutionNotStoppableException',
      content: { 'application/json': { schema: PipelineExecutionNotStoppableExceptionSchema } },
    },
    484: {
      description: 'DuplicatedStopRequestException',
      content: { 'application/json': { schema: DuplicatedStopRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.TagResource',
  description:
    'Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. ',
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
        .literal('CodePipeline_20150709.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.TagResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'InvalidTagsException',
      content: { 'application/json': { schema: InvalidTagsExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.UntagResource',
  description: 'Removes tags from an Amazon Web Services resource.',
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
        .literal('CodePipeline_20150709.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.UntagResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    483: {
      description: 'InvalidTagsException',
      content: { 'application/json': { schema: InvalidTagsExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709UpdateActionTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.UpdateActionType',
  description:
    'Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.',
  operationId: 'UpdateActionType',
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
        .literal('CodePipeline_20150709.UpdateActionType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.UpdateActionType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateActionTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'RequestFailedException',
      content: { 'application/json': { schema: RequestFailedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ActionTypeNotFoundException',
      content: { 'application/json': { schema: ActionTypeNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodePipeline20150709UpdatePipelineRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodePipeline_20150709.UpdatePipeline',
  description:
    'Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.',
  operationId: 'UpdatePipeline',
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
        .literal('CodePipeline_20150709.UpdatePipeline')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodePipeline_20150709.UpdatePipeline'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePipelineInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePipelineOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidStageDeclarationException',
      content: { 'application/json': { schema: InvalidStageDeclarationExceptionSchema } },
    },
    482: {
      description: 'InvalidActionDeclarationException',
      content: { 'application/json': { schema: InvalidActionDeclarationExceptionSchema } },
    },
    483: {
      description: 'InvalidBlockerDeclarationException',
      content: { 'application/json': { schema: InvalidBlockerDeclarationExceptionSchema } },
    },
    484: {
      description: 'InvalidStructureException',
      content: { 'application/json': { schema: InvalidStructureExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
