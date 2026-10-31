import { createRoute, z } from '@hono/zod-openapi'

const PolicyIdSchema = z
  .string()
  .regex(/policy-[A-Za-z0-9]+/)
  .min(0)
  .max(64)
  .openapi('PolicyId')

const CreateLifecyclePolicyResponseSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The identifier of the lifecycle policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLifecyclePolicyResponse')

const PolicyTypeValuesSchema = z
  .enum(['EBS_SNAPSHOT_MANAGEMENT', 'IMAGE_MANAGEMENT', 'EVENT_BASED_POLICY'])
  .openapi('PolicyTypeValues')

const ResourceTypeValuesSchema = z.enum(['VOLUME', 'INSTANCE']).openapi('ResourceTypeValues')

const ResourceTypeValuesListSchema = z
  .array(ResourceTypeValuesSchema)
  .length(1)
  .openapi('ResourceTypeValuesList')

const ResourceLocationValuesSchema = z.enum(['CLOUD', 'OUTPOST']).openapi('ResourceLocationValues')

const ResourceLocationListSchema = z
  .array(ResourceLocationValuesSchema)
  .length(1)
  .openapi('ResourceLocationList')

const StringSchema = z
  .string()
  .min(0)
  .max(500)
  .openapi({ pattern: '[\\p{all}]*' })
  .openapi('String')

const TagSchema = z
  .object({
    Key: StringSchema.and(z.any().openapi({ description: 'The tag key.' })),
    Value: StringSchema.and(z.any().openapi({ description: 'The tag value.' })),
  })
  .openapi({ required: ['Key', 'Value'], description: 'Specifies a tag for a resource.' })
  .openapi('Tag')

const TargetTagListSchema = z.array(TagSchema).min(1).max(50).openapi('TargetTagList')

const ScheduleNameSchema = z
  .string()
  .regex(/[0-9A-Za-z _-]+/)
  .min(0)
  .max(120)
  .openapi('ScheduleName')

const CopyTagsSchema = z.boolean().openapi('CopyTags')

const TagsToAddListSchema = z.array(TagSchema).min(0).max(45).openapi('TagsToAddList')

const VariableTagsListSchema = z.array(TagSchema).min(0).max(45).openapi('VariableTagsList')

const LocationValuesSchema = z.enum(['CLOUD', 'OUTPOST_LOCAL']).openapi('LocationValues')

const IntervalSchema = z.int().min(1).openapi('Interval')

const IntervalUnitValuesSchema = z.literal('HOURS').openapi('IntervalUnitValues')

const TimeSchema = z
  .string()
  .regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
  .length(5)
  .openapi('Time')

const TimesListSchema = z.array(TimeSchema).max(1).openapi('TimesList')

const CronExpressionSchema = z
  .string()
  .regex(/cron\([^\n]{11,100}\)/)
  .min(17)
  .max(106)
  .openapi('CronExpression')

const CreateRuleSchema = z
  .object({
    Location: LocationValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>[Snapshot policies only]</b> Specifies the destination for snapshots created by the policy. To create snapshots in the same Region as the source resource, specify <code>CLOUD</code>. To create snapshots on the same Outpost as the source resource, specify <code>OUTPOST_LOCAL</code>. If you omit this parameter, <code>CLOUD</code> is used by default.</p> <p>If the policy targets resources in an Amazon Web Services Region, then you must create snapshots in the same Region as the source resource. If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost as the source resource, or in the Region of that Outpost.</p>',
        }),
    ).exactOptional(),
    Interval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.',
        }),
    ).exactOptional(),
    IntervalUnit: IntervalUnitValuesSchema.and(
      z.any().openapi({ description: 'The interval unit.' }),
    ).exactOptional(),
    Times: TimesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time, in UTC, to start the operation. The supported format is hh:mm.</p> <p>The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.</p>',
        }),
    ).exactOptional(),
    CronExpression: CronExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron expressions</a> in the <i>Amazon CloudWatch User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>[Snapshot and AMI policies only]</b> Specifies when the policy should create snapshots or AMIs.</p> <note> <ul> <li> <p>You must specify either <b>CronExpression</b>, or <b>Interval</b>, <b>IntervalUnit</b>, and <b>Times</b>.</p> </li> <li> <p>If you need to specify an <a>ArchiveRule</a> for the schedule, then you must specify a creation frequency of at least 28 days.</p> </li> </ul> </note>',
    required: [],
  })
  .openapi('CreateRule')

const StandardTierRetainRuleCountSchema = z
  .int()
  .min(0)
  .max(1000)
  .openapi('StandardTierRetainRuleCount')

const StandardTierRetainRuleIntervalSchema = z
  .int()
  .min(0)
  .openapi('StandardTierRetainRuleInterval')

const RetentionIntervalUnitValuesSchema = z
  .enum(['DAYS', 'WEEKS', 'MONTHS', 'YEARS'])
  .openapi('RetentionIntervalUnitValues')

