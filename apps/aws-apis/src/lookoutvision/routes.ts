import { createRoute, z } from '@hono/zod-openapi'

const AnomalyNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9]*/)
  .min(1)
  .max(256)
  .openapi('AnomalyName')

const FloatSchema = z.float32().openapi('Float')

const ColorSchema = z
  .string()
  .regex(/\#[a-zA-Z0-9]{6}/)
  .length(7)
  .openapi('Color')

const PixelAnomalySchema = z
  .object({
    TotalPercentageArea: FloatSchema.and(
      z
        .any()
        .openapi({ description: 'The percentage area of the image that the anomaly type covers.' }),
    ).exactOptional(),
    Color: ColorSchema.and(
      z
        .any()
        .openapi({
          description:
            'A hex color value for the mask that covers an anomaly type. Each anomaly type has a different mask color. The color maps to the color of the anomaly type used in the training dataset. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the pixels in an anomaly mask. For more information, see <a>Anomaly</a>. <code>PixelAnomaly</code> is only returned by image segmentation models.',
    required: [],
  })
  .openapi('PixelAnomaly')

type AnomalyType = {
  Name?: z.infer<typeof AnomalyNameSchema> & { [key: string]: unknown }
  PixelAnomaly?: z.infer<typeof PixelAnomalySchema> & { [key: string]: unknown }
}

const DatasetTypeSchema = z
  .string()
  .regex(/train|test/)
  .min(1)
  .max(10)
  .openapi('DatasetType')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const DatasetStatusSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'CREATE_COMPLETE',
    'CREATE_FAILED',
    'UPDATE_IN_PROGRESS',
    'UPDATE_COMPLETE',
    'UPDATE_FAILED_ROLLBACK_IN_PROGRESS',
    'UPDATE_FAILED_ROLLBACK_COMPLETE',
    'DELETE_IN_PROGRESS',
    'DELETE_COMPLETE',
    'DELETE_FAILED',
  ])
  .openapi('DatasetStatus')

const DatasetStatusMessageSchema = z.string().openapi('DatasetStatusMessage')

const DatasetMetadataSchema = z
  .object({
    DatasetType: DatasetTypeSchema.and(
      z.any().openapi({ description: 'The type of the dataset.' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp for the date and time that the dataset was created. ',
        }),
    ).exactOptional(),
    Status: DatasetStatusSchema.and(
      z.any().openapi({ description: 'The status for the dataset.' }),
    ).exactOptional(),
    StatusMessage: DatasetStatusMessageSchema.and(
      z.any().openapi({ description: 'The status message for the dataset.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information for an Amazon Lookout for Vision dataset. For more information, see <a>DescribeDataset</a> and <a>ProjectDescription</a>.',
    required: [],
  })
  .openapi('DatasetMetadata')

const CreateDatasetResponseSchema = z
  .object({
    DatasetMetadata: DatasetMetadataSchema.and(
      z.any().openapi({ description: 'Information about the dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetResponse')

const S3BucketNameSchema = z
  .string()
  .regex(/[0-9A-Za-z\.\-_]*/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const S3ObjectKeySchema = z
  .string()
  .regex(/^([a-zA-Z0-9!_.*'()-][\/a-zA-Z0-9!_.*'()-]*)?$/)
  .min(1)
  .max(1024)
  .openapi('S3ObjectKey')

const S3ObjectVersionSchema = z.string().regex(/.*/).min(1).max(1024).openapi('S3ObjectVersion')

const InputS3ObjectSchema = z
  .object({
    Bucket: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The Amazon S3 bucket that contains the manifest.' }),
    ),
    Key: S3ObjectKeySchema.and(
      z
        .any()
        .openapi({ description: 'The name and location of the manifest file withiin the bucket.' }),
    ),
    VersionId: S3ObjectVersionSchema.and(
      z.any().openapi({ description: 'The version ID of the bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bucket', 'Key'],
    description: 'Amazon S3 Location information for an input manifest file. ',
  })
  .openapi('InputS3Object')

const DatasetGroundTruthManifestSchema = z
  .object({
    S3Object: InputS3ObjectSchema.and(
      z.any().openapi({ description: 'The S3 bucket location for the manifest file.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Location information about a manifest file. You can use a manifest file to create a dataset.',
    required: [],
  })
  .openapi('DatasetGroundTruthManifest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ModelVersionSchema = z
  .string()
  .regex(/([1-9][0-9]*|latest)/)
  .min(1)
  .max(10)
  .openapi('ModelVersion')

const ModelArnSchema = z.string().openapi('ModelArn')

const ModelDescriptionMessageSchema = z
  .string()
  .regex(/[0-9A-Za-z\.\-_]*/)
  .min(1)
  .max(500)
  .openapi('ModelDescriptionMessage')

const ModelStatusSchema = z
  .enum([
    'TRAINING',
    'TRAINED',
    'TRAINING_FAILED',
    'STARTING_HOSTING',
    'HOSTED',
    'HOSTING_FAILED',
    'STOPPING_HOSTING',
    'SYSTEM_UPDATING',
    'DELETING',
  ])
  .openapi('ModelStatus')

const ModelStatusMessageSchema = z.string().openapi('ModelStatusMessage')

const ModelPerformanceSchema = z
  .object({
    F1Score: FloatSchema.and(
      z.any().openapi({ description: 'The overall F1 score metric for the trained model.' }),
    ).exactOptional(),
    Recall: FloatSchema.and(
      z.any().openapi({ description: 'The overall recall metric value for the trained model. ' }),
    ).exactOptional(),
    Precision: FloatSchema.and(
      z.any().openapi({ description: 'The overall precision metric value for the trained model.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the evaluation performance of a trained model. ',
    required: [],
  })
  .openapi('ModelPerformance')

const ModelMetadataSchema = z
  .object({
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The unix timestamp for the date and time that the model was created. ',
        }),
    ).exactOptional(),
    ModelVersion: ModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the model.' }),
    ).exactOptional(),
    ModelArn: ModelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the model.' }),
    ).exactOptional(),
    Description: ModelDescriptionMessageSchema.and(
      z.any().openapi({ description: 'The description for the model.' }),
    ).exactOptional(),
    Status: ModelStatusSchema.and(
      z.any().openapi({ description: 'The status of the model.' }),
    ).exactOptional(),
    StatusMessage: ModelStatusMessageSchema.and(
      z.any().openapi({ description: 'The status message for the model.' }),
    ).exactOptional(),
    Performance: ModelPerformanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Performance metrics for the model. Not available until training has successfully completed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon Lookout for Vision model.', required: [] })
  .openapi('ModelMetadata')

const CreateModelResponseSchema = z
  .object({
    ModelMetadata: ModelMetadataSchema.and(
      z.any().openapi({ description: 'The response from a call to <code>CreateModel</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateModelResponse')

const S3KeyPrefixSchema = z
  .string()
  .regex(/^([a-zA-Z0-9!_.*'()-][\/a-zA-Z0-9!_.*'()-]*)?$/)
  .max(1024)
  .openapi('S3KeyPrefix')

const S3LocationSchema = z
  .object({
    Bucket: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket that contains the training or model packaging job output. If you are training a model, the bucket must in your AWS account. If you use an S3 bucket for a model packaging job, the S3 bucket must be in the same AWS Region and AWS account in which you use AWS IoT Greengrass.',
        }),
    ),
    Prefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description: 'The path of the folder, within the S3 bucket, that contains the output.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bucket'],
    description:
      'Information about the location of training output or the output of a model packaging job.',
  })
  .openapi('S3Location')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({ description: 'The key of the tag that is attached to the specified model.' }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({ description: 'The value of the tag that is attached to the specified model.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A key and value pair that is attached to the specified Amazon Lookout for Vision model.',
  })
  .openapi('Tag')

const ProjectArnSchema = z.string().openapi('ProjectArn')

const ProjectNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
  .min(1)
  .max(255)
  .openapi('ProjectName')

const ProjectMetadataSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the project.' }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project.' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The unix timestamp for the date and time that the project was created. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Metadata about an Amazon Lookout for Vision project.', required: [] })
  .openapi('ProjectMetadata')

const CreateProjectResponseSchema = z
  .object({
    ProjectMetadata: ProjectMetadataSchema.and(
      z.any().openapi({ description: 'Information about the project.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProjectResponse')

const DeleteDatasetResponseSchema = z.object({}).openapi('DeleteDatasetResponse')

const DeleteModelResponseSchema = z
  .object({
    ModelArn: ModelArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the model that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteModelResponse')

const DeleteProjectResponseSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the project that was deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteProjectResponse')

const IntegerSchema = z.int().openapi('Integer')

const DatasetImageStatsSchema = z
  .object({
    Total: IntegerSchema.and(
      z.any().openapi({ description: 'The total number of images in the dataset.' }),
    ).exactOptional(),
    Labeled: IntegerSchema.and(
      z.any().openapi({ description: 'The total number of labeled images.' }),
    ).exactOptional(),
    Normal: IntegerSchema.and(
      z.any().openapi({ description: 'The total number of images labeled as normal.' }),
    ).exactOptional(),
    Anomaly: IntegerSchema.and(
      z.any().openapi({ description: 'the total number of images labeled as an anomaly.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Statistics about the images in a dataset.', required: [] })
  .openapi('DatasetImageStats')

const DatasetDescriptionSchema = z
  .object({
    ProjectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project that contains the dataset.' }),
    ).exactOptional(),
    DatasetType: DatasetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the dataset. The value <code>train</code> represents a training dataset or single dataset project. The value <code>test</code> represents a test dataset.',
        }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp for the time and date that the dataset was created.',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp for the date and time that the dataset was last updated.',
        }),
    ).exactOptional(),
    Status: DatasetStatusSchema.and(
      z.any().openapi({ description: 'The status of the dataset.' }),
    ).exactOptional(),
    StatusMessage: DatasetStatusMessageSchema.and(
      z.any().openapi({ description: 'The status message for the dataset. ' }),
    ).exactOptional(),
    ImageStats: DatasetImageStatsSchema.and(
      z.any().openapi({ description: 'Statistics about the images in a dataset.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The description for a dataset. For more information, see <a>DescribeDataset</a>.',
    required: [],
  })
  .openapi('DatasetDescription')

const DescribeDatasetResponseSchema = z
  .object({
    DatasetDescription: DatasetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the requested dataset. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetResponse')

const OutputConfigSchema = z
  .object({
    S3Location: S3LocationSchema.and(
      z.any().openapi({ description: 'The S3 location for the output.' }),
    ),
  })
  .openapi({
    required: ['S3Location'],
    description: 'The S3 location where Amazon Lookout for Vision saves model training files.',
  })
  .openapi('OutputConfig')

const OutputS3ObjectSchema = z
  .object({
    Bucket: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The bucket that contains the training output.' }),
    ),
    Key: S3ObjectKeySchema.and(
      z.any().openapi({ description: 'The location of the training output in the bucket.' }),
    ),
  })
  .openapi({
    required: ['Bucket', 'Key'],
    description: 'The S3 location where Amazon Lookout for Vision saves training output.',
  })
  .openapi('OutputS3Object')

const KmsKeyIdSchema = z
  .string()
  .regex(/^[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,2048}$/)
  .min(1)
  .max(2048)
  .openapi('KmsKeyId')

const InferenceUnitsSchema = z.int().min(1).openapi('InferenceUnits')

const ModelDescriptionSchema = z
  .object({
    ModelVersion: ModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the model' }),
    ).exactOptional(),
    ModelArn: ModelArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the model.' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The unix timestamp for the date and time that the model was created. ',
        }),
    ).exactOptional(),
    Description: ModelDescriptionMessageSchema.and(
      z.any().openapi({ description: 'The description for the model.' }),
    ).exactOptional(),
    Status: ModelStatusSchema.and(
      z.any().openapi({ description: 'The status of the model.' }),
    ).exactOptional(),
    StatusMessage: ModelStatusMessageSchema.and(
      z.any().openapi({ description: 'The status message for the model.' }),
    ).exactOptional(),
    Performance: ModelPerformanceSchema.and(
      z
        .any()
        .openapi({ description: 'Performance metrics for the model. Created during training.' }),
    ).exactOptional(),
    OutputConfig: OutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location where Amazon Lookout for Vision saves model training files.',
        }),
    ).exactOptional(),
    EvaluationManifest: OutputS3ObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location where Amazon Lookout for Vision saves the manifest file that was used to test the trained model and generate the performance scores.',
        }),
    ).exactOptional(),
    EvaluationResult: OutputS3ObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location where Amazon Lookout for Vision saves the performance metrics.',
        }),
    ).exactOptional(),
    EvaluationEndTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The unix timestamp for the date and time that the evaluation ended. ',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifer for the AWS Key Management Service (AWS KMS) key that was used to encrypt the model during training.',
        }),
    ).exactOptional(),
    MinInferenceUnits: InferenceUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of inference units used by the model. For more information, see <a>StartModel</a> ',
        }),
    ).exactOptional(),
    MaxInferenceUnits: InferenceUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of inference units Amazon Lookout for Vision uses to auto-scale the model. For more information, see <a>StartModel</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon Lookout for Vision model.', required: [] })
  .openapi('ModelDescription')

const DescribeModelResponseSchema = z
  .object({
    ModelDescription: ModelDescriptionSchema.and(
      z.any().openapi({ description: 'Contains the description of the model.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeModelResponse')

const ModelPackagingJobNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]+/)
  .min(1)
  .max(64)
  .openapi('ModelPackagingJobName')

const CompilerOptionsSchema = z.string().regex(/.*/).min(3).max(1024).openapi('CompilerOptions')

const TargetDeviceSchema = z.literal('jetson_xavier').openapi('TargetDevice')

const TargetPlatformOsSchema = z.literal('LINUX').openapi('TargetPlatformOs')

const TargetPlatformArchSchema = z.enum(['ARM64', 'X86_64']).openapi('TargetPlatformArch')

const TargetPlatformAcceleratorSchema = z.literal('NVIDIA').openapi('TargetPlatformAccelerator')

const TargetPlatformSchema = z
  .object({
    Os: TargetPlatformOsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target operating system for the model. Linux is the only operating system that is currently supported. ',
        }),
    ),
    Arch: TargetPlatformArchSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target architecture for the model. The currently supported architectures are X86_64 (64-bit version of the x86 instruction set) and ARM_64 (ARMv8 64-bit CPU). ',
        }),
    ),
    Accelerator: TargetPlatformAcceleratorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The target accelerator for the model. Currently, Amazon Lookout for Vision only supports NVIDIA (Nvidia graphics processing unit) and CPU accelerators. If you specify NVIDIA as an accelerator, you must also specify the <code>gpu-code</code>, <code>trt-ver</code>, and <code>cuda-ver</code> compiler options. If you don't specify an accelerator, Lookout for Vision uses the CPU for compilation and we highly recommend that you use the <a>GreengrassConfiguration$CompilerOptions</a> field. For example, you can use the following compiler options for CPU: </p> <ul> <li> <p> <code>mcpu</code>: CPU micro-architecture. For example, <code>{'mcpu': 'skylake-avx512'}</code> </p> </li> <li> <p> <code>mattr</code>: CPU flags. For example, <code>{'mattr': ['+neon', '+vfpv4']}</code> </p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Os', 'Arch'],
    description: 'The platform on which a model runs on an AWS IoT Greengrass core device.',
  })
  .openapi('TargetPlatform')

const ComponentNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_.]+/)
  .min(1)
  .max(128)
  .openapi('ComponentName')

