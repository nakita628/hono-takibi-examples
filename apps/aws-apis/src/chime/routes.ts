import { createRoute, z } from '@hono/zod-openapi'

const AudioMuxTypeSchema = z
  .enum(['AudioOnly', 'AudioWithActiveSpeakerVideo'])
  .openapi('AudioMuxType')

const AudioArtifactsConfigurationSchema = z
  .object({
    MuxType: AudioMuxTypeSchema.and(
      z.any().openapi({ description: 'The MUX type of the audio artifact configuration object.' }),
    ),
  })
  .openapi({ required: ['MuxType'], description: 'The audio artifact configuration object.' })
  .openapi('AudioArtifactsConfiguration')

const ArtifactsStateSchema = z.enum(['Enabled', 'Disabled']).openapi('ArtifactsState')

const VideoMuxTypeSchema = z.literal('VideoOnly').openapi('VideoMuxType')

const VideoArtifactsConfigurationSchema = z
  .object({
    State: ArtifactsStateSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the video artifact is enabled or disabled.' }),
    ),
    MuxType: VideoMuxTypeSchema.and(
      z.any().openapi({ description: 'The MUX type of the video artifact configuration object.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['State'], description: 'The video artifact configuration object.' })
  .openapi('VideoArtifactsConfiguration')

const ContentMuxTypeSchema = z.literal('ContentOnly').openapi('ContentMuxType')

const ContentArtifactsConfigurationSchema = z
  .object({
    State: ArtifactsStateSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the content artifact is enabled or disabled.' }),
    ),
    MuxType: ContentMuxTypeSchema.and(
      z.any().openapi({ description: 'The MUX type of the artifact configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['State'], description: 'The content artifact object.' })
  .openapi('ContentArtifactsConfiguration')

type ArtifactsConfigurationType = {
  Audio: z.infer<typeof AudioArtifactsConfigurationSchema> & { [key: string]: unknown }
  Video: z.infer<typeof VideoArtifactsConfigurationSchema> & { [key: string]: unknown }
  Content: z.infer<typeof ContentArtifactsConfigurationSchema> & { [key: string]: unknown }
}

const StringSchema = z.string().openapi('String')

const E164PhoneNumberSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/)
  .openapi('E164PhoneNumber')

const Alpha2CountryCodeSchema = z
  .string()
  .regex(/[A-Z]{2}/)
  .openapi('Alpha2CountryCode')

const PhoneNumberTypeSchema = z.enum(['Local', 'TollFree']).openapi('PhoneNumberType')

const PhoneNumberProductTypeSchema = z
  .enum(['BusinessCalling', 'VoiceConnector', 'SipMediaApplicationDialIn'])
  .openapi('PhoneNumberProductType')

const PhoneNumberStatusSchema = z
  .enum([
    'AcquireInProgress',
    'AcquireFailed',
    'Unassigned',
    'Assigned',
    'ReleaseInProgress',
    'DeleteInProgress',
    'ReleaseFailed',
    'DeleteFailed',
  ])
  .openapi('PhoneNumberStatus')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const PhoneNumberCapabilitiesSchema = z
  .object({
    InboundCall: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Allows or denies inbound calling for the specified phone number.',
        }),
    ).exactOptional(),
    OutboundCall: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Allows or denies outbound calling for the specified phone number.',
        }),
    ).exactOptional(),
    InboundSMS: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Allows or denies inbound SMS messaging for the specified phone number.',
        }),
    ).exactOptional(),
    OutboundSMS: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Allows or denies outbound SMS messaging for the specified phone number.',
        }),
    ).exactOptional(),
    InboundMMS: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Allows or denies inbound MMS messaging for the specified phone number.',
        }),
    ).exactOptional(),
    OutboundMMS: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Allows or denies outbound MMS messaging for the specified phone number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging.',
    required: [],
  })
  .openapi('PhoneNumberCapabilities')

const PhoneNumberAssociationNameSchema = z
  .enum(['AccountId', 'UserId', 'VoiceConnectorId', 'VoiceConnectorGroupId', 'SipRuleId'])
  .openapi('PhoneNumberAssociationName')

const Iso8601TimestampSchema = z.iso.datetime({ offset: true }).openapi('Iso8601Timestamp')

const PhoneNumberAssociationSchema = z
  .object({
    Value: StringSchema.and(
      z.any().openapi({ description: 'Contains the ID for the entity specified in Name.' }),
    ).exactOptional(),
    Name: PhoneNumberAssociationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.',
        }),
    ).exactOptional(),
    AssociatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of the phone number association, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.',
    required: [],
  })
  .openapi('PhoneNumberAssociation')

const PhoneNumberAssociationListSchema = z
  .array(PhoneNumberAssociationSchema)
  .openapi('PhoneNumberAssociationList')

const CallingNameSchema = z
  .string()
  .regex(/^$|^[a-zA-Z0-9 ]{2,15}$/)
  .openapi('CallingName')

const CallingNameStatusSchema = z
  .enum(['Unassigned', 'UpdateInProgress', 'UpdateSucceeded', 'UpdateFailed'])
  .openapi('CallingNameStatus')

type PhoneNumberType = {
  PhoneNumberId?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  E164PhoneNumber?: z.infer<typeof E164PhoneNumberSchema> & { [key: string]: unknown }
  Country?: z.infer<typeof Alpha2CountryCodeSchema> & { [key: string]: unknown }
  Type?: z.infer<typeof PhoneNumberTypeSchema> & { [key: string]: unknown }
  ProductType?: z.infer<typeof PhoneNumberProductTypeSchema> & { [key: string]: unknown }
  Status?: z.infer<typeof PhoneNumberStatusSchema> & { [key: string]: unknown }
  Capabilities?: z.infer<typeof PhoneNumberCapabilitiesSchema> & { [key: string]: unknown }
  Associations?: z.infer<typeof PhoneNumberAssociationListSchema> & { [key: string]: unknown }
  CallingName?: z.infer<typeof CallingNameSchema> & { [key: string]: unknown }
  CallingNameStatus?: z.infer<typeof CallingNameStatusSchema> & { [key: string]: unknown }
  CreatedTimestamp?: z.infer<typeof Iso8601TimestampSchema> & { [key: string]: unknown }
  UpdatedTimestamp?: z.infer<typeof Iso8601TimestampSchema> & { [key: string]: unknown }
  DeletionTimestamp?: z.infer<typeof Iso8601TimestampSchema> & { [key: string]: unknown }
}

const RetentionDaysSchema = z.int().min(1).max(5475).openapi('RetentionDays')