const RetainRuleSchema = z
  .object({
    Count: StandardTierRetainRuleCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of snapshots to retain for each volume, up to a maximum of 1000. For example if you want to retain a maximum of three snapshots, specify <code>3</code>. When the fourth snapshot is created, the oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an <a>ArchiveRule</a>.',
        }),
    ).exactOptional(),
    Interval: StandardTierRetainRuleIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.',
        }),
    ).exactOptional(),
    IntervalUnit: RetentionIntervalUnitValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit of time for time-based retention. For example, to retain snapshots for 3 months, specify <code>Interval=3</code> and <code>IntervalUnit=MONTHS</code>. Once the snapshot has been retained for 3 months, it is deleted, or it is moved to the archive tier if you have specified an <a>ArchiveRule</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>[Snapshot and AMI policies only]</b> Specifies a retention rule for snapshots created by snapshot policies, or for AMIs created by AMI policies.</p> <note> <p>For snapshot policies that have an <a>ArchiveRule</a>, this retention rule applies to standard tier retention. When the retention threshold is met, snapshots are moved from the standard to the archive tier.</p> <p>For snapshot policies that do not have an <b>ArchiveRule</b>, snapshots are permanently deleted when this retention threshold is met.</p> </note> <p>You can retain snapshots based on either a count or a time interval.</p> <ul> <li> <p> <b>Count-based retention</b> </p> <p>You must specify <b>Count</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention count of <code>0</code> to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention count of <code>1</code> or more.</p> </li> <li> <p> <b>Age-based retention</b> </p> <p>You must specify <b>Interval</b> and <b>IntervalUnit</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention interval of <code>0</code> days to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention interval of <code>1</code> day or more.</p> </li> </ul>',
    required: [],
  })
  .openapi('RetainRule')

const CountSchema = z.int().min(1).max(1000).openapi('Count')

const AvailabilityZoneSchema = z
  .string()
  .regex(/([a-z]+-){2,3}\d[a-z]/)
  .min(0)
  .max(16)
  .openapi('AvailabilityZone')

const AvailabilityZoneListSchema = z
  .array(AvailabilityZoneSchema)
  .min(1)
  .max(10)
  .openapi('AvailabilityZoneList')

const FastRestoreRuleSchema = z
  .object({
    Count: CountSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of snapshots to be enabled with fast snapshot restore.',
        }),
    ).exactOptional(),
    Interval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.',
        }),
    ).exactOptional(),
    IntervalUnit: RetentionIntervalUnitValuesSchema.and(
      z.any().openapi({ description: 'The unit of time for enabling fast snapshot restore.' }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZoneListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Availability Zones in which to enable fast snapshot restore.',
        }),
    ),
  })
  .openapi({
    required: ['AvailabilityZones'],
    description:
      ' <b>[Snapshot policies only]</b> Specifies a rule for enabling fast snapshot restore for snapshots created by snapshot policies. You can enable fast snapshot restore based on either a count or a time interval.',
  })
  .openapi('FastRestoreRule')

const TargetRegionSchema = z
  .string()
  .regex(/([a-z]+-){2,3}\d/)
  .min(0)
  .max(16)
  .openapi('TargetRegion')

const TargetSchema = z
  .string()
  .regex(/^[\w:\-\/\*]+$/)
  .min(0)
  .max(2048)
  .openapi('Target')

const EncryptedSchema = z.boolean().openapi('Encrypted')

const CmkArnSchema = z
  .string()
  .regex(/arn:aws(-[a-z]{1,3}){0,2}:kms:([a-z]+-){2,3}\d:\d+:key\/.*/)
  .min(0)
  .max(2048)
  .openapi('CmkArn')

const CopyTagsNullableSchema = z.boolean().openapi('CopyTagsNullable')

const CrossRegionCopyRetainRuleSchema = z
  .object({
    Interval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.',
        }),
    ).exactOptional(),
    IntervalUnit: RetentionIntervalUnitValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit of time for time-based retention. For example, to retain a cross-Region copy for 3 months, specify <code>Interval=3</code> and <code>IntervalUnit=MONTHS</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.',
    required: [],
  })
  .openapi('CrossRegionCopyRetainRule')

const CrossRegionCopyDeprecateRuleSchema = z
  .object({
    Interval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The period after which to deprecate the cross-Region AMI copies. The period must be less than or equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.",
        }),
    ).exactOptional(),
    IntervalUnit: RetentionIntervalUnitValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit of time in which to measure the <b>Interval</b>. For example, to deprecate a cross-Region AMI copy after 3 months, specify <code>Interval=3</code> and <code>IntervalUnit=MONTHS</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' <b>[AMI policies only]</b> Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy.',
    required: [],
  })
  .openapi('CrossRegionCopyDeprecateRule')

const CrossRegionCopyRuleSchema = z
  .object({
    TargetRegion: TargetRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>Avoid using this parameter when creating new policies. Instead, use <b>Target</b> to specify a target Region or a target Outpost for snapshot copies.</p> <p>For policies created before the <b>Target</b> parameter was introduced, this parameter indicates the target Region for snapshot copies.</p> </note>',
        }),
    ).exactOptional(),
    Target: TargetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.</p> <p>Use this parameter instead of <b>TargetRegion</b>. Do not specify both.</p>',
        }),
    ).exactOptional(),
    Encrypted: EncryptedSchema.and(
      z
        .any()
        .openapi({
          description:
            'To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled.',
        }),
    ),
    CmkArn: CmkArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.',
        }),
    ).exactOptional(),
    CopyTags: CopyTagsNullableSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to copy all user-defined tags from the source snapshot or AMI to the cross-Region copy.',
        }),
    ).exactOptional(),
    RetainRule: CrossRegionCopyRetainRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retention rule that indicates how long the cross-Region snapshot or AMI copies are to be retained in the destination Region.',
        }),
    ).exactOptional(),
    DeprecateRule: CrossRegionCopyDeprecateRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[AMI policies only]</b> The AMI deprecation rule for cross-Region AMI copies created by the rule.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Encrypted'],
    description:
      '<p> <b>[Snapshot and AMI policies only]</b> Specifies a cross-Region copy rule for snapshot and AMI policies.</p> <note> <p>To specify a cross-Region copy action for event-based polices, use <a>CrossRegionCopyAction</a>.</p> </note>',
  })
  .openapi('CrossRegionCopyRule')

