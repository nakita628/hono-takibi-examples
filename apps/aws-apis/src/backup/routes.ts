import { createRoute, z } from '@hono/zod-openapi'

const CancelLegalHoldOutputSchema = z.object({}).openapi('CancelLegalHoldOutput')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const InvalidResourceStateExceptionSchema = z.any().openapi('InvalidResourceStateException')

const MissingParameterValueExceptionSchema = z.any().openapi('MissingParameterValueException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const StringSchema = z.string().openapi('String')

const ARNSchema = z.string().openapi('ARN')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ResourceTypeSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
  .openapi('ResourceType')

const BackupOptionValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
  .openapi('BackupOptionValue')

const BackupOptionsSchema = z.record(z.string(), BackupOptionValueSchema).openapi('BackupOptions')

const AdvancedBackupSettingSchema = z
  .object({
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies an object containing resource type and backup options. The only supported resource type is Amazon EC2 instances with Windows Volume Shadow Copy Service (VSS). For a CloudFormation example, see the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/integrate-cloudformation-with-aws-backup.html">sample CloudFormation template to enable Windows VSS</a> in the <i>Backup User Guide</i>.</p> <p>Valid values: <code>EC2</code>.</p>',
        }),
    ).exactOptional(),
    BackupOptions: BackupOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the backup option for a selected resource. This option is only available for Windows VSS backup jobs.</p> <p>Valid values: </p> <p>Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup option and create a Windows VSS backup. </p> <p>Set to <code>"WindowsVSS":"disabled"</code> to create a regular backup. The <code>WindowsVSS</code> option is not enabled by default.</p> <p>If you specify an invalid option, you get an <code>InvalidParameterValueException</code> exception.</p> <p>For more information about Windows VSS backups, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/windows-backups.html">Creating a VSS-Enabled Windows Backup</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A list of backup options for each resource type.', required: [] })
  .openapi('AdvancedBackupSetting')

const AdvancedBackupSettingsSchema = z
  .array(AdvancedBackupSettingSchema)
  .openapi('AdvancedBackupSettings')

const CreateBackupPlanOutputSchema = z
  .object({
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    BackupPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    VersionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. They cannot be edited.',
        }),
    ).exactOptional(),
    AdvancedBackupSettings: AdvancedBackupSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>BackupOptions</code> settings for a resource type. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBackupPlanOutput')

const BackupPlanNameSchema = z.string().openapi('BackupPlanName')

const BackupRuleNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
  .openapi('BackupRuleName')

const BackupVaultNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
  .openapi('BackupVaultName')

const CronExpressionSchema = z.string().openapi('CronExpression')

const WindowMinutesSchema = z.int().openapi('WindowMinutes')

const LongSchema = z.int().openapi('Long')

const LifecycleSchema = z
  .object({
    MoveToColdStorageAfterDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days after creation that a recovery point is moved to cold storage.',
        }),
    ).exactOptional(),
    DeleteAfterDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
    required: [],
  })
  .openapi('Lifecycle')

const TagValueSchema = z.string().openapi('TagValue')

const TagsSchema = z.record(z.string(), TagValueSchema).openapi('Tags')

const CopyActionSchema = z
  .object({
    Lifecycle: LifecycleSchema.exactOptional(),
    DestinationBackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup. For example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ),
  })
  .openapi({
    required: ['DestinationBackupVaultArn'],
    description: 'The details of the copy operation.',
  })
  .openapi('CopyAction')

const CopyActionsSchema = z.array(CopyActionSchema).openapi('CopyActions')

const Boolean2Schema = z.boolean().openapi('Boolean2')

const BackupRuleInputSchema = z
  .object({
    RuleName: BackupRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.' characters.",
        }),
    ),
    TargetBackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ),
    ScheduleExpression: CronExpressionSchema.and(
      z
        .any()
        .openapi({
          description: 'A CRON expression in UTC specifying when Backup initiates a backup job.',
        }),
    ).exactOptional(),
    StartWindowMinutes: WindowMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, it must be at least 60 minutes to avoid errors.",
        }),
    ).exactOptional(),
    CompletionWindowMinutes: WindowMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by Backup. This value is optional.',
        }),
    ).exactOptional(),
    Lifecycle: LifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup will transition and expire backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
        }),
    ).exactOptional(),
    RecoveryPointTags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.',
        }),
    ).exactOptional(),
    CopyActions: CopyActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>CopyAction</code> objects, which contains the details of the copy operation.',
        }),
    ).exactOptional(),
    EnableContinuousBackup: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False (or not specified) causes Backup to create snapshot backups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RuleName', 'TargetBackupVaultName'],
    description: 'Specifies a scheduled task used to back up a selection of resources.',
  })
  .openapi('BackupRuleInput')

const BackupRulesInputSchema = z.array(BackupRuleInputSchema).openapi('BackupRulesInput')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const AlreadyExistsExceptionSchema = z.any().openapi('AlreadyExistsException')

const CreateBackupSelectionOutputSchema = z
  .object({
    SelectionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Uniquely identifies the body of a request to assign a set of resources to a backup plan.',
        }),
    ).exactOptional(),
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup selection is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBackupSelectionOutput')

const BackupSelectionNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
  .openapi('BackupSelectionName')

const IAMRoleArnSchema = z.string().openapi('IAMRoleArn')

const ResourceArnsSchema = z.array(ARNSchema).openapi('ResourceArns')

const ConditionTypeSchema = z.literal('STRINGEQUALS').openapi('ConditionType')

const ConditionKeySchema = z.string().openapi('ConditionKey')

const ConditionValueSchema = z.string().openapi('ConditionValue')

const ConditionSchema = z
  .object({
    ConditionType: ConditionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An operation applied to a key-value pair used to assign resources to your backup plan. Condition only supports <code>StringEquals</code>. For more flexible assignment options, including <code>StringLike</code> and the ability to exclude resources from your backup plan, use <code>Conditions</code> (with an "s" on the end) for your <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BackupSelection.html"> <code>BackupSelection</code> </a>.',
        }),
    ),
    ConditionKey: ConditionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key in a key-value pair. For example, in the tag <code>Department: Accounting</code>, <code>Department</code> is the key.',
        }),
    ),
    ConditionValue: ConditionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value in a key-value pair. For example, in the tag <code>Department: Accounting</code>, <code>Accounting</code> is the value.',
        }),
    ),
  })
  .openapi({
    required: ['ConditionType', 'ConditionKey', 'ConditionValue'],
    description:
      'Contains an array of triplets made up of a condition type (such as <code>StringEquals</code>), a key, and a value. Used to filter resources using their tags and assign them to a backup plan. Case sensitive.',
  })
  .openapi('Condition')

const ListOfTagsSchema = z.array(ConditionSchema).openapi('ListOfTags')

const ConditionParameterSchema = z
  .object({
    ConditionKey: ConditionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key in a key-value pair. For example, in the tag <code>Department: Accounting</code>, <code>Department</code> is the key.',
        }),
    ).exactOptional(),
    ConditionValue: ConditionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value in a key-value pair. For example, in the tag <code>Department: Accounting</code>, <code>Accounting</code> is the value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Includes information about tags you define to assign tagged resources to a backup plan.',
    required: [],
  })
  .openapi('ConditionParameter')

const ConditionParametersSchema = z.array(ConditionParameterSchema).openapi('ConditionParameters')

const ConditionsSchema = z
  .object({
    StringEquals: ConditionParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the values of your tagged resources for only those resources that you tagged with the same value. Also called "exact matching."',
        }),
    ).exactOptional(),
    StringNotEquals: ConditionParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the values of your tagged resources for only those resources that you tagged that do not have the same value. Also called "negated matching."',
        }),
    ).exactOptional(),
    StringLike: ConditionParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the values of your tagged resources for matching tag values with the use of a wildcard character (*) anywhere in the string. For example, "prod*" or "*rod*" matches the tag value "production".',
        }),
    ).exactOptional(),
    StringNotLike: ConditionParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the values of your tagged resources for non-matching tag values with the use of a wildcard character (*) anywhere in the string.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about which resources to include or exclude from a backup plan using their tags. Conditions are case sensitive.',
    required: [],
  })
  .openapi('Conditions')

const CreateBackupVaultOutputSchema = z
  .object({
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBackupVaultOutput')

const FrameworkNameSchema = z
  .string()
  .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
  .min(1)
  .max(256)
  .openapi('FrameworkName')

const CreateFrameworkOutputSchema = z
  .object({
    FrameworkName: FrameworkNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
        }),
    ).exactOptional(),
    FrameworkArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFrameworkOutput')

const ControlNameSchema = z.string().openapi('ControlName')

const ParameterNameSchema = z.string().openapi('ParameterName')

const ParameterValueSchema = z.string().openapi('ParameterValue')

const ControlInputParameterSchema = z
  .object({
    ParameterName: ParameterNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a parameter, for example, <code>BackupPlanFrequency</code>.',
        }),
    ).exactOptional(),
    ParameterValue: ParameterValueSchema.and(
      z.any().openapi({ description: 'The value of parameter, for example, <code>hourly</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of parameters for a control. A control can have zero, one, or more than one parameter. An example of a control with two parameters is: "backup plan frequency is at least <code>daily</code> and the retention period is at least <code>1 year</code>". The first parameter is <code>daily</code>. The second parameter is <code>1 year</code>.',
    required: [],
  })
  .openapi('ControlInputParameter')

const ControlInputParametersSchema = z
  .array(ControlInputParameterSchema)
  .openapi('ControlInputParameters')

const ComplianceResourceIdListSchema = z
  .array(StringSchema)
  .min(1)
  .max(100)
  .openapi('ComplianceResourceIdList')

const ResourceTypeListSchema = z.array(ARNSchema).openapi('ResourceTypeList')

const StringMapSchema = z.record(z.string(), StringSchema).openapi('StringMap')

const ControlScopeSchema = z
  .object({
    ComplianceResourceIds: ComplianceResourceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the only Amazon Web Services resource that you want your control scope to contain.',
        }),
    ).exactOptional(),
    ComplianceResourceTypes: ResourceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether the control scope includes one or more types of resources, such as <code>EFS</code> or <code>RDS</code>.',
        }),
    ).exactOptional(),
    Tags: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag key-value pair applied to those Amazon Web Services resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided. The tag value is optional, but it cannot be an empty string. The structure to assign a tag is: <code>[{"Key":"string","Value":"string"}]</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A framework consists of one or more controls. Each control has its own control scope. The control scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. If no scope is specified, evaluations for the rule are triggered when any resource in your recording group changes in configuration.</p> <note> <p>To set a control scope that includes all of a particular resource, leave the <code>ControlScope</code> empty or do not pass it when calling <code>CreateFramework</code>.</p> </note>',
    required: [],
  })
  .openapi('ControlScope')

const FrameworkControlSchema = z
  .object({
    ControlName: ControlNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a control. This name is between 1 and 256 characters.',
        }),
    ),
    ControlInputParameters: ControlInputParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ParameterName</code> and <code>ParameterValue</code> pairs.',
        }),
    ).exactOptional(),
    ControlScope: ControlScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans. For more information, see <a href="aws-backup/latest/devguide/API_ControlScope.html"> <code>ControlScope</code>.</a> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ControlName'],
    description:
      'Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.',
  })
  .openapi('FrameworkControl')

const LegalHoldStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'CANCELING', 'CANCELED'])
  .openapi('LegalHoldStatus')

const VaultNamesSchema = z.array(StringSchema).openapi('VaultNames')

const ResourceIdentifiersSchema = z.array(StringSchema).openapi('ResourceIdentifiers')

const DateRangeSchema = z
  .object({
    FromDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This value is the beginning date, inclusive.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds (milliseconds are optional).</p>',
        }),
    ),
    ToDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This value is the end date, inclusive.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds (milliseconds are optional).</p>',
        }),
    ),
  })
  .openapi({
    required: ['FromDate', 'ToDate'],
    description:
      '<p>This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>',
  })
  .openapi('DateRange')

const RecoveryPointSelectionSchema = z
  .object({
    VaultNames: VaultNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'These are the names of the vaults in which the selected recovery points are contained.',
        }),
    ).exactOptional(),
    ResourceIdentifiers: ResourceIdentifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            'These are the resources included in the resource selection (including type of resources and vaults).',
        }),
    ).exactOptional(),
    DateRange: DateRangeSchema.exactOptional(),
  })
  .openapi({
    description:
      'This specifies criteria to assign a set of resources, such as resource types or backup vaults.',
    required: [],
  })
  .openapi('RecoveryPointSelection')

const CreateLegalHoldOutputSchema = z
  .object({
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the string title of the legal hold returned after creating the legal hold.',
        }),
    ).exactOptional(),
    Status: LegalHoldStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'This displays the status of the legal hold returned after creating the legal hold. Statuses can be <code>ACTIVE</code>, <code>PENDING</code>, <code>CANCELED</code>, <code>CANCELING</code>, or <code>FAILED</code>.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({ description: 'This is the returned string description of the legal hold.' }),
    ).exactOptional(),
    LegalHoldId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Legal hold ID returned for the specified legal hold on a recovery point.',
        }),
    ).exactOptional(),
    LegalHoldArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description: 'This is the ARN (Amazon Resource Number) of the created legal hold.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'Time in number format when legal hold was created.' }),
    ).exactOptional(),
    RecoveryPointSelection: RecoveryPointSelectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'This specifies criteria to assign a set of resources, such as resource types or backup vaults.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLegalHoldOutput')

const ReportPlanNameSchema = z
  .string()
  .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
  .min(1)
  .max(256)
  .openapi('ReportPlanName')

const CreateReportPlanOutputSchema = z
  .object({
    ReportPlanName: ReportPlanNameSchema.and(
      z.any().openapi({ description: 'The unique name of the report plan.' }),
    ).exactOptional(),
    ReportPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateReportPlanOutput')

const FormatListSchema = z.array(StringSchema).openapi('FormatList')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const IntegerSchema = z.int().openapi('Integer')

const DeleteBackupPlanOutputSchema = z
  .object({
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    BackupPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.',
        }),
    ).exactOptional(),
    DeletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    VersionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBackupPlanOutput')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const AccountIdSchema = z
  .string()
  .regex(/^[0-9]{12}$/)
  .openapi('AccountId')

const BackupJobStateSchema = z
  .enum([
    'CREATED',
    'PENDING',
    'RUNNING',
    'ABORTING',
    'ABORTED',
    'COMPLETED',
    'FAILED',
    'EXPIRED',
    'PARTIAL',
  ])
  .openapi('BackupJobState')

const RecoveryPointCreatorSchema = z
  .object({
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    BackupPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.',
        }),
    ).exactOptional(),
    BackupPlanVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version IDs are unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. They cannot be edited.',
        }),
    ).exactOptional(),
    BackupRuleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Uniquely identifies a rule used to schedule the backup of a selection of resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.',
    required: [],
  })
  .openapi('RecoveryPointCreator')

const BooleanSchema = z.boolean().openapi('Boolean')

const BackupJobChildJobsInStateSchema = z
  .record(z.string(), LongSchema)
  .openapi('BackupJobChildJobsInState')

const DescribeBackupJobOutputSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'Returns the account ID that owns the backup job.' }),
    ).exactOptional(),
    BackupJobId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Uniquely identifies a request to Backup to back up a resource.' }),
    ).exactOptional(),
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    State: BackupJobStateSchema.and(
      z.any().openapi({ description: 'The current state of a resource recovery point.' }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A detailed message explaining the status of the job to back up a resource.',
        }),
    ).exactOptional(),
    PercentDone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains an estimated percentage that is complete of a job at the time the job status was queried.',
        }),
    ).exactOptional(),
    BackupSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of a backup.' }),
    ).exactOptional(),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ).exactOptional(),
    CreatedBy: RecoveryPointCreatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains identifying information about the creation of a backup job, including the <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code> of the backup plan that is used to create it.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.',
        }),
    ).exactOptional(),
    BytesTransferred: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size in bytes transferred to a backup vault at the time that the job status was queried.',
        }),
    ).exactOptional(),
    ExpectedCompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>ExpectedCompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    StartBy: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    BackupOptions: BackupOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the options specified as part of backup plan or on-demand backup job.',
        }),
    ).exactOptional(),
    BackupType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the actual backup type selected for a backup job. For example, if a successful Windows Volume Shadow Copy Service (VSS) backup was taken, <code>BackupType</code> returns <code>"WindowsVSS"</code>. If <code>BackupType</code> is empty, then the backup type was a regular backup.',
        }),
    ).exactOptional(),
    ParentJobId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'This returns the parent (composite) resource backup job ID.' }),
    ).exactOptional(),
    IsParent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This returns the boolean value that a backup job is a parent (composite) job.',
        }),
    ).exactOptional(),
    NumberOfChildJobs: LongSchema.and(
      z.any().openapi({ description: 'This returns the number of child (nested) backup jobs.' }),
    ).exactOptional(),
    ChildJobsInState: BackupJobChildJobsInStateSchema.and(
      z
        .any()
        .openapi({
          description: 'This returns the statistics of the included child (nested) backup jobs.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the non-unique name of the resource that belongs to the specified backup.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBackupJobOutput')

const DependencyFailureExceptionSchema = z.any().openapi('DependencyFailureException')

const Long2Schema = z.int().openapi('Long2')

const DescribeBackupVaultOutputSchema = z
  .object({
    BackupVaultName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    EncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.',
        }),
    ).exactOptional(),
    NumberOfRecoveryPoints: Long2Schema.and(
      z
        .any()
        .openapi({
          description: 'The number of recovery points that are stored in a backup vault.',
        }),
    ).exactOptional(),
    Locked: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean that indicates whether Backup Vault Lock is currently protecting the backup vault. <code>True</code> means that Vault Lock causes delete or update operations on the recovery points stored in the vault to fail.',
        }),
    ).exactOptional(),
    MinRetentionDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Backup Vault Lock setting that specifies the minimum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a minimum retention period.</p> <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.</p>",
        }),
    ).exactOptional(),
    MaxRetentionDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Backup Vault Lock setting that specifies the maximum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a maximum retention period on the recovery points in the vault (allowing indefinite storage).</p> <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.</p>",
        }),
    ).exactOptional(),
    LockDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time when Backup Vault Lock configuration cannot be changed or deleted.</p> <p>If you applied Vault Lock to your vault without specifying a lock date, you can change any of your Vault Lock settings, or delete Vault Lock from the vault entirely, at any time.</p> <p>This value is in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBackupVaultOutput')

const CopyJobStateSchema = z
  .enum(['CREATED', 'RUNNING', 'COMPLETED', 'FAILED', 'PARTIAL'])
  .openapi('CopyJobState')

const CopyJobChildJobsInStateSchema = z
  .record(z.string(), LongSchema)
  .openapi('CopyJobChildJobsInState')

const CopyJobSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The account ID that owns the copy job.' }),
    ).exactOptional(),
    CopyJobId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a copy job.' }),
    ).exactOptional(),
    SourceBackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>. ',
        }),
    ).exactOptional(),
    SourceRecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a source recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    DestinationBackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    DestinationRecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a destination recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a copy job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a copy job is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    State: CopyJobStateSchema.and(
      z.any().openapi({ description: 'The current state of a copy job.' }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A detailed message explaining the status of the job to copy a resource.',
        }),
    ).exactOptional(),
    BackupSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of a copy job.' }),
    ).exactOptional(),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to copy the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ).exactOptional(),
    CreatedBy: RecoveryPointCreatorSchema.exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.',
        }),
    ).exactOptional(),
    ParentJobId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This uniquely identifies a request to Backup to copy a resource. The return will be the parent (composite) job ID.',
        }),
    ).exactOptional(),
    IsParent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'This is a boolean value indicating this is a parent (composite) copy job.',
        }),
    ).exactOptional(),
    CompositeMemberIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax"> logical ID</a> within a stack.',
        }),
    ).exactOptional(),
    NumberOfChildJobs: LongSchema.and(
      z.any().openapi({ description: 'This is the number of child (nested) copy jobs.' }),
    ).exactOptional(),
    ChildJobsInState: CopyJobChildJobsInStateSchema.and(
      z
        .any()
        .openapi({
          description: 'This returns the statistics of the included child (nested) copy jobs.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the non-unique name of the resource that belongs to the specified backup.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains detailed information about a copy job.', required: [] })
  .openapi('CopyJob')

const DescribeCopyJobOutputSchema = z
  .object({
    CopyJob: CopyJobSchema.and(
      z.any().openapi({ description: 'Contains detailed information about a copy job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCopyJobOutput')

const FrameworkDescriptionSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(0)
  .max(1024)
  .openapi('FrameworkDescription')

const FrameworkControlsSchema = z.array(FrameworkControlSchema).openapi('FrameworkControls')

const DescribeFrameworkOutputSchema = z
  .object({
    FrameworkName: FrameworkNameSchema.and(
      z.any().openapi({ description: 'The unique name of a framework.' }),
    ).exactOptional(),
    FrameworkArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    FrameworkDescription: FrameworkDescriptionSchema.and(
      z.any().openapi({ description: 'An optional description of the framework.' }),
    ).exactOptional(),
    FrameworkControls: FrameworkControlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.',
        }),
    ).exactOptional(),
    DeploymentStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The deployment status of a framework. The statuses are:</p> <p> <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED</code> </p>',
        }),
    ).exactOptional(),
    FrameworkStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn Config recording on or off for each resource. The statuses are:</p> <ul> <li> <p> <code>ACTIVE</code> when recording is turned on for all resources governed by the framework.</p> </li> <li> <p> <code>PARTIALLY_ACTIVE</code> when recording is turned off for at least one resource governed by the framework.</p> </li> <li> <p> <code>INACTIVE</code> when recording is turned off for all resources governed by the framework.</p> </li> <li> <p> <code>UNAVAILABLE</code> when Backup is unable to validate recording status at this time.</p> </li> </ul>',
        }),
    ).exactOptional(),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>DescribeFrameworkOutput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFrameworkOutput')

const GlobalSettingsValueSchema = z.string().openapi('GlobalSettingsValue')

const GlobalSettingsSchema = z
  .record(z.string(), GlobalSettingsValueSchema)
  .openapi('GlobalSettings')

const DescribeGlobalSettingsOutputSchema = z
  .object({
    GlobalSettings: GlobalSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the flag <code>isCrossAccountBackupEnabled</code>.',
        }),
    ).exactOptional(),
    LastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the flag <code>isCrossAccountBackupEnabled</code> was last updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of <code>LastUpdateTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGlobalSettingsOutput')

const DescribeProtectedResourceOutputSchema = z
  .object({
    ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Amazon Web Services resource saved as a recovery point; for example, an Amazon EBS volume or an Amazon RDS database.',
        }),
    ).exactOptional(),
    LastBackupTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the non-unique name of the resource that belongs to the specified backup.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProtectedResourceOutput')

const RecoveryPointStatusSchema = z
  .enum(['COMPLETED', 'PARTIAL', 'DELETING', 'EXPIRED'])
  .openapi('RecoveryPointStatus')

const CalculatedLifecycleSchema = z
  .object({
    MoveToColdStorageAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp that specifies when to transition a recovery point to cold storage.',
        }),
    ).exactOptional(),
    DeleteAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp that specifies when to delete a recovery point.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
    required: [],
  })
  .openapi('CalculatedLifecycle')

const StorageClassSchema = z.enum(['WARM', 'COLD', 'DELETED']).openapi('StorageClass')

const DescribeRecoveryPointOutputSchema = z
  .object({
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    SourceBackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies the source vault where the resource was originally backed up in; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:BackupVault</code>. If the recovery is restored to the same Amazon Web Services account or Region, this value will be <code>null</code>.',
        }),
    ).exactOptional(),
    ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Amazon Web Services resource to save as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.',
        }),
    ).exactOptional(),
    CreatedBy: RecoveryPointCreatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains identifying information about the creation of a recovery point, including the <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code> of the backup plan used to create it.',
        }),
    ).exactOptional(),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ).exactOptional(),
    Status: RecoveryPointStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A status code specifying the state of the recovery point.</p> <p> <code>PARTIAL</code> status indicates Backup could not create the recovery point before the backup window closed. To increase your backup plan window using the API, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateBackupPlan.html">UpdateBackupPlan</a>. You can also increase your backup plan window using the Console by choosing and editing your backup plan.</p> <p> <code>EXPIRED</code> status indicates that the recovery point has exceeded its retention period, but Backup lacks permission or is otherwise unable to delete it. To manually delete these recovery points, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/gs-cleanup-resources.html#cleanup-backups"> Step 3: Delete the recovery points</a> in the <i>Clean up resources</i> section of <i>Getting started</i>.</p> <p> <code>STOPPED</code> status occurs on a continuous backup where a user has taken some action that causes the continuous backup to be disabled. This can be caused by the removal of permissions, turning off versioning, turning off events being sent to EventBridge, or disabling the EventBridge rules that are put in place by Backup.</p> <p>To resolve <code>STOPPED</code> status, ensure that all requested permissions are in place and that versioning is enabled on the S3 bucket. Once these conditions are met, the next instance of a backup rule running will result in a new continuous recovery point being created. The recovery points with STOPPED status do not need to be deleted.</p>',
        }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A status message explaining the reason for the recovery point deletion failure.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a job to create a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    BackupSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of a backup.' }),
    ).exactOptional(),
    CalculatedLifecycle: CalculatedLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps.',
        }),
    ).exactOptional(),
    Lifecycle: LifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups that are transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
        }),
    ).exactOptional(),
    EncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The server-side encryption key used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.',
        }),
    ).exactOptional(),
    IsEncrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is encrypted, or <code>FALSE</code> if the recovery point is not encrypted.',
        }),
    ).exactOptional(),
    StorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the storage class of the recovery point. Valid values are <code>WARM</code> or <code>COLD</code>.',
        }),
    ).exactOptional(),
    LastRestoreTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    ParentRecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is an ARN that uniquely identifies a parent (composite) recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    CompositeMemberIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax"> logical ID</a> within a stack.',
        }),
    ).exactOptional(),
    IsParent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This returns the boolean value that a recovery point is a parent (composite) job.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the non-unique name of the resource that belongs to the specified backup.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRecoveryPointOutput')

const IsEnabledSchema = z.boolean().openapi('IsEnabled')

const ResourceTypeOptInPreferenceSchema = z
  .record(z.string(), IsEnabledSchema)
  .openapi('ResourceTypeOptInPreference')

const ResourceTypeManagementPreferenceSchema = z
  .record(z.string(), IsEnabledSchema)
  .openapi('ResourceTypeManagementPreference')

const DescribeRegionSettingsOutputSchema = z
  .object({
    ResourceTypeOptInPreference: ResourceTypeOptInPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of all services along with the opt-in preferences in the Region.',
        }),
    ).exactOptional(),
    ResourceTypeManagementPreference: ResourceTypeManagementPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Returns whether Backup fully manages the backups for a resource type.</p> <p>For the benefits of full Backup management, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#full-management"> Full Backup management</a>.</p> <p>For a list of resource types and whether each supports full Backup management, see the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table.</p> <p>If <code>"DynamoDB":false</code>, you can enable full Backup management for DynamoDB backup by enabling <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> Backup\'s advanced DynamoDB backup features</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRegionSettingsOutput')

const ReportJobIdSchema = z.string().openapi('ReportJobId')

const ReportDestinationSchema = z
  .object({
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique name of the Amazon S3 bucket that receives your reports.',
        }),
    ).exactOptional(),
    S3Keys: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'The object key that uniquely identifies your reports in your S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information from your report job about your report destination.',
    required: [],
  })
  .openapi('ReportDestination')

const ReportJobSchema = z
  .object({
    ReportJobId: ReportJobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for a report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. Report job IDs cannot be edited.',
        }),
    ).exactOptional(),
    ReportPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    ReportTemplate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the report template for the report. Reports are built using a report template. The report templates are: </p> <p> <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code> </p>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a report job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CompletionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a report job is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of a report job. The statuses are:</p> <p> <code>CREATED | RUNNING | COMPLETED | FAILED</code> </p> <p> <code>COMPLETED</code> means that the report is available for your review at your designated destination. If the status is <code>FAILED</code>, review the <code>StatusMessage</code> for the reason.</p>',
        }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z.any().openapi({ description: 'A message explaining the status of the report job.' }),
    ).exactOptional(),
    ReportDestination: ReportDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket name and S3 keys for the destination where the report job publishes the report.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains detailed information about a report job. A report job compiles a report based on a report plan and publishes it to Amazon S3.',
    required: [],
  })
  .openapi('ReportJob')

const DescribeReportJobOutputSchema = z
  .object({
    ReportJob: ReportJobSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of information about a report job, including its completion and creation times, report destination, unique report job ID, Amazon Resource Name (ARN), report template, status, and status message.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReportJobOutput')

const ReportPlanDescriptionSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(0)
  .max(1024)
  .openapi('ReportPlanDescription')

const ReportSettingSchema = z
  .object({
    ReportTemplate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the report template for the report. Reports are built using a report template. The report templates are:</p> <p> <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code> </p>',
        }),
    ),
    FrameworkArns: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Names (ARNs) of the frameworks a report covers.',
        }),
    ).exactOptional(),
    NumberOfFrameworks: IntegerSchema.and(
      z.any().openapi({ description: 'The number of frameworks a report covers.' }),
    ).exactOptional(),
    Accounts: StringListSchema.and(
      z.any().openapi({ description: 'These are the accounts to be included in the report.' }),
    ).exactOptional(),
    OrganizationUnits: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'These are the Organizational Units to be included in the report.',
        }),
    ).exactOptional(),
    Regions: StringListSchema.and(
      z.any().openapi({ description: 'These are the Regions to be included in the report.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReportTemplate'],
    description: 'Contains detailed information about a report setting.',
  })
  .openapi('ReportSetting')

const ReportDeliveryChannelSchema = z
  .object({
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique name of the S3 bucket that receives your reports.' }),
    ),
    S3KeyPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/<code>prefix</code>/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.',
        }),
    ).exactOptional(),
    Formats: FormatListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the format of your reports: <code>CSV</code>, <code>JSON</code>, or both. If not specified, the default format is <code>CSV</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3BucketName'],
    description:
      'Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.',
  })
  .openapi('ReportDeliveryChannel')

const ReportPlanSchema = z
  .object({
    ReportPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    ReportPlanName: ReportPlanNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the report plan. This name is between 1 and 256 characters starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
        }),
    ).exactOptional(),
    ReportPlanDescription: ReportPlanDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional description of the report plan with a maximum 1,024 characters.',
        }),
    ).exactOptional(),
    ReportSetting: ReportSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the report template for the report. Reports are built using a report template. The report templates are:</p> <p> <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code> </p> <p>If the report template is <code>RESOURCE_COMPLIANCE_REPORT</code> or <code>CONTROL_COMPLIANCE_REPORT</code>, this API resource also describes the report coverage by Amazon Web Services Regions and frameworks.</p>',
        }),
    ).exactOptional(),
    ReportDeliveryChannel: ReportDeliveryChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.',
        }),
    ).exactOptional(),
    DeploymentStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The deployment status of a report plan. The statuses are:</p> <p> <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED</code> </p>',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a report plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    LastAttemptedExecutionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a report job associated with this report plan last attempted to run, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastAttemptedExecutionTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    LastSuccessfulExecutionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a report job associated with this report plan last successfully ran, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastSuccessfulExecutionTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains detailed information about a report plan.', required: [] })
  .openapi('ReportPlan')

const DescribeReportPlanOutputSchema = z
  .object({
    ReportPlan: ReportPlanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Returns details about the report plan that is specified by its name. These details include the report plan's Amazon Resource Name (ARN), description, settings, delivery channel, deployment status, creation time, and last attempted and successful run times.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReportPlanOutput')

const RestoreJobStatusSchema = z
  .enum(['PENDING', 'RUNNING', 'COMPLETED', 'ABORTED', 'FAILED'])
  .openapi('RestoreJobStatus')

const DescribeRestoreJobOutputSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'Returns the account ID that owns the restore job.' }),
    ).exactOptional(),
    RestoreJobId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Uniquely identifies the job that restores a recovery point.' }),
    ).exactOptional(),
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a restore job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    Status: RestoreJobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Status code specifying the state of the job that is initiated by Backup to restore a recovery point.',
        }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message showing the status of a job to restore a recovery point.',
        }),
    ).exactOptional(),
    PercentDone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains an estimated percentage that is complete of a job at the time the job status was queried.',
        }),
    ).exactOptional(),
    BackupSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the restored resource.' }),
    ).exactOptional(),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ).exactOptional(),
    ExpectedCompletionTimeMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time in minutes that a job restoring a recovery point is expected to take.',
        }),
    ).exactOptional(),
    CreatedResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource whose recovery point is being restored. The format of the ARN depends on the resource type of the backed-up resource.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns metadata associated with a restore job listed by resource type.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRestoreJobOutput')