const ComponentVersionSchema = z
  .string()
  .regex(/^([0-9]{1,6})\.([0-9]{1,6})\.([0-9]{1,6})$/)
  .min(1)
  .max(64)
  .openapi('ComponentVersion')

const ComponentDescriptionSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_. ()':,;?]+/)
  .min(1)
  .max(256)
  .openapi('ComponentDescription')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const GreengrassConfigurationSchema = z
  .object({
    CompilerOptions: CompilerOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Additional compiler options for the Greengrass component. Currently, only NVIDIA Graphics Processing Units (GPU) and CPU accelerators are supported. If you specify <code>TargetDevice</code>, don't specify <code>CompilerOptions</code>.</p> <p>For more information, see <i>Compiler options</i> in the Amazon Lookout for Vision Developer Guide. </p>",
        }),
    ).exactOptional(),
    TargetDevice: TargetDeviceSchema.and(
      z
        .any()
        .openapi({
          description:
            "The target device for the model. Currently the only supported value is <code>jetson_xavier</code>. If you specify <code>TargetDevice</code>, you can't specify <code>TargetPlatform</code>. ",
        }),
    ).exactOptional(),
    TargetPlatform: TargetPlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            "The target platform for the model. If you specify <code>TargetPlatform</code>, you can't specify <code>TargetDevice</code>. ",
        }),
    ).exactOptional(),
    S3OutputLocation: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An S3 location in which Lookout for Vision stores the component artifacts. ',
        }),
    ),
    ComponentName: ComponentNameSchema.and(
      z.any().openapi({ description: ' A name for the AWS IoT Greengrass component. ' }),
    ),
    ComponentVersion: ComponentVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Version for the AWS IoT Greengrass component. If you don't provide a value, a default value of <code> <i>Model Version</i>.0.0</code> is used. ",
        }),
    ).exactOptional(),
    ComponentDescription: ComponentDescriptionSchema.and(
      z.any().openapi({ description: ' A description for the AWS IoT Greengrass component. ' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A set of tags (key-value pairs) that you want to attach to the AWS IoT Greengrass component. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3OutputLocation', 'ComponentName'],
    description:
      "<p>Configuration information for the AWS IoT Greengrass component created in a model packaging job. For more information, see <a>StartModelPackagingJob</a>. </p> <note> <p>You can't specify a component with the same <code>ComponentName</code> and <code>Componentversion</code> as an existing component with the same component name and component version.</p> </note>",
  })
  .openapi('GreengrassConfiguration')

const ModelPackagingConfigurationSchema = z
  .object({
    Greengrass: GreengrassConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration information for the AWS IoT Greengrass component in a model packaging job. ',
        }),
    ),
  })
  .openapi({
    required: ['Greengrass'],
    description:
      ' Configuration information for a Amazon Lookout for Vision model packaging job. For more information, see <a>StartModelPackagingJob</a>. ',
  })
  .openapi('ModelPackagingConfiguration')

const ModelPackagingJobDescriptionSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_. ()':,;?]+/)
  .min(1)
  .max(256)
  .openapi('ModelPackagingJobDescription')

const ModelPackagingMethodSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+/)
  .min(1)
  .max(32)
  .openapi('ModelPackagingMethod')

const ComponentVersionArnSchema = z
  .string()
  .regex(/arn:[^:]*:greengrass:[^:]*:aws:components:[^:]+/)
  .openapi('ComponentVersionArn')

const GreengrassOutputDetailsSchema = z
  .object({
    ComponentVersionArn: ComponentVersionArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the component. ' }),
    ).exactOptional(),
    ComponentName: ComponentNameSchema.and(
      z.any().openapi({ description: ' The name of the component. ' }),
    ).exactOptional(),
    ComponentVersion: ComponentVersionSchema.and(
      z.any().openapi({ description: ' The version of the component. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the AWS IoT Greengrass component created by a model packaging job. ',
    required: [],
  })
  .openapi('GreengrassOutputDetails')

const ModelPackagingOutputDetailsSchema = z
  .object({
    Greengrass: GreengrassOutputDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the AWS IoT Greengrass component in a model packaging job. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about the output from a model packaging job. ',
    required: [],
  })
  .openapi('ModelPackagingOutputDetails')

const ModelPackagingJobStatusSchema = z
  .enum(['CREATED', 'RUNNING', 'SUCCEEDED', 'FAILED'])
  .openapi('ModelPackagingJobStatus')

const ModelPackagingStatusMessageSchema = z.string().openapi('ModelPackagingStatusMessage')

const ModelPackagingDescriptionSchema = z
  .object({
    JobName: ModelPackagingJobNameSchema.and(
      z.any().openapi({ description: ' The name of the model packaging job. ' }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the project that's associated with a model that's in the model package. ",
        }),
    ).exactOptional(),
    ModelVersion: ModelVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the model used in the model packaging job. ' }),
    ).exactOptional(),
    ModelPackagingConfiguration: ModelPackagingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: ' The configuration information used in the model packaging job. ',
        }),
    ).exactOptional(),
    ModelPackagingJobDescription: ModelPackagingJobDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the model packaging job. ' }),
    ).exactOptional(),
    ModelPackagingMethod: ModelPackagingMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS service used to package the job. Currently Lookout for Vision can package jobs with AWS IoT Greengrass. ',
        }),
    ).exactOptional(),
    ModelPackagingOutputDetails: ModelPackagingOutputDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the output of the model packaging job. For more information, see <a>DescribeModelPackagingJob</a>. ',
        }),
    ).exactOptional(),
    Status: ModelPackagingJobStatusSchema.and(
      z.any().openapi({ description: ' The status of the model packaging job. ' }),
    ).exactOptional(),
    StatusMessage: ModelPackagingStatusMessageSchema.and(
      z.any().openapi({ description: ' The status message for the model packaging job. ' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Unix timestamp for the time and date that the model packaging job was created. ',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Unix timestamp for the time and date that the model packaging job was last updated. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about a model packaging job. For more information, see <a>DescribeModelPackagingJob</a>. ',
    required: [],
  })
  .openapi('ModelPackagingDescription')

const DescribeModelPackagingJobResponseSchema = z
  .object({
    ModelPackagingDescription: ModelPackagingDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the model packaging job. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeModelPackagingJobResponse')

const DatasetMetadataListSchema = z.array(DatasetMetadataSchema).openapi('DatasetMetadataList')

const ProjectDescriptionSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the project.' }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project.' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The unix timestamp for the date and time that the project was created. ',
        }),
    ).exactOptional(),
    Datasets: DatasetMetadataListSchema.and(
      z.any().openapi({ description: 'A list of datasets in the project.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describe an Amazon Lookout for Vision project. For more information, see <a>DescribeProject</a>.',
    required: [],
  })
  .openapi('ProjectDescription')

const DescribeProjectResponseSchema = z
  .object({
    ProjectDescription: ProjectDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the project.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProjectResponse')

const ImageSourceTypeSchema = z
  .string()
  .regex(/direct/)
  .openapi('ImageSourceType')

const ImageSourceSchema = z
  .object({
    Type: ImageSourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the image.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The source for an image.', required: [] })
  .openapi('ImageSource')

const BooleanSchema = z.boolean().openapi('Boolean')

const AnomalySchema: z.ZodType<AnomalyType> = z
  .lazy(() =>
    z
      .object({
        Name: AnomalyNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'The name of an anomaly type found in an image. <code>Name</code> maps to an anomaly type in the training dataset, apart from the anomaly type <code>background</code>. The service automatically inserts the <code>background</code> anomaly type into the response from <code>DetectAnomalies</code>. ',
            }),
        ).exactOptional(),
        PixelAnomaly: PixelAnomalySchema.and(
          z
            .any()
            .openapi({
              description: 'Information about the pixel mask that covers an anomaly type.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Information about an anomaly type found on an image by an image segmentation model. For more information, see <a>DetectAnomalies</a>.',
        required: [],
      }),
  )
  .openapi('Anomaly')

const AnomalyListSchema = z.array(AnomalySchema).openapi('AnomalyList')

const AnomalyMaskSchema = z.string().min(1).max(5242880).openapi('AnomalyMask')

const DetectAnomalyResultSchema = z
  .object({
    Source: ImageSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the image that was analyzed. <code>direct</code> means that the images was supplied from the local computer. No other values are supported.',
        }),
    ).exactOptional(),
    IsAnomalous: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if Amazon Lookout for Vision classifies the image as containing an anomaly, otherwise false.',
        }),
    ).exactOptional(),
    Confidence: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Lookout for Vision has in the accuracy of the classification in <code>IsAnomalous</code>.',
        }),
    ).exactOptional(),
    Anomalies: AnomalyListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If the model is an image segmentation model, <code>Anomalies</code> contains a list of anomaly types found in the image. There is one entry for each type of anomaly found (even if multiple instances of an anomaly type exist on the image). The first element in the list is always an anomaly type representing the image background ('background') and shouldn't be considered an anomaly. Amazon Lookout for Vision automatically add the background anomaly type to the response, and you don't need to declare a background anomaly type in your dataset.</p> <p>If the list has one entry ('background'), no anomalies were found on the image.</p> <p/> <p>An image classification model doesn't return an <code>Anomalies</code> list. </p>",
        }),
    ).exactOptional(),
    AnomalyMask: AnomalyMaskSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If the model is an image segmentation model, <code>AnomalyMask</code> contains pixel masks that covers all anomaly types found on the image. Each anomaly type has a different mask color. To map a color to an anomaly type, see the <code>color</code> field of the <a>PixelAnomaly</a> object.</p> <p>An image classification model doesn't return an <code>Anomalies</code> list. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The prediction results from a call to <a>DetectAnomalies</a>. <code>DetectAnomalyResult</code> includes classification information for the prediction (<code>IsAnomalous</code> and <code>Confidence</code>). If the model you use is an image segementation model, <code>DetectAnomalyResult</code> also includes segmentation information (<code>Anomalies</code> and <code>AnomalyMask</code>). Classification information is calculated separately from segmentation information and you shouldn't assume a relationship between them.",
    required: [],
  })
  .openapi('DetectAnomalyResult')