const CrossRegionCopyRulesSchema = z
  .array(CrossRegionCopyRuleSchema)
  .min(0)
  .max(3)
  .openapi('CrossRegionCopyRules')

const AwsAccountIdSchema = z
  .string()
  .regex(/^[0-9]{12}$/)
  .length(12)
  .openapi('AwsAccountId')

const ShareTargetAccountListSchema = z
  .array(AwsAccountIdSchema)
  .min(1)
  .openapi('ShareTargetAccountList')

const ShareRuleSchema = z
  .object({
    TargetAccounts: ShareTargetAccountListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the Amazon Web Services accounts with which to share the snapshots.',
        }),
    ),
    UnshareInterval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period after which snapshots that are shared with other Amazon Web Services accounts are automatically unshared.',
        }),
    ).exactOptional(),
    UnshareIntervalUnit: RetentionIntervalUnitValuesSchema.and(
      z.any().openapi({ description: 'The unit of time for the automatic unsharing interval.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TargetAccounts'],
    description:
      ' <b>[Snapshot policies only]</b> Specifies a rule for sharing snapshots across Amazon Web Services accounts.',
  })
  .openapi('ShareRule')

const ShareRulesSchema = z.array(ShareRuleSchema).min(0).max(1).openapi('ShareRules')

const DeprecateRuleSchema = z
  .object({
    Count: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the schedule has a count-based retention rule, this parameter specifies the number of oldest AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it can't be greater than 1000.",
        }),
    ).exactOptional(),
    Interval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the schedule has an age-based retention rule, this parameter specifies the period after which to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.",
        }),
    ).exactOptional(),
    IntervalUnit: RetentionIntervalUnitValuesSchema.and(
      z.any().openapi({ description: 'The unit of time in which to measure the <b>Interval</b>.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>[AMI policies only]</b> Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.</p> <p>For age-based schedules, you must specify <b>Interval</b> and <b>IntervalUnit</b>. For count-based schedules, you must specify <b>Count</b>.</p>',
    required: [],
  })
  .openapi('DeprecateRule')

const RetentionArchiveTierSchema = z
  .object({
    Count: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of snapshots to retain in the archive storage tier for each volume. The count must ensure that each snapshot remains in the archive tier for at least 90 days. For example, if the schedule creates snapshots every 30 days, you must specify a count of 3 or more to ensure that each snapshot is archived for at least 90 days.',
        }),
    ).exactOptional(),
    Interval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the period of time to retain snapshots in the archive tier. After this period expires, the snapshot is permanently deleted.',
        }),
    ).exactOptional(),
    IntervalUnit: RetentionIntervalUnitValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit of time in which to measure the <b>Interval</b>. For example, to retain a snapshots in the archive tier for 6 months, specify <code>Interval=6</code> and <code>IntervalUnit=MONTHS</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>[Snapshot policies only]</b> Describes the retention rule for archived snapshots. Once the archive retention threshold is met, the snapshots are permanently deleted from the archive tier.</p> <note> <p>The archive retention rule must retain snapshots in the archive tier for a minimum of 90 days.</p> </note> <p>For <b>count-based schedules</b>, you must specify <b>Count</b>. For <b>age-based schedules</b>, you must specify <b>Interval</b> and <b> IntervalUnit</b>.</p> <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for snapshot lifecycle policies</a>.</p>',
    required: [],
  })
  .openapi('RetentionArchiveTier')

const ArchiveRetainRuleSchema = z
  .object({
    RetentionArchiveTier: RetentionArchiveTierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about retention period in the Amazon EBS Snapshots Archive. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/snapshot-archive.html">Archive Amazon EBS snapshots</a>.',
        }),
    ),
  })
  .openapi({
    required: ['RetentionArchiveTier'],
    description:
      ' <b>[Snapshot policies only]</b> Specifies information about the archive storage tier retention period.',
  })
  .openapi('ArchiveRetainRule')

const ArchiveRuleSchema = z
  .object({
    RetainRule: ArchiveRetainRuleSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the retention period for the snapshot archiving rule.',
        }),
    ),
  })
  .openapi({
    required: ['RetainRule'],
    description:
      ' <b>[Snapshot policies only]</b> Specifies a snapshot archiving rule for a schedule.',
  })
  .openapi('ArchiveRule')