const ExportBackupPlanTemplateOutputSchema = z
  .object({
    BackupPlanTemplateJson: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The body of a backup plan template in JSON format.</p> <note> <p>This is a signed JSON document that cannot be modified before being passed to <code>GetBackupPlanFromJSON.</code> </p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportBackupPlanTemplateOutput')

const BackupRuleSchema = z
  .object({
    RuleName: BackupRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.' characters.",
        }),
    ),
    TargetBackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ),
    ScheduleExpression: CronExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A cron expression in UTC specifying when Backup initiates a backup job. For more information about Amazon Web Services cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a> in the <i>Amazon CloudWatch Events User Guide.</i>. Two examples of Amazon Web Services cron expressions are <code> 15 * ? * * *</code> (take a backup every hour at 15 minutes past the hour) and <code>0 12 * * ? *</code> (take a backup every day at 12 noon UTC). For a table of examples, click the preceding link and scroll down the page.',
        }),
    ).exactOptional(),
    StartWindowMinutes: WindowMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, it must be at least 60 minutes to avoid errors.",
        }),
    ).exactOptional(),
    CompletionWindowMinutes: WindowMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by Backup. This value is optional.',
        }),
    ).exactOptional(),
    Lifecycle: LifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
        }),
    ).exactOptional(),
    RecoveryPointTags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key-value pair strings that are assigned to resources that are associated with this rule when restored from backup.',
        }),
    ).exactOptional(),
    RuleId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Uniquely identifies a rule that is used to schedule the backup of a selection of resources.',
        }),
    ).exactOptional(),
    CopyActions: CopyActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>CopyAction</code> objects, which contains the details of the copy operation.',
        }),
    ).exactOptional(),
    EnableContinuousBackup: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False (or not specified) causes Backup to create snapshot backups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RuleName', 'TargetBackupVaultName'],
    description: 'Specifies a scheduled task used to back up a selection of resources.',
  })
  .openapi('BackupRule')

const BackupRulesSchema = z.array(BackupRuleSchema).openapi('BackupRules')

const BackupPlanSchema = z
  .object({
    BackupPlanName: BackupPlanNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.' characters.",
        }),
    ),
    Rules: BackupRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources. ',
        }),
    ),
    AdvancedBackupSettings: AdvancedBackupSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains a list of <code>BackupOptions</code> for each resource type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BackupPlanName', 'Rules'],
    description:
      'Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of Amazon Web Services resources.',
  })
  .openapi('BackupPlan')

const GetBackupPlanOutputSchema = z
  .object({
    BackupPlan: BackupPlanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or more sets of <code>Rules</code>.',
        }),
    ).exactOptional(),
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    BackupPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.',
        }),
    ).exactOptional(),
    VersionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.',
        }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    DeletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    LastExecutionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last time a job to back up resources was run with this backup plan. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    AdvancedBackupSettings: AdvancedBackupSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a list of <code>BackupOptions</code> for each resource type. The list is populated only if the advanced option is set for the backup plan.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBackupPlanOutput')

const GetBackupPlanFromJSONOutputSchema = z
  .object({
    BackupPlan: BackupPlanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or more sets of <code>Rules</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBackupPlanFromJSONOutput')

const GetBackupPlanFromTemplateOutputSchema = z
  .object({
    BackupPlanDocument: BackupPlanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the body of a backup plan based on the target template, including the name, rules, and backup vault of the plan.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBackupPlanFromTemplateOutput')

const BackupSelectionSchema = z
  .object({
    SelectionName: BackupSelectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The display name of a resource selection document. Must contain 1 to 50 alphanumeric or '-_.' characters.",
        }),
    ),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role that Backup uses to authenticate when backing up the target resource; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ),
    Resources: ResourceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of Amazon Resource Names (ARNs) to assign to a backup plan. The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p> <p>If you need to assign many resources to a backup plan, consider a different resource selection strategy, such as assigning all resources of a resource type or refining your resource selection using tags.</p>',
        }),
    ).exactOptional(),
    ListOfTags: ListOfTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of conditions that you define to assign resources to your backup plans using tags. For example, <code>"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },</code>. Condition operators are case sensitive.</p> <p> <code>ListOfTags</code> differs from <code>Conditions</code> as follows:</p> <ul> <li> <p>When you specify more than one condition, you assign all resources that match AT LEAST ONE condition (using OR logic).</p> </li> <li> <p> <code>ListOfTags</code> only supports <code>StringEquals</code>. <code>Conditions</code> supports <code>StringEquals</code>, <code>StringLike</code>, <code>StringNotEquals</code>, and <code>StringNotLike</code>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    NotResources: ResourceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of Amazon Resource Names (ARNs) to exclude from a backup plan. The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p> <p>If you need to exclude many resources from a backup plan, consider a different resource selection strategy, such as assigning only one or a few resource types or refining your resource selection using tags.</p>',
        }),
    ).exactOptional(),
    Conditions: ConditionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of conditions that you define to assign resources to your backup plans using tags. For example, <code>"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },</code>. Condition operators are case sensitive.</p> <p> <code>Conditions</code> differs from <code>ListOfTags</code> as follows:</p> <ul> <li> <p>When you specify more than one condition, you only assign the resources that match ALL conditions (using AND logic).</p> </li> <li> <p> <code>Conditions</code> supports <code>StringEquals</code>, <code>StringLike</code>, <code>StringNotEquals</code>, and <code>StringNotLike</code>. <code>ListOfTags</code> only supports <code>StringEquals</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SelectionName', 'IamRoleArn'],
    description:
      '<p>Used to specify a set of resources to a backup plan.</p> <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>, and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to select all supported and opted-in storage resources, which could have unintended cost implications.</p>',
  })
  .openapi('BackupSelection')

const GetBackupSelectionOutputSchema = z
  .object({
    BackupSelection: BackupSelectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the body of a request to assign a set of resources to a backup plan.',
        }),
    ).exactOptional(),
    SelectionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Uniquely identifies the body of a request to assign a set of resources to a backup plan.',
        }),
    ).exactOptional(),
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup selection is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBackupSelectionOutput')

const IAMPolicySchema = z.string().openapi('IAMPolicy')

const GetBackupVaultAccessPolicyOutputSchema = z
  .object({
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    Policy: IAMPolicySchema.and(
      z.any().openapi({ description: 'The backup vault access policy document in JSON format.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBackupVaultAccessPolicyOutput')

const BackupVaultEventSchema = z
  .enum([
    'BACKUP_JOB_STARTED',
    'BACKUP_JOB_COMPLETED',
    'BACKUP_JOB_SUCCESSFUL',
    'BACKUP_JOB_FAILED',
    'BACKUP_JOB_EXPIRED',
    'RESTORE_JOB_STARTED',
    'RESTORE_JOB_COMPLETED',
    'RESTORE_JOB_SUCCESSFUL',
    'RESTORE_JOB_FAILED',
    'COPY_JOB_STARTED',
    'COPY_JOB_SUCCESSFUL',
    'COPY_JOB_FAILED',
    'RECOVERY_POINT_MODIFIED',
    'BACKUP_PLAN_CREATED',
    'BACKUP_PLAN_MODIFIED',
    'S3_BACKUP_OBJECT_FAILED',
    'S3_RESTORE_OBJECT_FAILED',
  ])
  .openapi('BackupVaultEvent')

const BackupVaultEventsSchema = z.array(BackupVaultEventSchema).openapi('BackupVaultEvents')

const GetBackupVaultNotificationsOutputSchema = z
  .object({
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    SNSTopicArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS) topic; for example, <code>arn:aws:sns:us-west-2:111122223333:MyTopic</code>.',
        }),
    ).exactOptional(),
    BackupVaultEvents: BackupVaultEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of events that indicate the status of jobs to back up resources to the backup vault.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBackupVaultNotificationsOutput')

const GetLegalHoldOutputSchema = z
  .object({
    Title: StringSchema.and(
      z.any().openapi({ description: 'This is the string title of the legal hold.' }),
    ).exactOptional(),
    Status: LegalHoldStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the status of the legal hold. Statuses can be <code>ACTIVE</code>, <code>CREATING</code>, <code>CANCELED</code>, and <code>CANCELING</code>.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({ description: 'This is the returned string description of the legal hold.' }),
    ).exactOptional(),
    CancelDescription: StringSchema.and(
      z.any().openapi({ description: 'String describing the reason for removing the legal hold.' }),
    ).exactOptional(),
    LegalHoldId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'This is the returned ID associated with a specified legal hold.',
        }),
    ).exactOptional(),
    LegalHoldArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the returned framework ARN for the specified legal hold. An Amazon Resource Name (ARN) uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'Time in number format when legal hold was created.' }),
    ).exactOptional(),
    CancellationDate: TimestampSchema.and(
      z.any().openapi({ description: 'Time in number when legal hold was cancelled.' }),
    ).exactOptional(),
    RetainRecordUntil: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the date and time until which the legal hold record will be retained.',
        }),
    ).exactOptional(),
    RecoveryPointSelection: RecoveryPointSelectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'This specifies criteria to assign a set of resources, such as resource types or backup vaults.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLegalHoldOutput')

const MetadataValueSchema = z.string().openapi('MetadataValue')

const MetadataSchema = z.record(z.string(), MetadataValueSchema).openapi('Metadata')

const GetRecoveryPointRestoreMetadataOutputSchema = z
  .object({
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    RestoreMetadata: MetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of metadata key-value pairs that describe the original configuration of the backed-up resource. These values vary depending on the service that is being restored.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRecoveryPointRestoreMetadataOutput')

const ResourceTypesSchema = z.array(ResourceTypeSchema).openapi('ResourceTypes')

const GetSupportedResourceTypesOutputSchema = z
  .object({
    ResourceTypes: ResourceTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains a string with the supported Amazon Web Services resource types:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSX</code> for Amazon FSx</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>DocDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSupportedResourceTypesOutput')

const BackupJobSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The account ID that owns the backup job.' }),
    ).exactOptional(),
    BackupJobId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Uniquely identifies a request to Backup to back up a resource.' }),
    ).exactOptional(),
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    State: BackupJobStateSchema.and(
      z.any().openapi({ description: 'The current state of a resource recovery point.' }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A detailed message explaining the status of the job to back up a resource.',
        }),
    ).exactOptional(),
    PercentDone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains an estimated percentage complete of a job at the time the job status was queried.',
        }),
    ).exactOptional(),
    BackupSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of a backup.' }),
    ).exactOptional(),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to create the target recovery point. IAM roles other than the default role must include either <code>AWSBackup</code> or <code>AwsBackup</code> in the role name. For example, <code>arn:aws:iam::123456789012:role/AWSBackupRDSAccess</code>. Role names without those strings lack permissions to perform backup jobs.',
        }),
    ).exactOptional(),
    CreatedBy: RecoveryPointCreatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains identifying information about the creation of a backup job, including the <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code> of the backup plan used to create it.',
        }),
    ).exactOptional(),
    ExpectedCompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>ExpectedCompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    StartBy: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2.',
        }),
    ).exactOptional(),
    BytesTransferred: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size in bytes transferred to a backup vault at the time that the job status was queried.',
        }),
    ).exactOptional(),
    BackupOptions: BackupOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p> <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to <code>"WindowsVSS":"disabled"</code> to create a regular backup. If you specify an invalid option, you get an <code>InvalidParameterValueException</code> exception.</p>',
        }),
    ).exactOptional(),
    BackupType: StringSchema.and(
      z.any().openapi({ description: 'Represents the type of backup for a backup job.' }),
    ).exactOptional(),
    ParentJobId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This uniquely identifies a request to Backup to back up a resource. The return will be the parent (composite) job ID.',
        }),
    ).exactOptional(),
    IsParent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a boolean value indicating this is a parent (composite) backup job.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the non-unique name of the resource that belongs to the specified backup.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains detailed information about a backup job.', required: [] })
  .openapi('BackupJob')

const BackupJobsListSchema = z.array(BackupJobSchema).openapi('BackupJobsList')

const ListBackupJobsOutputSchema = z
  .object({
    BackupJobs: BackupJobsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of structures containing metadata about your backup jobs returned in JSON format.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBackupJobsOutput')

const BackupPlanTemplatesListMemberSchema = z
  .object({
    BackupPlanTemplateId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a stored backup plan template.' }),
    ).exactOptional(),
    BackupPlanTemplateName: StringSchema.and(
      z.any().openapi({ description: 'The optional display name of a backup plan template.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object specifying metadata associated with a backup plan template.',
    required: [],
  })
  .openapi('BackupPlanTemplatesListMember')

const BackupPlanTemplatesListSchema = z
  .array(BackupPlanTemplatesListMemberSchema)
  .openapi('BackupPlanTemplatesList')

const ListBackupPlanTemplatesOutputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
    BackupPlanTemplatesList: BackupPlanTemplatesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of template list items containing metadata about your saved templates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBackupPlanTemplatesOutput')

const BackupPlansListMemberSchema = z
  .object({
    BackupPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.',
        }),
    ).exactOptional(),
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a resource backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    DeletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    VersionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.',
        }),
    ).exactOptional(),
    BackupPlanName: BackupPlanNameSchema.and(
      z.any().openapi({ description: 'The display name of a saved backup plan.' }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
        }),
    ).exactOptional(),
    LastExecutionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last time a job to back up resources was run with this rule. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    AdvancedBackupSettings: AdvancedBackupSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains a list of <code>BackupOptions</code> for a resource type.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains metadata about a backup plan.', required: [] })
  .openapi('BackupPlansListMember')

const BackupPlanVersionsListSchema = z
  .array(BackupPlansListMemberSchema)
  .openapi('BackupPlanVersionsList')

const ListBackupPlanVersionsOutputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
    BackupPlanVersionsList: BackupPlanVersionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of version list items containing metadata about your backup plans.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBackupPlanVersionsOutput')

const BackupPlansListSchema = z.array(BackupPlansListMemberSchema).openapi('BackupPlansList')

const ListBackupPlansOutputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
    BackupPlansList: BackupPlansListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of backup plan list items containing metadata about your saved backup plans.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBackupPlansOutput')

const BackupSelectionsListMemberSchema = z
  .object({
    SelectionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Uniquely identifies a request to assign a set of resources to a backup plan.',
        }),
    ).exactOptional(),
    SelectionName: BackupSelectionNameSchema.and(
      z.any().openapi({ description: 'The display name of a resource selection document.' }),
    ).exactOptional(),
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
        }),
    ).exactOptional(),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains metadata about a <code>BackupSelection</code> object.',
    required: [],
  })
  .openapi('BackupSelectionsListMember')

const BackupSelectionsListSchema = z
  .array(BackupSelectionsListMemberSchema)
  .openapi('BackupSelectionsList')

const ListBackupSelectionsOutputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
    BackupSelectionsList: BackupSelectionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of backup selection list items containing metadata about each resource in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBackupSelectionsOutput')

const BackupVaultListMemberSchema = z
  .object({
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a resource backup is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    EncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A server-side encryption key you can specify to encrypt your backups from services that support full Backup management; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>. If you specify a key, you must specify its ARN, not its alias. If you do not specify a key, Backup creates a KMS key for you by default.</p> <p>To learn which Backup services support full Backup management and how Backup handles encryption for backups from services that do not yet support full Backup, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/encryption.html"> Encryption for backups in Backup</a> </p>',
        }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
        }),
    ).exactOptional(),
    NumberOfRecoveryPoints: Long2Schema.and(
      z
        .any()
        .openapi({
          description: 'The number of recovery points that are stored in a backup vault.',
        }),
    ).exactOptional(),
    Locked: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether Backup Vault Lock applies to the selected backup vault. If <code>true</code>, Vault Lock prevents delete and update operations on the recovery points in the selected vault.',
        }),
    ).exactOptional(),
    MinRetentionDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Backup Vault Lock setting that specifies the minimum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a minimum retention period.</p> <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.</p>",
        }),
    ).exactOptional(),
    MaxRetentionDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Backup Vault Lock setting that specifies the maximum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a maximum retention period on the recovery points in the vault (allowing indefinite storage).</p> <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.</p>",
        }),
    ).exactOptional(),
    LockDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time when Backup Vault Lock configuration becomes immutable, meaning it cannot be changed or deleted.</p> <p>If you applied Vault Lock to your vault without specifying a lock date, you can change your Vault Lock settings, or delete Vault Lock from the vault entirely, at any time.</p> <p>This value is in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains metadata about a backup vault.', required: [] })
  .openapi('BackupVaultListMember')

const BackupVaultListSchema = z.array(BackupVaultListMemberSchema).openapi('BackupVaultList')

