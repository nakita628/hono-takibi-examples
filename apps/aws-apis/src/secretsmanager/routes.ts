import { createRoute, z } from '@hono/zod-openapi'

const SecretARNTypeSchema = z.string().min(20).max(2048).openapi('SecretARNType')

const SecretNameTypeSchema = z.string().min(1).max(256).openapi('SecretNameType')

const SecretVersionIdTypeSchema = z.string().min(32).max(64).openapi('SecretVersionIdType')

const CancelRotateSecretResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret.' }),
    ).exactOptional(),
    VersionId: SecretVersionIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the version of the secret created during the rotation. This version might not be complete, and should be evaluated for possible deletion. We recommend that you remove the <code>VersionStage</code> value <code>AWSPENDING</code> from this version so that Secrets Manager can delete it. Failing to clean up a cancelled rotation can block you from starting future rotations.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'Name',
    },
    required: [],
  })
  .openapi('CancelRotateSecretResponse')

const SecretIdTypeSchema = z.string().min(1).max(2048).openapi('SecretIdType')

const CancelRotateSecretRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['SecretId'], title: 'CancelRotateSecretRequest' })
  .openapi('CancelRotateSecretRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const InternalServiceErrorSchema = z.any().openapi('InternalServiceError')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const RegionTypeSchema = z
  .string()
  .regex(/^([a-z]+-)+\d+$/)
  .min(1)
  .max(128)
  .openapi('RegionType')

const KmsKeyIdTypeSchema = z.string().min(0).max(2048).openapi('KmsKeyIdType')

const StatusTypeSchema = z.enum(['InSync', 'Failed', 'InProgress']).openapi('StatusType')

const StatusMessageTypeSchema = z.string().min(1).max(4096).openapi('StatusMessageType')

const LastAccessedDateTypeSchema = z.iso.datetime({ offset: true }).openapi('LastAccessedDateType')

const ReplicationStatusTypeSchema = z
  .object({
    Region: RegionTypeSchema.and(
      z.any().openapi({ description: 'The Region where replication occurs.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Can be an <code>ARN</code>, <code>Key ID</code>, or <code>Alias</code>. ',
        }),
    ).exactOptional(),
    Status: StatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status can be <code>InProgress</code>, <code>Failed</code>, or <code>InSync</code>.',
        }),
    ).exactOptional(),
    StatusMessage: StatusMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Status message such as "<i>Secret with this name already exists in this region</i>".',
        }),
    ).exactOptional(),
    LastAccessedDate: LastAccessedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the secret was last accessed in the Region. This field is omitted if the secret has never been retrieved in the Region.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A replication object consisting of a <code>RegionReplicationStatus</code> object and includes a Region, KMSKeyId, status, and status message.',
    required: [],
  })
  .openapi('ReplicationStatusType')

const ReplicationStatusListTypeSchema = z
  .array(ReplicationStatusTypeSchema)
  .openapi('ReplicationStatusListType')

const CreateSecretResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the new secret. The ARN includes the name of the secret followed by six random characters. This ensures that if you create a new secret with the same name as a deleted secret, then users with access to the old secret don't get access to the new secret because the ARNs are different.",
        }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the new secret.' }),
    ).exactOptional(),
    VersionId: SecretVersionIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier associated with the version of the new secret.',
        }),
    ).exactOptional(),
    ReplicationStatus: ReplicationStatusListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the replicas of this secret and their status:</p> <ul> <li> <p> <code>Failed</code>, which indicates that the replica was not created.</p> </li> <li> <p> <code>InProgress</code>, which indicates that Secrets Manager is in the process of creating the replica.</p> </li> <li> <p> <code>InSync</code>, which indicates that the replica was created.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
      VersionId: 'EXAMPLE1-90ab-cdef-fedc-ba987SECRET1',
    },
    required: [],
  })
  .openapi('CreateSecretResponse')

const NameTypeSchema = z.string().min(1).max(512).openapi('NameType')

const ClientRequestTokenTypeSchema = z.string().min(32).max(64).openapi('ClientRequestTokenType')

const DescriptionTypeSchema = z.string().max(2048).openapi('DescriptionType')

const SecretBinaryTypeSchema = z.string().min(1).max(65536).openapi('SecretBinaryType')

const SecretStringTypeSchema = z.string().min(1).max(65536).openapi('SecretStringType')

const TagKeyTypeSchema = z.string().min(1).max(128).openapi('TagKeyType')

const TagValueTypeSchema = z.string().min(0).max(256).openapi('TagValueType')

const TagSchema = z
  .object({
    Key: TagKeyTypeSchema.and(
      z.any().openapi({ description: 'The key identifier, or name, of the tag.' }),
    ).exactOptional(),
    Value: TagValueTypeSchema.and(
      z.any().openapi({ description: 'The string value associated with the key of the tag.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A structure that contains information about a tag.', required: [] })
  .openapi('Tag')

const TagListTypeSchema = z.array(TagSchema).openapi('TagListType')

const ReplicaRegionTypeSchema = z
  .object({
    Region: RegionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Region code. For a list of Region codes, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints">Name and code of Regions</a>.',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses <code>aws/secretsmanager</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A custom type that specifies a <code>Region</code> and the <code>KmsKeyId</code> for a replica secret.',
    required: [],
  })
  .openapi('ReplicaRegionType')

const AddReplicaRegionListTypeSchema = z
  .array(ReplicaRegionTypeSchema)
  .min(1)
  .openapi('AddReplicaRegionListType')

const BooleanTypeSchema = z.boolean().openapi('BooleanType')

const CreateSecretRequestSchema = z
  .object({
    Name: NameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the new secret.</p> <p>The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-</p> <p>Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.</p>',
        }),
    ),
    ClientRequestToken: ClientRequestTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If you include <code>SecretString</code> or <code>SecretBinary</code>, then Secrets Manager creates an initial version for the secret, and this parameter specifies the unique identifier for the new version. </p> <note> <p>If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a <code>ClientRequestToken</code> yourself for the new version and include the value in the request.</p> </note> <p>This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a <a href=\"https://wikipedia.org/wiki/Universally_unique_identifier\">UUID-type</a> value to ensure uniqueness of your versions within the specified secret. </p> <ul> <li> <p>If the <code>ClientRequestToken</code> value isn't already associated with a version of the secret then a new version of the secret is created. </p> </li> <li> <p>If a version with this value already exists and the version <code>SecretString</code> and <code>SecretBinary</code> values are the same as those in the request, then the request is ignored.</p> </li> <li> <p>If a version with this value already exists and that version's <code>SecretString</code> and <code>SecretBinary</code> values are different from those in the request, then the request fails because you cannot modify an existing version. Instead, use <a>PutSecretValue</a> to create a new version.</p> </li> </ul> <p>This value becomes the <code>VersionId</code> of the new version.</p>",
        }),
    ).exactOptional(),
    Description: DescriptionTypeSchema.and(
      z.any().openapi({ description: 'The description of the secret.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by <code>alias/</code>, for example <code>alias/aws/secretsmanager</code>. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html\">About aliases</a>.</p> <p>To use a KMS key in a different account, use the key ARN or the alias ARN.</p> <p>If you don't specify this value, then Secrets Manager uses the key <code>aws/secretsmanager</code>. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.</p> <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed KMS key. </p>",
        }),
    ).exactOptional(),
    SecretBinary: SecretBinaryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The binary data to encrypt and store in the new version of the secret. We recommend that you store your binary data in a file and then pass the contents of the file as a parameter.</p> <p>Either <code>SecretString</code> or <code>SecretBinary</code> must have a value, but not both.</p> <p>This parameter is not available in the Secrets Manager console.</p>',
        }),
    ).exactOptional(),
    SecretString: SecretStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The text data to encrypt and store in this new version of the secret. We recommend you use a JSON structure of key/value pairs for your secret value.</p> <p>Either <code>SecretString</code> or <code>SecretBinary</code> must have a value, but not both.</p> <p>If you create a secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the <code>SecretString</code> parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that a Lambda rotation function can parse.</p>',
        }),
    ).exactOptional(),
    Tags: TagListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:</p> <p> <code>[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]</code> </p> <p>Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".</p> <p>If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an <code>Access Denied</code> error. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac">Control access to secrets using tags</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2">Limit access to identities with tags that match secrets\' tags</a>.</p> <p>For information about how to format a JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json">Using JSON for Parameters</a>. If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per secret: 50</p> </li> <li> <p>Maximum key length: 127 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 255 Unicode characters in UTF-8</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use the <code>aws:</code> prefix in your tag names or values because Amazon Web Services reserves it for Amazon Web Services use. You can\'t edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.</p> </li> <li> <p>If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.</p> </li> </ul>',
        }),
    ).exactOptional(),
    AddReplicaRegions: AddReplicaRegionListTypeSchema.and(
      z.any().openapi({ description: 'A list of Regions and KMS keys to replicate secrets.' }),
    ).exactOptional(),
    ForceOverwriteReplicaSecret: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateSecretRequest' })
  .openapi('CreateSecretRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const EncryptionFailureSchema = z.any().openapi('EncryptionFailure')

const ResourceExistsExceptionSchema = z.any().openapi('ResourceExistsException')

const MalformedPolicyDocumentExceptionSchema = z.any().openapi('MalformedPolicyDocumentException')

const PreconditionNotMetExceptionSchema = z.any().openapi('PreconditionNotMetException')

const DecryptionFailureSchema = z.any().openapi('DecryptionFailure')

const DeleteResourcePolicyResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the secret that the resource-based policy was deleted for.',
        }),
    ).exactOptional(),
    Name: NameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the secret that the resource-based policy was deleted for.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
    },
    required: [],
  })
  .openapi('DeleteResourcePolicyResponse')

const DeleteResourcePolicyRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret to delete the attached resource-based policy for.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['SecretId'], title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const DeletionDateTypeSchema = z.iso.datetime({ offset: true }).openapi('DeletionDateType')

const DeleteSecretResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret.' }),
    ).exactOptional(),
    DeletionDate: DeletionDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time after which this secret Secrets Manager can permanently delete this secret, and it can no longer be restored. This value is the date and time of the delete request plus the number of days in <code>RecoveryWindowInDays</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      DeletionDate: '1524085349.095',
      Name: 'MyTestDatabaseSecret',
    },
    required: [],
  })
  .openapi('DeleteSecretResponse')

const RecoveryWindowInDaysTypeSchema = z.int().openapi('RecoveryWindowInDaysType')

const DeleteSecretRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret to delete.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    RecoveryWindowInDays: RecoveryWindowInDaysTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of days from 7 to 30 that Secrets Manager waits before permanently deleting the secret. You can't use both this parameter and <code>ForceDeleteWithoutRecovery</code> in the same call. If you don't use either, then by default Secrets Manager uses a 30 day recovery window.",
        }),
    ).exactOptional(),
    ForceDeleteWithoutRecovery: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether to delete the secret without any recovery window. You can't use both this parameter and <code>RecoveryWindowInDays</code> in the same call. If you don't use either, then by default Secrets Manager uses a 30 day recovery window.</p> <p>Secrets Manager performs the actual deletion with an asynchronous background process, so there might be a short delay before the secret is permanently deleted. If you delete a secret and then immediately create a secret with the same name, use appropriate back off and retry logic.</p> <p>If you forcibly delete an already deleted or nonexistent secret, the operation does not return <code>ResourceNotFoundException</code>.</p> <important> <p>Use this parameter with caution. This parameter causes the operation to skip the normal recovery window before the permanent deletion that Secrets Manager would normally impose with the <code>RecoveryWindowInDays</code> parameter. If you delete a secret with the <code>ForceDeleteWithoutRecovery</code> parameter, then you have no opportunity to recover the secret. You lose the secret permanently.</p> </important>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SecretId'], title: 'DeleteSecretRequest' })
  .openapi('DeleteSecretRequest')

const RotationEnabledTypeSchema = z.boolean().openapi('RotationEnabledType')

const RotationLambdaARNTypeSchema = z.string().min(0).max(2048).openapi('RotationLambdaARNType')

const AutomaticallyRotateAfterDaysTypeSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('AutomaticallyRotateAfterDaysType')

const DurationTypeSchema = z
  .string()
  .regex(/[0-9h]+/)
  .min(2)
  .max(3)
  .openapi('DurationType')

const ScheduleExpressionTypeSchema = z
  .string()
  .regex(/[0-9A-Za-z\(\)#\?\*\-\/, ]+/)
  .min(1)
  .max(256)
  .openapi('ScheduleExpressionType')

const RotationRulesTypeSchema = z
  .object({
    AutomaticallyAfterDays: AutomaticallyRotateAfterDaysTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days between rotations of the secret. You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated. If you use this field to set the rotation schedule, Secrets Manager calculates the next rotation date based on the previous rotation. Manually updating the secret value by calling <code>PutSecretValue</code> or <code>UpdateSecret</code> is considered a valid rotation.</p> <p>In <code>DescribeSecret</code> and <code>ListSecrets</code>, this value is calculated from the rotation schedule after every successful rotation. In <code>RotateSecret</code>, you can set the rotation schedule in <code>RotationRules</code> with <code>AutomaticallyAfterDays</code> or <code>ScheduleExpression</code>, but not both. To set a rotation schedule in hours, use <code>ScheduleExpression</code>.</p>',
        }),
    ).exactOptional(),
    Duration: DurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of the rotation window in hours, for example <code>3h</code> for a three hour window. Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the <code>ScheduleExpression</code>. If you don\'t specify a <code>Duration</code>, for a <code>ScheduleExpression</code> in hours, the window automatically closes after one hour. For a <code>ScheduleExpression</code> in days, the window automatically closes at the end of the UTC day. For more information, including examples, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_schedule.html">Schedule expressions in Secrets Manager rotation</a> in the <i>Secrets Manager Users Guide</i>.',
        }),
    ).exactOptional(),
    ScheduleExpression: ScheduleExpressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A <code>cron()</code> or <code>rate()</code> expression that defines the schedule for rotating your secret. Secrets Manager rotation schedules use UTC time zone. Secrets Manager rotates your secret any time during a rotation window.</p> <p>Secrets Manager <code>rate()</code> expressions represent the interval in hours or days that you want to rotate your secret, for example <code>rate(12 hours)</code> or <code>rate(10 days)</code>. You can rotate a secret as often as every four hours. If you use a <code>rate()</code> expression, the rotation window starts at midnight. For a rate in hours, the default rotation window closes after one hour. For a rate in days, the default rotation window closes at the end of the day. You can set the <code>Duration</code> to change the rotation window. The rotation window must not extend into the next UTC day or into the next rotation window.</p> <p>You can use a <code>cron()</code> expression to create a rotation schedule that is more detailed than a rotation interval. For more information, including examples, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_schedule.html">Schedule expressions in Secrets Manager rotation</a> in the <i>Secrets Manager Users Guide</i>. For a cron expression that represents a schedule in hours, the default rotation window closes after one hour. For a cron expression that represents a schedule in days, the default rotation window closes at the end of the day. You can set the <code>Duration</code> to change the rotation window. The rotation window must not extend into the next UTC day or into the next rotation window.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that defines the rotation configuration for the secret.',
    required: [],
  })
  .openapi('RotationRulesType')

const LastRotatedDateTypeSchema = z.iso.datetime({ offset: true }).openapi('LastRotatedDateType')

const LastChangedDateTypeSchema = z.iso.datetime({ offset: true }).openapi('LastChangedDateType')

const DeletedDateTypeSchema = z.iso.datetime({ offset: true }).openapi('DeletedDateType')

const NextRotationDateTypeSchema = z.iso.datetime({ offset: true }).openapi('NextRotationDateType')

const SecretVersionStageTypeSchema = z.string().min(1).max(256).openapi('SecretVersionStageType')

const SecretVersionStagesTypeSchema = z
  .array(SecretVersionStageTypeSchema)
  .min(1)
  .max(20)
  .openapi('SecretVersionStagesType')

const SecretVersionsToStagesMapTypeSchema = z
  .record(z.string(), SecretVersionStagesTypeSchema)
  .openapi('SecretVersionsToStagesMapType')

const OwningServiceTypeSchema = z.string().min(1).max(128).openapi('OwningServiceType')

const TimestampTypeSchema = z.iso.datetime({ offset: true }).openapi('TimestampType')

const DescribeSecretResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret.' }),
    ).exactOptional(),
    Description: DescriptionTypeSchema.and(
      z.any().openapi({ description: 'The description of the secret.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key ID or alias ARN of the KMS key that Secrets Manager uses to encrypt the secret value. If the secret is encrypted with the Amazon Web Services managed key <code>aws/secretsmanager</code>, this field is omitted. Secrets created using the console use an KMS key ID.',
        }),
    ).exactOptional(),
    RotationEnabled: RotationEnabledTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether automatic rotation is turned on for this secret.</p> <p>To turn on rotation, use <a>RotateSecret</a>. To turn off rotation, use <a>CancelRotateSecret</a>.</p>',
        }),
    ).exactOptional(),
    RotationLambdaARN: RotationLambdaARNTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Lambda function that Secrets Manager invokes to rotate the secret. ',
        }),
    ).exactOptional(),
    RotationRules: RotationRulesTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The rotation schedule and Lambda function for this secret. If the secret previously had rotation turned on, but it is now turned off, this field shows the previous rotation schedule and rotation function. If the secret never had rotation turned on, this field is omitted.',
        }),
    ).exactOptional(),
    LastRotatedDate: LastRotatedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The last date and time that Secrets Manager rotated the secret. If the secret isn't configured for rotation, Secrets Manager returns null.",
        }),
    ).exactOptional(),
    LastChangedDate: LastChangedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The last date and time that this secret was modified in any way.',
        }),
    ).exactOptional(),
    LastAccessedDate: LastAccessedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the secret was last accessed in the Region. This field is omitted if the secret has never been retrieved in the Region.',
        }),
    ).exactOptional(),
    DeletedDate: DeletedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date the secret is scheduled for deletion. If it is not scheduled for deletion, this field is omitted. When you delete a secret, Secrets Manager requires a recovery window of at least 7 days before deleting the secret. Some time after the deleted date, Secrets Manager deletes the secret, including all of its versions.</p> <p>If a secret is scheduled for deletion, then its details, including the encrypted secret value, is not accessible. To cancel a scheduled deletion and restore access to the secret, use <a>RestoreSecret</a>.</p>',
        }),
    ).exactOptional(),
    NextRotationDate: NextRotationDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The next rotation is scheduled to occur on or before this date. If the secret isn't configured for rotation, Secrets Manager returns null.",
        }),
    ).exactOptional(),
    Tags: TagListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of tags attached to the secret. To add tags to a secret, use <a>TagResource</a>. To remove tags, use <a>UntagResource</a>.',
        }),
    ).exactOptional(),
    VersionIdsToStages: SecretVersionsToStagesMapTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the versions of the secret that have staging labels attached. Versions that don\'t have staging labels are considered deprecated and Secrets Manager can delete them.</p> <p>Secrets Manager uses staging labels to indicate the status of a secret version during rotation. The three staging labels for rotation are: </p> <ul> <li> <p> <code>AWSCURRENT</code>, which indicates the current version of the secret.</p> </li> <li> <p> <code>AWSPENDING</code>, which indicates the version of the secret that contains new secret information that will become the next current version when rotation finishes.</p> <p>During rotation, Secrets Manager creates an <code>AWSPENDING</code> version ID before creating the new secret version. To check if a secret version exists, call <a>GetSecretValue</a>.</p> </li> <li> <p> <code>AWSPREVIOUS</code>, which indicates the previous current version of the secret. You can use this as the <i>last known good</i> version.</p> </li> </ul> <p>For more information about rotation and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p>',
        }),
    ).exactOptional(),
    OwningService: OwningServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the service that created this secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets managed by other Amazon Web Services services</a>.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The date the secret was created.' }),
    ).exactOptional(),
    PrimaryRegion: RegionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Region the secret is in. If a secret is replicated to other Regions, the replicas are listed in <code>ReplicationStatus</code>. ',
        }),
    ).exactOptional(),
    ReplicationStatus: ReplicationStatusListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the replicas of this secret and their status: </p> <ul> <li> <p> <code>Failed</code>, which indicates that the replica was not created.</p> </li> <li> <p> <code>InProgress</code>, which indicates that Secrets Manager is in the process of creating the replica.</p> </li> <li> <p> <code>InSync</code>, which indicates that the replica was created.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Description: 'My test database secret',
      KmsKeyId: 'arn:aws:kms:us-west-2:123456789012:key/EXAMPLE1-90ab-cdef-fedc-ba987KMSKEY1',
      LastAccessedDate: '1523923200',
      LastChangedDate: 1523477145.729,
      LastRotatedDate: 1525747253.72,
      Name: 'MyTestDatabaseSecret',
      NextRotationDate: '1665165599',
      RotationEnabled: true,
      RotationLambdaARN: 'arn:aws:lambda:us-west-2:123456789012:function:MyTestRotationLambda',
      RotationRules: {
        AutomaticallyAfterDays: 14,
        Duration: '2h',
        ScheduleExpression: 'cron(0 16 1,15 * ? *)',
      },
      Tags: [
        { Key: 'SecondTag', Value: 'AnotherValue' },
        { Key: 'FirstTag', Value: 'SomeValue' },
      ],
      VersionIdsToStages: {
        'EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE': ['AWSPREVIOUS'],
        'EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE': ['AWSCURRENT'],
      },
    },
    required: [],
  })
  .openapi('DescribeSecretResponse')

const DescribeSecretRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret. </p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['SecretId'], title: 'DescribeSecretRequest' })
  .openapi('DescribeSecretRequest')

const RandomPasswordTypeSchema = z.string().min(0).max(4096).openapi('RandomPasswordType')

const GetRandomPasswordResponseSchema = z
  .object({
    RandomPassword: RandomPasswordTypeSchema.and(
      z.any().openapi({ description: 'A string with the password.' }),
    ).exactOptional(),
  })
  .openapi({ example: { RandomPassword: 'EXAMPLE-PASSWORD' }, required: [] })
  .openapi('GetRandomPasswordResponse')

const PasswordLengthTypeSchema = z.int().min(1).max(4096).openapi('PasswordLengthType')

const ExcludeCharactersTypeSchema = z.string().min(0).max(4096).openapi('ExcludeCharactersType')

const ExcludeNumbersTypeSchema = z.boolean().openapi('ExcludeNumbersType')

const ExcludePunctuationTypeSchema = z.boolean().openapi('ExcludePunctuationType')

const ExcludeUppercaseTypeSchema = z.boolean().openapi('ExcludeUppercaseType')

const ExcludeLowercaseTypeSchema = z.boolean().openapi('ExcludeLowercaseType')

const IncludeSpaceTypeSchema = z.boolean().openapi('IncludeSpaceType')

const RequireEachIncludedTypeTypeSchema = z.boolean().openapi('RequireEachIncludedTypeType')

const GetRandomPasswordRequestSchema = z
  .object({
    PasswordLength: PasswordLengthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The length of the password. If you don't include this parameter, the default length is 32 characters.",
        }),
    ).exactOptional(),
    ExcludeCharacters: ExcludeCharactersTypeSchema.and(
      z
        .any()
        .openapi({
          description: "A string of the characters that you don't want in the password.",
        }),
    ).exactOptional(),
    ExcludeNumbers: ExcludeNumbersTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.",
        }),
    ).exactOptional(),
    ExcludePunctuation: ExcludePunctuationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to exclude the following punctuation characters from the password: <code>! \" # $ % &amp; ' ( ) * + , - . / : ; &lt; = &gt; ? @ [ \\ ] ^ _ ` { | } ~</code>. If you don't include this switch, the password can contain punctuation.",
        }),
    ).exactOptional(),
    ExcludeUppercase: ExcludeUppercaseTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters.",
        }),
    ).exactOptional(),
    ExcludeLowercase: ExcludeLowercaseTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters.",
        }),
    ).exactOptional(),
    IncludeSpace: IncludeSpaceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to include the space character. If you include this switch, the password can contain space characters.',
        }),
    ).exactOptional(),
    RequireEachIncludedType: RequireEachIncludedTypeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRandomPasswordRequest', required: [] })
  .openapi('GetRandomPasswordRequest')

const NonEmptyResourcePolicyTypeSchema = z
  .string()
  .min(1)
  .max(20480)
  .openapi('NonEmptyResourcePolicyType')

const GetResourcePolicyResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the secret that the resource-based policy was retrieved for.',
        }),
    ).exactOptional(),
    Name: NameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the secret that the resource-based policy was retrieved for.',
        }),
    ).exactOptional(),
    ResourcePolicy: NonEmptyResourcePolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON-formatted string that contains the permissions policy attached to the secret. For more information about permissions policies, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control for Secrets Manager</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
      ResourcePolicy:
        '{\n"Version":"2012-10-17",\n"Statement":[{\n"Effect":"Allow",\n"Principal":{\n"AWS":"arn:aws:iam::123456789012:root"\n},\n"Action":"secretsmanager:GetSecretValue",\n"Resource":"*"\n}]\n}',
    },
    required: [],
  })
  .openapi('GetResourcePolicyResponse')

const GetResourcePolicyRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret to retrieve the attached resource-based policy for.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['SecretId'], title: 'GetResourcePolicyRequest' })
  .openapi('GetResourcePolicyRequest')

const CreatedDateTypeSchema = z.iso.datetime({ offset: true }).openapi('CreatedDateType')

const GetSecretValueResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The friendly name of the secret.' }),
    ).exactOptional(),
    VersionId: SecretVersionIdTypeSchema.and(
      z.any().openapi({ description: 'The unique identifier of this version of the secret.' }),
    ).exactOptional(),
    SecretBinary: SecretBinaryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The decrypted secret value, if the secret value was originally provided as binary data in the form of a byte array. The response parameter represents the binary data as a <a href="https://tools.ietf.org/html/rfc4648#section-4">base64-encoded</a> string.</p> <p>If the secret was created by using the Secrets Manager console, or if the secret value was originally provided as a string, then this field is omitted. The secret value appears in <code>SecretString</code> instead.</p>',
        }),
    ).exactOptional(),
    SecretString: SecretStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The decrypted secret value, if the secret value was originally provided as a string or through the Secrets Manager console.</p> <p>If this secret was created by using the console, then Secrets Manager stores the information as a JSON structure of key/value pairs. </p>',
        }),
    ).exactOptional(),
    VersionStages: SecretVersionStagesTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of all of the staging labels currently attached to this version of the secret.',
        }),
    ).exactOptional(),
    CreatedDate: CreatedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time that this version of the secret was created. If you don't specify which version in <code>VersionId</code> or <code>VersionStage</code>, then Secrets Manager uses the <code>AWSCURRENT</code> version.",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      CreatedDate: 1523477145.713,
      Name: 'MyTestDatabaseSecret',
      SecretString: '{\n  "username":"david",\n  "password":"EXAMPLE-PASSWORD"\n}\n',
      VersionId: 'EXAMPLE1-90ab-cdef-fedc-ba987SECRET1',
      VersionStages: ['AWSPREVIOUS'],
    },
    required: [],
  })
  .openapi('GetSecretValueResponse')

const GetSecretValueRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret to retrieve.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    VersionId: SecretVersionIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the version of the secret to retrieve. If you include both this parameter and <code>VersionStage</code>, the two parameters must refer to the same secret version. If you don\'t specify either a <code>VersionStage</code> or <code>VersionId</code>, then Secrets Manager returns the <code>AWSCURRENT</code> version.</p> <p>This value is typically a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a> value with 32 hexadecimal digits.</p>',
        }),
    ).exactOptional(),
    VersionStage: SecretVersionStageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The staging label of the version of the secret to retrieve. </p> <p>Secrets Manager uses staging labels to keep track of different versions during the rotation process. If you include both this parameter and <code>VersionId</code>, the two parameters must refer to the same secret version. If you don't specify either a <code>VersionStage</code> or <code>VersionId</code>, Secrets Manager returns the <code>AWSCURRENT</code> version.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SecretId'], title: 'GetSecretValueRequest' })
  .openapi('GetSecretValueRequest')

const KmsKeyIdListTypeSchema = z.array(KmsKeyIdTypeSchema).openapi('KmsKeyIdListType')

const SecretVersionsListEntrySchema = z
  .object({
    VersionId: SecretVersionIdTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The unique version identifier of this version of the secret.' }),
    ).exactOptional(),
    VersionStages: SecretVersionStagesTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of staging labels that are currently associated with this version of the secret.',
        }),
    ).exactOptional(),
    LastAccessedDate: LastAccessedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that this version of the secret was last accessed. Note that the resolution of this field is at the date level and does not include the time.',
        }),
    ).exactOptional(),
    CreatedDate: CreatedDateTypeSchema.and(
      z.any().openapi({ description: 'The date and time this version of the secret was created.' }),
    ).exactOptional(),
    KmsKeyIds: KmsKeyIdListTypeSchema.and(
      z.any().openapi({ description: 'The KMS keys used to encrypt the secret version.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains information about one version of a secret.',
    required: [],
  })
  .openapi('SecretVersionsListEntry')

const SecretVersionsListTypeSchema = z
  .array(SecretVersionsListEntrySchema)
  .openapi('SecretVersionsListType')

const NextTokenTypeSchema = z.string().min(1).max(4096).openapi('NextTokenType')

const ListSecretVersionIdsResponseSchema = z
  .object({
    Versions: SecretVersionsListTypeSchema.and(
      z.any().openapi({ description: 'A list of the versions of the secret.' }),
    ).exactOptional(),
    NextToken: NextTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Secrets Manager includes this value if there's more output available than what is included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a long list. To get the next results, call <code>ListSecretVersionIds</code> again with this value. ",
        }),
    ).exactOptional(),
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
      Versions: [
        {
          CreatedDate: 1523477145.713,
          VersionId: 'EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE',
          VersionStages: ['AWSPREVIOUS'],
        },
        {
          CreatedDate: 1523486221.391,
          VersionId: 'EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE',
          VersionStages: ['AWSCURRENT'],
        },
        { CreatedDate: 1511974462.36, VersionId: 'EXAMPLE3-90ab-cdef-fedc-ba987EXAMPLE;' },
      ],
    },
    required: [],
  })
  .openapi('ListSecretVersionIdsResponse')

const MaxResultsTypeSchema = z.int().min(1).max(100).openapi('MaxResultsType')

const ListSecretVersionIdsRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret whose versions you want to list.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    MaxResults: MaxResultsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of results to include in the response.</p> <p>If there are more results available, in the response, Secrets Manager includes <code>NextToken</code>. To get the next results, call <code>ListSecretVersionIds</code> again with the value from <code>NextToken</code>. </p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call <code>ListSecretVersionIds</code> again with this value.',
        }),
    ).exactOptional(),
    IncludeDeprecated: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to include versions of secrets that don't have any staging labels attached to them. Versions without staging labels are considered deprecated and are subject to deletion by Secrets Manager. By default, versions without staging labels aren't included.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SecretId'], title: 'ListSecretVersionIdsRequest' })
  .openapi('ListSecretVersionIdsRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const SecretListEntrySchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the secret.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The friendly name of the secret. You can use forward slashes in the name to represent a path hierarchy. For example, <code>/prod/databases/dbserver1</code> could represent the secret for a server named <code>dbserver1</code> in the folder <code>databases</code> in the folder <code>prod</code>. ',
        }),
    ).exactOptional(),
    Description: DescriptionTypeSchema.and(
      z.any().openapi({ description: 'The user-provided description of the secret.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the KMS key that Secrets Manager uses to encrypt the secret value. If the secret is encrypted with the Amazon Web Services managed key <code>aws/secretsmanager</code>, this field is omitted.',
        }),
    ).exactOptional(),
    RotationEnabled: RotationEnabledTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether automatic, scheduled rotation is enabled for this secret.',
        }),
    ).exactOptional(),
    RotationLambdaARN: RotationLambdaARNTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an Amazon Web Services Lambda function invoked by Secrets Manager to rotate and expire the secret either automatically per the schedule or manually by a call to <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RotateSecret.html"> <code>RotateSecret</code> </a>.',
        }),
    ).exactOptional(),
    RotationRules: RotationRulesTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that defines the rotation configuration for the secret.',
        }),
    ).exactOptional(),
    LastRotatedDate: LastRotatedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The most recent date and time that the Secrets Manager rotation process was successfully completed. This value is null if the secret hasn't ever rotated.",
        }),
    ).exactOptional(),
    LastChangedDate: LastChangedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The last date and time that this secret was modified in any way.',
        }),
    ).exactOptional(),
    LastAccessedDate: LastAccessedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the secret was last accessed in the Region. This field is omitted if the secret has never been retrieved in the Region.',
        }),
    ).exactOptional(),
    DeletedDate: DeletedDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time the deletion of the secret occurred. Not present on active secrets. The secret can be recovered until the number of days in the recovery window has passed, as specified in the <code>RecoveryWindowInDays</code> parameter of the <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html"> <code>DeleteSecret</code> </a> operation.',
        }),
    ).exactOptional(),
    NextRotationDate: NextRotationDateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The next rotation is scheduled to occur on or before this date. If the secret isn't configured for rotation, Secrets Manager returns null.",
        }),
    ).exactOptional(),
    Tags: TagListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of user-defined tags associated with the secret. To add tags to a secret, use <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_TagResource.html"> <code>TagResource</code> </a>. To remove tags, use <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UntagResource.html"> <code>UntagResource</code> </a>.',
        }),
    ).exactOptional(),
    SecretVersionsToStages: SecretVersionsToStagesMapTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of all of the currently assigned <code>SecretVersionStage</code> staging labels and the <code>SecretVersionId</code> attached to each one. Staging labels are used to keep track of the different versions during the rotation process.</p> <note> <p>A version that does not have any <code>SecretVersionStage</code> is considered deprecated and subject to deletion. Such versions are not included in this list.</p> </note>',
        }),
    ).exactOptional(),
    OwningService: OwningServiceTypeSchema.and(
      z.any().openapi({ description: 'Returns the name of the service that created the secret.' }),
    ).exactOptional(),
    CreatedDate: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The date and time when a secret was created.' }),
    ).exactOptional(),
    PrimaryRegion: RegionTypeSchema.and(
      z.any().openapi({ description: 'The Region where Secrets Manager originated the secret.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html">GetSecretValue</a> .',
    required: [],
  })
  .openapi('SecretListEntry')

const SecretListTypeSchema = z.array(SecretListEntrySchema).openapi('SecretListType')

const ListSecretsResponseSchema = z
  .object({
    SecretList: SecretListTypeSchema.and(
      z.any().openapi({ description: 'A list of the secrets in the account.' }),
    ).exactOptional(),
    NextToken: NextTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Secrets Manager includes this value if there's more output available than what is included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a long list. To get the next results, call <code>ListSecrets</code> again with this value.",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SecretList: [
        {
          ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
          Description: 'My test database secret',
          LastChangedDate: 1523477145.729,
          Name: 'MyTestDatabaseSecret',
          SecretVersionsToStages: { 'EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE': ['AWSCURRENT'] },
        },
        {
          ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret1-d4e5f6',
          Description: 'Another secret created for a different database',
          LastChangedDate: 1523482025.685,
          Name: 'MyTestDatabaseSecret1',
          SecretVersionsToStages: { 'EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE': ['AWSCURRENT'] },
        },
      ],
    },
    required: [],
  })
  .openapi('ListSecretsResponse')

