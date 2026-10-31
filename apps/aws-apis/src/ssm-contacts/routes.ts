import { createRoute, z } from '@hono/zod-openapi'

const AcceptPageResultSchema = z.object({}).openapi('AcceptPageResult')

const SsmContactsArnSchema = z
  .string()
  .regex(/arn:(aws|aws-cn|aws-us-gov):ssm-contacts:[-\w+=\/,.@]*:[0-9]+:([\w+=\/,.@:-]+)*/)
  .min(1)
  .max(2048)
  .openapi('SsmContactsArn')

const AcceptTypeSchema = z.enum(['DELIVERED', 'READ']).openapi('AcceptType')

const ReceiptInfoSchema = z
  .string()
  .regex(/^[.\s\S]*$/)
  .min(1)
  .max(2048)
  .openapi('ReceiptInfo')

const AcceptCodeSchema = z
  .string()
  .regex(/^[0-9]*$/)
  .min(6)
  .max(10)
  .openapi('AcceptCode')

const AcceptCodeValidationSchema = z.enum(['IGNORE', 'ENFORCE']).openapi('AcceptCodeValidation')

const AcceptPageRequestSchema = z
  .object({
    PageId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the engagement to a contact channel.',
        }),
    ),
    ContactChannelId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the contact channel.' }),
    ).exactOptional(),
    AcceptType: AcceptTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type indicates if the page was <code>DELIVERED</code> or <code>READ</code>.',
        }),
    ),
    Note: ReceiptInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'Information provided by the user when the user acknowledges the page.',
        }),
    ).exactOptional(),
    AcceptCode: AcceptCodeSchema.and(
      z.any().openapi({ description: 'A 6-digit code used to acknowledge the page.' }),
    ),
    AcceptCodeValidation: AcceptCodeValidationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional field that Incident Manager uses to <code>ENFORCE</code> <code>AcceptCode</code> validation when acknowledging an page. Acknowledgement can occur by replying to a page, or when entering the AcceptCode in the console. Enforcing AcceptCode validation causes Incident Manager to verify that the code entered by the user matches the code sent by Incident Manager with the page.</p> <p>Incident Manager can also <code>IGNORE</code> <code>AcceptCode</code> validation. Ignoring <code>AcceptCode</code> validation causes Incident Manager to accept any value entered for the <code>AcceptCode</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PageId', 'AcceptType', 'AcceptCode'], title: 'AcceptPageRequest' })
  .openapi('AcceptPageRequest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ActivateContactChannelResultSchema = z.object({}).openapi('ActivateContactChannelResult')

const ActivationCodeSchema = z
  .string()
  .regex(/^[0-9]*$/)
  .min(6)
  .max(10)
  .openapi('ActivationCode')

const ActivateContactChannelRequestSchema = z
  .object({
    ContactChannelId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact channel.' }),
    ),
    ActivationCode: ActivationCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The code sent to the contact channel when it was created in the contact.',
        }),
    ),
  })
  .openapi({
    required: ['ContactChannelId', 'ActivationCode'],
    title: 'ActivateContactChannelRequest',
  })
  .openapi('ActivateContactChannelRequest')

const CreateContactResultSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the created contact or escalation plan.',
        }),
    ),
  })
  .openapi({ required: ['ContactArn'] })
  .openapi('CreateContactResult')

const ContactAliasSchema = z
  .string()
  .regex(/^[a-z0-9_\-]*$/)
  .min(1)
  .max(255)
  .openapi('ContactAlias')

const ContactNameSchema = z
  .string()
  .regex(/^[\p{L}\p{Z}\p{N}_.\-]*$/u)
  .min(0)
  .max(255)
  .openapi('ContactName')

const ContactTypeSchema = z
  .enum(['PERSONAL', 'ESCALATION', 'ONCALL_SCHEDULE'])
  .openapi('ContactType')

const StageDurationInMinsSchema = z.int().min(0).max(30).openapi('StageDurationInMins')

const RetryIntervalInMinutesSchema = z.int().min(0).max(60).openapi('RetryIntervalInMinutes')

const ChannelTargetInfoSchema = z
  .object({
    ContactChannelId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact channel.' }),
    ),
    RetryIntervalInMinutes: RetryIntervalInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes to wait to retry sending engagement in the case the engagement initially fails.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ContactChannelId'],
    description:
      'Information about the contact channel that Incident Manager uses to engage the contact.',
  })
  .openapi('ChannelTargetInfo')

const IsEssentialSchema = z.boolean().openapi('IsEssential')

const ContactTargetInfoSchema = z
  .object({
    ContactId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact.' }),
    ).exactOptional(),
    IsEssential: IsEssentialSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.",
        }),
    ),
  })
  .openapi({
    required: ['IsEssential'],
    description: 'The contact that Incident Manager is engaging during an incident.',
  })
  .openapi('ContactTargetInfo')

const TargetSchema = z
  .object({
    ChannelTargetInfo: ChannelTargetInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the contact channel Incident Manager is engaging.',
        }),
    ).exactOptional(),
    ContactTargetInfo: ContactTargetInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the contact that Incident Manager is engaging.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "The contact or contact channel that's being engaged.", required: [] })
  .openapi('Target')

const TargetsListSchema = z.array(TargetSchema).openapi('TargetsList')

const StageSchema = z
  .object({
    DurationInMinutes: StageDurationInMinsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time to wait until beginning the next stage. The duration can only be set to 0 if a target is specified.',
        }),
    ),
    Targets: TargetsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contacts or contact methods that the escalation plan or engagement plan is engaging.',
        }),
    ),
  })
  .openapi({
    required: ['DurationInMinutes', 'Targets'],
    description:
      'A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.',
  })
  .openapi('Stage')

const StagesListSchema = z.array(StageSchema).openapi('StagesList')

const SsmContactsArnListSchema = z
  .array(SsmContactsArnSchema)
  .min(0)
  .max(25)
  .openapi('SsmContactsArnList')

const PlanSchema = z
  .object({
    Stages: StagesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods.',
        }),
    ).exactOptional(),
    RotationIds: SsmContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan. ',
    required: [],
  })
  .openapi('Plan')

const TagKeySchema = z
  .string()
  .regex(/^[\\\/a-zA-Z0-9_+=\-]*$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^[\p{L}\p{Z}\p{N}_.:\/=+\-@]*$/u)
  .min(1)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: 'Name of the object key.' }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'Value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A container of a key-value name pair.', required: [] })
  .openapi('Tag')

const TagsListSchema = z.array(TagSchema).min(0).max(50).openapi('TagsList')

const IdempotencyTokenSchema = z
  .string()
  .regex(/^[\\\/a-zA-Z0-9_+=\-]*$/)
  .max(2048)
  .openapi('IdempotencyToken')

const CreateContactRequestSchema = z
  .object({
    Alias: ContactAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The short name to quickly identify a contact or escalation plan. The contact alias must be unique and identifiable.',
        }),
    ),
    DisplayName: ContactNameSchema.and(
      z.any().openapi({ description: 'The full name of the contact or escalation plan.' }),
    ).exactOptional(),
    Type: ContactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'To create an escalation plan use <code>ESCALATION</code>. To create a contact use <code>PERSONAL</code>.',
        }),
    ),
    Plan: PlanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of stages. A contact has an engagement plan with stages that contact specified contact channels. An escalation plan uses stages that contact specified contacts.',
        }),
    ),
    Tags: TagsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Adds a tag to the target. You can only tag resources created in the first Region of your replication set.',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token ensuring that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Alias', 'Type', 'Plan'], title: 'CreateContactRequest' })
  .openapi('CreateContactRequest')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const DataEncryptionExceptionSchema = z.any().openapi('DataEncryptionException')