const ListBackupVaultsOutputSchema = z
  .object({
    BackupVaultList: BackupVaultListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of backup vault list members containing vault metadata, including Amazon Resource Name (ARN), display name, creation date, number of saved recovery points, and encryption information if the resources saved in the backup vault are encrypted.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBackupVaultsOutput')

const CopyJobsListSchema = z.array(CopyJobSchema).openapi('CopyJobsList')

const ListCopyJobsOutputSchema = z
  .object({
    CopyJobs: CopyJobsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of structures containing metadata about your copy jobs returned in JSON format. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCopyJobsOutput')

const FrameworkSchema = z
  .object({
    FrameworkName: FrameworkNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
        }),
    ).exactOptional(),
    FrameworkArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    FrameworkDescription: FrameworkDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional description of the framework with a maximum 1,024 characters.',
        }),
    ).exactOptional(),
    NumberOfControls: IntegerSchema.and(
      z.any().openapi({ description: 'The number of controls contained by the framework.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.',
        }),
    ).exactOptional(),
    DeploymentStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The deployment status of a framework. The statuses are:</p> <p> <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.',
    required: [],
  })
  .openapi('Framework')

const FrameworkListSchema = z.array(FrameworkSchema).openapi('FrameworkList')

const ListFrameworksOutputSchema = z
  .object({
    Frameworks: FrameworkListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of frameworks with details for each framework, including the framework name, Amazon Resource Name (ARN), description, number of controls, creation time, and deployment status.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFrameworksOutput')

const LegalHoldSchema = z
  .object({
    Title: StringSchema.and(
      z.any().openapi({ description: 'This is the title of a legal hold.' }),
    ).exactOptional(),
    Status: LegalHoldStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the status of the legal hold. Statuses can be <code>ACTIVE</code>, <code>CREATING</code>, <code>CANCELED</code>, and <code>CANCELING</code>.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'This is the description of a legal hold.' }),
    ).exactOptional(),
    LegalHoldId: StringSchema.and(
      z.any().openapi({ description: 'ID of specific legal hold on one or more recovery points.' }),
    ).exactOptional(),
    LegalHoldArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is an Amazon Resource Number (ARN) that uniquely identifies the legal hold; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'This is the time in number format when legal hold was created.' }),
    ).exactOptional(),
    CancellationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'This is the time in number format when legal hold was cancelled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A legal hold is an administrative tool that helps prevent backups from being deleted while under a hold. While the hold is in place, backups under a hold cannot be deleted and lifecycle policies that would alter the backup status (such as transition to cold storage) are delayed until the legal hold is removed. A backup can have more than one legal hold. Legal holds are applied to one or more backups (also known as recovery points). These backups can be filtered by resource types and by resource IDs.',
    required: [],
  })
  .openapi('LegalHold')

const LegalHoldsListSchema = z.array(LegalHoldSchema).openapi('LegalHoldsList')

const ListLegalHoldsOutputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
    LegalHolds: LegalHoldsListSchema.and(
      z
        .any()
        .openapi({
          description: 'This is an array of returned legal holds, both active and previous.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLegalHoldsOutput')

const ProtectedResourceSchema = z
  .object({
    ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Amazon Web Services resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2.',
        }),
    ).exactOptional(),
    LastBackupTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the non-unique name of the resource that belongs to the specified backup.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains information about a backed-up resource.',
    required: [],
  })
  .openapi('ProtectedResource')

const ProtectedResourcesListSchema = z
  .array(ProtectedResourceSchema)
  .openapi('ProtectedResourcesList')

const ListProtectedResourcesOutputSchema = z
  .object({
    Results: ProtectedResourcesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of resources successfully backed up by Backup including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProtectedResourcesOutput')

const RecoveryPointByBackupVaultSchema = z
  .object({
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    SourceBackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The backup vault where the recovery point was originally copied from. If the recovery point is restored to the same account this value will be <code>null</code>.',
        }),
    ).exactOptional(),
    ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Amazon Web Services resource saved as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2.',
        }),
    ).exactOptional(),
    CreatedBy: RecoveryPointCreatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains identifying information about the creation of a recovery point, including the <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code> of the backup plan that is used to create it.',
        }),
    ).exactOptional(),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ).exactOptional(),
    Status: RecoveryPointStatusSchema.and(
      z.any().openapi({ description: 'A status code specifying the state of the recovery point.' }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message explaining the reason of the recovery point deletion failure.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    BackupSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of a backup.' }),
    ).exactOptional(),
    CalculatedLifecycle: CalculatedLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps.',
        }),
    ).exactOptional(),
    Lifecycle: LifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
        }),
    ).exactOptional(),
    EncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.',
        }),
    ).exactOptional(),
    IsEncrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is encrypted, or <code>FALSE</code> if the recovery point is not encrypted.',
        }),
    ).exactOptional(),
    LastRestoreTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    ParentRecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the Amazon Resource Name (ARN) of the parent (composite) recovery point.',
        }),
    ).exactOptional(),
    CompositeMemberIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax"> logical ID</a> within a stack.',
        }),
    ).exactOptional(),
    IsParent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a boolean value indicating this is a parent (composite) recovery point.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the non-unique name of the resource that belongs to the specified backup.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains detailed information about the recovery points stored in a backup vault.',
    required: [],
  })
  .openapi('RecoveryPointByBackupVault')

const RecoveryPointByBackupVaultListSchema = z
  .array(RecoveryPointByBackupVaultSchema)
  .openapi('RecoveryPointByBackupVaultList')

const ListRecoveryPointsByBackupVaultOutputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
    RecoveryPoints: RecoveryPointByBackupVaultListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contain detailed information about recovery points saved in a backup vault.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRecoveryPointsByBackupVaultOutput')

const RecoveryPointMemberSchema = z
  .object({
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the Amazon Resource Name (ARN) of the parent (composite) recovery point.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This is a recovery point which is a child (nested) recovery point of a parent (composite) recovery point. These recovery points can be disassociated from their parent (composite) recovery point, in which case they will no longer be a member.',
    required: [],
  })
  .openapi('RecoveryPointMember')

const RecoveryPointsListSchema = z.array(RecoveryPointMemberSchema).openapi('RecoveryPointsList')

const ListRecoveryPointsByLegalHoldOutputSchema = z
  .object({
    RecoveryPoints: RecoveryPointsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a list of the recovery points returned by <code>ListRecoveryPointsByLegalHold</code>.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This return is the next item following a partial list of returned resources.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRecoveryPointsByLegalHoldOutput')

const RecoveryPointByResourceSchema = z
  .object({
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    Status: RecoveryPointStatusSchema.and(
      z.any().openapi({ description: 'A status code specifying the state of the recovery point.' }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message explaining the reason of the recovery point deletion failure.',
        }),
    ).exactOptional(),
    EncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.',
        }),
    ).exactOptional(),
    BackupSizeBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of a backup.' }),
    ).exactOptional(),
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ).exactOptional(),
    IsParent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a boolean value indicating this is a parent (composite) recovery point.',
        }),
    ).exactOptional(),
    ParentRecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the Amazon Resource Name (ARN) of the parent (composite) recovery point.',
        }),
    ).exactOptional(),
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the non-unique name of the resource that belongs to the specified backup.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains detailed information about a saved recovery point.',
    required: [],
  })
  .openapi('RecoveryPointByResource')

const RecoveryPointByResourceListSchema = z
  .array(RecoveryPointByResourceSchema)
  .openapi('RecoveryPointByResourceList')

const ListRecoveryPointsByResourceOutputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
    RecoveryPoints: RecoveryPointByResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects that contain detailed information about recovery points of the specified resource type.</p> <note> <p>Only Amazon EFS and Amazon EC2 recovery points return BackupVaultName.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRecoveryPointsByResourceOutput')

const ReportJobListSchema = z.array(ReportJobSchema).openapi('ReportJobList')

const ListReportJobsOutputSchema = z
  .object({
    ReportJobs: ReportJobListSchema.and(
      z.any().openapi({ description: 'Details about your report jobs in JSON format.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReportJobsOutput')

const ReportPlanListSchema = z.array(ReportPlanSchema).openapi('ReportPlanList')

const ListReportPlansOutputSchema = z
  .object({
    ReportPlans: ReportPlanListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of your report plans with detailed information for each plan. This information includes the Amazon Resource Name (ARN), report plan name, description, settings, delivery channel, deployment status, creation time, and last times the report plan attempted to and successfully ran.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReportPlansOutput')

const RestoreJobsListMemberSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The account ID that owns the restore job.' }),
    ).exactOptional(),
    RestoreJobId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Uniquely identifies the job that restores a recovery point.' }),
    ).exactOptional(),
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a restore job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    CompletionDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    Status: RestoreJobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A status code specifying the state of the job initiated by Backup to restore a recovery point.',
        }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A detailed message explaining the status of the job to restore a recovery point.',
        }),
    ).exactOptional(),
    PercentDone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains an estimated percentage complete of a job at the time the job status was queried.',
        }),
    ).exactOptional(),
    BackupSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the restored resource.' }),
    ).exactOptional(),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ).exactOptional(),
    ExpectedCompletionTimeMinutes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time in minutes that a job restoring a recovery point is expected to take.',
        }),
    ).exactOptional(),
    CreatedResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type of the listed restore jobs; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains metadata about a restore job.', required: [] })
  .openapi('RestoreJobsListMember')

const RestoreJobsListSchema = z.array(RestoreJobsListMemberSchema).openapi('RestoreJobsList')

const ListRestoreJobsOutputSchema = z
  .object({
    RestoreJobs: RestoreJobsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contain detailed information about jobs to restore saved resources.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRestoreJobsOutput')

const ListTagsOutputSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'To help organize your resources, you can assign your own metadata to the resources you create. Each tag is a key-value pair.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsOutput')

const StartBackupJobOutputSchema = z
  .object({
    BackupJobId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Uniquely identifies a request to Backup to back up a resource.' }),
    ).exactOptional(),
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <i>Note: This field is only returned for Amazon EFS and Advanced DynamoDB resources.</i> </p> <p>An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    IsParent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a returned boolean value indicating this is a parent (composite) backup job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartBackupJobOutput')

const StartCopyJobOutputSchema = z
  .object({
    CopyJobId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a copy job.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a copy job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    IsParent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a returned boolean value indicating this is a parent (composite) copy job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartCopyJobOutput')

const StartReportJobOutputSchema = z
  .object({
    ReportJobId: ReportJobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartReportJobOutput')

const RestoreJobIdSchema = z.string().openapi('RestoreJobId')

const StartRestoreJobOutputSchema = z
  .object({
    RestoreJobId: RestoreJobIdSchema.and(
      z
        .any()
        .openapi({ description: 'Uniquely identifies the job that restores a recovery point.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartRestoreJobOutput')

const UpdateBackupPlanOutputSchema = z
  .object({
    BackupPlanId: StringSchema.and(
      z.any().openapi({ description: 'Uniquely identifies a backup plan.' }),
    ).exactOptional(),
    BackupPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.',
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
    VersionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version Ids cannot be edited.',
        }),
    ).exactOptional(),
    AdvancedBackupSettings: AdvancedBackupSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains a list of <code>BackupOptions</code> for each resource type.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBackupPlanOutput')

const UpdateFrameworkOutputSchema = z
  .object({
    FrameworkName: FrameworkNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
        }),
    ).exactOptional(),
    FrameworkArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFrameworkOutput')

const UpdateRecoveryPointLifecycleOutputSchema = z
  .object({
    BackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ).exactOptional(),
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ).exactOptional(),
    Lifecycle: LifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
        }),
    ).exactOptional(),
    CalculatedLifecycle: CalculatedLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRecoveryPointLifecycleOutput')

const UpdateReportPlanOutputSchema = z
  .object({
    ReportPlanName: ReportPlanNameSchema.and(
      z.any().openapi({ description: 'The unique name of the report plan.' }),
    ).exactOptional(),
    ReportPlanArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that a report plan is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateReportPlanOutput')

const BackupOptionKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
  .openapi('BackupOptionKey')

const BackupPlanInputSchema = z
  .object({
    BackupPlanName: BackupPlanNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.' characters.",
        }),
    ),
    Rules: BackupRulesInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.',
        }),
    ),
    AdvancedBackupSettings: AdvancedBackupSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of <code>BackupOptions</code> for each resource type. These settings are only available for Windows Volume Shadow Copy Service (VSS) backup jobs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BackupPlanName', 'Rules'],
    description:
      'Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task. ',
  })
  .openapi('BackupPlanInput')

const CancelLegalHoldInputSchema = z
  .object({})
  .openapi({ title: 'CancelLegalHoldInput' })
  .openapi('CancelLegalHoldInput')

const CreateBackupPlanInputSchema = z
  .object({
    BackupPlan: BackupPlanInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or more sets of <code>Rules</code>.',
        }),
    ),
    BackupPlanTags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan.',
        }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['BackupPlan'], title: 'CreateBackupPlanInput' })
  .openapi('CreateBackupPlanInput')

const CreateBackupSelectionInputSchema = z
  .object({
    BackupSelection: BackupSelectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the body of a request to assign a set of resources to a backup plan.',
        }),
    ),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['BackupSelection'], title: 'CreateBackupSelectionInput' })
  .openapi('CreateBackupSelectionInput')

const CreateBackupVaultInputSchema = z
  .object({
    BackupVaultTags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair.',
        }),
    ).exactOptional(),
    EncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.',
        }),
    ).exactOptional(),
    CreatorRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateBackupVaultInput', required: [] })
  .openapi('CreateBackupVaultInput')

const CreateFrameworkInputSchema = z
  .object({
    FrameworkName: FrameworkNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
        }),
    ),
    FrameworkDescription: FrameworkDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional description of the framework with a maximum of 1,024 characters.',
        }),
    ).exactOptional(),
    FrameworkControls: FrameworkControlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.',
        }),
    ),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
    FrameworkTags: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FrameworkName', 'FrameworkControls'], title: 'CreateFrameworkInput' })
  .openapi('CreateFrameworkInput')

const CreateLegalHoldInputSchema = z
  .object({
    Title: StringSchema.and(
      z.any().openapi({ description: 'This is the string title of the legal hold.' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'This is the string description of the legal hold.' }),
    ),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a user-chosen string used to distinguish between otherwise identical calls. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
    RecoveryPointSelection: RecoveryPointSelectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'This specifies criteria to assign a set of resources, such as resource types or backup vaults.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Title', 'Description'], title: 'CreateLegalHoldInput' })
  .openapi('CreateLegalHoldInput')

const CreateReportPlanInputSchema = z
  .object({
    ReportPlanName: ReportPlanNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
        }),
    ),
    ReportPlanDescription: ReportPlanDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional description of the report plan with a maximum of 1,024 characters.',
        }),
    ).exactOptional(),
    ReportDeliveryChannel: ReportDeliveryChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.',
        }),
    ),
    ReportSetting: ReportSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the report template for the report. Reports are built using a report template. The report templates are:</p> <p> <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code> </p> <p>If the report template is <code>RESOURCE_COMPLIANCE_REPORT</code> or <code>CONTROL_COMPLIANCE_REPORT</code>, this API resource also describes the report coverage by Amazon Web Services Regions and frameworks.</p>',
        }),
    ),
    ReportPlanTags: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.',
        }),
    ).exactOptional(),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReportPlanName', 'ReportDeliveryChannel', 'ReportSetting'],
    title: 'CreateReportPlanInput',
  })
  .openapi('CreateReportPlanInput')

const DeleteBackupPlanInputSchema = z
  .object({})
  .openapi({ title: 'DeleteBackupPlanInput' })
  .openapi('DeleteBackupPlanInput')

const DeleteBackupSelectionInputSchema = z
  .object({})
  .openapi({ title: 'DeleteBackupSelectionInput' })
  .openapi('DeleteBackupSelectionInput')

const DeleteBackupVaultAccessPolicyInputSchema = z
  .object({})
  .openapi({ title: 'DeleteBackupVaultAccessPolicyInput' })
  .openapi('DeleteBackupVaultAccessPolicyInput')

const DeleteBackupVaultInputSchema = z
  .object({})
  .openapi({ title: 'DeleteBackupVaultInput' })
  .openapi('DeleteBackupVaultInput')

const DeleteBackupVaultLockConfigurationInputSchema = z
  .object({})
  .openapi({ title: 'DeleteBackupVaultLockConfigurationInput' })
  .openapi('DeleteBackupVaultLockConfigurationInput')

const DeleteBackupVaultNotificationsInputSchema = z
  .object({})
  .openapi({ title: 'DeleteBackupVaultNotificationsInput' })
  .openapi('DeleteBackupVaultNotificationsInput')

const DeleteFrameworkInputSchema = z
  .object({})
  .openapi({ title: 'DeleteFrameworkInput' })
  .openapi('DeleteFrameworkInput')

const DeleteRecoveryPointInputSchema = z
  .object({})
  .openapi({ title: 'DeleteRecoveryPointInput' })
  .openapi('DeleteRecoveryPointInput')

const DeleteReportPlanInputSchema = z
  .object({})
  .openapi({ title: 'DeleteReportPlanInput' })
  .openapi('DeleteReportPlanInput')