const ScheduleSchema = z
  .object({
    Name: ScheduleNameSchema.and(
      z.any().openapi({ description: 'The name of the schedule.' }),
    ).exactOptional(),
    CopyTags: CopyTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.',
        }),
    ).exactOptional(),
    TagsToAdd: TagsToAddListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to apply to policy-created resources. These user-defined tags are in addition to the Amazon Web Services-added lifecycle tags.',
        }),
    ).exactOptional(),
    VariableTags: VariableTagsListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[AMI policies and snapshot policies that target instances only]</b> A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: <code>$(instance-id)</code> or <code>$(timestamp)</code>. Variable tags are only valid for EBS Snapshot Management – Instance policies.',
        }),
    ).exactOptional(),
    CreateRule: CreateRuleSchema.and(
      z.any().openapi({ description: 'The creation rule.' }),
    ).exactOptional(),
    RetainRule: RetainRuleSchema.and(
      z
        .any()
        .openapi({
          description: 'The retention rule for snapshots or AMIs created by the policy.',
        }),
    ).exactOptional(),
    FastRestoreRule: FastRestoreRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[Snapshot policies only]</b> The rule for enabling fast snapshot restore.',
        }),
    ).exactOptional(),
    CrossRegionCopyRules: CrossRegionCopyRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies a rule for copying snapshots or AMIs across regions.</p> <note> <p>You can't specify cross-Region copy rules for policies that create snapshots on an Outpost. If the policy creates snapshots in a Region, then snapshots can be copied to up to three Regions or Outposts.</p> </note>",
        }),
    ).exactOptional(),
    ShareRules: ShareRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[Snapshot policies only]</b> The rule for sharing snapshots with other Amazon Web Services accounts.',
        }),
    ).exactOptional(),
    DeprecateRule: DeprecateRuleSchema.and(
      z
        .any()
        .openapi({
          description: ' <b>[AMI policies only]</b> The AMI deprecation rule for the schedule.',
        }),
    ).exactOptional(),
    ArchiveRule: ArchiveRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>[Snapshot policies that target volumes only]</b> The snapshot archiving rule for the schedule. When you specify an archiving rule, snapshots are automatically moved from the standard tier to the archive tier once the schedule\'s retention threshold is met. Snapshots are then retained in the archive tier for the archive retention period that you specify. </p> <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for snapshot lifecycle policies</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' <b>[Snapshot and AMI policies only]</b> Specifies a schedule for a snapshot or AMI lifecycle policy.',
    required: [],
  })
  .openapi('Schedule')

const ScheduleListSchema = z.array(ScheduleSchema).min(1).max(4).openapi('ScheduleList')

const ExcludeBootVolumeSchema = z.boolean().openapi('ExcludeBootVolume')

const NoRebootSchema = z.boolean().openapi('NoReboot')

const ExcludeDataVolumeTagListSchema = z
  .array(TagSchema)
  .min(0)
  .max(50)
  .openapi('ExcludeDataVolumeTagList')

const ParametersSchema = z
  .object({
    ExcludeBootVolume: ExcludeBootVolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[Snapshot policies that target instances only]</b> Indicates whether to exclude the root volume from multi-volume snapshot sets. The default is <code>false</code>. If you specify <code>true</code>, then the root volumes attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.',
        }),
    ).exactOptional(),
    NoReboot: NoRebootSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[AMI policies only]</b> Indicates whether targeted instances are rebooted when the lifecycle policy runs. <code>true</code> indicates that targeted instances are not rebooted when the policy runs. <code>false</code> indicates that target instances are rebooted when the policy runs. The default is <code>true</code> (instances are not rebooted).',
        }),
    ).exactOptional(),
    ExcludeDataVolumeTags: ExcludeDataVolumeTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>[Snapshot policies that target instances only]</b> The tags used to identify data (non-root) volumes to exclude from multi-volume snapshot sets.</p> <p>If you create a snapshot lifecycle policy that targets instances and you specify tags for this parameter, then data volumes with the specified tags that are attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <b>[Snapshot and AMI policies only]</b> Specifies optional parameters for snapshot and AMI policies. The set of valid parameters depends on the combination of policy type and target resource type.</p> <p>If you choose to exclude boot volumes and you specify tags that consequently exclude all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create any snapshots for the affected instance, and it will emit a <code>SnapshotsCreateFailed</code> Amazon CloudWatch metric. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html">Monitor your policies using Amazon CloudWatch</a>.</p>',
    required: [],
  })
  .openapi('Parameters')

const EventSourceValuesSchema = z.literal('MANAGED_CWE').openapi('EventSourceValues')

const EventTypeValuesSchema = z.literal('shareSnapshot').openapi('EventTypeValues')

const SnapshotOwnerListSchema = z
  .array(AwsAccountIdSchema)
  .min(0)
  .max(50)
  .openapi('SnapshotOwnerList')

const DescriptionRegexSchema = z
  .string()
  .min(0)
  .max(1000)
  .openapi({ pattern: '[\\p{all}]*' })
  .openapi('DescriptionRegex')

const EventParametersSchema = z
  .object({
    EventType: EventTypeValuesSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of event. Currently, only snapshot sharing events are supported.',
        }),
    ),
    SnapshotOwner: SnapshotOwnerListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the Amazon Web Services accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified Amazon Web Services accounts shares a snapshot with your account.',
        }),
    ),
    DescriptionRegex: DescriptionRegexSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.</p> <p>For example, specifying <code>^.*Created for policy: policy-1234567890abcdef0.*$</code> configures the policy to run only if snapshots created by policy <code>policy-1234567890abcdef0</code> are shared with your account.</p>',
        }),
    ),
  })
  .openapi({
    required: ['EventType', 'SnapshotOwner', 'DescriptionRegex'],
    description:
      ' <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.',
  })
  .openapi('EventParameters')