const CreateContactChannelResultSchema = z
  .object({
    ContactChannelArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact channel.' }),
    ),
  })
  .openapi({ required: ['ContactChannelArn'] })
  .openapi('CreateContactChannelResult')

const ChannelNameSchema = z
  .string()
  .regex(/^[\p{L}\p{Z}\p{N}_.\-]*$/u)
  .min(1)
  .max(255)
  .openapi('ChannelName')

const ChannelTypeSchema = z.enum(['SMS', 'VOICE', 'EMAIL']).openapi('ChannelType')

const SimpleAddressSchema = z.string().min(1).max(320).openapi('SimpleAddress')

const ContactChannelAddressSchema = z
  .object({
    SimpleAddress: SimpleAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The format is dependent on the type of the contact channel. The following are the expected formats:</p> <ul> <li> <p>SMS - '+' followed by the country code and phone number</p> </li> <li> <p>VOICE - '+' followed by the country code and phone number</p> </li> <li> <p>EMAIL - any standard email format</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details that Incident Manager uses when trying to engage the contact channel.',
    required: [],
  })
  .openapi('ContactChannelAddress')

const DeferActivationSchema = z.boolean().openapi('DeferActivation')

const CreateContactChannelRequestSchema = z
  .object({
    ContactId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the contact you are adding the contact channel to.',
        }),
    ),
    Name: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the contact channel.' }),
    ),
    Type: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Incident Manager supports three types of contact channels:</p> <ul> <li> <p> <code>SMS</code> </p> </li> <li> <p> <code>VOICE</code> </p> </li> <li> <p> <code>EMAIL</code> </p> </li> </ul>',
        }),
    ),
    DeliveryAddress: ContactChannelAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The details that Incident Manager uses when trying to engage the contact channel. The format is dependent on the type of the contact channel. The following are the expected formats:</p> <ul> <li> <p>SMS - '+' followed by the country code and phone number</p> </li> <li> <p>VOICE - '+' followed by the country code and phone number</p> </li> <li> <p>EMAIL - any standard email format</p> </li> </ul>",
        }),
    ),
    DeferActivation: DeferActivationSchema.and(
      z
        .any()
        .openapi({
          description:
            "If you want to activate the channel at a later time, you can choose to defer activation. Incident Manager can't engage your contact channel until it has been activated.",
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token ensuring that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ContactId', 'Name', 'Type', 'DeliveryAddress'],
    title: 'CreateContactChannelRequest',
  })
  .openapi('CreateContactChannelRequest')

const CreateRotationResultSchema = z
  .object({
    RotationArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the created rotation.' }),
    ),
  })
  .openapi({ required: ['RotationArn'] })
  .openapi('CreateRotationResult')

const RotationNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\s\.]*$/)
  .min(1)
  .max(255)
  .openapi('RotationName')

const RotationContactsArnListSchema = z
  .array(SsmContactsArnSchema)
  .min(1)
  .max(30)
  .openapi('RotationContactsArnList')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const TimeZoneIdSchema = z
  .string()
  .regex(/^[:a-zA-Z0-9_\-\s\.\\\/]*$/)
  .min(1)
  .max(255)
  .openapi('TimeZoneId')

const DayOfMonthSchema = z.int().min(1).max(31).openapi('DayOfMonth')

const HourOfDaySchema = z.int().min(0).max(23).openapi('HourOfDay')

const MinuteOfHourSchema = z.int().min(0).max(59).openapi('MinuteOfHour')

const HandOffTimeSchema = z
  .object({
    HourOfDay: HourOfDaySchema.and(
      z.any().openapi({ description: 'The hour when an on-call rotation shift begins or ends.' }),
    ),
    MinuteOfHour: MinuteOfHourSchema.and(
      z.any().openapi({ description: 'The minute when an on-call rotation shift begins or ends.' }),
    ),
  })
  .openapi({
    required: ['HourOfDay', 'MinuteOfHour'],
    description: 'Details about when an on-call rotation shift begins or ends.',
  })
  .openapi('HandOffTime')

const MonthlySettingSchema = z
  .object({
    DayOfMonth: DayOfMonthSchema.and(
      z
        .any()
        .openapi({
          description: 'The day of the month when monthly recurring on-call rotations begin.',
        }),
    ),
    HandOffTime: HandOffTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time of day when a monthly recurring on-call shift rotation begins.',
        }),
    ),
  })
  .openapi({
    required: ['DayOfMonth', 'HandOffTime'],
    description: 'Information about on-call rotations that recur monthly.',
  })
  .openapi('MonthlySetting')

const MonthlySettingsSchema = z.array(MonthlySettingSchema).openapi('MonthlySettings')

const DayOfWeekSchema = z
  .enum(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'])
  .openapi('DayOfWeek')

const WeeklySettingSchema = z
  .object({
    DayOfWeek: DayOfWeekSchema.and(
      z
        .any()
        .openapi({
          description: 'The day of the week when weekly recurring on-call shift rotations begins.',
        }),
    ),
    HandOffTime: HandOffTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time of day when a weekly recurring on-call shift rotation begins.',
        }),
    ),
  })
  .openapi({
    required: ['DayOfWeek', 'HandOffTime'],
    description: 'Information about rotations that recur weekly.',
  })
  .openapi('WeeklySetting')

const WeeklySettingsSchema = z.array(WeeklySettingSchema).openapi('WeeklySettings')

const DailySettingsSchema = z.array(HandOffTimeSchema).openapi('DailySettings')

const NumberOfOnCallsSchema = z.int().min(1).openapi('NumberOfOnCalls')

const CoverageTimeSchema = z
  .object({
    Start: HandOffTimeSchema.and(
      z.any().openapi({ description: 'Information about when the on-call rotation shift begins.' }),
    ).exactOptional(),
    End: HandOffTimeSchema.and(
      z.any().openapi({ description: 'Information about when the on-call rotation shift ends.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about when an on-call shift begins and ends.',
    required: [],
  })
  .openapi('CoverageTime')

const CoverageTimesSchema = z.array(CoverageTimeSchema).openapi('CoverageTimes')

const ShiftCoveragesMapSchema = z
  .record(z.string(), CoverageTimesSchema)
  .openapi('ShiftCoveragesMap')

const RecurrenceMultiplierSchema = z.int().min(1).max(100).openapi('RecurrenceMultiplier')

const RecurrenceSettingsSchema = z
  .object({
    MonthlySettings: MonthlySettingsSchema.and(
      z.any().openapi({ description: 'Information about on-call rotations that recur monthly.' }),
    ).exactOptional(),
    WeeklySettings: WeeklySettingsSchema.and(
      z.any().openapi({ description: 'Information about on-call rotations that recur weekly.' }),
    ).exactOptional(),
    DailySettings: DailySettingsSchema.and(
      z.any().openapi({ description: 'Information about on-call rotations that recur daily.' }),
    ).exactOptional(),
    NumberOfOnCalls: NumberOfOnCallsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of contacts, or shift team members designated to be on call concurrently during a shift. For example, in an on-call schedule containing ten contacts, a value of <code>2</code> designates that two of them are on call at any given time.',
        }),
    ),
    ShiftCoverages: ShiftCoveragesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the days of the week included in on-call rotation coverage.',
        }),
    ).exactOptional(),
    RecurrenceMultiplier: RecurrenceMultiplierSchema.and(
      z
        .any()
        .openapi({ description: 'The number of days, weeks, or months a single rotation lasts.' }),
    ),
  })
  .openapi({
    required: ['NumberOfOnCalls', 'RecurrenceMultiplier'],
    description:
      'Information about when an on-call rotation is in effect and how long the rotation period lasts.',
  })
  .openapi('RecurrenceSettings')

