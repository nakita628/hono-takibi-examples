import { createRoute, z } from '@hono/zod-openapi'

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const StringSchema = z.string().openapi('String')

const EulaAcceptanceIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(0)
  .max(22)
  .openapi({ description: 'The EULA acceptance ID.' })
  .openapi('EulaAcceptanceId')

const EulaIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(0)
  .max(22)
  .openapi({ description: 'Represents a EULA resource.' })
  .openapi('EulaId')

const EulaAcceptanceSchema = z
  .object({
    acceptedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The ISO timestamp in seconds for when the EULA was accepted.' }),
    ).exactOptional(),
    acceptedBy: StringSchema.and(
      z.any().openapi({ description: 'The ID of the person who accepted the EULA.' }),
    ).exactOptional(),
    accepteeId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the acceptee.' }),
    ).exactOptional(),
    eulaAcceptanceId: EulaAcceptanceIdSchema.and(
      z.any().openapi({ description: 'The EULA acceptance ID.' }),
    ).exactOptional(),
    eulaId: EulaIdSchema.and(z.any().openapi({ description: 'The EULA ID.' })).exactOptional(),
  })
  .openapi({
    description: 'The acceptance of a EULA, required to use Amazon-provided streaming images.',
    required: [],
  })
  .openapi('EulaAcceptance')

const EulaAcceptanceListSchema = z.array(EulaAcceptanceSchema).openapi('EulaAcceptanceList')

const AcceptEulasResponseSchema = z
  .object({
    eulaAcceptances: EulaAcceptanceListSchema.and(
      z.any().openapi({ description: 'A collection of EULA acceptances.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AcceptEulasResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const LaunchProfileDescriptionSchema = z
  .string()
  .min(0)
  .max(256)
  .openapi({ description: 'A human-readable description of the launch profile.' })
  .openapi('LaunchProfileDescription')

const EC2SubnetIdSchema = z.string().openapi('EC2SubnetId')

const EC2SubnetIdListSchema = z.array(EC2SubnetIdSchema).min(0).max(6).openapi('EC2SubnetIdList')

const LaunchProfileIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(0)
  .max(22)
  .openapi('LaunchProfileId')

const LaunchProfileProtocolVersionSchema = z
  .string()
  .regex(/^2021\-03\-31$/)
  .min(0)
  .max(10)
  .openapi({
    description:
      'The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".',
  })
  .openapi('LaunchProfileProtocolVersion')

const LaunchProfileProtocolVersionListSchema = z
  .array(LaunchProfileProtocolVersionSchema)
  .openapi('LaunchProfileProtocolVersionList')

const LaunchProfileNameSchema = z.string().min(1).max(64).openapi('LaunchProfileName')

const LaunchProfileStateSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'READY',
    'UPDATE_IN_PROGRESS',
    'DELETE_IN_PROGRESS',
    'DELETED',
    'DELETE_FAILED',
    'CREATE_FAILED',
    'UPDATE_FAILED',
  ])
  .openapi('LaunchProfileState')

const LaunchProfileStatusCodeSchema = z
  .enum([
    'LAUNCH_PROFILE_CREATED',
    'LAUNCH_PROFILE_UPDATED',
    'LAUNCH_PROFILE_DELETED',
    'LAUNCH_PROFILE_CREATE_IN_PROGRESS',
    'LAUNCH_PROFILE_UPDATE_IN_PROGRESS',
    'LAUNCH_PROFILE_DELETE_IN_PROGRESS',
    'INTERNAL_ERROR',
    'STREAMING_IMAGE_NOT_FOUND',
    'STREAMING_IMAGE_NOT_READY',
    'LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED',
    'ENCRYPTION_KEY_ACCESS_DENIED',
    'ENCRYPTION_KEY_NOT_FOUND',
    'INVALID_SUBNETS_PROVIDED',
    'INVALID_INSTANCE_TYPES_PROVIDED',
    'INVALID_SUBNETS_COMBINATION',
  ])
  .openapi('LaunchProfileStatusCode')

const AutomaticTerminationModeSchema = z
  .enum(['DEACTIVATED', 'ACTIVATED'])
  .openapi('AutomaticTerminationMode')

const StreamingClipboardModeSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('StreamingClipboardMode')

const StreamingInstanceTypeSchema = z
  .enum([
    'g4dn.xlarge',
    'g4dn.2xlarge',
    'g4dn.4xlarge',
    'g4dn.8xlarge',
    'g4dn.12xlarge',
    'g4dn.16xlarge',
    'g3.4xlarge',
    'g3s.xlarge',
    'g5.xlarge',
    'g5.2xlarge',
    'g5.4xlarge',
    'g5.8xlarge',
    'g5.16xlarge',
  ])
  .openapi('StreamingInstanceType')

const StreamingInstanceTypeListSchema = z
  .array(StreamingInstanceTypeSchema)
  .min(1)
  .max(30)
  .openapi({
    description:
      'The EC2 instance types that users can select from when launching a streaming session with this launch profile.',
  })
  .openapi('StreamingInstanceTypeList')

const StreamConfigurationMaxSessionLengthInMinutesSchema = z
  .int()
  .min(1)
  .max(43200)
  .openapi('StreamConfigurationMaxSessionLengthInMinutes')

const StreamConfigurationMaxStoppedSessionLengthInMinutesSchema = z
  .int()
  .min(0)
  .max(5760)
  .openapi('StreamConfigurationMaxStoppedSessionLengthInMinutes')

const StreamConfigurationMaxBackupsToRetainSchema = z
  .int()
  .min(0)
  .max(10)
  .openapi('StreamConfigurationMaxBackupsToRetain')

const SessionBackupModeSchema = z.enum(['AUTOMATIC', 'DEACTIVATED']).openapi('SessionBackupMode')

const StreamConfigurationSessionBackupSchema = z
  .object({
    maxBackupsToRetain: StreamConfigurationMaxBackupsToRetainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of backups that each streaming session created from this launch profile can have.',
        }),
    ).exactOptional(),
    mode: SessionBackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how artists sessions are backed up.</p> <p>Configures backups for streaming sessions launched with this launch profile. The default value is <code>DEACTIVATED</code>, which means that backups are deactivated. To allow backups, set this value to <code>AUTOMATIC</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configures how streaming sessions are backed up when launched from this launch profile.',
    required: [],
  })
  .openapi('StreamConfigurationSessionBackup')

const SessionPersistenceModeSchema = z
  .enum(['DEACTIVATED', 'ACTIVATED'])
  .openapi('SessionPersistenceMode')

const StreamingSessionStorageModeSchema = z.literal('UPLOAD').openapi('StreamingSessionStorageMode')

const StreamingSessionStorageModeListSchema = z
  .array(StreamingSessionStorageModeSchema)
  .min(1)
  .openapi('StreamingSessionStorageModeList')

const StreamingSessionStorageRootPathLinuxSchema = z
  .string()
  .regex(/^(\$HOME|\/)[\/]?([A-Za-z0-9-_]+\/)*([A-Za-z0-9_-]+)$/)
  .min(1)
  .max(128)
  .openapi('StreamingSessionStorageRootPathLinux')

const StreamingSessionStorageRootPathWindowsSchema = z
  .string()
  .regex(/^((\%HOMEPATH\%)|[a-zA-Z]:)[\\\/](?:[a-zA-Z0-9_-]+[\\\/])*[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(128)
  .openapi('StreamingSessionStorageRootPathWindows')

const StreamingSessionStorageRootSchema = z
  .object({
    linux: StreamingSessionStorageRootPathLinuxSchema.and(
      z
        .any()
        .openapi({
          description: 'The folder path in Linux workstations where files are uploaded.',
        }),
    ).exactOptional(),
    windows: StreamingSessionStorageRootPathWindowsSchema.and(
      z
        .any()
        .openapi({
          description: 'The folder path in Windows workstations where files are uploaded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The upload storage root location (folder) on streaming workstations where files are uploaded.',
    required: [],
  })
  .openapi('StreamingSessionStorageRoot')

const StreamConfigurationSessionStorageSchema = z
  .object({
    mode: StreamingSessionStorageModeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows artists to upload files to their workstations. The only valid option is <code>UPLOAD</code>.',
        }),
    ),
    root: StreamingSessionStorageRootSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for the upload storage root of the streaming session.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['mode'],
    description: 'The configuration for a streaming session’s upload storage.',
  })
  .openapi('StreamConfigurationSessionStorage')

const StreamingImageIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(0)
  .max(22)
  .openapi('StreamingImageId')

const StreamingImageIdListSchema = z
  .array(StreamingImageIdSchema)
  .min(1)
  .max(20)
  .openapi({
    description:
      'A list of streaming image IDs that users can select from when launching a streaming session with this launch profile.',
  })
  .openapi('StreamingImageIdList')

const VolumeIopsSchema = z.int().min(3000).max(16000).openapi('VolumeIops')

const VolumeSizeInGiBSchema = z.int().min(100).max(16000).openapi('VolumeSizeInGiB')

const VolumeThroughputInMiBsSchema = z.int().min(125).max(1000).openapi('VolumeThroughputInMiBs')

const VolumeConfigurationSchema = z
  .object({
    iops: VolumeIopsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of I/O operations per second for the root volume that is attached to streaming session.',
        }),
    ).exactOptional(),
    size: VolumeSizeInGiBSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the root volume that is attached to the streaming session. The root volume size is measured in GiBs.',
        }),
    ).exactOptional(),
    throughput: VolumeThroughputInMiBsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The throughput to provision for the root volume that is attached to the streaming session. The throughput is measured in MiB/s.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p>',
    required: [],
  })
  .openapi('VolumeConfiguration')

const StreamConfigurationSchema = z
  .object({
    automaticTerminationMode: AutomaticTerminationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates if a streaming session created from this launch profile should be terminated automatically or retained without termination after being in a <code>STOPPED</code> state.</p> <ul> <li> <p>When <code>ACTIVATED</code>, the streaming session is scheduled for termination after being in the <code>STOPPED</code> state for the time specified in <code>maxStoppedSessionLengthInMinutes</code>.</p> </li> <li> <p>When <code>DEACTIVATED</code>, the streaming session can remain in the <code>STOPPED</code> state indefinitely.</p> </li> </ul> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>. When allowed, the default value for this parameter is <code>DEACTIVATED</code>.</p>',
        }),
    ).exactOptional(),
    clipboardMode: StreamingClipboardModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows or deactivates the use of the system clipboard to copy and paste between the streaming session and streaming client.',
        }),
    ),
    ec2InstanceTypes: StreamingInstanceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The EC2 instance types that users can select from when launching a streaming session with this launch profile.',
        }),
    ),
    maxSessionLengthInMinutes: StreamConfigurationMaxSessionLengthInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time, in minutes, that a streaming session can be active before it is stopped or terminated. After this point, Nimble Studio automatically terminates or stops the session. The default length of time is 690 minutes, and the maximum length of time is 30 days.',
        }),
    ).exactOptional(),
    maxStoppedSessionLengthInMinutes: StreamConfigurationMaxStoppedSessionLengthInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Integer that determines if you can start and stop your sessions and how long a session can stay in the <code>STOPPED</code> state. The default value is 0. The maximum value is 5760.</p> <p>This field is allowed only when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code> and <code>automaticTerminationMode</code> is <code>ACTIVATED</code>.</p> <p>If the value is set to 0, your sessions can’t be <code>STOPPED</code>. If you then call <code>StopStreamingSession</code>, the session fails. If the time that a session stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code> value, the session will automatically be terminated (instead of <code>STOPPED</code>).</p> <p>If the value is set to a positive number, the session can be stopped. You can call <code>StopStreamingSession</code> to stop sessions in the <code>READY</code> state. If the time that a session stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code> value, the session will automatically be stopped (instead of terminated).</p>',
        }),
    ).exactOptional(),
    sessionBackup: StreamConfigurationSessionBackupSchema.and(
      z.any().openapi({ description: 'Information about the streaming session backup.' }),
    ).exactOptional(),
    sessionPersistenceMode: SessionPersistenceModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determine if a streaming session created from this launch profile can configure persistent storage. This means that <code>volumeConfiguration</code> and <code>automaticTerminationMode</code> are configured.',
        }),
    ).exactOptional(),
    sessionStorage: StreamConfigurationSessionStorageSchema.and(
      z.any().openapi({ description: 'The upload storage for a streaming session.' }),
    ).exactOptional(),
    streamingImageIds: StreamingImageIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The streaming images that users can select from when launching a streaming session with this launch profile.',
        }),
    ),
    volumeConfiguration: VolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['clipboardMode', 'ec2InstanceTypes', 'streamingImageIds'],
    description: 'A configuration for a streaming session.',
  })
  .openapi('StreamConfiguration')

const LaunchProfileStudioComponentIdListSchema = z
  .array(StringSchema)
  .min(1)
  .max(100)
  .openapi('LaunchProfileStudioComponentIdList')

const TagsSchema = z.record(z.string(), StringSchema).openapi('Tags')

const LaunchProfileValidationStateSchema = z
  .enum([
    'VALIDATION_NOT_STARTED',
    'VALIDATION_IN_PROGRESS',
    'VALIDATION_SUCCESS',
    'VALIDATION_FAILED',
    'VALIDATION_FAILED_INTERNAL_SERVER_ERROR',
  ])
  .openapi('LaunchProfileValidationState')

const LaunchProfileValidationStatusCodeSchema = z
  .enum([
    'VALIDATION_NOT_STARTED',
    'VALIDATION_IN_PROGRESS',
    'VALIDATION_SUCCESS',
    'VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION',
    'VALIDATION_FAILED_SUBNET_NOT_FOUND',
    'VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION',
    'VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY',
    'VALIDATION_FAILED_UNAUTHORIZED',
    'VALIDATION_FAILED_INTERNAL_SERVER_ERROR',
  ])
  .openapi('LaunchProfileValidationStatusCode')

const LaunchProfileValidationStatusMessageSchema = z
  .string()
  .openapi('LaunchProfileValidationStatusMessage')

const LaunchProfileValidationTypeSchema = z
  .enum([
    'VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT',
    'VALIDATE_SUBNET_ASSOCIATION',
    'VALIDATE_NETWORK_ACL_ASSOCIATION',
    'VALIDATE_SECURITY_GROUP_ASSOCIATION',
  ])
  .openapi('LaunchProfileValidationType')

const ValidationResultSchema = z
  .object({
    state: LaunchProfileValidationStateSchema.and(
      z.any().openapi({ description: 'The current state.' }),
    ),
    statusCode: LaunchProfileValidationStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status code. This will contain the failure reason if the state is <code>VALIDATION_FAILED</code>.',
        }),
    ),
    statusMessage: LaunchProfileValidationStatusMessageSchema.and(
      z.any().openapi({ description: 'The status message for the validation result.' }),
    ),
    type: LaunchProfileValidationTypeSchema.and(
      z.any().openapi({ description: 'The type of the validation result.' }),
    ),
  })
  .openapi({
    required: ['state', 'statusCode', 'statusMessage', 'type'],
    description: 'The launch profile validation result.',
  })
  .openapi('ValidationResult')

const ValidationResultsSchema = z.array(ValidationResultSchema).openapi('ValidationResults')

const LaunchProfileSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely identifies it. ARNs are unique across all Regions.',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was created.',
        }),
    ).exactOptional(),
    createdBy: StringSchema.and(
      z.any().openapi({ description: 'The user ID of the user that created the launch profile.' }),
    ).exactOptional(),
    description: LaunchProfileDescriptionSchema.and(
      z.any().openapi({ description: 'A human-readable description of the launch profile.' }),
    ).exactOptional(),
    ec2SubnetIds: EC2SubnetIdListSchema.and(
      z.any().openapi({ description: 'Unique identifiers for a collection of EC2 subnets.' }),
    ).exactOptional(),
    launchProfileId: LaunchProfileIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the launch profile used to control access from the streaming session.',
        }),
    ).exactOptional(),
    launchProfileProtocolVersions: LaunchProfileProtocolVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".',
        }),
    ).exactOptional(),
    name: LaunchProfileNameSchema.and(
      z.any().openapi({ description: 'A friendly name for the launch profile.' }),
    ).exactOptional(),
    state: LaunchProfileStateSchema.and(
      z.any().openapi({ description: 'The current state.' }),
    ).exactOptional(),
    statusCode: LaunchProfileStatusCodeSchema.and(
      z.any().openapi({ description: 'The status code.' }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for the launch profile.' }),
    ).exactOptional(),
    streamConfiguration: StreamConfigurationSchema.and(
      z.any().openapi({ description: 'A configuration for a streaming session.' }),
    ).exactOptional(),
    studioComponentIds: LaunchProfileStudioComponentIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifiers for a collection of studio components that can be used with this launch profile.',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
    updatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was updated.',
        }),
    ).exactOptional(),
    updatedBy: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The user ID of the user that most recently updated the resource.',
        }),
    ).exactOptional(),
    validationResults: ValidationResultsSchema.and(
      z.any().openapi({ description: 'The list of the latest validation results.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A launch profile controls your artist workforce’s access to studio components, like compute farms, shared file systems, managed file systems, and license server configurations, as well as instance types and Amazon Machine Images (AMIs). </p> <p>Studio administrators create launch profiles in the Nimble Studio console. Artists can use their launch profiles to launch an instance from the Nimble Studio portal. Each user’s launch profile defines how they can launch a streaming session. By default, studio admins can use all launch profiles.</p>',
    required: [],
  })
  .openapi('LaunchProfile')

const CreateLaunchProfileResponseSchema = z
  .object({
    launchProfile: LaunchProfileSchema.and(
      z.any().openapi({ description: 'The launch profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLaunchProfileResponse')

const StreamingImageDescriptionSchema = z
  .string()
  .min(0)
  .max(256)
  .openapi({ description: 'The description.' })
  .openapi('StreamingImageDescription')

const EC2ImageIdSchema = z
  .string()
  .regex(/^ami-[0-9A-z]+$/)
  .openapi('EC2ImageId')

const StreamingImageEncryptionConfigurationKeyArnSchema = z
  .string()
  .regex(/^arn:.*/)
  .min(4)
  .openapi('StreamingImageEncryptionConfigurationKeyArn')

const StreamingImageEncryptionConfigurationKeyTypeSchema = z
  .literal('CUSTOMER_MANAGED_KEY')
  .openapi('StreamingImageEncryptionConfigurationKeyType')

const StreamingImageEncryptionConfigurationSchema = z
  .object({
    keyArn: StreamingImageEncryptionConfigurationKeyArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN for a KMS key that is used to encrypt studio data.' }),
    ).exactOptional(),
    keyType: StreamingImageEncryptionConfigurationKeyTypeSchema.and(
      z.any().openapi({ description: 'The type of KMS key that is used to encrypt studio data.' }),
    ),
  })
  .openapi({ required: ['keyType'], description: 'Specifies how a streaming image is encrypted.' })
  .openapi('StreamingImageEncryptionConfiguration')

const EulaIdListSchema = z.array(StringSchema).openapi('EulaIdList')

const StreamingImageNameSchema = z
  .string()
  .min(0)
  .max(64)
  .openapi({ description: 'A friendly name for a streaming image resource.' })
  .openapi('StreamingImageName')

const StreamingImageOwnerSchema = z
  .string()
  .openapi({
    description:
      '<p>StreamingImageOwner is the owner of a particular streaming image.</p> <p>This string is either the studioId that contains the streaming image, or the word <code>AMAZON</code> for images provided by Nimble Studio.</p>',
  })
  .openapi('StreamingImageOwner')

const StreamingImagePlatformSchema = z
  .string()
  .regex(/^[a-zA-Z]*$/)
  .openapi({ description: 'The platform of this streaming image, either Windows or Linux.' })
  .openapi('StreamingImagePlatform')

const StreamingImageStateSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'READY',
    'DELETE_IN_PROGRESS',
    'DELETED',
    'UPDATE_IN_PROGRESS',
    'UPDATE_FAILED',
    'CREATE_FAILED',
    'DELETE_FAILED',
  ])
  .openapi('StreamingImageState')

const StreamingImageStatusCodeSchema = z
  .enum([
    'STREAMING_IMAGE_CREATE_IN_PROGRESS',
    'STREAMING_IMAGE_READY',
    'STREAMING_IMAGE_DELETE_IN_PROGRESS',
    'STREAMING_IMAGE_DELETED',
    'STREAMING_IMAGE_UPDATE_IN_PROGRESS',
    'INTERNAL_ERROR',
    'ACCESS_DENIED',
  ])
  .openapi({ description: 'The status code.' })
  .openapi('StreamingImageStatusCode')

const StreamingImageSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely identifies it. ARNs are unique across all Regions.',
        }),
    ).exactOptional(),
    description: StreamingImageDescriptionSchema.and(
      z.any().openapi({ description: 'A human-readable description of the streaming image.' }),
    ).exactOptional(),
    ec2ImageId: EC2ImageIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of an EC2 machine image with which to create the streaming image.',
        }),
    ).exactOptional(),
    encryptionConfiguration: StreamingImageEncryptionConfigurationSchema.and(
      z.any().openapi({ description: 'The encryption configuration.' }),
    ).exactOptional(),
    eulaIds: EulaIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of EULAs that must be accepted before a Streaming Session can be started using this streaming image.',
        }),
    ).exactOptional(),
    name: StreamingImageNameSchema.and(
      z.any().openapi({ description: 'A friendly name for a streaming image resource.' }),
    ).exactOptional(),
    owner: StreamingImageOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the streaming image, either the <code>studioId</code> that contains the streaming image, or <code>amazon</code> for images that are provided by Amazon Nimble Studio.',
        }),
    ).exactOptional(),
    platform: StreamingImagePlatformSchema.and(
      z
        .any()
        .openapi({ description: 'The platform of the streaming image, either Windows or Linux.' }),
    ).exactOptional(),
    state: StreamingImageStateSchema.and(
      z.any().openapi({ description: 'The current state.' }),
    ).exactOptional(),
    statusCode: StreamingImageStatusCodeSchema.and(
      z.any().openapi({ description: 'The status code.' }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for the streaming image.' }),
    ).exactOptional(),
    streamingImageId: StreamingImageIdSchema.and(
      z.any().openapi({ description: 'The ID of the streaming image.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents a streaming image resource.</p> <p>Streaming images are used by studio users to select which operating system and software they want to use in a Nimble Studio streaming session.</p> <p>Amazon provides a number of streaming images that include popular 3rd-party software.</p> <p>You can create your own streaming images using an Amazon EC2 machine image that you create for this purpose. You can also include software that your users require.</p>',
    required: [],
  })
  .openapi('StreamingImage')

const CreateStreamingImageResponseSchema = z
  .object({
    streamingImage: StreamingImageSchema.and(
      z.any().openapi({ description: 'The streaming image.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStreamingImageResponse')

const StreamingSessionIdSchema = z.string().openapi('StreamingSessionId')

const StreamingSessionStateSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'DELETE_IN_PROGRESS',
    'READY',
    'DELETED',
    'CREATE_FAILED',
    'DELETE_FAILED',
    'STOP_IN_PROGRESS',
    'START_IN_PROGRESS',
    'STOPPED',
    'STOP_FAILED',
    'START_FAILED',
  ])
  .openapi({ description: 'The streaming session state.' })
  .openapi('StreamingSessionState')

const StreamingSessionStatusCodeSchema = z
  .enum([
    'STREAMING_SESSION_READY',
    'STREAMING_SESSION_DELETED',
    'STREAMING_SESSION_CREATE_IN_PROGRESS',
    'STREAMING_SESSION_DELETE_IN_PROGRESS',
    'INTERNAL_ERROR',
    'INSUFFICIENT_CAPACITY',
    'ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR',
    'NETWORK_CONNECTION_ERROR',
    'INITIALIZATION_SCRIPT_ERROR',
    'DECRYPT_STREAMING_IMAGE_ERROR',
    'NETWORK_INTERFACE_ERROR',
    'STREAMING_SESSION_STOPPED',
    'STREAMING_SESSION_STARTED',
    'STREAMING_SESSION_STOP_IN_PROGRESS',
    'STREAMING_SESSION_START_IN_PROGRESS',
    'AMI_VALIDATION_ERROR',
  ])
  .openapi('StreamingSessionStatusCode')

const VolumeRetentionModeSchema = z.enum(['RETAIN', 'DELETE']).openapi('VolumeRetentionMode')

const StreamingSessionSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely identifies it. ARNs are unique across all Regions.',
        }),
    ).exactOptional(),
    automaticTerminationMode: AutomaticTerminationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates if a streaming session created from this launch profile should be terminated automatically or retained without termination after being in a <code>STOPPED</code> state.</p> <ul> <li> <p>When <code>ACTIVATED</code>, the streaming session is scheduled for termination after being in the <code>STOPPED</code> state for the time specified in <code>maxStoppedSessionLengthInMinutes</code>.</p> </li> <li> <p>When <code>DEACTIVATED</code>, the streaming session can remain in the <code>STOPPED</code> state indefinitely.</p> </li> </ul> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>. When allowed, the default value for this parameter is <code>DEACTIVATED</code>.</p>',
        }),
    ).exactOptional(),
    backupMode: SessionBackupModeSchema.and(
      z.any().openapi({ description: 'Shows the current backup setting of the session.' }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was created.',
        }),
    ).exactOptional(),
    createdBy: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user ID of the user that created the streaming session.' }),
    ).exactOptional(),
    ec2InstanceType: StringSchema.and(
      z.any().openapi({ description: 'The EC2 Instance type used for the streaming session.' }),
    ).exactOptional(),
    launchProfileId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the launch profile used to control access from the streaming session.',
        }),
    ).exactOptional(),
    maxBackupsToRetain: StreamConfigurationMaxBackupsToRetainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of backups of a streaming session that you can have. When the maximum number of backups is reached, the oldest backup is deleted.',
        }),
    ).exactOptional(),
    ownedBy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user ID of the user that owns the streaming session. The user that owns the session will be logging into the session and interacting with the virtual workstation.',
        }),
    ).exactOptional(),
    sessionId: StreamingSessionIdSchema.and(
      z.any().openapi({ description: 'The session ID.' }),
    ).exactOptional(),
    sessionPersistenceMode: SessionPersistenceModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determine if a streaming session created from this launch profile can configure persistent storage. This means that <code>volumeConfiguration</code> and <code>automaticTerminationMode</code> are configured.',
        }),
    ).exactOptional(),
    startedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the session entered <code>START_IN_PROGRESS</code> state.',
        }),
    ).exactOptional(),
    startedBy: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user ID of the user that started the streaming session.' }),
    ).exactOptional(),
    startedFromBackupId: StringSchema.and(
      z.any().openapi({ description: 'The backup ID used to restore a streaming session.' }),
    ).exactOptional(),
    state: StreamingSessionStateSchema.and(
      z.any().openapi({ description: 'The current state.' }),
    ).exactOptional(),
    statusCode: StreamingSessionStatusCodeSchema.and(
      z.any().openapi({ description: 'The status code.' }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for the streaming session.' }),
    ).exactOptional(),
    stopAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the streaming session will automatically be stopped if the user doesn’t stop the session themselves. ',
        }),
    ).exactOptional(),
    stoppedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the session entered <code>STOP_IN_PROGRESS</code> state.',
        }),
    ).exactOptional(),
    stoppedBy: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user ID of the user that stopped the streaming session.' }),
    ).exactOptional(),
    streamingImageId: StreamingImageIdSchema.and(
      z.any().openapi({ description: 'The ID of the streaming image.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
    terminateAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the streaming session will automatically terminate if not terminated by the user.',
        }),
    ).exactOptional(),
    updatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was updated.',
        }),
    ).exactOptional(),
    updatedBy: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The user ID of the user that most recently updated the resource.',
        }),
    ).exactOptional(),
    volumeConfiguration: VolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p>',
        }),
    ).exactOptional(),
    volumeRetentionMode: VolumeRetentionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determine if an EBS volume created from this streaming session will be backed up.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A streaming session is a virtual workstation created using a particular launch profile.',
    required: [],
  })
  .openapi('StreamingSession')

const CreateStreamingSessionResponseSchema = z
  .object({
    session: StreamingSessionSchema.and(
      z.any().openapi({ description: 'The session.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStreamingSessionResponse')

const StreamingSessionStreamStateSchema = z
  .enum([
    'READY',
    'CREATE_IN_PROGRESS',
    'DELETE_IN_PROGRESS',
    'DELETED',
    'CREATE_FAILED',
    'DELETE_FAILED',
  ])
  .openapi('StreamingSessionStreamState')

const StreamingSessionStreamStatusCodeSchema = z
  .enum([
    'STREAM_CREATE_IN_PROGRESS',
    'STREAM_READY',
    'STREAM_DELETE_IN_PROGRESS',
    'STREAM_DELETED',
    'INTERNAL_ERROR',
    'NETWORK_CONNECTION_ERROR',
  ])
  .openapi('StreamingSessionStreamStatusCode')

const SensitiveStringSchema = z.string().openapi('SensitiveString')

const StreamingSessionStreamSchema = z
  .object({
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was created.',
        }),
    ).exactOptional(),
    createdBy: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The user ID of the user that created the streaming session stream.',
        }),
    ).exactOptional(),
    expiresAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The ISO timestamp in seconds for when the resource expires.' }),
    ).exactOptional(),
    ownedBy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user ID of the user that owns the streaming session. The user that owns the session will be logging into the session and interacting with the virtual workstation.',
        }),
    ).exactOptional(),
    state: StreamingSessionStreamStateSchema.and(
      z.any().openapi({ description: 'The current state.' }),
    ).exactOptional(),
    statusCode: StreamingSessionStreamStatusCodeSchema.and(
      z.any().openapi({ description: 'The streaming session stream status code.' }),
    ).exactOptional(),
    streamId: StringSchema.and(z.any().openapi({ description: 'The stream ID.' })).exactOptional(),
    url: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The URL to connect to this stream using the DCV client.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A stream is an active connection to a streaming session, enabling a studio user to control the streaming session using a compatible client. Streaming session streams are compatible with the NICE DCV web client, included in the Nimble Studio portal, or the NICE DCV desktop client.',
    required: [],
  })
  .openapi('StreamingSessionStream')