const DetectAnomaliesResponseSchema = z
  .object({
    DetectAnomalyResult: DetectAnomalyResultSchema.and(
      z
        .any()
        .openapi({ description: 'The results of the <code>DetectAnomalies</code> operation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectAnomaliesResponse')

const DatasetEntrySchema = z
  .string()
  .regex(/^\{.*\}$/)
  .min(2)
  .max(8192)
  .openapi('DatasetEntry')

const DatasetEntryListSchema = z.array(DatasetEntrySchema).openapi('DatasetEntryList')

const PaginationTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\+\=]{0,2048}$/)
  .max(2048)
  .openapi('PaginationToken')

const ListDatasetEntriesResponseSchema = z
  .object({
    DatasetEntries: DatasetEntryListSchema.and(
      z.any().openapi({ description: 'A list of the entries (JSON Lines) within the dataset.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Lookout for Vision returns this token that you can use in the subsequent request to retrieve the next set ofdataset entries.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetEntriesResponse')

const ModelPackagingJobMetadataSchema = z
  .object({
    JobName: ModelPackagingJobNameSchema.and(
      z.any().openapi({ description: ' The name of the model packaging job. ' }),
    ).exactOptional(),
    ProjectName: ProjectNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The project that contains the model that is in the model package. ',
        }),
    ).exactOptional(),
    ModelVersion: ModelVersionSchema.and(
      z.any().openapi({ description: ' The version of the model that is in the model package. ' }),
    ).exactOptional(),
    ModelPackagingJobDescription: ModelPackagingJobDescriptionSchema.and(
      z.any().openapi({ description: ' The description for the model packaging job. ' }),
    ).exactOptional(),
    ModelPackagingMethod: ModelPackagingMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The AWS service used to package the job. Currently Lookout for Vision can package jobs with AWS IoT Greengrass. ',
        }),
    ).exactOptional(),
    Status: ModelPackagingJobStatusSchema.and(
      z.any().openapi({ description: 'The status of the model packaging job. ' }),
    ).exactOptional(),
    StatusMessage: ModelPackagingStatusMessageSchema.and(
      z.any().openapi({ description: 'The status message for the model packaging job. ' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp for the time and date that the model packaging job was created.',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix timestamp for the time and date that the model packaging job was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Metadata for a model packaging job. For more information, see <a>ListModelPackagingJobs</a>. ',
    required: [],
  })
  .openapi('ModelPackagingJobMetadata')

const ModelPackagingJobsListSchema = z
  .array(ModelPackagingJobMetadataSchema)
  .openapi('ModelPackagingJobsList')

const ListModelPackagingJobsResponseSchema = z
  .object({
    ModelPackagingJobs: ModelPackagingJobsListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of the model packaging jobs created for the specified Amazon Lookout for Vision project. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListModelPackagingJobsResponse')

const ModelMetadataListSchema = z.array(ModelMetadataSchema).openapi('ModelMetadataList')

const ListModelsResponseSchema = z
  .object({
    Models: ModelMetadataListSchema.and(
      z.any().openapi({ description: 'A list of model versions in the specified project. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Lookout for Vision returns this token that you can use in the subsequent request to retrieve the next set of models. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListModelsResponse')

const ProjectMetadataListSchema = z.array(ProjectMetadataSchema).openapi('ProjectMetadataList')

const ListProjectsResponseSchema = z
  .object({
    Projects: ProjectMetadataListSchema.and(
      z.any().openapi({ description: 'A list of projects in your AWS account.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Lookout for Vision returns this token that you can use in the subsequent request to retrieve the next set of projects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProjectsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'A map of tag keys and values attached to the specified model.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ModelHostingStatusSchema = z
  .enum(['STARTING_HOSTING', 'HOSTED', 'HOSTING_FAILED', 'STOPPING_HOSTING', 'SYSTEM_UPDATING'])
  .openapi('ModelHostingStatus')

const StartModelResponseSchema = z
  .object({
    Status: ModelHostingStatusSchema.and(
      z.any().openapi({ description: 'The current running status of the model.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartModelResponse')

const StartModelPackagingJobResponseSchema = z
  .object({
    JobName: ModelPackagingJobNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The job name for the model packaging job. If you don't supply a job name in the <code>JobName</code> input parameter, the service creates a job name for you. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartModelPackagingJobResponse')

const StopModelResponseSchema = z
  .object({
    Status: ModelHostingStatusSchema.and(
      z.any().openapi({ description: 'The status of the model.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopModelResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateDatasetEntriesResponseSchema = z
  .object({
    Status: DatasetStatusSchema.and(
      z.any().openapi({ description: 'The status of the dataset update.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDatasetEntriesResponse')

const AnomalyClassFilterSchema = z
  .string()
  .regex(/(normal|anomaly)/)
  .min(1)
  .max(10)
  .openapi('AnomalyClassFilter')

const ClientTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(64)
  .openapi('ClientToken')

const ContentTypeSchema = z.string().regex(/.*/).min(1).max(255).openapi('ContentType')

const DatasetSourceSchema = z
  .object({
    GroundTruthManifest: DatasetGroundTruthManifestSchema.and(
      z.any().openapi({ description: 'Location information for the manifest file.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset.',
    required: [],
  })
  .openapi('DatasetSource')

const CreateDatasetRequestSchema = z
  .object({
    DatasetType: DatasetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the dataset. Specify <code>train</code> for a training dataset. Specify <code>test</code> for a test dataset.',
        }),
    ),
    DatasetSource: DatasetSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The location of the manifest file that Amazon Lookout for Vision uses to create the dataset.</p> <p>If you don't specify <code>DatasetSource</code>, an empty dataset is created and the operation synchronously returns. Later, you can add JSON Lines by calling <a>UpdateDatasetEntries</a>. </p> <p>If you specify a value for <code>DataSource</code>, the manifest at the S3 location is validated and used to create the dataset. The call to <code>CreateDataset</code> is asynchronous and might take a while to complete. To find out the current status, Check the value of <code>Status</code> returned in a call to <a>DescribeDataset</a>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatasetType'], title: 'CreateDatasetRequest' })
  .openapi('CreateDatasetRequest')

const CreateModelRequestSchema = z
  .object({
    Description: ModelDescriptionMessageSchema.and(
      z.any().openapi({ description: 'A description for the version of the model.' }),
    ).exactOptional(),
    OutputConfig: OutputConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The location where Amazon Lookout for Vision saves the training results.',
        }),
    ),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for your AWS KMS key. The key is used to encrypt training and test images copied into the service for model training. Your source images are unaffected. If this parameter is not specified, the copied images are encrypted by a key that AWS owns and manages.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A set of tags (key-value pairs) that you want to attach to the model.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OutputConfig'], title: 'CreateModelRequest' })
  .openapi('CreateModelRequest')

const CreateProjectRequestSchema = z
  .object({
    ProjectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name for the project.' }),
    ),
  })
  .openapi({ required: ['ProjectName'], title: 'CreateProjectRequest' })
  .openapi('CreateProjectRequest')

const DatasetChangesSchema = z.string().min(1).max(10485760).openapi('DatasetChanges')

const DeleteDatasetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDatasetRequest' })
  .openapi('DeleteDatasetRequest')

const ModelVersionNoLatestSchema = z
  .string()
  .regex(/([1-9][0-9]*)/)
  .min(1)
  .max(10)
  .openapi('ModelVersionNoLatest')

const DeleteModelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteModelRequest' })
  .openapi('DeleteModelRequest')

const DeleteProjectRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteProjectRequest' })
  .openapi('DeleteProjectRequest')

const DescribeDatasetRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDatasetRequest' })
  .openapi('DescribeDatasetRequest')

const DescribeModelPackagingJobRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeModelPackagingJobRequest' })
  .openapi('DescribeModelPackagingJobRequest')

const DescribeModelRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeModelRequest' })
  .openapi('DescribeModelRequest')

const DescribeProjectRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeProjectRequest' })
  .openapi('DescribeProjectRequest')

const StreamSchema = z.string().openapi('Stream')

const DetectAnomaliesRequestSchema = z
  .object({
    Body: StreamSchema.and(
      z.any().openapi({ description: 'The unencrypted image bytes that you want to analyze. ' }),
    ),
  })
  .openapi({ required: ['Body'], title: 'DetectAnomaliesRequest' })
  .openapi('DetectAnomaliesRequest')

const IsLabeledSchema = z.boolean().openapi('IsLabeled')

const PageSizeSchema = z.int().min(1).max(100).openapi('PageSize')

const QueryStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(2048)
  .openapi('QueryString')

const ListDatasetEntriesRequestSchema = z
  .object({})
  .openapi({ title: 'ListDatasetEntriesRequest' })
  .openapi('ListDatasetEntriesRequest')

const ListModelPackagingJobsRequestSchema = z
  .object({})
  .openapi({ title: 'ListModelPackagingJobsRequest' })
  .openapi('ListModelPackagingJobsRequest')

const ListModelsRequestSchema = z
  .object({})
  .openapi({ title: 'ListModelsRequest' })
  .openapi('ListModelsRequest')

const ListProjectsRequestSchema = z
  .object({})
  .openapi({ title: 'ListProjectsRequest' })
  .openapi('ListProjectsRequest')

const TagArnSchema = z.string().min(1).max(1011).openapi('TagArn')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StartModelPackagingJobRequestSchema = z
  .object({
    ModelVersion: ModelVersionSchema.and(
      z
        .any()
        .openapi({
          description: ' The version of the model within the project that you want to package. ',
        }),
    ),
    JobName: ModelPackagingJobNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A name for the model packaging job. If you don't supply a value, the service creates a job name for you. ",
        }),
    ).exactOptional(),
    Configuration: ModelPackagingConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for the model packaging job. ' }),
    ),
    Description: ModelPackagingJobDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the model packaging job. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ModelVersion', 'Configuration'], title: 'StartModelPackagingJobRequest' })
  .openapi('StartModelPackagingJobRequest')

const StartModelRequestSchema = z
  .object({
    MinInferenceUnits: InferenceUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of inference units to use. A single inference unit represents 1 hour of processing. Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use. ',
        }),
    ),
    MaxInferenceUnits: InferenceUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Lookout for Vision doesn't auto-scale the model.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MinInferenceUnits'], title: 'StartModelRequest' })
  .openapi('StartModelRequest')

const StopModelRequestSchema = z
  .object({})
  .openapi({ title: 'StopModelRequest' })
  .openapi('StopModelRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The key-value tags to assign to the model.' }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDatasetEntriesRequestSchema = z
  .object({
    Changes: DatasetChangesSchema.and(
      z.any().openapi({ description: 'The entries to add to the dataset.' }),
    ),
  })
  .openapi({ required: ['Changes'], title: 'UpdateDatasetEntriesRequest' })
  .openapi('UpdateDatasetEntriesRequest')

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

export const post20201120ProjectsProjectNameDatasetsRoute = createRoute({
  method: 'post',
  path: '/2020-11-20/projects/{projectName}/datasets',
  description:
    '<p>Creates a new dataset in an Amazon Lookout for Vision project. <code>CreateDataset</code> can create a training or a test dataset from a valid dataset source (<code>DatasetSource</code>).</p> <p>If you want a single dataset project, specify <code>train</code> for the value of <code>DatasetType</code>.</p> <p>To have a project with separate training and test datasets, call <code>CreateDataset</code> twice. On the first call, specify <code>train</code> for the value of <code>DatasetType</code>. On the second call, specify <code>test</code> for the value of <code>DatasetType</code>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateDataset</code> operation.</p>',
  operationId: 'CreateDataset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>CreateDataset</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>CreateDataset</code>. In this case, safely retry your call to <code>CreateDataset</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple dataset creation requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>CreateDataset</code>. An idempotency token is active for 8 hours. </p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project in which you want to create a dataset.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DatasetType: z
                .string()
                .regex(/train|test/)
                .min(1)
                .max(10)
                .openapi({
                  description:
                    'The type of the dataset. Specify <code>train</code> for a training dataset. Specify <code>test</code> for a test dataset.',
                }),
              DatasetSource: z
                .object({
                  GroundTruthManifest: DatasetGroundTruthManifestSchema.and(
                    z.any().openapi({ description: 'Location information for the manifest file.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset.',
                  required: [],
                }),
            })
            .openapi({ required: ['DatasetType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20201120ProjectsProjectNameModelsRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/projects/{projectName}/models',
  description:
    '<p>Lists the versions of a model in an Amazon Lookout for Vision project.</p> <p>The <code>ListModels</code> operation is eventually consistent. Recent calls to <code>CreateModel</code> might take a while to appear in the response from <code>ListProjects</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListModels</code> operation.</p>',
  operationId: 'ListModels',
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
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              'The name of the project that contains the model versions that you want to list.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/^[a-zA-Z0-9\/\+\=]{0,2048}$/)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of models.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\/\\+\\=]{0,2048}$', maxLength: 2048 },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListModelsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const post20201120ProjectsProjectNameModelsRoute = createRoute({
  method: 'post',
  path: '/2020-11-20/projects/{projectName}/models',
  description:
    '<p>Creates a new version of a model within an an Amazon Lookout for Vision project. <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests, and evaluates a new version of a model. </p> <p>To get the current status, check the <code>Status</code> field returned in the response from <a>DescribeModel</a>.</p> <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset to create a training and a test dataset. If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test the model. </p> <p>After training completes, the evaluation metrics are stored at the location specified in <code>OutputConfig</code>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require permission to the <code>lookoutvision:TagResource</code> operation.</p>',
  operationId: 'CreateModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>CreateModel</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>CreateModel</code>. In this case, safely retry your call to <code>CreateModel</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from starting multiple training jobs. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>CreateModel</code>. An idempotency token is active for 8 hours.</p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project in which you want to create a model version.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/[0-9A-Za-z\.\-_]*/)
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({ description: 'A description for the version of the model.' }),
              OutputConfig: z
                .object({
                  S3Location: S3LocationSchema.and(
                    z.any().openapi({ description: 'The S3 location for the output.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The S3 location where Amazon Lookout for Vision saves model training files.',
                  required: [],
                }),
              KmsKeyId: z
                .string()
                .regex(/^[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,2048}$/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for your AWS KMS key. The key is used to encrypt training and test images copied into the service for model training. Your source images are unaffected. If this parameter is not specified, the copied images are encrypted by a key that AWS owns and manages.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A set of tags (key-value pairs) that you want to attach to the model.',
                }),
            })
            .openapi({ required: ['OutputConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateModelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20201120ProjectsRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/projects',
  description:
    '<p>Lists the Amazon Lookout for Vision projects in your AWS account that are in the AWS Region in which you call <code>ListProjects</code>.</p> <p>The <code>ListProjects</code> operation is eventually consistent. Recent calls to <code>CreateProject</code> and <code>DeleteProject</code> might take a while to appear in the response from <code>ListProjects</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListProjects</code> operation.</p>',
  operationId: 'ListProjects',
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
        .regex(/^[a-zA-Z0-9\/\+\=]{0,2048}$/)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of projects.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\/\\+\\=]{0,2048}$', maxLength: 2048 },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const post20201120ProjectsRoute = createRoute({
  method: 'post',
  path: '/2020-11-20/projects',
  description:
    '<p>Creates an empty Amazon Lookout for Vision project. After you create the project, add a dataset by calling <a>CreateDataset</a>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateProject</code> operation.</p>',
  operationId: 'CreateProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>CreateProject</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>CreateProject</code>. In this case, safely retry your call to <code>CreateProject</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple project creation requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>CreateProject</code>. An idempotency token is active for 8 hours.</p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ProjectName: z
                .string()
                .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name for the project.' }),
            })
            .openapi({ required: ['ProjectName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20201120ProjectsProjectNameDatasetsDatasetTypeRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/projects/{projectName}/datasets/{datasetType}',
  description:
    '<p>Describe an Amazon Lookout for Vision dataset.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeDataset</code> operation.</p>',
  operationId: 'DescribeDataset',
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
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              'The name of the project that contains the dataset that you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      datasetType: z
        .string()
        .regex(/train|test/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'datasetType',
            in: 'path',
            required: true,
            description:
              'The type of the dataset to describe. Specify <code>train</code> to describe the training dataset. Specify <code>test</code> to describe the test dataset. If you have a single dataset project, specify <code>train</code> ',
            schema: { type: 'string', pattern: 'train|test', minLength: 1, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const delete20201120ProjectsProjectNameDatasetsDatasetTypeRoute = createRoute({
  method: 'delete',
  path: '/2020-11-20/projects/{projectName}/datasets/{datasetType}',
  description:
    '<p>Deletes an existing Amazon Lookout for Vision <code>dataset</code>. </p> <p>If your the project has a single dataset, you must create a new dataset before you can create a model.</p> <p>If you project has a training dataset and a test dataset consider the following. </p> <ul> <li> <p>If you delete the test dataset, your project reverts to a single dataset project. If you then train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.</p> </li> <li> <p>If you delete the training dataset, you must create a training dataset before you can create a model.</p> </li> </ul> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteDataset</code> operation.</p>',
  operationId: 'DeleteDataset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>DeleteDataset</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>DeleteDataset</code>. In this case, safely retry your call to <code>DeleteDataset</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple deletetion requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>DeleteDataset</code>. An idempotency token is active for 8 hours.</p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              'The name of the project that contains the dataset that you want to delete.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      datasetType: z
        .string()
        .regex(/train|test/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'datasetType',
            in: 'path',
            required: true,
            description:
              'The type of the dataset to delete. Specify <code>train</code> to delete the training dataset. Specify <code>test</code> to delete the test dataset. To delete the dataset in a single dataset project, specify <code>train</code>.',
            schema: { type: 'string', pattern: 'train|test', minLength: 1, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDatasetResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20201120ProjectsProjectNameModelsModelVersionRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/projects/{projectName}/models/{modelVersion}',
  description:
    '<p>Describes a version of an Amazon Lookout for Vision model.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeModel</code> operation.</p>',
  operationId: 'DescribeModel',
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
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              'The project that contains the version of a model that you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      modelVersion: z
        .string()
        .regex(/([1-9][0-9]*|latest)/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'modelVersion',
            in: 'path',
            required: true,
            description: 'The version of the model that you want to describe.',
            schema: {
              type: 'string',
              pattern: '([1-9][0-9]*|latest)',
              minLength: 1,
              maxLength: 10,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeModelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const delete20201120ProjectsProjectNameModelsModelVersionRoute = createRoute({
  method: 'delete',
  path: '/2020-11-20/projects/{projectName}/models/{modelVersion}',
  description:
    "<p>Deletes an Amazon Lookout for Vision model. You can't delete a running model. To stop a running model, use the <a>StopModel</a> operation.</p> <p>It might take a few seconds to delete a model. To determine if a model has been deleted, call <a>ListModels</a> and check if the version of the model (<code>ModelVersion</code>) is in the <code>Models</code> array. </p> <p/> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteModel</code> operation.</p>",
  operationId: 'DeleteModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>DeleteModel</code> completes only once. You choose the value to pass. For example, an issue might prevent you from getting a response from <code>DeleteModel</code>. In this case, safely retry your call to <code>DeleteModel</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple model deletion requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>DeleteModel</code>. An idempotency token is active for 8 hours.</p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project that contains the model that you want to delete.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      modelVersion: z
        .string()
        .regex(/([1-9][0-9]*)/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'modelVersion',
            in: 'path',
            required: true,
            description: 'The version of the model that you want to delete.',
            schema: { type: 'string', pattern: '([1-9][0-9]*)', minLength: 1, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteModelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20201120ProjectsProjectNameRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/projects/{projectName}',
  description:
    '<p>Describes an Amazon Lookout for Vision project.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeProject</code> operation.</p>',
  operationId: 'DescribeProject',
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
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project that you want to describe.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProjectResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const delete20201120ProjectsProjectNameRoute = createRoute({
  method: 'delete',
  path: '/2020-11-20/projects/{projectName}',
  description:
    "<p>Deletes an Amazon Lookout for Vision project.</p> <p>To delete a project, you must first delete each version of the model associated with the project. To delete a model use the <a>DeleteModel</a> operation.</p> <p>You also have to delete the dataset(s) associated with the model. For more information, see <a>DeleteDataset</a>. The images referenced by the training and test datasets aren't deleted. </p> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteProject</code> operation.</p>",
  operationId: 'DeleteProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>DeleteProject</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>DeleteProject</code>. In this case, safely retry your call to <code>DeleteProject</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple project deletion requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>DeleteProject</code>. An idempotency token is active for 8 hours.</p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project to delete.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20201120ProjectsProjectNameModelpackagingjobsJobNameRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/projects/{projectName}/modelpackagingjobs/{jobName}',
  description:
    '<p>Describes an Amazon Lookout for Vision model packaging job. </p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeModelPackagingJob</code> operation.</p> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>',
  operationId: 'DescribeModelPackagingJob',
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
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              'The name of the project that contains the model packaging job that you want to describe. ',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      jobName: z
        .string()
        .regex(/[a-zA-Z0-9-]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'jobName',
            in: 'path',
            required: true,
            description: 'The job name for the model packaging job. ',
            schema: { type: 'string', pattern: '[a-zA-Z0-9-]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeModelPackagingJobResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const post20201120ProjectsProjectNameModelsModelVersionDetectContentTypeRoute = createRoute({
  method: 'post',
  path: '/2020-11-20/projects/{projectName}/models/{modelVersion}/detect#Content-Type',
  description:
    '<p>Detects anomalies in an image that you supply. </p> <p>The response from <code>DetectAnomalies</code> includes a boolean prediction that the image contains one or more anomalies and a confidence value for the prediction. If the model is an image segmentation model, the response also includes segmentation information for each type of anomaly found in the image.</p> <note> <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation. You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p> </note> <p>For more information, see <i>Detecting anomalies in an image</i> in the Amazon Lookout for Vision developer guide.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DetectAnomalies</code> operation.</p>',
  operationId: 'DetectAnomalies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'Content-Type': z
        .string()
        .regex(/.*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'Content-Type',
            in: 'header',
            required: true,
            description:
              'The type of the image passed in <code>Body</code>. Valid values are <code>image/png</code> (PNG format images) and <code>image/jpeg</code> (JPG format images). ',
            schema: { type: 'string', pattern: '.*', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              'The name of the project that contains the model version that you want to use.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      modelVersion: z
        .string()
        .regex(/([1-9][0-9]*|latest)/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'modelVersion',
            in: 'path',
            required: true,
            description: 'The version of the model that you want to use.',
            schema: {
              type: 'string',
              pattern: '([1-9][0-9]*|latest)',
              minLength: 1,
              maxLength: 10,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Body: z
                .string()
                .openapi({ description: 'The unencrypted image bytes that you want to analyze. ' }),
            })
            .openapi({ required: ['Body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectAnomaliesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/projects/{projectName}/datasets/{datasetType}/entries',
  description:
    '<p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly information for a single image, including the image location and the assigned label.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListDatasetEntries</code> operation.</p>',
  operationId: 'ListDatasetEntries',
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
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project that contains the dataset that you want to list.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      datasetType: z
        .string()
        .regex(/train|test/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'datasetType',
            in: 'path',
            required: true,
            description:
              'The type of the dataset that you want to list. Specify <code>train</code> to list the training dataset. Specify <code>test</code> to list the test dataset. If you have a single dataset project, specify <code>train</code>.',
            schema: { type: 'string', pattern: 'train|test', minLength: 1, maxLength: 10 },
          },
        }),
    }),
    query: z.object({
      labeled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'labeled',
            in: 'query',
            required: false,
            description:
              "Specify <code>true</code> to include labeled entries, otherwise specify <code>false</code>. If you don't specify a value, Lookout for Vision returns all entries.",
            schema: { type: 'boolean' },
          },
        }),
      anomalyClass: z
        .string()
        .regex(/(normal|anomaly)/)
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'anomalyClass',
            in: 'query',
            required: false,
            description:
              "Specify <code>normal</code> to include only normal images. Specify <code>anomaly</code> to only include anomalous entries. If you don't specify a value, Amazon Lookout for Vision returns normal and anomalous images.",
            schema: { type: 'string', pattern: '(normal|anomaly)', minLength: 1, maxLength: 10 },
          },
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            required: false,
            description:
              'Only includes entries before the specified date in the response. For example, <code>2020-06-23T00:00:00</code>.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            required: false,
            description:
              'Only includes entries after the specified date in the response. For example, <code>2020-06-23T00:00:00</code>.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[a-zA-Z0-9\/\+\=]{0,2048}$/)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of dataset entries.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\/\\+\\=]{0,2048}$', maxLength: 2048 },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      sourceRefContains: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceRefContains',
            in: 'query',
            required: false,
            description:
              'Perform a "contains" search on the values of the <code>source-ref</code> key within the dataset. For example a value of "IMG_17" returns all JSON Lines where the <code>source-ref</code> key value matches <i>*IMG_17*</i>.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 2048 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetEntriesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRoute = createRoute({
  method: 'patch',
  path: '/2020-11-20/projects/{projectName}/datasets/{datasetType}/entries',
  description:
    '<p>Adds or updates one or more JSON Line entries in a dataset. A JSON Line includes information about an image used for training or testing an Amazon Lookout for Vision model.</p> <p>To update an existing JSON Line, use the <code>source-ref</code> field to identify the JSON Line. The JSON line that you supply replaces the existing JSON line. Any existing annotations that are not in the new JSON line are removed from the dataset. </p> <p>For more information, see <i>Defining JSON lines for anomaly classification</i> in the Amazon Lookout for Vision Developer Guide. </p> <note> <p>The images you reference in the <code>source-ref</code> field of a JSON line, must be in the same S3 bucket as the existing images in the dataset. </p> </note> <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and check the <code>Status</code> field in the response.</p> <p>This operation requires permissions to perform the <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>',
  operationId: 'UpdateDatasetEntries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>UpdateDatasetEntries</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>UpdateDatasetEntries</code>. In this case, safely retry your call to <code>UpdateDatasetEntries</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple updates with the same dataset entries. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>UpdateDatasetEntries</code>. An idempotency token is active for 8 hours. </p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              'The name of the project that contains the dataset that you want to update.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      datasetType: z
        .string()
        .regex(/train|test/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'datasetType',
            in: 'path',
            required: true,
            description:
              'The type of the dataset that you want to update. Specify <code>train</code> to update the training dataset. Specify <code>test</code> to update the test dataset. If you have a single dataset project, specify <code>train</code>.',
            schema: { type: 'string', pattern: 'train|test', minLength: 1, maxLength: 10 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Changes: z
                .string()
                .min(1)
                .max(10485760)
                .openapi({ description: 'The entries to add to the dataset.' }),
            })
            .openapi({ required: ['Changes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDatasetEntriesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20201120ProjectsProjectNameModelpackagingjobsRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/projects/{projectName}/modelpackagingjobs',
  description:
    '<p> Lists the model packaging jobs created for an Amazon Lookout for Vision project. </p> <p>This operation requires permissions to perform the <code>lookoutvision:ListModelPackagingJobs</code> operation. </p> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>',
  operationId: 'ListModelPackagingJobs',
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
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              ' The name of the project for which you want to list the model packaging jobs. ',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/^[a-zA-Z0-9\/\+\=]{0,2048}$/)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'If the previous response was incomplete (because there is more results to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\/\\+\\=]{0,2048}$', maxLength: 2048 },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListModelPackagingJobsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const post20201120ProjectsProjectNameModelpackagingjobsRoute = createRoute({
  method: 'post',
  path: '/2020-11-20/projects/{projectName}/modelpackagingjobs',
  description:
    '<p>Starts an Amazon Lookout for Vision model packaging job. A model packaging job creates an AWS IoT Greengrass component for a Lookout for Vision model. You can use the component to deploy your model to an edge device managed by Greengrass. </p> <p>Use the <a>DescribeModelPackagingJob</a> API to determine the current status of the job. The model packaging job is complete if the value of <code>Status</code> is <code>SUCCEEDED</code>.</p> <p>To deploy the component to the target device, use the component name and component version with the AWS IoT Greengrass <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html">CreateDeployment</a> API.</p> <p>This operation requires the following permissions:</p> <ul> <li> <p> <code>lookoutvision:StartModelPackagingJob</code> </p> </li> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>kms:GenerateDataKey</code> </p> </li> <li> <p> <code>greengrass:CreateComponentVersion</code> </p> </li> <li> <p> <code>greengrass:DescribeComponent</code> </p> </li> <li> <p>(Optional) <code>greengrass:TagResource</code>. Only required if you want to tag the component.</p> </li> </ul> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>',
  operationId: 'StartModelPackagingJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>StartModelPackagingJob</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>StartModelPackagingJob</code>. In this case, safely retry your call to <code>StartModelPackagingJob</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple dataset creation requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>StartModelPackagingJob</code>. An idempotency token is active for 8 hours. </p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description:
              ' The name of the project which contains the version of the model that you want to package. ',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ModelVersion: z
                .string()
                .regex(/([1-9][0-9]*|latest)/)
                .min(1)
                .max(10)
                .openapi({
                  description:
                    ' The version of the model within the project that you want to package. ',
                }),
              JobName: z
                .string()
                .regex(/[a-zA-Z0-9-]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A name for the model packaging job. If you don't supply a value, the service creates a job name for you. ",
                }),
              Configuration: z
                .object({
                  Greengrass: GreengrassConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Configuration information for the AWS IoT Greengrass component in a model packaging job. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' Configuration information for a Amazon Lookout for Vision model packaging job. For more information, see <a>StartModelPackagingJob</a>. ',
                  required: [],
                }),
              Description: z
                .string()
                .regex(/[a-zA-Z0-9-_. ()':,;?]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description for the model packaging job. ' }),
            })
            .openapi({ required: ['ModelVersion', 'Configuration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartModelPackagingJobResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20201120TagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/2020-11-20/tags/{resourceArn}',
  description:
    '<p>Returns a list of tags attached to the specified Amazon Lookout for Vision model.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListTagsForResource</code> operation.</p>',
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
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the model for which you want to list tags. ',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const post20201120TagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/2020-11-20/tags/{resourceArn}',
  description:
    '<p>Adds one or more key-value tags to an Amazon Lookout for Vision model. For more information, see <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:TagResource</code> operation.</p>',
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
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the model to assign the tags.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .openapi({ description: 'The key-value tags to assign to the model.' }),
            })
            .openapi({ required: ['Tags'] }),
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20201120ProjectsProjectNameModelsModelVersionStartRoute = createRoute({
  method: 'post',
  path: '/2020-11-20/projects/{projectName}/models/{modelVersion}/start',
  description:
    '<p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while to complete. To check the current state of the model, use <a>DescribeModel</a>.</p> <p>A model is ready to use when its status is <code>HOSTED</code>.</p> <p>Once the model is running, you can detect custom labels in new images by calling <a>DetectAnomalies</a>.</p> <note> <p>You are charged for the amount of time that the model is running. To stop a running model, call <a>StopModel</a>.</p> </note> <p>This operation requires permissions to perform the <code>lookoutvision:StartModel</code> operation.</p>',
  operationId: 'StartModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>StartModel</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>StartModel</code>. In this case, safely retry your call to <code>StartModel</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple start requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>StartModel</code>. An idempotency token is active for 8 hours. </p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project that contains the model that you want to start.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      modelVersion: z
        .string()
        .regex(/([1-9][0-9]*|latest)/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'modelVersion',
            in: 'path',
            required: true,
            description: 'The version of the model that you want to start.',
            schema: {
              type: 'string',
              pattern: '([1-9][0-9]*|latest)',
              minLength: 1,
              maxLength: 10,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MinInferenceUnits: z
                .int()
                .min(1)
                .openapi({
                  description:
                    'The minimum number of inference units to use. A single inference unit represents 1 hour of processing. Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use. ',
                }),
              MaxInferenceUnits: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Lookout for Vision doesn't auto-scale the model.",
                }),
            })
            .openapi({ required: ['MinInferenceUnits'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartModelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20201120ProjectsProjectNameModelsModelVersionStopRoute = createRoute({
  method: 'post',
  path: '/2020-11-20/projects/{projectName}/models/{modelVersion}/stop',
  description:
    '<p>Stops the hosting of a running model. The operation might take a while to complete. To check the current status, call <a>DescribeModel</a>. </p> <p>After the model hosting stops, the <code>Status</code> of the model is <code>TRAINED</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:StopModel</code> operation.</p>',
  operationId: 'StopModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description:
              "<p>ClientToken is an idempotency token that ensures a call to <code>StopModel</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>StopModel</code>. In this case, safely retry your call to <code>StopModel</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple stop requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>StopModel</code>. An idempotency token is active for 8 hours. </p>",
            schema: { type: 'string', pattern: '^[a-zA-Z0-9-]+$', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      projectName: z
        .string()
        .regex(/[a-zA-Z0-9][a-zA-Z0-9_\-]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project that contains the model that you want to stop.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9][a-zA-Z0-9_\\-]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      modelVersion: z
        .string()
        .regex(/([1-9][0-9]*|latest)/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'modelVersion',
            in: 'path',
            required: true,
            description: 'The version of the model that you want to stop.',
            schema: {
              type: 'string',
              pattern: '([1-9][0-9]*|latest)',
              minLength: 1,
              maxLength: 10,
            },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StopModelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const delete20201120TagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/2020-11-20/tags/{resourceArn}#tagKeys',
  description:
    '<p>Removes one or more tags from an Amazon Lookout for Vision model. For more information, see <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:UntagResource</code> operation.</p>',
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
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the model from which you want to remove tags. ',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of the keys of the tags that you want to remove.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 200,
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