const CreateRotationRequestSchema = z
  .object({
    Name: RotationNameSchema.and(z.any().openapi({ description: 'The name of the rotation.' })),
    ContactIds: RotationContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Names (ARNs) of the contacts to add to the rotation.</p> <p>The order that you list the contacts in is their shift order in the rotation schedule. To change the order of the contact's shifts, use the <a>UpdateRotation</a> operation.</p>",
        }),
    ),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the rotation goes into effect.' }),
    ).exactOptional(),
    TimeZoneId: TimeZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time zone to base the rotation’s activity on in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time Zone Database</a> on the IANA website.</p> <note> <p>Designators for time zones that don’t support Daylight Savings Time rules, such as Pacific Standard Time (PST) and Pacific Daylight Time (PDT), are not supported.</p> </note>',
        }),
    ),
    Recurrence: RecurrenceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Information about the rule that specifies when a shift's team members rotate.",
        }),
    ),
    Tags: TagsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional metadata to assign to the rotation. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For more information, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/tagging.html">Tagging Incident Manager resources</a> in the <i>Incident Manager User Guide</i>.',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'ContactIds', 'TimeZoneId', 'Recurrence'],
    title: 'CreateRotationRequest',
  })
  .openapi('CreateRotationRequest')

const UuidSchema = z
  .string()
  .regex(/([a-fA-Z0-9]{8,11}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}){1}/)
  .min(36)
  .max(39)
  .openapi('Uuid')

const CreateRotationOverrideResultSchema = z
  .object({
    RotationOverrideId: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the created rotation override.',
        }),
    ),
  })
  .openapi({ required: ['RotationOverrideId'] })
  .openapi('CreateRotationOverrideResult')

const RotationOverrideContactsArnListSchema = z
  .array(SsmContactsArnSchema)
  .min(0)
  .max(30)
  .openapi('RotationOverrideContactsArnList')

const CreateRotationOverrideRequestSchema = z
  .object({
    RotationId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the rotation to create an override for.',
        }),
    ),
    NewContactIds: RotationOverrideContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Names (ARNs) of the contacts to replace those in the current on-call rotation with.</p> <p>If you want to include any current team members in the override shift, you must include their ARNs in the new contact ID list.</p>',
        }),
    ),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the override goes into effect.' }),
    ),
    EndTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the override ends.' }),
    ),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RotationId', 'NewContactIds', 'StartTime', 'EndTime'],
    title: 'CreateRotationOverrideRequest',
  })
  .openapi('CreateRotationOverrideRequest')

const DeactivateContactChannelResultSchema = z.object({}).openapi('DeactivateContactChannelResult')

const DeactivateContactChannelRequestSchema = z
  .object({
    ContactChannelId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) of the contact channel you're deactivating.",
        }),
    ),
  })
  .openapi({ required: ['ContactChannelId'], title: 'DeactivateContactChannelRequest' })
  .openapi('DeactivateContactChannelRequest')

const DeleteContactResultSchema = z.object({}).openapi('DeleteContactResult')

const DeleteContactRequestSchema = z
  .object({
    ContactId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) of the contact that you're deleting.",
        }),
    ),
  })
  .openapi({ required: ['ContactId'], title: 'DeleteContactRequest' })
  .openapi('DeleteContactRequest')

const DeleteContactChannelResultSchema = z.object({}).openapi('DeleteContactChannelResult')

const DeleteContactChannelRequestSchema = z
  .object({
    ContactChannelId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact channel.' }),
    ),
  })
  .openapi({ required: ['ContactChannelId'], title: 'DeleteContactChannelRequest' })
  .openapi('DeleteContactChannelRequest')

const DeleteRotationResultSchema = z.object({}).openapi('DeleteRotationResult')

const DeleteRotationRequestSchema = z
  .object({
    RotationId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the on-call rotation to delete.',
        }),
    ),
  })
  .openapi({ required: ['RotationId'], title: 'DeleteRotationRequest' })
  .openapi('DeleteRotationRequest')

const DeleteRotationOverrideResultSchema = z.object({}).openapi('DeleteRotationOverrideResult')

const DeleteRotationOverrideRequestSchema = z
  .object({
    RotationId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the rotation that was overridden.',
        }),
    ),
    RotationOverrideId: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the on-call rotation override to delete.',
        }),
    ),
  })
  .openapi({
    required: ['RotationId', 'RotationOverrideId'],
    title: 'DeleteRotationOverrideRequest',
  })
  .openapi('DeleteRotationOverrideRequest')

const SenderSchema = z
  .string()
  .regex(/^[\\a-zA-Z0-9_@#%*+=:?.\/!\s-]*$/)
  .max(255)
  .openapi('Sender')

const SubjectSchema = z
  .string()
  .regex(/^[.\s\S]*$/)
  .min(1)
  .max(2048)
  .openapi('Subject')

const ContentSchema = z
  .string()
  .regex(/^[.\s\S]*$/)
  .min(1)
  .max(8192)
  .openapi('Content')

const PublicSubjectSchema = z
  .string()
  .regex(/^[.\s\S]*$/)
  .min(1)
  .max(2048)
  .openapi('PublicSubject')

const PublicContentSchema = z
  .string()
  .regex(/^[.\s\S]*$/)
  .min(1)
  .max(8192)
  .openapi('PublicContent')

const IncidentIdSchema = z
  .string()
  .regex(/^[\\a-zA-Z0-9_@#%*+=:?.\/!\s-]*$/)
  .max(1024)
  .openapi('IncidentId')

const DescribeEngagementResultSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the escalation plan or contacts involved in the engagement.',
        }),
    ),
    EngagementArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the engagement.' }),
    ),
    Sender: SenderSchema.and(
      z.any().openapi({ description: 'The user that started the engagement.' }),
    ),
    Subject: SubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secure subject of the message that was sent to the contact. Use this field for engagements to <code>VOICE</code> and <code>EMAIL</code>.',
        }),
    ),
    Content: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secure content of the message that was sent to the contact. Use this field for engagements to <code>VOICE</code> and <code>EMAIL</code>.',
        }),
    ),
    PublicSubject: PublicSubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The insecure subject of the message that was sent to the contact. Use this field for engagements to <code>SMS</code>.',
        }),
    ).exactOptional(),
    PublicContent: PublicContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The insecure content of the message that was sent to the contact. Use this field for engagements to <code>SMS</code>.',
        }),
    ).exactOptional(),
    IncidentId: IncidentIdSchema.and(
      z.any().openapi({ description: 'The ARN of the incident in which the engagement occurred.' }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the engagement started.' }),
    ).exactOptional(),
    StopTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the engagement ended.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContactArn', 'EngagementArn', 'Sender', 'Subject', 'Content'] })
  .openapi('DescribeEngagementResult')

const DescribeEngagementRequestSchema = z
  .object({
    EngagementId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the engagement you want the details of.',
        }),
    ),
  })
  .openapi({ required: ['EngagementId'], title: 'DescribeEngagementRequest' })
  .openapi('DescribeEngagementRequest')