const EventSourceSchema = z
  .object({
    Type: EventSourceValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the event. Currently only managed CloudWatch Events rules are supported.',
        }),
    ),
    Parameters: EventParametersSchema.and(
      z.any().openapi({ description: 'Information about the event.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      ' <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.',
  })
  .openapi('EventSource')

const ActionNameSchema = z
  .string()
  .regex(/[0-9A-Za-z _-]+/)
  .min(0)
  .max(120)
  .openapi('ActionName')

const EncryptionConfigurationSchema = z
  .object({
    Encrypted: EncryptedSchema.and(
      z
        .any()
        .openapi({
          description:
            'To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or when encryption by default is not enabled.',
        }),
    ),
    CmkArn: CmkArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Encrypted'],
    description:
      ' <b>[Event-based policies only]</b> Specifies the encryption settings for cross-Region snapshot copies created by event-based policies.',
  })
  .openapi('EncryptionConfiguration')

const CrossRegionCopyActionSchema = z
  .object({
    Target: TargetSchema.and(z.any().openapi({ description: 'The target Region.' })),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z.any().openapi({ description: 'The encryption settings for the copied snapshot.' }),
    ),
    RetainRule: CrossRegionCopyRetainRuleSchema.exactOptional(),
  })
  .openapi({
    required: ['Target', 'EncryptionConfiguration'],
    description:
      '<p> <b>[Event-based policies only]</b> Specifies a cross-Region copy action for event-based policies.</p> <note> <p>To specify a cross-Region copy rule for snapshot and AMI policies, use <a>CrossRegionCopyRule</a>.</p> </note>',
  })
  .openapi('CrossRegionCopyAction')

const CrossRegionCopyActionListSchema = z
  .array(CrossRegionCopyActionSchema)
  .min(0)
  .max(3)
  .openapi('CrossRegionCopyActionList')

const ActionSchema = z
  .object({
    Name: ActionNameSchema.and(
      z.any().openapi({ description: 'A descriptive name for the action.' }),
    ),
    CrossRegionCopy: CrossRegionCopyActionListSchema.and(
      z.any().openapi({ description: 'The rule for copying shared snapshots across Regions.' }),
    ),
  })
  .openapi({
    required: ['Name', 'CrossRegionCopy'],
    description:
      ' <b>[Event-based policies only]</b> Specifies an action for an event-based policy.',
  })
  .openapi('Action')

const ActionListSchema = z.array(ActionSchema).length(1).openapi('ActionList')

const TagValueSchema = z.string().max(256).openapi({ pattern: '[\\p{all}]*' }).openapi('TagValue')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const DeleteLifecyclePolicyResponseSchema = z.object({}).openapi('DeleteLifecyclePolicyResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const PolicyDescriptionSchema = z
  .string()
  .regex(/[0-9A-Za-z _-]+/)
  .min(0)
  .max(500)
  .openapi('PolicyDescription')

const GettablePolicyStateValuesSchema = z
  .enum(['ENABLED', 'DISABLED', 'ERROR'])
  .openapi('GettablePolicyStateValues')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const LifecyclePolicySummarySchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The identifier of the lifecycle policy.' }),
    ).exactOptional(),
    Description: PolicyDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the lifecycle policy.' }),
    ).exactOptional(),
    State: GettablePolicyStateValuesSchema.and(
      z.any().openapi({ description: 'The activation state of the lifecycle policy.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(z.any().openapi({ description: 'The tags.' })).exactOptional(),
    PolicyType: PolicyTypeValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of policy. <code>EBS_SNAPSHOT_MANAGEMENT</code> indicates that the policy manages the lifecycle of Amazon EBS snapshots. <code>IMAGE_MANAGEMENT</code> indicates that the policy manages the lifecycle of EBS-backed AMIs. <code>EVENT_BASED_POLICY</code> indicates that the policy automates cross-account snapshot copies for snapshots that are shared with your account.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a lifecycle policy.', required: [] })
  .openapi('LifecyclePolicySummary')

const LifecyclePolicySummaryListSchema = z
  .array(LifecyclePolicySummarySchema)
  .openapi('LifecyclePolicySummaryList')

const GetLifecyclePoliciesResponseSchema = z
  .object({
    Policies: LifecyclePolicySummaryListSchema.and(
      z.any().openapi({ description: 'Summary information about the lifecycle policies.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLifecyclePoliciesResponse')

const TagFilterSchema = z
  .string()
  .min(0)
  .max(256)
  .openapi({ pattern: '[\\p{all}]*' })
  .openapi('TagFilter')

const StatusMessageSchema = z
  .string()
  .min(0)
  .max(500)
  .openapi({ pattern: '[\\p{all}]*' })
  .openapi('StatusMessage')

const ExecutionRoleArnSchema = z
  .string()
  .regex(/arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role\/.*/)
  .min(0)
  .max(2048)
  .openapi('ExecutionRoleArn')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const PolicyDetailsSchema = z
  .object({
    PolicyType: PolicyTypeValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>[All policy types]</b> The valid target resource types and actions a policy can manage. Specify <code>EBS_SNAPSHOT_MANAGEMENT</code> to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify <code>IMAGE_MANAGEMENT</code> to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify <code>EVENT_BASED_POLICY </code> to create an event-based policy that performs specific actions when a defined event occurs in your Amazon Web Services account.</p> <p>The default is <code>EBS_SNAPSHOT_MANAGEMENT</code>.</p>',
        }),
    ).exactOptional(),
    ResourceTypes: ResourceTypeValuesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[Snapshot policies only]</b> The target resource type for snapshot and AMI lifecycle policies. Use <code>VOLUME </code>to create snapshots of individual volumes or use <code>INSTANCE</code> to create multi-volume snapshots from the volumes for an instance.',
        }),
    ).exactOptional(),
    ResourceLocations: ResourceLocationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>[Snapshot and AMI policies only]</b> The location of the resources to backup. If the source resources are located in an Amazon Web Services Region, specify <code>CLOUD</code>. If the source resources are located on an Outpost in your account, specify <code>OUTPOST</code>.</p> <p>If you specify <code>OUTPOST</code>, Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account.</p>',
        }),
    ).exactOptional(),
    TargetTags: TargetTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[Snapshot and AMI policies only]</b> The single tag that identifies targeted resources for this policy.',
        }),
    ).exactOptional(),
    Schedules: ScheduleListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[Snapshot and AMI policies only]</b> The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules—one mandatory schedule and up to three optional schedules.',
        }),
    ).exactOptional(),
    Parameters: ParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> <b>[Snapshot and AMI policies only]</b> A set of optional parameters for snapshot and AMI lifecycle policies. </p> <note> <p>If you are modifying a policy that was created or previously modified using the Amazon Data Lifecycle Manager console, then you must include this parameter and specify either the default values or the new values that you require. You can't omit this parameter or set its values to null.</p> </note>",
        }),
    ).exactOptional(),
    EventSource: EventSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[Event-based policies only]</b> The event that activates the event-based policy.',
        }),
    ).exactOptional(),
    Actions: ActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>[Event-based policies only]</b> The actions to be performed when the event-based policy is activated. You can specify only one action per policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.',
    required: [],
  })
  .openapi('PolicyDetails')