const CreateStreamingSessionStreamResponseSchema = z
  .object({
    stream: StreamingSessionStreamSchema.and(
      z.any().openapi({ description: 'The stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStreamingSessionStreamResponse')

const RoleArnSchema = z.string().min(0).max(2048).openapi('RoleArn')

const StudioDisplayNameSchema = z.string().min(0).max(64).openapi('StudioDisplayName')

const RegionSchema = z
  .string()
  .regex(/[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]/)
  .min(0)
  .max(50)
  .openapi('Region')

const StudioStateSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'READY',
    'UPDATE_IN_PROGRESS',
    'DELETE_IN_PROGRESS',
    'DELETED',
    'DELETE_FAILED',
    'CREATE_FAILED',
    'UPDATE_FAILED',
  ])
  .openapi('StudioState')

const StudioStatusCodeSchema = z
  .enum([
    'STUDIO_CREATED',
    'STUDIO_DELETED',
    'STUDIO_UPDATED',
    'STUDIO_CREATE_IN_PROGRESS',
    'STUDIO_UPDATE_IN_PROGRESS',
    'STUDIO_DELETE_IN_PROGRESS',
    'STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED',
    'STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED',
    'STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED',
    'AWS_SSO_NOT_ENABLED',
    'AWS_SSO_ACCESS_DENIED',
    'ROLE_NOT_OWNED_BY_STUDIO_OWNER',
    'ROLE_COULD_NOT_BE_ASSUMED',
    'INTERNAL_ERROR',
    'ENCRYPTION_KEY_NOT_FOUND',
    'ENCRYPTION_KEY_ACCESS_DENIED',
    'AWS_SSO_CONFIGURATION_REPAIRED',
    'AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS',
    'AWS_STS_REGION_DISABLED',
  ])
  .openapi({ description: 'The status code.' })
  .openapi('StudioStatusCode')

const StudioEncryptionConfigurationKeyArnSchema = z
  .string()
  .regex(/^arn:.*/)
  .min(4)
  .openapi({
    description:
      'The Amazon Resource Name (ARN) for a KMS key that is used to encrypt studio data.',
  })
  .openapi('StudioEncryptionConfigurationKeyArn')

const StudioEncryptionConfigurationKeyTypeSchema = z
  .enum(['AWS_OWNED_KEY', 'CUSTOMER_MANAGED_KEY'])
  .openapi({ description: 'The type of KMS key that is used to encrypt studio data.' })
  .openapi('StudioEncryptionConfigurationKeyType')

const StudioEncryptionConfigurationSchema = z
  .object({
    keyArn: StudioEncryptionConfigurationKeyArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN for a KMS key that is used to encrypt studio data.' }),
    ).exactOptional(),
    keyType: StudioEncryptionConfigurationKeyTypeSchema.and(
      z.any().openapi({ description: 'The type of KMS key that is used to encrypt studio data.' }),
    ),
  })
  .openapi({
    required: ['keyType'],
    description: 'Configuration of the encryption method that is used for the studio.',
  })
  .openapi('StudioEncryptionConfiguration')

const StudioNameSchema = z
  .string()
  .regex(/^[a-z0-9]*$/)
  .min(3)
  .max(64)
  .openapi('StudioName')

const StudioSchema = z
  .object({
    adminRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that studio admins assume when logging in to the Nimble Studio portal.',
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely identifies it. ARNs are unique across all Regions.',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was created.',
        }),
    ).exactOptional(),
    displayName: StudioDisplayNameSchema.and(
      z.any().openapi({ description: 'A friendly name for the studio.' }),
    ).exactOptional(),
    homeRegion: RegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the studio resource is located.',
        }),
    ).exactOptional(),
    ssoClientId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM Identity Center application client ID used to integrate with IAM Identity Center. This ID allows IAM Identity Center users to log in to Nimble Studio portal.',
        }),
    ).exactOptional(),
    state: StudioStateSchema.and(
      z.any().openapi({ description: 'The current state of the studio resource.' }),
    ).exactOptional(),
    statusCode: StudioStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'Status codes that provide additional detail on the studio state.',
        }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'Additional detail on the studio state.' }),
    ).exactOptional(),
    studioEncryptionConfiguration: StudioEncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration of the encryption method that is used for the studio.',
        }),
    ).exactOptional(),
    studioId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for a studio resource. In Nimble Studio, all other resources are contained in a studio resource.',
        }),
    ).exactOptional(),
    studioName: StudioNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the studio, as included in the URL when accessing it in the Nimble Studio portal.',
        }),
    ).exactOptional(),
    studioUrl: StringSchema.and(
      z.any().openapi({ description: 'The address of the web page for the studio.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
    updatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was updated.',
        }),
    ).exactOptional(),
    userRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that studio users assume when logging in to the Nimble Studio portal.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents a studio resource.</p> <p>A studio is the core resource used with Nimble Studio. You must create a studio first, before any other resource type can be created. All other resources you create and manage in Nimble Studio are contained within a studio.</p> <p>When creating a studio, you must provides two IAM roles for use with the Nimble Studio portal. These roles are assumed by your users when they log in to the Nimble Studio portal via IAM Identity Center and your identity source.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>Your studio roles must trust the <code>identity.nimble.amazonaws.com</code> service principal to function properly.</p>',
    required: [],
  })
  .openapi('Studio')

const CreateStudioResponseSchema = z
  .object({
    studio: StudioSchema.and(
      z.any().openapi({ description: 'Information about a studio.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStudioResponse')

const ActiveDirectoryComputerAttributeNameSchema = z
  .string()
  .min(1)
  .max(40)
  .openapi({ description: 'The name for the LDAP attribute.' })
  .openapi('ActiveDirectoryComputerAttributeName')

const ActiveDirectoryComputerAttributeValueSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({ description: 'The value for the LDAP attribute.' })
  .openapi('ActiveDirectoryComputerAttributeValue')

const ActiveDirectoryComputerAttributeSchema = z
  .object({
    name: ActiveDirectoryComputerAttributeNameSchema.and(
      z.any().openapi({ description: 'The name for the LDAP attribute.' }),
    ).exactOptional(),
    value: ActiveDirectoryComputerAttributeValueSchema.and(
      z.any().openapi({ description: 'The value for the LDAP attribute.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.',
    required: [],
  })
  .openapi('ActiveDirectoryComputerAttribute')

const ActiveDirectoryComputerAttributeListSchema = z
  .array(ActiveDirectoryComputerAttributeSchema)
  .min(0)
  .max(50)
  .openapi({
    description:
      'A collection of LDAP attributes to apply to Active Directory computer accounts that are created for streaming sessions.',
  })
  .openapi('ActiveDirectoryComputerAttributeList')

const DirectoryIdSchema = z.string().openapi('DirectoryId')

const ActiveDirectoryOrganizationalUnitDistinguishedNameSchema = z
  .string()
  .min(1)
  .max(2000)
  .openapi({
    description:
      'The fully-qualified distinguished name of the organizational unit to place the computer account in.',
  })
  .openapi('ActiveDirectoryOrganizationalUnitDistinguishedName')

const ActiveDirectoryConfigurationSchema = z
  .object({
    computerAttributes: ActiveDirectoryComputerAttributeListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of custom attributes for an Active Directory computer.',
        }),
    ).exactOptional(),
    directoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory ID of the Directory Service for Microsoft Active Directory to access using this studio component.',
        }),
    ).exactOptional(),
    organizationalUnitDistinguishedName:
      ActiveDirectoryOrganizationalUnitDistinguishedNameSchema.and(
        z
          .any()
          .openapi({
            description:
              'The distinguished name (DN) and organizational unit (OU) of an Active Directory computer.',
          }),
      ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for a Directory Service for Microsoft Active Directory studio resource.',
    required: [],
  })
  .openapi('ActiveDirectoryConfiguration')

const ComputeFarmConfigurationSchema = z
  .object({
    activeDirectoryUser: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Active Directory user that is used on ComputeFarm worker instances.',
        }),
    ).exactOptional(),
    endpoint: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint of the ComputeFarm that is accessed by the studio component resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration for a render farm that is associated with a studio resource.',
    required: [],
  })
  .openapi('ComputeFarmConfiguration')

const LicenseServiceConfigurationSchema = z
  .object({
    endpoint: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint of the license service that is accessed by the studio component resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for a license service that is associated with a studio resource.',
    required: [],
  })
  .openapi('LicenseServiceConfiguration')

const LinuxMountPointSchema = z
  .string()
  .regex(/^(\/?|(\$HOME)?(\/[^\/\n\s\\]+)*)$/)
  .min(0)
  .max(128)
  .openapi('LinuxMountPoint')

const WindowsMountDriveSchema = z
  .string()
  .regex(/^[A-Z]$/)
  .openapi('WindowsMountDrive')

const SharedFileSystemConfigurationSchema = z
  .object({
    endpoint: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint of the shared file system that is accessed by the studio component resource.',
        }),
    ).exactOptional(),
    fileSystemId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for a file system.' }),
    ).exactOptional(),
    linuxMountPoint: LinuxMountPointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mount location for a shared file system on a Linux virtual workstation.',
        }),
    ).exactOptional(),
    shareName: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The name of the file share.' }),
    ).exactOptional(),
    windowsMountDrive: WindowsMountDriveSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mount location for a shared file system on a Windows virtual workstation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for a shared file storage system that is associated with a studio resource.',
    required: [],
  })
  .openapi('SharedFileSystemConfiguration')

const StudioComponentConfigurationSchema = z
  .object({
    activeDirectoryConfiguration: ActiveDirectoryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a Directory Service for Microsoft Active Directory studio resource.',
        }),
    ).exactOptional(),
    computeFarmConfiguration: ComputeFarmConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a render farm that is associated with a studio resource.',
        }),
    ).exactOptional(),
    licenseServiceConfiguration: LicenseServiceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a license service that is associated with a studio resource.',
        }),
    ).exactOptional(),
    sharedFileSystemConfiguration: SharedFileSystemConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a shared file storage system that is associated with a studio resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration of the studio component, based on component type.',
    required: [],
  })
  .openapi('StudioComponentConfiguration')

const StudioComponentDescriptionSchema = z
  .string()
  .min(0)
  .max(256)
  .openapi('StudioComponentDescription')

const SecurityGroupIdSchema = z.string().openapi('SecurityGroupId')

const StudioComponentSecurityGroupIdListSchema = z
  .array(SecurityGroupIdSchema)
  .min(0)
  .max(30)
  .openapi('StudioComponentSecurityGroupIdList')

const LaunchProfilePlatformSchema = z.enum(['LINUX', 'WINDOWS']).openapi('LaunchProfilePlatform')

const StudioComponentInitializationScriptRunContextSchema = z
  .enum(['SYSTEM_INITIALIZATION', 'USER_INITIALIZATION'])
  .openapi('StudioComponentInitializationScriptRunContext')

const StudioComponentInitializationScriptContentSchema = z
  .string()
  .min(1)
  .max(5120)
  .openapi('StudioComponentInitializationScriptContent')

const StudioComponentInitializationScriptSchema = z
  .object({
    launchProfileProtocolVersion: LaunchProfileProtocolVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".',
        }),
    ).exactOptional(),
    platform: LaunchProfilePlatformSchema.and(
      z
        .any()
        .openapi({
          description: 'The platform of the initialization script, either Windows or Linux.',
        }),
    ).exactOptional(),
    runContext: StudioComponentInitializationScriptRunContextSchema.and(
      z.any().openapi({ description: 'The method to use when running the initialization script.' }),
    ).exactOptional(),
    script: StudioComponentInitializationScriptContentSchema.and(
      z.any().openapi({ description: 'The initialization script.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Initialization scripts for studio components.', required: [] })
  .openapi('StudioComponentInitializationScript')

const StudioComponentInitializationScriptListSchema = z
  .array(StudioComponentInitializationScriptSchema)
  .openapi('StudioComponentInitializationScriptList')

const StudioComponentNameSchema = z.string().min(0).max(64).openapi('StudioComponentName')

const ScriptParameterKeySchema = z
  .string()
  .regex(/^[a-zA-Z_][a-zA-Z0-9_]+$/)
  .min(1)
  .max(64)
  .openapi({ description: 'A script parameter key.' })
  .openapi('ScriptParameterKey')

const ScriptParameterValueSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ description: 'A script parameter value.' })
  .openapi('ScriptParameterValue')