const DescribePageResultSchema = z
  .object({
    PageArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the engagement to a contact channel.',
        }),
    ),
    EngagementArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the engagement that engaged the contact channel.' }),
    ),
    ContactArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the contact that was engaged.' }),
    ),
    Sender: SenderSchema.and(
      z.any().openapi({ description: 'The user that started the engagement.' }),
    ),
    Subject: SubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secure subject of the message that was sent to the contact. Use this field for engagements to <code>VOICE</code> and <code>EMAIL</code>.',
        }),
    ),
    Content: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secure content of the message that was sent to the contact. Use this field for engagements to <code>VOICE</code> and <code>EMAIL</code>.',
        }),
    ),
    PublicSubject: PublicSubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The insecure subject of the message that was sent to the contact. Use this field for engagements to <code>SMS</code>.',
        }),
    ).exactOptional(),
    PublicContent: PublicContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The insecure content of the message that was sent to the contact. Use this field for engagements to <code>SMS</code>.',
        }),
    ).exactOptional(),
    IncidentId: IncidentIdSchema.and(
      z.any().openapi({ description: 'The ARN of the incident that engaged the contact channel.' }),
    ).exactOptional(),
    SentTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time the engagement was sent to the contact channel.' }),
    ).exactOptional(),
    ReadTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the contact channel acknowledged the engagement.' }),
    ).exactOptional(),
    DeliveryTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the contact channel received the engagement.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['PageArn', 'EngagementArn', 'ContactArn', 'Sender', 'Subject', 'Content'] })
  .openapi('DescribePageResult')

const DescribePageRequestSchema = z
  .object({
    PageId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ID of the engagement to a contact channel.' }),
    ),
  })
  .openapi({ required: ['PageId'], title: 'DescribePageRequest' })
  .openapi('DescribePageRequest')

const GetContactResultSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the contact or escalation plan.' }),
    ),
    Alias: ContactAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias of the contact or escalation plan. The alias is unique and identifiable.',
        }),
    ),
    DisplayName: ContactNameSchema.and(
      z.any().openapi({ description: 'The full name of the contact or escalation plan.' }),
    ).exactOptional(),
    Type: ContactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of contact, either <code>PERSONAL</code> or <code>ESCALATION</code>.',
        }),
    ),
    Plan: PlanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the specific timing or stages and targets of the escalation plan or engagement plan.',
        }),
    ),
  })
  .openapi({ required: ['ContactArn', 'Alias', 'Type', 'Plan'] })
  .openapi('GetContactResult')

const GetContactRequestSchema = z
  .object({
    ContactId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact or escalation plan.',
        }),
    ),
  })
  .openapi({ required: ['ContactId'], title: 'GetContactRequest' })
  .openapi('GetContactRequest')

const ActivationStatusSchema = z.enum(['ACTIVATED', 'NOT_ACTIVATED']).openapi('ActivationStatus')

const GetContactChannelResultSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the contact that the channel belongs to.' }),
    ),
    ContactChannelArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the contact channel.' }),
    ),
    Name: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the contact channel' }),
    ),
    Type: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of contact channel. The type is <code>SMS</code>, <code>VOICE</code>, or <code>EMAIL</code>.',
        }),
    ),
    DeliveryAddress: ContactChannelAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details that Incident Manager uses when trying to engage the contact channel.',
        }),
    ),
    ActivationStatus: ActivationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating if the contact channel has been activated or not.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContactArn', 'ContactChannelArn', 'Name', 'Type', 'DeliveryAddress'] })
  .openapi('GetContactChannelResult')

const GetContactChannelRequestSchema = z
  .object({
    ContactChannelId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the contact channel you want information about.',
        }),
    ),
  })
  .openapi({ required: ['ContactChannelId'], title: 'GetContactChannelRequest' })
  .openapi('GetContactChannelRequest')

const PolicySchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(395000)
  .openapi('Policy')

const GetContactPolicyResultSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the contact or escalation plan.' }),
    ).exactOptional(),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the resource policy attached to the contact or escalation plan.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContactPolicyResult')

const GetContactPolicyRequestSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact or escalation plan.',
        }),
    ),
  })
  .openapi({ required: ['ContactArn'], title: 'GetContactPolicyRequest' })
  .openapi('GetContactPolicyRequest')

const GetRotationResultSchema = z
  .object({
    RotationArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the on-call rotation.' }),
    ),
    Name: RotationNameSchema.and(
      z.any().openapi({ description: 'The name of the on-call rotation.' }),
    ),
    ContactIds: RotationContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the contacts assigned to the on-call rotation team.',
        }),
    ),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The specified start time for the on-call rotation.' }),
    ),
    TimeZoneId: TimeZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time zone that the rotation’s activity is based on, in Internet Assigned Numbers Authority (IANA) format.',
        }),
    ),
    Recurrence: RecurrenceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how long a rotation lasts before restarting at the beginning of the shift order.',
        }),
    ),
  })
  .openapi({
    required: ['RotationArn', 'Name', 'ContactIds', 'StartTime', 'TimeZoneId', 'Recurrence'],
  })
  .openapi('GetRotationResult')

const GetRotationRequestSchema = z
  .object({
    RotationId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the on-call rotation to retrieve information about.',
        }),
    ),
  })
  .openapi({ required: ['RotationId'], title: 'GetRotationRequest' })
  .openapi('GetRotationRequest')

const GetRotationOverrideResultSchema = z
  .object({
    RotationOverrideId: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the override to an on-call rotation.',
        }),
    ).exactOptional(),
    RotationArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the on-call rotation that was overridden.',
        }),
    ).exactOptional(),
    NewContactIds: SsmContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the contacts assigned to the override of the on-call rotation.',
        }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the override goes into effect.' }),
    ).exactOptional(),
    EndTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the override ends.' }),
    ).exactOptional(),
    CreateTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the override was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRotationOverrideResult')

const GetRotationOverrideRequestSchema = z
  .object({
    RotationId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the overridden rotation to retrieve information about.',
        }),
    ),
    RotationOverrideId: UuidSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the on-call rotation override to retrieve information about.',
        }),
    ),
  })
  .openapi({ required: ['RotationId', 'RotationOverrideId'], title: 'GetRotationOverrideRequest' })
  .openapi('GetRotationOverrideRequest')

const PaginationTokenSchema = z
  .string()
  .regex(/^[\\\/a-zA-Z0-9_+=\-]*$/)
  .max(2048)
  .openapi('PaginationToken')

const ContactChannelSchema = z
  .object({
    ContactChannelArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact channel.' }),
    ),
    ContactArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the contact that contains the contact channel.' }),
    ),
    Name: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the contact channel.' }),
    ),
    Type: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the contact channel. Incident Manager supports three contact methods:</p> <ul> <li> <p>SMS</p> </li> <li> <p>VOICE</p> </li> <li> <p>EMAIL</p> </li> </ul>',
        }),
    ).exactOptional(),
    DeliveryAddress: ContactChannelAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details that Incident Manager uses when trying to engage the contact channel.',
        }),
    ),
    ActivationStatus: ActivationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value describing if the contact channel has been activated or not. If the contact channel isn't activated, Incident Manager can't engage the contact through it.",
        }),
    ),
  })
  .openapi({
    required: ['ContactChannelArn', 'ContactArn', 'Name', 'DeliveryAddress', 'ActivationStatus'],
    description: 'The method that Incident Manager uses to engage a contact.',
  })
  .openapi('ContactChannel')

const ContactChannelListSchema = z.array(ContactChannelSchema).openapi('ContactChannelList')

const ListContactChannelsResultSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    ContactChannels: ContactChannelListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of contact channels related to the specified contact.' }),
    ),
  })
  .openapi({ required: ['ContactChannels'] })
  .openapi('ListContactChannelsResult')

const MaxResultsSchema = z.int().min(0).max(1024).openapi('MaxResults')