const PolicyArnSchema = z
  .string()
  .regex(/^arn:aws(-[a-z]{1,3}){0,2}:dlm:[A-Za-z0-9_\/.-]{0,63}:\d+:policy\/[0-9A-Za-z_-]{1,128}$/)
  .min(0)
  .max(2048)
  .openapi('PolicyArn')

const LifecyclePolicySchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The identifier of the lifecycle policy.' }),
    ).exactOptional(),
    Description: PolicyDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the lifecycle policy.' }),
    ).exactOptional(),
    State: GettablePolicyStateValuesSchema.and(
      z.any().openapi({ description: 'The activation state of the lifecycle policy.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'The description of the status.' }),
    ).exactOptional(),
    ExecutionRoleArn: ExecutionRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.',
        }),
    ).exactOptional(),
    DateCreated: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The local date and time when the lifecycle policy was created.' }),
    ).exactOptional(),
    DateModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The local date and time when the lifecycle policy was last modified.',
        }),
    ).exactOptional(),
    PolicyDetails: PolicyDetailsSchema.and(
      z.any().openapi({ description: 'The configuration of the lifecycle policy' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(z.any().openapi({ description: 'The tags.' })).exactOptional(),
    PolicyArn: PolicyArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' <b>[All policy types]</b> Detailed information about a snapshot, AMI, or event-based lifecycle policy.',
    required: [],
  })
  .openapi('LifecyclePolicy')

const GetLifecyclePolicyResponseSchema = z
  .object({
    Policy: LifecyclePolicySchema.and(
      z.any().openapi({ description: 'Detailed information about the lifecycle policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLifecyclePolicyResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateLifecyclePolicyResponseSchema = z.object({}).openapi('UpdateLifecyclePolicyResponse')

const SettablePolicyStateValuesSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('SettablePolicyStateValues')

const CreateLifecyclePolicyRequestSchema = z
  .object({
    ExecutionRoleArn: ExecutionRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.',
        }),
    ),
    Description: PolicyDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.',
        }),
    ),
    State: SettablePolicyStateValuesSchema.and(
      z
        .any()
        .openapi({
          description: 'The desired activation state of the lifecycle policy after creation.',
        }),
    ),
    PolicyDetails: PolicyDetailsSchema.and(
      z.any().openapi({ description: 'The configuration details of the lifecycle policy.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'The tags to apply to the lifecycle policy during creation.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ExecutionRoleArn', 'Description', 'State', 'PolicyDetails'],
    title: 'CreateLifecyclePolicyRequest',
  })
  .openapi('CreateLifecyclePolicyRequest')

const DeleteLifecyclePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteLifecyclePolicyRequest' })
  .openapi('DeleteLifecyclePolicyRequest')

const PolicyIdListSchema = z.array(PolicyIdSchema).openapi('PolicyIdList')

const TargetTagsFilterListSchema = z
  .array(TagFilterSchema)
  .min(1)
  .max(50)
  .openapi('TargetTagsFilterList')

const TagsToAddFilterListSchema = z
  .array(TagFilterSchema)
  .min(0)
  .max(50)
  .openapi('TagsToAddFilterList')

const GetLifecyclePoliciesRequestSchema = z
  .object({})
  .openapi({ title: 'GetLifecyclePoliciesRequest' })
  .openapi('GetLifecyclePoliciesRequest')

const GetLifecyclePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetLifecyclePolicyRequest' })
  .openapi('GetLifecyclePolicyRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({ Tags: TagMapSchema.and(z.any().openapi({ description: 'One or more tags.' })) })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateLifecyclePolicyRequestSchema = z
  .object({
    ExecutionRoleArn: ExecutionRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.',
        }),
    ).exactOptional(),
    State: SettablePolicyStateValuesSchema.and(
      z
        .any()
        .openapi({
          description: 'The desired activation state of the lifecycle policy after creation.',
        }),
    ).exactOptional(),
    Description: PolicyDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the lifecycle policy.' }),
    ).exactOptional(),
    PolicyDetails: PolicyDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the lifecycle policy. You cannot update the policy type or the resource type.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateLifecyclePolicyRequest', required: [] })
  .openapi('UpdateLifecyclePolicyRequest')

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

export const getPoliciesRoute = createRoute({
  method: 'get',
  path: '/policies',
  description:
    '<p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>',
  operationId: 'GetLifecyclePolicies',
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
      policyIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PolicyIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'policyIds',
            in: 'query',
            required: false,
            description: 'The identifiers of the data lifecycle policies.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PolicyId' } },
          },
        }),
      state: z
        .enum(['ENABLED', 'DISABLED', 'ERROR'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            description: 'The activation state.',
            schema: { type: 'string', enum: ['ENABLED', 'DISABLED', 'ERROR'] },
          },
        }),
      resourceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceTypeValuesSchema).length(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceTypes',
            in: 'query',
            required: false,
            description: 'The resource type.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ResourceTypeValues' },
              minItems: 1,
              maxItems: 1,
            },
          },
        }),
      targetTags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagFilterSchema).min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'targetTags',
            in: 'query',
            required: false,
            description:
              '<p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagFilter' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
      tagsToAdd: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagFilterSchema).min(0).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tagsToAdd',
            in: 'query',
            required: false,
            description:
              '<p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.</p>',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagFilter' },
              minItems: 0,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLifecyclePoliciesResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postPoliciesRoute = createRoute({
  method: 'post',
  path: '/policies',
  description:
    'Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.',
  operationId: 'CreateLifecyclePolicy',
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
              ExecutionRoleArn: z
                .string()
                .regex(/arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role\/.*/)
                .min(0)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.',
                }),
              Description: z
                .string()
                .regex(/[0-9A-Za-z _-]+/)
                .min(0)
                .max(500)
                .openapi({
                  description:
                    'A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.',
                }),
              State: z
                .enum(['ENABLED', 'DISABLED'])
                .openapi({
                  description:
                    'The desired activation state of the lifecycle policy after creation.',
                }),
              PolicyDetails: z
                .object({
                  PolicyType: PolicyTypeValuesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> <b>[All policy types]</b> The valid target resource types and actions a policy can manage. Specify <code>EBS_SNAPSHOT_MANAGEMENT</code> to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify <code>IMAGE_MANAGEMENT</code> to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify <code>EVENT_BASED_POLICY </code> to create an event-based policy that performs specific actions when a defined event occurs in your Amazon Web Services account.</p> <p>The default is <code>EBS_SNAPSHOT_MANAGEMENT</code>.</p>',
                      }),
                  ).exactOptional(),
                  ResourceTypes: ResourceTypeValuesListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Snapshot policies only]</b> The target resource type for snapshot and AMI lifecycle policies. Use <code>VOLUME </code>to create snapshots of individual volumes or use <code>INSTANCE</code> to create multi-volume snapshots from the volumes for an instance.',
                      }),
                  ).exactOptional(),
                  ResourceLocations: ResourceLocationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> <b>[Snapshot and AMI policies only]</b> The location of the resources to backup. If the source resources are located in an Amazon Web Services Region, specify <code>CLOUD</code>. If the source resources are located on an Outpost in your account, specify <code>OUTPOST</code>.</p> <p>If you specify <code>OUTPOST</code>, Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account.</p>',
                      }),
                  ).exactOptional(),
                  TargetTags: TargetTagListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Snapshot and AMI policies only]</b> The single tag that identifies targeted resources for this policy.',
                      }),
                  ).exactOptional(),
                  Schedules: ScheduleListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Snapshot and AMI policies only]</b> The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules—one mandatory schedule and up to three optional schedules.',
                      }),
                  ).exactOptional(),
                  Parameters: ParametersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p> <b>[Snapshot and AMI policies only]</b> A set of optional parameters for snapshot and AMI lifecycle policies. </p> <note> <p>If you are modifying a policy that was created or previously modified using the Amazon Data Lifecycle Manager console, then you must include this parameter and specify either the default values or the new values that you require. You can't omit this parameter or set its values to null.</p> </note>",
                      }),
                  ).exactOptional(),
                  EventSource: EventSourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Event-based policies only]</b> The event that activates the event-based policy.',
                      }),
                  ).exactOptional(),
                  Actions: ActionListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Event-based policies only]</b> The actions to be performed when the event-based policy is activated. You can specify only one action per policy.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description: 'The tags to apply to the lifecycle policy during creation.',
                }),
            })
            .openapi({ required: ['ExecutionRoleArn', 'Description', 'State', 'PolicyDetails'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLifecyclePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getPoliciesPolicyIdIndexRoute = createRoute({
  method: 'get',
  path: '/policies/{policyId}/',
  description: 'Gets detailed information about the specified lifecycle policy.',
  operationId: 'GetLifecyclePolicy',
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
      policyId: z
        .string()
        .regex(/policy-[A-Za-z0-9]+/)
        .min(0)
        .max(64)
        .openapi({
          param: {
            name: 'policyId',
            in: 'path',
            required: true,
            description: 'The identifier of the lifecycle policy.',
            schema: { type: 'string', pattern: 'policy-[A-Za-z0-9]+', minLength: 0, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLifecyclePolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deletePoliciesPolicyIdIndexRoute = createRoute({
  method: 'delete',
  path: '/policies/{policyId}/',
  description:
    '<p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>',
  operationId: 'DeleteLifecyclePolicy',
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
      policyId: z
        .string()
        .regex(/policy-[A-Za-z0-9]+/)
        .min(0)
        .max(64)
        .openapi({
          param: {
            name: 'policyId',
            in: 'path',
            required: true,
            description: 'The identifier of the lifecycle policy.',
            schema: { type: 'string', pattern: 'policy-[A-Za-z0-9]+', minLength: 0, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLifecyclePolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists the tags for the specified resource.',
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
        .regex(
          /^arn:aws(-[a-z]{1,3}){0,2}:dlm:[A-Za-z0-9_\/.-]{0,63}:\d+:policy\/[0-9A-Za-z_-]{1,128}$/,
        )
        .min(0)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws(-[a-z]{1,3}){0,2}:dlm:[A-Za-z0-9_/.-]{0,63}:\\d+:policy/[0-9A-Za-z_-]{1,128}$',
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
  description: 'Adds the specified tags to the specified resource.',
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
        .regex(
          /^arn:aws(-[a-z]{1,3}){0,2}:dlm:[A-Za-z0-9_\/.-]{0,63}:\d+:policy\/[0-9A-Za-z_-]{1,128}$/,
        )
        .min(0)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws(-[a-z]{1,3}){0,2}:dlm:[A-Za-z0-9_/.-]{0,63}:\\d+:policy/[0-9A-Za-z_-]{1,128}$',
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
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .openapi({ description: 'One or more tags.' }),
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes the specified tags from the specified resource.',
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
        .regex(
          /^arn:aws(-[a-z]{1,3}){0,2}:dlm:[A-Za-z0-9_\/.-]{0,63}:\d+:policy\/[0-9A-Za-z_-]{1,128}$/,
        )
        .min(0)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws(-[a-z]{1,3}){0,2}:dlm:[A-Za-z0-9_/.-]{0,63}:\\d+:policy/[0-9A-Za-z_-]{1,128}$',
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
          z.array(TagKeySchema).min(1).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const patchPoliciesPolicyIdRoute = createRoute({
  method: 'patch',
  path: '/policies/{policyId}',
  description:
    '<p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>',
  operationId: 'UpdateLifecyclePolicy',
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
      policyId: z
        .string()
        .regex(/policy-[A-Za-z0-9]+/)
        .min(0)
        .max(64)
        .openapi({
          param: {
            name: 'policyId',
            in: 'path',
            required: true,
            description: 'The identifier of the lifecycle policy.',
            schema: { type: 'string', pattern: 'policy-[A-Za-z0-9]+', minLength: 0, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ExecutionRoleArn: z
                .string()
                .regex(/arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role\/.*/)
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.',
                }),
              State: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    'The desired activation state of the lifecycle policy after creation.',
                }),
              Description: z
                .string()
                .regex(/[0-9A-Za-z _-]+/)
                .min(0)
                .max(500)
                .exactOptional()
                .openapi({ description: 'A description of the lifecycle policy.' }),
              PolicyDetails: z
                .object({
                  PolicyType: PolicyTypeValuesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> <b>[All policy types]</b> The valid target resource types and actions a policy can manage. Specify <code>EBS_SNAPSHOT_MANAGEMENT</code> to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify <code>IMAGE_MANAGEMENT</code> to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify <code>EVENT_BASED_POLICY </code> to create an event-based policy that performs specific actions when a defined event occurs in your Amazon Web Services account.</p> <p>The default is <code>EBS_SNAPSHOT_MANAGEMENT</code>.</p>',
                      }),
                  ).exactOptional(),
                  ResourceTypes: ResourceTypeValuesListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Snapshot policies only]</b> The target resource type for snapshot and AMI lifecycle policies. Use <code>VOLUME </code>to create snapshots of individual volumes or use <code>INSTANCE</code> to create multi-volume snapshots from the volumes for an instance.',
                      }),
                  ).exactOptional(),
                  ResourceLocations: ResourceLocationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> <b>[Snapshot and AMI policies only]</b> The location of the resources to backup. If the source resources are located in an Amazon Web Services Region, specify <code>CLOUD</code>. If the source resources are located on an Outpost in your account, specify <code>OUTPOST</code>.</p> <p>If you specify <code>OUTPOST</code>, Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account.</p>',
                      }),
                  ).exactOptional(),
                  TargetTags: TargetTagListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Snapshot and AMI policies only]</b> The single tag that identifies targeted resources for this policy.',
                      }),
                  ).exactOptional(),
                  Schedules: ScheduleListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Snapshot and AMI policies only]</b> The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules—one mandatory schedule and up to three optional schedules.',
                      }),
                  ).exactOptional(),
                  Parameters: ParametersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p> <b>[Snapshot and AMI policies only]</b> A set of optional parameters for snapshot and AMI lifecycle policies. </p> <note> <p>If you are modifying a policy that was created or previously modified using the Amazon Data Lifecycle Manager console, then you must include this parameter and specify either the default values or the new values that you require. You can't omit this parameter or set its values to null.</p> </note>",
                      }),
                  ).exactOptional(),
                  EventSource: EventSourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Event-based policies only]</b> The event that activates the event-based policy.',
                      }),
                  ).exactOptional(),
                  Actions: ActionListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' <b>[Event-based policies only]</b> The actions to be performed when the event-based policy is activated. You can specify only one action per policy.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.',
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
      content: { 'application/json': { schema: UpdateLifecyclePolicyResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