const ScriptParameterKeyValueSchema = z
  .object({
    key: ScriptParameterKeySchema.and(
      z.any().openapi({ description: 'A script parameter key.' }),
    ).exactOptional(),
    value: ScriptParameterValueSchema.and(
      z.any().openapi({ description: 'A script parameter value.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A parameter for a studio component script, in the form of a key-value pair.',
    required: [],
  })
  .openapi('ScriptParameterKeyValue')

const StudioComponentScriptParameterKeyValueListSchema = z
  .array(ScriptParameterKeyValueSchema)
  .min(0)
  .max(30)
  .openapi('StudioComponentScriptParameterKeyValueList')

const StudioComponentStateSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'READY',
    'UPDATE_IN_PROGRESS',
    'DELETE_IN_PROGRESS',
    'DELETED',
    'DELETE_FAILED',
    'CREATE_FAILED',
    'UPDATE_FAILED',
  ])
  .openapi({
    description:
      '<p>The current state of the studio component resource.</p> <p>While a studio component is being created, modified, or deleted, its state will be <code>CREATE_IN_PROGRESS</code>, <code>UPDATE_IN_PROGRESS</code>, or <code>DELETE_IN_PROGRESS</code>.</p> <p>These are called <i>transition states</i>.</p> <p>No modifications may be made to the studio component while it is in a transition state.</p> <p>If creation of the resource fails, the state will change to <code>CREATE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why creation failed. The resource in this state will automatically be deleted from your account after a period of time.</p> <p>If updating the resource fails, the state will change to <code>UPDATE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why the update failed. The resource will be returned to the state it was in when the update request was invoked.</p> <p>If deleting the resource fails, the state will change to <code>DELETE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why the update failed. The resource will be returned to the state it was in when the update request was invoked. After the resource is deleted successfully, it will change to the <code>DELETED</code> state. The resource will no longer count against service quotas and cannot be used or acted upon any futher. It will be removed from your account after a period of time.</p>',
  })
  .openapi('StudioComponentState')

const StudioComponentStatusCodeSchema = z
  .enum([
    'ACTIVE_DIRECTORY_ALREADY_EXISTS',
    'STUDIO_COMPONENT_CREATED',
    'STUDIO_COMPONENT_UPDATED',
    'STUDIO_COMPONENT_DELETED',
    'ENCRYPTION_KEY_ACCESS_DENIED',
    'ENCRYPTION_KEY_NOT_FOUND',
    'STUDIO_COMPONENT_CREATE_IN_PROGRESS',
    'STUDIO_COMPONENT_UPDATE_IN_PROGRESS',
    'STUDIO_COMPONENT_DELETE_IN_PROGRESS',
    'INTERNAL_ERROR',
  ])
  .openapi({
    description:
      '<p>The current status of the studio component resource.</p> <p>When the resource is in the <code>READY</code> state, the status code signals what the last mutation made to the resource was.</p> <p>When the resource is in a <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, or <code>DELETE_FAILED</code> state, the status code signals what went wrong and why the mutation failed.</p>',
  })
  .openapi('StudioComponentStatusCode')

const StudioComponentIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(0)
  .max(22)
  .openapi('StudioComponentId')

const StudioComponentSubtypeSchema = z
  .enum(['AWS_MANAGED_MICROSOFT_AD', 'AMAZON_FSX_FOR_WINDOWS', 'AMAZON_FSX_FOR_LUSTRE', 'CUSTOM'])
  .openapi('StudioComponentSubtype')

const StudioComponentTypeSchema = z
  .enum(['ACTIVE_DIRECTORY', 'SHARED_FILE_SYSTEM', 'COMPUTE_FARM', 'LICENSE_SERVICE', 'CUSTOM'])
  .openapi('StudioComponentType')

const StudioComponentSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely identifies it. ARNs are unique across all Regions.',
        }),
    ).exactOptional(),
    configuration: StudioComponentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration of the studio component, based on component type.',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was created.',
        }),
    ).exactOptional(),
    createdBy: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user ID of the user that created the studio component.' }),
    ).exactOptional(),
    description: StudioComponentDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A human-readable description for the studio component resource.',
        }),
    ).exactOptional(),
    ec2SecurityGroupIds: StudioComponentSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The EC2 security groups that control access to the studio component.',
        }),
    ).exactOptional(),
    initializationScripts: StudioComponentInitializationScriptListSchema.and(
      z.any().openapi({ description: 'Initialization scripts for studio components.' }),
    ).exactOptional(),
    name: StudioComponentNameSchema.and(
      z.any().openapi({ description: 'A friendly name for the studio component resource.' }),
    ).exactOptional(),
    runtimeRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running. ',
        }),
    ).exactOptional(),
    scriptParameters: StudioComponentScriptParameterKeyValueListSchema.and(
      z.any().openapi({ description: 'Parameters for the studio component scripts.' }),
    ).exactOptional(),
    secureInitializationRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.',
        }),
    ).exactOptional(),
    state: StudioComponentStateSchema.and(
      z.any().openapi({ description: 'The current state.' }),
    ).exactOptional(),
    statusCode: StudioComponentStatusCodeSchema.and(
      z.any().openapi({ description: 'The status code.' }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for the studio component.' }),
    ).exactOptional(),
    studioComponentId: StudioComponentIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a studio component resource.' }),
    ).exactOptional(),
    subtype: StudioComponentSubtypeSchema.and(
      z.any().openapi({ description: 'The specific subtype of a studio component.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
    type: StudioComponentTypeSchema.and(
      z.any().openapi({ description: 'The type of the studio component.' }),
    ).exactOptional(),
    updatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was updated.',
        }),
    ).exactOptional(),
    updatedBy: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The user ID of the user that most recently updated the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>A studio component represents a network resource to be used by a studio's users and workflows. A typical studio contains studio components for each of the following: render farm, Active Directory, licensing, and file system.</p> <p>Access to a studio component is managed by specifying security groups for the resource, as well as its endpoint.</p> <p>A studio component also has a set of initialization scripts that are returned by <code>GetLaunchProfileInitialization</code>. These initialization scripts run on streaming sessions when they start. They provide users with flexibility in controlling how the studio resources are configured on a streaming session.</p>",
    required: [],
  })
  .openapi('StudioComponent')