const ListContactChannelsRequestSchema = z
  .object({
    ContactId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of contact channels per page.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContactId'], title: 'ListContactChannelsRequest' })
  .openapi('ListContactChannelsRequest')

const ContactSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact or escalation plan.',
        }),
    ),
    Alias: ContactAliasSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique and identifiable alias of the contact or escalation plan.',
        }),
    ),
    DisplayName: ContactNameSchema.and(
      z.any().openapi({ description: 'The full name of the contact or escalation plan.' }),
    ).exactOptional(),
    Type: ContactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Refers to the type of contact. A single contact is type <code>PERSONAL</code> and an escalation plan is type <code>ESCALATION</code>.',
        }),
    ),
  })
  .openapi({
    required: ['ContactArn', 'Alias', 'Type'],
    description:
      'A personal contact or escalation plan that Incident Manager engages during an incident.',
  })
  .openapi('Contact')

const ContactsListSchema = z.array(ContactSchema).openapi('ContactsList')

const ListContactsResultSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    Contacts: ContactsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the contacts and escalation plans in your Incident Manager account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListContactsResult')

const ListContactsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of contacts and escalation plans per page of results.',
        }),
    ).exactOptional(),
    AliasPrefix: ContactAliasSchema.and(
      z
        .any()
        .openapi({
          description: "Used to list only contacts who's aliases start with the specified prefix.",
        }),
    ).exactOptional(),
    Type: ContactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of contact. A contact is type <code>PERSONAL</code> and an escalation plan is type <code>ESCALATION</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListContactsRequest', required: [] })
  .openapi('ListContactsRequest')

const EngagementSchema = z
  .object({
    EngagementArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the engagement.' }),
    ),
    ContactArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the escalation plan or contact that Incident Manager is engaging.',
        }),
    ),
    Sender: SenderSchema.and(
      z.any().openapi({ description: 'The user that started the engagement.' }),
    ),
    IncidentId: IncidentIdSchema.and(
      z.any().openapi({ description: "The ARN of the incident that's engaging the contact." }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the engagement began.' }),
    ).exactOptional(),
    StopTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the engagement ended.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EngagementArn', 'ContactArn', 'Sender'],
    description:
      'Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.',
  })
  .openapi('Engagement')

const EngagementsListSchema = z.array(EngagementSchema).openapi('EngagementsList')

const ListEngagementsResultSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    Engagements: EngagementsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of each engagement that occurred during the specified time range of an incident.',
        }),
    ),
  })
  .openapi({ required: ['Engagements'] })
  .openapi('ListEngagementsResult')

const TimeRangeSchema = z
  .object({
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The start of the time range.' }),
    ).exactOptional(),
    EndTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The end of the time range.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A range of between two set times', required: [] })
  .openapi('TimeRange')

const ListEngagementsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of engagements per page of results.' }),
    ).exactOptional(),
    IncidentId: IncidentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the incident you're listing engagements for.",
        }),
    ).exactOptional(),
    TimeRangeValue: TimeRangeSchema.and(
      z.any().openapi({ description: 'The time range to lists engagements for an incident.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEngagementsRequest', required: [] })
  .openapi('ListEngagementsRequest')

const ReceiptTypeSchema = z
  .enum(['DELIVERED', 'ERROR', 'READ', 'SENT', 'STOP'])
  .openapi('ReceiptType')

const ReceiptSchema = z
  .object({
    ContactChannelArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the contact channel Incident Manager engaged.',
        }),
    ).exactOptional(),
    ReceiptType: ReceiptTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type follows the engagement cycle, <code>SENT</code>, <code>DELIVERED</code>, and <code>READ</code>.',
        }),
    ),
    ReceiptInfo: ReceiptInfoSchema.and(
      z.any().openapi({ description: 'Information provided during the page acknowledgement.' }),
    ).exactOptional(),
    ReceiptTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time receipt was <code>SENT</code>, <code>DELIVERED</code>, or <code>READ</code>.',
        }),
    ),
  })
  .openapi({
    required: ['ReceiptType', 'ReceiptTime'],
    description: 'Records events during an engagement.',
  })
  .openapi('Receipt')

const ReceiptsListSchema = z.array(ReceiptSchema).openapi('ReceiptsList')

const ListPageReceiptsResultSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    Receipts: ReceiptsListSchema.and(
      z.any().openapi({ description: 'A list of each acknowledgement.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPageReceiptsResult')

const ListPageReceiptsRequestSchema = z
  .object({
    PageId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the engagement to a specific contact channel.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of acknowledgements per page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['PageId'], title: 'ListPageReceiptsRequest' })
  .openapi('ListPageReceiptsRequest')

const StageIndexSchema = z.int().min(0).max(100).openapi('StageIndex')

const ResolutionContactSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a contact in the engagement resolution process. ',
        }),
    ),
    Type: ContactTypeSchema.and(
      z.any().openapi({ description: 'The type of contact for a resolution step.' }),
    ),
    StageIndex: StageIndexSchema.and(
      z
        .any()
        .openapi({
          description: 'The stage in the escalation plan that resolves to this contact.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ContactArn', 'Type'],
    description:
      '<p>Information about the engagement resolution steps. The resolution starts from the first contact, which can be an escalation plan, then resolves to an on-call rotation, and finally to a personal contact.</p> <p>The <code>ResolutionContact</code> structure describes the information for each node or step in that process. It contains information about different contact types, such as the escalation, rotation, and personal contacts.</p>',
  })
  .openapi('ResolutionContact')

const ResolutionListSchema = z.array(ResolutionContactSchema).openapi('ResolutionList')

const ListPageResolutionsResultSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
    PageResolutions: ResolutionListSchema.and(
      z.any().openapi({ description: 'Information about the resolution for an engagement.' }),
    ),
  })
  .openapi({ required: ['PageResolutions'] })
  .openapi('ListPageResolutionsResult')

const ListPageResolutionsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token to start the list. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
    PageId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact engaged for the incident.',
        }),
    ),
  })
  .openapi({ required: ['PageId'], title: 'ListPageResolutionsRequest' })
  .openapi('ListPageResolutionsRequest')

const PageSchema = z
  .object({
    PageArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the page to the contact channel.',
        }),
    ),
    EngagementArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the engagement that this page is part of.' }),
    ),
    ContactArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the contact that Incident Manager is engaging.' }),
    ),
    Sender: SenderSchema.and(
      z.any().openapi({ description: 'The user that started the engagement.' }),
    ),
    IncidentId: IncidentIdSchema.and(
      z
        .any()
        .openapi({ description: "The ARN of the incident that's engaging the contact channel." }),
    ).exactOptional(),
    SentTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The time that Incident Manager engaged the contact channel.' }),
    ).exactOptional(),
    DeliveryTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The time the message was delivered to the contact channel.' }),
    ).exactOptional(),
    ReadTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the contact channel acknowledged engagement.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PageArn', 'EngagementArn', 'ContactArn', 'Sender'],
    description: "Incident Manager engaging a contact's contact channel.",
  })
  .openapi('Page')

const PagesListSchema = z.array(PageSchema).openapi('PagesList')

const ListPagesByContactResultSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    Pages: PagesListSchema.and(
      z.any().openapi({ description: "The list of engagements to a contact's contact channel." }),
    ),
  })
  .openapi({ required: ['Pages'] })
  .openapi('ListPagesByContactResult')

const ListPagesByContactRequestSchema = z
  .object({
    ContactId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the contact you are retrieving engagements for.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of engagements to contact channels to list per page of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContactId'], title: 'ListPagesByContactRequest' })
  .openapi('ListPagesByContactRequest')

const ListPagesByEngagementResultSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    Pages: PagesListSchema.and(
      z.any().openapi({ description: 'The list of engagements to contact channels.' }),
    ),
  })
  .openapi({ required: ['Pages'] })
  .openapi('ListPagesByEngagementResult')