const RoomRetentionSettingsSchema = z
  .object({
    RetentionDays: RetentionDaysSchema.and(
      z
        .any()
        .openapi({ description: 'The number of days for which to retain chat-room messages.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account.',
    required: [],
  })
  .openapi('RoomRetentionSettings')

const ConversationRetentionSettingsSchema = z
  .object({
    RetentionDays: RetentionDaysSchema.and(
      z
        .any()
        .openapi({ description: 'The number of days for which to retain conversation messages.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account.',
    required: [],
  })
  .openapi('ConversationRetentionSettings')

type RetentionSettingsType = {
  RoomRetentionSettings?: z.infer<typeof RoomRetentionSettingsSchema> & { [key: string]: unknown }
  ConversationRetentionSettings?: z.infer<typeof ConversationRetentionSettingsSchema> & {
    [key: string]: unknown
  }
}

const AssociatePhoneNumberWithUserResponseSchema = z
  .object({})
  .openapi('AssociatePhoneNumberWithUserResponse')

const UnauthorizedClientExceptionSchema = z.any().openapi('UnauthorizedClientException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottledClientExceptionSchema = z.any().openapi('ThrottledClientException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ServiceFailureExceptionSchema = z.any().openapi('ServiceFailureException')

const NonEmptyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('NonEmptyString')

const ErrorCodeSchema = z
  .enum([
    'BadRequest',
    'Conflict',
    'Forbidden',
    'NotFound',
    'PreconditionFailed',
    'ResourceLimitExceeded',
    'ServiceFailure',
    'AccessDenied',
    'ServiceUnavailable',
    'Throttled',
    'Throttling',
    'Unauthorized',
    'Unprocessable',
    'VoiceConnectorGroupAssociationsExist',
    'PhoneNumberAssociationsExist',
  ])
  .openapi('ErrorCode')

const PhoneNumberErrorSchema = z
  .object({
    PhoneNumberId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The phone number ID for which the action failed.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.',
    required: [],
  })
  .openapi('PhoneNumberError')

const PhoneNumberErrorListSchema = z.array(PhoneNumberErrorSchema).openapi('PhoneNumberErrorList')

const AssociatePhoneNumbersWithVoiceConnectorResponseSchema = z
  .object({
    PhoneNumberErrors: PhoneNumberErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociatePhoneNumbersWithVoiceConnectorResponse')

const AssociatePhoneNumbersWithVoiceConnectorGroupResponseSchema = z
  .object({
    PhoneNumberErrors: PhoneNumberErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociatePhoneNumbersWithVoiceConnectorGroupResponse')

const AssociateSigninDelegateGroupsWithAccountResponseSchema = z
  .object({})
  .openapi('AssociateSigninDelegateGroupsWithAccountResponse')

const SigninDelegateGroupSchema = z
  .object({
    GroupName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The group name.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An Active Directory (AD) group whose members are granted permission to act as delegates.',
    required: [],
  })
  .openapi('SigninDelegateGroup')

const ExternalUserIdTypeSchema = z.string().min(2).max(64).openapi('ExternalUserIdType')

const GuidStringSchema = z
  .string()
  .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
  .openapi('GuidString')

const JoinTokenStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9+\/]+$/)
  .min(2)
  .max(2048)
  .openapi('JoinTokenString')

const AttendeeSchema = z
  .object({
    ExternalUserId: ExternalUserIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.',
        }),
    ).exactOptional(),
    AttendeeId: GuidStringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime SDK attendee ID.' }),
    ).exactOptional(),
    JoinToken: JoinTokenStringSchema.and(
      z.any().openapi({ description: 'The join token used by the Amazon Chime SDK attendee.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code> . The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting. </p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p>',
    required: [],
  })
  .openapi('Attendee')

const AttendeeListSchema = z.array(AttendeeSchema).openapi('AttendeeList')

const CreateAttendeeErrorSchema = z
  .object({
    ExternalUserId: ExternalUserIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.',
        }),
    ).exactOptional(),
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.',
    required: [],
  })
  .openapi('CreateAttendeeError')

const BatchCreateAttendeeErrorListSchema = z
  .array(CreateAttendeeErrorSchema)
  .openapi('BatchCreateAttendeeErrorList')

const BatchCreateAttendeeResponseSchema = z
  .object({
    Attendees: AttendeeListSchema.and(
      z
        .any()
        .openapi({
          description: 'The attendee information, including attendees IDs and join tokens.',
        }),
    ).exactOptional(),
    Errors: BatchCreateAttendeeErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchCreateAttendeeResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(1).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })),
    Value: TagValueSchema.and(z.any().openapi({ description: 'The value of the tag.' })),
  })
  .openapi({ required: ['Key', 'Value'], description: 'Describes a tag applied to a resource.' })
  .openapi('Tag')

const AttendeeTagListSchema = z.array(TagSchema).min(1).max(10).openapi('AttendeeTagList')

const CreateAttendeeRequestItemSchema = z
  .object({
    ExternalUserId: ExternalUserIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.',
        }),
    ),
    Tags: AttendeeTagListSchema.and(
      z.any().openapi({ description: 'The tag key-value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ExternalUserId'],
    description:
      'The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.',
  })
  .openapi('CreateAttendeeRequestItem')

const ResourceLimitExceededExceptionSchema = z.any().openapi('ResourceLimitExceededException')

const ChimeArnSchema = z
  .string()
  .regex(
    /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
  )
  .min(5)
  .max(1600)
  .openapi('ChimeArn')

const ResourceNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(0)
  .max(256)
  .openapi('ResourceName')

const IdentitySchema = z
  .object({
    Arn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN in an Identity.' }),
    ).exactOptional(),
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name in an Identity.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of a user.', required: [] })
  .openapi('Identity')

const ChannelMembershipTypeSchema = z.enum(['DEFAULT', 'HIDDEN']).openapi('ChannelMembershipType')

const MembersSchema = z.array(IdentitySchema).openapi('Members')

const BatchChannelMembershipsSchema = z
  .object({
    InvitedBy: IdentitySchema.and(
      z.any().openapi({ description: 'The identifier of the member who invited another member.' }),
    ).exactOptional(),
    Type: ChannelMembershipTypeSchema.and(
      z.any().openapi({ description: 'The membership types set for the channel users.' }),
    ).exactOptional(),
    Members: MembersSchema.and(
      z.any().openapi({ description: 'The users successfully added to the request.' }),
    ).exactOptional(),
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: "The ARN of the channel to which you're adding users." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The membership information, including member ARNs, the channel ARN, and membership types.',
    required: [],
  })
  .openapi('BatchChannelMemberships')

const BatchCreateChannelMembershipErrorSchema = z
  .object({
    MemberArn: ChimeArnSchema.and(
      z.any().openapi({ description: "The ARN of the member that the service couldn't add." }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A list of failed member ARNs, error codes, and error messages.',
    required: [],
  })
  .openapi('BatchCreateChannelMembershipError')

const BatchCreateChannelMembershipErrorsSchema = z
  .array(BatchCreateChannelMembershipErrorSchema)
  .openapi('BatchCreateChannelMembershipErrors')

const BatchCreateChannelMembershipResponseSchema = z
  .object({
    BatchChannelMemberships: BatchChannelMembershipsSchema.and(
      z.any().openapi({ description: 'The list of channel memberships in the response.' }),
    ).exactOptional(),
    Errors: BatchCreateChannelMembershipErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the memberships in the request, a list of the memberships is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchCreateChannelMembershipResponse')

const MemberErrorSchema = z
  .object({
    MemberId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The member ID.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The list of errors returned when a member action results in an error.',
    required: [],
  })
  .openapi('MemberError')

const MemberErrorListSchema = z.array(MemberErrorSchema).openapi('MemberErrorList')

const BatchCreateRoomMembershipResponseSchema = z
  .object({
    Errors: MemberErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchCreateRoomMembershipResponse')

const RoomMembershipRoleSchema = z.enum(['Administrator', 'Member']).openapi('RoomMembershipRole')

const MembershipItemSchema = z
  .object({
    MemberId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The member ID.' }),
    ).exactOptional(),
    Role: RoomMembershipRoleSchema.and(
      z.any().openapi({ description: 'The member role.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Membership details, such as member ID and member role.', required: [] })
  .openapi('MembershipItem')

const BatchDeletePhoneNumberResponseSchema = z
  .object({
    PhoneNumberErrors: PhoneNumberErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDeletePhoneNumberResponse')

const UserErrorSchema = z
  .object({
    UserId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The user ID for which the action failed.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.',
    required: [],
  })
  .openapi('UserError')

const UserErrorListSchema = z.array(UserErrorSchema).openapi('UserErrorList')

const BatchSuspendUserResponseSchema = z
  .object({
    UserErrors: UserErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <a>BatchSuspendUser</a> action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchSuspendUserResponse')

const BatchUnsuspendUserResponseSchema = z
  .object({
    UserErrors: UserErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchUnsuspendUserResponse')

const BatchUpdatePhoneNumberResponseSchema = z
  .object({
    PhoneNumberErrors: PhoneNumberErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchUpdatePhoneNumberResponse')

const UpdatePhoneNumberRequestItemSchema = z
  .object({
    PhoneNumberId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The phone number ID to update.' }),
    ),
    ProductType: PhoneNumberProductTypeSchema.and(
      z.any().openapi({ description: 'The product type to update.' }),
    ).exactOptional(),
    CallingName: CallingNameSchema.and(
      z.any().openapi({ description: 'The outbound calling name to update.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PhoneNumberId'],
    description:
      'The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.',
  })
  .openapi('UpdatePhoneNumberRequestItem')

const BatchUpdateUserResponseSchema = z
  .object({
    UserErrors: UserErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <a>BatchUpdateUser</a> action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchUpdateUserResponse')

const LicenseSchema = z.enum(['Basic', 'Plus', 'Pro', 'ProTrial']).openapi('License')

const UserTypeSchema = z.enum(['PrivateUser', 'SharedDevice']).openapi('UserType')

const BooleanSchema = z.boolean().openapi('Boolean')

const SensitiveStringSchema = z.string().openapi('SensitiveString')

const AlexaForBusinessMetadataSchema = z
  .object({
    IsAlexaForBusinessEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Starts or stops Alexa for Business.' }),
    ).exactOptional(),
    AlexaForBusinessRoomArn: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The ARN of the room resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.',
    required: [],
  })
  .openapi('AlexaForBusinessMetadata')

const UpdateUserRequestItemSchema = z
  .object({
    UserId: NonEmptyStringSchema.and(z.any().openapi({ description: 'The user ID.' })),
    LicenseType: LicenseSchema.and(
      z.any().openapi({ description: 'The user license type.' }),
    ).exactOptional(),
    UserType: UserTypeSchema.and(
      z.any().openapi({ description: 'The user type.' }),
    ).exactOptional(),
    AlexaForBusinessMetadata: AlexaForBusinessMetadataSchema.and(
      z.any().openapi({ description: 'The Alexa for Business metadata.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserId'],
    description:
      'The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action.',
  })
  .openapi('UpdateUserRequestItem')

const AccountTypeSchema = z
  .enum(['Team', 'EnterpriseDirectory', 'EnterpriseLWA', 'EnterpriseOIDC'])
  .openapi('AccountType')

const LicenseListSchema = z.array(LicenseSchema).openapi('LicenseList')

const AccountStatusSchema = z.enum(['Suspended', 'Active']).openapi('AccountStatus')

const SigninDelegateGroupListSchema = z
  .array(SigninDelegateGroupSchema)
  .openapi('SigninDelegateGroupList')

const AccountSchema = z
  .object({
    AwsAccountId: StringSchema.and(z.any().openapi({ description: 'The AWS account ID.' })),
    AccountId: StringSchema.and(z.any().openapi({ description: 'The Amazon Chime account ID.' })),
    Name: StringSchema.and(z.any().openapi({ description: 'The Amazon Chime account name.' })),
    AccountType: AccountTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Chime account type. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.',
        }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Chime account creation timestamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
    DefaultLicense: LicenseSchema.and(
      z.any().openapi({ description: 'The default license for the Amazon Chime account.' }),
    ).exactOptional(),
    SupportedLicenses: LicenseListSchema.and(
      z.any().openapi({ description: 'Supported licenses for the Amazon Chime account.' }),
    ).exactOptional(),
    AccountStatus: AccountStatusSchema.and(
      z.any().openapi({ description: 'The status of the account.' }),
    ).exactOptional(),
    SigninDelegateGroups: SigninDelegateGroupListSchema.and(
      z.any().openapi({ description: 'The sign-in delegate groups associated with the account.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AwsAccountId', 'AccountId', 'Name'],
    description:
      'The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.',
  })
  .openapi('Account')

const CreateAccountResponseSchema = z
  .object({
    Account: AccountSchema.and(
      z.any().openapi({ description: 'The Amazon Chime account details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAccountResponse')

const CreateAppInstanceResponseSchema = z
  .object({
    AppInstanceArn: ChimeArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Number (ARN) of the <code>AppInstance</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAppInstanceResponse')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const CreateAppInstanceAdminResponseSchema = z
  .object({
    AppInstanceAdmin: IdentitySchema.and(
      z
        .any()
        .openapi({
          description: 'The name and ARN of the admin for the <code>AppInstance</code>.',
        }),
    ).exactOptional(),
    AppInstanceArn: ChimeArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the of the admin for the <code>AppInstance</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAppInstanceAdminResponse')

const CreateAppInstanceUserResponseSchema = z
  .object({
    AppInstanceUserArn: ChimeArnSchema.and(
      z.any().openapi({ description: "The user's ARN." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAppInstanceUserResponse')

const CreateAttendeeResponseSchema = z
  .object({
    Attendee: AttendeeSchema.and(
      z
        .any()
        .openapi({
          description: 'The attendee information, including attendee ID and join token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAttendeeResponse')

const BotTypeSchema = z.literal('ChatBot').openapi('BotType')

const BotSchema = z
  .object({
    BotId: StringSchema.and(z.any().openapi({ description: 'The bot ID.' })).exactOptional(),
    UserId: StringSchema.and(
      z.any().openapi({ description: 'The unique ID for the bot user.' }),
    ).exactOptional(),
    DisplayName: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The bot display name.' }),
    ).exactOptional(),
    BotType: BotTypeSchema.and(z.any().openapi({ description: 'The bot type.' })).exactOptional(),
    Disabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({ description: 'When true, the bot is stopped from running in your account.' }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The bot creation timestamp, in ISO 8601 format.' }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The updated bot timestamp, in ISO 8601 format.' }),
    ).exactOptional(),
    BotEmail: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The bot email address.' }),
    ).exactOptional(),
    SecurityToken: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security token used to authenticate Amazon Chime with the outgoing event endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.',
    required: [],
  })
  .openapi('Bot')

const CreateBotResponseSchema = z
  .object({
    Bot: BotSchema.and(z.any().openapi({ description: 'The bot details.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBotResponse')

const CreateChannelResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelResponse')

const CreateChannelBanResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the response to the ban request.' }),
    ).exactOptional(),
    Member: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChannelArn</code> and <code>BannedIdentity</code> of the member in the ban response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelBanResponse')

const CreateChannelMembershipResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    Member: IdentitySchema.and(
      z.any().openapi({ description: 'The ARN and metadata of the member being added.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelMembershipResponse')

const CreateChannelModeratorResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    ChannelModerator: IdentitySchema.and(
      z.any().openapi({ description: 'The ARNs of the channel and the moderator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelModeratorResponse')

const MediaPipelineSourceTypeSchema = z
  .literal('ChimeSdkMeeting')
  .openapi('MediaPipelineSourceType')

const ArnSchema = z
  .string()
  .regex(/^arn[\/\:\-\_\.a-zA-Z0-9]+$/)
  .min(1)
  .max(1024)
  .openapi('Arn')

const MediaPipelineStatusSchema = z
  .enum(['Initializing', 'InProgress', 'Failed', 'Stopping', 'Stopped'])
  .openapi('MediaPipelineStatus')

const MediaPipelineSinkTypeSchema = z.literal('S3Bucket').openapi('MediaPipelineSinkType')

const AttendeeIdListSchema = z.array(GuidStringSchema).min(1).openapi('AttendeeIdList')

const ExternalUserIdListSchema = z
  .array(ExternalUserIdTypeSchema)
  .min(1)
  .openapi('ExternalUserIdList')

const SelectedVideoStreamsSchema = z
  .object({
    AttendeeIds: AttendeeIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The attendee IDs of the streams selected for a media capture pipeline. ',
        }),
    ).exactOptional(),
    ExternalUserIds: ExternalUserIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The external user IDs of the streams selected for a media capture pipeline.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The video streams to capture for a specified media capture pipeline. The total number of video streams can't exceed 25.",
    required: [],
  })
  .openapi('SelectedVideoStreams')

const SourceConfigurationSchema = z
  .object({
    SelectedVideoStreams: SelectedVideoStreamsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The selected video streams to capture for a specified media capture pipeline. The number of video streams can't exceed 25.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Source configuration for a specified media capture pipeline.',
    required: [],
  })
  .openapi('SourceConfiguration')

const ArtifactsConfigurationSchema: z.ZodType<ArtifactsConfigurationType> = z
  .lazy(() =>
    z
      .object({
        Audio: AudioArtifactsConfigurationSchema.and(
          z.any().openapi({ description: 'The configuration for the audio artifacts.' }),
        ),
        Video: VideoArtifactsConfigurationSchema.and(
          z.any().openapi({ description: 'The configuration for the video artifacts.' }),
        ),
        Content: ContentArtifactsConfigurationSchema.and(
          z.any().openapi({ description: 'The configuration for the content artifacts.' }),
        ),
      })
      .openapi({
        required: ['Audio', 'Video', 'Content'],
        description: 'The configuration for the artifacts.',
      }),
  )
  .openapi('ArtifactsConfiguration')

const ChimeSdkMeetingConfigurationSchema = z
  .object({
    SourceConfiguration: SourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The source configuration for a specified media capture pipeline.',
        }),
    ).exactOptional(),
    ArtifactsConfiguration: ArtifactsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for the artifacts in an Amazon Chime SDK meeting.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.',
    required: [],
  })
  .openapi('ChimeSdkMeetingConfiguration')

const MediaCapturePipelineSchema = z
  .object({
    MediaPipelineId: GuidStringSchema.and(
      z.any().openapi({ description: 'The ID of a media capture pipeline.' }),
    ).exactOptional(),
    SourceType: MediaPipelineSourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Source type from which media artifacts are saved. You must use <code>ChimeMeeting</code>.',
        }),
    ).exactOptional(),
    SourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'ARN of the source from which the media artifacts will be saved.',
        }),
    ).exactOptional(),
    Status: MediaPipelineStatusSchema.and(
      z.any().openapi({ description: 'The status of the media capture pipeline.' }),
    ).exactOptional(),
    SinkType: MediaPipelineSinkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Destination type to which the media artifacts are saved. You must use an S3 Bucket.',
        }),
    ).exactOptional(),
    SinkArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'ARN of the destination to which the media artifacts are saved.' }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the capture pipeline was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the capture pipeline was updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A media capture pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object.',
    required: [],
  })
  .openapi('MediaCapturePipeline')

const CreateMediaCapturePipelineResponseSchema = z
  .object({
    MediaCapturePipeline: MediaCapturePipelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A media capture pipeline object, the ID, source type, source ARN, sink type, and sink ARN of a media capture pipeline object.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMediaCapturePipelineResponse')

const ExternalMeetingIdTypeSchema = z.string().min(2).max(64).openapi('ExternalMeetingIdType')

const UriTypeSchema = z.string().max(4096).openapi('UriType')

const MediaPlacementSchema = z
  .object({
    AudioHostUrl: UriTypeSchema.and(
      z.any().openapi({ description: 'The audio host URL.' }),
    ).exactOptional(),
    AudioFallbackUrl: UriTypeSchema.and(
      z.any().openapi({ description: 'The audio fallback URL.' }),
    ).exactOptional(),
    ScreenDataUrl: UriTypeSchema.and(
      z.any().openapi({ description: 'The screen data URL.' }),
    ).exactOptional(),
    ScreenSharingUrl: UriTypeSchema.and(
      z.any().openapi({ description: 'The screen sharing URL.' }),
    ).exactOptional(),
    ScreenViewingUrl: UriTypeSchema.and(
      z.any().openapi({ description: 'The screen viewing URL.' }),
    ).exactOptional(),
    SignalingUrl: UriTypeSchema.and(
      z.any().openapi({ description: 'The signaling URL.' }),
    ).exactOptional(),
    TurnControlUrl: UriTypeSchema.and(
      z.any().openapi({ description: 'The turn control URL.' }),
    ).exactOptional(),
    EventIngestionUrl: UriTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The event ingestion URL to which you send client meeting events.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.',
    required: [],
  })
  .openapi('MediaPlacement')

const MeetingSchema = z
  .object({
    MeetingId: GuidStringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime SDK meeting ID.' }),
    ).exactOptional(),
    ExternalMeetingId: ExternalMeetingIdTypeSchema.and(
      z.any().openapi({ description: 'The external meeting ID.' }),
    ).exactOptional(),
    MediaPlacement: MediaPlacementSchema.and(
      z.any().openapi({ description: 'The media placement for the meeting.' }),
    ).exactOptional(),
    MediaRegion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Region in which you create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A meeting created using the Amazon Chime SDK.', required: [] })
  .openapi('Meeting')

const CreateMeetingResponseSchema = z
  .object({
    Meeting: MeetingSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The meeting information, including the meeting ID and <code>MediaPlacement</code> . ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMeetingResponse')

const CreateMeetingDialOutResponseSchema = z
  .object({
    TransactionId: GuidStringSchema.and(
      z.any().openapi({ description: 'Unique ID that tracks API calls.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMeetingDialOutResponse')

const CreateMeetingWithAttendeesResponseSchema = z
  .object({
    Meeting: MeetingSchema.and(
      z.any().openapi({ description: 'A meeting created using the Amazon Chime SDK.' }),
    ).exactOptional(),
    Attendees: AttendeeListSchema.and(
      z
        .any()
        .openapi({
          description: 'The attendee information, including attendees IDs and join tokens.',
        }),
    ).exactOptional(),
    Errors: BatchCreateAttendeeErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMeetingWithAttendeesResponse')

const PhoneNumberOrderStatusSchema = z
  .enum(['Processing', 'Successful', 'Failed', 'Partial'])
  .openapi('PhoneNumberOrderStatus')

const OrderedPhoneNumberStatusSchema = z
  .enum(['Processing', 'Acquired', 'Failed'])
  .openapi('OrderedPhoneNumberStatus')

const OrderedPhoneNumberSchema = z
  .object({
    E164PhoneNumber: E164PhoneNumberSchema.and(
      z.any().openapi({ description: 'The phone number, in E.164 format.' }),
    ).exactOptional(),
    Status: OrderedPhoneNumberStatusSchema.and(
      z.any().openapi({ description: 'The phone number status.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A phone number for which an order has been placed.', required: [] })
  .openapi('OrderedPhoneNumber')

const OrderedPhoneNumberListSchema = z
  .array(OrderedPhoneNumberSchema)
  .openapi('OrderedPhoneNumberList')

const PhoneNumberOrderSchema = z
  .object({
    PhoneNumberOrderId: GuidStringSchema.and(
      z.any().openapi({ description: 'The phone number order ID.' }),
    ).exactOptional(),
    ProductType: PhoneNumberProductTypeSchema.and(
      z.any().openapi({ description: 'The phone number order product type.' }),
    ).exactOptional(),
    Status: PhoneNumberOrderStatusSchema.and(
      z.any().openapi({ description: 'The status of the phone number order.' }),
    ).exactOptional(),
    OrderedPhoneNumbers: OrderedPhoneNumberListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ordered phone number details, such as the phone number in E.164 format and the phone number status.',
        }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The phone number order creation time stamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The updated phone number order time stamp, in ISO 8601 format.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The details of a phone number order created for Amazon Chime.',
    required: [],
  })
  .openapi('PhoneNumberOrder')

const CreatePhoneNumberOrderResponseSchema = z
  .object({
    PhoneNumberOrder: PhoneNumberOrderSchema.and(
      z.any().openapi({ description: 'The phone number order details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePhoneNumberOrderResponse')

const NonEmptyString128Schema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('NonEmptyString128')

const String128Schema = z.string().max(128).openapi('String128')

const ProxySessionStatusSchema = z
  .enum(['Open', 'InProgress', 'Closed'])
  .openapi('ProxySessionStatus')

const PositiveIntegerSchema = z.int().min(1).openapi('PositiveInteger')

const CapabilitySchema = z.enum(['Voice', 'SMS']).openapi('Capability')

const CapabilityListSchema = z.array(CapabilitySchema).openapi('CapabilityList')

const ParticipantSchema = z
  .object({
    PhoneNumber: E164PhoneNumberSchema.and(
      z.any().openapi({ description: "The participant's phone number." }),
    ).exactOptional(),
    ProxyPhoneNumber: E164PhoneNumberSchema.and(
      z.any().openapi({ description: "The participant's proxy phone number." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.',
    required: [],
  })
  .openapi('Participant')

const ParticipantsSchema = z.array(ParticipantSchema).openapi('Participants')

const NumberSelectionBehaviorSchema = z
  .enum(['PreferSticky', 'AvoidSticky'])
  .openapi('NumberSelectionBehavior')

const GeoMatchLevelSchema = z.enum(['Country', 'AreaCode']).openapi('GeoMatchLevel')

const CountrySchema = z
  .string()
  .regex(/^$|^[A-Z]{2,2}$/)
  .openapi('Country')

const AreaCodeSchema = z
  .string()
  .regex(/^$|^[0-9]{3,3}$/)
  .openapi('AreaCode')

const GeoMatchParamsSchema = z
  .object({
    Country: CountrySchema.and(z.any().openapi({ description: 'The country.' })),
    AreaCode: AreaCodeSchema.and(z.any().openapi({ description: 'The area code.' })),
  })
  .openapi({
    required: ['Country', 'AreaCode'],
    description: 'The country and area code for a proxy phone number in a proxy phone session.',
  })
  .openapi('GeoMatchParams')

const ProxySessionSchema = z
  .object({
    VoiceConnectorId: NonEmptyString128Schema.and(
      z.any().openapi({ description: 'The Amazon Chime voice connector ID.' }),
    ).exactOptional(),
    ProxySessionId: NonEmptyString128Schema.and(
      z.any().openapi({ description: 'The proxy session ID.' }),
    ).exactOptional(),
    Name: String128Schema.and(
      z.any().openapi({ description: 'The name of the proxy session.' }),
    ).exactOptional(),
    Status: ProxySessionStatusSchema.and(
      z.any().openapi({ description: 'The status of the proxy session.' }),
    ).exactOptional(),
    ExpiryMinutes: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'The number of minutes allowed for the proxy session.' }),
    ).exactOptional(),
    Capabilities: CapabilityListSchema.and(
      z.any().openapi({ description: 'The proxy session capabilities.' }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The created time stamp, in ISO 8601 format.' }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The updated time stamp, in ISO 8601 format.' }),
    ).exactOptional(),
    EndedTimestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The ended time stamp, in ISO 8601 format.' }),
    ).exactOptional(),
    Participants: ParticipantsSchema.and(
      z.any().openapi({ description: 'The proxy session participants.' }),
    ).exactOptional(),
    NumberSelectionBehavior: NumberSelectionBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.',
        }),
    ).exactOptional(),
    GeoMatchLevel: GeoMatchLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preference for matching the country or area code of the proxy phone number with that of the first participant.',
        }),
    ).exactOptional(),
    GeoMatchParams: GeoMatchParamsSchema.and(
      z.any().openapi({ description: 'The country and area code for the proxy phone number.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The proxy session for an Amazon Chime Voice Connector.', required: [] })
  .openapi('ProxySession')

const CreateProxySessionResponseSchema = z
  .object({
    ProxySession: ProxySessionSchema.and(
      z.any().openapi({ description: 'The proxy session details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProxySessionResponse')

const RoomSchema = z
  .object({
    RoomId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The room ID.' }),
    ).exactOptional(),
    Name: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The room name.' }),
    ).exactOptional(),
    AccountId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime account ID.' }),
    ).exactOptional(),
    CreatedBy: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The identifier of the room creator.' }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The room creation timestamp, in ISO 8601 format.' }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The room update timestamp, in ISO 8601 format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The Amazon Chime chat room details.', required: [] })
  .openapi('Room')

const CreateRoomResponseSchema = z
  .object({
    Room: RoomSchema.and(z.any().openapi({ description: 'The room details.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRoomResponse')

const MemberTypeSchema = z.enum(['User', 'Bot', 'Webhook']).openapi('MemberType')

const MemberSchema = z
  .object({
    MemberId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The member ID (user ID or bot ID).' }),
    ).exactOptional(),
    MemberType: MemberTypeSchema.and(
      z.any().openapi({ description: 'The member type.' }),
    ).exactOptional(),
    Email: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The member email address.' }),
    ).exactOptional(),
    FullName: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The member name.' }),
    ).exactOptional(),
    AccountId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime account ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The member details, such as email address, name, member ID, and member type.',
    required: [],
  })
  .openapi('Member')

const RoomMembershipSchema = z
  .object({
    RoomId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The room ID.' }),
    ).exactOptional(),
    Member: MemberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The member details, such as email address, name, member ID, and member type.',
        }),
    ).exactOptional(),
    Role: RoomMembershipRoleSchema.and(
      z.any().openapi({ description: 'The membership role.' }),
    ).exactOptional(),
    InvitedBy: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The identifier of the user that invited the room member.' }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The room membership update timestamp, in ISO 8601 format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The room membership details.', required: [] })
  .openapi('RoomMembership')

const CreateRoomMembershipResponseSchema = z
  .object({
    RoomMembership: RoomMembershipSchema.and(
      z.any().openapi({ description: 'The room membership details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRoomMembershipResponse')

const SipMediaApplicationNameSchema = z.string().min(1).max(256).openapi('SipMediaApplicationName')

const FunctionArnSchema = z
  .string()
  .regex(
    /arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?/,
  )
  .max(10000)
  .openapi('FunctionArn')

const SipMediaApplicationEndpointSchema = z
  .object({
    LambdaArn: FunctionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Valid Amazon Resource Name (ARN) of the Lambda function, version, or alias. The function must be created in the same AWS Region as the SIP media application.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The endpoint assigned to the SIP media application.', required: [] })
  .openapi('SipMediaApplicationEndpoint')

const SipMediaApplicationEndpointListSchema = z
  .array(SipMediaApplicationEndpointSchema)
  .length(1)
  .openapi('SipMediaApplicationEndpointList')

const SipMediaApplicationSchema = z
  .object({
    SipMediaApplicationId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The SIP media application ID.' }),
    ).exactOptional(),
    AwsRegion: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The AWS Region in which the SIP media application is created.' }),
    ).exactOptional(),
    Name: SipMediaApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the SIP media application.' }),
    ).exactOptional(),
    Endpoints: SipMediaApplicationEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of endpoints for SIP media application. Currently, only one endpoint per SIP media application is permitted.',
        }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The SIP media application creation timestamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The SIP media application updated timestamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications.',
    required: [],
  })
  .openapi('SipMediaApplication')

const CreateSipMediaApplicationResponseSchema = z
  .object({
    SipMediaApplication: SipMediaApplicationSchema.and(
      z.any().openapi({ description: 'The SIP media application details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSipMediaApplicationResponse')

const SipMediaApplicationCallSchema = z
  .object({
    TransactionId: GuidStringSchema.and(
      z.any().openapi({ description: 'The transaction ID of a call.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A <code>Call</code> instance for a SIP media application.',
    required: [],
  })
  .openapi('SipMediaApplicationCall')

const CreateSipMediaApplicationCallResponseSchema = z
  .object({
    SipMediaApplicationCall: SipMediaApplicationCallSchema.and(
      z.any().openapi({ description: 'The actual call.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSipMediaApplicationCallResponse')

const SipRuleNameSchema = z.string().min(1).max(256).openapi('SipRuleName')

const SipRuleTriggerTypeSchema = z
  .enum(['ToPhoneNumber', 'RequestUriHostname'])
  .openapi('SipRuleTriggerType')

const SipApplicationPrioritySchema = z.int().min(1).openapi('SipApplicationPriority')

const SipRuleTargetApplicationSchema = z
  .object({
    SipMediaApplicationId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The SIP media application ID.' }),
    ).exactOptional(),
    Priority: SipApplicationPrioritySchema.and(
      z.any().openapi({ description: 'Priority of the SIP media application in the target list.' }),
    ).exactOptional(),
    AwsRegion: StringSchema.and(
      z.any().openapi({ description: 'The AWS Region of the target application.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.',
    required: [],
  })
  .openapi('SipRuleTargetApplication')

const SipRuleTargetApplicationListSchema = z
  .array(SipRuleTargetApplicationSchema)
  .min(1)
  .max(25)
  .openapi('SipRuleTargetApplicationList')

const SipRuleSchema = z
  .object({
    SipRuleId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The SIP rule ID.' }),
    ).exactOptional(),
    Name: SipRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the SIP rule.' }),
    ).exactOptional(),
    Disabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.',
        }),
    ).exactOptional(),
    TriggerType: SipRuleTriggerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.',
        }),
    ).exactOptional(),
    TriggerValue: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>TriggerType</code> is <code>RequestUriHostname</code>, then the value can be the outbound host name of the Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, then the value can be a customer-owned phone number in E164 format. <code>SipRule</code> is triggered when a SIP rule requests host name or <code>ToPhoneNumber</code> matches in the incoming SIP request.',
        }),
    ).exactOptional(),
    TargetApplications: SipRuleTargetApplicationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.',
        }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the SIP rule was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the SIP rule was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules.',
    required: [],
  })
  .openapi('SipRule')

const CreateSipRuleResponseSchema = z
  .object({
    SipRule: SipRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the SIP rule information, including the rule ID, triggers, and target applications.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSipRuleResponse')

const EmailAddressSchema = z
  .string()
  .regex(/.+@.+\..+/)
  .openapi('EmailAddress')

const RegistrationStatusSchema = z
  .enum(['Unregistered', 'Registered', 'Suspended'])
  .openapi('RegistrationStatus')

const InviteStatusSchema = z.enum(['Pending', 'Accepted', 'Failed']).openapi('InviteStatus')

const UserSchema = z
  .object({
    UserId: StringSchema.and(z.any().openapi({ description: 'The user ID.' })),
    AccountId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime account ID.' }),
    ).exactOptional(),
    PrimaryEmail: EmailAddressSchema.and(
      z.any().openapi({ description: 'The primary email address of the user.' }),
    ).exactOptional(),
    PrimaryProvisionedNumber: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The primary phone number associated with the user.' }),
    ).exactOptional(),
    DisplayName: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The display name of the user.' }),
    ).exactOptional(),
    LicenseType: LicenseSchema.and(
      z.any().openapi({ description: 'The license type for the user.' }),
    ).exactOptional(),
    UserType: UserTypeSchema.and(
      z.any().openapi({ description: 'The user type.' }),
    ).exactOptional(),
    UserRegistrationStatus: RegistrationStatusSchema.and(
      z.any().openapi({ description: 'The user registration status.' }),
    ).exactOptional(),
    UserInvitationStatus: InviteStatusSchema.and(
      z.any().openapi({ description: 'The user invite status.' }),
    ).exactOptional(),
    RegisteredOn: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'Date and time when the user is registered, in ISO 8601 format.' }),
    ).exactOptional(),
    InvitedOn: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.',
        }),
    ).exactOptional(),
    AlexaForBusinessMetadata: AlexaForBusinessMetadataSchema.and(
      z.any().openapi({ description: 'The Alexa for Business metadata.' }),
    ).exactOptional(),
    PersonalPIN: StringSchema.and(
      z.any().openapi({ description: "The user's personal meeting PIN." }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserId'], description: 'The user on the Amazon Chime account.' })
  .openapi('User')

const CreateUserResponseSchema = z
  .object({
    User: UserSchema.and(
      z.any().openapi({ description: 'The user on the Amazon Chime account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUserResponse')

const VoiceConnectorAwsRegionSchema = z
  .enum(['us-east-1', 'us-west-2'])
  .openapi('VoiceConnectorAwsRegion')

const VoiceConnectorNameSchema = z.string().min(1).max(256).openapi('VoiceConnectorName')

const VoiceConnectorSchema = z
  .object({
    VoiceConnectorId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector ID.' }),
    ).exactOptional(),
    AwsRegion: VoiceConnectorAwsRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The AWS Region in which the Amazon Chime Voice Connector is created. Default: <code>us-east-1</code>. ',
        }),
    ).exactOptional(),
    Name: VoiceConnectorNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Chime Voice Connector.' }),
    ).exactOptional(),
    OutboundHostName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The outbound host name for the Amazon Chime Voice Connector.' }),
    ).exactOptional(),
    RequireEncryption: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Designates whether encryption is required for the Amazon Chime Voice Connector.',
        }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
    VoiceConnectorArn: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ARN of the specified Amazon Chime Voice Connector.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings.',
    required: [],
  })
  .openapi('VoiceConnector')

const CreateVoiceConnectorResponseSchema = z
  .object({
    VoiceConnector: VoiceConnectorSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVoiceConnectorResponse')

const VoiceConnectorGroupNameSchema = z.string().min(1).max(256).openapi('VoiceConnectorGroupName')

const VoiceConnectorItemPrioritySchema = z
  .int()
  .min(1)
  .max(99)
  .openapi('VoiceConnectorItemPriority')

const VoiceConnectorItemSchema = z
  .object({
    VoiceConnectorId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector ID.' }),
    ),
    Priority: VoiceConnectorItemPrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first.',
        }),
    ),
  })
  .openapi({
    required: ['VoiceConnectorId', 'Priority'],
    description:
      'For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group.',
  })
  .openapi('VoiceConnectorItem')

const VoiceConnectorItemListSchema = z
  .array(VoiceConnectorItemSchema)
  .openapi('VoiceConnectorItemList')

const VoiceConnectorGroupSchema = z
  .object({
    VoiceConnectorGroupId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector group ID.' }),
    ).exactOptional(),
    Name: VoiceConnectorGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Chime Voice Connector group.' }),
    ).exactOptional(),
    VoiceConnectorItems: VoiceConnectorItemListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Chime Voice Connectors to which to route inbound calls.',
        }),
    ).exactOptional(),
    CreatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Chime Voice Connector group creation time stamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
    UpdatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated Amazon Chime Voice Connector group time stamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
    VoiceConnectorGroupArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the specified Amazon Chime Voice Connector group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.',
    required: [],
  })
  .openapi('VoiceConnectorGroup')

const CreateVoiceConnectorGroupResponseSchema = z
  .object({
    VoiceConnectorGroup: VoiceConnectorGroupSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector group details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVoiceConnectorGroupResponse')

const DeleteAccountResponseSchema = z.object({}).openapi('DeleteAccountResponse')

const UnprocessableEntityExceptionSchema = z.any().openapi('UnprocessableEntityException')

const NonEmptyResourceNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(256)
  .openapi('NonEmptyResourceName')

const MetadataSchema = z.string().regex(/.*/).min(0).max(1024).openapi('Metadata')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AppInstanceSchema = z
  .object({
    AppInstanceArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the messaging instance.' }),
    ).exactOptional(),
    Name: NonEmptyResourceNameSchema.and(
      z.any().openapi({ description: 'The name of an <code>AppInstance</code>.' }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of an <code>AppInstance</code>.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which an <code>AppInstance</code> was created. In epoch milliseconds.',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time an <code>AppInstance</code> was last updated. In epoch milliseconds.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application.',
    required: [],
  })
  .openapi('AppInstance')

const DescribeAppInstanceResponseSchema = z
  .object({
    AppInstance: AppInstanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN, metadata, created and last-updated timestamps, and the name of the <code>AppInstance</code>. All timestamps use epoch milliseconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAppInstanceResponse')

const AppInstanceAdminSchema = z
  .object({
    Admin: IdentitySchema.and(
      z.any().openapi({ description: 'The <code>AppInstanceAdmin</code> data.' }),
    ).exactOptional(),
    AppInstanceArn: ChimeArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the <code>AppInstance</code> for which the user is an administrator.',
        }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which an administrator was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of an <code>AppInstanceAdmin</code>.', required: [] })
  .openapi('AppInstanceAdmin')

const DescribeAppInstanceAdminResponseSchema = z
  .object({
    AppInstanceAdmin: AppInstanceAdminSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN and name of the <code>AppInstanceUser</code>, the ARN of the <code>AppInstance</code>, and the created and last-updated timestamps. All timestamps use epoch milliseconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAppInstanceAdminResponse')

const UserNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(100)
  .openapi('UserName')

const AppInstanceUserSchema = z
  .object({
    AppInstanceUserArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
    Name: UserNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the <code>AppInstanceUser</code> was created.',
        }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the <code>AppInstanceUser</code> was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of an <code>AppInstanceUser</code>.', required: [] })
  .openapi('AppInstanceUser')

const DescribeAppInstanceUserResponseSchema = z
  .object({
    AppInstanceUser: AppInstanceUserSchema.and(
      z.any().openapi({ description: 'The name of the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAppInstanceUserResponse')

const ChannelModeSchema = z.enum(['UNRESTRICTED', 'RESTRICTED']).openapi('ChannelMode')

const ChannelPrivacySchema = z.enum(['PUBLIC', 'PRIVATE']).openapi('ChannelPrivacy')

const ChannelSchema = z
  .object({
    Name: NonEmptyResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    Mode: ChannelModeSchema.and(
      z.any().openapi({ description: 'The mode of the channel.' }),
    ).exactOptional(),
    Privacy: ChannelPrivacySchema.and(
      z.any().openapi({ description: "The channel's privacy setting." }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: "The channel's metadata." }),
    ).exactOptional(),
    CreatedBy: IdentitySchema.and(
      z.any().openapi({ description: 'The <code>AppInstanceUser</code> who created the channel.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the <code>AppInstanceUser</code> created the channel.',
        }),
    ).exactOptional(),
    LastMessageTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which a member sent the last message in the channel.',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which a channel was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of a channel.', required: [] })
  .openapi('Channel')

const DescribeChannelResponseSchema = z
  .object({
    Channel: ChannelSchema.and(
      z.any().openapi({ description: 'The channel details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChannelResponse')

const ChannelBanSchema = z
  .object({
    Member: IdentitySchema.and(
      z.any().openapi({ description: 'The member being banned from the channel.' }),
    ).exactOptional(),
    ChannelArn: ChimeArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the channel from which a member is being banned.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the ban was created.' }),
    ).exactOptional(),
    CreatedBy: IdentitySchema.and(
      z.any().openapi({ description: 'The <code>AppInstanceUser</code> who created the ban.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of a channel ban.', required: [] })
  .openapi('ChannelBan')

const DescribeChannelBanResponseSchema = z
  .object({
    ChannelBan: ChannelBanSchema.and(
      z.any().openapi({ description: 'The details of the ban.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChannelBanResponse')

const ChannelMembershipSchema = z
  .object({
    InvitedBy: IdentitySchema.and(
      z.any().openapi({ description: 'The identifier of the member who invited another member.' }),
    ).exactOptional(),
    Type: ChannelMembershipTypeSchema.and(
      z.any().openapi({ description: 'The membership type set for the channel member.' }),
    ).exactOptional(),
    Member: IdentitySchema.and(
      z.any().openapi({ description: 'The data of the channel member.' }),
    ).exactOptional(),
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: "The ARN of the member's channel." }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the channel membership was created.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which a channel membership was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of a channel member.', required: [] })
  .openapi('ChannelMembership')

const DescribeChannelMembershipResponseSchema = z
  .object({
    ChannelMembership: ChannelMembershipSchema.and(
      z.any().openapi({ description: 'The details of the membership.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChannelMembershipResponse')

const ChannelSummarySchema = z
  .object({
    Name: NonEmptyResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    Mode: ChannelModeSchema.and(
      z.any().openapi({ description: 'The mode of the channel.' }),
    ).exactOptional(),
    Privacy: ChannelPrivacySchema.and(
      z.any().openapi({ description: 'The privacy setting of the channel.' }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the channel.' }),
    ).exactOptional(),
    LastMessageTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the last message in a channel was sent.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary of the details of a <code>Channel</code>.', required: [] })
  .openapi('ChannelSummary')

const AppInstanceUserMembershipSummarySchema = z
  .object({
    Type: ChannelMembershipTypeSchema.and(
      z.any().openapi({ description: 'The type of <code>ChannelMembership</code>.' }),
    ).exactOptional(),
    ReadMarkerTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which a message was last read.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary of the membership details of an <code>AppInstanceUser</code>.',
    required: [],
  })
  .openapi('AppInstanceUserMembershipSummary')

const ChannelMembershipForAppInstanceUserSummarySchema = z
  .object({
    ChannelSummary: ChannelSummarySchema.and(
      z.any().openapi({ description: 'Summary of the details of a <code>Channel</code>.' }),
    ).exactOptional(),
    AppInstanceUserMembershipSummary: AppInstanceUserMembershipSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'Summary of the membership details of an <code>AppInstanceUser</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary of the channel membership details of an <code>AppInstanceUser</code>.',
    required: [],
  })
  .openapi('ChannelMembershipForAppInstanceUserSummary')

const DescribeChannelMembershipForAppInstanceUserResponseSchema = z
  .object({
    ChannelMembership: ChannelMembershipForAppInstanceUserSummarySchema.and(
      z.any().openapi({ description: 'The channel to which a user belongs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChannelMembershipForAppInstanceUserResponse')

const ChannelModeratedByAppInstanceUserSummarySchema = z
  .object({
    ChannelSummary: ChannelSummarySchema.and(
      z.any().openapi({ description: 'Summary of the details of a <code>Channel</code>.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary of the details of a moderated channel.', required: [] })
  .openapi('ChannelModeratedByAppInstanceUserSummary')

const DescribeChannelModeratedByAppInstanceUserResponseSchema = z
  .object({
    Channel: ChannelModeratedByAppInstanceUserSummarySchema.and(
      z.any().openapi({ description: 'The moderated channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChannelModeratedByAppInstanceUserResponse')

const ChannelModeratorSchema = z
  .object({
    Moderator: IdentitySchema.and(
      z.any().openapi({ description: "The moderator's data." }),
    ).exactOptional(),
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: "The ARN of the moderator's channel." }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the moderator was created.' }),
    ).exactOptional(),
    CreatedBy: IdentitySchema.and(
      z
        .any()
        .openapi({ description: 'The <code>AppInstanceUser</code> who created the moderator.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of a channel moderator.', required: [] })
  .openapi('ChannelModerator')

const DescribeChannelModeratorResponseSchema = z
  .object({
    ChannelModerator: ChannelModeratorSchema.and(
      z.any().openapi({ description: 'The details of the channel moderator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChannelModeratorResponse')

const DisassociatePhoneNumberFromUserResponseSchema = z
  .object({})
  .openapi('DisassociatePhoneNumberFromUserResponse')

const DisassociatePhoneNumbersFromVoiceConnectorResponseSchema = z
  .object({
    PhoneNumberErrors: PhoneNumberErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociatePhoneNumbersFromVoiceConnectorResponse')

const DisassociatePhoneNumbersFromVoiceConnectorGroupResponseSchema = z
  .object({
    PhoneNumberErrors: PhoneNumberErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociatePhoneNumbersFromVoiceConnectorGroupResponse')

const DisassociateSigninDelegateGroupsFromAccountResponseSchema = z
  .object({})
  .openapi('DisassociateSigninDelegateGroupsFromAccountResponse')

const GetAccountResponseSchema = z
  .object({
    Account: AccountSchema.and(
      z.any().openapi({ description: 'The Amazon Chime account details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccountResponse')

const AccountSettingsSchema = z
  .object({
    DisableRemoteControl: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Setting that stops or starts remote control of shared screens during meetings.',
        }),
    ).exactOptional(),
    EnableDialOut: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Setting that allows meeting participants to choose the <b>Call me at a phone number</b> option. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html">Join a Meeting without the Amazon Chime App</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.',
    required: [],
  })
  .openapi('AccountSettings')

const GetAccountSettingsResponseSchema = z
  .object({
    AccountSettings: AccountSettingsSchema.and(
      z.any().openapi({ description: 'The Amazon Chime account settings.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccountSettingsResponse')

const ChannelRetentionSettingsSchema = z
  .object({
    RetentionDays: RetentionDaysSchema.and(
      z.any().openapi({ description: 'The time in days to retain the messages in a channel.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of the retention settings for a channel.', required: [] })
  .openapi('ChannelRetentionSettings')

const AppInstanceRetentionSettingsSchema = z
  .object({
    ChannelRetentionSettings: ChannelRetentionSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'The length of time in days to retain the messages in a channel.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The details of the data-retention settings for an <code>AppInstance</code>.',
    required: [],
  })
  .openapi('AppInstanceRetentionSettings')

const GetAppInstanceRetentionSettingsResponseSchema = z
  .object({
    AppInstanceRetentionSettings: AppInstanceRetentionSettingsSchema.and(
      z.any().openapi({ description: 'The retention settings for the <code>AppInstance</code>.' }),
    ).exactOptional(),
    InitiateDeletionTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp representing the time at which the specified items are retained, in Epoch Seconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAppInstanceRetentionSettingsResponse')

const AppInstanceDataTypeSchema = z
  .enum(['Channel', 'ChannelMessage'])
  .openapi('AppInstanceDataType')

const AppInstanceStreamingConfigurationSchema = z
  .object({
    AppInstanceDataType: AppInstanceDataTypeSchema.and(
      z.any().openapi({ description: 'The type of data to be streamed.' }),
    ),
    ResourceArn: ArnSchema.and(z.any().openapi({ description: 'The resource ARN.' })),
  })
  .openapi({
    required: ['AppInstanceDataType', 'ResourceArn'],
    description: 'The details of the streaming configuration of an <code>AppInstance</code>.',
  })
  .openapi('AppInstanceStreamingConfiguration')

const AppInstanceStreamingConfigurationListSchema = z
  .array(AppInstanceStreamingConfigurationSchema)
  .min(1)
  .max(2)
  .openapi('AppInstanceStreamingConfigurationList')

const GetAppInstanceStreamingConfigurationsResponseSchema = z
  .object({
    AppInstanceStreamingConfigurations: AppInstanceStreamingConfigurationListSchema.and(
      z.any().openapi({ description: 'The streaming settings.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAppInstanceStreamingConfigurationsResponse')

const GetAttendeeResponseSchema = z
  .object({
    Attendee: AttendeeSchema.and(
      z.any().openapi({ description: 'The Amazon Chime SDK attendee information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAttendeeResponse')

const GetBotResponseSchema = z
  .object({
    Bot: BotSchema.and(z.any().openapi({ description: 'The chat bot details.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBotResponse')

const MessageIdSchema = z
  .string()
  .regex(/[-_a-zA-Z0-9]*/)
  .min(1)
  .max(128)
  .openapi('MessageId')

const ContentSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(4096)
  .openapi('Content')

const ChannelMessageTypeSchema = z.enum(['STANDARD', 'CONTROL']).openapi('ChannelMessageType')

const NonNullableBooleanSchema = z.boolean().openapi('NonNullableBoolean')

const ChannelMessagePersistenceTypeSchema = z
  .enum(['PERSISTENT', 'NON_PERSISTENT'])
  .openapi('ChannelMessagePersistenceType')

const ChannelMessageSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    MessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'The ID of a message.' }),
    ).exactOptional(),
    Content: ContentSchema.and(
      z.any().openapi({ description: 'The message content.' }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The message metadata.' }),
    ).exactOptional(),
    Type: ChannelMessageTypeSchema.and(
      z.any().openapi({ description: 'The message type.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the message was created.' }),
    ).exactOptional(),
    LastEditedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which a message was edited.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which a message was updated.' }),
    ).exactOptional(),
    Sender: IdentitySchema.and(
      z.any().openapi({ description: 'The message sender.' }),
    ).exactOptional(),
    Redacted: NonNullableBooleanSchema.and(
      z.any().openapi({ description: 'Hides the content of a message.' }),
    ).exactOptional(),
    Persistence: ChannelMessagePersistenceTypeSchema.and(
      z.any().openapi({ description: 'The persistence setting for a channel message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of a message in a channel.', required: [] })
  .openapi('ChannelMessage')

const GetChannelMessageResponseSchema = z
  .object({
    ChannelMessage: ChannelMessageSchema.and(
      z.any().openapi({ description: 'The details of and content in the message.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetChannelMessageResponse')

const EventsConfigurationSchema = z
  .object({
    BotId: StringSchema.and(z.any().openapi({ description: 'The bot ID.' })).exactOptional(),
    OutboundEventsHTTPSEndpoint: SensitiveStringSchema.and(
      z
        .any()
        .openapi({ description: 'HTTPS endpoint that allows a bot to receive outgoing events.' }),
    ).exactOptional(),
    LambdaFunctionArn: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Lambda function ARN that allows a bot to receive outgoing events.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.',
    required: [],
  })
  .openapi('EventsConfiguration')

const GetEventsConfigurationResponseSchema = z
  .object({
    EventsConfiguration: EventsConfigurationSchema.and(
      z.any().openapi({ description: 'The events configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventsConfigurationResponse')

const BusinessCallingSettingsSchema = z
  .object({
    CdrBucket: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 bucket designated for call detail record storage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.",
    required: [],
  })
  .openapi('BusinessCallingSettings')

const VoiceConnectorSettingsSchema = z
  .object({
    CdrBucket: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 bucket designated for call detail record storage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.',
    required: [],
  })
  .openapi('VoiceConnectorSettings')

const GetGlobalSettingsResponseSchema = z
  .object({
    BusinessCalling: BusinessCallingSettingsSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Business Calling settings.' }),
    ).exactOptional(),
    VoiceConnector: VoiceConnectorSettingsSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector settings.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGlobalSettingsResponse')

const GetMediaCapturePipelineResponseSchema = z
  .object({
    MediaCapturePipeline: MediaCapturePipelineSchema.and(
      z.any().openapi({ description: 'The media capture pipeline object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMediaCapturePipelineResponse')

const GetMeetingResponseSchema = z
  .object({
    Meeting: MeetingSchema.and(
      z.any().openapi({ description: 'The Amazon Chime SDK meeting information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMeetingResponse')

const UrlTypeSchema = z.string().max(4096).openapi('UrlType')

const MessagingSessionEndpointSchema = z
  .object({
    Url: UrlTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The endpoint to which you establish a websocket connection.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The websocket endpoint used to connect to Amazon Chime SDK messaging.',
    required: [],
  })
  .openapi('MessagingSessionEndpoint')

const GetMessagingSessionEndpointResponseSchema = z
  .object({
    Endpoint: MessagingSessionEndpointSchema.and(
      z.any().openapi({ description: 'The endpoint returned in the response.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMessagingSessionEndpointResponse')

const PhoneNumberSchema: z.ZodType<PhoneNumberType> = z
  .lazy(() =>
    z
      .object({
        PhoneNumberId: StringSchema.and(
          z.any().openapi({ description: 'The phone number ID.' }),
        ).exactOptional(),
        E164PhoneNumber: E164PhoneNumberSchema.and(
          z.any().openapi({ description: 'The phone number, in E.164 format.' }),
        ).exactOptional(),
        Country: Alpha2CountryCodeSchema.and(
          z.any().openapi({ description: 'The phone number country. Format: ISO 3166-1 alpha-2.' }),
        ).exactOptional(),
        Type: PhoneNumberTypeSchema.and(
          z.any().openapi({ description: 'The phone number type.' }),
        ).exactOptional(),
        ProductType: PhoneNumberProductTypeSchema.and(
          z.any().openapi({ description: 'The phone number product type.' }),
        ).exactOptional(),
        Status: PhoneNumberStatusSchema.and(
          z.any().openapi({ description: 'The phone number status.' }),
        ).exactOptional(),
        Capabilities: PhoneNumberCapabilitiesSchema.and(
          z.any().openapi({ description: 'The phone number capabilities.' }),
        ).exactOptional(),
        Associations: PhoneNumberAssociationListSchema.and(
          z.any().openapi({ description: 'The phone number associations.' }),
        ).exactOptional(),
        CallingName: CallingNameSchema.and(
          z
            .any()
            .openapi({
              description: 'The outbound calling name associated with the phone number.',
            }),
        ).exactOptional(),
        CallingNameStatus: CallingNameStatusSchema.and(
          z.any().openapi({ description: 'The outbound calling name status.' }),
        ).exactOptional(),
        CreatedTimestamp: Iso8601TimestampSchema.and(
          z
            .any()
            .openapi({ description: 'The phone number creation timestamp, in ISO 8601 format.' }),
        ).exactOptional(),
        UpdatedTimestamp: Iso8601TimestampSchema.and(
          z
            .any()
            .openapi({ description: 'The updated phone number timestamp, in ISO 8601 format.' }),
        ).exactOptional(),
        DeletionTimestamp: Iso8601TimestampSchema.and(
          z
            .any()
            .openapi({ description: 'The deleted phone number timestamp, in ISO 8601 format.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector.',
        required: [],
      }),
  )
  .openapi('PhoneNumber')

const GetPhoneNumberResponseSchema = z
  .object({
    PhoneNumber: PhoneNumberSchema.and(
      z.any().openapi({ description: 'The phone number details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPhoneNumberResponse')

const GetPhoneNumberOrderResponseSchema = z
  .object({
    PhoneNumberOrder: PhoneNumberOrderSchema.and(
      z.any().openapi({ description: 'The phone number order details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPhoneNumberOrderResponse')

const GetPhoneNumberSettingsResponseSchema = z
  .object({
    CallingName: CallingNameSchema.and(
      z.any().openapi({ description: 'The default outbound calling name for the account.' }),
    ).exactOptional(),
    CallingNameUpdatedTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated outbound calling name timestamp, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPhoneNumberSettingsResponse')

const GetProxySessionResponseSchema = z
  .object({
    ProxySession: ProxySessionSchema.and(
      z.any().openapi({ description: 'The proxy session details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetProxySessionResponse')

const RetentionSettingsSchema: z.ZodType<RetentionSettingsType> = z
  .lazy(() =>
    z
      .object({
        RoomRetentionSettings: RoomRetentionSettingsSchema.and(
          z.any().openapi({ description: 'The chat room retention settings.' }),
        ).exactOptional(),
        ConversationRetentionSettings: ConversationRetentionSettingsSchema.and(
          z.any().openapi({ description: 'The chat conversation retention settings.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.',
        required: [],
      }),
  )
  .openapi('RetentionSettings')

const GetRetentionSettingsResponseSchema = z
  .object({
    RetentionSettings: RetentionSettingsSchema.and(
      z.any().openapi({ description: 'The retention settings.' }),
    ).exactOptional(),
    InitiateDeletionTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRetentionSettingsResponse')

const GetRoomResponseSchema = z
  .object({
    Room: RoomSchema.and(z.any().openapi({ description: 'The room details.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRoomResponse')

const GetSipMediaApplicationResponseSchema = z
  .object({
    SipMediaApplication: SipMediaApplicationSchema.and(
      z.any().openapi({ description: 'The SIP media application details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSipMediaApplicationResponse')

const SipMediaApplicationLoggingConfigurationSchema = z
  .object({
    EnableSipMediaApplicationMessageLogs: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Enables application message logs for the SIP media application.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Logging configuration of the SIP media application.', required: [] })
  .openapi('SipMediaApplicationLoggingConfiguration')

const GetSipMediaApplicationLoggingConfigurationResponseSchema = z
  .object({
    SipMediaApplicationLoggingConfiguration: SipMediaApplicationLoggingConfigurationSchema.and(
      z.any().openapi({ description: 'The actual logging configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSipMediaApplicationLoggingConfigurationResponse')

const GetSipRuleResponseSchema = z
  .object({
    SipRule: SipRuleSchema.and(
      z.any().openapi({ description: 'The SIP rule details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSipRuleResponse')

const GetUserResponseSchema = z
  .object({
    User: UserSchema.and(z.any().openapi({ description: 'The user details.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetUserResponse')

const TelephonySettingsSchema = z
  .object({
    InboundCalling: BooleanSchema.and(
      z.any().openapi({ description: 'Allows or denies inbound calling.' }),
    ),
    OutboundCalling: BooleanSchema.and(
      z.any().openapi({ description: 'Allows or denies outbound calling.' }),
    ),
    SMS: BooleanSchema.and(z.any().openapi({ description: 'Allows or denies SMS messaging.' })),
  })
  .openapi({
    required: ['InboundCalling', 'OutboundCalling', 'SMS'],
    description:
      'Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging.',
  })
  .openapi('TelephonySettings')

const UserSettingsSchema = z
  .object({
    Telephony: TelephonySettingsSchema.and(
      z.any().openapi({ description: 'The telephony settings associated with the user.' }),
    ),
  })
  .openapi({
    required: ['Telephony'],
    description:
      'Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.',
  })
  .openapi('UserSettings')

const GetUserSettingsResponseSchema = z
  .object({
    UserSettings: UserSettingsSchema.and(
      z.any().openapi({ description: 'The user settings.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetUserSettingsResponse')

const GetVoiceConnectorResponseSchema = z
  .object({
    VoiceConnector: VoiceConnectorSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorResponse')

const DNISEmergencyCallingConfigurationSchema = z
  .object({
    EmergencyPhoneNumber: E164PhoneNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'The DNIS phone number to route emergency calls to, in E.164 format.',
        }),
    ),
    TestPhoneNumber: E164PhoneNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'The DNIS phone number to route test emergency calls to, in E.164 format.',
        }),
    ).exactOptional(),
    CallingCountry: Alpha2CountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.',
        }),
    ),
  })
  .openapi({
    required: ['EmergencyPhoneNumber', 'CallingCountry'],
    description:
      "The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.",
  })
  .openapi('DNISEmergencyCallingConfiguration')

const DNISEmergencyCallingConfigurationListSchema = z
  .array(DNISEmergencyCallingConfigurationSchema)
  .openapi('DNISEmergencyCallingConfigurationList')

const EmergencyCallingConfigurationSchema = z
  .object({
    DNIS: DNISEmergencyCallingConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Dialed Number Identification Service (DNIS) emergency calling configuration details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The emergency calling configuration details associated with an Amazon Chime Voice Connector.',
    required: [],
  })
  .openapi('EmergencyCallingConfiguration')

const GetVoiceConnectorEmergencyCallingConfigurationResponseSchema = z
  .object({
    EmergencyCallingConfiguration: EmergencyCallingConfigurationSchema.and(
      z.any().openapi({ description: 'The emergency calling configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorEmergencyCallingConfigurationResponse')

const GetVoiceConnectorGroupResponseSchema = z
  .object({
    VoiceConnectorGroup: VoiceConnectorGroupSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector group details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorGroupResponse')

const LoggingConfigurationSchema = z
  .object({
    EnableSIPLogs: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean that enables SIP message logs to Amazon CloudWatch logs.',
        }),
    ).exactOptional(),
    EnableMediaMetricLogs: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean that enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.',
    required: [],
  })
  .openapi('LoggingConfiguration')

const GetVoiceConnectorLoggingConfigurationResponseSchema = z
  .object({
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z.any().openapi({ description: 'The logging configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorLoggingConfigurationResponse')

const PortSchema = z.int().min(0).max(65535).openapi('Port')

const OriginationRouteProtocolSchema = z.enum(['TCP', 'UDP']).openapi('OriginationRouteProtocol')

const OriginationRoutePrioritySchema = z.int().min(1).max(100).openapi('OriginationRoutePriority')

const OriginationRouteWeightSchema = z.int().min(1).max(100).openapi('OriginationRouteWeight')

const OriginationRouteSchema = z
  .object({
    Host: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The FQDN or IP address to contact for origination traffic.' }),
    ).exactOptional(),
    Port: PortSchema.and(
      z.any().openapi({ description: 'The designated origination route port. Defaults to 5060.' }),
    ).exactOptional(),
    Protocol: OriginationRouteProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.',
        }),
    ).exactOptional(),
    Priority: OriginationRoutePrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The priority associated with the host, with 1 being the highest priority. Higher priority hosts are attempted first.',
        }),
    ).exactOptional(),
    Weight: OriginationRouteWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'The weight associated with the host. If hosts are equal in priority, calls are redistributed among them based on their relative weight.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Origination routes define call distribution properties for your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note>',
    required: [],
  })
  .openapi('OriginationRoute')

const OriginationRouteListSchema = z.array(OriginationRouteSchema).openapi('OriginationRouteList')

const OriginationSchema = z
  .object({
    Routes: OriginationRouteListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1. Maximum value of 20. This parameter is not required, but you must specify this parameter or <code>Disabled</code>.',
        }),
    ).exactOptional(),
    Disabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When origination settings are disabled, inbound calls are not enabled for your Amazon Chime Voice Connector. This parameter is not required, but you must specify this parameter or <code>Routes</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note>',
    required: [],
  })
  .openapi('Origination')

const GetVoiceConnectorOriginationResponseSchema = z
  .object({
    Origination: OriginationSchema.and(
      z.any().openapi({ description: 'The origination setting details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorOriginationResponse')

const IntegerSchema = z.int().openapi('Integer')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const ProxySchema = z
  .object({
    DefaultSessionExpiryMinutes: IntegerSchema.and(
      z.any().openapi({ description: 'The default number of minutes allowed for proxy sessions.' }),
    ).exactOptional(),
    Disabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.',
        }),
    ).exactOptional(),
    FallBackPhoneNumber: E164PhoneNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'The phone number to route calls to after a proxy session expires.',
        }),
    ).exactOptional(),
    PhoneNumberCountries: StringListSchema.and(
      z
        .any()
        .openapi({ description: 'The countries for proxy phone numbers to be selected from.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The proxy configuration for an Amazon Chime Voice Connector.',
    required: [],
  })
  .openapi('Proxy')

const GetVoiceConnectorProxyResponseSchema = z
  .object({
    Proxy: ProxySchema.and(
      z.any().openapi({ description: 'The proxy configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorProxyResponse')

const DataRetentionInHoursSchema = z.int().min(0).openapi('DataRetentionInHours')

const NotificationTargetSchema = z.enum(['EventBridge', 'SNS', 'SQS']).openapi('NotificationTarget')

const StreamingNotificationTargetSchema = z
  .object({
    NotificationTarget: NotificationTargetSchema.and(
      z.any().openapi({ description: 'The streaming notification target.' }),
    ),
  })
  .openapi({
    required: ['NotificationTarget'],
    description: 'The targeted recipient for a streaming configuration notification.',
  })
  .openapi('StreamingNotificationTarget')

const StreamingNotificationTargetListSchema = z
  .array(StreamingNotificationTargetSchema)
  .min(1)
  .max(3)
  .openapi('StreamingNotificationTargetList')

const StreamingConfigurationSchema = z
  .object({
    DataRetentionInHours: DataRetentionInHoursSchema.and(
      z
        .any()
        .openapi({ description: 'The retention period, in hours, for the Amazon Kinesis data.' }),
    ),
    Disabled: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'When true, media streaming to Amazon Kinesis is turned off.' }),
    ).exactOptional(),
    StreamingNotificationTargets: StreamingNotificationTargetListSchema.and(
      z.any().openapi({ description: 'The streaming notification targets.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DataRetentionInHours'],
    description:
      'The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.',
  })
  .openapi('StreamingConfiguration')

const GetVoiceConnectorStreamingConfigurationResponseSchema = z
  .object({
    StreamingConfiguration: StreamingConfigurationSchema.and(
      z.any().openapi({ description: 'The streaming configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorStreamingConfigurationResponse')

const CpsLimitSchema = z.int().min(1).openapi('CpsLimit')

const CallingRegionSchema = z.string().openapi('CallingRegion')

const CallingRegionListSchema = z.array(CallingRegionSchema).openapi('CallingRegionList')

const TerminationSchema = z
  .object({
    CpsLimit: CpsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The limit on calls per second. Max value based on account service quota. Default value of 1.',
        }),
    ).exactOptional(),
    DefaultPhoneNumber: E164PhoneNumberSchema.and(
      z.any().openapi({ description: 'The default caller ID phone number.' }),
    ).exactOptional(),
    CallingRegions: CallingRegionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.',
        }),
    ).exactOptional(),
    CidrAllowedList: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'The IP addresses allowed to make calls, in CIDR format. Required.',
        }),
    ).exactOptional(),
    Disabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When termination settings are disabled, outbound calls can not be made.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.',
    required: [],
  })
  .openapi('Termination')

const GetVoiceConnectorTerminationResponseSchema = z
  .object({
    Termination: TerminationSchema.and(
      z.any().openapi({ description: 'The termination setting details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorTerminationResponse')

const TerminationHealthSchema = z
  .object({
    Timestamp: Iso8601TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp, in ISO 8601 format.' }),
    ).exactOptional(),
    Source: StringSchema.and(
      z.any().openapi({ description: 'The source IP address.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure.',
    required: [],
  })
  .openapi('TerminationHealth')

const GetVoiceConnectorTerminationHealthResponseSchema = z
  .object({
    TerminationHealth: TerminationHealthSchema.and(
      z.any().openapi({ description: 'The termination health details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVoiceConnectorTerminationHealthResponse')

const EmailStatusSchema = z.enum(['NotSent', 'Sent', 'Failed']).openapi('EmailStatus')

const InviteSchema = z
  .object({
    InviteId: StringSchema.and(z.any().openapi({ description: 'The invite ID.' })).exactOptional(),
    Status: InviteStatusSchema.and(
      z.any().openapi({ description: 'The status of the invite.' }),
    ).exactOptional(),
    EmailAddress: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email address to which the invite is sent.' }),
    ).exactOptional(),
    EmailStatus: EmailStatusSchema.and(
      z.any().openapi({ description: 'The status of the invite email.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account.',
    required: [],
  })
  .openapi('Invite')

const InviteListSchema = z.array(InviteSchema).openapi('InviteList')

const InviteUsersResponseSchema = z
  .object({
    Invites: InviteListSchema.and(
      z.any().openapi({ description: 'The email invitation details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InviteUsersResponse')

const AccountListSchema = z.array(AccountSchema).openapi('AccountList')

const ListAccountsResponseSchema = z
  .object({
    Accounts: AccountListSchema.and(
      z.any().openapi({ description: 'List of Amazon Chime accounts and account details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccountsResponse')

const AppInstanceAdminSummarySchema = z
  .object({
    Admin: IdentitySchema.and(
      z.any().openapi({ description: 'The details of the <code>AppInstanceAdmin</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary of the details of an <code>AppInstanceAdmin</code>.',
    required: [],
  })
  .openapi('AppInstanceAdminSummary')

const AppInstanceAdminListSchema = z
  .array(AppInstanceAdminSummarySchema)
  .openapi('AppInstanceAdminList')

const NextTokenSchema = z.string().regex(/.*/).min(0).max(2048).openapi('NextToken')

const ListAppInstanceAdminsResponseSchema = z
  .object({
    AppInstanceArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>AppInstance</code>.' }),
    ).exactOptional(),
    AppInstanceAdmins: AppInstanceAdminListSchema.and(
      z.any().openapi({ description: 'The information for each administrator.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned from previous API requests until the number of administrators is reached.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAppInstanceAdminsResponse')

const AppInstanceUserSummarySchema = z
  .object({
    AppInstanceUserArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
    Name: UserNameSchema.and(
      z.any().openapi({ description: 'The name of an <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary of the details of an <code>AppInstanceUser</code>.',
    required: [],
  })
  .openapi('AppInstanceUserSummary')

const AppInstanceUserListSchema = z
  .array(AppInstanceUserSummarySchema)
  .openapi('AppInstanceUserList')

const ListAppInstanceUsersResponseSchema = z
  .object({
    AppInstanceArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>AppInstance</code>.' }),
    ).exactOptional(),
    AppInstanceUsers: AppInstanceUserListSchema.and(
      z
        .any()
        .openapi({
          description: 'The information for each requested <code>AppInstanceUser</code>.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token passed by previous API calls until all requested users are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAppInstanceUsersResponse')

const AppInstanceSummarySchema = z
  .object({
    AppInstanceArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The <code>AppInstance</code> ARN.' }),
    ).exactOptional(),
    Name: NonEmptyResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>AppInstance</code>.' }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the <code>AppInstance</code>.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary of the data for an <code>AppInstance</code>.', required: [] })
  .openapi('AppInstanceSummary')

const AppInstanceListSchema = z.array(AppInstanceSummarySchema).openapi('AppInstanceList')

const ListAppInstancesResponseSchema = z
  .object({
    AppInstances: AppInstanceListSchema.and(
      z.any().openapi({ description: 'The information for each <code>AppInstance</code>.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token passed by previous API requests until the maximum number of <code>AppInstance</code>s is reached.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAppInstancesResponse')

const TagListSchema = z.array(TagSchema).min(1).max(50).openapi('TagList')

const ListAttendeeTagsResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tag key-value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAttendeeTagsResponse')

const ListAttendeesResponseSchema = z
  .object({
    Attendees: AttendeeListSchema.and(
      z.any().openapi({ description: 'The Amazon Chime SDK attendee information.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAttendeesResponse')

const BotListSchema = z.array(BotSchema).openapi('BotList')

const ListBotsResponseSchema = z
  .object({
    Bots: BotListSchema.and(
      z.any().openapi({ description: 'List of bots and bot details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBotsResponse')

const ChannelBanSummarySchema = z
  .object({
    Member: IdentitySchema.and(
      z.any().openapi({ description: 'The member being banned from a channel.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary of the details of a <code>ChannelBan</code>.', required: [] })
  .openapi('ChannelBanSummary')

const ChannelBanSummaryListSchema = z
  .array(ChannelBanSummarySchema)
  .openapi('ChannelBanSummaryList')

const ListChannelBansResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token passed by previous API calls until all requested bans are returned.',
        }),
    ).exactOptional(),
    ChannelBans: ChannelBanSummaryListSchema.and(
      z.any().openapi({ description: 'The information for each requested ban.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelBansResponse')

const ChannelMembershipSummarySchema = z
  .object({
    Member: IdentitySchema.and(
      z.any().openapi({ description: "A member's summary data." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary of the details of a <code>ChannelMembership</code>.',
    required: [],
  })
  .openapi('ChannelMembershipSummary')

const ChannelMembershipSummaryListSchema = z
  .array(ChannelMembershipSummarySchema)
  .openapi('ChannelMembershipSummaryList')

const ListChannelMembershipsResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    ChannelMemberships: ChannelMembershipSummaryListSchema.and(
      z.any().openapi({ description: 'The information for the requested channel memberships.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token passed by previous API calls until all requested channel memberships are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelMembershipsResponse')

const ChannelMembershipForAppInstanceUserSummaryListSchema = z
  .array(ChannelMembershipForAppInstanceUserSummarySchema)
  .openapi('ChannelMembershipForAppInstanceUserSummaryList')

const ListChannelMembershipsForAppInstanceUserResponseSchema = z
  .object({
    ChannelMemberships: ChannelMembershipForAppInstanceUserSummaryListSchema.and(
      z.any().openapi({ description: 'The information for the requested channel memberships.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token passed by previous API calls until all requested users are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelMembershipsForAppInstanceUserResponse')

const ChannelMessageSummarySchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'The ID of the message.' }),
    ).exactOptional(),
    Content: ContentSchema.and(
      z.any().openapi({ description: 'The content of the message.' }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the message.' }),
    ).exactOptional(),
    Type: ChannelMessageTypeSchema.and(
      z.any().openapi({ description: 'The type of message.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the message summary was created.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which a message was last updated.' }),
    ).exactOptional(),
    LastEditedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which a message was last edited.' }),
    ).exactOptional(),
    Sender: IdentitySchema.and(
      z.any().openapi({ description: 'The message sender.' }),
    ).exactOptional(),
    Redacted: NonNullableBooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether a message was redacted.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary of the messages in a <code>Channel</code>.', required: [] })
  .openapi('ChannelMessageSummary')

const ChannelMessageSummaryListSchema = z
  .array(ChannelMessageSummarySchema)
  .openapi('ChannelMessageSummaryList')

const ListChannelMessagesResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel containing the requested messages.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token passed by previous API calls until all requested messages are returned.',
        }),
    ).exactOptional(),
    ChannelMessages: ChannelMessageSummaryListSchema.and(
      z
        .any()
        .openapi({ description: 'The information about, and content of, each requested message.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelMessagesResponse')

const ChannelModeratorSummarySchema = z
  .object({
    Moderator: IdentitySchema.and(
      z.any().openapi({ description: 'The data for a moderator.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary of the details of a <code>ChannelModerator</code>.',
    required: [],
  })
  .openapi('ChannelModeratorSummary')

const ChannelModeratorSummaryListSchema = z
  .array(ChannelModeratorSummarySchema)
  .openapi('ChannelModeratorSummaryList')

const ListChannelModeratorsResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token passed by previous API calls until all requested moderators are returned.',
        }),
    ).exactOptional(),
    ChannelModerators: ChannelModeratorSummaryListSchema.and(
      z.any().openapi({ description: 'The information about and names of each moderator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelModeratorsResponse')

const ChannelSummaryListSchema = z.array(ChannelSummarySchema).openapi('ChannelSummaryList')

const ListChannelsResponseSchema = z
  .object({
    Channels: ChannelSummaryListSchema.and(
      z.any().openapi({ description: 'The information about each channel.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned from previous API requests until the number of channels is reached.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelsResponse')

const ChannelModeratedByAppInstanceUserSummaryListSchema = z
  .array(ChannelModeratedByAppInstanceUserSummarySchema)
  .openapi('ChannelModeratedByAppInstanceUserSummaryList')

const ListChannelsModeratedByAppInstanceUserResponseSchema = z
  .object({
    Channels: ChannelModeratedByAppInstanceUserSummaryListSchema.and(
      z.any().openapi({ description: 'The moderated channels in the request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token returned from previous API requests until the number of channels moderated by the user is reached.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelsModeratedByAppInstanceUserResponse')

const MediaCapturePipelineListSchema = z
  .array(MediaCapturePipelineSchema)
  .openapi('MediaCapturePipelineList')

const ListMediaCapturePipelinesResponseSchema = z
  .object({
    MediaCapturePipelines: MediaCapturePipelineListSchema.and(
      z.any().openapi({ description: 'The media capture pipeline objects in the list.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token used to retrieve the next page of results. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMediaCapturePipelinesResponse')

const ListMeetingTagsResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tag key-value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMeetingTagsResponse')

const MeetingListSchema = z.array(MeetingSchema).openapi('MeetingList')

const ListMeetingsResponseSchema = z
  .object({
    Meetings: MeetingListSchema.and(
      z.any().openapi({ description: 'The Amazon Chime SDK meeting information.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMeetingsResponse')

const PhoneNumberOrderListSchema = z.array(PhoneNumberOrderSchema).openapi('PhoneNumberOrderList')

const ListPhoneNumberOrdersResponseSchema = z
  .object({
    PhoneNumberOrders: PhoneNumberOrderListSchema.and(
      z.any().openapi({ description: 'The phone number order details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPhoneNumberOrdersResponse')

const PhoneNumberListSchema = z.array(PhoneNumberSchema).openapi('PhoneNumberList')

const ListPhoneNumbersResponseSchema = z
  .object({
    PhoneNumbers: PhoneNumberListSchema.and(
      z.any().openapi({ description: 'The phone number details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPhoneNumbersResponse')

const ProxySessionsSchema = z.array(ProxySessionSchema).openapi('ProxySessions')

const NextTokenStringSchema = z.string().max(65535).openapi('NextTokenString')

const ListProxySessionsResponseSchema = z
  .object({
    ProxySessions: ProxySessionsSchema.and(
      z.any().openapi({ description: 'The proxy session details.' }),
    ).exactOptional(),
    NextToken: NextTokenStringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProxySessionsResponse')

const RoomMembershipListSchema = z.array(RoomMembershipSchema).openapi('RoomMembershipList')

const ListRoomMembershipsResponseSchema = z
  .object({
    RoomMemberships: RoomMembershipListSchema.and(
      z.any().openapi({ description: 'The room membership details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRoomMembershipsResponse')

const RoomListSchema = z.array(RoomSchema).openapi('RoomList')

const ListRoomsResponseSchema = z
  .object({
    Rooms: RoomListSchema.and(
      z.any().openapi({ description: 'The room details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRoomsResponse')

const SipMediaApplicationListSchema = z
  .array(SipMediaApplicationSchema)
  .openapi('SipMediaApplicationList')

const ListSipMediaApplicationsResponseSchema = z
  .object({
    SipMediaApplications: SipMediaApplicationListSchema.and(
      z.any().openapi({ description: 'List of SIP media applications and application details.' }),
    ).exactOptional(),
    NextToken: NextTokenStringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSipMediaApplicationsResponse')

const SipRuleListSchema = z.array(SipRuleSchema).openapi('SipRuleList')

const ListSipRulesResponseSchema = z
  .object({
    SipRules: SipRuleListSchema.and(
      z.any().openapi({ description: 'List of SIP rules and rule details.' }),
    ).exactOptional(),
    NextToken: NextTokenStringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSipRulesResponse')

const PhoneNumberTypeListSchema = z.array(PhoneNumberTypeSchema).openapi('PhoneNumberTypeList')

const PhoneNumberCountrySchema = z
  .object({
    CountryCode: Alpha2CountryCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The phone number country code. Format: ISO 3166-1 alpha-2.' }),
    ).exactOptional(),
    SupportedPhoneNumberTypes: PhoneNumberTypeListSchema.and(
      z.any().openapi({ description: 'The supported phone number types. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The phone number country.', required: [] })
  .openapi('PhoneNumberCountry')

const PhoneNumberCountriesListSchema = z
  .array(PhoneNumberCountrySchema)
  .openapi('PhoneNumberCountriesList')

const ListSupportedPhoneNumberCountriesResponseSchema = z
  .object({
    PhoneNumberCountries: PhoneNumberCountriesListSchema.and(
      z.any().openapi({ description: 'The supported phone number countries.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSupportedPhoneNumberCountriesResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tag-key value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const UserListSchema = z.array(UserSchema).openapi('UserList')

const ListUsersResponseSchema = z
  .object({
    Users: UserListSchema.and(
      z.any().openapi({ description: 'List of users and user details.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUsersResponse')

const VoiceConnectorGroupListSchema = z
  .array(VoiceConnectorGroupSchema)
  .openapi('VoiceConnectorGroupList')

const ListVoiceConnectorGroupsResponseSchema = z
  .object({
    VoiceConnectorGroups: VoiceConnectorGroupListSchema.and(
      z.any().openapi({ description: 'The details of the Amazon Chime Voice Connector groups.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVoiceConnectorGroupsResponse')

const SensitiveStringListSchema = z.array(SensitiveStringSchema).openapi('SensitiveStringList')

const ListVoiceConnectorTerminationCredentialsResponseSchema = z
  .object({
    Usernames: SensitiveStringListSchema.and(
      z.any().openapi({ description: 'A list of user names.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVoiceConnectorTerminationCredentialsResponse')

const VoiceConnectorListSchema = z.array(VoiceConnectorSchema).openapi('VoiceConnectorList')

const ListVoiceConnectorsResponseSchema = z
  .object({
    VoiceConnectors: VoiceConnectorListSchema.and(
      z.any().openapi({ description: 'The details of the Amazon Chime Voice Connectors.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVoiceConnectorsResponse')

const LogoutUserResponseSchema = z.object({}).openapi('LogoutUserResponse')

const PutAppInstanceRetentionSettingsResponseSchema = z
  .object({
    AppInstanceRetentionSettings: AppInstanceRetentionSettingsSchema.and(
      z.any().openapi({ description: 'The time in days to retain data. Data type: number.' }),
    ).exactOptional(),
    InitiateDeletionTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the API deletes data.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutAppInstanceRetentionSettingsResponse')

const PutAppInstanceStreamingConfigurationsResponseSchema = z
  .object({
    AppInstanceStreamingConfigurations: AppInstanceStreamingConfigurationListSchema.and(
      z
        .any()
        .openapi({ description: 'The streaming configurations of an <code>AppInstance</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutAppInstanceStreamingConfigurationsResponse')

const PutEventsConfigurationResponseSchema = z
  .object({
    EventsConfiguration: EventsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that allows a bot to receive outgoing events. Can be an HTTPS endpoint or an AWS Lambda function ARN.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutEventsConfigurationResponse')

const PutRetentionSettingsResponseSchema = z
  .object({
    RetentionSettings: RetentionSettingsSchema.and(
      z.any().openapi({ description: 'The retention settings.' }),
    ).exactOptional(),
    InitiateDeletionTimestamp: Iso8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRetentionSettingsResponse')

const PutSipMediaApplicationLoggingConfigurationResponseSchema = z
  .object({
    SipMediaApplicationLoggingConfiguration: SipMediaApplicationLoggingConfigurationSchema.and(
      z.any().openapi({ description: 'The logging configuration of the SIP media application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutSipMediaApplicationLoggingConfigurationResponse')

const PutVoiceConnectorEmergencyCallingConfigurationResponseSchema = z
  .object({
    EmergencyCallingConfiguration: EmergencyCallingConfigurationSchema.and(
      z.any().openapi({ description: 'The emergency calling configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutVoiceConnectorEmergencyCallingConfigurationResponse')

const PutVoiceConnectorLoggingConfigurationResponseSchema = z
  .object({
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z.any().openapi({ description: 'The updated logging configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutVoiceConnectorLoggingConfigurationResponse')

const PutVoiceConnectorOriginationResponseSchema = z
  .object({
    Origination: OriginationSchema.and(
      z.any().openapi({ description: 'The updated origination setting details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutVoiceConnectorOriginationResponse')

const PutVoiceConnectorProxyResponseSchema = z
  .object({
    Proxy: ProxySchema.and(
      z.any().openapi({ description: 'The proxy configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutVoiceConnectorProxyResponse')

const PutVoiceConnectorStreamingConfigurationResponseSchema = z
  .object({
    StreamingConfiguration: StreamingConfigurationSchema.and(
      z.any().openapi({ description: 'The updated streaming configuration details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutVoiceConnectorStreamingConfigurationResponse')

const PutVoiceConnectorTerminationResponseSchema = z
  .object({
    Termination: TerminationSchema.and(
      z.any().openapi({ description: 'The updated termination setting details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutVoiceConnectorTerminationResponse')

const CredentialSchema = z
  .object({
    Username: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII format.',
        }),
    ).exactOptional(),
    Password: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.',
    required: [],
  })
  .openapi('Credential')

const RedactChannelMessageResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the channel containing the messages that you want to redact.',
        }),
    ).exactOptional(),
    MessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'The ID of the message being redacted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RedactChannelMessageResponse')

const RedactConversationMessageResponseSchema = z
  .object({})
  .openapi('RedactConversationMessageResponse')

const RedactRoomMessageResponseSchema = z.object({}).openapi('RedactRoomMessageResponse')

const RegenerateSecurityTokenResponseSchema = z
  .object({
    Bot: BotSchema.and(
      z
        .any()
        .openapi({
          description:
            'A resource that allows Enterprise account administrators to configure an interface that receives events from Amazon Chime.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegenerateSecurityTokenResponse')

const ResetPersonalPINResponseSchema = z
  .object({
    User: UserSchema.and(
      z.any().openapi({ description: 'The user details and new personal meeting PIN.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResetPersonalPINResponse')

const RestorePhoneNumberResponseSchema = z
  .object({
    PhoneNumber: PhoneNumberSchema.and(
      z.any().openapi({ description: 'The phone number details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestorePhoneNumberResponse')

const E164PhoneNumberListSchema = z.array(E164PhoneNumberSchema).openapi('E164PhoneNumberList')

const SearchAvailablePhoneNumbersResponseSchema = z
  .object({
    E164PhoneNumbers: E164PhoneNumberListSchema.and(
      z.any().openapi({ description: 'List of phone numbers, in E.164 format.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The token used to retrieve the next page of search results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchAvailablePhoneNumbersResponse')

const SendChannelMessageResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    MessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'The ID string assigned to each message.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendChannelMessageResponse')

const StartMeetingTranscriptionResponseSchema = z
  .object({})
  .openapi('StartMeetingTranscriptionResponse')

const TranscribeLanguageCodeSchema = z
  .enum([
    'en-US',
    'en-GB',
    'es-US',
    'fr-CA',
    'fr-FR',
    'en-AU',
    'it-IT',
    'de-DE',
    'pt-BR',
    'ja-JP',
    'ko-KR',
    'zh-CN',
    'th-TH',
    'hi-IN',
  ])
  .openapi('TranscribeLanguageCode')

const TranscribeVocabularyFilterMethodSchema = z
  .enum(['remove', 'mask', 'tag'])
  .openapi('TranscribeVocabularyFilterMethod')

const TranscribeRegionSchema = z
  .enum([
    'us-east-2',
    'us-east-1',
    'us-west-2',
    'ap-northeast-2',
    'ap-southeast-2',
    'ap-northeast-1',
    'ca-central-1',
    'eu-central-1',
    'eu-west-1',
    'eu-west-2',
    'sa-east-1',
    'auto',
  ])
  .openapi('TranscribeRegion')

const TranscribePartialResultsStabilitySchema = z
  .enum(['low', 'medium', 'high'])
  .openapi('TranscribePartialResultsStability')

const TranscribeContentIdentificationTypeSchema = z
  .literal('PII')
  .openapi('TranscribeContentIdentificationType')

const TranscribeContentRedactionTypeSchema = z
  .literal('PII')
  .openapi('TranscribeContentRedactionType')

const TranscribePiiEntityTypesSchema = z
  .string()
  .regex(/^[A-Z_, ]+/)
  .min(1)
  .max(300)
  .openapi('TranscribePiiEntityTypes')

const TranscribeLanguageModelNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z._-]+/)
  .min(1)
  .max(200)
  .openapi('TranscribeLanguageModelName')

const TranscribeLanguageOptionsSchema = z
  .string()
  .regex(/^[a-zA-Z-,]+/)
  .min(1)
  .max(200)
  .openapi('TranscribeLanguageOptions')

const TranscribeVocabularyNamesOrFilterNamesStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9,-._]+/)
  .min(1)
  .max(3000)
  .openapi('TranscribeVocabularyNamesOrFilterNamesString')

const EngineTranscribeSettingsSchema = z
  .object({
    LanguageCode: TranscribeLanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify the language code that represents the language spoken.</p> <p>If you're unsure of the language spoken in your audio, consider using <code>IdentifyLanguage</code> to enable automatic language identification.</p>",
        }),
    ).exactOptional(),
    VocabularyFilterMethod: TranscribeVocabularyFilterMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify how you want your vocabulary filter applied to your transcript.</p> <p> To replace words with <code>***</code>, choose <code>mask</code>.</p> <p>To delete words, choose <code>remove</code>.</p> <p>To flag words without changing them, choose <code>tag</code>.</p>',
        }),
    ).exactOptional(),
    VocabularyFilterName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. </p> <p>If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.</p> <p>If you include <code>IdentifyLanguage</code> and want to use one or more vocabulary filters with your transcription, use the <code>VocabularyFilterNames</code> parameter instead.</p>',
        }),
    ).exactOptional(),
    VocabularyName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.</p> <p>If you use Amazon Transcribe multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.</p> <p>If you include <code>IdentifyLanguage</code> and want to use one or more custom vocabularies with your transcription, use the <code>VocabularyNames</code> parameter instead.</p>',
        }),
    ).exactOptional(),
    Region: TranscribeRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The AWS Region in which to use Amazon Transcribe.</p> <p>If you don\'t specify a Region, then the <code>MediaRegion</code> parameter of the <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html">CreateMeeting.html</a> API will be used. However, if Amazon Transcribe is not available in the <code>MediaRegion</code>, then a TranscriptFailed event is sent.</p> <p>Use <code>auto</code> to use Amazon Transcribe in a Region near the meeting’s <code>MediaRegion</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/transcription-options.html#choose-region">Choosing a transcription Region</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    EnablePartialResultsStabilization: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.',
        }),
    ).exactOptional(),
    PartialResultsStability: TranscribePartialResultsStabilitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the level of stability to use when you enable partial results stabilization (<code>EnablePartialResultsStabilization</code>).</p> <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.</p>',
        }),
    ).exactOptional(),
    ContentIdentificationType: TranscribeContentIdentificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Labels all personally identifiable information (PII) identified in your transcript. If you don't include <code>PiiEntityTypes</code>, all PII is identified.</p> <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>",
        }),
    ).exactOptional(),
    ContentRedactionType: TranscribeContentRedactionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Content redaction is performed at the segment level. If you don't include <code>PiiEntityTypes</code>, all PII is redacted.</p> <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>",
        }),
    ).exactOptional(),
    PiiEntityTypes: TranscribePiiEntityTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select <code>ALL</code>.</p> <p>Values must be comma-separated and can include: <code>ADDRESS</code>, <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>, <code>CREDIT_DEBIT_CVV</code>, <code>CREDIT_DEBIT_EXPIRY</code> <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,<code>NAME</code>, <code>PHONE</code>, <code>PIN</code>, <code>SSN</code>, or <code>ALL</code>.</p> <p>Note that if you include <code>PiiEntityTypes</code>, you must also include <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p> <p>If you include <code>ContentRedactionType</code> or <code>ContentIdentificationType</code>, but do not include <code>PiiEntityTypes</code>, all PII is redacted or identified.</p>",
        }),
    ).exactOptional(),
    LanguageModelName: TranscribeLanguageModelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive.</p> <p>The language of the specified language model must match the language code. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.</p> <p>If you use Amazon Transcribe in multiple Regions, the custom language model must be available in Amazon Transcribe in each Region.</p>",
        }),
    ).exactOptional(),
    IdentifyLanguage: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Enables automatic language identification for your transcription.</p> <p>If you include <code>IdentifyLanguage</code>, you can optionally use <code>LanguageOptions</code> to include a list of language codes that you think may be present in your audio stream. Including language options can improve transcription accuracy.</p> <p>You can also use <code>PreferredLanguage</code> to include a preferred language. Doing so can help Amazon Transcribe identify the language faster.</p> <p>You must include either <code>LanguageCode</code> or <code>IdentifyLanguage</code>.</p> <p>Language identification can't be combined with custom language models or redaction.</p>",
        }),
    ).exactOptional(),
    LanguageOptions: TranscribeLanguageOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended. If you're unsure what languages are present, do not include this parameter.</p> <p>Including language options can improve the accuracy of language identification.</p> <p>If you include <code>LanguageOptions</code>, you must also include <code>IdentifyLanguage</code>.</p> <important> <p>You can only include one language dialect per language. For example, you cannot include <code>en-US</code> and <code>en-AU</code>.</p> </important>",
        }),
    ).exactOptional(),
    PreferredLanguage: TranscribeLanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify a preferred language from the subset of languages codes you specified in <code>LanguageOptions</code>.</p> <p>You can only use this parameter if you include <code>IdentifyLanguage</code> and <code>LanguageOptions</code>.</p>',
        }),
    ).exactOptional(),
    VocabularyNames: TranscribeVocabularyNamesOrFilterNamesStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive.</p> <p>If you use Amazon Transcribe in multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.</p> <p>If you don't include <code>IdentifyLanguage</code> and want to use a custom vocabulary with your transcription, use the <code>VocabularyName</code> parameter instead.</p>",
        }),
    ).exactOptional(),
    VocabularyFilterNames: TranscribeVocabularyNamesOrFilterNamesStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.</p> <p>If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.</p> <p> If you're <i>not</i> including <code>IdentifyLanguage</code> and want to use a custom vocabulary filter with your transcription, use the <code>VocabularyFilterName</code> parameter instead.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Settings specific for Amazon Transcribe as the live transcription engine.</p> <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('EngineTranscribeSettings')

const TranscribeMedicalLanguageCodeSchema = z
  .literal('en-US')
  .openapi('TranscribeMedicalLanguageCode')

const TranscribeMedicalSpecialtySchema = z
  .enum(['PRIMARYCARE', 'CARDIOLOGY', 'NEUROLOGY', 'ONCOLOGY', 'RADIOLOGY', 'UROLOGY'])
  .openapi('TranscribeMedicalSpecialty')

const TranscribeMedicalTypeSchema = z
  .enum(['CONVERSATION', 'DICTATION'])
  .openapi('TranscribeMedicalType')

const TranscribeMedicalRegionSchema = z
  .enum([
    'us-east-1',
    'us-east-2',
    'us-west-2',
    'ap-southeast-2',
    'ca-central-1',
    'eu-west-1',
    'auto',
  ])
  .openapi('TranscribeMedicalRegion')

const TranscribeMedicalContentIdentificationTypeSchema = z
  .literal('PHI')
  .openapi('TranscribeMedicalContentIdentificationType')

const EngineTranscribeMedicalSettingsSchema = z
  .object({
    LanguageCode: TranscribeMedicalLanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The language code specified for the Amazon Transcribe Medical engine.',
        }),
    ),
    Specialty: TranscribeMedicalSpecialtySchema.and(
      z
        .any()
        .openapi({
          description: 'The specialty specified for the Amazon Transcribe Medical engine.',
        }),
    ),
    Type: TranscribeMedicalTypeSchema.and(
      z.any().openapi({ description: 'The type of transcription.' }),
    ),
    VocabularyName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the vocabulary passed to Amazon Transcribe Medical.',
        }),
    ).exactOptional(),
    Region: TranscribeMedicalRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The AWS Region passed to Amazon Transcribe Medical. If you don't specify a Region, Amazon Chime uses the meeting's Region.",
        }),
    ).exactOptional(),
    ContentIdentificationType: TranscribeMedicalContentIdentificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Labels all personally identifiable information (PII) identified in your transcript. If you don't include <code>PiiEntityTypes</code>, all PII is identified.</p> <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LanguageCode', 'Specialty', 'Type'],
    description: 'Settings specific to the Amazon Transcribe Medical engine.',
  })
  .openapi('EngineTranscribeMedicalSettings')

const StopMeetingTranscriptionResponseSchema = z
  .object({})
  .openapi('StopMeetingTranscriptionResponse')

const UpdateAccountResponseSchema = z
  .object({
    Account: AccountSchema.and(
      z.any().openapi({ description: 'The updated Amazon Chime account details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAccountResponse')

const UpdateAccountSettingsResponseSchema = z.object({}).openapi('UpdateAccountSettingsResponse')

const UpdateAppInstanceResponseSchema = z
  .object({
    AppInstanceArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>AppInstance</code>. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAppInstanceResponse')

const UpdateAppInstanceUserResponseSchema = z
  .object({
    AppInstanceUserArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAppInstanceUserResponse')

const UpdateBotResponseSchema = z
  .object({
    Bot: BotSchema.and(
      z.any().openapi({ description: 'The updated bot details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBotResponse')

const UpdateChannelResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChannelResponse')

const UpdateChannelMessageResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    MessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'The ID string of the message being updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChannelMessageResponse')

const UpdateChannelReadMarkerResponseSchema = z
  .object({
    ChannelArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChannelReadMarkerResponse')

const UpdatePhoneNumberResponseSchema = z
  .object({
    PhoneNumber: PhoneNumberSchema.and(
      z.any().openapi({ description: 'The updated phone number details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePhoneNumberResponse')

const UpdateProxySessionResponseSchema = z
  .object({
    ProxySession: ProxySessionSchema.and(
      z.any().openapi({ description: 'The proxy session details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProxySessionResponse')

const UpdateRoomResponseSchema = z
  .object({
    Room: RoomSchema.and(z.any().openapi({ description: 'The room details.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRoomResponse')

const UpdateRoomMembershipResponseSchema = z
  .object({
    RoomMembership: RoomMembershipSchema.and(
      z.any().openapi({ description: 'The room membership details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRoomMembershipResponse')

const UpdateSipMediaApplicationResponseSchema = z
  .object({
    SipMediaApplication: SipMediaApplicationSchema.and(
      z.any().openapi({ description: 'The updated SIP media application details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSipMediaApplicationResponse')

const UpdateSipMediaApplicationCallResponseSchema = z
  .object({
    SipMediaApplicationCall: SipMediaApplicationCallSchema.and(
      z.any().openapi({ description: 'A <code>Call</code> instance for a SIP media application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSipMediaApplicationCallResponse')

const UpdateSipRuleResponseSchema = z
  .object({
    SipRule: SipRuleSchema.and(
      z.any().openapi({ description: 'Updated SIP rule details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSipRuleResponse')

const UpdateUserResponseSchema = z
  .object({
    User: UserSchema.and(
      z.any().openapi({ description: 'The updated user details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUserResponse')

const UpdateVoiceConnectorResponseSchema = z
  .object({
    VoiceConnector: VoiceConnectorSchema.and(
      z.any().openapi({ description: 'The updated Amazon Chime Voice Connector details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateVoiceConnectorResponse')

const UpdateVoiceConnectorGroupResponseSchema = z
  .object({
    VoiceConnectorGroup: VoiceConnectorGroupSchema.and(
      z.any().openapi({ description: 'The updated Amazon Chime Voice Connector group details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateVoiceConnectorGroupResponse')

const ValidationResultSchema = z.int().min(0).max(2).openapi('ValidationResult')

const SensitiveNonEmptyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('SensitiveNonEmptyString')

const AddressSchema = z
  .object({
    streetName: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The address street, such as <code>8th Avenue</code>.' }),
    ).exactOptional(),
    streetSuffix: SensitiveNonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address suffix, such as the <code>N</code> in <code>8th Avenue N</code>.',
        }),
    ).exactOptional(),
    postDirectional: SensitiveNonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An address suffix location, such as the <code>S. Unit A</code> in <code>Central Park S. Unit A</code>.',
        }),
    ).exactOptional(),
    preDirectional: SensitiveNonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An address prefix location, such as the <code>N</code> in <code>N. Third St.</code>.',
        }),
    ).exactOptional(),
    streetNumber: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The numeric portion of an address.' }),
    ).exactOptional(),
    city: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The city of an address.' }),
    ).exactOptional(),
    state: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The state of an address.' }),
    ).exactOptional(),
    postalCode: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The postal code of an address.' }),
    ).exactOptional(),
    postalCodePlus4: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Zip + 4 or postal code + 4 of an address.' }),
    ).exactOptional(),
    country: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The country of an address. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A validated address.', required: [] })
  .openapi('Address')

const CandidateAddressSchema = z
  .object({
    streetInfo: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The street information of a candidate address' }),
    ).exactOptional(),
    streetNumber: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The numeric portion of a candidate address.' }),
    ).exactOptional(),
    city: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The city of a candidate address.' }),
    ).exactOptional(),
    state: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The state of a candidate address.' }),
    ).exactOptional(),
    postalCode: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The postal code of a candidate address.' }),
    ).exactOptional(),
    postalCodePlus4: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Zip + 4 or postal code + 4 of a candidate address.' }),
    ).exactOptional(),
    country: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The country of a candidate address.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A suggested address.', required: [] })
  .openapi('CandidateAddress')

const CandidateAddressListSchema = z.array(CandidateAddressSchema).openapi('CandidateAddressList')

const ValidateE911AddressResponseSchema = z
  .object({
    ValidationResult: ValidationResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number indicating the result of address validation. <code>0</code> means the address was perfect as is and successfully validated. <code>1</code> means the address was corrected. <code>2</code> means the address sent was not close enough and was not validated.',
        }),
    ).exactOptional(),
    AddressExternalId: StringSchema.and(
      z.any().openapi({ description: 'The ID that represents the address.' }),
    ).exactOptional(),
    Address: AddressSchema.and(
      z.any().openapi({ description: 'The validated address.' }),
    ).exactOptional(),
    CandidateAddressList: CandidateAddressListSchema.and(
      z.any().openapi({ description: 'The list of address suggestions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidateE911AddressResponse')

const AccountNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(100)
  .openapi('AccountName')

const AssociatePhoneNumberWithUserRequestSchema = z
  .object({
    E164PhoneNumber: E164PhoneNumberSchema.and(
      z.any().openapi({ description: 'The phone number, in E.164 format.' }),
    ),
  })
  .openapi({ required: ['E164PhoneNumber'], title: 'AssociatePhoneNumberWithUserRequest' })
  .openapi('AssociatePhoneNumberWithUserRequest')

const AssociatePhoneNumbersWithVoiceConnectorGroupRequestSchema = z
  .object({
    E164PhoneNumbers: E164PhoneNumberListSchema.and(
      z.any().openapi({ description: 'List of phone numbers, in E.164 format.' }),
    ),
    ForceAssociate: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['E164PhoneNumbers'],
    title: 'AssociatePhoneNumbersWithVoiceConnectorGroupRequest',
  })
  .openapi('AssociatePhoneNumbersWithVoiceConnectorGroupRequest')

const AssociatePhoneNumbersWithVoiceConnectorRequestSchema = z
  .object({
    E164PhoneNumbers: E164PhoneNumberListSchema.and(
      z.any().openapi({ description: 'List of phone numbers, in E.164 format.' }),
    ),
    ForceAssociate: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['E164PhoneNumbers'],
    title: 'AssociatePhoneNumbersWithVoiceConnectorRequest',
  })
  .openapi('AssociatePhoneNumbersWithVoiceConnectorRequest')

const AssociateSigninDelegateGroupsWithAccountRequestSchema = z
  .object({
    SigninDelegateGroups: SigninDelegateGroupListSchema.and(
      z.any().openapi({ description: 'The sign-in delegate groups.' }),
    ),
  })
  .openapi({
    required: ['SigninDelegateGroups'],
    title: 'AssociateSigninDelegateGroupsWithAccountRequest',
  })
  .openapi('AssociateSigninDelegateGroupsWithAccountRequest')

const AttendeeTagKeyListSchema = z.array(TagKeySchema).min(1).max(10).openapi('AttendeeTagKeyList')

const CreateAttendeeRequestItemListSchema = z
  .array(CreateAttendeeRequestItemSchema)
  .openapi('CreateAttendeeRequestItemList')

const BatchCreateAttendeeRequestSchema = z
  .object({
    Attendees: CreateAttendeeRequestItemListSchema.and(
      z.any().openapi({ description: 'The request containing the attendees to create.' }),
    ),
  })
  .openapi({ required: ['Attendees'], title: 'BatchCreateAttendeeRequest' })
  .openapi('BatchCreateAttendeeRequest')

const MemberArnsSchema = z.array(ChimeArnSchema).min(1).max(100).openapi('MemberArns')

const BatchCreateChannelMembershipRequestSchema = z
  .object({
    Type: ChannelMembershipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.',
        }),
    ).exactOptional(),
    MemberArns: MemberArnsSchema.and(
      z.any().openapi({ description: 'The ARNs of the members you want to add to the channel.' }),
    ),
  })
  .openapi({ required: ['MemberArns'], title: 'BatchCreateChannelMembershipRequest' })
  .openapi('BatchCreateChannelMembershipRequest')

const MembershipItemListSchema = z.array(MembershipItemSchema).max(50).openapi('MembershipItemList')

const BatchCreateRoomMembershipRequestSchema = z
  .object({
    MembershipItemList: MembershipItemListSchema.and(
      z.any().openapi({ description: 'The list of membership items.' }),
    ),
  })
  .openapi({ required: ['MembershipItemList'], title: 'BatchCreateRoomMembershipRequest' })
  .openapi('BatchCreateRoomMembershipRequest')

const NonEmptyStringListSchema = z.array(StringSchema).min(1).openapi('NonEmptyStringList')

const BatchDeletePhoneNumberRequestSchema = z
  .object({
    PhoneNumberIds: NonEmptyStringListSchema.and(
      z.any().openapi({ description: 'List of phone number IDs.' }),
    ),
  })
  .openapi({ required: ['PhoneNumberIds'], title: 'BatchDeletePhoneNumberRequest' })
  .openapi('BatchDeletePhoneNumberRequest')

const UserIdListSchema = z.array(NonEmptyStringSchema).max(50).openapi('UserIdList')

const BatchSuspendUserRequestSchema = z
  .object({
    UserIdList: UserIdListSchema.and(
      z.any().openapi({ description: 'The request containing the user IDs to suspend.' }),
    ),
  })
  .openapi({ required: ['UserIdList'], title: 'BatchSuspendUserRequest' })
  .openapi('BatchSuspendUserRequest')

const BatchUnsuspendUserRequestSchema = z
  .object({
    UserIdList: UserIdListSchema.and(
      z.any().openapi({ description: 'The request containing the user IDs to unsuspend.' }),
    ),
  })
  .openapi({ required: ['UserIdList'], title: 'BatchUnsuspendUserRequest' })
  .openapi('BatchUnsuspendUserRequest')

const UpdatePhoneNumberRequestItemListSchema = z
  .array(UpdatePhoneNumberRequestItemSchema)
  .openapi('UpdatePhoneNumberRequestItemList')

const BatchUpdatePhoneNumberRequestSchema = z
  .object({
    UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The request containing the phone number IDs and product types or calling names to update.',
        }),
    ),
  })
  .openapi({ required: ['UpdatePhoneNumberRequestItems'], title: 'BatchUpdatePhoneNumberRequest' })
  .openapi('BatchUpdatePhoneNumberRequest')

const UpdateUserRequestItemListSchema = z
  .array(UpdateUserRequestItemSchema)
  .max(20)
  .openapi('UpdateUserRequestItemList')

const BatchUpdateUserRequestSchema = z
  .object({
    UpdateUserRequestItems: UpdateUserRequestItemListSchema.and(
      z
        .any()
        .openapi({ description: 'The request containing the user IDs and details to update.' }),
    ),
  })
  .openapi({ required: ['UpdateUserRequestItems'], title: 'BatchUpdateUserRequest' })
  .openapi('BatchUpdateUserRequest')

const ClientRequestTokenSchema = z
  .string()
  .regex(/[-_a-zA-Z0-9]*/)
  .min(2)
  .max(64)
  .openapi('ClientRequestToken')

const CountryListSchema = z.array(CountrySchema).min(1).max(100).openapi('CountryList')

const CreateAccountRequestSchema = z
  .object({
    Name: AccountNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Chime account.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'CreateAccountRequest' })
  .openapi('CreateAccountRequest')

const CreateAppInstanceAdminRequestSchema = z
  .object({
    AppInstanceAdminArn: ChimeArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the administrator of the current <code>AppInstance</code>.',
        }),
    ),
  })
  .openapi({ required: ['AppInstanceAdminArn'], title: 'CreateAppInstanceAdminRequest' })
  .openapi('CreateAppInstanceAdminRequest')

const CreateAppInstanceRequestSchema = z
  .object({
    Name: NonEmptyResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>AppInstance</code>.' }),
    ),
    Metadata: MetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>ClientRequestToken</code> of the <code>AppInstance</code>.',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags assigned to the <code>AppInstance</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'ClientRequestToken'], title: 'CreateAppInstanceRequest' })
  .openapi('CreateAppInstanceRequest')

const UserIdSchema = z
  .string()
  .regex(/[A-Za-z0-9]([A-Za-z0-9\:\-\_\.\@]{0,62}[A-Za-z0-9])?/)
  .min(1)
  .max(64)
  .openapi('UserId')

const CreateAppInstanceUserRequestSchema = z
  .object({
    AppInstanceArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>AppInstance</code> request.' }),
    ),
    AppInstanceUserId: UserIdSchema.and(
      z.any().openapi({ description: 'The user ID of the <code>AppInstance</code>.' }),
    ),
    Name: UserNameSchema.and(z.any().openapi({ description: "The user's name." })),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: "The request's metadata. Limited to a 1KB string in UTF-8." }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token assigned to the user requesting an <code>AppInstance</code>.',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags assigned to the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AppInstanceArn', 'AppInstanceUserId', 'Name', 'ClientRequestToken'],
    title: 'CreateAppInstanceUserRequest',
  })
  .openapi('CreateAppInstanceUserRequest')

const CreateAttendeeRequestSchema = z
  .object({
    ExternalUserId: ExternalUserIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.',
        }),
    ),
    Tags: AttendeeTagListSchema.and(
      z.any().openapi({ description: 'The tag key-value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ExternalUserId'], title: 'CreateAttendeeRequest' })
  .openapi('CreateAttendeeRequest')

const CreateBotRequestSchema = z
  .object({
    DisplayName: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The bot display name.' }),
    ),
    Domain: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The domain of the Amazon Chime Enterprise account.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DisplayName'], title: 'CreateBotRequest' })
  .openapi('CreateBotRequest')

const CreateChannelBanRequestSchema = z
  .object({
    MemberArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the member being banned.' }),
    ),
  })
  .openapi({ required: ['MemberArn'], title: 'CreateChannelBanRequest' })
  .openapi('CreateChannelBanRequest')

const CreateChannelMembershipRequestSchema = z
  .object({
    MemberArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the member you want to add to the channel.' }),
    ),
    Type: ChannelMembershipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.',
        }),
    ),
  })
  .openapi({ required: ['MemberArn', 'Type'], title: 'CreateChannelMembershipRequest' })
  .openapi('CreateChannelMembershipRequest')

const CreateChannelModeratorRequestSchema = z
  .object({
    ChannelModeratorArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the moderator.' }),
    ),
  })
  .openapi({ required: ['ChannelModeratorArn'], title: 'CreateChannelModeratorRequest' })
  .openapi('CreateChannelModeratorRequest')

const CreateChannelRequestSchema = z
  .object({
    AppInstanceArn: ChimeArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel request.' }),
    ),
    Name: NonEmptyResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ),
    Mode: ChannelModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels.',
        }),
    ).exactOptional(),
    Privacy: ChannelPrivacySchema.and(
      z
        .any()
        .openapi({
          description:
            "The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the <code>AppInstance</code>.",
        }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z
        .any()
        .openapi({
          description: 'The metadata of the creation request. Limited to 1KB and UTF-8.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The client token for the request. An <code>Idempotency</code> token.',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the creation request.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AppInstanceArn', 'Name', 'ClientRequestToken'],
    title: 'CreateChannelRequest',
  })
  .openapi('CreateChannelRequest')

const CreateMediaCapturePipelineRequestSchema = z
  .object({
    SourceType: MediaPipelineSourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Source type from which the media artifacts will be captured. A Chime SDK Meeting is the only supported source.',
        }),
    ),
    SourceArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'ARN of the source from which the media artifacts are captured.' }),
    ),
    SinkType: MediaPipelineSinkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Destination type to which the media artifacts are saved. You must use an S3 bucket. ',
        }),
    ),
    SinkArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the sink type.' })),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests.',
        }),
    ).exactOptional(),
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceType', 'SourceArn', 'SinkType', 'SinkArn'],
    title: 'CreateMediaCapturePipelineRequest',
  })
  .openapi('CreateMediaCapturePipelineRequest')

const CreateMeetingDialOutRequestSchema = z
  .object({
    FromPhoneNumber: E164PhoneNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'Phone number used as the caller ID when the remote party receives a call.',
        }),
    ),
    ToPhoneNumber: E164PhoneNumberSchema.and(
      z.any().openapi({ description: 'Phone number called when inviting someone to a meeting.' }),
    ),
    JoinToken: JoinTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.',
        }),
    ),
  })
  .openapi({
    required: ['FromPhoneNumber', 'ToPhoneNumber', 'JoinToken'],
    title: 'CreateMeetingDialOutRequest',
  })
  .openapi('CreateMeetingDialOutRequest')

const MeetingTagListSchema = z.array(TagSchema).min(1).max(50).openapi('MeetingTagList')

const MeetingNotificationConfigurationSchema = z
  .object({
    SnsTopicArn: ArnSchema.and(
      z.any().openapi({ description: 'The SNS topic ARN.' }),
    ).exactOptional(),
    SqsQueueArn: ArnSchema.and(
      z.any().openapi({ description: 'The SQS queue ARN.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). ',
    required: [],
  })
  .openapi('MeetingNotificationConfiguration')

const CreateMeetingRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the client request. Use a different token for different meetings.',
        }),
    ),
    ExternalMeetingId: ExternalMeetingIdTypeSchema.and(
      z.any().openapi({ description: 'The external meeting ID.' }),
    ).exactOptional(),
    MeetingHostId: ExternalUserIdTypeSchema.and(
      z.any().openapi({ description: 'Reserved.' }),
    ).exactOptional(),
    MediaRegion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The Region in which to create the meeting. Default: <code>us-east-1</code>. </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p>',
        }),
    ).exactOptional(),
    Tags: MeetingTagListSchema.and(
      z.any().openapi({ description: 'The tag key-value pairs.' }),
    ).exactOptional(),
    NotificationsConfiguration: MeetingNotificationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for resource targets to receive notifications when meeting and attendee events occur.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClientRequestToken'], title: 'CreateMeetingRequest' })
  .openapi('CreateMeetingRequest')

const CreateMeetingWithAttendeesRequestItemListSchema = z
  .array(CreateAttendeeRequestItemSchema)
  .min(1)
  .max(10)
  .openapi('CreateMeetingWithAttendeesRequestItemList')

const CreateMeetingWithAttendeesRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the client request. Use a different token for different meetings.',
        }),
    ),
    ExternalMeetingId: ExternalMeetingIdTypeSchema.and(
      z.any().openapi({ description: 'The external meeting ID.' }),
    ).exactOptional(),
    MeetingHostId: ExternalUserIdTypeSchema.and(
      z.any().openapi({ description: 'Reserved.' }),
    ).exactOptional(),
    MediaRegion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The Region in which to create the meeting. Default: <code>us-east-1</code> . </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p>',
        }),
    ).exactOptional(),
    Tags: MeetingTagListSchema.and(
      z.any().openapi({ description: 'The tag key-value pairs.' }),
    ).exactOptional(),
    NotificationsConfiguration: MeetingNotificationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (us-east-1).',
        }),
    ).exactOptional(),
    Attendees: CreateMeetingWithAttendeesRequestItemListSchema.and(
      z.any().openapi({ description: 'The request containing the attendees to create.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClientRequestToken'], title: 'CreateMeetingWithAttendeesRequest' })
  .openapi('CreateMeetingWithAttendeesRequest')

const CreatePhoneNumberOrderRequestSchema = z
  .object({
    ProductType: PhoneNumberProductTypeSchema.and(
      z.any().openapi({ description: 'The phone number product type.' }),
    ),
    E164PhoneNumbers: E164PhoneNumberListSchema.and(
      z.any().openapi({ description: 'List of phone numbers, in E.164 format.' }),
    ),
  })
  .openapi({
    required: ['ProductType', 'E164PhoneNumbers'],
    title: 'CreatePhoneNumberOrderRequest',
  })
  .openapi('CreatePhoneNumberOrderRequest')

const ParticipantPhoneNumberListSchema = z
  .array(E164PhoneNumberSchema)
  .length(2)
  .openapi('ParticipantPhoneNumberList')

const ProxySessionNameStringSchema = z
  .string()
  .regex(/^$|^[a-zA-Z0-9 ]{0,30}$/)
  .openapi('ProxySessionNameString')

const CreateProxySessionRequestSchema = z
  .object({
    ParticipantPhoneNumbers: ParticipantPhoneNumberListSchema.and(
      z.any().openapi({ description: 'The participant phone numbers.' }),
    ),
    Name: ProxySessionNameStringSchema.and(
      z.any().openapi({ description: 'The name of the proxy session.' }),
    ).exactOptional(),
    ExpiryMinutes: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'The number of minutes allowed for the proxy session.' }),
    ).exactOptional(),
    Capabilities: CapabilityListSchema.and(
      z.any().openapi({ description: 'The proxy session capabilities.' }),
    ),
    NumberSelectionBehavior: NumberSelectionBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.',
        }),
    ).exactOptional(),
    GeoMatchLevel: GeoMatchLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preference for matching the country or area code of the proxy phone number with that of the first participant.',
        }),
    ).exactOptional(),
    GeoMatchParams: GeoMatchParamsSchema.and(
      z.any().openapi({ description: 'The country and area code for the proxy phone number.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ParticipantPhoneNumbers', 'Capabilities'],
    title: 'CreateProxySessionRequest',
  })
  .openapi('CreateProxySessionRequest')

const CreateRoomMembershipRequestSchema = z
  .object({
    MemberId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The Amazon Chime member ID (user ID or bot ID).' }),
    ),
    Role: RoomMembershipRoleSchema.and(
      z.any().openapi({ description: 'The role of the member.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['MemberId'], title: 'CreateRoomMembershipRequest' })
  .openapi('CreateRoomMembershipRequest')

const CreateRoomRequestSchema = z
  .object({
    Name: SensitiveStringSchema.and(z.any().openapi({ description: 'The room name.' })),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z.any().openapi({ description: 'The idempotency token for the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateRoomRequest' })
  .openapi('CreateRoomRequest')

const SipHeadersMapSchema = z
  .record(z.string(), SensitiveStringSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('SipHeadersMap')

const CreateSipMediaApplicationCallRequestSchema = z
  .object({
    FromPhoneNumber: E164PhoneNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.',
        }),
    ),
    ToPhoneNumber: E164PhoneNumberSchema.and(
      z.any().openapi({ description: 'The phone number that the service should call.' }),
    ),
    SipHeaders: SipHeadersMapSchema.and(
      z.any().openapi({ description: 'The SIP headers added to an outbound call leg.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FromPhoneNumber', 'ToPhoneNumber'],
    title: 'CreateSipMediaApplicationCallRequest',
  })
  .openapi('CreateSipMediaApplicationCallRequest')

const CreateSipMediaApplicationRequestSchema = z
  .object({
    AwsRegion: StringSchema.and(
      z.any().openapi({ description: 'The AWS Region assigned to the SIP media application.' }),
    ),
    Name: SipMediaApplicationNameSchema.and(
      z.any().openapi({ description: 'The SIP media application name.' }),
    ),
    Endpoints: SipMediaApplicationEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.',
        }),
    ),
  })
  .openapi({
    required: ['AwsRegion', 'Name', 'Endpoints'],
    title: 'CreateSipMediaApplicationRequest',
  })
  .openapi('CreateSipMediaApplicationRequest')

const CreateSipRuleRequestSchema = z
  .object({
    Name: SipRuleNameSchema.and(z.any().openapi({ description: 'The name of the SIP rule.' })),
    TriggerType: SipRuleTriggerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.',
        }),
    ),
    TriggerValue: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the <code>ToPhoneNumber</code> value.',
        }),
    ),
    Disabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables a rule. You must disable rules before you can delete them.',
        }),
    ).exactOptional(),
    TargetApplications: SipRuleTargetApplicationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'TriggerType', 'TriggerValue', 'TargetApplications'],
    title: 'CreateSipRuleRequest',
  })
  .openapi('CreateSipRuleRequest')

const CreateUserRequestSchema = z
  .object({
    Username: StringSchema.and(z.any().openapi({ description: 'The user name.' })).exactOptional(),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: "The user's email address." }),
    ).exactOptional(),
    UserType: UserTypeSchema.and(
      z.any().openapi({ description: 'The user type.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateUserRequest', required: [] })
  .openapi('CreateUserRequest')

const CreateVoiceConnectorGroupRequestSchema = z
  .object({
    Name: VoiceConnectorGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Chime Voice Connector group.' }),
    ),
    VoiceConnectorItems: VoiceConnectorItemListSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Chime Voice Connectors to route inbound calls to.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateVoiceConnectorGroupRequest' })
  .openapi('CreateVoiceConnectorGroupRequest')

const CreateVoiceConnectorRequestSchema = z
  .object({
    Name: VoiceConnectorNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Chime Voice Connector.' }),
    ),
    AwsRegion: VoiceConnectorAwsRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code> . ',
        }),
    ).exactOptional(),
    RequireEncryption: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When enabled, requires encryption for the Amazon Chime Voice Connector.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'RequireEncryption'], title: 'CreateVoiceConnectorRequest' })
  .openapi('CreateVoiceConnectorRequest')

const CredentialListSchema = z.array(CredentialSchema).openapi('CredentialList')

const DeleteAccountRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAccountRequest' })
  .openapi('DeleteAccountRequest')

const DeleteAppInstanceAdminRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAppInstanceAdminRequest' })
  .openapi('DeleteAppInstanceAdminRequest')

const DeleteAppInstanceRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAppInstanceRequest' })
  .openapi('DeleteAppInstanceRequest')

const DeleteAppInstanceStreamingConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAppInstanceStreamingConfigurationsRequest' })
  .openapi('DeleteAppInstanceStreamingConfigurationsRequest')

const DeleteAppInstanceUserRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAppInstanceUserRequest' })
  .openapi('DeleteAppInstanceUserRequest')

const DeleteAttendeeRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAttendeeRequest' })
  .openapi('DeleteAttendeeRequest')

const DeleteChannelBanRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelBanRequest' })
  .openapi('DeleteChannelBanRequest')

const DeleteChannelMembershipRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelMembershipRequest' })
  .openapi('DeleteChannelMembershipRequest')

const DeleteChannelMessageRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelMessageRequest' })
  .openapi('DeleteChannelMessageRequest')

const DeleteChannelModeratorRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelModeratorRequest' })
  .openapi('DeleteChannelModeratorRequest')

const DeleteChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelRequest' })
  .openapi('DeleteChannelRequest')

const DeleteEventsConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEventsConfigurationRequest' })
  .openapi('DeleteEventsConfigurationRequest')

const DeleteMediaCapturePipelineRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteMediaCapturePipelineRequest' })
  .openapi('DeleteMediaCapturePipelineRequest')

const DeleteMeetingRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteMeetingRequest' })
  .openapi('DeleteMeetingRequest')

const DeletePhoneNumberRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePhoneNumberRequest' })
  .openapi('DeletePhoneNumberRequest')

const DeleteProxySessionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteProxySessionRequest' })
  .openapi('DeleteProxySessionRequest')

const DeleteRoomMembershipRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRoomMembershipRequest' })
  .openapi('DeleteRoomMembershipRequest')

const DeleteRoomRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRoomRequest' })
  .openapi('DeleteRoomRequest')

const DeleteSipMediaApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSipMediaApplicationRequest' })
  .openapi('DeleteSipMediaApplicationRequest')

const DeleteSipRuleRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSipRuleRequest' })
  .openapi('DeleteSipRuleRequest')

const DeleteVoiceConnectorEmergencyCallingConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceConnectorEmergencyCallingConfigurationRequest' })
  .openapi('DeleteVoiceConnectorEmergencyCallingConfigurationRequest')

const DeleteVoiceConnectorGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceConnectorGroupRequest' })
  .openapi('DeleteVoiceConnectorGroupRequest')

const DeleteVoiceConnectorOriginationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceConnectorOriginationRequest' })
  .openapi('DeleteVoiceConnectorOriginationRequest')

const DeleteVoiceConnectorProxyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceConnectorProxyRequest' })
  .openapi('DeleteVoiceConnectorProxyRequest')

const DeleteVoiceConnectorRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceConnectorRequest' })
  .openapi('DeleteVoiceConnectorRequest')

const DeleteVoiceConnectorStreamingConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceConnectorStreamingConfigurationRequest' })
  .openapi('DeleteVoiceConnectorStreamingConfigurationRequest')

const DeleteVoiceConnectorTerminationCredentialsRequestSchema = z
  .object({
    Usernames: SensitiveStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.',
        }),
    ),
  })
  .openapi({ required: ['Usernames'], title: 'DeleteVoiceConnectorTerminationCredentialsRequest' })
  .openapi('DeleteVoiceConnectorTerminationCredentialsRequest')

const DeleteVoiceConnectorTerminationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVoiceConnectorTerminationRequest' })
  .openapi('DeleteVoiceConnectorTerminationRequest')

const DescribeAppInstanceAdminRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAppInstanceAdminRequest' })
  .openapi('DescribeAppInstanceAdminRequest')

const DescribeAppInstanceRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAppInstanceRequest' })
  .openapi('DescribeAppInstanceRequest')

const DescribeAppInstanceUserRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAppInstanceUserRequest' })
  .openapi('DescribeAppInstanceUserRequest')

const DescribeChannelBanRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelBanRequest' })
  .openapi('DescribeChannelBanRequest')

const DescribeChannelMembershipForAppInstanceUserRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelMembershipForAppInstanceUserRequest' })
  .openapi('DescribeChannelMembershipForAppInstanceUserRequest')

const DescribeChannelMembershipRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelMembershipRequest' })
  .openapi('DescribeChannelMembershipRequest')

const DescribeChannelModeratedByAppInstanceUserRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelModeratedByAppInstanceUserRequest' })
  .openapi('DescribeChannelModeratedByAppInstanceUserRequest')

const DescribeChannelModeratorRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelModeratorRequest' })
  .openapi('DescribeChannelModeratorRequest')

const DescribeChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelRequest' })
  .openapi('DescribeChannelRequest')

const DisassociatePhoneNumberFromUserRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociatePhoneNumberFromUserRequest' })
  .openapi('DisassociatePhoneNumberFromUserRequest')

const DisassociatePhoneNumbersFromVoiceConnectorGroupRequestSchema = z
  .object({
    E164PhoneNumbers: E164PhoneNumberListSchema.and(
      z.any().openapi({ description: 'List of phone numbers, in E.164 format.' }),
    ),
  })
  .openapi({
    required: ['E164PhoneNumbers'],
    title: 'DisassociatePhoneNumbersFromVoiceConnectorGroupRequest',
  })
  .openapi('DisassociatePhoneNumbersFromVoiceConnectorGroupRequest')

const DisassociatePhoneNumbersFromVoiceConnectorRequestSchema = z
  .object({
    E164PhoneNumbers: E164PhoneNumberListSchema.and(
      z.any().openapi({ description: 'List of phone numbers, in E.164 format.' }),
    ),
  })
  .openapi({
    required: ['E164PhoneNumbers'],
    title: 'DisassociatePhoneNumbersFromVoiceConnectorRequest',
  })
  .openapi('DisassociatePhoneNumbersFromVoiceConnectorRequest')

const DisassociateSigninDelegateGroupsFromAccountRequestSchema = z
  .object({
    GroupNames: NonEmptyStringListSchema.and(
      z.any().openapi({ description: 'The sign-in delegate group names.' }),
    ),
  })
  .openapi({
    required: ['GroupNames'],
    title: 'DisassociateSigninDelegateGroupsFromAccountRequest',
  })
  .openapi('DisassociateSigninDelegateGroupsFromAccountRequest')

const GetAccountRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccountRequest' })
  .openapi('GetAccountRequest')

const GetAccountSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccountSettingsRequest' })
  .openapi('GetAccountSettingsRequest')

const GetAppInstanceRetentionSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'GetAppInstanceRetentionSettingsRequest' })
  .openapi('GetAppInstanceRetentionSettingsRequest')

const GetAppInstanceStreamingConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'GetAppInstanceStreamingConfigurationsRequest' })
  .openapi('GetAppInstanceStreamingConfigurationsRequest')

const GetAttendeeRequestSchema = z
  .object({})
  .openapi({ title: 'GetAttendeeRequest' })
  .openapi('GetAttendeeRequest')

const GetBotRequestSchema = z
  .object({})
  .openapi({ title: 'GetBotRequest' })
  .openapi('GetBotRequest')

const GetChannelMessageRequestSchema = z
  .object({})
  .openapi({ title: 'GetChannelMessageRequest' })
  .openapi('GetChannelMessageRequest')

const GetEventsConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetEventsConfigurationRequest' })
  .openapi('GetEventsConfigurationRequest')

const GetMediaCapturePipelineRequestSchema = z
  .object({})
  .openapi({ title: 'GetMediaCapturePipelineRequest' })
  .openapi('GetMediaCapturePipelineRequest')

const GetMeetingRequestSchema = z
  .object({})
  .openapi({ title: 'GetMeetingRequest' })
  .openapi('GetMeetingRequest')

const GetMessagingSessionEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'GetMessagingSessionEndpointRequest' })
  .openapi('GetMessagingSessionEndpointRequest')

const GetPhoneNumberOrderRequestSchema = z
  .object({})
  .openapi({ title: 'GetPhoneNumberOrderRequest' })
  .openapi('GetPhoneNumberOrderRequest')

const GetPhoneNumberRequestSchema = z
  .object({})
  .openapi({ title: 'GetPhoneNumberRequest' })
  .openapi('GetPhoneNumberRequest')

const GetProxySessionRequestSchema = z
  .object({})
  .openapi({ title: 'GetProxySessionRequest' })
  .openapi('GetProxySessionRequest')

const GetRetentionSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'GetRetentionSettingsRequest' })
  .openapi('GetRetentionSettingsRequest')

const GetRoomRequestSchema = z
  .object({})
  .openapi({ title: 'GetRoomRequest' })
  .openapi('GetRoomRequest')

const GetSipMediaApplicationLoggingConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetSipMediaApplicationLoggingConfigurationRequest' })
  .openapi('GetSipMediaApplicationLoggingConfigurationRequest')

const GetSipMediaApplicationRequestSchema = z
  .object({})
  .openapi({ title: 'GetSipMediaApplicationRequest' })
  .openapi('GetSipMediaApplicationRequest')

const GetSipRuleRequestSchema = z
  .object({})
  .openapi({ title: 'GetSipRuleRequest' })
  .openapi('GetSipRuleRequest')

const GetUserRequestSchema = z
  .object({})
  .openapi({ title: 'GetUserRequest' })
  .openapi('GetUserRequest')

const GetUserSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'GetUserSettingsRequest' })
  .openapi('GetUserSettingsRequest')

const GetVoiceConnectorEmergencyCallingConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorEmergencyCallingConfigurationRequest' })
  .openapi('GetVoiceConnectorEmergencyCallingConfigurationRequest')

const GetVoiceConnectorGroupRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorGroupRequest' })
  .openapi('GetVoiceConnectorGroupRequest')

const GetVoiceConnectorLoggingConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorLoggingConfigurationRequest' })
  .openapi('GetVoiceConnectorLoggingConfigurationRequest')

const GetVoiceConnectorOriginationRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorOriginationRequest' })
  .openapi('GetVoiceConnectorOriginationRequest')

const GetVoiceConnectorProxyRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorProxyRequest' })
  .openapi('GetVoiceConnectorProxyRequest')

const GetVoiceConnectorRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorRequest' })
  .openapi('GetVoiceConnectorRequest')

const GetVoiceConnectorStreamingConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorStreamingConfigurationRequest' })
  .openapi('GetVoiceConnectorStreamingConfigurationRequest')

const GetVoiceConnectorTerminationHealthRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorTerminationHealthRequest' })
  .openapi('GetVoiceConnectorTerminationHealthRequest')

const GetVoiceConnectorTerminationRequestSchema = z
  .object({})
  .openapi({ title: 'GetVoiceConnectorTerminationRequest' })
  .openapi('GetVoiceConnectorTerminationRequest')

const UserEmailListSchema = z.array(EmailAddressSchema).max(50).openapi('UserEmailList')

const InviteUsersRequestSchema = z
  .object({
    UserEmailList: UserEmailListSchema.and(
      z
        .any()
        .openapi({
          description: 'The user email addresses to which to send the email invitation.',
        }),
    ),
    UserType: UserTypeSchema.and(
      z.any().openapi({ description: 'The user type.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserEmailList'], title: 'InviteUsersRequest' })
  .openapi('InviteUsersRequest')

const ProfileServiceMaxResultsSchema = z.int().min(1).max(200).openapi('ProfileServiceMaxResults')

const ListAccountsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAccountsRequest' })
  .openapi('ListAccountsRequest')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const ListAppInstanceAdminsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAppInstanceAdminsRequest' })
  .openapi('ListAppInstanceAdminsRequest')

const ListAppInstanceUsersRequestSchema = z
  .object({})
  .openapi({ title: 'ListAppInstanceUsersRequest' })
  .openapi('ListAppInstanceUsersRequest')

const ListAppInstancesRequestSchema = z
  .object({})
  .openapi({ title: 'ListAppInstancesRequest' })
  .openapi('ListAppInstancesRequest')

const ListAttendeeTagsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAttendeeTagsRequest' })
  .openapi('ListAttendeeTagsRequest')

const ResultMaxSchema = z.int().min(1).max(99).openapi('ResultMax')

const ListAttendeesRequestSchema = z
  .object({})
  .openapi({ title: 'ListAttendeesRequest' })
  .openapi('ListAttendeesRequest')

const ListBotsRequestSchema = z
  .object({})
  .openapi({ title: 'ListBotsRequest' })
  .openapi('ListBotsRequest')

const ListChannelBansRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelBansRequest' })
  .openapi('ListChannelBansRequest')

const ListChannelMembershipsForAppInstanceUserRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelMembershipsForAppInstanceUserRequest' })
  .openapi('ListChannelMembershipsForAppInstanceUserRequest')

const ListChannelMembershipsRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelMembershipsRequest' })
  .openapi('ListChannelMembershipsRequest')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const ListChannelMessagesRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelMessagesRequest' })
  .openapi('ListChannelMessagesRequest')

const ListChannelModeratorsRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelModeratorsRequest' })
  .openapi('ListChannelModeratorsRequest')

const ListChannelsModeratedByAppInstanceUserRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelsModeratedByAppInstanceUserRequest' })
  .openapi('ListChannelsModeratedByAppInstanceUserRequest')

const ListChannelsRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelsRequest' })
  .openapi('ListChannelsRequest')

const ListMediaCapturePipelinesRequestSchema = z
  .object({})
  .openapi({ title: 'ListMediaCapturePipelinesRequest' })
  .openapi('ListMediaCapturePipelinesRequest')

const ListMeetingTagsRequestSchema = z
  .object({})
  .openapi({ title: 'ListMeetingTagsRequest' })
  .openapi('ListMeetingTagsRequest')

const ListMeetingsRequestSchema = z
  .object({})
  .openapi({ title: 'ListMeetingsRequest' })
  .openapi('ListMeetingsRequest')

const ListPhoneNumberOrdersRequestSchema = z
  .object({})
  .openapi({ title: 'ListPhoneNumberOrdersRequest' })
  .openapi('ListPhoneNumberOrdersRequest')

const ListPhoneNumbersRequestSchema = z
  .object({})
  .openapi({ title: 'ListPhoneNumbersRequest' })
  .openapi('ListPhoneNumbersRequest')

const ListProxySessionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListProxySessionsRequest' })
  .openapi('ListProxySessionsRequest')

const ListRoomMembershipsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRoomMembershipsRequest' })
  .openapi('ListRoomMembershipsRequest')

const ListRoomsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRoomsRequest' })
  .openapi('ListRoomsRequest')

const ListSipMediaApplicationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListSipMediaApplicationsRequest' })
  .openapi('ListSipMediaApplicationsRequest')

const ListSipRulesRequestSchema = z
  .object({})
  .openapi({ title: 'ListSipRulesRequest' })
  .openapi('ListSipRulesRequest')

const ListSupportedPhoneNumberCountriesRequestSchema = z
  .object({})
  .openapi({ title: 'ListSupportedPhoneNumberCountriesRequest' })
  .openapi('ListSupportedPhoneNumberCountriesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListUsersRequestSchema = z
  .object({})
  .openapi({ title: 'ListUsersRequest' })
  .openapi('ListUsersRequest')

const ListVoiceConnectorGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListVoiceConnectorGroupsRequest' })
  .openapi('ListVoiceConnectorGroupsRequest')

const ListVoiceConnectorTerminationCredentialsRequestSchema = z
  .object({})
  .openapi({ title: 'ListVoiceConnectorTerminationCredentialsRequest' })
  .openapi('ListVoiceConnectorTerminationCredentialsRequest')

const ListVoiceConnectorsRequestSchema = z
  .object({})
  .openapi({ title: 'ListVoiceConnectorsRequest' })
  .openapi('ListVoiceConnectorsRequest')

const LogoutUserRequestSchema = z
  .object({})
  .openapi({ title: 'LogoutUserRequest' })
  .openapi('LogoutUserRequest')

const MeetingTagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('MeetingTagKeyList')

const NonEmptyContentSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .openapi('NonEmptyContent')

const PhoneNumberMaxResultsSchema = z.int().min(1).max(500).openapi('PhoneNumberMaxResults')

const PutAppInstanceRetentionSettingsRequestSchema = z
  .object({
    AppInstanceRetentionSettings: AppInstanceRetentionSettingsSchema.and(
      z.any().openapi({ description: 'The time in days to retain data. Data type: number.' }),
    ),
  })
  .openapi({
    required: ['AppInstanceRetentionSettings'],
    title: 'PutAppInstanceRetentionSettingsRequest',
  })
  .openapi('PutAppInstanceRetentionSettingsRequest')

const PutAppInstanceStreamingConfigurationsRequestSchema = z
  .object({
    AppInstanceStreamingConfigurations: AppInstanceStreamingConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'The streaming configurations set for an <code>AppInstance</code>.',
        }),
    ),
  })
  .openapi({
    required: ['AppInstanceStreamingConfigurations'],
    title: 'PutAppInstanceStreamingConfigurationsRequest',
  })
  .openapi('PutAppInstanceStreamingConfigurationsRequest')

const PutEventsConfigurationRequestSchema = z
  .object({
    OutboundEventsHTTPSEndpoint: SensitiveStringSchema.and(
      z
        .any()
        .openapi({ description: 'HTTPS endpoint that allows the bot to receive outgoing events.' }),
    ).exactOptional(),
    LambdaFunctionArn: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Lambda function ARN that allows the bot to receive outgoing events.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutEventsConfigurationRequest', required: [] })
  .openapi('PutEventsConfigurationRequest')

const PutRetentionSettingsRequestSchema = z
  .object({
    RetentionSettings: RetentionSettingsSchema.and(
      z.any().openapi({ description: 'The retention settings.' }),
    ),
  })
  .openapi({ required: ['RetentionSettings'], title: 'PutRetentionSettingsRequest' })
  .openapi('PutRetentionSettingsRequest')

const PutSipMediaApplicationLoggingConfigurationRequestSchema = z
  .object({
    SipMediaApplicationLoggingConfiguration: SipMediaApplicationLoggingConfigurationSchema.and(
      z.any().openapi({ description: 'The actual logging configuration.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutSipMediaApplicationLoggingConfigurationRequest', required: [] })
  .openapi('PutSipMediaApplicationLoggingConfigurationRequest')

const PutVoiceConnectorEmergencyCallingConfigurationRequestSchema = z
  .object({
    EmergencyCallingConfiguration: EmergencyCallingConfigurationSchema.and(
      z.any().openapi({ description: 'The emergency calling configuration details.' }),
    ),
  })
  .openapi({
    required: ['EmergencyCallingConfiguration'],
    title: 'PutVoiceConnectorEmergencyCallingConfigurationRequest',
  })
  .openapi('PutVoiceConnectorEmergencyCallingConfigurationRequest')

const PutVoiceConnectorLoggingConfigurationRequestSchema = z
  .object({
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z.any().openapi({ description: 'The logging configuration details to add.' }),
    ),
  })
  .openapi({
    required: ['LoggingConfiguration'],
    title: 'PutVoiceConnectorLoggingConfigurationRequest',
  })
  .openapi('PutVoiceConnectorLoggingConfigurationRequest')

const PutVoiceConnectorOriginationRequestSchema = z
  .object({
    Origination: OriginationSchema.and(
      z.any().openapi({ description: 'The origination setting details to add.' }),
    ),
  })
  .openapi({ required: ['Origination'], title: 'PutVoiceConnectorOriginationRequest' })
  .openapi('PutVoiceConnectorOriginationRequest')

const PutVoiceConnectorProxyRequestSchema = z
  .object({
    DefaultSessionExpiryMinutes: IntegerSchema.and(
      z.any().openapi({ description: 'The default number of minutes allowed for proxy sessions.' }),
    ),
    PhoneNumberPoolCountries: CountryListSchema.and(
      z
        .any()
        .openapi({ description: 'The countries for proxy phone numbers to be selected from.' }),
    ),
    FallBackPhoneNumber: E164PhoneNumberSchema.and(
      z
        .any()
        .openapi({
          description: 'The phone number to route calls to after a proxy session expires.',
        }),
    ).exactOptional(),
    Disabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DefaultSessionExpiryMinutes', 'PhoneNumberPoolCountries'],
    title: 'PutVoiceConnectorProxyRequest',
  })
  .openapi('PutVoiceConnectorProxyRequest')

const PutVoiceConnectorStreamingConfigurationRequestSchema = z
  .object({
    StreamingConfiguration: StreamingConfigurationSchema.and(
      z.any().openapi({ description: 'The streaming configuration details to add.' }),
    ),
  })
  .openapi({
    required: ['StreamingConfiguration'],
    title: 'PutVoiceConnectorStreamingConfigurationRequest',
  })
  .openapi('PutVoiceConnectorStreamingConfigurationRequest')

const PutVoiceConnectorTerminationCredentialsRequestSchema = z
  .object({
    Credentials: CredentialListSchema.and(
      z.any().openapi({ description: 'The termination SIP credentials.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutVoiceConnectorTerminationCredentialsRequest', required: [] })
  .openapi('PutVoiceConnectorTerminationCredentialsRequest')

const PutVoiceConnectorTerminationRequestSchema = z
  .object({
    Termination: TerminationSchema.and(
      z.any().openapi({ description: 'The termination setting details to add.' }),
    ),
  })
  .openapi({ required: ['Termination'], title: 'PutVoiceConnectorTerminationRequest' })
  .openapi('PutVoiceConnectorTerminationRequest')

const RedactChannelMessageRequestSchema = z
  .object({})
  .openapi({ title: 'RedactChannelMessageRequest' })
  .openapi('RedactChannelMessageRequest')

const RedactConversationMessageRequestSchema = z
  .object({})
  .openapi({ title: 'RedactConversationMessageRequest' })
  .openapi('RedactConversationMessageRequest')

const RedactRoomMessageRequestSchema = z
  .object({})
  .openapi({ title: 'RedactRoomMessageRequest' })
  .openapi('RedactRoomMessageRequest')

const RegenerateSecurityTokenRequestSchema = z
  .object({})
  .openapi({ title: 'RegenerateSecurityTokenRequest' })
  .openapi('RegenerateSecurityTokenRequest')

const ResetPersonalPINRequestSchema = z
  .object({})
  .openapi({ title: 'ResetPersonalPINRequest' })
  .openapi('ResetPersonalPINRequest')

const RestorePhoneNumberRequestSchema = z
  .object({})
  .openapi({ title: 'RestorePhoneNumberRequest' })
  .openapi('RestorePhoneNumberRequest')

const SMAUpdateCallArgumentsMapSchema = z
  .record(z.string(), SensitiveStringSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('SMAUpdateCallArgumentsMap')

const TollFreePrefixSchema = z
  .string()
  .regex(/^8(00|33|44|55|66|77|88)$/)
  .length(3)
  .openapi('TollFreePrefix')

const SearchAvailablePhoneNumbersRequestSchema = z
  .object({})
  .openapi({ title: 'SearchAvailablePhoneNumbersRequest' })
  .openapi('SearchAvailablePhoneNumbersRequest')

const SendChannelMessageRequestSchema = z
  .object({
    Content: NonEmptyContentSchema.and(
      z.any().openapi({ description: 'The content of the message.' }),
    ),
    Type: ChannelMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of message, <code>STANDARD</code> or <code>CONTROL</code>.',
        }),
    ),
    Persistence: ChannelMessagePersistenceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean that controls whether the message is persisted on the back end. Required.',
        }),
    ),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The optional metadata for each message.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The <code>Idempotency</code> token for each client request.' }),
    ),
  })
  .openapi({
    required: ['Content', 'Type', 'Persistence', 'ClientRequestToken'],
    title: 'SendChannelMessageRequest',
  })
  .openapi('SendChannelMessageRequest')

const TranscriptionConfigurationSchema = z
  .object({
    EngineTranscribeSettings: EngineTranscribeSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'The transcription configuration settings passed to Amazon Transcribe.',
        }),
    ).exactOptional(),
    EngineTranscribeMedicalSettings: EngineTranscribeMedicalSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The transcription configuration settings passed to Amazon Transcribe Medical.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.',
    required: [],
  })
  .openapi('TranscriptionConfiguration')

const StartMeetingTranscriptionRequestSchema = z
  .object({
    TranscriptionConfiguration: TranscriptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.',
        }),
    ),
  })
  .openapi({ required: ['TranscriptionConfiguration'], title: 'StartMeetingTranscriptionRequest' })
  .openapi('StartMeetingTranscriptionRequest')

const StopMeetingTranscriptionRequestSchema = z
  .object({})
  .openapi({ title: 'StopMeetingTranscriptionRequest' })
  .openapi('StopMeetingTranscriptionRequest')

const TagAttendeeRequestSchema = z
  .object({
    Tags: AttendeeTagListSchema.and(z.any().openapi({ description: 'The tag key-value pairs.' })),
  })
  .openapi({ required: ['Tags'], title: 'TagAttendeeRequest' })
  .openapi('TagAttendeeRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagMeetingRequestSchema = z
  .object({
    Tags: MeetingTagListSchema.and(z.any().openapi({ description: 'The tag key-value pairs.' })),
  })
  .openapi({ required: ['Tags'], title: 'TagMeetingRequest' })
  .openapi('TagMeetingRequest')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: ArnSchema.and(z.any().openapi({ description: 'The resource ARN.' })),
    Tags: TagListSchema.and(z.any().openapi({ description: 'The tag key-value pairs.' })),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagAttendeeRequestSchema = z
  .object({
    TagKeys: AttendeeTagKeyListSchema.and(z.any().openapi({ description: 'The tag keys.' })),
  })
  .openapi({ required: ['TagKeys'], title: 'UntagAttendeeRequest' })
  .openapi('UntagAttendeeRequest')

const UntagMeetingRequestSchema = z
  .object({
    TagKeys: MeetingTagKeyListSchema.and(z.any().openapi({ description: 'The tag keys.' })),
  })
  .openapi({ required: ['TagKeys'], title: 'UntagMeetingRequest' })
  .openapi('UntagMeetingRequest')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: ArnSchema.and(z.any().openapi({ description: 'The resource ARN.' })),
    TagKeys: TagKeyListSchema.and(z.any().openapi({ description: 'The tag keys.' })),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAccountRequestSchema = z
  .object({
    Name: AccountNameSchema.and(
      z.any().openapi({ description: 'The new name for the specified Amazon Chime account.' }),
    ).exactOptional(),
    DefaultLicense: LicenseSchema.and(
      z
        .any()
        .openapi({
          description: 'The default license applied when you add users to an Amazon Chime account.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateAccountRequest', required: [] })
  .openapi('UpdateAccountRequest')

const UpdateAccountSettingsRequestSchema = z
  .object({
    AccountSettings: AccountSettingsSchema.and(
      z.any().openapi({ description: 'The Amazon Chime account settings to update.' }),
    ),
  })
  .openapi({ required: ['AccountSettings'], title: 'UpdateAccountSettingsRequest' })
  .openapi('UpdateAccountSettingsRequest')

const UpdateAppInstanceRequestSchema = z
  .object({
    Name: NonEmptyResourceNameSchema.and(
      z.any().openapi({ description: 'The name that you want to change.' }),
    ),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata that you want to change.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateAppInstanceRequest' })
  .openapi('UpdateAppInstanceRequest')

const UpdateAppInstanceUserRequestSchema = z
  .object({
    Name: UserNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>AppInstanceUser</code>.' }),
    ),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the <code>AppInstanceUser</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateAppInstanceUserRequest' })
  .openapi('UpdateAppInstanceUserRequest')

const UpdateBotRequestSchema = z
  .object({
    Disabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When true, stops the specified bot from running in your account.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateBotRequest', required: [] })
  .openapi('UpdateBotRequest')

const UpdateChannelMessageRequestSchema = z
  .object({
    Content: ContentSchema.and(
      z.any().openapi({ description: 'The content of the message being updated.' }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the message being updated.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateChannelMessageRequest', required: [] })
  .openapi('UpdateChannelMessageRequest')

const UpdateChannelReadMarkerRequestSchema = z
  .object({})
  .openapi({ title: 'UpdateChannelReadMarkerRequest' })
  .openapi('UpdateChannelReadMarkerRequest')

const UpdateChannelRequestSchema = z
  .object({
    Name: NonEmptyResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ),
    Mode: ChannelModeSchema.and(
      z.any().openapi({ description: 'The mode of the update request.' }),
    ),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'The metadata for the update request.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'Mode'], title: 'UpdateChannelRequest' })
  .openapi('UpdateChannelRequest')

const UpdateGlobalSettingsRequestSchema = z
  .object({
    BusinessCalling: BusinessCallingSettingsSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Business Calling settings.' }),
    ).exactOptional(),
    VoiceConnector: VoiceConnectorSettingsSchema.and(
      z.any().openapi({ description: 'The Amazon Chime Voice Connector settings.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateGlobalSettingsRequest', required: [] })
  .openapi('UpdateGlobalSettingsRequest')

const UpdatePhoneNumberRequestSchema = z
  .object({
    ProductType: PhoneNumberProductTypeSchema.and(
      z.any().openapi({ description: 'The product type.' }),
    ).exactOptional(),
    CallingName: CallingNameSchema.and(
      z
        .any()
        .openapi({ description: 'The outbound calling name associated with the phone number.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdatePhoneNumberRequest', required: [] })
  .openapi('UpdatePhoneNumberRequest')

const UpdatePhoneNumberSettingsRequestSchema = z
  .object({
    CallingName: CallingNameSchema.and(
      z.any().openapi({ description: 'The default outbound calling name for the account.' }),
    ),
  })
  .openapi({ required: ['CallingName'], title: 'UpdatePhoneNumberSettingsRequest' })
  .openapi('UpdatePhoneNumberSettingsRequest')

const UpdateProxySessionRequestSchema = z
  .object({
    Capabilities: CapabilityListSchema.and(
      z.any().openapi({ description: 'The proxy session capabilities.' }),
    ),
    ExpiryMinutes: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'The number of minutes allowed for the proxy session.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Capabilities'], title: 'UpdateProxySessionRequest' })
  .openapi('UpdateProxySessionRequest')

const UpdateRoomMembershipRequestSchema = z
  .object({
    Role: RoomMembershipRoleSchema.and(
      z.any().openapi({ description: 'The role of the member.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRoomMembershipRequest', required: [] })
  .openapi('UpdateRoomMembershipRequest')

const UpdateRoomRequestSchema = z
  .object({
    Name: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The room name.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRoomRequest', required: [] })
  .openapi('UpdateRoomRequest')

const UpdateSipMediaApplicationCallRequestSchema = z
  .object({
    Arguments: SMAUpdateCallArgumentsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.',
        }),
    ),
  })
  .openapi({ required: ['Arguments'], title: 'UpdateSipMediaApplicationCallRequest' })
  .openapi('UpdateSipMediaApplicationCallRequest')

const UpdateSipMediaApplicationRequestSchema = z
  .object({
    Name: SipMediaApplicationNameSchema.and(
      z.any().openapi({ description: 'The new name for the specified SIP media application.' }),
    ).exactOptional(),
    Endpoints: SipMediaApplicationEndpointListSchema.and(
      z
        .any()
        .openapi({
          description: 'The new set of endpoints for the specified SIP media application.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateSipMediaApplicationRequest', required: [] })
  .openapi('UpdateSipMediaApplicationRequest')

const UpdateSipRuleRequestSchema = z
  .object({
    Name: SipRuleNameSchema.and(
      z.any().openapi({ description: 'The new name for the specified SIP rule.' }),
    ),
    Disabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'The new value specified to indicate whether the rule is disabled.',
        }),
    ).exactOptional(),
    TargetApplications: SipRuleTargetApplicationListSchema.and(
      z.any().openapi({ description: 'The new value of the list of target applications.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateSipRuleRequest' })
  .openapi('UpdateSipRuleRequest')

const UpdateUserRequestSchema = z
  .object({
    LicenseType: LicenseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to.',
        }),
    ).exactOptional(),
    UserType: UserTypeSchema.and(
      z.any().openapi({ description: 'The user type.' }),
    ).exactOptional(),
    AlexaForBusinessMetadata: AlexaForBusinessMetadataSchema.and(
      z.any().openapi({ description: 'The Alexa for Business metadata.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateUserRequest', required: [] })
  .openapi('UpdateUserRequest')

const UpdateUserSettingsRequestSchema = z
  .object({
    UserSettings: UserSettingsSchema.and(
      z.any().openapi({ description: 'The user settings to update.' }),
    ),
  })
  .openapi({ required: ['UserSettings'], title: 'UpdateUserSettingsRequest' })
  .openapi('UpdateUserSettingsRequest')

const UpdateVoiceConnectorGroupRequestSchema = z
  .object({
    Name: VoiceConnectorGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Chime Voice Connector group.' }),
    ),
    VoiceConnectorItems: VoiceConnectorItemListSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>VoiceConnectorItems</code> to associate with the group.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'VoiceConnectorItems'], title: 'UpdateVoiceConnectorGroupRequest' })
  .openapi('UpdateVoiceConnectorGroupRequest')

const UpdateVoiceConnectorRequestSchema = z
  .object({
    Name: VoiceConnectorNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Chime Voice Connector.' }),
    ),
    RequireEncryption: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'When enabled, requires encryption for the Amazon Chime Voice Connector.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'RequireEncryption'], title: 'UpdateVoiceConnectorRequest' })
  .openapi('UpdateVoiceConnectorRequest')

const ValidateE911AddressRequestSchema = z
  .object({
    AwsAccountId: NonEmptyStringSchema.and(z.any().openapi({ description: 'The AWS account ID.' })),
    StreetNumber: SensitiveNonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The address street number, such as <code>200</code> or <code>2121</code>.',
        }),
    ),
    StreetInfo: SensitiveNonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The address street information, such as <code>8th Avenue</code>.',
        }),
    ),
    City: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The address city, such as <code>Portland</code>.' }),
    ),
    State: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The address state, such as <code>ME</code>.' }),
    ),
    Country: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The address country, such as <code>US</code>. ' }),
    ),
    PostalCode: SensitiveNonEmptyStringSchema.and(
      z.any().openapi({ description: 'The address postal code, such as <code>04352</code>.' }),
    ),
  })
  .openapi({
    required: [
      'AwsAccountId',
      'StreetNumber',
      'StreetInfo',
      'City',
      'State',
      'Country',
      'PostalCode',
    ],
    title: 'ValidateE911AddressRequest',
  })
  .openapi('ValidateE911AddressRequest')

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

export const postAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users/{userId}#operation=associate-phone-number',
  description: 'Associates a phone number with the specified Amazon Chime user.',
  operationId: 'AssociatePhoneNumberWithUser',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The user ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('associate-phone-number')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['associate-phone-number'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              E164PhoneNumber: z
                .string()
                .regex(/^\+?[1-9]\d{1,14}$/)
                .openapi({ description: 'The phone number, in E.164 format.' }),
            })
            .openapi({ required: ['E164PhoneNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociatePhoneNumberWithUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersRoute = createRoute({
  method: 'post',
  path: '/voice-connectors/{voiceConnectorId}#operation=associate-phone-numbers',
  description: 'Associates phone numbers with the specified Amazon Chime Voice Connector.',
  operationId: 'AssociatePhoneNumbersWithVoiceConnector',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('associate-phone-numbers')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['associate-phone-numbers'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              E164PhoneNumbers: z
                .array(E164PhoneNumberSchema)
                .openapi({ description: 'List of phone numbers, in E.164 format.' }),
              ForceAssociate: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.',
                }),
            })
            .openapi({ required: ['E164PhoneNumbers'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociatePhoneNumbersWithVoiceConnectorResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersRoute =
  createRoute({
    method: 'post',
    path: '/voice-connector-groups/{voiceConnectorGroupId}#operation=associate-phone-numbers',
    description: 'Associates phone numbers with the specified Amazon Chime Voice Connector group.',
    operationId: 'AssociatePhoneNumbersWithVoiceConnectorGroup',
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
        voiceConnectorGroupId: z
          .string()
          .regex(/.*\S.*/)
          .openapi({
            param: {
              name: 'voiceConnectorGroupId',
              in: 'path',
              required: true,
              description: 'The Amazon Chime Voice Connector group ID.',
              schema: { type: 'string', pattern: '.*\\S.*' },
            },
          }),
      }),
      query: z.object({
        operation: z
          .literal('associate-phone-numbers')
          .openapi({
            param: {
              name: 'operation',
              in: 'query',
              required: true,
              schema: { type: 'string', enum: ['associate-phone-numbers'] },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                E164PhoneNumbers: z
                  .array(E164PhoneNumberSchema)
                  .openapi({ description: 'List of phone numbers, in E.164 format.' }),
                ForceAssociate: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.',
                  }),
              })
              .openapi({ required: ['E164PhoneNumbers'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: AssociatePhoneNumbersWithVoiceConnectorGroupResponseSchema,
          },
        },
      },
      480: {
        description: 'UnauthorizedClientException',
        content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      483: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'ThrottledClientException',
        content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
      },
      486: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      487: {
        description: 'ServiceFailureException',
        content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
      },
    },
  })

export const postAccountsAccountIdOperationAssociateSigninDelegateGroupsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}#operation=associate-signin-delegate-groups',
  description:
    'Associates the specified sign-in delegate groups with the specified Amazon Chime account.',
  operationId: 'AssociateSigninDelegateGroupsWithAccount',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('associate-signin-delegate-groups')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['associate-signin-delegate-groups'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SigninDelegateGroups: z
                .array(SigninDelegateGroupSchema)
                .openapi({ description: 'The sign-in delegate groups.' }),
            })
            .openapi({ required: ['SigninDelegateGroups'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateSigninDelegateGroupsWithAccountResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdAttendeesOperationBatchCreateRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/attendees#operation=batch-create',
  description:
    ' Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. ',
  operationId: 'BatchCreateAttendee',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('batch-create')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['batch-create'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Attendees: z
                .array(CreateAttendeeRequestItemSchema)
                .openapi({ description: 'The request containing the attendees to create.' }),
            })
            .openapi({ required: ['Attendees'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: BatchCreateAttendeeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postChannelsChannelArnMembershipsOperationBatchCreateRoute = createRoute({
  method: 'post',
  path: '/channels/{channelArn}/memberships#operation=batch-create',
  description: 'Adds a specified number of users to a channel.',
  operationId: 'BatchCreateChannelMembership',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: "The ARN of the channel to which you're adding users.",
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('batch-create')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['batch-create'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Type: z
                .enum(['DEFAULT', 'HIDDEN'])
                .exactOptional()
                .openapi({
                  description:
                    'The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.',
                }),
              MemberArns: z
                .array(ChimeArnSchema)
                .min(1)
                .max(100)
                .openapi({
                  description: 'The ARNs of the members you want to add to the channel.',
                }),
            })
            .openapi({ required: ['MemberArns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchCreateChannelMembershipResponseSchema } },
    },
    480: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/rooms/{roomId}/memberships#operation=batch-create',
  description:
    'Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.',
  operationId: 'BatchCreateRoomMembership',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('batch-create')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['batch-create'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MembershipItemList: z
                .array(MembershipItemSchema)
                .max(50)
                .openapi({ description: 'The list of membership items.' }),
            })
            .openapi({ required: ['MembershipItemList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: BatchCreateRoomMembershipResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postPhoneNumbersOperationBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/phone-numbers#operation=batch-delete',
  description:
    '<p> Moves phone numbers into the <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. </p> <p> Phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently. </p>',
  operationId: 'BatchDeletePhoneNumber',
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
      operation: z
        .literal('batch-delete')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['batch-delete'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PhoneNumberIds: z
                .array(StringSchema)
                .min(1)
                .openapi({ description: 'List of phone number IDs.' }),
            })
            .openapi({ required: ['PhoneNumberIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeletePhoneNumberResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdUsersOperationSuspendRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users#operation=suspend',
  description:
    '<p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they can continue to use Amazon Chime as free users. To remove the suspension from suspended <code>Team</code> account users, invite them to the <code>Team</code> account again. You can use the <a>InviteUsers</a> action to do so.</p> <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p> <p> To sign out users without suspending them, use the <a>LogoutUser</a> action. </p>',
  operationId: 'BatchSuspendUser',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('suspend')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['suspend'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UserIdList: z
                .array(NonEmptyStringSchema)
                .max(50)
                .openapi({ description: 'The request containing the user IDs to suspend.' }),
            })
            .openapi({ required: ['UserIdList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchSuspendUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdUsersOperationUnsuspendRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users#operation=unsuspend',
  description:
    '<p>Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code> accounts can be unsuspended using this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html"> Managing Your Amazon Chime Accounts </a> in the account types, in the <i>Amazon Chime Administration Guide</i>. </p> <p> Previously suspended users who are unsuspended using this action are returned to <code>Registered</code> status. Users who are not previously suspended are ignored. </p>',
  operationId: 'BatchUnsuspendUser',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('unsuspend')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['unsuspend'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UserIdList: z
                .array(NonEmptyStringSchema)
                .max(50)
                .openapi({ description: 'The request containing the user IDs to unsuspend.' }),
            })
            .openapi({ required: ['UserIdList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchUnsuspendUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postPhoneNumbersOperationBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/phone-numbers#operation=batch-update',
  description:
    '<p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p> <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>',
  operationId: 'BatchUpdatePhoneNumber',
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
      operation: z
        .literal('batch-update')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['batch-update'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UpdatePhoneNumberRequestItems: z
                .array(UpdatePhoneNumberRequestItemSchema)
                .openapi({
                  description:
                    'The request containing the phone number IDs and product types or calling names to update.',
                }),
            })
            .openapi({ required: ['UpdatePhoneNumberRequestItems'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchUpdatePhoneNumberResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdUsersRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/users',
  description:
    'Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.',
  operationId: 'ListUsers',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      'user-email': z
        .string()
        .regex(/.+@.+\..+/)
        .exactOptional()
        .openapi({
          param: {
            name: 'user-email',
            in: 'query',
            required: false,
            description: 'Optional. The user email address used to filter results. Maximum 1.',
            schema: { type: 'string', pattern: '.+@.+\\..+', format: 'password' },
          },
        }),
      'user-type': z
        .enum(['PrivateUser', 'SharedDevice'])
        .exactOptional()
        .openapi({
          param: {
            name: 'user-type',
            in: 'query',
            required: false,
            description: 'The user type.',
            schema: { type: 'string', enum: ['PrivateUser', 'SharedDevice'] },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single call. Defaults to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 200 },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
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
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdUsersRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users',
  description:
    'Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account. Currently, only <code>LicenseType</code> updates are supported for this action.',
  operationId: 'BatchUpdateUser',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UpdateUserRequestItems: z
                .array(UpdateUserRequestItemSchema)
                .max(20)
                .openapi({
                  description: 'The request containing the user IDs and details to update.',
                }),
            })
            .openapi({ required: ['UpdateUserRequestItems'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchUpdateUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  description:
    "Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.",
  operationId: 'ListAccounts',
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
      name: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: 'Amazon Chime account name prefix with which to filter results.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 100 },
          },
        }),
      'user-email': z
        .string()
        .regex(/.+@.+\..+/)
        .exactOptional()
        .openapi({
          param: {
            name: 'user-email',
            in: 'query',
            required: false,
            description: 'User email address with which to filter results.',
            schema: { type: 'string', pattern: '.+@.+\\..+', format: 'password' },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single call. Defaults to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 200 },
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
      content: { 'application/json': { schema: ListAccountsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsRoute = createRoute({
  method: 'post',
  path: '/accounts',
  description:
    'Creates an Amazon Chime account under the administrator\'s AWS account. Only <code>Team</code> account types are currently supported for this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.',
  operationId: 'CreateAccount',
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
              Name: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(100)
                .openapi({ description: 'The name of the Amazon Chime account.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAccountResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAppInstancesRoute = createRoute({
  method: 'get',
  path: '/app-instances',
  description:
    'Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS account.',
  operationId: 'ListAppInstances',
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
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of <code>AppInstance</code>s that you want to return.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token passed by previous API requests until you reach the maximum number of <code>AppInstance</code>s.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      content: { 'application/json': { schema: ListAppInstancesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAppInstancesRoute = createRoute({
  method: 'post',
  path: '/app-instances',
  description:
    'Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account. Only SDK messaging customers use this API. <code>CreateAppInstance</code> supports idempotency behavior as described in the AWS API Standard.',
  operationId: 'CreateAppInstance',
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
              Name: z
                .string()
                .regex(
                  /[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/,
                )
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the <code>AppInstance</code>.' }),
              Metadata: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/[-_a-zA-Z0-9]*/)
                .min(2)
                .max(64)
                .openapi({
                  description:
                    'The <code>ClientRequestToken</code> of the <code>AppInstance</code>.',
                }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'Tags assigned to the <code>AppInstance</code>.' }),
            })
            .openapi({ required: ['Name', 'ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAppInstanceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAppInstancesAppInstanceArnAdminsRoute = createRoute({
  method: 'get',
  path: '/app-instances/{appInstanceArn}/admins',
  description: 'Returns a list of the administrators in the <code>AppInstance</code>.',
  operationId: 'ListAppInstanceAdmins',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of administrators that you want to return.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token returned from previous API requests until the number of administrators is reached.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      content: { 'application/json': { schema: ListAppInstanceAdminsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAppInstancesAppInstanceArnAdminsRoute = createRoute({
  method: 'post',
  path: '/app-instances/{appInstanceArn}/admins',
  description:
    '<p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The promoted user can perform the following actions. </p> <ul> <li> <p> <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p> </li> <li> <p> <code>DeleteChannelMessage</code> actions.</p> </li> </ul> <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>',
  operationId: 'CreateAppInstanceAdmin',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AppInstanceAdminArn: z
                .string()
                .regex(
                  /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
                )
                .min(5)
                .max(1600)
                .openapi({
                  description:
                    'The ARN of the administrator of the current <code>AppInstance</code>.',
                }),
            })
            .openapi({ required: ['AppInstanceAdminArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAppInstanceAdminResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAppInstanceUsersRoute = createRoute({
  method: 'post',
  path: '/app-instance-users',
  description:
    'Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and <code>Name</code> for that user.',
  operationId: 'CreateAppInstanceUser',
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
              AppInstanceArn: z
                .string()
                .regex(
                  /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
                )
                .min(5)
                .max(1600)
                .openapi({ description: 'The ARN of the <code>AppInstance</code> request.' }),
              AppInstanceUserId: z
                .string()
                .regex(/[A-Za-z0-9]([A-Za-z0-9\:\-\_\.\@]{0,62}[A-Za-z0-9])?/)
                .min(1)
                .max(64)
                .openapi({ description: 'The user ID of the <code>AppInstance</code>.' }),
              Name: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(100)
                .openapi({ description: "The user's name." }),
              Metadata: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: "The request's metadata. Limited to a 1KB string in UTF-8.",
                }),
              ClientRequestToken: z
                .string()
                .regex(/[-_a-zA-Z0-9]*/)
                .min(2)
                .max(64)
                .openapi({
                  description:
                    'The token assigned to the user requesting an <code>AppInstance</code>.',
                }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'Tags assigned to the <code>AppInstanceUser</code>.' }),
            })
            .openapi({
              required: ['AppInstanceArn', 'AppInstanceUserId', 'Name', 'ClientRequestToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAppInstanceUserResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getMeetingsMeetingIdAttendeesRoute = createRoute({
  method: 'get',
  path: '/meetings/{meetingId}/attendees',
  description:
    ' Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. ',
  operationId: 'ListAttendees',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
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
      content: { 'application/json': { schema: ListAttendeesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdAttendeesRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/attendees',
  description:
    ' Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. ',
  operationId: 'CreateAttendee',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ExternalUserId: z
                .string()
                .min(2)
                .max(64)
                .openapi({
                  description:
                    'The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.',
                }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({ description: 'The tag key-value pairs.' }),
            })
            .openapi({ required: ['ExternalUserId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAttendeeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdBotsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/bots',
  description:
    "Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.",
  operationId: 'ListBots',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single call. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
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
      content: { 'application/json': { schema: ListBotsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdBotsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/bots',
  description: 'Creates a bot for an Amazon Chime Enterprise account.',
  operationId: 'CreateBot',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DisplayName: z.string().openapi({ description: 'The bot display name.' }),
              Domain: z
                .string()
                .regex(/.*\S.*/)
                .exactOptional()
                .openapi({ description: 'The domain of the Amazon Chime Enterprise account.' }),
            })
            .openapi({ required: ['DisplayName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBotResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    487: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
  },
})

export const postChannelsRoute = createRoute({
  method: 'post',
  path: '/channels',
  description:
    "<p>Creates a channel to which you can add users and send messages.</p> <p> <b>Restriction</b>: You can't change a channel's privacy.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
  operationId: 'CreateChannel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AppInstanceArn: z
                .string()
                .regex(
                  /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
                )
                .min(5)
                .max(1600)
                .openapi({ description: 'The ARN of the channel request.' }),
              Name: z
                .string()
                .regex(
                  /[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/,
                )
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the channel.' }),
              Mode: z
                .enum(['UNRESTRICTED', 'RESTRICTED'])
                .exactOptional()
                .openapi({
                  description:
                    'The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels.',
                }),
              Privacy: z
                .enum(['PUBLIC', 'PRIVATE'])
                .exactOptional()
                .openapi({
                  description:
                    "The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the <code>AppInstance</code>.",
                }),
              Metadata: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The metadata of the creation request. Limited to 1KB and UTF-8.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/[-_a-zA-Z0-9]*/)
                .min(2)
                .max(64)
                .openapi({
                  description:
                    'The client token for the request. An <code>Idempotency</code> token.',
                }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The tags for the creation request.' }),
            })
            .openapi({ required: ['AppInstanceArn', 'Name', 'ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnBansRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}/bans',
  description:
    '<p>Lists all the users banned from a particular channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'ListChannelBans',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of bans that you want returned.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token passed by previous API calls until all requested bans are returned.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      content: { 'application/json': { schema: ListChannelBansResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postChannelsChannelArnBansRoute = createRoute({
  method: 'post',
  path: '/channels/{channelArn}/bans',
  description:
    "<p>Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to <code>DeleteChannelBan</code>, and then <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or channels.</p> <p>If you ban a user who is already part of a channel, that user is automatically kicked from the channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
  operationId: 'CreateChannelBan',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the ban request.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MemberArn: z
                .string()
                .regex(
                  /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
                )
                .min(5)
                .max(1600)
                .openapi({ description: 'The ARN of the member being banned.' }),
            })
            .openapi({ required: ['MemberArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateChannelBanResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnMembershipsRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}/memberships',
  description:
    '<p>Lists all channel memberships in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'ListChannelMemberships',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The maximum number of channel memberships that you want returned.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['DEFAULT', 'HIDDEN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              'The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned.',
            schema: { type: 'string', enum: ['DEFAULT', 'HIDDEN'] },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of channel memberships that you want returned.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token passed by previous API calls until all requested channel memberships are returned.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      content: { 'application/json': { schema: ListChannelMembershipsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postChannelsChannelArnMembershipsRoute = createRoute({
  method: 'post',
  path: '/channels/{channelArn}/memberships',
  description:
    '<p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the request header. A channel member can:</p> <ul> <li> <p>List messages</p> </li> <li> <p>Send messages</p> </li> <li> <p>Receive messages</p> </li> <li> <p>Edit their own messages</p> </li> <li> <p>Leave the channel</p> </li> </ul> <p>Privacy settings impact this action as follows:</p> <ul> <li> <p>Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.</p> </li> <li> <p>Private Channels: You must be a member to list or send messages.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'CreateChannelMembership',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: "The ARN of the channel to which you're adding users.",
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MemberArn: z
                .string()
                .regex(
                  /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
                )
                .min(5)
                .max(1600)
                .openapi({ description: 'The ARN of the member you want to add to the channel.' }),
              Type: z
                .enum(['DEFAULT', 'HIDDEN'])
                .openapi({
                  description:
                    'The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.',
                }),
            })
            .openapi({ required: ['MemberArn', 'Type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateChannelMembershipResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnModeratorsRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}/moderators',
  description:
    '<p>Lists all the moderators for a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'ListChannelModerators',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of moderators that you want returned.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token passed by previous API calls until all requested moderators are returned.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      content: { 'application/json': { schema: ListChannelModeratorsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postChannelsChannelArnModeratorsRoute = createRoute({
  method: 'post',
  path: '/channels/{channelArn}/moderators',
  description:
    '<p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p> <ul> <li> <p>Add and remove other members of the channel.</p> </li> <li> <p>Add and remove other moderators of the channel.</p> </li> <li> <p>Add and remove user bans for the channel.</p> </li> <li> <p>Redact messages in the channel.</p> </li> <li> <p>List messages in the channel.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'CreateChannelModerator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ChannelModeratorArn: z
                .string()
                .regex(
                  /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
                )
                .min(5)
                .max(1600)
                .openapi({ description: 'The ARN of the moderator.' }),
            })
            .openapi({ required: ['ChannelModeratorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateChannelModeratorResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getMediaCapturePipelinesRoute = createRoute({
  method: 'get',
  path: '/media-capture-pipelines',
  description: 'Returns a list of media capture pipelines.',
  operationId: 'ListMediaCapturePipelines',
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
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token used to retrieve the next page of results.',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single call. Valid Range: 1 - 99.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
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
      content: { 'application/json': { schema: ListMediaCapturePipelinesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMediaCapturePipelinesRoute = createRoute({
  method: 'post',
  path: '/media-capture-pipelines',
  description: 'Creates a media capture pipeline.',
  operationId: 'CreateMediaCapturePipeline',
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
              SourceType: z
                .literal('ChimeSdkMeeting')
                .openapi({
                  description:
                    'Source type from which the media artifacts will be captured. A Chime SDK Meeting is the only supported source.',
                }),
              SourceArn: z
                .string()
                .regex(/^arn[\/\:\-\_\.a-zA-Z0-9]+$/)
                .min(1)
                .max(1024)
                .openapi({
                  description: 'ARN of the source from which the media artifacts are captured.',
                }),
              SinkType: z
                .literal('S3Bucket')
                .openapi({
                  description:
                    'Destination type to which the media artifacts are saved. You must use an S3 bucket. ',
                }),
              SinkArn: z
                .string()
                .regex(/^arn[\/\:\-\_\.a-zA-Z0-9]+$/)
                .min(1)
                .max(1024)
                .openapi({ description: 'The ARN of the sink type.' }),
              ClientRequestToken: z
                .string()
                .regex(/[-_a-zA-Z0-9]*/)
                .min(2)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests.',
                }),
              ChimeSdkMeetingConfiguration: z
                .object({
                  SourceConfiguration: SourceConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The source configuration for a specified media capture pipeline.',
                      }),
                  ).exactOptional(),
                  ArtifactsConfiguration: ArtifactsConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration for the artifacts in an Amazon Chime SDK meeting.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.',
                  required: [],
                }),
            })
            .openapi({ required: ['SourceType', 'SourceArn', 'SinkType', 'SinkArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMediaCapturePipelineResponseSchema } },
    },
    480: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getMeetingsRoute = createRoute({
  method: 'get',
  path: '/meetings',
  description:
    ' Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.',
  operationId: 'ListMeetings',
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
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
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
      content: { 'application/json': { schema: ListMeetingsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsRoute = createRoute({
  method: 'post',
  path: '/meetings',
  description:
    ' Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime SDK Developer Guide</i> . For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . ',
  operationId: 'CreateMeeting',
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
              ClientRequestToken: z
                .string()
                .regex(/[-_a-zA-Z0-9]*/)
                .min(2)
                .max(64)
                .openapi({
                  description:
                    'The unique identifier for the client request. Use a different token for different meetings.',
                }),
              ExternalMeetingId: z
                .string()
                .min(2)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The external meeting ID.' }),
              MeetingHostId: z
                .string()
                .min(2)
                .max(64)
                .exactOptional()
                .openapi({ description: 'Reserved.' }),
              MediaRegion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p> The Region in which to create the meeting. Default: <code>us-east-1</code>. </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p>',
                }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The tag key-value pairs.' }),
              NotificationsConfiguration: z
                .object({
                  SnsTopicArn: ArnSchema.and(
                    z.any().openapi({ description: 'The SNS topic ARN.' }),
                  ).exactOptional(),
                  SqsQueueArn: ArnSchema.and(
                    z.any().openapi({ description: 'The SQS queue ARN.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). ',
                  required: [],
                }),
            })
            .openapi({ required: ['ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMeetingResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdDialOutsRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/dial-outs',
  description:
    '<p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p> <p>To play welcome audio or implement an interactive voice response (IVR), use the <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>',
  operationId: 'CreateMeetingDialOut',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FromPhoneNumber: z
                .string()
                .regex(/^\+?[1-9]\d{1,14}$/)
                .openapi({
                  description:
                    'Phone number used as the caller ID when the remote party receives a call.',
                }),
              ToPhoneNumber: z
                .string()
                .regex(/^\+?[1-9]\d{1,14}$/)
                .openapi({
                  description: 'Phone number called when inviting someone to a meeting.',
                }),
              JoinToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/]+$/)
                .min(2)
                .max(2048)
                .openapi({
                  description:
                    'Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.',
                }),
            })
            .openapi({ required: ['FromPhoneNumber', 'ToPhoneNumber', 'JoinToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMeetingDialOutResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsOperationCreateAttendeesRoute = createRoute({
  method: 'post',
  path: '/meetings#operation=create-attendees',
  description:
    ' Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime SDK Developer Guide</i> . For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . ',
  operationId: 'CreateMeetingWithAttendees',
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
      operation: z
        .literal('create-attendees')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['create-attendees'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ClientRequestToken: z
                .string()
                .regex(/[-_a-zA-Z0-9]*/)
                .min(2)
                .max(64)
                .openapi({
                  description:
                    'The unique identifier for the client request. Use a different token for different meetings.',
                }),
              ExternalMeetingId: z
                .string()
                .min(2)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The external meeting ID.' }),
              MeetingHostId: z
                .string()
                .min(2)
                .max(64)
                .exactOptional()
                .openapi({ description: 'Reserved.' }),
              MediaRegion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p> The Region in which to create the meeting. Default: <code>us-east-1</code> . </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p>',
                }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The tag key-value pairs.' }),
              NotificationsConfiguration: z
                .object({
                  SnsTopicArn: ArnSchema.and(
                    z.any().openapi({ description: 'The SNS topic ARN.' }),
                  ).exactOptional(),
                  SqsQueueArn: ArnSchema.and(
                    z.any().openapi({ description: 'The SQS queue ARN.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). ',
                  required: [],
                }),
              Attendees: z
                .array(CreateAttendeeRequestItemSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({ description: 'The request containing the attendees to create.' }),
            })
            .openapi({ required: ['ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMeetingWithAttendeesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getPhoneNumberOrdersRoute = createRoute({
  method: 'get',
  path: '/phone-number-orders',
  description: "Lists the phone number orders for the administrator's Amazon Chime account.",
  operationId: 'ListPhoneNumberOrders',
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
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
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
      content: { 'application/json': { schema: ListPhoneNumberOrdersResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postPhoneNumberOrdersRoute = createRoute({
  method: 'post',
  path: '/phone-number-orders',
  description:
    'Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.',
  operationId: 'CreatePhoneNumberOrder',
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
              ProductType: z
                .enum(['BusinessCalling', 'VoiceConnector', 'SipMediaApplicationDialIn'])
                .openapi({ description: 'The phone number product type.' }),
              E164PhoneNumbers: z
                .array(E164PhoneNumberSchema)
                .openapi({ description: 'List of phone numbers, in E.164 format.' }),
            })
            .openapi({ required: ['ProductType', 'E164PhoneNumbers'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePhoneNumberOrderResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdProxySessionsRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/proxy-sessions',
  description: 'Lists the proxy sessions for the specified Amazon Chime Voice Connector.',
  operationId: 'ListProxySessions',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime voice connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['Open', 'InProgress', 'Closed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description: 'The proxy session status.',
            schema: { type: 'string', enum: ['Open', 'InProgress', 'Closed'] },
          },
        }),
      'next-token': z
        .string()
        .max(65535)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string', maxLength: 65535 },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
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
      content: { 'application/json': { schema: ListProxySessionsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorsVoiceConnectorIdProxySessionsRoute = createRoute({
  method: 'post',
  path: '/voice-connectors/{voiceConnectorId}/proxy-sessions',
  description:
    'Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.',
  operationId: 'CreateProxySession',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime voice connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ParticipantPhoneNumbers: z
                .array(E164PhoneNumberSchema)
                .length(2)
                .openapi({ description: 'The participant phone numbers.' }),
              Name: z
                .string()
                .regex(/^$|^[a-zA-Z0-9 ]{0,30}$/)
                .exactOptional()
                .openapi({ description: 'The name of the proxy session.' }),
              ExpiryMinutes: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The number of minutes allowed for the proxy session.' }),
              Capabilities: z
                .array(CapabilitySchema)
                .openapi({ description: 'The proxy session capabilities.' }),
              NumberSelectionBehavior: z
                .enum(['PreferSticky', 'AvoidSticky'])
                .exactOptional()
                .openapi({
                  description:
                    'The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.',
                }),
              GeoMatchLevel: z
                .enum(['Country', 'AreaCode'])
                .exactOptional()
                .openapi({
                  description:
                    'The preference for matching the country or area code of the proxy phone number with that of the first participant.',
                }),
              GeoMatchParams: z
                .object({
                  Country: CountrySchema.and(
                    z.any().openapi({ description: 'The country.' }),
                  ).exactOptional(),
                  AreaCode: AreaCodeSchema.and(
                    z.any().openapi({ description: 'The area code.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The country and area code for a proxy phone number in a proxy phone session.',
                  required: [],
                }),
            })
            .openapi({ required: ['ParticipantPhoneNumbers', 'Capabilities'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProxySessionResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdRoomsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/rooms',
  description:
    'Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.',
  operationId: 'ListRooms',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      'member-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'member-id',
            in: 'query',
            required: false,
            description: 'The member ID (user ID or bot ID).',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
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
      content: { 'application/json': { schema: ListRoomsResponseSchema } },
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
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdRoomsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/rooms',
  description: 'Creates a chat room for the specified Amazon Chime Enterprise account.',
  operationId: 'CreateRoom',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z.string().openapi({ description: 'The room name.' }),
              ClientRequestToken: z
                .string()
                .regex(/[-_a-zA-Z0-9]*/)
                .min(2)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The idempotency token for the request.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRoomResponseSchema } },
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
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdRoomsRoomIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/rooms/{roomId}/memberships',
  description:
    "Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.",
  operationId: 'ListRoomMemberships',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
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
      content: { 'application/json': { schema: ListRoomMembershipsResponseSchema } },
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
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdRoomsRoomIdMembershipsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/rooms/{roomId}/memberships',
  description:
    'Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.',
  operationId: 'CreateRoomMembership',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MemberId: z
                .string()
                .regex(/.*\S.*/)
                .openapi({ description: 'The Amazon Chime member ID (user ID or bot ID).' }),
              Role: z
                .enum(['Administrator', 'Member'])
                .exactOptional()
                .openapi({ description: 'The role of the member.' }),
            })
            .openapi({ required: ['MemberId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRoomMembershipResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    488: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getSipMediaApplicationsRoute = createRoute({
  method: 'get',
  path: '/sip-media-applications',
  description: "Lists the SIP media applications under the administrator's AWS account.",
  operationId: 'ListSipMediaApplications',
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
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single call. Defaults to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
          },
        }),
      'next-token': z
        .string()
        .max(65535)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string', maxLength: 65535 },
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
      content: { 'application/json': { schema: ListSipMediaApplicationsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postSipMediaApplicationsRoute = createRoute({
  method: 'post',
  path: '/sip-media-applications',
  description: 'Creates a SIP media application.',
  operationId: 'CreateSipMediaApplication',
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
              AwsRegion: z
                .string()
                .openapi({ description: 'The AWS Region assigned to the SIP media application.' }),
              Name: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The SIP media application name.' }),
              Endpoints: z
                .array(SipMediaApplicationEndpointSchema)
                .length(1)
                .openapi({
                  description:
                    'List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.',
                }),
            })
            .openapi({ required: ['AwsRegion', 'Name', 'Endpoints'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSipMediaApplicationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    488: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postSipMediaApplicationsSipMediaApplicationIdCallsRoute = createRoute({
  method: 'post',
  path: '/sip-media-applications/{sipMediaApplicationId}/calls',
  description:
    'Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified <code>sipMediaApplicationId</code>.',
  operationId: 'CreateSipMediaApplicationCall',
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
      sipMediaApplicationId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipMediaApplicationId',
            in: 'path',
            required: true,
            description: 'The ID of the SIP media application.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FromPhoneNumber: z
                .string()
                .regex(/^\+?[1-9]\d{1,14}$/)
                .openapi({
                  description:
                    'The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.',
                }),
              ToPhoneNumber: z
                .string()
                .regex(/^\+?[1-9]\d{1,14}$/)
                .openapi({ description: 'The phone number that the service should call.' }),
              SipHeaders: z
                .record(z.string(), SensitiveStringSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 20)
                .exactOptional()
                .openapi({ description: 'The SIP headers added to an outbound call leg.' }),
            })
            .openapi({ required: ['FromPhoneNumber', 'ToPhoneNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSipMediaApplicationCallResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getSipRulesRoute = createRoute({
  method: 'get',
  path: '/sip-rules',
  description: "Lists the SIP rules under the administrator's AWS account.",
  operationId: 'ListSipRules',
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
      'sip-media-application': z
        .string()
        .regex(/.*\S.*/)
        .exactOptional()
        .openapi({
          param: {
            name: 'sip-media-application',
            in: 'query',
            required: false,
            description: 'The SIP media application ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return in a single call. Defaults to 100.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
          },
        }),
      'next-token': z
        .string()
        .max(65535)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string', maxLength: 65535 },
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
      content: { 'application/json': { schema: ListSipRulesResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postSipRulesRoute = createRoute({
  method: 'post',
  path: '/sip-rules',
  description:
    'Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.',
  operationId: 'CreateSipRule',
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
              Name: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the SIP rule.' }),
              TriggerType: z
                .enum(['ToPhoneNumber', 'RequestUriHostname'])
                .openapi({
                  description:
                    'The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.',
                }),
              TriggerValue: z
                .string()
                .regex(/.*\S.*/)
                .openapi({
                  description:
                    'If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the <code>ToPhoneNumber</code> value.',
                }),
              Disabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables or disables a rule. You must disable rules before you can delete them.',
                }),
              TargetApplications: z
                .array(SipRuleTargetApplicationSchema)
                .min(1)
                .max(25)
                .openapi({
                  description:
                    'List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.',
                }),
            })
            .openapi({ required: ['Name', 'TriggerType', 'TriggerValue', 'TargetApplications'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSipRuleResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    488: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdUsersOperationCreateRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users#operation=create',
  description: 'Creates a user under the specified Amazon Chime account.',
  operationId: 'CreateUser',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('create')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['create'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Username: z.string().exactOptional().openapi({ description: 'The user name.' }),
              Email: z
                .string()
                .regex(/.+@.+\..+/)
                .exactOptional()
                .openapi({ description: "The user's email address." }),
              UserType: z
                .enum(['PrivateUser', 'SharedDevice'])
                .exactOptional()
                .openapi({ description: 'The user type.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsRoute = createRoute({
  method: 'get',
  path: '/voice-connectors',
  description: "Lists the Amazon Chime Voice Connectors for the administrator's AWS account.",
  operationId: 'ListVoiceConnectors',
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
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
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
      content: { 'application/json': { schema: ListVoiceConnectorsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorsRoute = createRoute({
  method: 'post',
  path: '/voice-connectors',
  description:
    "<p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p> <p> Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked. </p>",
  operationId: 'CreateVoiceConnector',
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
              Name: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the Amazon Chime Voice Connector.' }),
              AwsRegion: z
                .enum(['us-east-1', 'us-west-2'])
                .exactOptional()
                .openapi({
                  description:
                    ' The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code> . ',
                }),
              RequireEncryption: z
                .boolean()
                .openapi({
                  description:
                    'When enabled, requires encryption for the Amazon Chime Voice Connector.',
                }),
            })
            .openapi({ required: ['Name', 'RequireEncryption'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVoiceConnectorResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorGroupsRoute = createRoute({
  method: 'get',
  path: '/voice-connector-groups',
  description: "Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.",
  operationId: 'ListVoiceConnectorGroups',
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
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
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
      content: { 'application/json': { schema: ListVoiceConnectorGroupsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorGroupsRoute = createRoute({
  method: 'post',
  path: '/voice-connector-groups',
  description:
    "<p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including <code>VoiceConnectorItems</code> in the request.</p> <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.</p>",
  operationId: 'CreateVoiceConnectorGroup',
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
              Name: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the Amazon Chime Voice Connector group.' }),
              VoiceConnectorItems: z
                .array(VoiceConnectorItemSchema)
                .exactOptional()
                .openapi({
                  description: 'The Amazon Chime Voice Connectors to route inbound calls to.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVoiceConnectorGroupResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}',
  description:
    'Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.',
  operationId: 'GetAccount',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}',
  description:
    'Updates account details for the specified Amazon Chime account. Currently, only account name and default license updates are supported for this action.',
  operationId: 'UpdateAccount',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The new name for the specified Amazon Chime account.' }),
              DefaultLicense: z
                .enum(['Basic', 'Plus', 'Pro', 'ProTrial'])
                .exactOptional()
                .openapi({
                  description:
                    'The default license applied when you add users to an Amazon Chime account.',
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
      content: { 'application/json': { schema: UpdateAccountResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAccountsAccountIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}',
  description:
    '<p>Deletes the specified Amazon Chime account. You must suspend all users before deleting <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action to dodo.</p> <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended.</p> <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore deleted account from your <code>Disabled</code> accounts list, you must contact AWS Support.</p> <p>After 90 days, deleted accounts are permanently removed from your <code>Disabled</code> accounts list.</p>',
  operationId: 'DeleteAccount',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAccountResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAppInstancesAppInstanceArnRoute = createRoute({
  method: 'get',
  path: '/app-instances/{appInstanceArn}',
  description: 'Returns the full details of an <code>AppInstance</code>.',
  operationId: 'DescribeAppInstance',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAppInstanceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putAppInstancesAppInstanceArnRoute = createRoute({
  method: 'put',
  path: '/app-instances/{appInstanceArn}',
  description: 'Updates <code>AppInstance</code> metadata.',
  operationId: 'UpdateAppInstance',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(
                  /[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/,
                )
                .min(1)
                .max(256)
                .openapi({ description: 'The name that you want to change.' }),
              Metadata: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The metadata that you want to change.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAppInstanceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAppInstancesAppInstanceArnRoute = createRoute({
  method: 'delete',
  path: '/app-instances/{appInstanceArn}',
  description: 'Deletes an <code>AppInstance</code> and all associated data asynchronously.',
  operationId: 'DeleteAppInstance',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute = createRoute({
  method: 'get',
  path: '/app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}',
  description: 'Returns the full details of an <code>AppInstanceAdmin</code>.',
  operationId: 'DescribeAppInstanceAdmin',
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
      appInstanceAdminArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceAdminArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstanceAdmin</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAppInstanceAdminResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute = createRoute({
  method: 'delete',
  path: '/app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}',
  description:
    'Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action does not delete the user.',
  operationId: 'DeleteAppInstanceAdmin',
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
      appInstanceAdminArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceAdminArn',
            in: 'path',
            required: true,
            description: "The ARN of the <code>AppInstance</code>'s administrator.",
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAppInstancesAppInstanceArnStreamingConfigurationsRoute = createRoute({
  method: 'get',
  path: '/app-instances/{appInstanceArn}/streaming-configurations',
  description: 'Gets the streaming settings for an <code>AppInstance</code>.',
  operationId: 'GetAppInstanceStreamingConfigurations',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetAppInstanceStreamingConfigurationsResponseSchema },
      },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putAppInstancesAppInstanceArnStreamingConfigurationsRoute = createRoute({
  method: 'put',
  path: '/app-instances/{appInstanceArn}/streaming-configurations',
  description: 'The data streaming configurations of an <code>AppInstance</code>.',
  operationId: 'PutAppInstanceStreamingConfigurations',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AppInstanceStreamingConfigurations: z
                .array(AppInstanceStreamingConfigurationSchema)
                .min(1)
                .max(2)
                .openapi({
                  description: 'The streaming configurations set for an <code>AppInstance</code>.',
                }),
            })
            .openapi({ required: ['AppInstanceStreamingConfigurations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PutAppInstanceStreamingConfigurationsResponseSchema },
      },
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
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAppInstancesAppInstanceArnStreamingConfigurationsRoute = createRoute({
  method: 'delete',
  path: '/app-instances/{appInstanceArn}/streaming-configurations',
  description: 'Deletes the streaming configurations of an <code>AppInstance</code>.',
  operationId: 'DeleteAppInstanceStreamingConfigurations',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the streaming configurations being deleted.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAppInstanceUsersAppInstanceUserArnRoute = createRoute({
  method: 'get',
  path: '/app-instance-users/{appInstanceUserArn}',
  description: 'Returns the full details of an <code>AppInstanceUser</code>.',
  operationId: 'DescribeAppInstanceUser',
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
      appInstanceUserArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceUserArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstanceUser</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAppInstanceUserResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putAppInstanceUsersAppInstanceUserArnRoute = createRoute({
  method: 'put',
  path: '/app-instance-users/{appInstanceUserArn}',
  description:
    'Updates the details of an <code>AppInstanceUser</code>. You can update names and metadata.',
  operationId: 'UpdateAppInstanceUser',
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
      appInstanceUserArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceUserArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstanceUser</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(100)
                .openapi({ description: 'The name of the <code>AppInstanceUser</code>.' }),
              Metadata: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The metadata of the <code>AppInstanceUser</code>.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAppInstanceUserResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAppInstanceUsersAppInstanceUserArnRoute = createRoute({
  method: 'delete',
  path: '/app-instance-users/{appInstanceUserArn}',
  description: 'Deletes an <code>AppInstanceUser</code>.',
  operationId: 'DeleteAppInstanceUser',
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
      appInstanceUserArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceUserArn',
            in: 'path',
            required: true,
            description: 'The ARN of the user request being deleted.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getMeetingsMeetingIdAttendeesAttendeeIdRoute = createRoute({
  method: 'get',
  path: '/meetings/{meetingId}/attendees/{attendeeId}',
  description:
    ' Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . ',
  operationId: 'GetAttendee',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
      attendeeId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK attendee ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAttendeeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteMeetingsMeetingIdAttendeesAttendeeIdRoute = createRoute({
  method: 'delete',
  path: '/meetings/{meetingId}/attendees/{attendeeId}',
  description:
    'Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.',
  operationId: 'DeleteAttendee',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
      attendeeId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK attendee ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}',
  description:
    '<p>Returns the full details of a channel in an Amazon Chime <code>AppInstance</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'DescribeChannel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putChannelsChannelArnRoute = createRoute({
  method: 'put',
  path: '/channels/{channelArn}',
  description:
    "<p>Update a channel's attributes.</p> <p> <b>Restriction</b>: You can't change a channel's privacy. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
  operationId: 'UpdateChannel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(
                  /[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/,
                )
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the channel.' }),
              Mode: z
                .enum(['UNRESTRICTED', 'RESTRICTED'])
                .openapi({ description: 'The mode of the update request.' }),
              Metadata: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The metadata for the update request.' }),
            })
            .openapi({ required: ['Name', 'Mode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteChannelsChannelArnRoute = createRoute({
  method: 'delete',
  path: '/channels/{channelArn}',
  description:
    '<p>Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'DeleteChannel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel being deleted.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnBansMemberArnRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}/bans/{memberArn}',
  description:
    '<p>Returns the full details of a channel ban.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'DescribeChannelBan',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel from which the user is banned.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      memberArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'memberArn',
            in: 'path',
            required: true,
            description: 'The ARN of the member being banned.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChannelBanResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteChannelsChannelArnBansMemberArnRoute = createRoute({
  method: 'delete',
  path: '/channels/{channelArn}/bans/{memberArn}',
  description:
    "<p>Removes a user from a channel's ban list.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
  operationId: 'DeleteChannelBan',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description:
              'The ARN of the channel from which the <code>AppInstanceUser</code> was banned.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      memberArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'memberArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstanceUser</code> that you want to reinstate.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnMembershipsMemberArnRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}/memberships/{memberArn}',
  description:
    "<p>Returns the full details of a user's channel membership.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
  operationId: 'DescribeChannelMembership',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      memberArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'memberArn',
            in: 'path',
            required: true,
            description: 'The ARN of the member.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChannelMembershipResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteChannelsChannelArnMembershipsMemberArnRoute = createRoute({
  method: 'delete',
  path: '/channels/{channelArn}/memberships/{memberArn}',
  description:
    '<p>Removes a member from a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'DeleteChannelMembership',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel from which you want to remove the user.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      memberArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'memberArn',
            in: 'path',
            required: true,
            description: "The ARN of the member that you're removing from the channel.",
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnMessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}/messages/{messageId}',
  description:
    '<p>Gets the full details of a channel message.</p> <note> <p>The x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'GetChannelMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      messageId: z
        .string()
        .regex(/[-_a-zA-Z0-9]*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'The ID of the message.',
            schema: { type: 'string', pattern: '[-_a-zA-Z0-9]*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetChannelMessageResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putChannelsChannelArnMessagesMessageIdRoute = createRoute({
  method: 'put',
  path: '/channels/{channelArn}/messages/{messageId}',
  description:
    '<p>Updates the content of a message.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'UpdateChannelMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      messageId: z
        .string()
        .regex(/[-_a-zA-Z0-9]*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'The ID string of the message being updated.',
            schema: { type: 'string', pattern: '[-_a-zA-Z0-9]*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Content: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(4096)
                .exactOptional()
                .openapi({ description: 'The content of the message being updated.' }),
              Metadata: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The metadata of the message being updated.' }),
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
      content: { 'application/json': { schema: UpdateChannelMessageResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteChannelsChannelArnMessagesMessageIdRoute = createRoute({
  method: 'delete',
  path: '/channels/{channelArn}/messages/{messageId}',
  description:
    '<p>Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by <code>UpdateChannelMessage</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'DeleteChannelMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      messageId: z
        .string()
        .regex(/[-_a-zA-Z0-9]*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'The ID of the message being deleted.',
            schema: { type: 'string', pattern: '[-_a-zA-Z0-9]*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnModeratorsChannelModeratorArnRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}/moderators/{channelModeratorArn}',
  description:
    '<p>Returns the full details of a single ChannelModerator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'DescribeChannelModerator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      channelModeratorArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelModeratorArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel moderator.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChannelModeratorResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteChannelsChannelArnModeratorsChannelModeratorArnRoute = createRoute({
  method: 'delete',
  path: '/channels/{channelArn}/moderators/{channelModeratorArn}',
  description:
    '<p>Deletes a channel moderator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'DeleteChannelModerator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      channelModeratorArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelModeratorArn',
            in: 'path',
            required: true,
            description: 'The ARN of the moderator being deleted.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdBotsBotIdEventsConfigurationRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/bots/{botId}/events-configuration',
  description:
    'Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.',
  operationId: 'GetEventsConfiguration',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      botId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The bot ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEventsConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const putAccountsAccountIdBotsBotIdEventsConfigurationRoute = createRoute({
  method: 'put',
  path: '/accounts/{accountId}/bots/{botId}/events-configuration',
  description:
    'Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see <a>Bot</a>.',
  operationId: 'PutEventsConfiguration',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      botId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The bot ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              OutboundEventsHTTPSEndpoint: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'HTTPS endpoint that allows the bot to receive outgoing events.',
                }),
              LambdaFunctionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Lambda function ARN that allows the bot to receive outgoing events.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: PutEventsConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const deleteAccountsAccountIdBotsBotIdEventsConfigurationRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}/bots/{botId}/events-configuration',
  description: 'Deletes the events configuration that allows a bot to receive outgoing events.',
  operationId: 'DeleteEventsConfiguration',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      botId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The bot ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
  },
})

export const getMediaCapturePipelinesMediaPipelineIdRoute = createRoute({
  method: 'get',
  path: '/media-capture-pipelines/{mediaPipelineId}',
  description: 'Gets an existing media capture pipeline.',
  operationId: 'GetMediaCapturePipeline',
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
      mediaPipelineId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'mediaPipelineId',
            in: 'path',
            required: true,
            description: 'The ID of the pipeline that you want to get.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMediaCapturePipelineResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteMediaCapturePipelinesMediaPipelineIdRoute = createRoute({
  method: 'delete',
  path: '/media-capture-pipelines/{mediaPipelineId}',
  description: 'Deletes the media capture pipeline.',
  operationId: 'DeleteMediaCapturePipeline',
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
      mediaPipelineId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'mediaPipelineId',
            in: 'path',
            required: true,
            description: 'The ID of the media capture pipeline being deleted. ',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getMeetingsMeetingIdRoute = createRoute({
  method: 'get',
  path: '/meetings/{meetingId}',
  description:
    ' Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . ',
  operationId: 'GetMeeting',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMeetingResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteMeetingsMeetingIdRoute = createRoute({
  method: 'delete',
  path: '/meetings/{meetingId}',
  description:
    'Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.',
  operationId: 'DeleteMeeting',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getPhoneNumbersPhoneNumberIdRoute = createRoute({
  method: 'get',
  path: '/phone-numbers/{phoneNumberId}',
  description:
    'Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.',
  operationId: 'GetPhoneNumber',
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
      phoneNumberId: z
        .string()
        .openapi({
          param: {
            name: 'phoneNumberId',
            in: 'path',
            required: true,
            description: 'The phone number ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPhoneNumberResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postPhoneNumbersPhoneNumberIdRoute = createRoute({
  method: 'post',
  path: '/phone-numbers/{phoneNumberId}',
  description:
    '<p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p> <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>',
  operationId: 'UpdatePhoneNumber',
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
      phoneNumberId: z
        .string()
        .openapi({
          param: {
            name: 'phoneNumberId',
            in: 'path',
            required: true,
            description: 'The phone number ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ProductType: z
                .enum(['BusinessCalling', 'VoiceConnector', 'SipMediaApplicationDialIn'])
                .exactOptional()
                .openapi({ description: 'The product type.' }),
              CallingName: z
                .string()
                .regex(/^$|^[a-zA-Z0-9 ]{2,15}$/)
                .exactOptional()
                .openapi({
                  description: 'The outbound calling name associated with the phone number.',
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
      content: { 'application/json': { schema: UpdatePhoneNumberResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deletePhoneNumbersPhoneNumberIdRoute = createRoute({
  method: 'delete',
  path: '/phone-numbers/{phoneNumberId}',
  description:
    '<p>Moves the specified phone number into the <b>Deletion queue</b>. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted.</p> <p>Deleted phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>',
  operationId: 'DeletePhoneNumber',
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
      phoneNumberId: z
        .string()
        .openapi({
          param: {
            name: 'phoneNumberId',
            in: 'path',
            required: true,
            description: 'The phone number ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
  description:
    'Gets the specified proxy session details for the specified Amazon Chime Voice Connector.',
  operationId: 'GetProxySession',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime voice connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
      proxySessionId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'proxySessionId',
            in: 'path',
            required: true,
            description: 'The proxy session ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProxySessionResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute = createRoute({
  method: 'post',
  path: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
  description: 'Updates the specified proxy session details, such as voice or SMS capabilities.',
  operationId: 'UpdateProxySession',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime voice connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
      proxySessionId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'proxySessionId',
            in: 'path',
            required: true,
            description: 'The proxy session ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Capabilities: z
                .array(CapabilitySchema)
                .openapi({ description: 'The proxy session capabilities.' }),
              ExpiryMinutes: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The number of minutes allowed for the proxy session.' }),
            })
            .openapi({ required: ['Capabilities'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProxySessionResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute = createRoute({
  method: 'delete',
  path: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
  description:
    'Deletes the specified proxy session from the specified Amazon Chime Voice Connector.',
  operationId: 'DeleteProxySession',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime voice connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
      proxySessionId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'proxySessionId',
            in: 'path',
            required: true,
            description: 'The proxy session ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdRoomsRoomIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/rooms/{roomId}',
  description:
    'Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.',
  operationId: 'GetRoom',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRoomResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdRoomsRoomIdRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/rooms/{roomId}',
  description:
    'Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.',
  operationId: 'UpdateRoom',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ Name: z.string().exactOptional().openapi({ description: 'The room name.' }) })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRoomResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAccountsAccountIdRoomsRoomIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}/rooms/{roomId}',
  description: 'Deletes a chat room in an Amazon Chime Enterprise account.',
  operationId: 'DeleteRoom',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The chat room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/rooms/{roomId}/memberships/{memberId}',
  description:
    'Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.',
  operationId: 'UpdateRoomMembership',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      memberId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'memberId',
            in: 'path',
            required: true,
            description: 'The member ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Role: z
                .enum(['Administrator', 'Member'])
                .exactOptional()
                .openapi({ description: 'The role of the member.' }),
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
      content: { 'application/json': { schema: UpdateRoomMembershipResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}/rooms/{roomId}/memberships/{memberId}',
  description: 'Removes a member from a chat room in an Amazon Chime Enterprise account.',
  operationId: 'DeleteRoomMembership',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      memberId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'memberId',
            in: 'path',
            required: true,
            description: 'The member ID (user ID or bot ID).',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getSipMediaApplicationsSipMediaApplicationIdRoute = createRoute({
  method: 'get',
  path: '/sip-media-applications/{sipMediaApplicationId}',
  description:
    'Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.',
  operationId: 'GetSipMediaApplication',
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
      sipMediaApplicationId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipMediaApplicationId',
            in: 'path',
            required: true,
            description: 'The SIP media application ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSipMediaApplicationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putSipMediaApplicationsSipMediaApplicationIdRoute = createRoute({
  method: 'put',
  path: '/sip-media-applications/{sipMediaApplicationId}',
  description: 'Updates the details of the specified SIP media application.',
  operationId: 'UpdateSipMediaApplication',
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
      sipMediaApplicationId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipMediaApplicationId',
            in: 'path',
            required: true,
            description: 'The SIP media application ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The new name for the specified SIP media application.' }),
              Endpoints: z
                .array(SipMediaApplicationEndpointSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description: 'The new set of endpoints for the specified SIP media application.',
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
      content: { 'application/json': { schema: UpdateSipMediaApplicationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteSipMediaApplicationsSipMediaApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/sip-media-applications/{sipMediaApplicationId}',
  description: 'Deletes a SIP media application.',
  operationId: 'DeleteSipMediaApplication',
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
      sipMediaApplicationId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipMediaApplicationId',
            in: 'path',
            required: true,
            description: 'The SIP media application ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getSipRulesSipRuleIdRoute = createRoute({
  method: 'get',
  path: '/sip-rules/{sipRuleId}',
  description:
    'Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.',
  operationId: 'GetSipRule',
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
      sipRuleId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipRuleId',
            in: 'path',
            required: true,
            description: 'The SIP rule ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSipRuleResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putSipRulesSipRuleIdRoute = createRoute({
  method: 'put',
  path: '/sip-rules/{sipRuleId}',
  description: 'Updates the details of the specified SIP rule.',
  operationId: 'UpdateSipRule',
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
      sipRuleId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipRuleId',
            in: 'path',
            required: true,
            description: 'The SIP rule ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The new name for the specified SIP rule.' }),
              Disabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'The new value specified to indicate whether the rule is disabled.',
                }),
              TargetApplications: z
                .array(SipRuleTargetApplicationSchema)
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The new value of the list of target applications.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSipRuleResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    488: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteSipRulesSipRuleIdRoute = createRoute({
  method: 'delete',
  path: '/sip-rules/{sipRuleId}',
  description: 'Deletes a SIP rule. You must disable a SIP rule before you can delete it.',
  operationId: 'DeleteSipRule',
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
      sipRuleId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipRuleId',
            in: 'path',
            required: true,
            description: 'The SIP rule ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}',
  description:
    'Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,name, outbound host, and encryption requirements.',
  operationId: 'GetVoiceConnector',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVoiceConnectorResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putVoiceConnectorsVoiceConnectorIdRoute = createRoute({
  method: 'put',
  path: '/voice-connectors/{voiceConnectorId}',
  description: 'Updates details for the specified Amazon Chime Voice Connector.',
  operationId: 'UpdateVoiceConnector',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the Amazon Chime Voice Connector.' }),
              RequireEncryption: z
                .boolean()
                .openapi({
                  description:
                    'When enabled, requires encryption for the Amazon Chime Voice Connector.',
                }),
            })
            .openapi({ required: ['Name', 'RequireEncryption'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVoiceConnectorResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteVoiceConnectorsVoiceConnectorIdRoute = createRoute({
  method: 'delete',
  path: '/voice-connectors/{voiceConnectorId}',
  description:
    'Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.',
  operationId: 'DeleteVoiceConnector',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
  description:
    'Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.',
  operationId: 'GetVoiceConnectorEmergencyCallingConfiguration',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: GetVoiceConnectorEmergencyCallingConfigurationResponseSchema,
        },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute = createRoute({
  method: 'put',
  path: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
  description:
    'Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.',
  operationId: 'PutVoiceConnectorEmergencyCallingConfiguration',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EmergencyCallingConfiguration: z
                .object({
                  DNIS: DNISEmergencyCallingConfigurationListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Dialed Number Identification Service (DNIS) emergency calling configuration details.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The emergency calling configuration details associated with an Amazon Chime Voice Connector.',
                  required: [],
                }),
            })
            .openapi({ required: ['EmergencyCallingConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: PutVoiceConnectorEmergencyCallingConfigurationResponseSchema,
        },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute = createRoute({
  method: 'delete',
  path: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
  description:
    'Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.',
  operationId: 'DeleteVoiceConnectorEmergencyCallingConfiguration',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorGroupsVoiceConnectorGroupIdRoute = createRoute({
  method: 'get',
  path: '/voice-connector-groups/{voiceConnectorGroupId}',
  description:
    ' Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated <code>VoiceConnectorItems</code>.',
  operationId: 'GetVoiceConnectorGroup',
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
      voiceConnectorGroupId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorGroupId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector group ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVoiceConnectorGroupResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putVoiceConnectorGroupsVoiceConnectorGroupIdRoute = createRoute({
  method: 'put',
  path: '/voice-connector-groups/{voiceConnectorGroupId}',
  description:
    'Updates details of the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.',
  operationId: 'UpdateVoiceConnectorGroup',
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
      voiceConnectorGroupId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorGroupId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector group ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The name of the Amazon Chime Voice Connector group.' }),
              VoiceConnectorItems: z
                .array(VoiceConnectorItemSchema)
                .openapi({
                  description: 'The <code>VoiceConnectorItems</code> to associate with the group.',
                }),
            })
            .openapi({ required: ['Name', 'VoiceConnectorItems'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVoiceConnectorGroupResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteVoiceConnectorGroupsVoiceConnectorGroupIdRoute = createRoute({
  method: 'delete',
  path: '/voice-connector-groups/{voiceConnectorGroupId}',
  description:
    'Deletes the specified Amazon Chime Voice Connector group. Any <code>VoiceConnectorItems</code> and phone numbers associated with the group must be removed before it can be deleted.',
  operationId: 'DeleteVoiceConnectorGroup',
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
      voiceConnectorGroupId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorGroupId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector group ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdOriginationRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/origination',
  description:
    'Retrieves origination setting details for the specified Amazon Chime Voice Connector.',
  operationId: 'GetVoiceConnectorOrigination',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVoiceConnectorOriginationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putVoiceConnectorsVoiceConnectorIdOriginationRoute = createRoute({
  method: 'put',
  path: '/voice-connectors/{voiceConnectorId}/origination',
  description:
    '<p>Adds origination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p> </note>',
  operationId: 'PutVoiceConnectorOrigination',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Origination: z
                .object({
                  Routes: OriginationRouteListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1. Maximum value of 20. This parameter is not required, but you must specify this parameter or <code>Disabled</code>.',
                      }),
                  ).exactOptional(),
                  Disabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'When origination settings are disabled, inbound calls are not enabled for your Amazon Chime Voice Connector. This parameter is not required, but you must specify this parameter or <code>Routes</code>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note>',
                  required: [],
                }),
            })
            .openapi({ required: ['Origination'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutVoiceConnectorOriginationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteVoiceConnectorsVoiceConnectorIdOriginationRoute = createRoute({
  method: 'delete',
  path: '/voice-connectors/{voiceConnectorId}/origination',
  description:
    '<p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.</p> </note>',
  operationId: 'DeleteVoiceConnectorOrigination',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy',
  description:
    'Gets the proxy configuration details for the specified Amazon Chime Voice Connector.',
  operationId: 'GetVoiceConnectorProxy',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime voice connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVoiceConnectorProxyResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute = createRoute({
  method: 'put',
  path: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy',
  description:
    'Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.',
  operationId: 'PutVoiceConnectorProxy',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime voice connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DefaultSessionExpiryMinutes: z
                .int()
                .openapi({
                  description: 'The default number of minutes allowed for proxy sessions.',
                }),
              PhoneNumberPoolCountries: z
                .array(CountrySchema)
                .min(1)
                .max(100)
                .openapi({
                  description: 'The countries for proxy phone numbers to be selected from.',
                }),
              FallBackPhoneNumber: z
                .string()
                .regex(/^\+?[1-9]\d{1,14}$/)
                .exactOptional()
                .openapi({
                  description: 'The phone number to route calls to after a proxy session expires.',
                }),
              Disabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.',
                }),
            })
            .openapi({ required: ['DefaultSessionExpiryMinutes', 'PhoneNumberPoolCountries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutVoiceConnectorProxyResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute = createRoute({
  method: 'delete',
  path: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy',
  description: 'Deletes the proxy configuration from the specified Amazon Chime Voice Connector.',
  operationId: 'DeleteVoiceConnectorProxy',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
  description:
    'Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.',
  operationId: 'GetVoiceConnectorStreamingConfiguration',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetVoiceConnectorStreamingConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute = createRoute({
  method: 'put',
  path: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
  description:
    'Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.',
  operationId: 'PutVoiceConnectorStreamingConfiguration',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              StreamingConfiguration: z
                .object({
                  DataRetentionInHours: DataRetentionInHoursSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The retention period, in hours, for the Amazon Kinesis data.',
                      }),
                  ).exactOptional(),
                  Disabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'When true, media streaming to Amazon Kinesis is turned off.',
                      }),
                  ).exactOptional(),
                  StreamingNotificationTargets: StreamingNotificationTargetListSchema.and(
                    z.any().openapi({ description: 'The streaming notification targets.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.',
                  required: [],
                }),
            })
            .openapi({ required: ['StreamingConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PutVoiceConnectorStreamingConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute = createRoute({
  method: 'delete',
  path: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
  description:
    'Deletes the streaming configuration for the specified Amazon Chime Voice Connector.',
  operationId: 'DeleteVoiceConnectorStreamingConfiguration',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdTerminationRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/termination',
  description:
    'Retrieves termination setting details for the specified Amazon Chime Voice Connector.',
  operationId: 'GetVoiceConnectorTermination',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVoiceConnectorTerminationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putVoiceConnectorsVoiceConnectorIdTerminationRoute = createRoute({
  method: 'put',
  path: '/voice-connectors/{voiceConnectorId}/termination',
  description:
    '<p>Adds termination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p> </note>',
  operationId: 'PutVoiceConnectorTermination',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Termination: z
                .object({
                  CpsLimit: CpsLimitSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The limit on calls per second. Max value based on account service quota. Default value of 1.',
                      }),
                  ).exactOptional(),
                  DefaultPhoneNumber: E164PhoneNumberSchema.and(
                    z.any().openapi({ description: 'The default caller ID phone number.' }),
                  ).exactOptional(),
                  CallingRegions: CallingRegionListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.',
                      }),
                  ).exactOptional(),
                  CidrAllowedList: StringListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The IP addresses allowed to make calls, in CIDR format. Required.',
                      }),
                  ).exactOptional(),
                  Disabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'When termination settings are disabled, outbound calls can not be made.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.',
                  required: [],
                }),
            })
            .openapi({ required: ['Termination'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutVoiceConnectorTerminationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const deleteVoiceConnectorsVoiceConnectorIdTerminationRoute = createRoute({
  method: 'delete',
  path: '/voice-connectors/{voiceConnectorId}/termination',
  description:
    '<p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.</p> </note>',
  operationId: 'DeleteVoiceConnectorTermination',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteRoute =
  createRoute({
    method: 'post',
    path: '/voice-connectors/{voiceConnectorId}/termination/credentials#operation=delete',
    description:
      'Deletes the specified SIP credentials used by your equipment to authenticate during call termination.',
    operationId: 'DeleteVoiceConnectorTerminationCredentials',
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
        voiceConnectorId: z
          .string()
          .regex(/.*\S.*/)
          .openapi({
            param: {
              name: 'voiceConnectorId',
              in: 'path',
              required: true,
              description: 'The Amazon Chime Voice Connector ID.',
              schema: { type: 'string', pattern: '.*\\S.*' },
            },
          }),
      }),
      query: z.object({
        operation: z
          .literal('delete')
          .openapi({
            param: {
              name: 'operation',
              in: 'query',
              required: true,
              schema: { type: 'string', enum: ['delete'] },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Usernames: z
                  .array(SensitiveStringSchema)
                  .openapi({
                    description:
                      'The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.',
                  }),
              })
              .openapi({ required: ['Usernames'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'UnauthorizedClientException',
        content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      483: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      484: {
        description: 'ThrottledClientException',
        content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'ServiceFailureException',
        content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
      },
    },
  })

export const getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnRoute =
  createRoute({
    method: 'get',
    path: '/channels/{channelArn}#scope=app-instance-user-membership&app-instance-user-arn',
    description:
      '<p> Returns the details of a channel based on the membership of the specified <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
    operationId: 'DescribeChannelMembershipForAppInstanceUser',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-chime-bearer': z
          .string()
          .regex(
            /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
          )
          .min(5)
          .max(1600)
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amz-chime-bearer',
              in: 'header',
              required: false,
              description:
                'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
              schema: {
                type: 'string',
                pattern:
                  'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
                minLength: 5,
                maxLength: 1600,
              },
            },
          }),
      }),
      params: z.object({
        channelArn: z
          .string()
          .regex(
            /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
          )
          .min(5)
          .max(1600)
          .openapi({
            param: {
              name: 'channelArn',
              in: 'path',
              required: true,
              description: 'The ARN of the channel to which the user belongs.',
              schema: {
                type: 'string',
                pattern:
                  'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
                minLength: 5,
                maxLength: 1600,
              },
            },
          }),
      }),
      query: z.object({
        'app-instance-user-arn': z
          .string()
          .regex(
            /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
          )
          .min(5)
          .max(1600)
          .openapi({
            param: {
              name: 'app-instance-user-arn',
              in: 'query',
              required: true,
              description: 'The ARN of the user in a channel.',
              schema: {
                type: 'string',
                pattern:
                  'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
                minLength: 5,
                maxLength: 1600,
              },
            },
          }),
        scope: z
          .literal('app-instance-user-membership')
          .openapi({
            param: {
              name: 'scope',
              in: 'query',
              required: true,
              schema: { type: 'string', enum: ['app-instance-user-membership'] },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeChannelMembershipForAppInstanceUserResponseSchema },
        },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedClientException',
        content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
      },
      483: {
        description: 'ThrottledClientException',
        content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
      },
      484: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      485: {
        description: 'ServiceFailureException',
        content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
      },
    },
  })

export const getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnRoute =
  createRoute({
    method: 'get',
    path: '/channels/{channelArn}#scope=app-instance-user-moderated-channel&app-instance-user-arn',
    description:
      '<p>Returns the full details of a channel moderated by the specified <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
    operationId: 'DescribeChannelModeratedByAppInstanceUser',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-chime-bearer': z
          .string()
          .regex(
            /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
          )
          .min(5)
          .max(1600)
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amz-chime-bearer',
              in: 'header',
              required: false,
              description:
                'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
              schema: {
                type: 'string',
                pattern:
                  'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
                minLength: 5,
                maxLength: 1600,
              },
            },
          }),
      }),
      params: z.object({
        channelArn: z
          .string()
          .regex(
            /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
          )
          .min(5)
          .max(1600)
          .openapi({
            param: {
              name: 'channelArn',
              in: 'path',
              required: true,
              description: 'The ARN of the moderated channel.',
              schema: {
                type: 'string',
                pattern:
                  'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
                minLength: 5,
                maxLength: 1600,
              },
            },
          }),
      }),
      query: z.object({
        'app-instance-user-arn': z
          .string()
          .regex(
            /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
          )
          .min(5)
          .max(1600)
          .openapi({
            param: {
              name: 'app-instance-user-arn',
              in: 'query',
              required: true,
              description: 'The ARN of the <code>AppInstanceUser</code> in the moderated channel.',
              schema: {
                type: 'string',
                pattern:
                  'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
                minLength: 5,
                maxLength: 1600,
              },
            },
          }),
        scope: z
          .literal('app-instance-user-moderated-channel')
          .openapi({
            param: {
              name: 'scope',
              in: 'query',
              required: true,
              schema: { type: 'string', enum: ['app-instance-user-moderated-channel'] },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeChannelModeratedByAppInstanceUserResponseSchema },
        },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedClientException',
        content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
      },
      483: {
        description: 'ThrottledClientException',
        content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
      },
      484: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      485: {
        description: 'ServiceFailureException',
        content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
      },
    },
  })

export const postAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users/{userId}#operation=disassociate-phone-number',
  description:
    'Disassociates the primary provisioned phone number from the specified Amazon Chime user.',
  operationId: 'DisassociatePhoneNumberFromUser',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The user ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('disassociate-phone-number')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['disassociate-phone-number'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociatePhoneNumberFromUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersRoute =
  createRoute({
    method: 'post',
    path: '/voice-connectors/{voiceConnectorId}#operation=disassociate-phone-numbers',
    description:
      'Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.',
    operationId: 'DisassociatePhoneNumbersFromVoiceConnector',
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
        voiceConnectorId: z
          .string()
          .regex(/.*\S.*/)
          .openapi({
            param: {
              name: 'voiceConnectorId',
              in: 'path',
              required: true,
              description: 'The Amazon Chime Voice Connector ID.',
              schema: { type: 'string', pattern: '.*\\S.*' },
            },
          }),
      }),
      query: z.object({
        operation: z
          .literal('disassociate-phone-numbers')
          .openapi({
            param: {
              name: 'operation',
              in: 'query',
              required: true,
              schema: { type: 'string', enum: ['disassociate-phone-numbers'] },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                E164PhoneNumbers: z
                  .array(E164PhoneNumberSchema)
                  .openapi({ description: 'List of phone numbers, in E.164 format.' }),
              })
              .openapi({ required: ['E164PhoneNumbers'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DisassociatePhoneNumbersFromVoiceConnectorResponseSchema },
        },
      },
      480: {
        description: 'UnauthorizedClientException',
        content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      483: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      484: {
        description: 'ThrottledClientException',
        content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'ServiceFailureException',
        content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
      },
    },
  })

export const postVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersRoute =
  createRoute({
    method: 'post',
    path: '/voice-connector-groups/{voiceConnectorGroupId}#operation=disassociate-phone-numbers',
    description:
      'Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.',
    operationId: 'DisassociatePhoneNumbersFromVoiceConnectorGroup',
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
        voiceConnectorGroupId: z
          .string()
          .regex(/.*\S.*/)
          .openapi({
            param: {
              name: 'voiceConnectorGroupId',
              in: 'path',
              required: true,
              description: 'The Amazon Chime Voice Connector group ID.',
              schema: { type: 'string', pattern: '.*\\S.*' },
            },
          }),
      }),
      query: z.object({
        operation: z
          .literal('disassociate-phone-numbers')
          .openapi({
            param: {
              name: 'operation',
              in: 'query',
              required: true,
              schema: { type: 'string', enum: ['disassociate-phone-numbers'] },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                E164PhoneNumbers: z
                  .array(E164PhoneNumberSchema)
                  .openapi({ description: 'List of phone numbers, in E.164 format.' }),
              })
              .openapi({ required: ['E164PhoneNumbers'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DisassociatePhoneNumbersFromVoiceConnectorGroupResponseSchema,
          },
        },
      },
      480: {
        description: 'UnauthorizedClientException',
        content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      483: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      484: {
        description: 'ThrottledClientException',
        content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'ServiceFailureException',
        content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
      },
    },
  })

export const postAccountsAccountIdOperationDisassociateSigninDelegateGroupsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}#operation=disassociate-signin-delegate-groups',
  description:
    'Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.',
  operationId: 'DisassociateSigninDelegateGroupsFromAccount',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('disassociate-signin-delegate-groups')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['disassociate-signin-delegate-groups'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GroupNames: z
                .array(StringSchema)
                .min(1)
                .openapi({ description: 'The sign-in delegate group names.' }),
            })
            .openapi({ required: ['GroupNames'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateSigninDelegateGroupsFromAccountResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdSettingsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/settings',
  description:
    'Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dialout settings. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. ',
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
    }),
    params: z.object({
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putAccountsAccountIdSettingsRoute = createRoute({
  method: 'put',
  path: '/accounts/{accountId}/settings',
  description:
    'Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.',
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
    }),
    params: z.object({
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AccountSettings: z
                .object({
                  DisableRemoteControl: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Setting that stops or starts remote control of shared screens during meetings.',
                      }),
                  ).exactOptional(),
                  EnableDialOut: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Setting that allows meeting participants to choose the <b>Call me at a phone number</b> option. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html">Join a Meeting without the Amazon Chime App</a>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.',
                  required: [],
                }),
            })
            .openapi({ required: ['AccountSettings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAccountSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAppInstancesAppInstanceArnRetentionSettingsRoute = createRoute({
  method: 'get',
  path: '/app-instances/{appInstanceArn}/retention-settings',
  description: 'Gets the retention settings for an <code>AppInstance</code>.',
  operationId: 'GetAppInstanceRetentionSettings',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAppInstanceRetentionSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putAppInstancesAppInstanceArnRetentionSettingsRoute = createRoute({
  method: 'put',
  path: '/app-instances/{appInstanceArn}/retention-settings',
  description:
    'Sets the amount of time in days that a given <code>AppInstance</code> retains data.',
  operationId: 'PutAppInstanceRetentionSettings',
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
      appInstanceArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'appInstanceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AppInstanceRetentionSettings: z
                .object({
                  ChannelRetentionSettings: ChannelRetentionSettingsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The length of time in days to retain the messages in a channel.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The details of the data-retention settings for an <code>AppInstance</code>.',
                  required: [],
                }),
            })
            .openapi({ required: ['AppInstanceRetentionSettings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAppInstanceRetentionSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdBotsBotIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/bots/{botId}',
  description:
    'Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.',
  operationId: 'GetBot',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      botId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The bot ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBotResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    486: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdBotsBotIdRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/bots/{botId}',
  description:
    'Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.',
  operationId: 'UpdateBot',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      botId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The bot ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Disabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'When true, stops the specified bot from running in your account.',
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
      content: { 'application/json': { schema: UpdateBotResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
  },
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/settings',
  description:
    "Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.",
  operationId: 'GetGlobalSettings',
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
      content: { 'application/json': { schema: GetGlobalSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putSettingsRoute = createRoute({
  method: 'put',
  path: '/settings',
  description:
    "Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.",
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
              BusinessCalling: z
                .object({
                  CdrBucket: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon S3 bucket designated for call detail record storage.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.",
                  required: [],
                }),
              VoiceConnector: z
                .object({
                  CdrBucket: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon S3 bucket designated for call detail record storage.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.',
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
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getEndpointsMessagingSessionRoute = createRoute({
  method: 'get',
  path: '/endpoints/messaging-session',
  description: 'The details of the endpoint for the messaging session.',
  operationId: 'GetMessagingSessionEndpoint',
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
      content: { 'application/json': { schema: GetMessagingSessionEndpointResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getPhoneNumberOrdersPhoneNumberOrderIdRoute = createRoute({
  method: 'get',
  path: '/phone-number-orders/{phoneNumberOrderId}',
  description:
    'Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status.',
  operationId: 'GetPhoneNumberOrder',
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
      phoneNumberOrderId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'phoneNumberOrderId',
            in: 'path',
            required: true,
            description: 'The ID for the phone number order.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPhoneNumberOrderResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getSettingsPhoneNumberRoute = createRoute({
  method: 'get',
  path: '/settings/phone-number',
  description:
    "Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.",
  operationId: 'GetPhoneNumberSettings',
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
      content: { 'application/json': { schema: GetPhoneNumberSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putSettingsPhoneNumberRoute = createRoute({
  method: 'put',
  path: '/settings/phone-number',
  description:
    "Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.",
  operationId: 'UpdatePhoneNumberSettings',
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
              CallingName: z
                .string()
                .regex(/^$|^[a-zA-Z0-9 ]{2,15}$/)
                .openapi({ description: 'The default outbound calling name for the account.' }),
            })
            .openapi({ required: ['CallingName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdRetentionSettingsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/retention-settings',
  description:
    ' Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>. ',
  operationId: 'GetRetentionSettings',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRetentionSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putAccountsAccountIdRetentionSettingsRoute = createRoute({
  method: 'put',
  path: '/accounts/{accountId}/retention-settings',
  description:
    '<p> Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p> To turn off existing retention settings, remove the number of days from the corresponding <b>RetentionDays</b> field in the <b>RetentionSettings</b> object. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.</p>',
  operationId: 'PutRetentionSettings',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              RetentionSettings: z
                .object({
                  RoomRetentionSettings: RoomRetentionSettingsSchema.and(
                    z.any().openapi({ description: 'The chat room retention settings.' }),
                  ).exactOptional(),
                  ConversationRetentionSettings: ConversationRetentionSettingsSchema.and(
                    z.any().openapi({ description: 'The chat conversation retention settings.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.',
                  required: [],
                }),
            })
            .openapi({ required: ['RetentionSettings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: PutRetentionSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute = createRoute({
  method: 'get',
  path: '/sip-media-applications/{sipMediaApplicationId}/logging-configuration',
  description: 'Returns the logging configuration for the specified SIP media application.',
  operationId: 'GetSipMediaApplicationLoggingConfiguration',
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
      sipMediaApplicationId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipMediaApplicationId',
            in: 'path',
            required: true,
            description: 'The SIP media application ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetSipMediaApplicationLoggingConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute = createRoute({
  method: 'put',
  path: '/sip-media-applications/{sipMediaApplicationId}/logging-configuration',
  description: 'Updates the logging configuration for the specified SIP media application.',
  operationId: 'PutSipMediaApplicationLoggingConfiguration',
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
      sipMediaApplicationId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipMediaApplicationId',
            in: 'path',
            required: true,
            description: 'The SIP media application ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SipMediaApplicationLoggingConfiguration: z
                .object({
                  EnableSipMediaApplicationMessageLogs: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Enables application message logs for the SIP media application.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Logging configuration of the SIP media application.',
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
      content: {
        'application/json': { schema: PutSipMediaApplicationLoggingConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/users/{userId}',
  description:
    '<p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p> <p> To retrieve user details with an email address instead of a user ID, use the <a>ListUsers</a> action, and then filter by email address. </p>',
  operationId: 'GetUser',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      userId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The user ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdUsersUserIdRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users/{userId}',
  description:
    'Updates user details for a specified user ID. Currently, only <code>LicenseType</code> updates are supported for this action.',
  operationId: 'UpdateUser',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      userId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The user ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LicenseType: z
                .enum(['Basic', 'Plus', 'Pro', 'ProTrial'])
                .exactOptional()
                .openapi({
                  description:
                    'The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to.',
                }),
              UserType: z
                .enum(['PrivateUser', 'SharedDevice'])
                .exactOptional()
                .openapi({ description: 'The user type.' }),
              AlexaForBusinessMetadata: z
                .object({
                  IsAlexaForBusinessEnabled: BooleanSchema.and(
                    z.any().openapi({ description: 'Starts or stops Alexa for Business.' }),
                  ).exactOptional(),
                  AlexaForBusinessRoomArn: SensitiveStringSchema.and(
                    z.any().openapi({ description: 'The ARN of the room resource.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.',
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
      content: { 'application/json': { schema: UpdateUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAccountsAccountIdUsersUserIdSettingsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/users/{userId}/settings',
  description:
    'Retrieves settings for the specified user ID, such as any associated phone number settings.',
  operationId: 'GetUserSettings',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The user ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUserSettingsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putAccountsAccountIdUsersUserIdSettingsRoute = createRoute({
  method: 'put',
  path: '/accounts/{accountId}/users/{userId}/settings',
  description: 'Updates the settings for the specified user, such as phone number settings.',
  operationId: 'UpdateUserSettings',
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
      accountId: z
        .string()
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The user ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UserSettings: z
                .object({
                  Telephony: TelephonySettingsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The telephony settings associated with the user.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.',
                  required: [],
                }),
            })
            .openapi({ required: ['UserSettings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/logging-configuration',
  description:
    'Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.',
  operationId: 'GetVoiceConnectorLoggingConfiguration',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetVoiceConnectorLoggingConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute = createRoute({
  method: 'put',
  path: '/voice-connectors/{voiceConnectorId}/logging-configuration',
  description:
    'Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.',
  operationId: 'PutVoiceConnectorLoggingConfiguration',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LoggingConfiguration: z
                .object({
                  EnableSIPLogs: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Boolean that enables SIP message logs to Amazon CloudWatch logs.',
                      }),
                  ).exactOptional(),
                  EnableMediaMetricLogs: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Boolean that enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.',
                  required: [],
                }),
            })
            .openapi({ required: ['LoggingConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PutVoiceConnectorLoggingConfigurationResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdTerminationHealthRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/termination/health',
  description:
    'Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.',
  operationId: 'GetVoiceConnectorTerminationHealth',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVoiceConnectorTerminationHealthResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdUsersOperationAddRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users#operation=add',
  description:
    'Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime <code>Team</code> account. Only <code>Team</code> account types are currently supported for this action.',
  operationId: 'InviteUsers',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('add')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['add'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              UserEmailList: z
                .array(EmailAddressSchema)
                .max(50)
                .openapi({
                  description: 'The user email addresses to which to send the email invitation.',
                }),
              UserType: z
                .enum(['PrivateUser', 'SharedDevice'])
                .exactOptional()
                .openapi({ description: 'The user type.' }),
            })
            .openapi({ required: ['UserEmailList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: InviteUsersResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getAppInstanceUsersAppInstanceArnRoute = createRoute({
  method: 'get',
  path: '/app-instance-users#app-instance-arn',
  description:
    'List all <code>AppInstanceUsers</code> created under a single <code>AppInstance</code>. ',
  operationId: 'ListAppInstanceUsers',
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
      'app-instance-arn': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'app-instance-arn',
            in: 'query',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of requests that you want returned.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token passed by previous API calls until all requested users are returned.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      content: { 'application/json': { schema: ListAppInstanceUsersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getMeetingsMeetingIdAttendeesAttendeeIdTagsRoute = createRoute({
  method: 'get',
  path: '/meetings/{meetingId}/attendees/{attendeeId}/tags',
  description: 'Lists the tags applied to an Amazon Chime SDK attendee resource.',
  operationId: 'ListAttendeeTags',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
      attendeeId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK attendee ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAttendeeTagsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsScopeAppInstanceUserMembershipsRoute = createRoute({
  method: 'get',
  path: '/channels#scope=app-instance-user-memberships',
  description:
    '<p> Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'ListChannelMembershipsForAppInstanceUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      'app-instance-user-arn': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'app-instance-user-arn',
            in: 'query',
            required: false,
            description: 'The ARN of the <code>AppInstanceUser</code>s',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of users that you want returned.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token returned from previous API requests until the number of channel memberships is reached.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      scope: z
        .literal('app-instance-user-memberships')
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['app-instance-user-memberships'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListChannelMembershipsForAppInstanceUserResponseSchema },
      },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsChannelArnMessagesRoute = createRoute({
  method: 'get',
  path: '/channels/{channelArn}/messages',
  description:
    '<p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>. By default, sorted by creation timestamp in descending order.</p> <note> <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message.</p> <p>Also, the x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'ListChannelMessages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      'sort-order': z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort-order',
            in: 'query',
            required: false,
            description:
              'The order in which you want messages sorted. Default is Descending, based on time created.',
            schema: { type: 'string', enum: ['ASCENDING', 'DESCENDING'] },
          },
        }),
      'not-before': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'not-before',
            in: 'query',
            required: false,
            description: 'The initial or starting time stamp for your requested messages.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      'not-after': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'not-after',
            in: 'query',
            required: false,
            description: 'The final or ending time stamp for your requested messages.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of messages that you want returned.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token passed by previous API calls until all requested messages are returned.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      content: { 'application/json': { schema: ListChannelMessagesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postChannelsChannelArnMessagesRoute = createRoute({
  method: 'post',
  path: '/channels/{channelArn}/messages',
  description:
    '<p>Sends a message to a particular channel that the member is a part of.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata. <code>CONTROL</code> messages can contain 30 bytes of data and no metadata.</p> </note>',
  operationId: 'SendChannelMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Content: z
                .string()
                .regex(/[\s\S]*/)
                .min(1)
                .openapi({ description: 'The content of the message.' }),
              Type: z
                .enum(['STANDARD', 'CONTROL'])
                .openapi({
                  description:
                    'The type of message, <code>STANDARD</code> or <code>CONTROL</code>.',
                }),
              Persistence: z
                .enum(['PERSISTENT', 'NON_PERSISTENT'])
                .openapi({
                  description:
                    'Boolean that controls whether the message is persisted on the back end. Required.',
                }),
              Metadata: z
                .string()
                .regex(/.*/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The optional metadata for each message.' }),
              ClientRequestToken: z
                .string()
                .regex(/[-_a-zA-Z0-9]*/)
                .min(2)
                .max(64)
                .openapi({
                  description: 'The <code>Idempotency</code> token for each client request.',
                }),
            })
            .openapi({ required: ['Content', 'Type', 'Persistence', 'ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: SendChannelMessageResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsAppInstanceArnRoute = createRoute({
  method: 'get',
  path: '/channels#app-instance-arn',
  description:
    '<p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p> <p class="title"> <b>Functionality &amp; restrictions</b> </p> <ul> <li> <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p> </li> <li> <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the private channels in an account.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'ListChannels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      'app-instance-arn': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'app-instance-arn',
            in: 'query',
            required: true,
            description: 'The ARN of the <code>AppInstance</code>.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      privacy: z
        .enum(['PUBLIC', 'PRIVATE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'privacy',
            in: 'query',
            required: false,
            description:
              'The privacy setting. <code>PUBLIC</code> retrieves all the public channels. <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code> can retrieve private channels. ',
            schema: { type: 'string', enum: ['PUBLIC', 'PRIVATE'] },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of channels that you want to return.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token passed by previous API calls until all requested channels are returned.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      content: { 'application/json': { schema: ListChannelsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getChannelsScopeAppInstanceUserModeratedChannelsRoute = createRoute({
  method: 'get',
  path: '/channels#scope=app-instance-user-moderated-channels',
  description:
    '<p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'ListChannelsModeratedByAppInstanceUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      'app-instance-user-arn': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'app-instance-user-arn',
            in: 'query',
            required: false,
            description: 'The ARN of the user in the moderated channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of channels in the request.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      'next-token': z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description:
              'The token returned from previous API requests until the number of channels moderated by the user is reached.',
            schema: {
              type: 'string',
              pattern: '.*',
              minLength: 0,
              maxLength: 2048,
              format: 'password',
            },
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
      scope: z
        .literal('app-instance-user-moderated-channels')
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['app-instance-user-moderated-channels'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListChannelsModeratedByAppInstanceUserResponseSchema },
      },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getMeetingsMeetingIdTagsRoute = createRoute({
  method: 'get',
  path: '/meetings/{meetingId}/tags',
  description: 'Lists the tags applied to an Amazon Chime SDK meeting resource.',
  operationId: 'ListMeetingTags',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMeetingTagsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getPhoneNumbersRoute = createRoute({
  method: 'get',
  path: '/phone-numbers',
  description:
    'Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.',
  operationId: 'ListPhoneNumbers',
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
      status: z
        .enum([
          'AcquireInProgress',
          'AcquireFailed',
          'Unassigned',
          'Assigned',
          'ReleaseInProgress',
          'DeleteInProgress',
          'ReleaseFailed',
          'DeleteFailed',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description: 'The phone number status.',
            schema: {
              type: 'string',
              enum: [
                'AcquireInProgress',
                'AcquireFailed',
                'Unassigned',
                'Assigned',
                'ReleaseInProgress',
                'DeleteInProgress',
                'ReleaseFailed',
                'DeleteFailed',
              ],
            },
          },
        }),
      'product-type': z
        .enum(['BusinessCalling', 'VoiceConnector', 'SipMediaApplicationDialIn'])
        .exactOptional()
        .openapi({
          param: {
            name: 'product-type',
            in: 'query',
            required: false,
            description: 'The phone number product type.',
            schema: {
              type: 'string',
              enum: ['BusinessCalling', 'VoiceConnector', 'SipMediaApplicationDialIn'],
            },
          },
        }),
      'filter-name': z
        .enum(['AccountId', 'UserId', 'VoiceConnectorId', 'VoiceConnectorGroupId', 'SipRuleId'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter-name',
            in: 'query',
            required: false,
            description: 'The filter to use to limit the number of results.',
            schema: {
              type: 'string',
              enum: [
                'AccountId',
                'UserId',
                'VoiceConnectorId',
                'VoiceConnectorGroupId',
                'SipRuleId',
              ],
            },
          },
        }),
      'filter-value': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter-value',
            in: 'query',
            required: false,
            description: 'The value to use for the filter.',
            schema: { type: 'string' },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 99 },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token to use to retrieve the next page of results.',
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
      content: { 'application/json': { schema: ListPhoneNumbersResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getPhoneNumberCountriesProductTypeRoute = createRoute({
  method: 'get',
  path: '/phone-number-countries#product-type',
  description: 'Lists supported phone number countries.',
  operationId: 'ListSupportedPhoneNumberCountries',
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
      'product-type': z
        .enum(['BusinessCalling', 'VoiceConnector', 'SipMediaApplicationDialIn'])
        .openapi({
          param: {
            name: 'product-type',
            in: 'query',
            required: true,
            description: 'The phone number product type.',
            schema: {
              type: 'string',
              enum: ['BusinessCalling', 'VoiceConnector', 'SipMediaApplicationDialIn'],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSupportedPhoneNumberCountriesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getTagsArnRoute = createRoute({
  method: 'get',
  path: '/tags#arn',
  description: 'Lists the tags applied to an Amazon Chime SDK meeting resource.',
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
    query: z.object({
      arn: z
        .string()
        .regex(/^arn[\/\:\-\_\.a-zA-Z0-9]+$/)
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'arn',
            in: 'query',
            required: true,
            description: 'The resource ARN.',
            schema: {
              type: 'string',
              pattern: '^arn[\\/\\:\\-\\_\\.a-zA-Z0-9]+$',
              minLength: 1,
              maxLength: 1024,
              format: 'password',
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getVoiceConnectorsVoiceConnectorIdTerminationCredentialsRoute = createRoute({
  method: 'get',
  path: '/voice-connectors/{voiceConnectorId}/termination/credentials',
  description: 'Lists the SIP credentials for the specified Amazon Chime Voice Connector.',
  operationId: 'ListVoiceConnectorTerminationCredentials',
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
      voiceConnectorId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'voiceConnectorId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime Voice Connector ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListVoiceConnectorTerminationCredentialsResponseSchema },
      },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdUsersUserIdOperationLogoutRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users/{userId}#operation=logout',
  description:
    'Logs out the specified user from all of the devices they are currently logged into.',
  operationId: 'LogoutUser',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      userId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The user ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('logout')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['logout'] },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: LogoutUserResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutRoute =
  createRoute({
    method: 'post',
    path: '/voice-connectors/{voiceConnectorId}/termination/credentials#operation=put',
    description: 'Adds termination SIP credentials for the specified Amazon Chime Voice Connector.',
    operationId: 'PutVoiceConnectorTerminationCredentials',
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
        voiceConnectorId: z
          .string()
          .regex(/.*\S.*/)
          .openapi({
            param: {
              name: 'voiceConnectorId',
              in: 'path',
              required: true,
              description: 'The Amazon Chime Voice Connector ID.',
              schema: { type: 'string', pattern: '.*\\S.*' },
            },
          }),
      }),
      query: z.object({
        operation: z
          .literal('put')
          .openapi({
            param: {
              name: 'operation',
              in: 'query',
              required: true,
              schema: { type: 'string', enum: ['put'] },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Credentials: z
                  .array(CredentialSchema)
                  .exactOptional()
                  .openapi({ description: 'The termination SIP credentials.' }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'UnauthorizedClientException',
        content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      483: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      484: {
        description: 'ThrottledClientException',
        content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'ServiceFailureException',
        content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
      },
    },
  })

export const postChannelsChannelArnMessagesMessageIdOperationRedactRoute = createRoute({
  method: 'post',
  path: '/channels/{channelArn}/messages/{messageId}#operation=redact',
  description:
    '<p>Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'RedactChannelMessage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel containing the messages that you want to redact.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
      messageId: z
        .string()
        .regex(/[-_a-zA-Z0-9]*/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'The ID of the message being redacted.',
            schema: { type: 'string', pattern: '[-_a-zA-Z0-9]*', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('redact')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['redact'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RedactChannelMessageResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactRoute =
  createRoute({
    method: 'post',
    path: '/accounts/{accountId}/conversations/{conversationId}/messages/{messageId}#operation=redact',
    description: 'Redacts the specified message from the specified Amazon Chime conversation.',
    operationId: 'RedactConversationMessage',
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
        accountId: z
          .string()
          .regex(/.*\S.*/)
          .openapi({
            param: {
              name: 'accountId',
              in: 'path',
              required: true,
              description: 'The Amazon Chime account ID.',
              schema: { type: 'string', pattern: '.*\\S.*' },
            },
          }),
        conversationId: z
          .string()
          .regex(/.*\S.*/)
          .openapi({
            param: {
              name: 'conversationId',
              in: 'path',
              required: true,
              description: 'The conversation ID.',
              schema: { type: 'string', pattern: '.*\\S.*' },
            },
          }),
        messageId: z
          .string()
          .regex(/.*\S.*/)
          .openapi({
            param: {
              name: 'messageId',
              in: 'path',
              required: true,
              description: 'The message ID.',
              schema: { type: 'string', pattern: '.*\\S.*' },
            },
          }),
      }),
      query: z.object({
        operation: z
          .literal('redact')
          .openapi({
            param: {
              name: 'operation',
              in: 'query',
              required: true,
              schema: { type: 'string', enum: ['redact'] },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: RedactConversationMessageResponseSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedClientException',
        content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
      },
      483: {
        description: 'ThrottledClientException',
        content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
      },
      484: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'ServiceFailureException',
        content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
      },
    },
  })

export const postAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/rooms/{roomId}/messages/{messageId}#operation=redact',
  description: 'Redacts the specified message from the specified Amazon Chime channel.',
  operationId: 'RedactRoomMessage',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      roomId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      messageId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'The message ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('redact')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['redact'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RedactRoomMessageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/bots/{botId}#operation=regenerate-security-token',
  description: 'Regenerates the security token for a bot.',
  operationId: 'RegenerateSecurityToken',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      botId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The bot ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('regenerate-security-token')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['regenerate-security-token'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegenerateSecurityTokenResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
  },
})

export const postAccountsAccountIdUsersUserIdOperationResetPersonalPinRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/users/{userId}#operation=reset-personal-pin',
  description:
    'Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the <a>User</a> object with the updated personal meeting PIN.',
  operationId: 'ResetPersonalPIN',
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
      accountId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime account ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      userId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The user ID.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('reset-personal-pin')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['reset-personal-pin'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResetPersonalPINResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postPhoneNumbersPhoneNumberIdOperationRestoreRoute = createRoute({
  method: 'post',
  path: '/phone-numbers/{phoneNumberId}#operation=restore',
  description:
    'Moves a phone number from the <b>Deletion queue</b> back into the phone number <b>Inventory</b>.',
  operationId: 'RestorePhoneNumber',
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
      phoneNumberId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'phoneNumberId',
            in: 'path',
            required: true,
            description: 'The phone number.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('restore')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['restore'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestorePhoneNumberResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const getSearchTypePhoneNumbersRoute = createRoute({
  method: 'get',
  path: '/search#type=phone-numbers',
  description:
    'Searches for phone numbers that can be ordered. For US numbers, provide at least one of the following search filters: <code>AreaCode</code>, <code>City</code>, <code>State</code>, or <code>TollFreePrefix</code>. If you provide <code>City</code>, you must also provide <code>State</code>. Numbers outside the US only support the <code>PhoneNumberType</code> filter, which you must use.',
  operationId: 'SearchAvailablePhoneNumbers',
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
      'area-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'area-code',
            in: 'query',
            required: false,
            description: 'The area code used to filter results. Only applies to the US.',
            schema: { type: 'string' },
          },
        }),
      city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'city',
            in: 'query',
            required: false,
            description: 'The city used to filter results. Only applies to the US.',
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .regex(/[A-Z]{2}/)
        .exactOptional()
        .openapi({
          param: {
            name: 'country',
            in: 'query',
            required: false,
            description:
              'The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.',
            schema: { type: 'string', pattern: '[A-Z]{2}' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            description:
              'The state used to filter results. Required only if you provide <code>City</code>. Only applies to the US.',
            schema: { type: 'string' },
          },
        }),
      'toll-free-prefix': z
        .string()
        .regex(/^8(00|33|44|55|66|77|88)$/)
        .length(3)
        .exactOptional()
        .openapi({
          param: {
            name: 'toll-free-prefix',
            in: 'query',
            required: false,
            description:
              'The toll-free prefix that you use to filter results. Only applies to the US.',
            schema: {
              type: 'string',
              pattern: '^8(00|33|44|55|66|77|88)$',
              minLength: 3,
              maxLength: 3,
            },
          },
        }),
      'phone-number-type': z
        .enum(['Local', 'TollFree'])
        .exactOptional()
        .openapi({
          param: {
            name: 'phone-number-type',
            in: 'query',
            required: false,
            description:
              'The phone number type used to filter results. Required for non-US numbers.',
            schema: { type: 'string', enum: ['Local', 'TollFree'] },
          },
        }),
      'max-results': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max-results',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      'next-token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next-token',
            in: 'query',
            required: false,
            description: 'The token used to retrieve the next page of results.',
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
      type: z
        .literal('phone-numbers')
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['phone-numbers'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchAvailablePhoneNumbersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdTranscriptionOperationStartRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/transcription#operation=start',
  description:
    '<p>Starts transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html"> Using Amazon Chime SDK live transcription </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <p>If you specify an invalid configuration, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> <important> <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.</p> </important>',
  operationId: 'StartMeetingTranscription',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The unique ID of the meeting being transcribed.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('start')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['start'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TranscriptionConfiguration: z
                .object({
                  EngineTranscribeSettings: EngineTranscribeSettingsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The transcription configuration settings passed to Amazon Transcribe.',
                      }),
                  ).exactOptional(),
                  EngineTranscribeMedicalSettings: EngineTranscribeMedicalSettingsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The transcription configuration settings passed to Amazon Transcribe Medical.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.',
                  required: [],
                }),
            })
            .openapi({ required: ['TranscriptionConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartMeetingTranscriptionResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    488: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdTranscriptionOperationStopRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/transcription#operation=stop',
  description: 'Stops transcription for the specified <code>meetingId</code>.',
  operationId: 'StopMeetingTranscription',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The unique ID of the meeting for which you stop transcription.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('stop')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['stop'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopMeetingTranscriptionResponseSchema } },
    },
    480: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/attendees/{attendeeId}/tags#operation=add',
  description: 'Applies the specified tags to the specified Amazon Chime SDK attendee.',
  operationId: 'TagAttendee',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
      attendeeId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK attendee ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('add')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['add'] },
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
                .min(1)
                .max(10)
                .openapi({ description: 'The tag key-value pairs.' }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdTagsOperationAddRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/tags#operation=add',
  description: 'Applies the specified tags to the specified Amazon Chime SDK meeting.',
  operationId: 'TagMeeting',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('add')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['add'] },
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
                .min(1)
                .max(50)
                .openapi({ description: 'The tag key-value pairs.' }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postTagsOperationTagResourceRoute = createRoute({
  method: 'post',
  path: '/tags#operation=tag-resource',
  description: 'Applies the specified tags to the specified Amazon Chime SDK meeting resource.',
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
    query: z.object({
      operation: z
        .literal('tag-resource')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['tag-resource'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceARN: z
                .string()
                .regex(/^arn[\/\:\-\_\.a-zA-Z0-9]+$/)
                .min(1)
                .max(1024)
                .openapi({ description: 'The resource ARN.' }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'The tag key-value pairs.' }),
            })
            .openapi({ required: ['ResourceARN', 'Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/attendees/{attendeeId}/tags#operation=delete',
  description: 'Untags the specified tags from the specified Amazon Chime SDK attendee.',
  operationId: 'UntagAttendee',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
      attendeeId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK attendee ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('delete')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['delete'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TagKeys: z
                .array(TagKeySchema)
                .min(1)
                .max(10)
                .openapi({ description: 'The tag keys.' }),
            })
            .openapi({ required: ['TagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postMeetingsMeetingIdTagsOperationDeleteRoute = createRoute({
  method: 'post',
  path: '/meetings/{meetingId}/tags#operation=delete',
  description: 'Untags the specified tags from the specified Amazon Chime SDK meeting.',
  operationId: 'UntagMeeting',
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
      meetingId: z
        .string()
        .regex(/[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'meetingId',
            in: 'path',
            required: true,
            description: 'The Amazon Chime SDK meeting ID.',
            schema: {
              type: 'string',
              pattern: '[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      operation: z
        .literal('delete')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['delete'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TagKeys: z
                .array(TagKeySchema)
                .min(1)
                .max(50)
                .openapi({ description: 'The tag keys.' }),
            })
            .openapi({ required: ['TagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postTagsOperationUntagResourceRoute = createRoute({
  method: 'post',
  path: '/tags#operation=untag-resource',
  description: 'Untags the specified tags from the specified Amazon Chime SDK meeting resource.',
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
    query: z.object({
      operation: z
        .literal('untag-resource')
        .openapi({
          param: {
            name: 'operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['untag-resource'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceARN: z
                .string()
                .regex(/^arn[\/\:\-\_\.a-zA-Z0-9]+$/)
                .min(1)
                .max(1024)
                .openapi({ description: 'The resource ARN.' }),
              TagKeys: z
                .array(TagKeySchema)
                .min(1)
                .max(50)
                .openapi({ description: 'The tag keys.' }),
            })
            .openapi({ required: ['ResourceARN', 'TagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const putChannelsChannelArnReadMarkerRoute = createRoute({
  method: 'put',
  path: '/channels/{channelArn}/readMarker',
  description:
    '<p>The details of the time when a user last read messages in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>',
  operationId: 'UpdateChannelReadMarker',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-chime-bearer': z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-chime-bearer',
            in: 'header',
            required: false,
            description: 'The <code>AppInstanceUserArn</code> of the user that makes the API call.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
    params: z.object({
      channelArn: z
        .string()
        .regex(
          /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
        )
        .min(5)
        .max(1600)
        .openapi({
          param: {
            name: 'channelArn',
            in: 'path',
            required: true,
            description: 'The ARN of the channel.',
            schema: {
              type: 'string',
              pattern:
                'arn:[a-z0-9-\\.]{1,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[^/].{0,1023}',
              minLength: 5,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateChannelReadMarkerResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdRoute = createRoute({
  method: 'post',
  path: '/sip-media-applications/{sipMediaApplicationId}/calls/{transactionId}',
  description:
    'Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.',
  operationId: 'UpdateSipMediaApplicationCall',
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
      sipMediaApplicationId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'sipMediaApplicationId',
            in: 'path',
            required: true,
            description: 'The ID of the SIP media application handling the call.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
      transactionId: z
        .string()
        .regex(/.*\S.*/)
        .openapi({
          param: {
            name: 'transactionId',
            in: 'path',
            required: true,
            description: 'The ID of the call transaction.',
            schema: { type: 'string', pattern: '.*\\S.*' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Arguments: z
                .record(z.string(), SensitiveStringSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 20)
                .openapi({
                  description:
                    'Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.',
                }),
            })
            .openapi({ required: ['Arguments'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSipMediaApplicationCallResponseSchema } },
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
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})

export const postEmergencyCallingAddressRoute = createRoute({
  method: 'post',
  path: '/emergency-calling/address',
  description:
    'Validates an address to be used for 911 calls made with Amazon Chime Voice Connectors. You can use validated addresses in a Presence Information Data Format Location Object file that you include in SIP requests. That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.',
  operationId: 'ValidateE911Address',
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
              AwsAccountId: z
                .string()
                .regex(/.*\S.*/)
                .openapi({ description: 'The AWS account ID.' }),
              StreetNumber: z
                .string()
                .regex(/.*\S.*/)
                .openapi({
                  description:
                    'The address street number, such as <code>200</code> or <code>2121</code>.',
                }),
              StreetInfo: z
                .string()
                .regex(/.*\S.*/)
                .openapi({
                  description: 'The address street information, such as <code>8th Avenue</code>.',
                }),
              City: z
                .string()
                .regex(/.*\S.*/)
                .openapi({ description: 'The address city, such as <code>Portland</code>.' }),
              State: z
                .string()
                .regex(/.*\S.*/)
                .openapi({ description: 'The address state, such as <code>ME</code>.' }),
              Country: z
                .string()
                .regex(/.*\S.*/)
                .openapi({ description: 'The address country, such as <code>US</code>. ' }),
              PostalCode: z
                .string()
                .regex(/.*\S.*/)
                .openapi({ description: 'The address postal code, such as <code>04352</code>.' }),
            })
            .openapi({
              required: [
                'AwsAccountId',
                'StreetNumber',
                'StreetInfo',
                'City',
                'State',
                'Country',
                'PostalCode',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: ValidateE911AddressResponseSchema } },
    },
    480: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'ThrottledClientException',
      content: { 'application/json': { schema: ThrottledClientExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ServiceFailureException',
      content: { 'application/json': { schema: ServiceFailureExceptionSchema } },
    },
  },
})