const CreateStudioComponentResponseSchema = z
  .object({
    studioComponent: StudioComponentSchema.and(
      z.any().openapi({ description: 'Information about the studio component.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStudioComponentResponse')

const DeleteLaunchProfileResponseSchema = z
  .object({
    launchProfile: LaunchProfileSchema.and(
      z.any().openapi({ description: 'The launch profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteLaunchProfileResponse')

const DeleteLaunchProfileMemberResponseSchema = z
  .object({})
  .openapi('DeleteLaunchProfileMemberResponse')

const DeleteStreamingImageResponseSchema = z
  .object({
    streamingImage: StreamingImageSchema.and(
      z.any().openapi({ description: 'The streaming image.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteStreamingImageResponse')

const DeleteStreamingSessionResponseSchema = z
  .object({
    session: StreamingSessionSchema.and(
      z.any().openapi({ description: 'The session.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteStreamingSessionResponse')

const DeleteStudioResponseSchema = z
  .object({
    studio: StudioSchema.and(z.any().openapi({ description: 'Information about a studio.' })),
  })
  .openapi({ required: ['studio'] })
  .openapi('DeleteStudioResponse')

const DeleteStudioComponentResponseSchema = z
  .object({
    studioComponent: StudioComponentSchema.and(
      z.any().openapi({ description: 'Information about the studio component.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteStudioComponentResponse')

const DeleteStudioMemberResponseSchema = z.object({}).openapi('DeleteStudioMemberResponse')

const EulaNameSchema = z.string().min(0).max(64).openapi('EulaName')

const EulaSchema = z
  .object({
    content: StringSchema.and(
      z.any().openapi({ description: 'The EULA content.' }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was created.',
        }),
    ).exactOptional(),
    eulaId: EulaIdSchema.and(z.any().openapi({ description: 'The EULA ID.' })).exactOptional(),
    name: EulaNameSchema.and(
      z.any().openapi({ description: 'The name for the EULA.' }),
    ).exactOptional(),
    updatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a EULA resource.', required: [] })
  .openapi('Eula')

const GetEulaResponseSchema = z
  .object({ eula: EulaSchema.and(z.any().openapi({ description: 'The EULA.' })).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetEulaResponse')

const GetLaunchProfileResponseSchema = z
  .object({
    launchProfile: LaunchProfileSchema.and(
      z.any().openapi({ description: 'The launch profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLaunchProfileResponse')

const StreamingImageListSchema = z.array(StreamingImageSchema).openapi('StreamingImageList')

const StudioComponentSummarySchema = z
  .object({
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was created.',
        }),
    ).exactOptional(),
    createdBy: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user ID of the user that created the studio component.' }),
    ).exactOptional(),
    description: StudioComponentDescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    name: StudioComponentNameSchema.and(
      z.any().openapi({ description: 'The name for the studio component.' }),
    ).exactOptional(),
    studioComponentId: StudioComponentIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a studio component resource.' }),
    ).exactOptional(),
    subtype: StudioComponentSubtypeSchema.and(
      z.any().openapi({ description: 'The specific subtype of a studio component.' }),
    ).exactOptional(),
    type: StudioComponentTypeSchema.and(
      z.any().openapi({ description: 'The type of the studio component.' }),
    ).exactOptional(),
    updatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The ISO timestamp in seconds for when the resource was updated.',
        }),
    ).exactOptional(),
    updatedBy: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The user ID of the user that most recently updated the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "The studio component's summary.", required: [] })
  .openapi('StudioComponentSummary')

const StudioComponentSummaryListSchema = z
  .array(StudioComponentSummarySchema)
  .openapi('StudioComponentSummaryList')

const GetLaunchProfileDetailsResponseSchema = z
  .object({
    launchProfile: LaunchProfileSchema.and(
      z.any().openapi({ description: 'The launch profile.' }),
    ).exactOptional(),
    streamingImages: StreamingImageListSchema.and(
      z.any().openapi({ description: 'A collection of streaming images.' }),
    ).exactOptional(),
    studioComponentSummaries: StudioComponentSummaryListSchema.and(
      z.any().openapi({ description: 'A collection of studio component summaries.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLaunchProfileDetailsResponse')

const ActiveDirectoryDnsIpAddressSchema = z.string().openapi('ActiveDirectoryDnsIpAddress')

const ActiveDirectoryDnsIpAddressListSchema = z
  .array(ActiveDirectoryDnsIpAddressSchema)
  .min(0)
  .max(10)
  .openapi('ActiveDirectoryDnsIpAddressList')

const LaunchProfileInitializationActiveDirectorySchema = z
  .object({
    computerAttributes: ActiveDirectoryComputerAttributeListSchema.and(
      z
        .any()
        .openapi({
          description: 'A collection of custom attributes for an Active Directory computer.',
        }),
    ).exactOptional(),
    directoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory ID of the Directory Service for Microsoft Active Directory to access using this launch profile.',
        }),
    ).exactOptional(),
    directoryName: StringSchema.and(
      z.any().openapi({ description: 'The directory name.' }),
    ).exactOptional(),
    dnsIpAddresses: ActiveDirectoryDnsIpAddressListSchema.and(
      z.any().openapi({ description: 'The DNS IP address.' }),
    ).exactOptional(),
    organizationalUnitDistinguishedName:
      ActiveDirectoryOrganizationalUnitDistinguishedNameSchema.and(
        z
          .any()
          .openapi({ description: 'The name for the organizational unit distinguished name.' }),
      ).exactOptional(),
    studioComponentId: StudioComponentIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a studio component resource.' }),
    ).exactOptional(),
    studioComponentName: StudioComponentNameSchema.and(
      z.any().openapi({ description: 'The name for the studio component.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The launch profile initialization Active Directory contains information required for the launch profile to connect to the Active Directory.',
    required: [],
  })
  .openapi('LaunchProfileInitializationActiveDirectory')

const LaunchProfileSecurityGroupIdListSchema = z
  .array(SecurityGroupIdSchema)
  .min(1)
  .openapi('LaunchProfileSecurityGroupIdList')

const LaunchPurposeSchema = z
  .string()
  .regex(/^[A-Z0-9_]+$/)
  .min(0)
  .max(64)
  .openapi({ description: 'The launch purpose.' })
  .openapi('LaunchPurpose')

const LaunchProfileInitializationScriptSchema = z
  .object({
    runtimeRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running. ',
        }),
    ).exactOptional(),
    script: StudioComponentInitializationScriptContentSchema.and(
      z.any().openapi({ description: 'The initialization script.' }),
    ).exactOptional(),
    secureInitializationRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.',
        }),
    ).exactOptional(),
    studioComponentId: StudioComponentIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a studio component resource.' }),
    ).exactOptional(),
    studioComponentName: StudioComponentNameSchema.and(
      z.any().openapi({ description: 'The name for the studio component.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The launch profile initialization script is used when start streaming session runs.',
    required: [],
  })
  .openapi('LaunchProfileInitializationScript')

const LaunchProfileInitializationScriptListSchema = z
  .array(LaunchProfileInitializationScriptSchema)
  .openapi('LaunchProfileInitializationScriptList')

const LaunchProfileInitializationSchema = z
  .object({
    activeDirectory: LaunchProfileInitializationActiveDirectorySchema.and(
      z
        .any()
        .openapi({
          description: 'A <code>LaunchProfileInitializationActiveDirectory</code> resource.',
        }),
    ).exactOptional(),
    ec2SecurityGroupIds: LaunchProfileSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The EC2 security groups that control access to the studio component.',
        }),
    ).exactOptional(),
    launchProfileId: LaunchProfileIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the launch profile used to control access from the streaming session.',
        }),
    ).exactOptional(),
    launchProfileProtocolVersion: LaunchProfileProtocolVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".',
        }),
    ).exactOptional(),
    launchPurpose: LaunchPurposeSchema.and(
      z.any().openapi({ description: 'The launch purpose.' }),
    ).exactOptional(),
    name: LaunchProfileNameSchema.and(
      z.any().openapi({ description: 'The name for the launch profile.' }),
    ).exactOptional(),
    platform: LaunchProfilePlatformSchema.and(
      z
        .any()
        .openapi({ description: 'The platform of the launch platform, either Windows or Linux.' }),
    ).exactOptional(),
    systemInitializationScripts: LaunchProfileInitializationScriptListSchema.and(
      z.any().openapi({ description: 'The system initializtion scripts.' }),
    ).exactOptional(),
    userInitializationScripts: LaunchProfileInitializationScriptListSchema.and(
      z.any().openapi({ description: 'The user initializtion scripts.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A launch profile initialization contains information required for a workstation or server to connect to a launch profile.</p> <p>This includes scripts, endpoints, security groups, subnets, and other configuration.</p>',
    required: [],
  })
  .openapi('LaunchProfileInitialization')

const GetLaunchProfileInitializationResponseSchema = z
  .object({
    launchProfileInitialization: LaunchProfileInitializationSchema.and(
      z.any().openapi({ description: 'The launch profile initialization.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLaunchProfileInitializationResponse')

const LaunchProfilePersonaSchema = z.literal('USER').openapi('LaunchProfilePersona')

const LaunchProfileMembershipSchema = z
  .object({
    identityStoreId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the identity store.' }),
    ).exactOptional(),
    persona: LaunchProfilePersonaSchema.and(
      z.any().openapi({ description: 'The persona.' }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z.any().openapi({ description: 'The principal ID.' }),
    ).exactOptional(),
    sid: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Active Directory Security Identifier for this user, if available.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Studio admins can use launch profile membership to delegate launch profile access to studio users in the Nimble Studio portal without writing or maintaining complex IAM policies. A launch profile member is a user association from your studio identity source who is granted permissions to a launch profile.</p> <p>A launch profile member (type USER) provides the following permissions to that launch profile:</p> <ul> <li> <p>GetLaunchProfile</p> </li> <li> <p>GetLaunchProfileInitialization</p> </li> <li> <p>GetLaunchProfileMembers</p> </li> <li> <p>GetLaunchProfileMember</p> </li> <li> <p>CreateStreamingSession</p> </li> <li> <p>GetLaunchProfileDetails</p> </li> </ul>',
    required: [],
  })
  .openapi('LaunchProfileMembership')

const GetLaunchProfileMemberResponseSchema = z
  .object({
    member: LaunchProfileMembershipSchema.and(
      z.any().openapi({ description: 'The member.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLaunchProfileMemberResponse')

const GetStreamingImageResponseSchema = z
  .object({
    streamingImage: StreamingImageSchema.and(
      z.any().openapi({ description: 'The streaming image.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStreamingImageResponse')

const GetStreamingSessionResponseSchema = z
  .object({
    session: StreamingSessionSchema.and(
      z.any().openapi({ description: 'The session.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStreamingSessionResponse')

const StreamingSessionBackupSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely identifies it. ARNs are unique across all Regions.',
        }),
    ).exactOptional(),
    backupId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the backup.' }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The ISO timestamp in for when the resource was created.' }),
    ).exactOptional(),
    launchProfileId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the launch profile which allowed the backups for the streaming session.',
        }),
    ).exactOptional(),
    ownedBy: StringSchema.and(
      z.any().openapi({ description: 'The user ID of the user that owns the streaming session.' }),
    ).exactOptional(),
    sessionId: StreamingSessionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The streaming session ID for the <code>StreamingSessionBackup</code>.',
        }),
    ).exactOptional(),
    state: StreamingSessionStateSchema.exactOptional(),
    statusCode: StreamingSessionStatusCodeSchema.and(
      z.any().openapi({ description: 'The status code.' }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'The status message for the streaming session backup.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the streaming session backup.', required: [] })
  .openapi('StreamingSessionBackup')

const GetStreamingSessionBackupResponseSchema = z
  .object({
    streamingSessionBackup: StreamingSessionBackupSchema.and(
      z.any().openapi({ description: 'Information about the streaming session backup.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStreamingSessionBackupResponse')

const GetStreamingSessionStreamResponseSchema = z
  .object({
    stream: StreamingSessionStreamSchema.and(
      z.any().openapi({ description: 'The stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStreamingSessionStreamResponse')

const GetStudioResponseSchema = z
  .object({
    studio: StudioSchema.and(z.any().openapi({ description: 'Information about a studio.' })),
  })
  .openapi({ required: ['studio'] })
  .openapi('GetStudioResponse')

const GetStudioComponentResponseSchema = z
  .object({
    studioComponent: StudioComponentSchema.and(
      z.any().openapi({ description: 'Information about the studio component.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStudioComponentResponse')

const StudioPersonaSchema = z.literal('ADMINISTRATOR').openapi('StudioPersona')

const StudioMembershipSchema = z
  .object({
    identityStoreId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the identity store.' }),
    ).exactOptional(),
    persona: StudioPersonaSchema.and(
      z.any().openapi({ description: 'The persona.' }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z.any().openapi({ description: 'The principal ID.' }),
    ).exactOptional(),
    sid: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Active Directory Security Identifier for this user, if available.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>A studio member is an association of a user from your studio identity source to elevated permissions that they are granted in the studio.</p> <p>When you add a user to your studio using the Nimble Studio console, they are given access to the studio's IAM Identity Center application and are given access to log in to the Nimble Studio portal. These users have the permissions provided by the studio's user IAM role and do not appear in the studio membership collection. Only studio admins appear in studio membership.</p> <p>When you add a user to studio membership with the ADMIN persona, upon logging in to the Nimble Studio portal, they are granted permissions specified by the Studio's Admin IAM role.</p>",
    required: [],
  })
  .openapi('StudioMembership')

const GetStudioMemberResponseSchema = z
  .object({
    member: StudioMembershipSchema.and(
      z.any().openapi({ description: 'The member.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStudioMemberResponse')

const ListEulaAcceptancesResponseSchema = z
  .object({
    eulaAcceptances: EulaAcceptanceListSchema.and(
      z.any().openapi({ description: 'A collection of EULA acceptances.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEulaAcceptancesResponse')

const EulaListSchema = z.array(EulaSchema).openapi('EulaList')

const ListEulasResponseSchema = z
  .object({
    eulas: EulaListSchema.and(
      z.any().openapi({ description: 'A collection of EULA resources.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEulasResponse')

const LaunchProfileMembershipListSchema = z
  .array(LaunchProfileMembershipSchema)
  .min(0)
  .max(20)
  .openapi('LaunchProfileMembershipList')

const ListLaunchProfileMembersResponseSchema = z
  .object({
    members: LaunchProfileMembershipListSchema.and(
      z.any().openapi({ description: 'A list of members.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLaunchProfileMembersResponse')

const LaunchProfileListSchema = z.array(LaunchProfileSchema).openapi('LaunchProfileList')

const ListLaunchProfilesResponseSchema = z
  .object({
    launchProfiles: LaunchProfileListSchema.and(
      z.any().openapi({ description: 'A collection of launch profiles.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLaunchProfilesResponse')

const ListStreamingImagesResponseSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
    streamingImages: StreamingImageListSchema.and(
      z.any().openapi({ description: 'A collection of streaming images.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStreamingImagesResponse')

const StreamingSessionBackupListSchema = z
  .array(StreamingSessionBackupSchema)
  .openapi('StreamingSessionBackupList')

const ListStreamingSessionBackupsResponseSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
    streamingSessionBackups: StreamingSessionBackupListSchema.and(
      z.any().openapi({ description: 'Information about the streaming session backups.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStreamingSessionBackupsResponse')

const StreamingSessionListSchema = z.array(StreamingSessionSchema).openapi('StreamingSessionList')

const ListStreamingSessionsResponseSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
    sessions: StreamingSessionListSchema.and(
      z.any().openapi({ description: 'A collection of streaming sessions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStreamingSessionsResponse')

const StudioComponentListSchema = z
  .array(StudioComponentSchema)
  .min(0)
  .max(50)
  .openapi('StudioComponentList')

const ListStudioComponentsResponseSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
    studioComponents: StudioComponentListSchema.and(
      z.any().openapi({ description: 'A collection of studio components.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStudioComponentsResponse')

const StudioMembershipListSchema = z
  .array(StudioMembershipSchema)
  .min(0)
  .max(20)
  .openapi('StudioMembershipList')

const ListStudioMembersResponseSchema = z
  .object({
    members: StudioMembershipListSchema.and(
      z.any().openapi({ description: 'A list of admin members.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStudioMembersResponse')

const StudioListSchema = z.array(StudioSchema).openapi('StudioList')

const ListStudiosResponseSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no more results.',
        }),
    ).exactOptional(),
    studios: StudioListSchema.and(z.any().openapi({ description: 'A collection of studios.' })),
  })
  .openapi({ required: ['studios'] })
  .openapi('ListStudiosResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutLaunchProfileMembersResponseSchema = z
  .object({})
  .openapi('PutLaunchProfileMembersResponse')

const NewLaunchProfileMemberSchema = z
  .object({
    persona: LaunchProfilePersonaSchema.and(z.any().openapi({ description: 'The persona.' })),
    principalId: StringSchema.and(z.any().openapi({ description: 'The principal ID.' })),
  })
  .openapi({
    required: ['persona', 'principalId'],
    description: 'A new member that is added to a launch profile.',
  })
  .openapi('NewLaunchProfileMember')

const PutStudioMembersResponseSchema = z.object({}).openapi('PutStudioMembersResponse')

const NewStudioMemberSchema = z
  .object({
    persona: StudioPersonaSchema.and(z.any().openapi({ description: 'The persona.' })),
    principalId: StringSchema.and(z.any().openapi({ description: 'The principal ID.' })),
  })
  .openapi({ required: ['persona', 'principalId'], description: "A new studio user's membership." })
  .openapi('NewStudioMember')

const StartStreamingSessionResponseSchema = z
  .object({ session: StreamingSessionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StartStreamingSessionResponse')

const StartStudioSSOConfigurationRepairResponseSchema = z
  .object({
    studio: StudioSchema.and(z.any().openapi({ description: 'Information about a studio.' })),
  })
  .openapi({ required: ['studio'] })
  .openapi('StartStudioSSOConfigurationRepairResponse')

const StopStreamingSessionResponseSchema = z
  .object({ session: StreamingSessionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StopStreamingSessionResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateLaunchProfileResponseSchema = z
  .object({
    launchProfile: LaunchProfileSchema.and(
      z.any().openapi({ description: 'The launch profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateLaunchProfileResponse')

const UpdateLaunchProfileMemberResponseSchema = z
  .object({
    member: LaunchProfileMembershipSchema.and(
      z.any().openapi({ description: 'The updated member. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateLaunchProfileMemberResponse')

const UpdateStreamingImageResponseSchema = z
  .object({ streamingImage: StreamingImageSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateStreamingImageResponse')

const UpdateStudioResponseSchema = z
  .object({
    studio: StudioSchema.and(z.any().openapi({ description: 'Information about a studio.' })),
  })
  .openapi({ required: ['studio'] })
  .openapi('UpdateStudioResponse')

const UpdateStudioComponentResponseSchema = z
  .object({
    studioComponent: StudioComponentSchema.and(
      z.any().openapi({ description: 'Information about the studio component.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateStudioComponentResponse')

const ClientTokenSchema = z.string().min(1).max(64).openapi('ClientToken')

const AcceptEulasRequestSchema = z
  .object({
    eulaIds: EulaIdListSchema.and(z.any().openapi({ description: 'The EULA ID.' })).exactOptional(),
  })
  .openapi({ title: 'AcceptEulasRequest', required: [] })
  .openapi('AcceptEulasRequest')

const StreamConfigurationCreateSchema = z
  .object({
    automaticTerminationMode: AutomaticTerminationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates if a streaming session created from this launch profile should be terminated automatically or retained without termination after being in a <code>STOPPED</code> state.</p> <ul> <li> <p>When <code>ACTIVATED</code>, the streaming session is scheduled for termination after being in the <code>STOPPED</code> state for the time specified in <code>maxStoppedSessionLengthInMinutes</code>.</p> </li> <li> <p>When <code>DEACTIVATED</code>, the streaming session can remain in the <code>STOPPED</code> state indefinitely.</p> </li> </ul> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>. When allowed, the default value for this parameter is <code>DEACTIVATED</code>.</p>',
        }),
    ).exactOptional(),
    clipboardMode: StreamingClipboardModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows or deactivates the use of the system clipboard to copy and paste between the streaming session and streaming client.',
        }),
    ),
    ec2InstanceTypes: StreamingInstanceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The EC2 instance types that users can select from when launching a streaming session with this launch profile.',
        }),
    ),
    maxSessionLengthInMinutes: StreamConfigurationMaxSessionLengthInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time, in minutes, that a streaming session can be active before it is stopped or terminated. After this point, Nimble Studio automatically terminates or stops the session. The default length of time is 690 minutes, and the maximum length of time is 30 days.',
        }),
    ).exactOptional(),
    maxStoppedSessionLengthInMinutes: StreamConfigurationMaxStoppedSessionLengthInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Integer that determines if you can start and stop your sessions and how long a session can stay in the <code>STOPPED</code> state. The default value is 0. The maximum value is 5760.</p> <p>This field is allowed only when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code> and <code>automaticTerminationMode</code> is <code>ACTIVATED</code>.</p> <p>If the value is set to 0, your sessions can’t be <code>STOPPED</code>. If you then call <code>StopStreamingSession</code>, the session fails. If the time that a session stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code> value, the session will automatically be terminated (instead of <code>STOPPED</code>).</p> <p>If the value is set to a positive number, the session can be stopped. You can call <code>StopStreamingSession</code> to stop sessions in the <code>READY</code> state. If the time that a session stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code> value, the session will automatically be stopped (instead of terminated).</p>',
        }),
    ).exactOptional(),
    sessionBackup: StreamConfigurationSessionBackupSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configures how streaming sessions are backed up when launched from this launch profile.',
        }),
    ).exactOptional(),
    sessionPersistenceMode: SessionPersistenceModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determine if a streaming session created from this launch profile can configure persistent storage. This means that <code>volumeConfiguration</code> and <code>automaticTerminationMode</code> are configured.',
        }),
    ).exactOptional(),
    sessionStorage: StreamConfigurationSessionStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upload storage for a streaming workstation that is created using this launch profile.',
        }),
    ).exactOptional(),
    streamingImageIds: StreamingImageIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The streaming images that users can select from when launching a streaming session with this launch profile.',
        }),
    ),
    volumeConfiguration: VolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['clipboardMode', 'ec2InstanceTypes', 'streamingImageIds'],
    description: 'Configuration for streaming workstations created using this launch profile.',
  })
  .openapi('StreamConfigurationCreate')

const CreateLaunchProfileRequestSchema = z
  .object({
    description: LaunchProfileDescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    ec2SubnetIds: EC2SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from. These subnets must support the specified instance types. ',
        }),
    ),
    launchProfileProtocolVersions: LaunchProfileProtocolVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".',
        }),
    ),
    name: LaunchProfileNameSchema.and(
      z.any().openapi({ description: 'The name for the launch profile.' }),
    ),
    streamConfiguration: StreamConfigurationCreateSchema.and(
      z.any().openapi({ description: 'A configuration for a streaming session.' }),
    ),
    studioComponentIds: LaunchProfileStudioComponentIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifiers for a collection of studio components that can be used with this launch profile.',
        }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ec2SubnetIds',
      'launchProfileProtocolVersions',
      'name',
      'streamConfiguration',
      'studioComponentIds',
    ],
    title: 'CreateLaunchProfileRequest',
  })
  .openapi('CreateLaunchProfileRequest')

const CreateStreamingImageRequestSchema = z
  .object({
    description: StreamingImageDescriptionSchema.and(
      z.any().openapi({ description: 'A human-readable description of the streaming image.' }),
    ).exactOptional(),
    ec2ImageId: EC2ImageIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of an EC2 machine image with which to create this streaming image.',
        }),
    ),
    name: StreamingImageNameSchema.and(
      z.any().openapi({ description: 'A friendly name for a streaming image resource.' }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ec2ImageId', 'name'], title: 'CreateStreamingImageRequest' })
  .openapi('CreateStreamingImageRequest')

const CreateStreamingSessionRequestSchema = z
  .object({
    ec2InstanceType: StreamingInstanceTypeSchema.and(
      z.any().openapi({ description: 'The EC2 Instance type used for the streaming session.' }),
    ).exactOptional(),
    launchProfileId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the launch profile used to control access from the streaming session.',
        }),
    ),
    ownedBy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user ID of the user that owns the streaming session. The user that owns the session will be logging into the session and interacting with the virtual workstation.',
        }),
    ).exactOptional(),
    streamingImageId: StreamingImageIdSchema.and(
      z.any().openapi({ description: 'The ID of the streaming image.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['launchProfileId'], title: 'CreateStreamingSessionRequest' })
  .openapi('CreateStreamingSessionRequest')

const StreamingSessionStreamExpirationInSecondsSchema = z
  .int()
  .min(60)
  .max(3600)
  .openapi('StreamingSessionStreamExpirationInSeconds')

const CreateStreamingSessionStreamRequestSchema = z
  .object({
    expirationInSeconds: StreamingSessionStreamExpirationInSecondsSchema.and(
      z.any().openapi({ description: 'The expiration time in seconds.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateStreamingSessionStreamRequest', required: [] })
  .openapi('CreateStreamingSessionStreamRequest')

const CreateStudioComponentRequestSchema = z
  .object({
    configuration: StudioComponentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration of the studio component, based on component type.',
        }),
    ).exactOptional(),
    description: StudioComponentDescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    ec2SecurityGroupIds: StudioComponentSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The EC2 security groups that control access to the studio component.',
        }),
    ).exactOptional(),
    initializationScripts: StudioComponentInitializationScriptListSchema.and(
      z.any().openapi({ description: 'Initialization scripts for studio components.' }),
    ).exactOptional(),
    name: StudioComponentNameSchema.and(
      z.any().openapi({ description: 'The name for the studio component.' }),
    ),
    runtimeRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running. ',
        }),
    ).exactOptional(),
    scriptParameters: StudioComponentScriptParameterKeyValueListSchema.and(
      z.any().openapi({ description: 'Parameters for the studio component scripts.' }),
    ).exactOptional(),
    secureInitializationRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.',
        }),
    ).exactOptional(),
    subtype: StudioComponentSubtypeSchema.and(
      z.any().openapi({ description: 'The specific subtype of a studio component.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
    type: StudioComponentTypeSchema.and(
      z.any().openapi({ description: 'The type of the studio component.' }),
    ),
  })
  .openapi({ required: ['name', 'type'], title: 'CreateStudioComponentRequest' })
  .openapi('CreateStudioComponentRequest')

const CreateStudioRequestSchema = z
  .object({
    adminRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that studio admins will assume when logging in to the Nimble Studio portal.',
        }),
    ),
    displayName: StudioDisplayNameSchema.and(
      z.any().openapi({ description: 'A friendly name for the studio.' }),
    ),
    studioEncryptionConfiguration: StudioEncryptionConfigurationSchema.and(
      z.any().openapi({ description: 'The studio encryption configuration.' }),
    ).exactOptional(),
    studioName: StudioNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.',
        }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
    userRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that studio users will assume when logging in to the Nimble Studio portal.',
        }),
    ),
  })
  .openapi({
    required: ['adminRoleArn', 'displayName', 'studioName', 'userRoleArn'],
    title: 'CreateStudioRequest',
  })
  .openapi('CreateStudioRequest')

const DeleteLaunchProfileMemberRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteLaunchProfileMemberRequest' })
  .openapi('DeleteLaunchProfileMemberRequest')

const DeleteLaunchProfileRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteLaunchProfileRequest' })
  .openapi('DeleteLaunchProfileRequest')

const DeleteStreamingImageRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteStreamingImageRequest' })
  .openapi('DeleteStreamingImageRequest')

const DeleteStreamingSessionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteStreamingSessionRequest' })
  .openapi('DeleteStreamingSessionRequest')

const DeleteStudioComponentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteStudioComponentRequest' })
  .openapi('DeleteStudioComponentRequest')

const DeleteStudioMemberRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteStudioMemberRequest' })
  .openapi('DeleteStudioMemberRequest')

const DeleteStudioRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteStudioRequest' })
  .openapi('DeleteStudioRequest')

const GetEulaRequestSchema = z
  .object({})
  .openapi({ title: 'GetEulaRequest' })
  .openapi('GetEulaRequest')

const GetLaunchProfileDetailsRequestSchema = z
  .object({})
  .openapi({ title: 'GetLaunchProfileDetailsRequest' })
  .openapi('GetLaunchProfileDetailsRequest')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const GetLaunchProfileInitializationRequestSchema = z
  .object({})
  .openapi({ title: 'GetLaunchProfileInitializationRequest' })
  .openapi('GetLaunchProfileInitializationRequest')

const GetLaunchProfileMemberRequestSchema = z
  .object({})
  .openapi({ title: 'GetLaunchProfileMemberRequest' })
  .openapi('GetLaunchProfileMemberRequest')

const GetLaunchProfileRequestSchema = z
  .object({})
  .openapi({ title: 'GetLaunchProfileRequest' })
  .openapi('GetLaunchProfileRequest')

const GetStreamingImageRequestSchema = z
  .object({})
  .openapi({ title: 'GetStreamingImageRequest' })
  .openapi('GetStreamingImageRequest')

const GetStreamingSessionBackupRequestSchema = z
  .object({})
  .openapi({ title: 'GetStreamingSessionBackupRequest' })
  .openapi('GetStreamingSessionBackupRequest')

const GetStreamingSessionRequestSchema = z
  .object({})
  .openapi({ title: 'GetStreamingSessionRequest' })
  .openapi('GetStreamingSessionRequest')

const GetStreamingSessionStreamRequestSchema = z
  .object({})
  .openapi({ title: 'GetStreamingSessionStreamRequest' })
  .openapi('GetStreamingSessionStreamRequest')

const GetStudioComponentRequestSchema = z
  .object({})
  .openapi({ title: 'GetStudioComponentRequest' })
  .openapi('GetStudioComponentRequest')

const GetStudioMemberRequestSchema = z
  .object({})
  .openapi({ title: 'GetStudioMemberRequest' })
  .openapi('GetStudioMemberRequest')

const GetStudioRequestSchema = z
  .object({})
  .openapi({ title: 'GetStudioRequest' })
  .openapi('GetStudioRequest')

const LaunchProfileStateListSchema = z
  .array(LaunchProfileStateSchema)
  .openapi('LaunchProfileStateList')

const ListEulaAcceptancesRequestSchema = z
  .object({})
  .openapi({ title: 'ListEulaAcceptancesRequest' })
  .openapi('ListEulaAcceptancesRequest')

const ListEulasRequestSchema = z
  .object({})
  .openapi({ title: 'ListEulasRequest' })
  .openapi('ListEulasRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListLaunchProfileMembersRequestSchema = z
  .object({})
  .openapi({ title: 'ListLaunchProfileMembersRequest' })
  .openapi('ListLaunchProfileMembersRequest')

const ListLaunchProfilesRequestSchema = z
  .object({})
  .openapi({ title: 'ListLaunchProfilesRequest' })
  .openapi('ListLaunchProfilesRequest')

const ListStreamingImagesRequestSchema = z
  .object({})
  .openapi({ title: 'ListStreamingImagesRequest' })
  .openapi('ListStreamingImagesRequest')

const ListStreamingSessionBackupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListStreamingSessionBackupsRequest' })
  .openapi('ListStreamingSessionBackupsRequest')

const ListStreamingSessionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListStreamingSessionsRequest' })
  .openapi('ListStreamingSessionsRequest')

const StudioComponentStateListSchema = z
  .array(StudioComponentStateSchema)
  .openapi('StudioComponentStateList')

const StudioComponentTypeListSchema = z
  .array(StudioComponentTypeSchema)
  .openapi('StudioComponentTypeList')

const ListStudioComponentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListStudioComponentsRequest' })
  .openapi('ListStudioComponentsRequest')

const ListStudioMembersRequestSchema = z
  .object({})
  .openapi({ title: 'ListStudioMembersRequest' })
  .openapi('ListStudioMembersRequest')

const ListStudiosRequestSchema = z
  .object({})
  .openapi({ title: 'ListStudiosRequest' })
  .openapi('ListStudiosRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const NewLaunchProfileMemberListSchema = z
  .array(NewLaunchProfileMemberSchema)
  .min(1)
  .max(20)
  .openapi('NewLaunchProfileMemberList')

const NewStudioMemberListSchema = z
  .array(NewStudioMemberSchema)
  .min(1)
  .max(20)
  .openapi('NewStudioMemberList')

const PutLaunchProfileMembersRequestSchema = z
  .object({
    identityStoreId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the identity store.' }),
    ),
    members: NewLaunchProfileMemberListSchema.and(
      z.any().openapi({ description: 'A list of members.' }),
    ),
  })
  .openapi({ required: ['identityStoreId', 'members'], title: 'PutLaunchProfileMembersRequest' })
  .openapi('PutLaunchProfileMembersRequest')

const PutStudioMembersRequestSchema = z
  .object({
    identityStoreId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the identity store.' }),
    ),
    members: NewStudioMemberListSchema.and(z.any().openapi({ description: 'A list of members.' })),
  })
  .openapi({ required: ['identityStoreId', 'members'], title: 'PutStudioMembersRequest' })
  .openapi('PutStudioMembersRequest')

const StartStreamingSessionRequestSchema = z
  .object({
    backupId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the backup.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartStreamingSessionRequest', required: [] })
  .openapi('StartStreamingSessionRequest')

const StartStudioSSOConfigurationRepairRequestSchema = z
  .object({})
  .openapi({ title: 'StartStudioSSOConfigurationRepairRequest' })
  .openapi('StartStudioSSOConfigurationRepairRequest')

const StopStreamingSessionRequestSchema = z
  .object({
    volumeRetentionMode: VolumeRetentionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Adds additional instructions to a streaming session stop action to either retain the EBS volumes or delete the EBS volumes.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StopStreamingSessionRequest', required: [] })
  .openapi('StopStreamingSessionRequest')

const TagResourceRequestSchema = z
  .object({
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of labels, in the form of key-value pairs, that apply to this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'TagResourceRequest', required: [] })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateLaunchProfileMemberRequestSchema = z
  .object({
    persona: LaunchProfilePersonaSchema.and(z.any().openapi({ description: 'The persona.' })),
  })
  .openapi({ required: ['persona'], title: 'UpdateLaunchProfileMemberRequest' })
  .openapi('UpdateLaunchProfileMemberRequest')

const UpdateLaunchProfileRequestSchema = z
  .object({
    description: LaunchProfileDescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    launchProfileProtocolVersions: LaunchProfileProtocolVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".',
        }),
    ).exactOptional(),
    name: LaunchProfileNameSchema.and(
      z.any().openapi({ description: 'The name for the launch profile.' }),
    ).exactOptional(),
    streamConfiguration: StreamConfigurationCreateSchema.and(
      z.any().openapi({ description: 'A configuration for a streaming session.' }),
    ).exactOptional(),
    studioComponentIds: LaunchProfileStudioComponentIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifiers for a collection of studio components that can be used with this launch profile.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateLaunchProfileRequest', required: [] })
  .openapi('UpdateLaunchProfileRequest')

const UpdateStreamingImageRequestSchema = z
  .object({
    description: StreamingImageDescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    name: StreamingImageNameSchema.and(
      z.any().openapi({ description: 'The name for the streaming image.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateStreamingImageRequest', required: [] })
  .openapi('UpdateStreamingImageRequest')

const UpdateStudioComponentRequestSchema = z
  .object({
    configuration: StudioComponentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration of the studio component, based on component type.',
        }),
    ).exactOptional(),
    description: StudioComponentDescriptionSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
    ec2SecurityGroupIds: StudioComponentSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The EC2 security groups that control access to the studio component.',
        }),
    ).exactOptional(),
    initializationScripts: StudioComponentInitializationScriptListSchema.and(
      z.any().openapi({ description: 'Initialization scripts for studio components.' }),
    ).exactOptional(),
    name: StudioComponentNameSchema.and(
      z.any().openapi({ description: 'The name for the studio component.' }),
    ).exactOptional(),
    runtimeRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running. ',
        }),
    ).exactOptional(),
    scriptParameters: StudioComponentScriptParameterKeyValueListSchema.and(
      z.any().openapi({ description: 'Parameters for the studio component scripts.' }),
    ).exactOptional(),
    secureInitializationRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.',
        }),
    ).exactOptional(),
    subtype: StudioComponentSubtypeSchema.and(
      z.any().openapi({ description: 'The specific subtype of a studio component.' }),
    ).exactOptional(),
    type: StudioComponentTypeSchema.and(
      z.any().openapi({ description: 'The type of the studio component.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateStudioComponentRequest', required: [] })
  .openapi('UpdateStudioComponentRequest')

const UpdateStudioRequestSchema = z
  .object({
    adminRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.',
        }),
    ).exactOptional(),
    displayName: StudioDisplayNameSchema.and(
      z.any().openapi({ description: 'A friendly name for the studio.' }),
    ).exactOptional(),
    userRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateStudioRequest', required: [] })
  .openapi('UpdateStudioRequest')

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

export const get20200801StudiosStudioIdEulaAcceptancesRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/eula-acceptances',
  description: 'List EULA acceptances.',
  operationId: 'ListEulaAcceptances',
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
      eulaIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'eulaIds',
            in: 'query',
            required: false,
            description: 'The list of EULA IDs that have been previously accepted.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEulaAcceptancesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdEulaAcceptancesRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/eula-acceptances',
  description: 'Accept EULAs.',
  operationId: 'AcceptEulas',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              eulaIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'The EULA ID.' }),
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
      content: { 'application/json': { schema: AcceptEulasResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdLaunchProfilesRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/launch-profiles',
  description: 'List all the launch profiles a studio.',
  operationId: 'ListLaunchProfiles',
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
            description: 'The max number of results to return in the response.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
      principalId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'principalId',
            in: 'query',
            required: false,
            description: 'The principal ID. This currently supports a IAM Identity Center UserId. ',
            schema: { type: 'string' },
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(LaunchProfileStateSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'states',
            in: 'query',
            required: false,
            description: 'Filter this request to launch profiles in any of the given states.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/LaunchProfileState' } },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLaunchProfilesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdLaunchProfilesRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/launch-profiles',
  description: 'Create a launch profile.',
  operationId: 'CreateLaunchProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
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
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A human-readable description of the launch profile.' }),
              ec2SubnetIds: z
                .array(EC2SubnetIdSchema)
                .min(0)
                .max(6)
                .openapi({
                  description:
                    'Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from. These subnets must support the specified instance types. ',
                }),
              launchProfileProtocolVersions: z
                .array(LaunchProfileProtocolVersionSchema)
                .openapi({
                  description:
                    'The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".',
                }),
              name: z
                .string()
                .min(1)
                .max(64)
                .openapi({ description: 'The name for the launch profile.' }),
              streamConfiguration: z
                .object({
                  automaticTerminationMode: AutomaticTerminationModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Indicates if a streaming session created from this launch profile should be terminated automatically or retained without termination after being in a <code>STOPPED</code> state.</p> <ul> <li> <p>When <code>ACTIVATED</code>, the streaming session is scheduled for termination after being in the <code>STOPPED</code> state for the time specified in <code>maxStoppedSessionLengthInMinutes</code>.</p> </li> <li> <p>When <code>DEACTIVATED</code>, the streaming session can remain in the <code>STOPPED</code> state indefinitely.</p> </li> </ul> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>. When allowed, the default value for this parameter is <code>DEACTIVATED</code>.</p>',
                      }),
                  ).exactOptional(),
                  clipboardMode: StreamingClipboardModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Allows or deactivates the use of the system clipboard to copy and paste between the streaming session and streaming client.',
                      }),
                  ).exactOptional(),
                  ec2InstanceTypes: StreamingInstanceTypeListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The EC2 instance types that users can select from when launching a streaming session with this launch profile.',
                      }),
                  ).exactOptional(),
                  maxSessionLengthInMinutes: StreamConfigurationMaxSessionLengthInMinutesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The length of time, in minutes, that a streaming session can be active before it is stopped or terminated. After this point, Nimble Studio automatically terminates or stops the session. The default length of time is 690 minutes, and the maximum length of time is 30 days.',
                      }),
                  ).exactOptional(),
                  maxStoppedSessionLengthInMinutes:
                    StreamConfigurationMaxStoppedSessionLengthInMinutesSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>Integer that determines if you can start and stop your sessions and how long a session can stay in the <code>STOPPED</code> state. The default value is 0. The maximum value is 5760.</p> <p>This field is allowed only when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code> and <code>automaticTerminationMode</code> is <code>ACTIVATED</code>.</p> <p>If the value is set to 0, your sessions can’t be <code>STOPPED</code>. If you then call <code>StopStreamingSession</code>, the session fails. If the time that a session stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code> value, the session will automatically be terminated (instead of <code>STOPPED</code>).</p> <p>If the value is set to a positive number, the session can be stopped. You can call <code>StopStreamingSession</code> to stop sessions in the <code>READY</code> state. If the time that a session stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code> value, the session will automatically be stopped (instead of terminated).</p>',
                        }),
                    ).exactOptional(),
                  sessionBackup: StreamConfigurationSessionBackupSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configures how streaming sessions are backed up when launched from this launch profile.',
                      }),
                  ).exactOptional(),
                  sessionPersistenceMode: SessionPersistenceModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Determine if a streaming session created from this launch profile can configure persistent storage. This means that <code>volumeConfiguration</code> and <code>automaticTerminationMode</code> are configured.',
                      }),
                  ).exactOptional(),
                  sessionStorage: StreamConfigurationSessionStorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The upload storage for a streaming workstation that is created using this launch profile.',
                      }),
                  ).exactOptional(),
                  streamingImageIds: StreamingImageIdListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The streaming images that users can select from when launching a streaming session with this launch profile.',
                      }),
                  ).exactOptional(),
                  volumeConfiguration: VolumeConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Configuration for streaming workstations created using this launch profile.',
                  required: [],
                }),
              studioComponentIds: z
                .array(StringSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'Unique identifiers for a collection of studio components that can be used with this launch profile.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A collection of labels, in the form of key-value pairs, that apply to this resource.',
                }),
            })
            .openapi({
              required: [
                'ec2SubnetIds',
                'launchProfileProtocolVersions',
                'name',
                'streamConfiguration',
                'studioComponentIds',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLaunchProfileResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdStreamingImagesRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/streaming-images',
  description:
    '<p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>',
  operationId: 'ListStreamingImages',
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
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'owner',
            in: 'query',
            required: false,
            description: 'Filter this request to streaming images with the given owner',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamingImagesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdStreamingImagesRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/streaming-images',
  description: 'Creates a streaming image resource in a studio.',
  operationId: 'CreateStreamingImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
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
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description.' }),
              ec2ImageId: z
                .string()
                .regex(/^ami-[0-9A-z]+$/)
                .openapi({
                  description:
                    'The ID of an EC2 machine image with which to create this streaming image.',
                }),
              name: z
                .string()
                .min(0)
                .max(64)
                .openapi({ description: 'A friendly name for a streaming image resource.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A collection of labels, in the form of key-value pairs, that apply to this resource.',
                }),
            })
            .openapi({ required: ['ec2ImageId', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStreamingImageResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdStreamingSessionsRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/streaming-sessions',
  description: 'Lists the streaming sessions in a studio.',
  operationId: 'ListStreamingSessions',
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
      createdBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBy',
            in: 'query',
            required: false,
            description: 'Filters the request to streaming sessions created by the given user.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
      ownedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ownedBy',
            in: 'query',
            required: false,
            description: 'Filters the request to streaming session owned by the given user',
            schema: { type: 'string' },
          },
        }),
      sessionIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sessionIds',
            in: 'query',
            required: false,
            description: 'Filters the request to only the provided session IDs.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamingSessionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdStreamingSessionsRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/streaming-sessions',
  description:
    '<p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>',
  operationId: 'CreateStreamingSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ec2InstanceType: z
                .enum([
                  'g4dn.xlarge',
                  'g4dn.2xlarge',
                  'g4dn.4xlarge',
                  'g4dn.8xlarge',
                  'g4dn.12xlarge',
                  'g4dn.16xlarge',
                  'g3.4xlarge',
                  'g3s.xlarge',
                  'g5.xlarge',
                  'g5.2xlarge',
                  'g5.4xlarge',
                  'g5.8xlarge',
                  'g5.16xlarge',
                ])
                .exactOptional()
                .openapi({ description: 'The EC2 Instance type used for the streaming session.' }),
              launchProfileId: z
                .string()
                .openapi({
                  description:
                    'The ID of the launch profile used to control access from the streaming session.',
                }),
              ownedBy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The user ID of the user that owns the streaming session. The user that owns the session will be logging into the session and interacting with the virtual workstation.',
                }),
              streamingImageId: z
                .string()
                .regex(/^[a-zA-Z0-9-_]*$/)
                .min(0)
                .max(22)
                .exactOptional()
                .openapi({ description: 'The ID of the streaming image.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A collection of labels, in the form of key-value pairs, that apply to this resource.',
                }),
            })
            .openapi({ required: ['launchProfileId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStreamingSessionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdStreamingSessionsSessionIdStreamsRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams',
  description:
    '<p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>',
  operationId: 'CreateStreamingSessionStream',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            description: 'The streaming session ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              expirationInSeconds: z
                .int()
                .min(60)
                .max(3600)
                .exactOptional()
                .openapi({ description: 'The expiration time in seconds.' }),
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
      content: { 'application/json': { schema: CreateStreamingSessionStreamResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios',
  description:
    'List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.',
  operationId: 'ListStudios',
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
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStudiosResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios',
  description:
    '<p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>',
  operationId: 'CreateStudio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              adminRoleArn: z
                .string()
                .min(0)
                .max(2048)
                .openapi({
                  description:
                    'The IAM role that studio admins will assume when logging in to the Nimble Studio portal.',
                }),
              displayName: z
                .string()
                .min(0)
                .max(64)
                .openapi({ description: 'A friendly name for the studio.' }),
              studioEncryptionConfiguration: z
                .object({
                  keyArn: StudioEncryptionConfigurationKeyArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The ARN for a KMS key that is used to encrypt studio data.',
                      }),
                  ).exactOptional(),
                  keyType: StudioEncryptionConfigurationKeyTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The type of KMS key that is used to encrypt studio data.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration of the encryption method that is used for the studio.',
                  required: [],
                }),
              studioName: z
                .string()
                .regex(/^[a-z0-9]*$/)
                .min(3)
                .max(64)
                .openapi({
                  description:
                    'The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A collection of labels, in the form of key-value pairs, that apply to this resource.',
                }),
              userRoleArn: z
                .string()
                .min(0)
                .max(2048)
                .openapi({
                  description:
                    'The IAM role that studio users will assume when logging in to the Nimble Studio portal.',
                }),
            })
            .openapi({ required: ['adminRoleArn', 'displayName', 'studioName', 'userRoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStudioResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdStudioComponentsRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/studio-components',
  description: 'Lists the <code>StudioComponents</code> in a studio.',
  operationId: 'ListStudioComponents',
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
            description: 'The max number of results to return in the response.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StudioComponentStateSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'states',
            in: 'query',
            required: false,
            description:
              'Filters the request to studio components that are in one of the given states. ',
            schema: { type: 'array', items: { $ref: '#/components/schemas/StudioComponentState' } },
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StudioComponentTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            required: false,
            description:
              'Filters the request to studio components that are of one of the given types.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/StudioComponentType' } },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStudioComponentsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdStudioComponentsRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/studio-components',
  description: 'Creates a studio component resource.',
  operationId: 'CreateStudioComponent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              configuration: z
                .object({
                  activeDirectoryConfiguration: ActiveDirectoryConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for a Directory Service for Microsoft Active Directory studio resource.',
                      }),
                  ).exactOptional(),
                  computeFarmConfiguration: ComputeFarmConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for a render farm that is associated with a studio resource.',
                      }),
                  ).exactOptional(),
                  licenseServiceConfiguration: LicenseServiceConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for a license service that is associated with a studio resource.',
                      }),
                  ).exactOptional(),
                  sharedFileSystemConfiguration: SharedFileSystemConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for a shared file storage system that is associated with a studio resource.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configuration of the studio component, based on component type.',
                  required: [],
                }),
              description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description.' }),
              ec2SecurityGroupIds: z
                .array(SecurityGroupIdSchema)
                .min(0)
                .max(30)
                .exactOptional()
                .openapi({
                  description:
                    'The EC2 security groups that control access to the studio component.',
                }),
              initializationScripts: z
                .array(StudioComponentInitializationScriptSchema)
                .exactOptional()
                .openapi({ description: 'Initialization scripts for studio components.' }),
              name: z
                .string()
                .min(0)
                .max(64)
                .openapi({ description: 'The name for the studio component.' }),
              runtimeRoleArn: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running. ',
                }),
              scriptParameters: z
                .array(ScriptParameterKeyValueSchema)
                .min(0)
                .max(30)
                .exactOptional()
                .openapi({ description: 'Parameters for the studio component scripts.' }),
              secureInitializationRoleArn: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.',
                }),
              subtype: z
                .enum([
                  'AWS_MANAGED_MICROSOFT_AD',
                  'AMAZON_FSX_FOR_WINDOWS',
                  'AMAZON_FSX_FOR_LUSTRE',
                  'CUSTOM',
                ])
                .exactOptional()
                .openapi({ description: 'The specific subtype of a studio component.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A collection of labels, in the form of key-value pairs, that apply to this resource.',
                }),
              type: z
                .enum([
                  'ACTIVE_DIRECTORY',
                  'SHARED_FILE_SYSTEM',
                  'COMPUTE_FARM',
                  'LICENSE_SERVICE',
                  'CUSTOM',
                ])
                .openapi({ description: 'The type of the studio component.' }),
            })
            .openapi({ required: ['name', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStudioComponentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}',
  description: 'Get a launch profile.',
  operationId: 'GetLaunchProfile',
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
      launchProfileId: z
        .string()
        .openapi({
          param: {
            name: 'launchProfileId',
            in: 'path',
            required: true,
            description:
              'The ID of the launch profile used to control access from the streaming session.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLaunchProfileResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const delete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdRoute = createRoute({
  method: 'delete',
  path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}',
  description: 'Permanently delete a launch profile.',
  operationId: 'DeleteLaunchProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      launchProfileId: z
        .string()
        .openapi({
          param: {
            name: 'launchProfileId',
            in: 'path',
            required: true,
            description:
              'The ID of the launch profile used to control access from the streaming session.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLaunchProfileResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const patch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdRoute = createRoute({
  method: 'patch',
  path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}',
  description: 'Update a launch profile.',
  operationId: 'UpdateLaunchProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      launchProfileId: z
        .string()
        .openapi({
          param: {
            name: 'launchProfileId',
            in: 'path',
            required: true,
            description:
              'The ID of the launch profile used to control access from the streaming session.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
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
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A human-readable description of the launch profile.' }),
              launchProfileProtocolVersions: z
                .array(LaunchProfileProtocolVersionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".',
                }),
              name: z
                .string()
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name for the launch profile.' }),
              streamConfiguration: z
                .object({
                  automaticTerminationMode: AutomaticTerminationModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Indicates if a streaming session created from this launch profile should be terminated automatically or retained without termination after being in a <code>STOPPED</code> state.</p> <ul> <li> <p>When <code>ACTIVATED</code>, the streaming session is scheduled for termination after being in the <code>STOPPED</code> state for the time specified in <code>maxStoppedSessionLengthInMinutes</code>.</p> </li> <li> <p>When <code>DEACTIVATED</code>, the streaming session can remain in the <code>STOPPED</code> state indefinitely.</p> </li> </ul> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>. When allowed, the default value for this parameter is <code>DEACTIVATED</code>.</p>',
                      }),
                  ).exactOptional(),
                  clipboardMode: StreamingClipboardModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Allows or deactivates the use of the system clipboard to copy and paste between the streaming session and streaming client.',
                      }),
                  ).exactOptional(),
                  ec2InstanceTypes: StreamingInstanceTypeListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The EC2 instance types that users can select from when launching a streaming session with this launch profile.',
                      }),
                  ).exactOptional(),
                  maxSessionLengthInMinutes: StreamConfigurationMaxSessionLengthInMinutesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The length of time, in minutes, that a streaming session can be active before it is stopped or terminated. After this point, Nimble Studio automatically terminates or stops the session. The default length of time is 690 minutes, and the maximum length of time is 30 days.',
                      }),
                  ).exactOptional(),
                  maxStoppedSessionLengthInMinutes:
                    StreamConfigurationMaxStoppedSessionLengthInMinutesSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>Integer that determines if you can start and stop your sessions and how long a session can stay in the <code>STOPPED</code> state. The default value is 0. The maximum value is 5760.</p> <p>This field is allowed only when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code> and <code>automaticTerminationMode</code> is <code>ACTIVATED</code>.</p> <p>If the value is set to 0, your sessions can’t be <code>STOPPED</code>. If you then call <code>StopStreamingSession</code>, the session fails. If the time that a session stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code> value, the session will automatically be terminated (instead of <code>STOPPED</code>).</p> <p>If the value is set to a positive number, the session can be stopped. You can call <code>StopStreamingSession</code> to stop sessions in the <code>READY</code> state. If the time that a session stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code> value, the session will automatically be stopped (instead of terminated).</p>',
                        }),
                    ).exactOptional(),
                  sessionBackup: StreamConfigurationSessionBackupSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configures how streaming sessions are backed up when launched from this launch profile.',
                      }),
                  ).exactOptional(),
                  sessionPersistenceMode: SessionPersistenceModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Determine if a streaming session created from this launch profile can configure persistent storage. This means that <code>volumeConfiguration</code> and <code>automaticTerminationMode</code> are configured.',
                      }),
                  ).exactOptional(),
                  sessionStorage: StreamConfigurationSessionStorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The upload storage for a streaming workstation that is created using this launch profile.',
                      }),
                  ).exactOptional(),
                  streamingImageIds: StreamingImageIdListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The streaming images that users can select from when launching a streaming session with this launch profile.',
                      }),
                  ).exactOptional(),
                  volumeConfiguration: VolumeConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration for streaming workstations created using this launch profile.',
                  required: [],
                }),
              studioComponentIds: z
                .array(StringSchema)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifiers for a collection of studio components that can be used with this launch profile.',
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
      content: { 'application/json': { schema: UpdateLaunchProfileResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdRoute =
  createRoute({
    method: 'get',
    path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}',
    description: 'Get a user persona in launch profile membership.',
    operationId: 'GetLaunchProfileMember',
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
        launchProfileId: z
          .string()
          .openapi({
            param: {
              name: 'launchProfileId',
              in: 'path',
              required: true,
              description:
                'The ID of the launch profile used to control access from the streaming session.',
              schema: { type: 'string' },
            },
          }),
        principalId: z
          .string()
          .openapi({
            param: {
              name: 'principalId',
              in: 'path',
              required: true,
              description:
                'The principal ID. This currently supports a IAM Identity Center UserId. ',
              schema: { type: 'string' },
            },
          }),
        studioId: z
          .string()
          .openapi({
            param: {
              name: 'studioId',
              in: 'path',
              required: true,
              description: 'The studio ID. ',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetLaunchProfileMemberResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      486: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
    },
  })

export const delete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdRoute =
  createRoute({
    method: 'delete',
    path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}',
    description: 'Delete a user from launch profile membership.',
    operationId: 'DeleteLaunchProfileMember',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Client-Token': z
          .string()
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amz-Client-Token',
              in: 'header',
              required: false,
              description:
                'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
              schema: { type: 'string', minLength: 1, maxLength: 64 },
            },
          }),
      }),
      params: z.object({
        launchProfileId: z
          .string()
          .openapi({
            param: {
              name: 'launchProfileId',
              in: 'path',
              required: true,
              description:
                'The ID of the launch profile used to control access from the streaming session.',
              schema: { type: 'string' },
            },
          }),
        principalId: z
          .string()
          .openapi({
            param: {
              name: 'principalId',
              in: 'path',
              required: true,
              description:
                'The principal ID. This currently supports a IAM Identity Center UserId. ',
              schema: { type: 'string' },
            },
          }),
        studioId: z
          .string()
          .openapi({
            param: {
              name: 'studioId',
              in: 'path',
              required: true,
              description: 'The studio ID. ',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteLaunchProfileMemberResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      486: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
    },
  })

export const patch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdRoute =
  createRoute({
    method: 'patch',
    path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}',
    description: 'Update a user persona in launch profile membership.',
    operationId: 'UpdateLaunchProfileMember',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Client-Token': z
          .string()
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amz-Client-Token',
              in: 'header',
              required: false,
              description:
                'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
              schema: { type: 'string', minLength: 1, maxLength: 64 },
            },
          }),
      }),
      params: z.object({
        launchProfileId: z
          .string()
          .openapi({
            param: {
              name: 'launchProfileId',
              in: 'path',
              required: true,
              description:
                'The ID of the launch profile used to control access from the streaming session.',
              schema: { type: 'string' },
            },
          }),
        principalId: z
          .string()
          .openapi({
            param: {
              name: 'principalId',
              in: 'path',
              required: true,
              description:
                'The principal ID. This currently supports a IAM Identity Center UserId. ',
              schema: { type: 'string' },
            },
          }),
        studioId: z
          .string()
          .openapi({
            param: {
              name: 'studioId',
              in: 'path',
              required: true,
              description: 'The studio ID. ',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({ persona: z.literal('USER').openapi({ description: 'The persona.' }) })
              .openapi({ required: ['persona'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateLaunchProfileMemberResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      486: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
    },
  })

export const get20200801StudiosStudioIdStreamingImagesStreamingImageIdRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}',
  description: 'Get streaming image.',
  operationId: 'GetStreamingImage',
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
      streamingImageId: z
        .string()
        .openapi({
          param: {
            name: 'streamingImageId',
            in: 'path',
            required: true,
            description: 'The streaming image ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStreamingImageResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const delete20200801StudiosStudioIdStreamingImagesStreamingImageIdRoute = createRoute({
  method: 'delete',
  path: '/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}',
  description: 'Delete streaming image.',
  operationId: 'DeleteStreamingImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      streamingImageId: z
        .string()
        .openapi({
          param: {
            name: 'streamingImageId',
            in: 'path',
            required: true,
            description: 'The streaming image ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStreamingImageResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const patch20200801StudiosStudioIdStreamingImagesStreamingImageIdRoute = createRoute({
  method: 'patch',
  path: '/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}',
  description: 'Update streaming image.',
  operationId: 'UpdateStreamingImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      streamingImageId: z
        .string()
        .openapi({
          param: {
            name: 'streamingImageId',
            in: 'path',
            required: true,
            description: 'The streaming image ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
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
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description.' }),
              name: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'A friendly name for a streaming image resource.' }),
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
      content: { 'application/json': { schema: UpdateStreamingImageResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdStreamingSessionsSessionIdRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}',
  description:
    '<p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>',
  operationId: 'GetStreamingSession',
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
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            description: 'The streaming session ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStreamingSessionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const delete20200801StudiosStudioIdStreamingSessionsSessionIdRoute = createRoute({
  method: 'delete',
  path: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}',
  description:
    '<p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>',
  operationId: 'DeleteStreamingSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            description: 'The streaming session ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStreamingSessionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}',
  description: 'Get a studio resource.',
  operationId: 'GetStudio',
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
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStudioResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const delete20200801StudiosStudioIdRoute = createRoute({
  method: 'delete',
  path: '/2020-08-01/studios/{studioId}',
  description: 'Delete a studio resource.',
  operationId: 'DeleteStudio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStudioResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const patch20200801StudiosStudioIdRoute = createRoute({
  method: 'patch',
  path: '/2020-08-01/studios/{studioId}',
  description:
    '<p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>',
  operationId: 'UpdateStudio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              adminRoleArn: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.',
                }),
              displayName: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'A friendly name for the studio.' }),
              userRoleArn: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.',
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
      content: { 'application/json': { schema: UpdateStudioResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdStudioComponentsStudioComponentIdRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}',
  description: 'Gets a studio component resource.',
  operationId: 'GetStudioComponent',
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
      studioComponentId: z
        .string()
        .openapi({
          param: {
            name: 'studioComponentId',
            in: 'path',
            required: true,
            description: 'The studio component ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStudioComponentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const delete20200801StudiosStudioIdStudioComponentsStudioComponentIdRoute = createRoute({
  method: 'delete',
  path: '/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}',
  description: 'Deletes a studio component resource.',
  operationId: 'DeleteStudioComponent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioComponentId: z
        .string()
        .openapi({
          param: {
            name: 'studioComponentId',
            in: 'path',
            required: true,
            description: 'The studio component ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStudioComponentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const patch20200801StudiosStudioIdStudioComponentsStudioComponentIdRoute = createRoute({
  method: 'patch',
  path: '/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}',
  description: 'Updates a studio component resource.',
  operationId: 'UpdateStudioComponent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioComponentId: z
        .string()
        .openapi({
          param: {
            name: 'studioComponentId',
            in: 'path',
            required: true,
            description: 'The studio component ID.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              configuration: z
                .object({
                  activeDirectoryConfiguration: ActiveDirectoryConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for a Directory Service for Microsoft Active Directory studio resource.',
                      }),
                  ).exactOptional(),
                  computeFarmConfiguration: ComputeFarmConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for a render farm that is associated with a studio resource.',
                      }),
                  ).exactOptional(),
                  licenseServiceConfiguration: LicenseServiceConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for a license service that is associated with a studio resource.',
                      }),
                  ).exactOptional(),
                  sharedFileSystemConfiguration: SharedFileSystemConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for a shared file storage system that is associated with a studio resource.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configuration of the studio component, based on component type.',
                  required: [],
                }),
              description: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description.' }),
              ec2SecurityGroupIds: z
                .array(SecurityGroupIdSchema)
                .min(0)
                .max(30)
                .exactOptional()
                .openapi({
                  description:
                    'The EC2 security groups that control access to the studio component.',
                }),
              initializationScripts: z
                .array(StudioComponentInitializationScriptSchema)
                .exactOptional()
                .openapi({ description: 'Initialization scripts for studio components.' }),
              name: z
                .string()
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name for the studio component.' }),
              runtimeRoleArn: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running. ',
                }),
              scriptParameters: z
                .array(ScriptParameterKeyValueSchema)
                .min(0)
                .max(30)
                .exactOptional()
                .openapi({ description: 'Parameters for the studio component scripts.' }),
              secureInitializationRoleArn: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.',
                }),
              subtype: z
                .enum([
                  'AWS_MANAGED_MICROSOFT_AD',
                  'AMAZON_FSX_FOR_WINDOWS',
                  'AMAZON_FSX_FOR_LUSTRE',
                  'CUSTOM',
                ])
                .exactOptional()
                .openapi({ description: 'The specific subtype of a studio component.' }),
              type: z
                .enum([
                  'ACTIVE_DIRECTORY',
                  'SHARED_FILE_SYSTEM',
                  'COMPUTE_FARM',
                  'LICENSE_SERVICE',
                  'CUSTOM',
                ])
                .exactOptional()
                .openapi({ description: 'The type of the studio component.' }),
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
      content: { 'application/json': { schema: UpdateStudioComponentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdMembershipPrincipalIdRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/membership/{principalId}',
  description: "Get a user's membership in a studio.",
  operationId: 'GetStudioMember',
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
      principalId: z
        .string()
        .openapi({
          param: {
            name: 'principalId',
            in: 'path',
            required: true,
            description: 'The principal ID. This currently supports a IAM Identity Center UserId. ',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStudioMemberResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const delete20200801StudiosStudioIdMembershipPrincipalIdRoute = createRoute({
  method: 'delete',
  path: '/2020-08-01/studios/{studioId}/membership/{principalId}',
  description: 'Delete a user from studio membership.',
  operationId: 'DeleteStudioMember',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      principalId: z
        .string()
        .openapi({
          param: {
            name: 'principalId',
            in: 'path',
            required: true,
            description: 'The principal ID. This currently supports a IAM Identity Center UserId. ',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStudioMemberResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801EulasEulaIdRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/eulas/{eulaId}',
  description: 'Get EULA.',
  operationId: 'GetEula',
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
      eulaId: z
        .string()
        .openapi({
          param: {
            name: 'eulaId',
            in: 'path',
            required: true,
            description: 'The EULA ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEulaResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details',
  description:
    'Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.',
  operationId: 'GetLaunchProfileDetails',
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
      launchProfileId: z
        .string()
        .openapi({
          param: {
            name: 'launchProfileId',
            in: 'path',
            required: true,
            description:
              'The ID of the launch profile used to control access from the streaming session.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLaunchProfileDetailsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformRoute =
  createRoute({
    method: 'get',
    path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init#launchProfileProtocolVersions&launchPurpose&platform',
    description: 'Get a launch profile initialization.',
    operationId: 'GetLaunchProfileInitialization',
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
        launchProfileId: z
          .string()
          .openapi({
            param: {
              name: 'launchProfileId',
              in: 'path',
              required: true,
              description:
                'The ID of the launch profile used to control access from the streaming session.',
              schema: { type: 'string' },
            },
          }),
        studioId: z
          .string()
          .openapi({
            param: {
              name: 'studioId',
              in: 'path',
              required: true,
              description: 'The studio ID. ',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        launchProfileProtocolVersions: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(StringSchema),
          )
          .openapi({
            param: {
              name: 'launchProfileProtocolVersions',
              in: 'query',
              required: true,
              description: 'The launch profile protocol versions supported by the client.',
              schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
            },
          }),
        launchPurpose: z
          .string()
          .openapi({
            param: {
              name: 'launchPurpose',
              in: 'query',
              required: true,
              description: 'The launch purpose.',
              schema: { type: 'string' },
            },
          }),
        platform: z
          .string()
          .openapi({
            param: {
              name: 'platform',
              in: 'query',
              required: true,
              description:
                'The platform where this Launch Profile will be used, either Windows or Linux.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetLaunchProfileInitializationResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      486: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
    },
  })

export const get20200801StudiosStudioIdStreamingSessionBackupsBackupIdRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/streaming-session-backups/{backupId}',
  description:
    '<p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>',
  operationId: 'GetStreamingSessionBackup',
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
      backupId: z
        .string()
        .openapi({
          param: {
            name: 'backupId',
            in: 'path',
            required: true,
            description: 'The ID of the backup.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStreamingSessionBackupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdRoute = createRoute(
  {
    method: 'get',
    path: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}',
    description:
      '<p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>',
    operationId: 'GetStreamingSessionStream',
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
        sessionId: z
          .string()
          .openapi({
            param: {
              name: 'sessionId',
              in: 'path',
              required: true,
              description: 'The streaming session ID.',
              schema: { type: 'string' },
            },
          }),
        streamId: z
          .string()
          .openapi({
            param: {
              name: 'streamId',
              in: 'path',
              required: true,
              description: 'The streaming session stream ID.',
              schema: { type: 'string' },
            },
          }),
        studioId: z
          .string()
          .openapi({
            param: {
              name: 'studioId',
              in: 'path',
              required: true,
              description: 'The studio ID. ',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetStreamingSessionStreamResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      486: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
    },
  },
)

export const get20200801EulasRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/eulas',
  description: 'List EULAs.',
  operationId: 'ListEulas',
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
      eulaIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'eulaIds',
            in: 'query',
            required: false,
            description: 'The list of EULA IDs that should be returned',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEulasResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership',
  description: 'Get all users in a given launch profile membership.',
  operationId: 'ListLaunchProfileMembers',
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
      launchProfileId: z
        .string()
        .openapi({
          param: {
            name: 'launchProfileId',
            in: 'path',
            required: true,
            description:
              'The ID of the launch profile used to control access from the streaming session.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
            description: 'The max number of results to return in the response.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLaunchProfileMembersResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership',
  description: 'Add/update users with given persona to launch profile membership.',
  operationId: 'PutLaunchProfileMembers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      launchProfileId: z
        .string()
        .openapi({
          param: {
            name: 'launchProfileId',
            in: 'path',
            required: true,
            description:
              'The ID of the launch profile used to control access from the streaming session.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identityStoreId: z.string().openapi({ description: 'The ID of the identity store.' }),
              members: z
                .array(NewLaunchProfileMemberSchema)
                .min(1)
                .max(20)
                .openapi({ description: 'A list of members.' }),
            })
            .openapi({ required: ['identityStoreId', 'members'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutLaunchProfileMembersResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdStreamingSessionBackupsRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/streaming-session-backups',
  description: 'Lists the backups of a streaming session in a studio.',
  operationId: 'ListStreamingSessionBackups',
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
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
      ownedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ownedBy',
            in: 'query',
            required: false,
            description: 'The user ID of the user that owns the streaming session.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamingSessionBackupsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const get20200801StudiosStudioIdMembershipRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/studios/{studioId}/membership',
  description:
    '<p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>',
  operationId: 'ListStudioMembers',
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
            description: 'The max number of results to return in the response.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token for the next set of results, or null if there are no more results.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStudioMembersResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdMembershipRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/membership',
  description: 'Add/update users with given persona to studio membership.',
  operationId: 'PutStudioMembers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identityStoreId: z.string().openapi({ description: 'The ID of the identity store.' }),
              members: z
                .array(NewStudioMemberSchema)
                .min(1)
                .max(20)
                .openapi({ description: 'A list of members.' }),
            })
            .openapi({ required: ['identityStoreId', 'members'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutStudioMembersResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const get20200801TagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/2020-08-01/tags/{resourceArn}',
  description:
    '<p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource for which you want to list tags.',
            schema: { type: 'string' },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801TagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/tags/{resourceArn}',
  description: 'Creates tags for a resource, given its ARN.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource you want to add tags to. ',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A collection of labels, in the form of key-value pairs, that apply to this resource.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdStreamingSessionsSessionIdStartRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/start',
  description:
    'Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.',
  operationId: 'StartStreamingSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            description:
              'The streaming session ID for the <code>StartStreamingSessionRequest</code>.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID for the StartStreamingSessionRequest.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              backupId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the backup.' }),
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
      content: { 'application/json': { schema: StartStreamingSessionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const put20200801StudiosStudioIdSsoConfigurationRoute = createRoute({
  method: 'put',
  path: '/2020-08-01/studios/{studioId}/sso-configuration',
  description:
    '<p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>',
  operationId: 'StartStudioSSOConfigurationRepair',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studio ID. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartStudioSSOConfigurationRepairResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const post20200801StudiosStudioIdStreamingSessionsSessionIdStopRoute = createRoute({
  method: 'post',
  path: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/stop',
  description:
    'Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.',
  operationId: 'StopStreamingSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Client-Token': z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amz-Client-Token',
            in: 'header',
            required: false,
            description:
              'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.',
            schema: { type: 'string', minLength: 1, maxLength: 64 },
          },
        }),
    }),
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            description:
              'The streaming session ID for the <code>StopStreamingSessionRequest</code>.',
            schema: { type: 'string' },
          },
        }),
      studioId: z
        .string()
        .openapi({
          param: {
            name: 'studioId',
            in: 'path',
            required: true,
            description: 'The studioId for the StopStreamingSessionRequest.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              volumeRetentionMode: z
                .enum(['RETAIN', 'DELETE'])
                .exactOptional()
                .openapi({
                  description:
                    'Adds additional instructions to a streaming session stop action to either retain the EBS volumes or delete the EBS volumes.',
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
      content: { 'application/json': { schema: StopStreamingSessionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const delete20200801TagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/2020-08-01/tags/{resourceArn}#tagKeys',
  description: 'Deletes the tags for a resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'Identifies the Amazon Resource Name(ARN) key from which you are removing tags. ',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'One or more tag keys. Specify only the tag keys, not the tag values.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})