const ListPagesByEngagementRequestSchema = z
  .object({
    EngagementId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the engagement.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of engagements to contact channels to list per page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EngagementId'], title: 'ListPagesByEngagementRequest' })
  .openapi('ListPagesByEngagementRequest')

const ShiftTypeSchema = z.enum(['REGULAR', 'OVERRIDDEN']).openapi('ShiftType')

const ShiftDetailsSchema = z
  .object({
    OverriddenContactIds: SsmContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resources Names (ARNs) of the contacts who were replaced in a shift when an override was created. If the override is deleted, these contacts are restored to the shift.',
        }),
    ),
  })
  .openapi({
    required: ['OverriddenContactIds'],
    description: 'Information about overrides to an on-call rotation shift.',
  })
  .openapi('ShiftDetails')

const RotationShiftSchema = z
  .object({
    ContactIds: SsmContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the contacts who are part of the shift rotation. ',
        }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time a shift rotation begins.' }),
    ),
    EndTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time a shift rotation ends.' }),
    ),
    Type: ShiftTypeSchema.and(
      z.any().openapi({ description: 'The type of shift rotation.' }),
    ).exactOptional(),
    ShiftDetails: ShiftDetailsSchema.and(
      z.any().openapi({ description: 'Additional information about an on-call rotation shift.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartTime', 'EndTime'],
    description: 'Information about a shift that belongs to an on-call rotation.',
  })
  .openapi('RotationShift')

const RotationShiftsSchema = z.array(RotationShiftSchema).openapi('RotationShifts')

const ListPreviewRotationShiftsResultSchema = z
  .object({
    RotationShifts: RotationShiftsSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about a rotation shift, including times, types, and contacts.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. This token is used to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPreviewRotationShiftsResult')

const MemberSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(512)
  .openapi('Member')

const RotationPreviewMemberListSchema = z
  .array(MemberSchema)
  .min(1)
  .max(30)
  .openapi('RotationPreviewMemberList')

const RotationOverridePreviewMemberListSchema = z
  .array(MemberSchema)
  .min(0)
  .max(30)
  .openapi('RotationOverridePreviewMemberList')

const PreviewOverrideSchema = z
  .object({
    NewMembers: RotationOverridePreviewMemberListSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about contacts to add to an on-call rotation override.',
        }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the time a rotation override would begin.' }),
    ).exactOptional(),
    EndTime: DateTimeSchema.and(
      z.any().openapi({ description: 'Information about the time a rotation override would end.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about contacts and times that an on-call override replaces.',
    required: [],
  })
  .openapi('PreviewOverride')

const OverrideListSchema = z.array(PreviewOverrideSchema).openapi('OverrideList')

const ListPreviewRotationShiftsRequestSchema = z
  .object({
    RotationStartTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time a rotation would begin. The first shift is calculated from this date and time.',
        }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to filter the range of calculated shifts before sending the response back to the user. ',
        }),
    ).exactOptional(),
    EndTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time a rotation shift would end.' }),
    ),
    Members: RotationPreviewMemberListSchema.and(
      z.any().openapi({ description: 'The contacts that would be assigned to a rotation.' }),
    ),
    TimeZoneId: TimeZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time zone the rotation’s activity would be based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". ',
        }),
    ),
    Recurrence: RecurrenceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about how long a rotation would last before restarting at the beginning of the shift order.',
        }),
    ),
    Overrides: OverrideListSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about changes that would be made in a rotation override.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token to start the list. This token is used to get the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return for this call. The call also returns a token that can be specified in a subsequent call to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndTime', 'Members', 'TimeZoneId', 'Recurrence'],
    title: 'ListPreviewRotationShiftsRequest',
  })
  .openapi('ListPreviewRotationShiftsRequest')

const RotationOverrideSchema = z
  .object({
    RotationOverrideId: UuidSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the override to an on-call rotation.',
        }),
    ),
    NewContactIds: SsmContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the contacts assigned to the override of the on-call rotation.',
        }),
    ),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time a rotation override begins.' }),
    ),
    EndTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time a rotation override ends.' }),
    ),
    CreateTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The time a rotation override was created.' }),
    ),
  })
  .openapi({
    required: ['RotationOverrideId', 'NewContactIds', 'StartTime', 'EndTime', 'CreateTime'],
    description: 'Information about an override specified for an on-call rotation.',
  })
  .openapi('RotationOverride')

const RotationOverridesSchema = z.array(RotationOverrideSchema).openapi('RotationOverrides')

const ListRotationOverridesResultSchema = z
  .object({
    RotationOverrides: RotationOverridesSchema.and(
      z.any().openapi({ description: 'A list of rotation overrides in the specified time range.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRotationOverridesResult')

const ListRotationOverridesRequestSchema = z
  .object({
    RotationId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the rotation to retrieve information about.',
        }),
    ),
    StartTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time for the beginning of a time range for listing overrides.',
        }),
    ),
    EndTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time for the end of a time range for listing overrides.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token to start the list. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RotationId', 'StartTime', 'EndTime'],
    title: 'ListRotationOverridesRequest',
  })
  .openapi('ListRotationOverridesRequest')

const ListRotationShiftsResultSchema = z
  .object({
    RotationShifts: RotationShiftsSchema.and(
      z.any().openapi({ description: 'Information about shifts that meet the filter criteria.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRotationShiftsResult')

const ListRotationShiftsRequestSchema = z
  .object({
    RotationId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the rotation to retrieve shift information about. ',
        }),
    ),
    StartTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time for the beginning of the time range to list shifts for.',
        }),
    ).exactOptional(),
    EndTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time for the end of the time range to list shifts for.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token to start the list. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RotationId', 'EndTime'], title: 'ListRotationShiftsRequest' })
  .openapi('ListRotationShiftsRequest')

const RotationSchema = z
  .object({
    RotationArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rotation.' }),
    ),
    Name: RotationNameSchema.and(z.any().openapi({ description: 'The name of the rotation.' })),
    ContactIds: SsmContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the contacts assigned to the rotation team.',
        }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time the rotation becomes active.' }),
    ).exactOptional(),
    TimeZoneId: TimeZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time zone the rotation’s activity is based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". ',
        }),
    ).exactOptional(),
    Recurrence: RecurrenceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about when an on-call rotation is in effect and how long the rotation period lasts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RotationArn', 'Name'],
    description: 'Information about a rotation in an on-call schedule.',
  })
  .openapi('Rotation')

const RotationsSchema = z.array(RotationSchema).openapi('Rotations')

const ListRotationsResultSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of items to return. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
    Rotations: RotationsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about rotations that meet the filter criteria.' }),
    ),
  })
  .openapi({ required: ['Rotations'] })
  .openapi('ListRotationsResult')