const DescribeBackupJobInputSchema = z
  .object({})
  .openapi({ title: 'DescribeBackupJobInput' })
  .openapi('DescribeBackupJobInput')

const DescribeBackupVaultInputSchema = z
  .object({})
  .openapi({ title: 'DescribeBackupVaultInput' })
  .openapi('DescribeBackupVaultInput')

const DescribeCopyJobInputSchema = z
  .object({})
  .openapi({ title: 'DescribeCopyJobInput' })
  .openapi('DescribeCopyJobInput')

const DescribeFrameworkInputSchema = z
  .object({})
  .openapi({ title: 'DescribeFrameworkInput' })
  .openapi('DescribeFrameworkInput')

const DescribeGlobalSettingsInputSchema = z
  .object({})
  .openapi({ title: 'DescribeGlobalSettingsInput' })
  .openapi('DescribeGlobalSettingsInput')

const DescribeProtectedResourceInputSchema = z
  .object({})
  .openapi({ title: 'DescribeProtectedResourceInput' })
  .openapi('DescribeProtectedResourceInput')

const DescribeRecoveryPointInputSchema = z
  .object({})
  .openapi({ title: 'DescribeRecoveryPointInput' })
  .openapi('DescribeRecoveryPointInput')

const DescribeRegionSettingsInputSchema = z
  .object({})
  .openapi({ title: 'DescribeRegionSettingsInput' })
  .openapi('DescribeRegionSettingsInput')

const DescribeReportJobInputSchema = z
  .object({})
  .openapi({ title: 'DescribeReportJobInput' })
  .openapi('DescribeReportJobInput')

const DescribeReportPlanInputSchema = z
  .object({})
  .openapi({ title: 'DescribeReportPlanInput' })
  .openapi('DescribeReportPlanInput')

const DescribeRestoreJobInputSchema = z
  .object({})
  .openapi({ title: 'DescribeRestoreJobInput' })
  .openapi('DescribeRestoreJobInput')

const DisassociateRecoveryPointFromParentInputSchema = z
  .object({})
  .openapi({ title: 'DisassociateRecoveryPointFromParentInput' })
  .openapi('DisassociateRecoveryPointFromParentInput')

const DisassociateRecoveryPointInputSchema = z
  .object({})
  .openapi({ title: 'DisassociateRecoveryPointInput' })
  .openapi('DisassociateRecoveryPointInput')

const ExportBackupPlanTemplateInputSchema = z
  .object({})
  .openapi({ title: 'ExportBackupPlanTemplateInput' })
  .openapi('ExportBackupPlanTemplateInput')

const GetBackupPlanFromJSONInputSchema = z
  .object({
    BackupPlanTemplateJson: StringSchema.and(
      z.any().openapi({ description: 'A customer-supplied backup plan document in JSON format.' }),
    ),
  })
  .openapi({ required: ['BackupPlanTemplateJson'], title: 'GetBackupPlanFromJSONInput' })
  .openapi('GetBackupPlanFromJSONInput')

const GetBackupPlanFromTemplateInputSchema = z
  .object({})
  .openapi({ title: 'GetBackupPlanFromTemplateInput' })
  .openapi('GetBackupPlanFromTemplateInput')

const GetBackupPlanInputSchema = z
  .object({})
  .openapi({ title: 'GetBackupPlanInput' })
  .openapi('GetBackupPlanInput')

const GetBackupSelectionInputSchema = z
  .object({})
  .openapi({ title: 'GetBackupSelectionInput' })
  .openapi('GetBackupSelectionInput')

const GetBackupVaultAccessPolicyInputSchema = z
  .object({})
  .openapi({ title: 'GetBackupVaultAccessPolicyInput' })
  .openapi('GetBackupVaultAccessPolicyInput')

const GetBackupVaultNotificationsInputSchema = z
  .object({})
  .openapi({ title: 'GetBackupVaultNotificationsInput' })
  .openapi('GetBackupVaultNotificationsInput')

const GetLegalHoldInputSchema = z
  .object({})
  .openapi({ title: 'GetLegalHoldInput' })
  .openapi('GetLegalHoldInput')

const GetRecoveryPointRestoreMetadataInputSchema = z
  .object({})
  .openapi({ title: 'GetRecoveryPointRestoreMetadataInput' })
  .openapi('GetRecoveryPointRestoreMetadataInput')

const GlobalSettingsNameSchema = z.string().openapi('GlobalSettingsName')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const ListBackupJobsInputSchema = z
  .object({})
  .openapi({ title: 'ListBackupJobsInput' })
  .openapi('ListBackupJobsInput')

const ListBackupPlanTemplatesInputSchema = z
  .object({})
  .openapi({ title: 'ListBackupPlanTemplatesInput' })
  .openapi('ListBackupPlanTemplatesInput')

const ListBackupPlanVersionsInputSchema = z
  .object({})
  .openapi({ title: 'ListBackupPlanVersionsInput' })
  .openapi('ListBackupPlanVersionsInput')

const ListBackupPlansInputSchema = z
  .object({})
  .openapi({ title: 'ListBackupPlansInput' })
  .openapi('ListBackupPlansInput')

const ListBackupSelectionsInputSchema = z
  .object({})
  .openapi({ title: 'ListBackupSelectionsInput' })
  .openapi('ListBackupSelectionsInput')

const ListBackupVaultsInputSchema = z
  .object({})
  .openapi({ title: 'ListBackupVaultsInput' })
  .openapi('ListBackupVaultsInput')

const ListCopyJobsInputSchema = z
  .object({})
  .openapi({ title: 'ListCopyJobsInput' })
  .openapi('ListCopyJobsInput')

const MaxFrameworkInputsSchema = z.int().min(1).max(1000).openapi('MaxFrameworkInputs')

const ListFrameworksInputSchema = z
  .object({})
  .openapi({ title: 'ListFrameworksInput' })
  .openapi('ListFrameworksInput')

const ListLegalHoldsInputSchema = z
  .object({})
  .openapi({ title: 'ListLegalHoldsInput' })
  .openapi('ListLegalHoldsInput')

const ListProtectedResourcesInputSchema = z
  .object({})
  .openapi({ title: 'ListProtectedResourcesInput' })
  .openapi('ListProtectedResourcesInput')

const ListRecoveryPointsByBackupVaultInputSchema = z
  .object({})
  .openapi({ title: 'ListRecoveryPointsByBackupVaultInput' })
  .openapi('ListRecoveryPointsByBackupVaultInput')

const ListRecoveryPointsByLegalHoldInputSchema = z
  .object({})
  .openapi({ title: 'ListRecoveryPointsByLegalHoldInput' })
  .openapi('ListRecoveryPointsByLegalHoldInput')

const ListRecoveryPointsByResourceInputSchema = z
  .object({})
  .openapi({ title: 'ListRecoveryPointsByResourceInput' })
  .openapi('ListRecoveryPointsByResourceInput')

const ListReportJobsInputSchema = z
  .object({})
  .openapi({ title: 'ListReportJobsInput' })
  .openapi('ListReportJobsInput')

const ListReportPlansInputSchema = z
  .object({})
  .openapi({ title: 'ListReportPlansInput' })
  .openapi('ListReportPlansInput')

const ListRestoreJobsInputSchema = z
  .object({})
  .openapi({ title: 'ListRestoreJobsInput' })
  .openapi('ListRestoreJobsInput')

const ListTagsInputSchema = z
  .object({})
  .openapi({ title: 'ListTagsInput' })
  .openapi('ListTagsInput')

const MetadataKeySchema = z.string().openapi('MetadataKey')

const PutBackupVaultAccessPolicyInputSchema = z
  .object({
    Policy: IAMPolicySchema.and(
      z.any().openapi({ description: 'The backup vault access policy document in JSON format.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutBackupVaultAccessPolicyInput', required: [] })
  .openapi('PutBackupVaultAccessPolicyInput')

const PutBackupVaultLockConfigurationInputSchema = z
  .object({
    MinRetentionDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).</p> <p>If this parameter is not specified, Vault Lock will not enforce a minimum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. The shortest minimum retention period you can specify is 1 day. Recovery points already saved in the vault prior to Vault Lock are not affected.</p>",
        }),
    ).exactOptional(),
    MaxRetentionDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).</p> <p>If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. The longest maximum retention period you can specify is 36500 days (approximately 100 years). Recovery points already saved in the vault prior to Vault Lock are not affected.</p>",
        }),
    ).exactOptional(),
    ChangeableForDays: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting <code>ChangeableForDays</code> to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.</p> <p>Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set <code>ChangeableForDays</code> to 3 or greater.</p> <p>Before the lock date, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code>. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.</p> <p>If this parameter is not specified, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code> at any time.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutBackupVaultLockConfigurationInput', required: [] })
  .openapi('PutBackupVaultLockConfigurationInput')

const PutBackupVaultNotificationsInputSchema = z
  .object({
    SNSTopicArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.',
        }),
    ),
    BackupVaultEvents: BackupVaultEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of events that indicate the status of jobs to back up resources to the backup vault.</p> <p>For common use cases and code samples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/sns-notifications.html">Using Amazon SNS to track Backup events</a>.</p> <p>The following events are supported:</p> <ul> <li> <p> <code>BACKUP_JOB_STARTED</code> | <code>BACKUP_JOB_COMPLETED</code> </p> </li> <li> <p> <code>COPY_JOB_STARTED</code> | <code>COPY_JOB_SUCCESSFUL</code> | <code>COPY_JOB_FAILED</code> </p> </li> <li> <p> <code>RESTORE_JOB_STARTED</code> | <code>RESTORE_JOB_COMPLETED</code> | <code>RECOVERY_POINT_MODIFIED</code> </p> </li> <li> <p> <code>S3_BACKUP_OBJECT_FAILED</code> | <code>S3_RESTORE_OBJECT_FAILED</code> </p> </li> </ul> <note> <p>The list below shows items that are deprecated events (for reference) and are no longer in use. They are no longer supported and will not return statuses or notifications. Refer to the list above for current supported events.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['SNSTopicArn', 'BackupVaultEvents'],
    title: 'PutBackupVaultNotificationsInput',
  })
  .openapi('PutBackupVaultNotificationsInput')

const StartBackupJobInputSchema = z
  .object({
    BackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ),
    ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
        }),
    ),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartBackupJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
    StartWindowMinutes: WindowMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional, and the default is 8 hours. If this value is included, it must be at least 60 minutes to avoid errors.",
        }),
    ).exactOptional(),
    CompleteWindowMinutes: WindowMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value in minutes during which a successfully started backup must complete, or else Backup will cancel the job. This value is optional. This value begins counting down from when the backup was scheduled. It does not add additional time for <code>StartWindowMinutes</code>, or if the backup started later than scheduled.',
        }),
    ).exactOptional(),
    Lifecycle: LifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup will transition and expire backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
        }),
    ).exactOptional(),
    RecoveryPointTags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.',
        }),
    ).exactOptional(),
    BackupOptions: BackupOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p> <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to <code>"WindowsVSS""disabled"</code> to create a regular backup. The <code>WindowsVSS</code> option is not enabled by default.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BackupVaultName', 'ResourceArn', 'IamRoleArn'],
    title: 'StartBackupJobInput',
  })
  .openapi('StartBackupJobInput')

const StartCopyJobInputSchema = z
  .object({
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. ',
        }),
    ),
    SourceBackupVaultName: BackupVaultNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
        }),
    ),
    DestinationBackupVaultArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
        }),
    ),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role ARN used to copy the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
    Lifecycle: LifecycleSchema.exactOptional(),
  })
  .openapi({
    required: [
      'RecoveryPointArn',
      'SourceBackupVaultName',
      'DestinationBackupVaultArn',
      'IamRoleArn',
    ],
    title: 'StartCopyJobInput',
  })
  .openapi('StartCopyJobInput')

const StartReportJobInputSchema = z
  .object({
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartReportJobInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartReportJobInput', required: [] })
  .openapi('StartReportJobInput')

const StartRestoreJobInputSchema = z
  .object({
    RecoveryPointArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
        }),
    ),
    Metadata: MetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: The ID of the Amazon EFS file system that is backed up by Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the Amazon Web Services KMS key that is used to encrypt the restored file system. You can specify a key from another Amazon Web Services account provided that key it is properly shared with your account via Amazon Web Services KMS.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> <li> <p> <code>ItemsToRestore</code>: An array of one to five strings where each string is a file path. Use <code>ItemsToRestore</code> to restore specific files or directories rather than the entire file system. This parameter is optional. For example, <code>"itemsToRestore":"[\\"/my.test\\"]"</code>.</p> </li> </ul>',
        }),
    ),
    IamRoleArn: IAMRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: <code>arn:aws:iam::123456789012:role/S3Access</code>.',
        }),
    ).exactOptional(),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartRestoreJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RecoveryPointArn', 'Metadata'], title: 'StartRestoreJobInput' })
  .openapi('StartRestoreJobInput')

const StopBackupJobInputSchema = z
  .object({})
  .openapi({ title: 'StopBackupJobInput' })
  .openapi('StopBackupJobInput')

const TagKeySchema = z.string().openapi('TagKey')

const TagKeyListSchema = z.array(StringSchema).openapi('TagKeyList')

const TagResourceInputSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. For clarity, this is the structure to assign tags: <code>[{"Key":"string","Value":"string"}]</code>.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceInputSchema = z
  .object({
    TagKeyList: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of keys to identify which key-value tags to remove from a resource.',
        }),
    ),
  })
  .openapi({ required: ['TagKeyList'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateBackupPlanInputSchema = z
  .object({
    BackupPlan: BackupPlanInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or more sets of <code>Rules</code>.',
        }),
    ),
  })
  .openapi({ required: ['BackupPlan'], title: 'UpdateBackupPlanInput' })
  .openapi('UpdateBackupPlanInput')

const UpdateFrameworkInputSchema = z
  .object({
    FrameworkDescription: FrameworkDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional description of the framework with a maximum 1,024 characters.',
        }),
    ).exactOptional(),
    FrameworkControls: FrameworkControlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.',
        }),
    ).exactOptional(),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFrameworkInput', required: [] })
  .openapi('UpdateFrameworkInput')

const UpdateGlobalSettingsInputSchema = z
  .object({
    GlobalSettings: GlobalSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example: <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false --region us-west-2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateGlobalSettingsInput', required: [] })
  .openapi('UpdateGlobalSettingsInput')

const UpdateRecoveryPointLifecycleInputSchema = z
  .object({
    Lifecycle: LifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRecoveryPointLifecycleInput', required: [] })
  .openapi('UpdateRecoveryPointLifecycleInput')

const UpdateRegionSettingsInputSchema = z
  .object({
    ResourceTypeOptInPreference: ResourceTypeOptInPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updates the list of services along with the opt-in preferences for the Region.',
        }),
    ).exactOptional(),
    ResourceTypeManagementPreference: ResourceTypeManagementPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables full Backup management of backups for a resource type. To enable full Backup management for DynamoDB along with <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html"> Backup\'s advanced DynamoDB backup features</a>, follow the procedure to <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> enable advanced DynamoDB backup programmatically</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRegionSettingsInput', required: [] })
  .openapi('UpdateRegionSettingsInput')

const UpdateReportPlanInputSchema = z
  .object({
    ReportPlanDescription: ReportPlanDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional description of the report plan with a maximum 1,024 characters.',
        }),
    ).exactOptional(),
    ReportDeliveryChannel: ReportDeliveryChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains information about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.',
        }),
    ).exactOptional(),
    ReportSetting: ReportSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the report template for the report. Reports are built using a report template. The report templates are:</p> <p> <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code> </p> <p>If the report template is <code>RESOURCE_COMPLIANCE_REPORT</code> or <code>CONTROL_COMPLIANCE_REPORT</code>, this API resource also describes the report coverage by Amazon Web Services Regions and frameworks.</p>',
        }),
    ).exactOptional(),
    IdempotencyToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateReportPlanInput', required: [] })
  .openapi('UpdateReportPlanInput')

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