const FilterNameStringTypeSchema = z
  .enum(['description', 'name', 'tag-key', 'tag-value', 'primary-region', 'owning-service', 'all'])
  .openapi('FilterNameStringType')

const FilterValueStringTypeSchema = z
  .string()
  .regex(/^\!?[a-zA-Z0-9 :_@\/\+\=\.\-\!]*$/)
  .max(512)
  .openapi('FilterValueStringType')

const FilterValuesStringListSchema = z
  .array(FilterValueStringTypeSchema)
  .min(1)
  .max(10)
  .openapi('FilterValuesStringList')

const FilterSchema = z
  .object({
    Key: FilterNameStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The following are keys you can use:</p> <ul> <li> <p> <b>description</b>: Prefix match, not case-sensitive.</p> </li> <li> <p> <b>name</b>: Prefix match, case-sensitive.</p> </li> <li> <p> <b>tag-key</b>: Prefix match, case-sensitive.</p> </li> <li> <p> <b>tag-value</b>: Prefix match, case-sensitive.</p> </li> <li> <p> <b>primary-region</b>: Prefix match, case-sensitive.</p> </li> <li> <p> <b>owning-service</b>: Prefix match, case-sensitive.</p> </li> <li> <p> <b>all</b>: Breaks the filter value string into words and then searches all attributes for matches. Not case-sensitive.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Values: FilterValuesStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The keyword to filter for.</p> <p>You can prefix your search value with an exclamation mark (<code>!</code>) in order to perform negation filters. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Allows you to add filters when you use the search function in Secrets Manager. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.',
    required: [],
  })
  .openapi('Filter')

const FiltersListTypeSchema = z.array(FilterSchema).max(10).openapi('FiltersListType')

const SortOrderTypeSchema = z.enum(['asc', 'desc']).openapi('SortOrderType')

const ListSecretsRequestSchema = z
  .object({
    IncludePlannedDeletion: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to include secrets scheduled for deletion. By default, secrets scheduled for deletion aren't included.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of results to include in the response.</p> <p>If there are more results available, in the response, Secrets Manager includes <code>NextToken</code>. To get the next results, call <code>ListSecrets</code> again with the value from <code>NextToken</code>.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call <code>ListSecrets</code> again with this value.',
        }),
    ).exactOptional(),
    Filters: FiltersListTypeSchema.and(
      z.any().openapi({ description: 'The filters to apply to the list of secrets.' }),
    ).exactOptional(),
    SortOrder: SortOrderTypeSchema.and(
      z.any().openapi({ description: 'Secrets are listed by <code>CreatedDate</code>. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSecretsRequest', required: [] })
  .openapi('ListSecretsRequest')

const PutResourcePolicyResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret.' }),
    ).exactOptional(),
    Name: NameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
    },
    required: [],
  })
  .openapi('PutResourcePolicyResponse')

const PutResourcePolicyRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret to attach the resource-based policy.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    ResourcePolicy: NonEmptyResourcePolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON-formatted string for an Amazon Web Services resource-based policy. For example policies, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html">Permissions policy examples</a>.',
        }),
    ),
    BlockPublicPolicy: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to block resource-based policies that allow broad access to the secret, for example those that use a wildcard for the principal. By default, public policies aren't blocked.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SecretId', 'ResourcePolicy'], title: 'PutResourcePolicyRequest' })
  .openapi('PutResourcePolicyRequest')

const PublicPolicyExceptionSchema = z.any().openapi('PublicPolicyException')

const PutSecretValueResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret.' }),
    ).exactOptional(),
    VersionId: SecretVersionIdTypeSchema.and(
      z.any().openapi({ description: 'The unique identifier of the version of the secret.' }),
    ).exactOptional(),
    VersionStages: SecretVersionStagesTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of staging labels that are currently attached to this version of the secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
      VersionId: 'EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE',
      VersionStages: ['AWSCURRENT'],
    },
    required: [],
  })
  .openapi('PutSecretValueResponse')

const PutSecretValueRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret to add a new version to.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p> <p>If the secret doesn\'t already exist, use <code>CreateSecret</code> instead.</p>',
        }),
    ),
    ClientRequestToken: ClientRequestTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique identifier for the new version of the secret. </p> <note> <p>If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty because they generate a random UUID for you. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a <code>ClientRequestToken</code> yourself for new versions and include that value in the request. </p> </note> <p>This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during the Lambda rotation function processing. We recommend that you generate a <a href=\"https://wikipedia.org/wiki/Universally_unique_identifier\">UUID-type</a> value to ensure uniqueness within the specified secret. </p> <ul> <li> <p>If the <code>ClientRequestToken</code> value isn't already associated with a version of the secret then a new version of the secret is created. </p> </li> <li> <p>If a version with this value already exists and that version's <code>SecretString</code> or <code>SecretBinary</code> values are the same as those in the request then the request is ignored. The operation is idempotent. </p> </li> <li> <p>If a version with this value already exists and the version of the <code>SecretString</code> and <code>SecretBinary</code> values are different from those in the request, then the request fails because you can't modify a secret version. You can only create new versions to store new secret values.</p> </li> </ul> <p>This value becomes the <code>VersionId</code> of the new version.</p>",
        }),
    ).exactOptional(),
    SecretBinary: SecretBinaryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The binary data to encrypt and store in the new version of the secret. To use this parameter in the command-line tools, we recommend that you store your binary data in a file and then pass the contents of the file as a parameter. </p> <p>You must include <code>SecretBinary</code> or <code>SecretString</code>, but not both.</p> <p>You can't access this value from the Secrets Manager console.</p>",
        }),
    ).exactOptional(),
    SecretString: SecretStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The text to encrypt and store in the new version of the secret. </p> <p>You must include <code>SecretBinary</code> or <code>SecretString</code>, but not both.</p> <p>We recommend you create the secret string as JSON key/value pairs, as shown in the example.</p>',
        }),
    ).exactOptional(),
    VersionStages: SecretVersionStagesTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of staging labels to attach to this version of the secret. Secrets Manager uses staging labels to track versions of a secret through the rotation process.</p> <p>If you specify a staging label that's already associated with a different version of the same secret, then Secrets Manager removes the label from the other version and attaches it to this version. If you specify <code>AWSCURRENT</code>, and it is already attached to another version, then Secrets Manager also moves the staging label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>If you don't include <code>VersionStages</code>, then Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to this version.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SecretId'], title: 'PutSecretValueRequest' })
  .openapi('PutSecretValueRequest')

const RemoveRegionsFromReplicationResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the primary secret.' }),
    ).exactOptional(),
    ReplicationStatus: ReplicationStatusListTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of replicas for this secret after you remove Regions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveRegionsFromReplicationResponse')

const RemoveReplicaRegionListTypeSchema = z
  .array(RegionTypeSchema)
  .min(1)
  .openapi('RemoveReplicaRegionListType')

const RemoveRegionsFromReplicationRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z.any().openapi({ description: 'The ARN or name of the secret.' }),
    ),
    RemoveReplicaRegions: RemoveReplicaRegionListTypeSchema.and(
      z.any().openapi({ description: 'The Regions of the replicas to remove.' }),
    ),
  })
  .openapi({
    required: ['SecretId', 'RemoveReplicaRegions'],
    title: 'RemoveRegionsFromReplicationRequest',
  })
  .openapi('RemoveRegionsFromReplicationRequest')

const ReplicateSecretToRegionsResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the primary secret.' }),
    ).exactOptional(),
    ReplicationStatus: ReplicationStatusListTypeSchema.and(
      z.any().openapi({ description: 'The status of replication.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestSecret-1a2b3c',
      ReplicationStatus: [
        { KmsKeyId: 'alias/aws/secretsmanager', Region: 'eu-west-3', Status: 'InProgress' },
      ],
    },
    required: [],
  })
  .openapi('ReplicateSecretToRegionsResponse')

const ReplicateSecretToRegionsRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z.any().openapi({ description: 'The ARN or name of the secret to replicate.' }),
    ),
    AddReplicaRegions: AddReplicaRegionListTypeSchema.and(
      z.any().openapi({ description: 'A list of Regions in which to replicate the secret.' }),
    ),
    ForceOverwriteReplicaSecret: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SecretId', 'AddReplicaRegions'],
    title: 'ReplicateSecretToRegionsRequest',
  })
  .openapi('ReplicateSecretToRegionsRequest')

const RestoreSecretResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret that was restored.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret that was restored.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
    },
    required: [],
  })
  .openapi('RestoreSecretResponse')

const RestoreSecretRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret to restore.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['SecretId'], title: 'RestoreSecretRequest' })
  .openapi('RestoreSecretRequest')

const RotateSecretResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret.' }),
    ).exactOptional(),
    VersionId: SecretVersionIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the new version of the secret.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
      VersionId: 'EXAMPLE2-90ab-cdef-fedc-ba987SECRET2',
    },
    required: [],
  })
  .openapi('RotateSecretResponse')

const RotateSecretRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret to rotate.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    ClientRequestToken: ClientRequestTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for the new version of the secret that helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during rotation. This value becomes the <code>VersionId</code> of the new version.</p> <p>If you use the Amazon Web Services CLI or one of the Amazon Web Services SDK to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request for this parameter. If you don\'t use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a <code>ClientRequestToken</code> yourself for new versions and include that value in the request.</p> <p>You only need to specify this value if you implement your own retry logic and you want to ensure that Secrets Manager doesn\'t attempt to create a secret version twice. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a> value to ensure uniqueness within the specified secret. </p>',
        }),
    ).exactOptional(),
    RotationLambdaARN: RotationLambdaARNTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For secrets that use a Lambda rotation function to rotate, the ARN of the Lambda rotation function. </p> <p>For secrets that use <i>managed rotation</i>, omit this field. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_managed.html">Managed rotation</a> in the <i>Secrets Manager User Guide</i>.</p>',
        }),
    ).exactOptional(),
    RotationRules: RotationRulesTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that defines the rotation configuration for this secret.',
        }),
    ).exactOptional(),
    RotateImmediately: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. The rotation schedule is defined in <a>RotateSecretRequest$RotationRules</a>.</p> <p>For secrets that use a Lambda rotation function to rotate, if you don\'t immediately rotate the secret, Secrets Manager tests the rotation configuration by running the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html"> <code>testSecret</code> step</a> of the Lambda rotation function. The test creates an <code>AWSPENDING</code> version of the secret and then removes it.</p> <p>By default, Secrets Manager rotates the secret immediately.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SecretId'], title: 'RotateSecretRequest' })
  .openapi('RotateSecretRequest')

const StopReplicationToReplicaResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the promoted secret. The ARN is the same as the original primary secret except the Region is changed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopReplicationToReplicaResponse')

const StopReplicationToReplicaRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the primary secret. ' }),
    ),
  })
  .openapi({ required: ['SecretId'], title: 'StopReplicationToReplicaRequest' })
  .openapi('StopReplicationToReplicaRequest')

const TagResourceRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the secret to attach tags to. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    Tags: TagListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags to attach to the secret as a JSON text string argument. Each element in the list consists of a <code>Key</code> and a <code>Value</code>.</p> <p>For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html">Specifying parameter values for the Amazon Web Services CLI</a> in the Amazon Web Services CLI User Guide.</p>',
        }),
    ),
  })
  .openapi({ required: ['SecretId', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TagKeyListTypeSchema = z.array(TagKeyTypeSchema).openapi('TagKeyListType')

const UntagResourceRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    TagKeys: TagKeyListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tag key names to remove from the secret. You don\'t specify the value. Both the key and its associated value are removed.</p> <p>This parameter requires a JSON text string argument.</p> <p>For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html">Specifying parameter values for the Amazon Web Services CLI</a> in the Amazon Web Services CLI User Guide.</p>',
        }),
    ),
  })
  .openapi({ required: ['SecretId', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateSecretResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret that was updated.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret that was updated.' }),
    ).exactOptional(),
    VersionId: SecretVersionIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If Secrets Manager created a new version of the secret during this operation, then <code>VersionId</code> contains the unique identifier of the new version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'aws:arn:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
      VersionId: 'EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE',
    },
    required: [],
  })
  .openapi('UpdateSecretResponse')

const UpdateSecretRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or name of the secret.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    ClientRequestToken: ClientRequestTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If you include <code>SecretString</code> or <code>SecretBinary</code>, then Secrets Manager creates a new version for the secret, and this parameter specifies the unique identifier for the new version.</p> <note> <p>If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a <code>ClientRequestToken</code> yourself for the new version and include the value in the request.</p> </note> <p>This value becomes the <code>VersionId</code> of the new version.</p>",
        }),
    ).exactOptional(),
    Description: DescriptionTypeSchema.and(
      z.any().openapi({ description: 'The description of the secret.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt new secret versions as well as any existing versions with the staging labels <code>AWSCURRENT</code>, <code>AWSPENDING</code>, or <code>AWSPREVIOUS</code>. If you don\'t have <code>kms:Encrypt</code> permission to the new key, Secrets Manager does not re-ecrypt existing secret versions with the new key. For more information about versions and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version">Concepts: Version</a>.</p> <p>A key alias is always prefixed by <code>alias/</code>, for example <code>alias/aws/secretsmanager</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html">About aliases</a>.</p> <p>If you set this to an empty string, Secrets Manager uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If this key doesn\'t already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use <code>aws/secretsmanager</code>. Creating <code>aws/secretsmanager</code> can result in a one-time significant delay in returning the result. </p> <important> <p>You can only use the Amazon Web Services managed key <code>aws/secretsmanager</code> if you call this operation using credentials from the same Amazon Web Services account that owns the secret. If the secret is in a different account, then you must use a customer managed key and provide the ARN of that KMS key in this field. The user making the call must have permissions to both the secret and the KMS key in their respective accounts.</p> </important>',
        }),
    ).exactOptional(),
    SecretBinary: SecretBinaryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The binary data to encrypt and store in the new version of the secret. We recommend that you store your binary data in a file and then pass the contents of the file as a parameter. </p> <p>Either <code>SecretBinary</code> or <code>SecretString</code> must have a value, but not both.</p> <p>You can't access this parameter in the Secrets Manager console.</p>",
        }),
    ).exactOptional(),
    SecretString: SecretStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The text data to encrypt and store in the new version of the secret. We recommend you use a JSON structure of key/value pairs for your secret value. </p> <p>Either <code>SecretBinary</code> or <code>SecretString</code> must have a value, but not both. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SecretId'], title: 'UpdateSecretRequest' })
  .openapi('UpdateSecretRequest')

const UpdateSecretVersionStageResponseSchema = z
  .object({
    ARN: SecretARNTypeSchema.and(
      z.any().openapi({ description: 'The ARN of the secret that was updated.' }),
    ).exactOptional(),
    Name: SecretNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the secret that was updated.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ARN: 'arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3',
      Name: 'MyTestDatabaseSecret',
    },
    required: [],
  })
  .openapi('UpdateSecretVersionStageResponse')

const UpdateSecretVersionStageRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN or the name of the secret with the version and staging labelsto modify.</p> <p>For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot.html#ARN_secretnamehyphen">Finding a secret from a partial ARN</a>.</p>',
        }),
    ),
    VersionStage: SecretVersionStageTypeSchema.and(
      z.any().openapi({ description: 'The staging label to add to this version.' }),
    ),
    RemoveFromVersionId: SecretVersionIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the version that the staging label is to be removed from. If the staging label you are trying to attach to one version is already attached to a different version, then you must include this parameter and specify the version that the label is to be removed from. If the label is attached and you either do not specify this parameter, or the version ID does not match, then the operation fails.',
        }),
    ).exactOptional(),
    MoveToVersionId: SecretVersionIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the version to add the staging label to. To remove a label from a version, then do not specify this parameter.</p> <p>If the staging label is already attached to a different version of the secret, then you must also specify the <code>RemoveFromVersionId</code> parameter. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SecretId', 'VersionStage'], title: 'UpdateSecretVersionStageRequest' })
  .openapi('UpdateSecretVersionStageRequest')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const ValidationErrorsEntrySchema = z
  .object({
    CheckName: NameTypeSchema.and(
      z.any().openapi({ description: 'Checks the name of the policy.' }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays error messages if validation encounters problems during validation of the resource policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Displays errors that occurred during validation of the resource policy.',
    required: [],
  })
  .openapi('ValidationErrorsEntry')

const ValidationErrorsTypeSchema = z
  .array(ValidationErrorsEntrySchema)
  .openapi('ValidationErrorsType')

const ValidateResourcePolicyResponseSchema = z
  .object({
    PolicyValidationPassed: BooleanTypeSchema.and(
      z.any().openapi({ description: 'True if your policy passes validation, otherwise false.' }),
    ).exactOptional(),
    ValidationErrors: ValidationErrorsTypeSchema.and(
      z.any().openapi({ description: "Validation errors if your policy didn't pass validation." }),
    ).exactOptional(),
  })
  .openapi({ example: { PolicyValidationPassed: true, ValidationErrors: [] }, required: [] })
  .openapi('ValidateResourcePolicyResponse')

const ValidateResourcePolicyRequestSchema = z
  .object({
    SecretId: SecretIdTypeSchema.and(
      z.any().openapi({ description: 'This field is reserved for internal use.' }),
    ).exactOptional(),
    ResourcePolicy: NonEmptyResourcePolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON-formatted string that contains an Amazon Web Services resource-based policy. The policy in the string identifies who can access or manage this secret and its versions. For example policies, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html">Permissions policy examples</a>.',
        }),
    ),
  })
  .openapi({ required: ['ResourcePolicy'], title: 'ValidateResourcePolicyRequest' })
  .openapi('ValidateResourcePolicyRequest')

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