const ListRotationsRequestSchema = z
  .object({
    RotationNamePrefix: RotationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A filter to include rotations in list results based on their common prefix. For example, entering prod returns a list of all rotation names that begin with <code>prod</code>, such as <code>production</code> and <code>prod-1</code>.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token to start the list. Use this token to get the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRotationsRequest', required: [] })
  .openapi('ListRotationsRequest')

const ListTagsForResourceResultSchema = z
  .object({
    Tags: TagsListSchema.and(
      z.any().openapi({ description: 'The tags related to the contact or escalation plan.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResult')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact or escalation plan.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutContactPolicyResultSchema = z.object({}).openapi('PutContactPolicyResult')

const PutContactPolicyRequestSchema = z
  .object({
    ContactArn: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact or escalation plan.',
        }),
    ),
    Policy: PolicySchema.and(z.any().openapi({ description: 'Details of the resource policy.' })),
  })
  .openapi({ required: ['ContactArn', 'Policy'], title: 'PutContactPolicyRequest' })
  .openapi('PutContactPolicyRequest')

const SendActivationCodeResultSchema = z.object({}).openapi('SendActivationCodeResult')

const SendActivationCodeRequestSchema = z
  .object({
    ContactChannelId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the contact channel.' }),
    ),
  })
  .openapi({ required: ['ContactChannelId'], title: 'SendActivationCodeRequest' })
  .openapi('SendActivationCodeRequest')

const StartEngagementResultSchema = z
  .object({
    EngagementArn: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The ARN of the engagement.' }),
    ),
  })
  .openapi({ required: ['EngagementArn'] })
  .openapi('StartEngagementResult')

const StartEngagementRequestSchema = z
  .object({
    ContactId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the contact being engaged.' }),
    ),
    Sender: SenderSchema.and(
      z.any().openapi({ description: 'The user that started the engagement.' }),
    ),
    Subject: SubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secure subject of the message that was sent to the contact. Use this field for engagements to <code>VOICE</code> or <code>EMAIL</code>.',
        }),
    ),
    Content: ContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secure content of the message that was sent to the contact. Use this field for engagements to <code>VOICE</code> or <code>EMAIL</code>.',
        }),
    ),
    PublicSubject: PublicSubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The insecure subject of the message that was sent to the contact. Use this field for engagements to <code>SMS</code>.',
        }),
    ).exactOptional(),
    PublicContent: PublicContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The insecure content of the message that was sent to the contact. Use this field for engagements to <code>SMS</code>.',
        }),
    ).exactOptional(),
    IncidentId: IncidentIdSchema.and(
      z.any().openapi({ description: 'The ARN of the incident that the engagement is part of.' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token ensuring that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ContactId', 'Sender', 'Subject', 'Content'],
    title: 'StartEngagementRequest',
  })
  .openapi('StartEngagementRequest')

const StopEngagementResultSchema = z.object({}).openapi('StopEngagementResult')

const StopReasonSchema = z
  .string()
  .regex(/^[.\s\S]*$/)
  .max(255)
  .openapi('StopReason')

const StopEngagementRequestSchema = z
  .object({
    EngagementId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the engagement.' }),
    ),
    Reason: StopReasonSchema.and(
      z.any().openapi({ description: "The reason that you're stopping the engagement." }),
    ).exactOptional(),
  })
  .openapi({ required: ['EngagementId'], title: 'StopEngagementRequest' })
  .openapi('StopEngagementRequest')

const TagResourceResultSchema = z.object({}).openapi('TagResourceResult')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact or escalation plan.',
        }),
    ),
    Tags: TagsListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tags that you are adding to the contact or escalation plan.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResultSchema = z.object({}).openapi('UntagResourceResult')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact or escalation plan.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The key of the tag that you want to remove.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateContactResultSchema = z.object({}).openapi('UpdateContactResult')

const UpdateContactRequestSchema = z
  .object({
    ContactId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the contact or escalation plan you're updating.",
        }),
    ),
    DisplayName: ContactNameSchema.and(
      z.any().openapi({ description: 'The full name of the contact or escalation plan.' }),
    ).exactOptional(),
    Plan: PlanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of stages. A contact has an engagement plan with stages for specified contact channels. An escalation plan uses these stages to contact specified contacts.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContactId'], title: 'UpdateContactRequest' })
  .openapi('UpdateContactRequest')

const UpdateContactChannelResultSchema = z.object({}).openapi('UpdateContactChannelResult')

const UpdateContactChannelRequestSchema = z
  .object({
    ContactChannelId: SsmContactsArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the contact channel you want to update.',
        }),
    ),
    Name: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the contact channel.' }),
    ).exactOptional(),
    DeliveryAddress: ContactChannelAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details that Incident Manager uses when trying to engage the contact channel.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContactChannelId'], title: 'UpdateContactChannelRequest' })
  .openapi('UpdateContactChannelRequest')

const UpdateRotationResultSchema = z.object({}).openapi('UpdateRotationResult')

const UpdateRotationRequestSchema = z
  .object({
    RotationId: SsmContactsArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rotation to update.' }),
    ),
    ContactIds: RotationContactsArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Names (ARNs) of the contacts to include in the updated rotation. </p> <p>The order in which you list the contacts is their shift order in the rotation schedule.</p>',
        }),
    ).exactOptional(),
    StartTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time the rotation goes into effect.' }),
    ).exactOptional(),
    TimeZoneId: TimeZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time zone to base the updated rotation’s activity on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time Zone Database</a> on the IANA website.</p> <note> <p>Designators for time zones that don’t support Daylight Savings Time Rules, such as Pacific Standard Time (PST) and Pacific Daylight Time (PDT), aren\'t supported.</p> </note>',
        }),
    ).exactOptional(),
    Recurrence: RecurrenceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about how long the updated rotation lasts before restarting at the beginning of the shift order.',
        }),
    ),
  })
  .openapi({ required: ['RotationId', 'Recurrence'], title: 'UpdateRotationRequest' })
  .openapi('UpdateRotationRequest')

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

export const postXAmzTargetSSMContactsAcceptPageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.AcceptPage',
  description: 'Used to acknowledge an engagement to a contact channel during an incident.',
  operationId: 'AcceptPage',
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
        .literal('SSMContacts.AcceptPage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.AcceptPage'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptPageRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptPageResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsActivateContactChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ActivateContactChannel',
  description:
    "Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.",
  operationId: 'ActivateContactChannel',
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
        .literal('SSMContacts.ActivateContactChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ActivateContactChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ActivateContactChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivateContactChannelResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsCreateContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.CreateContact',
  description:
    'Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.',
  operationId: 'CreateContact',
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
        .literal('SSMContacts.CreateContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.CreateContact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateContactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContactResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsCreateContactChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.CreateContactChannel',
  description: 'A contact channel is the method that Incident Manager uses to engage your contact.',
  operationId: 'CreateContactChannel',
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
        .literal('SSMContacts.CreateContactChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.CreateContactChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateContactChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContactChannelResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsCreateRotationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.CreateRotation',
  description: 'Creates a rotation in an on-call schedule.',
  operationId: 'CreateRotation',
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
        .literal('SSMContacts.CreateRotation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.CreateRotation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRotationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRotationResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsCreateRotationOverrideRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.CreateRotationOverride',
  description: 'Creates an override for a rotation in an on-call schedule.',
  operationId: 'CreateRotationOverride',
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
        .literal('SSMContacts.CreateRotationOverride')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.CreateRotationOverride'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRotationOverrideRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRotationOverrideResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsDeactivateContactChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.DeactivateContactChannel',
  description:
    'To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.',
  operationId: 'DeactivateContactChannel',
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
        .literal('SSMContacts.DeactivateContactChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.DeactivateContactChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeactivateContactChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeactivateContactChannelResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsDeleteContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.DeleteContact',
  description:
    'To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.',
  operationId: 'DeleteContact',
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
        .literal('SSMContacts.DeleteContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.DeleteContact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteContactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContactResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsDeleteContactChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.DeleteContactChannel',
  description:
    "To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.",
  operationId: 'DeleteContactChannel',
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
        .literal('SSMContacts.DeleteContactChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.DeleteContactChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteContactChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContactChannelResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsDeleteRotationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.DeleteRotation',
  description:
    'Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.',
  operationId: 'DeleteRotation',
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
        .literal('SSMContacts.DeleteRotation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.DeleteRotation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRotationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRotationResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsDeleteRotationOverrideRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.DeleteRotationOverride',
  description: 'Deletes an existing override for an on-call rotation.',
  operationId: 'DeleteRotationOverride',
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
        .literal('SSMContacts.DeleteRotationOverride')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.DeleteRotationOverride'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRotationOverrideRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRotationOverrideResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsDescribeEngagementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.DescribeEngagement',
  description:
    'Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.',
  operationId: 'DescribeEngagement',
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
        .literal('SSMContacts.DescribeEngagement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.DescribeEngagement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEngagementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEngagementResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsDescribePageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.DescribePage',
  description: 'Lists details of the engagement to a contact channel.',
  operationId: 'DescribePage',
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
        .literal('SSMContacts.DescribePage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.DescribePage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePageResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsGetContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.GetContact',
  description: 'Retrieves information about the specified contact or escalation plan.',
  operationId: 'GetContact',
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
        .literal('SSMContacts.GetContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.GetContact'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetContactRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContactResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsGetContactChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.GetContactChannel',
  description: 'List details about a specific contact channel.',
  operationId: 'GetContactChannel',
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
        .literal('SSMContacts.GetContactChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.GetContactChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContactChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContactChannelResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsGetContactPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.GetContactPolicy',
  description:
    'Retrieves the resource policies attached to the specified contact or escalation plan.',
  operationId: 'GetContactPolicy',
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
        .literal('SSMContacts.GetContactPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.GetContactPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContactPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContactPolicyResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsGetRotationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.GetRotation',
  description: 'Retrieves information about an on-call rotation.',
  operationId: 'GetRotation',
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
        .literal('SSMContacts.GetRotation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.GetRotation'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRotationRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRotationResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsGetRotationOverrideRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.GetRotationOverride',
  description: 'Retrieves information about an override to an on-call rotation.',
  operationId: 'GetRotationOverride',
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
        .literal('SSMContacts.GetRotationOverride')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.GetRotationOverride'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRotationOverrideRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRotationOverrideResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListContactChannelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListContactChannels',
  description: 'Lists all contact channels for the specified contact.',
  operationId: 'ListContactChannels',
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
        .literal('SSMContacts.ListContactChannels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListContactChannels'] },
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
      content: { 'application/json': { schema: ListContactChannelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListContactChannelsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListContactsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListContacts',
  description: 'Lists all contacts and escalation plans in Incident Manager.',
  operationId: 'ListContacts',
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
        .literal('SSMContacts.ListContacts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListContacts'] },
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
      content: { 'application/json': { schema: ListContactsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListContactsResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListEngagementsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListEngagements',
  description: 'Lists all engagements that have happened in an incident.',
  operationId: 'ListEngagements',
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
        .literal('SSMContacts.ListEngagements')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListEngagements'] },
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
      content: { 'application/json': { schema: ListEngagementsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEngagementsResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListPageReceiptsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListPageReceipts',
  description: 'Lists all of the engagements to contact channels that have been acknowledged.',
  operationId: 'ListPageReceipts',
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
        .literal('SSMContacts.ListPageReceipts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListPageReceipts'] },
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
      content: { 'application/json': { schema: ListPageReceiptsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPageReceiptsResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListPageResolutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListPageResolutions',
  description:
    'Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.',
  operationId: 'ListPageResolutions',
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
        .literal('SSMContacts.ListPageResolutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListPageResolutions'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: ListPageResolutionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPageResolutionsResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListPagesByContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListPagesByContact',
  description: "Lists the engagements to a contact's contact channels.",
  operationId: 'ListPagesByContact',
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
        .literal('SSMContacts.ListPagesByContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListPagesByContact'] },
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
      content: { 'application/json': { schema: ListPagesByContactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPagesByContactResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListPagesByEngagementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListPagesByEngagement',
  description: 'Lists the engagements to contact channels that occurred by engaging a contact.',
  operationId: 'ListPagesByEngagement',
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
        .literal('SSMContacts.ListPagesByEngagement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListPagesByEngagement'] },
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
      content: { 'application/json': { schema: ListPagesByEngagementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPagesByEngagementResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListPreviewRotationShiftsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListPreviewRotationShifts',
  description:
    '<p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>',
  operationId: 'ListPreviewRotationShifts',
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
        .literal('SSMContacts.ListPreviewRotationShifts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListPreviewRotationShifts'] },
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
      content: { 'application/json': { schema: ListPreviewRotationShiftsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPreviewRotationShiftsResultSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListRotationOverridesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListRotationOverrides',
  description: 'Retrieves a list of overrides currently specified for an on-call rotation.',
  operationId: 'ListRotationOverrides',
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
        .literal('SSMContacts.ListRotationOverrides')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListRotationOverrides'] },
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
      content: { 'application/json': { schema: ListRotationOverridesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRotationOverridesResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListRotationShiftsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListRotationShifts',
  description: 'Returns a list of shifts generated by an existing rotation in the system.',
  operationId: 'ListRotationShifts',
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
        .literal('SSMContacts.ListRotationShifts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListRotationShifts'] },
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
      content: { 'application/json': { schema: ListRotationShiftsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRotationShiftsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListRotationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListRotations',
  description: 'Retrieves a list of on-call rotations.',
  operationId: 'ListRotations',
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
        .literal('SSMContacts.ListRotations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListRotations'] },
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
      content: { 'application/json': { schema: ListRotationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRotationsResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.ListTagsForResource',
  description: 'Lists the tags of an escalation plan or contact.',
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
        .literal('SSMContacts.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsPutContactPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.PutContactPolicy',
  description:
    'Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.',
  operationId: 'PutContactPolicy',
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
        .literal('SSMContacts.PutContactPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.PutContactPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutContactPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutContactPolicyResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
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
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsSendActivationCodeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.SendActivationCode',
  description:
    "Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.",
  operationId: 'SendActivationCode',
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
        .literal('SSMContacts.SendActivationCode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.SendActivationCode'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendActivationCodeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendActivationCodeResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsStartEngagementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.StartEngagement',
  description:
    'Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.',
  operationId: 'StartEngagement',
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
        .literal('SSMContacts.StartEngagement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.StartEngagement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartEngagementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartEngagementResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsStopEngagementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.StopEngagement',
  description:
    "Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.",
  operationId: 'StopEngagement',
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
        .literal('SSMContacts.StopEngagement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.StopEngagement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopEngagementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopEngagementResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.TagResource',
  description:
    'Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.',
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
        .literal('SSMContacts.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.UntagResource',
  description: 'Removes tags from the specified resource.',
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
        .literal('SSMContacts.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsUpdateContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.UpdateContact',
  description: 'Updates the contact or escalation plan specified.',
  operationId: 'UpdateContact',
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
        .literal('SSMContacts.UpdateContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.UpdateContact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateContactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateContactResultSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsUpdateContactChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.UpdateContactChannel',
  description: "Updates a contact's contact channel.",
  operationId: 'UpdateContactChannel',
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
        .literal('SSMContacts.UpdateContactChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.UpdateContactChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateContactChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateContactChannelResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'DataEncryptionException',
      content: { 'application/json': { schema: DataEncryptionExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSSMContactsUpdateRotationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SSMContacts.UpdateRotation',
  description: 'Updates the information specified for an on-call rotation.',
  operationId: 'UpdateRotation',
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
        .literal('SSMContacts.UpdateRotation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SSMContacts.UpdateRotation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRotationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRotationResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