export const deleteLegalHoldsLegalHoldIdCancelDescriptionRoute = createRoute({
  method: 'delete',
  path: '/legal-holds/{legalHoldId}#cancelDescription',
  description:
    'This action removes the specified legal hold on a recovery point. This action can only be performed by a user with sufficient permissions.',
  operationId: 'CancelLegalHold',
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
      legalHoldId: z
        .string()
        .openapi({
          param: {
            name: 'legalHoldId',
            in: 'path',
            required: true,
            description:
              'Legal hold ID required to remove the specified legal hold on a recovery point.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cancelDescription: z
        .string()
        .openapi({
          param: {
            name: 'cancelDescription',
            in: 'query',
            required: true,
            description: 'String describing the reason for removing the legal hold.',
            schema: { type: 'string' },
          },
        }),
      retainRecordInDays: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'retainRecordInDays',
            in: 'query',
            required: false,
            description:
              'The integer amount in days specifying amount of days after this API operation to remove legal hold.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CancelLegalHoldOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getBackupPlansIndexRoute = createRoute({
  method: 'get',
  path: '/backup/plans/',
  description:
    'Returns a list of all active backup plans for an authenticated account. The list contains information such as Amazon Resource Names (ARNs), plan IDs, creation and deletion dates, version IDs, plan names, and creator request IDs.',
  operationId: 'ListBackupPlans',
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
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeDeleted',
            in: 'query',
            required: false,
            description:
              'A Boolean value with a default value of <code>FALSE</code> that returns deleted backup plans when set to <code>TRUE</code>.',
            schema: { type: 'boolean' },
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
      content: { 'application/json': { schema: ListBackupPlansOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putBackupPlansIndexRoute = createRoute({
  method: 'put',
  path: '/backup/plans/',
  description:
    '<p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a document that contains information that Backup uses to schedule tasks that create recovery points for resources.</p> <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, you receive an <code>AlreadyExistsException</code> exception.</p>',
  operationId: 'CreateBackupPlan',
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
              BackupPlan: z
                .object({
                  BackupPlanName: BackupPlanNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.' characters.",
                      }),
                  ).exactOptional(),
                  Rules: BackupRulesInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.',
                      }),
                  ).exactOptional(),
                  AdvancedBackupSettings: AdvancedBackupSettingsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies a list of <code>BackupOptions</code> for each resource type. These settings are only available for Windows Volume Shadow Copy Service (VSS) backup jobs.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task. ',
                  required: [],
                }),
              BackupPlanTags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan.',
                }),
              CreatorRequestId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
                }),
            })
            .openapi({ required: ['BackupPlan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackupPlanOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getBackupPlansBackupPlanIdSelectionsIndexRoute = createRoute({
  method: 'get',
  path: '/backup/plans/{backupPlanId}/selections/',
  description:
    'Returns an array containing metadata of the resources associated with the target backup plan.',
  operationId: 'ListBackupSelections',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a backup plan.',
            schema: { type: 'string' },
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
            required: false,
            description:
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListBackupSelectionsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putBackupPlansBackupPlanIdSelectionsIndexRoute = createRoute({
  method: 'put',
  path: '/backup/plans/{backupPlanId}/selections/',
  description:
    'Creates a JSON document that specifies a set of resources to assign to a backup plan. For examples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json">Assigning resources programmatically</a>. ',
  operationId: 'CreateBackupSelection',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description:
              'Uniquely identifies the backup plan to be associated with the selection of resources.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BackupSelection: z
                .object({
                  SelectionName: BackupSelectionNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The display name of a resource selection document. Must contain 1 to 50 alphanumeric or '-_.' characters.",
                      }),
                  ).exactOptional(),
                  IamRoleArn: IAMRoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the IAM role that Backup uses to authenticate when backing up the target resource; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
                      }),
                  ).exactOptional(),
                  Resources: ResourceArnsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of Amazon Resource Names (ARNs) to assign to a backup plan. The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p> <p>If you need to assign many resources to a backup plan, consider a different resource selection strategy, such as assigning all resources of a resource type or refining your resource selection using tags.</p>',
                      }),
                  ).exactOptional(),
                  ListOfTags: ListOfTagsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of conditions that you define to assign resources to your backup plans using tags. For example, <code>"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },</code>. Condition operators are case sensitive.</p> <p> <code>ListOfTags</code> differs from <code>Conditions</code> as follows:</p> <ul> <li> <p>When you specify more than one condition, you assign all resources that match AT LEAST ONE condition (using OR logic).</p> </li> <li> <p> <code>ListOfTags</code> only supports <code>StringEquals</code>. <code>Conditions</code> supports <code>StringEquals</code>, <code>StringLike</code>, <code>StringNotEquals</code>, and <code>StringNotLike</code>. </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  NotResources: ResourceArnsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of Amazon Resource Names (ARNs) to exclude from a backup plan. The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p> <p>If you need to exclude many resources from a backup plan, consider a different resource selection strategy, such as assigning only one or a few resource types or refining your resource selection using tags.</p>',
                      }),
                  ).exactOptional(),
                  Conditions: ConditionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of conditions that you define to assign resources to your backup plans using tags. For example, <code>"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },</code>. Condition operators are case sensitive.</p> <p> <code>Conditions</code> differs from <code>ListOfTags</code> as follows:</p> <ul> <li> <p>When you specify more than one condition, you only assign the resources that match ALL conditions (using AND logic).</p> </li> <li> <p> <code>Conditions</code> supports <code>StringEquals</code>, <code>StringLike</code>, <code>StringNotEquals</code>, and <code>StringNotLike</code>. <code>ListOfTags</code> only supports <code>StringEquals</code>.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Used to specify a set of resources to a backup plan.</p> <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>, and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to select all supported and opted-in storage resources, which could have unintended cost implications.</p>',
                  required: [],
                }),
              CreatorRequestId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
                }),
            })
            .openapi({ required: ['BackupSelection'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackupSelectionOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getBackupVaultsBackupVaultNameRoute = createRoute({
  method: 'get',
  path: '/backup-vaults/{backupVaultName}',
  description: 'Returns metadata about a backup vault specified by its name.',
  operationId: 'DescribeBackupVault',
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
      backupVaultName: z
        .string()
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBackupVaultOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putBackupVaultsBackupVaultNameRoute = createRoute({
  method: 'put',
  path: '/backup-vaults/{backupVaultName}',
  description:
    '<p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code> request includes a name, optionally one or more resource tags, an encryption key, and a request ID.</p> <note> <p>Do not include sensitive data, such as passport numbers, in the name of a backup vault.</p> </note>',
  operationId: 'CreateBackupVault',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BackupVaultTags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair.',
                }),
              EncryptionKeyArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.',
                }),
              CreatorRequestId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
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
      content: { 'application/json': { schema: CreateBackupVaultOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
  },
})

export const deleteBackupVaultsBackupVaultNameRoute = createRoute({
  method: 'delete',
  path: '/backup-vaults/{backupVaultName}',
  description:
    'Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.',
  operationId: 'DeleteBackupVault',
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
      backupVaultName: z
        .string()
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const getAuditFrameworksRoute = createRoute({
  method: 'get',
  path: '/audit/frameworks',
  description:
    'Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.',
  operationId: 'ListFrameworks',
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
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFrameworksOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAuditFrameworksRoute = createRoute({
  method: 'post',
  path: '/audit/frameworks',
  description:
    'Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.',
  operationId: 'CreateFramework',
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
              FrameworkName: z
                .string()
                .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
                }),
              FrameworkDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'An optional description of the framework with a maximum of 1,024 characters.',
                }),
              FrameworkControls: z
                .array(FrameworkControlSchema)
                .openapi({
                  description:
                    'A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.',
                }),
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
                }),
              FrameworkTags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.',
                }),
            })
            .openapi({ required: ['FrameworkName', 'FrameworkControls'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFrameworkOutputSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getLegalHoldsIndexRoute = createRoute({
  method: 'get',
  path: '/legal-holds/',
  description: 'This action returns metadata about active and previous legal holds.',
  operationId: 'ListLegalHolds',
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
              'The next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of resource list items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListLegalHoldsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postLegalHoldsIndexRoute = createRoute({
  method: 'post',
  path: '/legal-holds/',
  description:
    'This action creates a legal hold on a recovery point (backup). A legal hold is a restraint on altering or deleting a backup until an authorized user cancels the legal hold. Any actions to delete or disassociate a recovery point will fail with an error if one or more active legal holds are on the recovery point.',
  operationId: 'CreateLegalHold',
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
              Title: z
                .string()
                .openapi({ description: 'This is the string title of the legal hold.' }),
              Description: z
                .string()
                .openapi({ description: 'This is the string description of the legal hold.' }),
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This is a user-chosen string used to distinguish between otherwise identical calls. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
                }),
              RecoveryPointSelection: z
                .object({
                  VaultNames: VaultNamesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'These are the names of the vaults in which the selected recovery points are contained.',
                      }),
                  ).exactOptional(),
                  ResourceIdentifiers: ResourceIdentifiersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'These are the resources included in the resource selection (including type of resources and vaults).',
                      }),
                  ).exactOptional(),
                  DateRange: DateRangeSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'This specifies criteria to assign a set of resources, such as resource types or backup vaults.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. ',
                }),
            })
            .openapi({ required: ['Title', 'Description'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLegalHoldOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getAuditReportPlansRoute = createRoute({
  method: 'get',
  path: '/audit/report-plans',
  description:
    'Returns a list of your report plans. For detailed information about a single report plan, use <code>DescribeReportPlan</code>.',
  operationId: 'ListReportPlans',
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
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReportPlansOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postAuditReportPlansRoute = createRoute({
  method: 'post',
  path: '/audit/report-plans',
  description:
    '<p>Creates a report plan. A report plan is a document that contains information about the contents of the report and where Backup will deliver it.</p> <p>If you call <code>CreateReportPlan</code> with a plan that already exists, you receive an <code>AlreadyExistsException</code> exception.</p>',
  operationId: 'CreateReportPlan',
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
              ReportPlanName: z
                .string()
                .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
                }),
              ReportPlanDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'An optional description of the report plan with a maximum of 1,024 characters.',
                }),
              ReportDeliveryChannel: z
                .object({
                  S3BucketName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The unique name of the S3 bucket that receives your reports.',
                      }),
                  ).exactOptional(),
                  S3KeyPrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/<code>prefix</code>/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.',
                      }),
                  ).exactOptional(),
                  Formats: FormatListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of the format of your reports: <code>CSV</code>, <code>JSON</code>, or both. If not specified, the default format is <code>CSV</code>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.',
                  required: [],
                }),
              ReportSetting: z
                .object({
                  ReportTemplate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Identifies the report template for the report. Reports are built using a report template. The report templates are:</p> <p> <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code> </p>',
                      }),
                  ).exactOptional(),
                  FrameworkArns: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Names (ARNs) of the frameworks a report covers.',
                      }),
                  ).exactOptional(),
                  NumberOfFrameworks: IntegerSchema.and(
                    z.any().openapi({ description: 'The number of frameworks a report covers.' }),
                  ).exactOptional(),
                  Accounts: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'These are the accounts to be included in the report.',
                      }),
                  ).exactOptional(),
                  OrganizationUnits: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'These are the Organizational Units to be included in the report.',
                      }),
                  ).exactOptional(),
                  Regions: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'These are the Regions to be included in the report.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Contains detailed information about a report setting.',
                  required: [],
                }),
              ReportPlanTags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.',
                }),
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
                }),
            })
            .openapi({ required: ['ReportPlanName', 'ReportDeliveryChannel', 'ReportSetting'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateReportPlanOutputSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
  },
})