export const postXAmzTargetSecretsmanagerCancelRotateSecretRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.CancelRotateSecret',
  description:
    '<p>Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation.</p> <p>If you cancel a rotation in progress, it can leave the <code>VersionStage</code> labels in an unexpected state. You might need to remove the staging label <code>AWSPENDING</code> from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label <code>AWSCURRENT</code> to the version that has <code>AWSPENDING</code>. To determine which version has a specific staging label, call <a>ListSecretVersionIds</a>. Then use <a>UpdateSecretVersionStage</a> to change staging labels. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p> <p>To turn on automatic rotation again, call <a>RotateSecret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CancelRotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'CancelRotateSecret',
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
        .literal('secretsmanager.CancelRotateSecret')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.CancelRotateSecret'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelRotateSecretRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelRotateSecretResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerCreateSecretRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.CreateSecret',
  description:
    '<p>Creates a new secret. A <i>secret</i> can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service, which Secrets Manager doesn\'t encrypt. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret.</p> <p>For secrets that use <i>managed rotation</i>, you need to create the secret through the managing service. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>. </p> <p>For information about creating a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html">Create a secret</a>.</p> <p>To create a secret, you can provide the secret value to be encrypted in either the <code>SecretString</code> parameter or the <code>SecretBinary</code> parameter, but not both. If you include <code>SecretString</code> or <code>SecretBinary</code> then Secrets Manager creates an initial secret version and automatically attaches the staging label <code>AWSCURRENT</code> to it.</p> <p>For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the <code>SecretString</code> matches the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html">JSON structure of a database secret</a>.</p> <p>If you don\'t specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If this key doesn\'t already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use <code>aws/secretsmanager</code>. Creating <code>aws/secretsmanager</code> can result in a one-time significant delay in returning the result.</p> <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can\'t use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed KMS key. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CreateSecret</code>. If you include tags in the secret, you also need <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p> <p>To encrypt the secret with a KMS key other than <code>aws/secretsmanager</code>, you need <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permission to the key. </p>',
  operationId: 'CreateSecret',
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
        .literal('secretsmanager.CreateSecret')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.CreateSecret'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSecretRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSecretResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'EncryptionFailure',
      content: { 'application/json': { schema: EncryptionFailureSchema } },
    },
    484: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'MalformedPolicyDocumentException',
      content: { 'application/json': { schema: MalformedPolicyDocumentExceptionSchema } },
    },
    487: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    488: {
      description: 'PreconditionNotMetException',
      content: { 'application/json': { schema: PreconditionNotMetExceptionSchema } },
    },
    489: {
      description: 'DecryptionFailure',
      content: { 'application/json': { schema: DecryptionFailureSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerDeleteResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.DeleteResourcePolicy',
  description:
    '<p>Deletes the resource-based permission policy attached to the secret. To attach a policy to a secret, use <a>PutResourcePolicy</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'DeleteResourcePolicy',
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
        .literal('secretsmanager.DeleteResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.DeleteResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerDeleteSecretRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.DeleteSecret',
  description:
    '<p>Deletes a secret and all of its versions. You can specify a recovery window during which you can restore the secret. The minimum recovery window is 7 days. The default recovery window is 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently.</p> <p>You can\'t delete a primary secret that is replicated to other Regions. You must first delete the replicas using <a>RemoveRegionsFromReplication</a>, and then delete the primary secret. When you delete a replica, it is deleted immediately.</p> <p>You can\'t directly delete a version of a secret. Instead, you remove all staging labels from the version using <a>UpdateSecretVersionStage</a>. This marks the version as deprecated, and then Secrets Manager can automatically delete the version in the background.</p> <p>To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring_cloudwatch_deleted-secrets.html"> Monitor secrets scheduled for deletion</a>.</p> <p>Secrets Manager performs the permanent secret deletion at the end of the waiting period as a background task with low priority. There is no guarantee of a specific time after the recovery window for the permanent delete to occur.</p> <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p> <p>When a secret is scheduled for deletion, you cannot retrieve the secret value. You must first cancel the deletion with <a>RestoreSecret</a> and then you can retrieve the secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'DeleteSecret',
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
        .literal('secretsmanager.DeleteSecret')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.DeleteSecret'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSecretRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSecretResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerDescribeSecretRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.DescribeSecret',
  description:
    '<p>Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager only returns fields that have a value in the response. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DescribeSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'DescribeSecret',
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
        .literal('secretsmanager.DescribeSecret')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.DescribeSecret'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSecretRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSecretResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerGetRandomPasswordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.GetRandomPassword',
  description:
    '<p>Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetRandomPassword</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'GetRandomPassword',
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
        .literal('secretsmanager.GetRandomPassword')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.GetRandomPassword'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRandomPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRandomPasswordResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerGetResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.GetResourcePolicy',
  description:
    '<p>Retrieves the JSON text of the resource-based policy document attached to the secret. For more information about permissions policies attached to a secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html">Permissions policies attached to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'GetResourcePolicy',
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
        .literal('secretsmanager.GetResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.GetResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerGetSecretValueRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.GetSecretValue',
  description:
    '<p>Retrieves the contents of the encrypted fields <code>SecretString</code> or <code>SecretBinary</code> from the specified version of a secret, whichever contains content.</p> <p>We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html">Cache secrets for your applications</a>.</p> <p>To retrieve the previous version of a secret, use <code>VersionStage</code> and specify AWSPREVIOUS. To revert to the previous version of a secret, call <a href="https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/update-secret-version-stage.html">UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetSecretValue</code>. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key <code>aws/secretsmanager</code>, then you also need <code>kms:Decrypt</code> permissions for that key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'GetSecretValue',
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
        .literal('secretsmanager.GetSecretValue')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.GetSecretValue'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSecretValueRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSecretValueResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'DecryptionFailure',
      content: { 'application/json': { schema: DecryptionFailureSchema } },
    },
    484: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerListSecretVersionIdsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.ListSecretVersionIds',
  description:
    '<p>Lists the versions of a secret. Secrets Manager uses staging labels to indicate the different versions of a secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version"> Secrets Manager concepts: Versions</a>.</p> <p>To list the secrets in the account, use <a>ListSecrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecretVersionIds</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'ListSecretVersionIds',
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
        .literal('secretsmanager.ListSecretVersionIds')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.ListSecretVersionIds'] },
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
    body: {
      content: { 'application/json': { schema: ListSecretVersionIdsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSecretVersionIdsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerListSecretsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.ListSecrets',
  description:
    '<p>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console.</p> <p>ListSecrets is eventually consistent, however it might not reflect changes from the last five minutes. To get the latest information for a specific secret, use <a>DescribeSecret</a>.</p> <p>To list the versions of a secret, use <a>ListSecretVersionIds</a>.</p> <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>, call <a>GetSecretValue</a>.</p> <p>For information about finding secrets in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecrets</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'ListSecrets',
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
        .literal('secretsmanager.ListSecrets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.ListSecrets'] },
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
    body: { content: { 'application/json': { schema: ListSecretsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSecretsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerPutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.PutResourcePolicy',
  description:
    '<p>Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control for Secrets Manager</a> </p> <p>For information about attaching a policy in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Attach a permissions policy to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'PutResourcePolicy',
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
        .literal('secretsmanager.PutResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.PutResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyResponseSchema } },
    },
    480: {
      description: 'MalformedPolicyDocumentException',
      content: { 'application/json': { schema: MalformedPolicyDocumentExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'PublicPolicyException',
      content: { 'application/json': { schema: PublicPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerPutSecretValueRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.PutSecretValue',
  description:
    '<p>Creates a new version with a new encrypted secret value and attaches it to the secret. The version can contain a new <code>SecretString</code> value or a new <code>SecretBinary</code> value. </p> <p>We recommend you avoid calling <code>PutSecretValue</code> at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you call <code>PutSecretValue</code> more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>You can specify the staging labels to attach to the new version in <code>VersionStages</code>. If you don\'t include <code>VersionStages</code>, then Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to it. If this operation moves the staging label <code>AWSCURRENT</code> from another version to this version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>This operation is idempotent. If you call this operation with a <code>ClientRequestToken</code> that matches an existing version\'s VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can\'t modify an existing version; you can only create new ones.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutSecretValue</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'PutSecretValue',
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
        .literal('secretsmanager.PutSecretValue')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.PutSecretValue'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutSecretValueRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutSecretValueResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'EncryptionFailure',
      content: { 'application/json': { schema: EncryptionFailureSchema } },
    },
    484: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    487: {
      description: 'DecryptionFailure',
      content: { 'application/json': { schema: DecryptionFailureSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerRemoveRegionsFromReplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication',
  description:
    '<p>For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RemoveRegionsFromReplication</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'RemoveRegionsFromReplication',
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
        .literal('secretsmanager.RemoveRegionsFromReplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.RemoveRegionsFromReplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveRegionsFromReplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveRegionsFromReplicationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerReplicateSecretToRegionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.ReplicateSecretToRegions',
  description:
    '<p>Replicates the secret to a new Regions. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html">Multi-Region secrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ReplicateSecretToRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'ReplicateSecretToRegions',
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
        .literal('secretsmanager.ReplicateSecretToRegions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.ReplicateSecretToRegions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReplicateSecretToRegionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReplicateSecretToRegionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerRestoreSecretRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.RestoreSecret',
  description:
    '<p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time stamp. You can access a secret again after it has been restored.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RestoreSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'RestoreSecret',
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
        .literal('secretsmanager.RestoreSecret')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.RestoreSecret'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreSecretRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreSecretResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerRotateSecretRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.RotateSecret',
  description:
    '<p>Configures and starts the asynchronous process of rotating the secret. For information about rotation, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotate secrets</a> in the <i>Secrets Manager User Guide</i>. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don\'t include the configuration parameters, the operation starts a rotation with the values already stored in the secret. </p> <p>When rotation is successful, the <code>AWSPENDING</code> staging label might be attached to the same version as the <code>AWSCURRENT</code> version, or it might not be attached to any version. If the <code>AWSPENDING</code> staging label is present but not attached to the same version as <code>AWSCURRENT</code>, then any later invocation of <code>RotateSecret</code> assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the <code>AWSPENDING</code> staging label might be attached to an empty secret version. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot_rotation.html">Troubleshoot rotation</a> in the <i>Secrets Manager User Guide</i>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. You also need <code>lambda:InvokeFunction</code> permissions on the rotation function. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html"> Permissions for rotation</a>.</p>',
  operationId: 'RotateSecret',
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
        .literal('secretsmanager.RotateSecret')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.RotateSecret'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RotateSecretRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RotateSecretResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerStopReplicationToReplicaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.StopReplicationToReplica',
  description:
    '<p>Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region.</p> <p>You must call this operation from the Region in which you want to promote the replica to a primary secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:StopReplicationToReplica</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'StopReplicationToReplica',
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
        .literal('secretsmanager.StopReplicationToReplica')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.StopReplicationToReplica'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopReplicationToReplicaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopReplicationToReplicaResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.TagResource',
  description:
    '<p>Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the secret\'s metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per secret: 50</p> </li> <li> <p>Maximum key length: 127 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 255 Unicode characters in UTF-8</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use the <code>aws:</code> prefix in your tag names or values because Amazon Web Services reserves it for Amazon Web Services use. You can\'t edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.</p> </li> <li> <p>If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.</p> </li> </ul> <important> <p>If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
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
        .literal('secretsmanager.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.UntagResource',
  description:
    '<p>Removes specific tags from a secret.</p> <p>This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged.</p> <important> <p>If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UntagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
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
        .literal('secretsmanager.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerUpdateSecretRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.UpdateSecret',
  description:
    '<p>Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use <a>PutSecretValue</a>.</p> <p>To change the rotation configuration of a secret, use <a>RotateSecret</a> instead.</p> <p>To change a secret so that it is managed by another service, you need to recreate the secret in that service. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>.</p> <p>We recommend you avoid calling <code>UpdateSecret</code> at a sustained rate of more than once every 10 minutes. When you call <code>UpdateSecret</code> to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new secret version, Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to the new version. Then it attaches the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>If you call this operation with a <code>ClientRequestToken</code> that matches an existing version\'s <code>VersionId</code>, the operation results in an error. You can\'t modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See <a>UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. If you use a customer managed key, you must also have <code>kms:GenerateDataKey</code>, <code>kms:Encrypt</code>, and <code>kms:Decrypt</code> permissions on the key. If you change the KMS key and you don\'t have <code>kms:Encrypt</code> permission to the new key, Secrets Manager does not re-ecrypt existing secret versions with the new key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html"> Secret encryption and decryption</a>.</p>',
  operationId: 'UpdateSecret',
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
        .literal('secretsmanager.UpdateSecret')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.UpdateSecret'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSecretRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSecretResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'EncryptionFailure',
      content: { 'application/json': { schema: EncryptionFailureSchema } },
    },
    484: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'MalformedPolicyDocumentException',
      content: { 'application/json': { schema: MalformedPolicyDocumentExceptionSchema } },
    },
    487: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    488: {
      description: 'PreconditionNotMetException',
      content: { 'application/json': { schema: PreconditionNotMetExceptionSchema } },
    },
    489: {
      description: 'DecryptionFailure',
      content: { 'application/json': { schema: DecryptionFailureSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerUpdateSecretVersionStageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.UpdateSecretVersionStage',
  description:
    '<p>Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process. Each staging label can be attached to only one version at a time. To add a staging label to a version when it is already attached to another version, Secrets Manager first removes it from the other version first and then attaches it to this one. For more information about versions and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version">Concepts: Version</a>. </p> <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added to the existing list of staging labels for the version. </p> <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this call.</p> <note> <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> </note> <p>If this action results in the last label being removed from a version, then the version is considered to be \'deprecated\' and can be deleted by Secrets Manager.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecretVersionStage</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'UpdateSecretVersionStage',
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
        .literal('secretsmanager.UpdateSecretVersionStage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.UpdateSecretVersionStage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSecretVersionStageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSecretVersionStageResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
  },
})

export const postXAmzTargetSecretsmanagerValidateResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=secretsmanager.ValidateResourcePolicy',
  description:
    '<p>Validates that a resource policy does not grant a wide range of principals access to your secret. A resource-based policy is optional for secrets.</p> <p>The API performs three checks when validating the policy:</p> <ul> <li> <p>Sends a call to <a href="https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/">Zelkova</a>, an automated reasoning engine, to ensure your resource policy does not allow broad access to your secret, for example policies that use a wildcard for the principal.</p> </li> <li> <p>Checks for correct syntax in a policy.</p> </li> <li> <p>Verifies the policy does not lock out a caller.</p> </li> </ul> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ValidateResourcePolicy</code> and <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>',
  operationId: 'ValidateResourcePolicy',
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
        .literal('secretsmanager.ValidateResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['secretsmanager.ValidateResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ValidateResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ValidateResourcePolicyResponseSchema } },
    },
    480: {
      description: 'MalformedPolicyDocumentException',
      content: { 'application/json': { schema: MalformedPolicyDocumentExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})