export const postBackupPlansBackupPlanIdRoute = createRoute({
  method: 'post',
  path: '/backup/plans/{backupPlanId}',
  description:
    'Updates an existing backup plan identified by its <code>backupPlanId</code> with the input document in JSON format. The new version is uniquely identified by a <code>VersionId</code>.',
  operationId: 'UpdateBackupPlan',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a backup plan.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BackupPlan: z
                .object({
                  BackupPlanName: BackupPlanNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.' characters.",
                      }),
                  ).exactOptional(),
                  Rules: BackupRulesInputSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.',
                      }),
                  ).exactOptional(),
                  AdvancedBackupSettings: AdvancedBackupSettingsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies a list of <code>BackupOptions</code> for each resource type. These settings are only available for Windows Volume Shadow Copy Service (VSS) backup jobs.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task. ',
                  required: [],
                }),
            })
            .openapi({ required: ['BackupPlan'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBackupPlanOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteBackupPlansBackupPlanIdRoute = createRoute({
  method: 'delete',
  path: '/backup/plans/{backupPlanId}',
  description:
    'Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.',
  operationId: 'DeleteBackupPlan',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a backup plan.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackupPlanOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const getBackupPlansBackupPlanIdSelectionsSelectionIdRoute = createRoute({
  method: 'get',
  path: '/backup/plans/{backupPlanId}/selections/{selectionId}',
  description:
    'Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.',
  operationId: 'GetBackupSelection',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a backup plan.',
            schema: { type: 'string' },
          },
        }),
      selectionId: z
        .string()
        .openapi({
          param: {
            name: 'selectionId',
            in: 'path',
            required: true,
            description:
              'Uniquely identifies the body of a request to assign a set of resources to a backup plan.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackupSelectionOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteBackupPlansBackupPlanIdSelectionsSelectionIdRoute = createRoute({
  method: 'delete',
  path: '/backup/plans/{backupPlanId}/selections/{selectionId}',
  description:
    'Deletes the resource selection associated with a backup plan that is specified by the <code>SelectionId</code>.',
  operationId: 'DeleteBackupSelection',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a backup plan.',
            schema: { type: 'string' },
          },
        }),
      selectionId: z
        .string()
        .openapi({
          param: {
            name: 'selectionId',
            in: 'path',
            required: true,
            description:
              'Uniquely identifies the body of a request to assign a set of resources to a backup plan.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getBackupVaultsBackupVaultNameAccessPolicyRoute = createRoute({
  method: 'get',
  path: '/backup-vaults/{backupVaultName}/access-policy',
  description: 'Returns the access policy document that is associated with the named backup vault.',
  operationId: 'GetBackupVaultAccessPolicy',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackupVaultAccessPolicyOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putBackupVaultsBackupVaultNameAccessPolicyRoute = createRoute({
  method: 'put',
  path: '/backup-vaults/{backupVaultName}/access-policy',
  description:
    'Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.',
  operationId: 'PutBackupVaultAccessPolicy',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Policy: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The backup vault access policy document in JSON format.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
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
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteBackupVaultsBackupVaultNameAccessPolicyRoute = createRoute({
  method: 'delete',
  path: '/backup-vaults/{backupVaultName}/access-policy',
  description: 'Deletes the policy document that manages permissions on a backup vault.',
  operationId: 'DeleteBackupVaultAccessPolicy',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putBackupVaultsBackupVaultNameVaultLockRoute = createRoute({
  method: 'put',
  path: '/backup-vaults/{backupVaultName}/vault-lock',
  description:
    '<p>Applies Backup Vault Lock to a backup vault, preventing attempts to delete any recovery point stored in or created in a backup vault. Vault Lock also prevents attempts to update the lifecycle policy that controls the retention period of any recovery point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and maximum retention period for future backup and copy jobs that target a backup vault.</p> <note> <p>Backup Vault Lock has been assessed by Cohasset Associates for use in environments that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about how Backup Vault Lock relates to these regulations, see the <a href="samples/cohassetreport.zip">Cohasset Associates Compliance Assessment.</a> </p> </note>',
  operationId: 'PutBackupVaultLockConfiguration',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The Backup Vault Lock configuration that specifies the name of the backup vault it protects.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MinRetentionDays: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).</p> <p>If this parameter is not specified, Vault Lock will not enforce a minimum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. The shortest minimum retention period you can specify is 1 day. Recovery points already saved in the vault prior to Vault Lock are not affected.</p>",
                }),
              MaxRetentionDays: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).</p> <p>If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. The longest maximum retention period you can specify is 36500 days (approximately 100 years). Recovery points already saved in the vault prior to Vault Lock are not affected.</p>",
                }),
              ChangeableForDays: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting <code>ChangeableForDays</code> to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.</p> <p>Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set <code>ChangeableForDays</code> to 3 or greater.</p> <p>Before the lock date, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code>. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.</p> <p>If this parameter is not specified, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code> at any time.</p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
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
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteBackupVaultsBackupVaultNameVaultLockRoute = createRoute({
  method: 'delete',
  path: '/backup-vaults/{backupVaultName}/vault-lock',
  description:
    '<p>Deletes Backup Vault Lock from a backup vault specified by a backup vault name.</p> <p>If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using API operations, and you will receive an <code>InvalidRequestException</code> if you attempt to do so. For more information, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html">Vault Lock</a> in the <i>Backup Developer Guide</i>.</p>',
  operationId: 'DeleteBackupVaultLockConfiguration',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description: 'The name of the backup vault from which to delete Backup Vault Lock.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getBackupVaultsBackupVaultNameNotificationConfigurationRoute = createRoute({
  method: 'get',
  path: '/backup-vaults/{backupVaultName}/notification-configuration',
  description: 'Returns event notifications for the specified backup vault.',
  operationId: 'GetBackupVaultNotifications',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackupVaultNotificationsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putBackupVaultsBackupVaultNameNotificationConfigurationRoute = createRoute({
  method: 'put',
  path: '/backup-vaults/{backupVaultName}/notification-configuration',
  description: 'Turns on notifications on a backup vault for the specified topic and events.',
  operationId: 'PutBackupVaultNotifications',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SNSTopicArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.',
                }),
              BackupVaultEvents: z
                .array(BackupVaultEventSchema)
                .openapi({
                  description:
                    '<p>An array of events that indicate the status of jobs to back up resources to the backup vault.</p> <p>For common use cases and code samples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/sns-notifications.html">Using Amazon SNS to track Backup events</a>.</p> <p>The following events are supported:</p> <ul> <li> <p> <code>BACKUP_JOB_STARTED</code> | <code>BACKUP_JOB_COMPLETED</code> </p> </li> <li> <p> <code>COPY_JOB_STARTED</code> | <code>COPY_JOB_SUCCESSFUL</code> | <code>COPY_JOB_FAILED</code> </p> </li> <li> <p> <code>RESTORE_JOB_STARTED</code> | <code>RESTORE_JOB_COMPLETED</code> | <code>RECOVERY_POINT_MODIFIED</code> </p> </li> <li> <p> <code>S3_BACKUP_OBJECT_FAILED</code> | <code>S3_RESTORE_OBJECT_FAILED</code> </p> </li> </ul> <note> <p>The list below shows items that are deprecated events (for reference) and are no longer in use. They are no longer supported and will not return statuses or notifications. Refer to the list above for current supported events.</p> </note>',
                }),
            })
            .openapi({ required: ['SNSTopicArn', 'BackupVaultEvents'] }),
        },
      },
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
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteBackupVaultsBackupVaultNameNotificationConfigurationRoute = createRoute({
  method: 'delete',
  path: '/backup-vaults/{backupVaultName}/notification-configuration',
  description: 'Deletes event notifications for the specified backup vault.',
  operationId: 'DeleteBackupVaultNotifications',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAuditFrameworksFrameworkNameRoute = createRoute({
  method: 'get',
  path: '/audit/frameworks/{frameworkName}',
  description: 'Returns the framework details for the specified <code>FrameworkName</code>.',
  operationId: 'DescribeFramework',
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
      frameworkName: z
        .string()
        .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'frameworkName',
            in: 'path',
            required: true,
            description: 'The unique name of a framework.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z][_a-zA-Z0-9]*',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFrameworkOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putAuditFrameworksFrameworkNameRoute = createRoute({
  method: 'put',
  path: '/audit/frameworks/{frameworkName}',
  description:
    'Updates an existing framework identified by its <code>FrameworkName</code> with the input document in JSON format.',
  operationId: 'UpdateFramework',
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
      frameworkName: z
        .string()
        .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'frameworkName',
            in: 'path',
            required: true,
            description:
              'The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z][_a-zA-Z0-9]*',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FrameworkDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'An optional description of the framework with a maximum 1,024 characters.',
                }),
              FrameworkControls: z
                .array(FrameworkControlSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.',
                }),
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
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
      content: { 'application/json': { schema: UpdateFrameworkOutputSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteAuditFrameworksFrameworkNameRoute = createRoute({
  method: 'delete',
  path: '/audit/frameworks/{frameworkName}',
  description: 'Deletes the framework specified by a framework name.',
  operationId: 'DeleteFramework',
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
      frameworkName: z
        .string()
        .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'frameworkName',
            in: 'path',
            required: true,
            description: 'The unique name of a framework.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z][_a-zA-Z0-9]*',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute = createRoute({
  method: 'get',
  path: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}',
  description:
    'Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.',
  operationId: 'DescribeRecoveryPoint',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
      recoveryPointArn: z
        .string()
        .openapi({
          param: {
            name: 'recoveryPointArn',
            in: 'path',
            required: true,
            description:
              'An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRecoveryPointOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute = createRoute({
  method: 'post',
  path: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}',
  description:
    '<p>Sets the transition lifecycle of a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> <p>This operation does not support continuous backups.</p>',
  operationId: 'UpdateRecoveryPointLifecycle',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
      recoveryPointArn: z
        .string()
        .openapi({
          param: {
            name: 'recoveryPointArn',
            in: 'path',
            required: true,
            description:
              'An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Lifecycle: z
                .object({
                  MoveToColdStorageAfterDays: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the number of days after creation that a recovery point is moved to cold storage.',
                      }),
                  ).exactOptional(),
                  DeleteAfterDays: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
                  required: [],
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
      content: { 'application/json': { schema: UpdateRecoveryPointLifecycleOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute = createRoute({
  method: 'delete',
  path: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}',
  description:
    '<p>Deletes the recovery point specified by a recovery point ID.</p> <p>If the recovery point ID belongs to a continuous backup, calling this endpoint deletes the existing continuous backup and stops future continuous backup.</p> <p>When an IAM role\'s permissions are insufficient to call this API, the service sends back an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted. Instead, it enters an <code>EXPIRED</code> state.</p> <p> <code>EXPIRED</code> recovery points can be deleted with this API once the IAM role has the <code>iam:CreateServiceLinkedRole</code> action. To learn more about adding this role, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/deleting-backups.html#deleting-backups-troubleshooting"> Troubleshooting manual deletions</a>.</p> <p>If the user or role is deleted or the permission within the role is removed, the deletion will not be successful and will enter an <code>EXPIRED</code> state.</p>',
  operationId: 'DeleteRecoveryPoint',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
          },
        }),
      recoveryPointArn: z
        .string()
        .openapi({
          param: {
            name: 'recoveryPointArn',
            in: 'path',
            required: true,
            description:
              'An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const getAuditReportPlansReportPlanNameRoute = createRoute({
  method: 'get',
  path: '/audit/report-plans/{reportPlanName}',
  description:
    'Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.',
  operationId: 'DescribeReportPlan',
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
      reportPlanName: z
        .string()
        .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'reportPlanName',
            in: 'path',
            required: true,
            description: 'The unique name of a report plan.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z][_a-zA-Z0-9]*',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReportPlanOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putAuditReportPlansReportPlanNameRoute = createRoute({
  method: 'put',
  path: '/audit/report-plans/{reportPlanName}',
  description:
    'Updates an existing report plan identified by its <code>ReportPlanName</code> with the input document in JSON format.',
  operationId: 'UpdateReportPlan',
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
      reportPlanName: z
        .string()
        .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'reportPlanName',
            in: 'path',
            required: true,
            description:
              'The unique name of the report plan. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z][_a-zA-Z0-9]*',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ReportPlanDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'An optional description of the report plan with a maximum 1,024 characters.',
                }),
              ReportDeliveryChannel: z
                .object({
                  S3BucketName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The unique name of the S3 bucket that receives your reports.',
                      }),
                  ).exactOptional(),
                  S3KeyPrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/<code>prefix</code>/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.',
                      }),
                  ).exactOptional(),
                  Formats: FormatListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of the format of your reports: <code>CSV</code>, <code>JSON</code>, or both. If not specified, the default format is <code>CSV</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.',
                  required: [],
                }),
              ReportSetting: z
                .object({
                  ReportTemplate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Identifies the report template for the report. Reports are built using a report template. The report templates are:</p> <p> <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code> </p>',
                      }),
                  ).exactOptional(),
                  FrameworkArns: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Names (ARNs) of the frameworks a report covers.',
                      }),
                  ).exactOptional(),
                  NumberOfFrameworks: IntegerSchema.and(
                    z.any().openapi({ description: 'The number of frameworks a report covers.' }),
                  ).exactOptional(),
                  Accounts: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'These are the accounts to be included in the report.',
                      }),
                  ).exactOptional(),
                  OrganizationUnits: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'These are the Organizational Units to be included in the report.',
                      }),
                  ).exactOptional(),
                  Regions: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'These are the Regions to be included in the report.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains detailed information about a report setting.',
                  required: [],
                }),
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
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
      content: { 'application/json': { schema: UpdateReportPlanOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteAuditReportPlansReportPlanNameRoute = createRoute({
  method: 'delete',
  path: '/audit/report-plans/{reportPlanName}',
  description: 'Deletes the report plan specified by a report plan name.',
  operationId: 'DeleteReportPlan',
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
      reportPlanName: z
        .string()
        .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'reportPlanName',
            in: 'path',
            required: true,
            description: 'The unique name of a report plan.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z][_a-zA-Z0-9]*',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getBackupJobsBackupJobIdRoute = createRoute({
  method: 'get',
  path: '/backup-jobs/{backupJobId}',
  description: 'Returns backup job details for the specified <code>BackupJobId</code>.',
  operationId: 'DescribeBackupJob',
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
      backupJobId: z
        .string()
        .openapi({
          param: {
            name: 'backupJobId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a request to Backup to back up a resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBackupJobOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DependencyFailureException',
      content: { 'application/json': { schema: DependencyFailureExceptionSchema } },
    },
  },
})

export const postBackupJobsBackupJobIdRoute = createRoute({
  method: 'post',
  path: '/backup-jobs/{backupJobId}',
  description:
    '<p>Attempts to cancel a job to create a one-time backup of a resource.</p> <p>This action is not supported for the following services: Amazon FSx for Windows File Server, Amazon FSx for Lustre, FSx for ONTAP , Amazon FSx for OpenZFS, Amazon DocumentDB (with MongoDB compatibility), Amazon RDS, Amazon Aurora, and Amazon Neptune.</p>',
  operationId: 'StopBackupJob',
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
      backupJobId: z
        .string()
        .openapi({
          param: {
            name: 'backupJobId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a request to Backup to back up a resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getCopyJobsCopyJobIdRoute = createRoute({
  method: 'get',
  path: '/copy-jobs/{copyJobId}',
  description: 'Returns metadata associated with creating a copy of a resource.',
  operationId: 'DescribeCopyJob',
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
      copyJobId: z
        .string()
        .openapi({
          param: {
            name: 'copyJobId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a copy job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCopyJobOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getGlobalSettingsRoute = createRoute({
  method: 'get',
  path: '/global-settings',
  description:
    'Describes whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not a member of an Organizations organization. Example: <code>describe-global-settings --region us-west-2</code> ',
  operationId: 'DescribeGlobalSettings',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGlobalSettingsOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putGlobalSettingsRoute = createRoute({
  method: 'put',
  path: '/global-settings',
  description:
    'Updates whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not an Organizations management account. Use the <code>DescribeGlobalSettings</code> API to determine the current settings.',
  operationId: 'UpdateGlobalSettings',
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
              GlobalSettings: z
                .record(z.string(), GlobalSettingsValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example: <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false --region us-west-2</code>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const getResourcesResourceArnRoute = createRoute({
  method: 'get',
  path: '/resources/{resourceArn}',
  description:
    'Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved resource.',
  operationId: 'DescribeProtectedResource',
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
              'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProtectedResourceOutputSchema } },
    },
    480: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getAccountSettingsRoute = createRoute({
  method: 'get',
  path: '/account-settings',
  description:
    "Returns the current service opt-in settings for the Region. If service opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region.",
  operationId: 'DescribeRegionSettings',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRegionSettingsOutputSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putAccountSettingsRoute = createRoute({
  method: 'put',
  path: '/account-settings',
  description:
    "Updates the current service opt-in settings for the Region. If service-opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region. Use the <code>DescribeRegionSettings</code> API to determine the resource types that are supported.",
  operationId: 'UpdateRegionSettings',
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
              ResourceTypeOptInPreference: z
                .record(z.string(), IsEnabledSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Updates the list of services along with the opt-in preferences for the Region.',
                }),
              ResourceTypeManagementPreference: z
                .record(z.string(), IsEnabledSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Enables or disables full Backup management of backups for a resource type. To enable full Backup management for DynamoDB along with <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html"> Backup\'s advanced DynamoDB backup features</a>, follow the procedure to <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> enable advanced DynamoDB backup programmatically</a>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getAuditReportJobsReportJobIdRoute = createRoute({
  method: 'get',
  path: '/audit/report-jobs/{reportJobId}',
  description:
    'Returns the details associated with creating a report as specified by its <code>ReportJobId</code>.',
  operationId: 'DescribeReportJob',
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
      reportJobId: z
        .string()
        .openapi({
          param: {
            name: 'reportJobId',
            in: 'path',
            required: true,
            description:
              'The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReportJobOutputSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getRestoreJobsRestoreJobIdRoute = createRoute({
  method: 'get',
  path: '/restore-jobs/{restoreJobId}',
  description: 'Returns metadata associated with a restore job that is specified by a job ID.',
  operationId: 'DescribeRestoreJob',
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
      restoreJobId: z
        .string()
        .openapi({
          param: {
            name: 'restoreJobId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies the job that restores a recovery point.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRestoreJobOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DependencyFailureException',
      content: { 'application/json': { schema: DependencyFailureExceptionSchema } },
    },
  },
})

export const postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateRoute =
  createRoute({
    method: 'post',
    path: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/disassociate',
    description:
      '<p>Deletes the specified continuous backup recovery point from Backup and releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the lifecycle that you specified in your original backup plan.</p> <p>Does not support snapshot backup recovery points.</p>',
    operationId: 'DisassociateRecoveryPoint',
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
        backupVaultName: z
          .string()
          .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
          .openapi({
            param: {
              name: 'backupVaultName',
              in: 'path',
              required: true,
              description: 'The unique name of an Backup vault.',
              schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
            },
          }),
        recoveryPointArn: z
          .string()
          .openapi({
            param: {
              name: 'recoveryPointArn',
              in: 'path',
              required: true,
              description:
                'An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery point.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      482: {
        description: 'MissingParameterValueException',
        content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
      },
      483: {
        description: 'InvalidResourceStateException',
        content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
      },
      484: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      485: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
    },
  })

export const deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationRoute =
  createRoute({
    method: 'delete',
    path: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/parentAssociation',
    description:
      'This action to a specific child (nested) recovery point removes the relationship between the specified recovery point and its parent (composite) recovery point.',
    operationId: 'DisassociateRecoveryPointFromParent',
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
        backupVaultName: z
          .string()
          .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
          .openapi({
            param: {
              name: 'backupVaultName',
              in: 'path',
              required: true,
              description:
                'This is the name of a logical container where the child (nested) recovery point is stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
              schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
            },
          }),
        recoveryPointArn: z
          .string()
          .openapi({
            param: {
              name: 'recoveryPointArn',
              in: 'path',
              required: true,
              description:
                'This is the Amazon Resource Name (ARN) that uniquely identifies the child (nested) recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</code> ',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      482: {
        description: 'MissingParameterValueException',
        content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
      },
      483: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      484: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
    },
  })

export const getBackupPlansBackupPlanIdToTemplateIndexRoute = createRoute({
  method: 'get',
  path: '/backup/plans/{backupPlanId}/toTemplate/',
  description: 'Returns the backup plan that is specified by the plan ID as a backup template.',
  operationId: 'ExportBackupPlanTemplate',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a backup plan.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportBackupPlanTemplateOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getBackupPlansBackupPlanIdIndexRoute = createRoute({
  method: 'get',
  path: '/backup/plans/{backupPlanId}/',
  description:
    'Returns <code>BackupPlan</code> details for the specified <code>BackupPlanId</code>. The details are the body of a backup plan in JSON format, in addition to plan metadata.',
  operationId: 'GetBackupPlan',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a backup plan.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      versionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'versionId',
            in: 'query',
            required: false,
            description:
              'Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackupPlanOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postBackupTemplateJsonToPlanRoute = createRoute({
  method: 'post',
  path: '/backup/template/json/toPlan',
  description: 'Returns a valid JSON document specifying a backup plan or an error.',
  operationId: 'GetBackupPlanFromJSON',
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
              BackupPlanTemplateJson: z
                .string()
                .openapi({
                  description: 'A customer-supplied backup plan document in JSON format.',
                }),
            })
            .openapi({ required: ['BackupPlanTemplateJson'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackupPlanFromJSONOutputSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const getBackupTemplatePlansTemplateIdToPlanRoute = createRoute({
  method: 'get',
  path: '/backup/template/plans/{templateId}/toPlan',
  description: 'Returns the template specified by its <code>templateId</code> as a backup plan.',
  operationId: 'GetBackupPlanFromTemplate',
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
      templateId: z
        .string()
        .openapi({
          param: {
            name: 'templateId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a stored backup plan template.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackupPlanFromTemplateOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getLegalHoldsLegalHoldIdIndexRoute = createRoute({
  method: 'get',
  path: '/legal-holds/{legalHoldId}/',
  description:
    'This action returns details for a specified legal hold. The details are the body of a legal hold in JSON format, in addition to metadata.',
  operationId: 'GetLegalHold',
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
      legalHoldId: z
        .string()
        .openapi({
          param: {
            name: 'legalHoldId',
            in: 'path',
            required: true,
            description:
              'This is the ID required to use <code>GetLegalHold</code>. This unique ID is associated with a specific legal hold.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLegalHoldOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataRoute =
  createRoute({
    method: 'get',
    path: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/restore-metadata',
    description: 'Returns a set of metadata key-value pairs that were used to create the backup.',
    operationId: 'GetRecoveryPointRestoreMetadata',
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
        backupVaultName: z
          .string()
          .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
          .openapi({
            param: {
              name: 'backupVaultName',
              in: 'path',
              required: true,
              description:
                'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
              schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
            },
          }),
        recoveryPointArn: z
          .string()
          .openapi({
            param: {
              name: 'recoveryPointArn',
              in: 'path',
              required: true,
              description:
                'An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetRecoveryPointRestoreMetadataOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      482: {
        description: 'MissingParameterValueException',
        content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
      },
      483: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
    },
  })

export const getSupportedResourceTypesRoute = createRoute({
  method: 'get',
  path: '/supported-resource-types',
  description: 'Returns the Amazon Web Services resource types supported by Backup.',
  operationId: 'GetSupportedResourceTypes',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSupportedResourceTypesOutputSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getBackupJobsIndexRoute = createRoute({
  method: 'get',
  path: '/backup-jobs/',
  description:
    'Returns a list of existing backup jobs for an authenticated account for the last 30 days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.',
  operationId: 'ListBackupJobs',
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
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      resourceArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: false,
            description:
              'Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).',
            schema: { type: 'string' },
          },
        }),
      state: z
        .enum([
          'CREATED',
          'PENDING',
          'RUNNING',
          'ABORTING',
          'ABORTED',
          'COMPLETED',
          'FAILED',
          'EXPIRED',
          'PARTIAL',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            description: 'Returns only backup jobs that are in the specified state.',
            schema: {
              type: 'string',
              enum: [
                'CREATED',
                'PENDING',
                'RUNNING',
                'ABORTING',
                'ABORTED',
                'COMPLETED',
                'FAILED',
                'EXPIRED',
                'PARTIAL',
              ],
            },
          },
        }),
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'query',
            required: false,
            description:
              'Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
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
            description: 'Returns only backup jobs that were created before the specified date.',
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
            description: 'Returns only backup jobs that were created after the specified date.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      resourceType: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description:
              '<p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_\\.]{1,50}$' },
          },
        }),
      accountId: z
        .string()
        .regex(/^[0-9]{12}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            required: false,
            description:
              '<p>The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID.</p> <p>If used from an Organizations management account, passing <code>*</code> returns all jobs across the organization.</p>',
            schema: { type: 'string', pattern: '^[0-9]{12}$' },
          },
        }),
      completeAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'completeAfter',
            in: 'query',
            required: false,
            description:
              'Returns only backup jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      completeBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'completeBefore',
            in: 'query',
            required: false,
            description:
              'Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      parentJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'parentJobId',
            in: 'query',
            required: false,
            description: 'This is a filter to list child (nested) jobs based on parent job ID.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListBackupJobsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getBackupTemplatePlansRoute = createRoute({
  method: 'get',
  path: '/backup/template/plans',
  description:
    'Returns metadata of your saved backup plan templates, including the template ID, name, and the creation and deletion dates.',
  operationId: 'ListBackupPlanTemplates',
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
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListBackupPlanTemplatesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getBackupPlansBackupPlanIdVersionsIndexRoute = createRoute({
  method: 'get',
  path: '/backup/plans/{backupPlanId}/versions/',
  description:
    'Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.',
  operationId: 'ListBackupPlanVersions',
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
      backupPlanId: z
        .string()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'path',
            required: true,
            description: 'Uniquely identifies a backup plan.',
            schema: { type: 'string' },
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
            required: false,
            description:
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListBackupPlanVersionsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getBackupVaultsIndexRoute = createRoute({
  method: 'get',
  path: '/backup-vaults/',
  description:
    'Returns a list of recovery point storage containers along with information about them.',
  operationId: 'ListBackupVaults',
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
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListBackupVaultsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getCopyJobsIndexRoute = createRoute({
  method: 'get',
  path: '/copy-jobs/',
  description: 'Returns metadata about your copy jobs.',
  operationId: 'ListCopyJobs',
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
              'The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token. ',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      resourceArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: false,
            description:
              'Returns only copy jobs that match the specified resource Amazon Resource Name (ARN). ',
            schema: { type: 'string' },
          },
        }),
      state: z
        .enum(['CREATED', 'RUNNING', 'COMPLETED', 'FAILED', 'PARTIAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            description: 'Returns only copy jobs that are in the specified state.',
            schema: {
              type: 'string',
              enum: ['CREATED', 'RUNNING', 'COMPLETED', 'FAILED', 'PARTIAL'],
            },
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
            description: 'Returns only copy jobs that were created before the specified date.',
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
            description: 'Returns only copy jobs that were created after the specified date.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      resourceType: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description:
              '<p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_\\.]{1,50}$' },
          },
        }),
      destinationVaultArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'destinationVaultArn',
            in: 'query',
            required: false,
            description:
              'An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>. ',
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .regex(/^[0-9]{12}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            required: false,
            description:
              'The account ID to list the jobs from. Returns only copy jobs associated with the specified account ID.',
            schema: { type: 'string', pattern: '^[0-9]{12}$' },
          },
        }),
      completeBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'completeBefore',
            in: 'query',
            required: false,
            description:
              'Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      completeAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'completeAfter',
            in: 'query',
            required: false,
            description:
              'Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      parentJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'parentJobId',
            in: 'query',
            required: false,
            description: 'This is a filter to list child (nested) jobs based on parent job ID.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListCopyJobsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getResourcesIndexRoute = createRoute({
  method: 'get',
  path: '/resources/',
  description:
    'Returns an array of resources successfully backed up by Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.',
  operationId: 'ListProtectedResources',
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
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListProtectedResourcesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getBackupVaultsBackupVaultNameRecoveryPointsIndexRoute = createRoute({
  method: 'get',
  path: '/backup-vaults/{backupVaultName}/recovery-points/',
  description: 'Returns detailed information about the recovery points stored in a backup vault.',
  operationId: 'ListRecoveryPointsByBackupVault',
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
      backupVaultName: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
        .openapi({
          param: {
            name: 'backupVaultName',
            in: 'path',
            required: true,
            description:
              '<p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p> <note> <p>Backup vault name might not be available when a supported service creates the backup.</p> </note>',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_]{2,50}$' },
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
            required: false,
            description:
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      resourceArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: false,
            description:
              'Returns only recovery points that match the specified resource Amazon Resource Name (ARN).',
            schema: { type: 'string' },
          },
        }),
      resourceType: z
        .string()
        .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description: 'Returns only recovery points that match the specified resource type.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9\\-\\_\\.]{1,50}$' },
          },
        }),
      backupPlanId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'backupPlanId',
            in: 'query',
            required: false,
            description: 'Returns only recovery points that match the specified backup plan ID.',
            schema: { type: 'string' },
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
              'Returns only recovery points that were created before the specified timestamp.',
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
              'Returns only recovery points that were created after the specified timestamp.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      parentRecoveryPointArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'parentRecoveryPointArn',
            in: 'query',
            required: false,
            description:
              'This returns only recovery points that match the specified parent (composite) recovery point Amazon Resource Name (ARN).',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListRecoveryPointsByBackupVaultOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getLegalHoldsLegalHoldIdRecoveryPointsRoute = createRoute({
  method: 'get',
  path: '/legal-holds/{legalHoldId}/recovery-points',
  description:
    'This action returns recovery point ARNs (Amazon Resource Names) of the specified legal hold.',
  operationId: 'ListRecoveryPointsByLegalHold',
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
      legalHoldId: z
        .string()
        .openapi({
          param: {
            name: 'legalHoldId',
            in: 'path',
            required: true,
            description: 'This is the ID of the legal hold.',
            schema: { type: 'string' },
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
            required: false,
            description:
              'This is the next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'This is the maximum number of resource list items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListRecoveryPointsByLegalHoldOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getResourcesResourceArnRecoveryPointsIndexRoute = createRoute({
  method: 'get',
  path: '/resources/{resourceArn}/recovery-points/',
  description:
    '<p>Returns detailed information about all the recovery points of the type specified by a resource Amazon Resource Name (ARN).</p> <note> <p>For Amazon EFS and Amazon EC2, this action only lists recovery points created by Backup.</p> </note>',
  operationId: 'ListRecoveryPointsByResource',
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
              'An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.',
            schema: { type: 'string' },
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
            required: false,
            description:
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of items to be returned.</p> <note> <p>Amazon RDS requires a value of at least 20.</p> </note>',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListRecoveryPointsByResourceOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAuditReportJobsRoute = createRoute({
  method: 'get',
  path: '/audit/report-jobs',
  description: 'Returns details about your report jobs.',
  operationId: 'ListReportJobs',
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
      ReportPlanName: z
        .string()
        .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'ReportPlanName',
            in: 'query',
            required: false,
            description: 'Returns only report jobs with the specified report plan name.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z][_a-zA-Z0-9]*',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
      CreationBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'CreationBefore',
            in: 'query',
            required: false,
            description:
              'Returns only report jobs that were created before the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      CreationAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'CreationAfter',
            in: 'query',
            required: false,
            description:
              'Returns only report jobs that were created after the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      Status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Status',
            in: 'query',
            required: false,
            description:
              '<p>Returns only report jobs that are in the specified status. The statuses are:</p> <p> <code>CREATED | RUNNING | COMPLETED | FAILED</code> </p>',
            schema: { type: 'string' },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReportJobsOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getRestoreJobsIndexRoute = createRoute({
  method: 'get',
  path: '/restore-jobs/',
  description:
    'Returns a list of jobs that Backup initiated to restore a saved resource, including details about the recovery process.',
  operationId: 'ListRestoreJobs',
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
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      accountId: z
        .string()
        .regex(/^[0-9]{12}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            required: false,
            description:
              'The account ID to list the jobs from. Returns only restore jobs associated with the specified account ID.',
            schema: { type: 'string', pattern: '^[0-9]{12}$' },
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
            description: 'Returns only restore jobs that were created before the specified date.',
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
            description: 'Returns only restore jobs that were created after the specified date.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      status: z
        .enum(['PENDING', 'RUNNING', 'COMPLETED', 'ABORTED', 'FAILED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description: 'Returns only restore jobs associated with the specified job status.',
            schema: {
              type: 'string',
              enum: ['PENDING', 'RUNNING', 'COMPLETED', 'ABORTED', 'FAILED'],
            },
          },
        }),
      completeBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'completeBefore',
            in: 'query',
            required: false,
            description:
              'Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      completeAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'completeAfter',
            in: 'query',
            required: false,
            description:
              'Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).',
            schema: { type: 'string', format: 'date-time' },
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
      content: { 'application/json': { schema: ListRestoreJobsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getTagsResourceArnIndexRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}/',
  description:
    '<p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or backup vault.</p> <p> <code>ListTags</code> only works for resource types that support full Backup management of their backups. Those resource types are listed in the "Full Backup management" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table.</p>',
  operationId: 'ListTags',
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
              'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the type of resource. Valid targets for <code>ListTags</code> are recovery points, backup plans, and backup vaults.',
            schema: { type: 'string' },
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
            required: false,
            description:
              'The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of items to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
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
      content: { 'application/json': { schema: ListTagsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putBackupJobsRoute = createRoute({
  method: 'put',
  path: '/backup-jobs',
  description: 'Starts an on-demand backup job for the specified resource.',
  operationId: 'StartBackupJob',
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
              BackupVaultName: z
                .string()
                .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
                .openapi({
                  description:
                    'The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
                }),
              ResourceArn: z
                .string()
                .openapi({
                  description:
                    'An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.',
                }),
              IamRoleArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
                }),
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartBackupJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
                }),
              StartWindowMinutes: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional, and the default is 8 hours. If this value is included, it must be at least 60 minutes to avoid errors.",
                }),
              CompleteWindowMinutes: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'A value in minutes during which a successfully started backup must complete, or else Backup will cancel the job. This value is optional. This value begins counting down from when the backup was scheduled. It does not add additional time for <code>StartWindowMinutes</code>, or if the backup started later than scheduled.',
                }),
              Lifecycle: z
                .object({
                  MoveToColdStorageAfterDays: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the number of days after creation that a recovery point is moved to cold storage.',
                      }),
                  ).exactOptional(),
                  DeleteAfterDays: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
                  required: [],
                }),
              RecoveryPointTags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.',
                }),
              BackupOptions: z
                .record(z.string(), BackupOptionValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p> <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to <code>"WindowsVSS""disabled"</code> to create a regular backup. The <code>WindowsVSS</code> option is not enabled by default.</p>',
                }),
            })
            .openapi({ required: ['BackupVaultName', 'ResourceArn', 'IamRoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartBackupJobOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const putCopyJobsRoute = createRoute({
  method: 'put',
  path: '/copy-jobs',
  description:
    '<p>Starts a job to create a one-time copy of the specified resource.</p> <p>Does not support continuous backups.</p>',
  operationId: 'StartCopyJob',
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
              RecoveryPointArn: z
                .string()
                .openapi({
                  description:
                    'An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. ',
                }),
              SourceBackupVaultName: z
                .string()
                .regex(/^[a-zA-Z0-9\-\_]{2,50}$/)
                .openapi({
                  description:
                    'The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.',
                }),
              DestinationBackupVaultArn: z
                .string()
                .openapi({
                  description:
                    'An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.',
                }),
              IamRoleArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the IAM role ARN used to copy the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.',
                }),
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
                }),
              Lifecycle: z
                .object({
                  MoveToColdStorageAfterDays: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the number of days after creation that a recovery point is moved to cold storage.',
                      }),
                  ).exactOptional(),
                  DeleteAfterDays: LongSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>',
                  required: [],
                }),
            })
            .openapi({
              required: [
                'RecoveryPointArn',
                'SourceBackupVaultName',
                'DestinationBackupVaultArn',
                'IamRoleArn',
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
      content: { 'application/json': { schema: StartCopyJobOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postAuditReportJobsReportPlanNameRoute = createRoute({
  method: 'post',
  path: '/audit/report-jobs/{reportPlanName}',
  description: 'Starts an on-demand report job for the specified report plan.',
  operationId: 'StartReportJob',
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
      reportPlanName: z
        .string()
        .regex(/[a-zA-Z][_a-zA-Z0-9]*/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'reportPlanName',
            in: 'path',
            required: true,
            description: 'The unique name of a report plan.',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z][_a-zA-Z0-9]*',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartReportJobInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
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
      content: { 'application/json': { schema: StartReportJobOutputSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putRestoreJobsRoute = createRoute({
  method: 'put',
  path: '/restore-jobs',
  description: 'Recovers the saved resource identified by an Amazon Resource Name (ARN).',
  operationId: 'StartRestoreJob',
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
              RecoveryPointArn: z
                .string()
                .openapi({
                  description:
                    'An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.',
                }),
              Metadata: z
                .record(z.string(), MetadataValueSchema)
                .openapi({
                  description:
                    '<p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: The ID of the Amazon EFS file system that is backed up by Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the Amazon Web Services KMS key that is used to encrypt the restored file system. You can specify a key from another Amazon Web Services account provided that key it is properly shared with your account via Amazon Web Services KMS.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> <li> <p> <code>ItemsToRestore</code>: An array of one to five strings where each string is a file path. Use <code>ItemsToRestore</code> to restore specific files or directories rather than the entire file system. This parameter is optional. For example, <code>"itemsToRestore":"[\\"/my.test\\"]"</code>.</p> </li> </ul>',
                }),
              IamRoleArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: <code>arn:aws:iam::123456789012:role/S3Access</code>.',
                }),
              IdempotencyToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartRestoreJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.',
                }),
              ResourceType: z
                .string()
                .regex(/^[a-zA-Z0-9\-\_\.]{1,50}$/)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['RecoveryPointArn', 'Metadata'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartRestoreJobOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    'Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN).',
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
            description:
              'An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .openapi({
                  description:
                    'Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. For clarity, this is the structure to assign tags: <code>[{"Key":"string","Value":"string"}]</code>.',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
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
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postUntagResourceArnRoute = createRoute({
  method: 'post',
  path: '/untag/{resourceArn}',
  description:
    'Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN)',
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
              'An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TagKeyList: z
                .array(StringSchema)
                .openapi({
                  description:
                    'A list of keys to identify which key-value tags to remove from a resource.',
                }),
            })
            .openapi({ required: ['TagKeyList'] }),
        },
      },
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
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'MissingParameterValueException',
      content: { 'application/json': { schema: MissingParameterValueExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})
