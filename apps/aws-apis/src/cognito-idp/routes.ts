import { createRoute, z } from '@hono/zod-openapi'

const UserPoolIdTypeSchema = z
  .string()
  .regex(/[\w-]+_[0-9a-zA-Z]+/)
  .min(1)
  .max(55)
  .openapi('UserPoolIdType')

const ClientIdTypeSchema = z
  .string()
  .regex(/[\w+]+/)
  .min(1)
  .max(128)
  .openapi('ClientIdType')

const EventFilterTypeSchema = z
  .enum(['SIGN_IN', 'PASSWORD_CHANGE', 'SIGN_UP'])
  .openapi('EventFilterType')

const EventFiltersTypeSchema = z.array(EventFilterTypeSchema).openapi('EventFiltersType')

const CompromisedCredentialsEventActionTypeSchema = z
  .enum(['BLOCK', 'NO_ACTION'])
  .openapi('CompromisedCredentialsEventActionType')

const CompromisedCredentialsActionsTypeSchema = z
  .object({
    EventAction: CompromisedCredentialsEventActionTypeSchema.and(
      z.any().openapi({ description: 'The event action.' }),
    ),
  })
  .openapi({ required: ['EventAction'], description: 'The compromised credentials actions type.' })
  .openapi('CompromisedCredentialsActionsType')

const CompromisedCredentialsRiskConfigurationTypeSchema = z
  .object({
    EventFilter: EventFiltersTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Perform the action for these events. The default is to perform all events if no event filter is specified.',
        }),
    ).exactOptional(),
    Actions: CompromisedCredentialsActionsTypeSchema.and(
      z.any().openapi({ description: 'The compromised credentials risk configuration actions.' }),
    ),
  })
  .openapi({
    required: ['Actions'],
    description: 'The compromised credentials risk configuration type.',
  })
  .openapi('CompromisedCredentialsRiskConfigurationType')

const StringTypeSchema = z.string().min(0).max(131072).openapi('StringType')

const ArnTypeSchema = z
  .string()
  .regex(
    /arn:[\w+=\/,.@-]+:[\w+=\/,.@-]+:([\w+=\/,.@-]*)?:[0-9]+:[\w+=\/,.@-]+(:[\w+=\/,.@-]+)?(:[\w+=\/,.@-]+)?/,
  )
  .min(20)
  .max(2048)
  .openapi('ArnType')

const EmailNotificationSubjectTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+/u)
  .min(1)
  .max(140)
  .openapi('EmailNotificationSubjectType')

const EmailNotificationBodyTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]+/u)
  .min(6)
  .max(20000)
  .openapi('EmailNotificationBodyType')

const NotifyEmailTypeSchema = z
  .object({
    Subject: EmailNotificationSubjectTypeSchema.and(
      z.any().openapi({ description: 'The email subject.' }),
    ),
    HtmlBody: EmailNotificationBodyTypeSchema.and(
      z.any().openapi({ description: 'The email HTML body.' }),
    ).exactOptional(),
    TextBody: EmailNotificationBodyTypeSchema.and(
      z.any().openapi({ description: 'The email text body.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Subject'], description: 'The notify email type.' })
  .openapi('NotifyEmailType')

const NotifyConfigurationTypeSchema = z
  .object({
    From: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address that is sending the email. The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.',
        }),
    ).exactOptional(),
    ReplyTo: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The destination to which the receiver of an email should reply to.',
        }),
    ).exactOptional(),
    SourceArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy. This identity permits Amazon Cognito to send for the email address specified in the <code>From</code> parameter.',
        }),
    ),
    BlockEmail: NotifyEmailTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Email template used when a detected risk event is blocked.' }),
    ).exactOptional(),
    NoActionEmail: NotifyEmailTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The email template used when a detected risk event is allowed.' }),
    ).exactOptional(),
    MfaEmail: NotifyEmailTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The multi-factor authentication (MFA) email template used when MFA is challenged as part of a detected risk.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceArn'], description: 'The notify configuration type.' })
  .openapi('NotifyConfigurationType')

const AccountTakeoverActionNotifyTypeSchema = z.boolean().openapi('AccountTakeoverActionNotifyType')

const AccountTakeoverEventActionTypeSchema = z
  .enum(['BLOCK', 'MFA_IF_CONFIGURED', 'MFA_REQUIRED', 'NO_ACTION'])
  .openapi('AccountTakeoverEventActionType')

const AccountTakeoverActionTypeSchema = z
  .object({
    Notify: AccountTakeoverActionNotifyTypeSchema.and(
      z.any().openapi({ description: 'Flag specifying whether to send a notification.' }),
    ),
    EventAction: AccountTakeoverEventActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action to take in response to the account takeover action. Valid values are as follows:</p> <ul> <li> <p> <code>BLOCK</code> Choosing this action will block the request.</p> </li> <li> <p> <code>MFA_IF_CONFIGURED</code> Present an MFA challenge if user has configured it, else allow the request.</p> </li> <li> <p> <code>MFA_REQUIRED</code> Present an MFA challenge if user has configured it, else block the request.</p> </li> <li> <p> <code>NO_ACTION</code> Allow the user to sign in.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['Notify', 'EventAction'], description: 'Account takeover action type.' })
  .openapi('AccountTakeoverActionType')

const AccountTakeoverActionsTypeSchema = z
  .object({
    LowAction: AccountTakeoverActionTypeSchema.and(
      z.any().openapi({ description: 'Action to take for a low risk.' }),
    ).exactOptional(),
    MediumAction: AccountTakeoverActionTypeSchema.and(
      z.any().openapi({ description: 'Action to take for a medium risk.' }),
    ).exactOptional(),
    HighAction: AccountTakeoverActionTypeSchema.and(
      z.any().openapi({ description: 'Action to take for a high risk.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Account takeover actions type.', required: [] })
  .openapi('AccountTakeoverActionsType')

const AccountTakeoverRiskConfigurationTypeSchema = z
  .object({
    NotifyConfiguration: NotifyConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The notify configuration used to construct email notifications.',
        }),
    ).exactOptional(),
    Actions: AccountTakeoverActionsTypeSchema.and(
      z.any().openapi({ description: 'Account takeover risk configuration actions.' }),
    ),
  })
  .openapi({
    required: ['Actions'],
    description:
      'Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.',
  })
  .openapi('AccountTakeoverRiskConfigurationType')

const BlockedIPRangeListTypeSchema = z
  .array(StringTypeSchema)
  .max(200)
  .openapi('BlockedIPRangeListType')

const SkippedIPRangeListTypeSchema = z
  .array(StringTypeSchema)
  .max(200)
  .openapi('SkippedIPRangeListType')

const RiskExceptionConfigurationTypeSchema = z
  .object({
    BlockedIPRangeList: BlockedIPRangeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Overrides the risk decision to always block the pre-authentication requests. The IP range is in CIDR notation, a compact representation of an IP address and its routing prefix.',
        }),
    ).exactOptional(),
    SkippedIPRangeList: SkippedIPRangeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Risk detection isn't performed on the IP addresses in this range list. The IP range is in CIDR notation.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The type of the configuration to override the risk decision.',
    required: [],
  })
  .openapi('RiskExceptionConfigurationType')

const DateTypeSchema = z.iso.datetime({ offset: true }).openapi('DateType')

type RiskConfigurationTypeType = {
  UserPoolId?: z.infer<typeof UserPoolIdTypeSchema> & { [key: string]: unknown }
  ClientId?: z.infer<typeof ClientIdTypeSchema> & { [key: string]: unknown }
  CompromisedCredentialsRiskConfiguration?: z.infer<
    typeof CompromisedCredentialsRiskConfigurationTypeSchema
  > & { [key: string]: unknown }
  AccountTakeoverRiskConfiguration?: z.infer<typeof AccountTakeoverRiskConfigurationTypeSchema> & {
    [key: string]: unknown
  }
  RiskExceptionConfiguration?: z.infer<typeof RiskExceptionConfigurationTypeSchema> & {
    [key: string]: unknown
  }
  LastModifiedDate?: z.infer<typeof DateTypeSchema> & { [key: string]: unknown }
}

const AddCustomAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Represents the response from the server for the request to add custom attributes.',
  })
  .openapi('AddCustomAttributesResponse')

const CustomAttributeNameTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(20)
  .openapi('CustomAttributeNameType')

const AttributeDataTypeSchema = z
  .enum(['String', 'Number', 'DateTime', 'Boolean'])
  .openapi('AttributeDataType')

const BooleanTypeSchema = z.boolean().openapi('BooleanType')

const NumberAttributeConstraintsTypeSchema = z
  .object({
    MinValue: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The minimum value of an attribute that is of the number data type.',
        }),
    ).exactOptional(),
    MaxValue: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum value of an attribute that is of the number data type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The minimum and maximum values of an attribute that is of the number data type.',
    required: [],
  })
  .openapi('NumberAttributeConstraintsType')

const StringAttributeConstraintsTypeSchema = z
  .object({
    MinLength: StringTypeSchema.and(
      z.any().openapi({ description: 'The minimum length.' }),
    ).exactOptional(),
    MaxLength: StringTypeSchema.and(
      z.any().openapi({ description: 'The maximum length.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The constraints associated with a string attribute.', required: [] })
  .openapi('StringAttributeConstraintsType')

const SchemaAttributeTypeSchema = z
  .object({
    Name: CustomAttributeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of your user pool attribute, for example <code>username</code> or <code>custom:costcenter</code>.',
        }),
    ).exactOptional(),
    AttributeDataType: AttributeDataTypeSchema.and(
      z.any().openapi({ description: 'The data format of the values for your attribute.' }),
    ).exactOptional(),
    DeveloperOnlyAttribute: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>You should use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolClientType.html#CognitoUserPools-Type-UserPoolClientType-WriteAttributes">WriteAttributes</a> in the user pool client to control how attributes can be mutated for new use cases instead of using <code>DeveloperOnlyAttribute</code>.</p> </note> <p>Specifies whether the attribute type is developer only. This attribute can only be modified by an administrator. Users won\'t be able to modify this attribute using their access token. For example, <code>DeveloperOnlyAttribute</code> can be modified using AdminUpdateUserAttributes but can\'t be updated using UpdateUserAttributes.</p>',
        }),
    ).exactOptional(),
    Mutable: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the value of the attribute can be changed.</p> <p>Any user pool attribute whose value you map from an IdP attribute must be mutable, with a parameter value of <code>true</code>. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If an attribute is immutable, Amazon Cognito throws an error when it attempts to update the attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying Identity Provider Attribute Mappings for Your User Pool</a>.</p>',
        }),
    ).exactOptional(),
    Required: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether a user pool attribute is required. If the attribute is required and the user doesn't provide a value, registration or sign-in will fail.",
        }),
    ).exactOptional(),
    NumberAttributeConstraints: NumberAttributeConstraintsTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the constraints for an attribute of the number type.' }),
    ).exactOptional(),
    StringAttributeConstraints: StringAttributeConstraintsTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the constraints for an attribute of the string type.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A list of the user attributes and their properties in your user pool. The attribute schema contains standard attributes, custom attributes with a <code>custom:</code> prefix, and developer attributes with a <code>dev:</code> prefix. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">User pool attributes</a>.</p> <p>Developer-only attributes are a legacy feature of user pools, are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.</p>',
    required: [],
  })
  .openapi('SchemaAttributeType')

const CustomAttributesListTypeSchema = z
  .array(SchemaAttributeTypeSchema)
  .min(1)
  .max(25)
  .openapi('CustomAttributesListType')

const AddCustomAttributesRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool where you want to add custom attributes.',
        }),
    ),
    CustomAttributes: CustomAttributesListTypeSchema.and(
      z.any().openapi({ description: 'An array of custom attributes, such as Mutable and Name.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'CustomAttributes'],
    title: 'AddCustomAttributesRequest',
    description: 'Represents the request to add custom attributes.',
  })
  .openapi('AddCustomAttributesRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const UserImportInProgressExceptionSchema = z.any().openapi('UserImportInProgressException')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const UsernameTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(128)
  .openapi('UsernameType')

const GroupNameTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(128)
  .openapi('GroupNameType')

const AdminAddUserToGroupRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The username for the user.' }),
    ),
    GroupName: GroupNameTypeSchema.and(z.any().openapi({ description: 'The group name.' })),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'GroupName'],
    title: 'AdminAddUserToGroupRequest',
  })
  .openapi('AdminAddUserToGroupRequest')

const UserNotFoundExceptionSchema = z.any().openapi('UserNotFoundException')

const AdminConfirmSignUpResponseSchema = z
  .object({})
  .openapi({
    description: 'Represents the response from the server for the request to confirm registration.',
  })
  .openapi('AdminConfirmSignUpResponse')

const ClientMetadataTypeSchema = z
  .record(z.string(), StringTypeSchema)
  .openapi('ClientMetadataType')

const AdminConfirmSignUpRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for which you want to confirm user registration.',
        }),
    ),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The user name for which you want to confirm user registration.' }),
    ),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>If your user pool configuration includes triggers, the AdminConfirmSignUp API action invokes the Lambda function that is specified for the <i>post confirmation</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. In this payload, the <code>clientMetadata</code> attribute provides the data that you assigned to the ClientMetadata parameter in your AdminConfirmSignUp request. In your function code in Lambda, you can process the ClientMetadata value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminConfirmSignUpRequest',
    description: "Confirm a user's registration as a user pool administrator.",
  })
  .openapi('AdminConfirmSignUpRequest')

const UnexpectedLambdaExceptionSchema = z.any().openapi('UnexpectedLambdaException')

const UserLambdaValidationExceptionSchema = z.any().openapi('UserLambdaValidationException')

const TooManyFailedAttemptsExceptionSchema = z.any().openapi('TooManyFailedAttemptsException')

const InvalidLambdaResponseExceptionSchema = z.any().openapi('InvalidLambdaResponseException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const AttributeNameTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(32)
  .openapi('AttributeNameType')

const AttributeValueTypeSchema = z.string().max(2048).openapi('AttributeValueType')

const AttributeTypeSchema = z
  .object({
    Name: AttributeNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the attribute.' }),
    ),
    Value: AttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description: 'Specifies whether the attribute is standard or custom.',
  })
  .openapi('AttributeType')

const AttributeListTypeSchema = z.array(AttributeTypeSchema).openapi('AttributeListType')

const UserStatusTypeSchema = z
  .enum([
    'UNCONFIRMED',
    'CONFIRMED',
    'ARCHIVED',
    'COMPROMISED',
    'UNKNOWN',
    'RESET_REQUIRED',
    'FORCE_CHANGE_PASSWORD',
  ])
  .openapi('UserStatusType')

const DeliveryMediumTypeSchema = z.enum(['SMS', 'EMAIL']).openapi('DeliveryMediumType')

const MFAOptionTypeSchema = z
  .object({
    DeliveryMedium: DeliveryMediumTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The delivery medium to send the MFA code. You can use this parameter to set only the <code>SMS</code> delivery medium value.',
        }),
    ).exactOptional(),
    AttributeName: AttributeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attribute name of the MFA option type. The only valid value is <code>phone_number</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' <i>This data type is no longer supported.</i> Applies only to SMS multi-factor authentication (MFA) configurations. Does not apply to time-based one-time password (TOTP) software token MFA configurations.',
    required: [],
  })
  .openapi('MFAOptionType')

const MFAOptionListTypeSchema = z.array(MFAOptionTypeSchema).openapi('MFAOptionListType')

const UserTypeSchema = z
  .object({
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user name of the user you want to describe.' }),
    ).exactOptional(),
    Attributes: AttributeListTypeSchema.and(
      z
        .any()
        .openapi({ description: 'A container with information about the user type attributes.' }),
    ).exactOptional(),
    UserCreateDate: DateTypeSchema.and(
      z.any().openapi({ description: 'The creation date of the user.' }),
    ).exactOptional(),
    UserLastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    Enabled: BooleanTypeSchema.and(
      z.any().openapi({ description: 'Specifies whether the user is enabled.' }),
    ).exactOptional(),
    UserStatus: UserStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user status. This can be one of the following:</p> <ul> <li> <p>UNCONFIRMED - User has been created but not confirmed.</p> </li> <li> <p>CONFIRMED - User has been confirmed.</p> </li> <li> <p>EXTERNAL_PROVIDER - User signed in with a third-party IdP.</p> </li> <li> <p>UNKNOWN - User status isn't known.</p> </li> <li> <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset their password before they can sign in.</p> </li> <li> <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a temporary password, but on first sign-in, the user must change their password to a new value before doing anything else. </p> </li> </ul>",
        }),
    ).exactOptional(),
    MFAOptions: MFAOptionListTypeSchema.and(
      z.any().openapi({ description: 'The MFA options for the user.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A user profile in a Amazon Cognito user pool.', required: [] })
  .openapi('UserType')

const AdminCreateUserResponseSchema = z
  .object({
    User: UserTypeSchema.and(
      z.any().openapi({ description: 'The newly created user.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the response from the server to the request to create the user.',
    required: [],
  })
  .openapi('AdminCreateUserResponse')

const PasswordTypeSchema = z.string().regex(/[\S]+/).max(256).openapi('PasswordType')

const ForceAliasCreationSchema = z.boolean().openapi('ForceAliasCreation')

const MessageActionTypeSchema = z.enum(['RESEND', 'SUPPRESS']).openapi('MessageActionType')

const DeliveryMediumListTypeSchema = z
  .array(DeliveryMediumTypeSchema)
  .openapi('DeliveryMediumListType')

const AdminCreateUserRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool where the user will be created.',
        }),
    ),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The username for the user. Must be unique within the user pool. Must be a UTF-8 string between 1 and 128 characters. After the user is created, the username can't be changed.",
        }),
    ),
    UserAttributes: AttributeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created. You can create a user without specifying any attributes other than <code>Username</code>. However, any attributes that you specify as required (when creating a user pool or in the <b>Attributes</b> tab of the console) either you should supply (in your call to <code>AdminCreateUser</code>) or the user should supply (when they sign up in response to your welcome message).</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>To send a message inviting the user to sign up, you must specify the user\'s email address or phone number. You can do this in your call to AdminCreateUser or in the <b>Users</b> tab of the Amazon Cognito console for managing your user pools.</p> <p>In your call to <code>AdminCreateUser</code>, you can set the <code>email_verified</code> attribute to <code>True</code>, and you can set the <code>phone_number_verified</code> attribute to <code>True</code>. You can also do this by calling <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html">AdminUpdateUserAttributes</a>.</p> <ul> <li> <p> <b>email</b>: The email address of the user to whom the message that contains the code and username will be sent. Required if the <code>email_verified</code> attribute is set to <code>True</code>, or if <code>"EMAIL"</code> is specified in the <code>DesiredDeliveryMediums</code> parameter.</p> </li> <li> <p> <b>phone_number</b>: The phone number of the user to whom the message that contains the code and username will be sent. Required if the <code>phone_number_verified</code> attribute is set to <code>True</code>, or if <code>"SMS"</code> is specified in the <code>DesiredDeliveryMediums</code> parameter.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ValidationData: AttributeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user's validation data. This is an array of name-value pairs that contain user attributes and attribute values that you can use for custom validation, such as restricting the types of user accounts that can be registered. For example, you might choose to allow or disallow user sign-up based on the user's domain.</p> <p>To configure custom validation, you must create a Pre Sign-up Lambda trigger for the user pool as described in the Amazon Cognito Developer Guide. The Lambda trigger receives the validation data and uses it in the validation process.</p> <p>The user's validation data isn't persisted.</p>",
        }),
    ).exactOptional(),
    TemporaryPassword: PasswordTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user's temporary password. This password must conform to the password policy that you specified when you created the user pool.</p> <p>The temporary password is valid only once. To complete the Admin Create User flow, the user must enter the temporary password in the sign-in page, along with a new password to be used in all future sign-ins.</p> <p>This parameter isn't required. If you don't specify a value, Amazon Cognito generates one for you.</p> <p>The temporary password can only be used until the user account expiration limit that you set for your user pool. To reset the account after that time limit, you must call <code>AdminCreateUser</code> again and specify <code>RESEND</code> for the <code>MessageAction</code> parameter.</p>",
        }),
    ).exactOptional(),
    ForceAliasCreation: ForceAliasCreationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is used only if the <code>phone_number_verified</code> or <code>email_verified</code> attribute is set to <code>True</code>. Otherwise, it is ignored.</p> <p>If this parameter is set to <code>True</code> and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias.</p> <p>If this parameter is set to <code>False</code>, the API throws an <code>AliasExistsException</code> error if the alias already exists. The default value is <code>False</code>.</p>',
        }),
    ).exactOptional(),
    MessageAction: MessageActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set to <code>RESEND</code> to resend the invitation message to a user that already exists and reset the expiration limit on the user's account. Set to <code>SUPPRESS</code> to suppress sending the message. You can specify only one value.",
        }),
    ).exactOptional(),
    DesiredDeliveryMediums: DeliveryMediumListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>"EMAIL"</code> if email will be used to send the welcome message. Specify <code>"SMS"</code> if the phone number will be used. The default value is <code>"SMS"</code>. You can specify more than one value.',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminCreateUser API action, Amazon Cognito invokes the function that is assigned to the <i>pre sign-up</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminCreateUser request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminCreateUserRequest',
    description: 'Represents the request to create a user in the specified user pool.',
  })
  .openapi('AdminCreateUserRequest')

const UsernameExistsExceptionSchema = z.any().openapi('UsernameExistsException')

const InvalidPasswordExceptionSchema = z.any().openapi('InvalidPasswordException')

const CodeDeliveryFailureExceptionSchema = z.any().openapi('CodeDeliveryFailureException')

const PreconditionNotMetExceptionSchema = z.any().openapi('PreconditionNotMetException')

const InvalidSmsRoleAccessPolicyExceptionSchema = z
  .any()
  .openapi('InvalidSmsRoleAccessPolicyException')

const InvalidSmsRoleTrustRelationshipExceptionSchema = z
  .any()
  .openapi('InvalidSmsRoleTrustRelationshipException')

const UnsupportedUserStateExceptionSchema = z.any().openapi('UnsupportedUserStateException')

const AdminDeleteUserRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool where you want to delete the user.',
        }),
    ),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user name of the user you want to delete.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminDeleteUserRequest',
    description: 'Represents the request to delete a user as an administrator.',
  })
  .openapi('AdminDeleteUserRequest')

const AdminDeleteUserAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Represents the response received from the server for a request to delete user attributes.',
  })
  .openapi('AdminDeleteUserAttributesResponse')

const AttributeNameListTypeSchema = z
  .array(AttributeNameTypeSchema)
  .openapi('AttributeNameListType')

const AdminDeleteUserAttributesRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool where you want to delete user attributes.',
        }),
    ),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user name of the user from which you would like to delete attributes.',
        }),
    ),
    UserAttributeNames: AttributeNameListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings representing the user attribute names you want to delete.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>',
        }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'UserAttributeNames'],
    title: 'AdminDeleteUserAttributesRequest',
    description: 'Represents the request to delete user attributes as an administrator.',
  })
  .openapi('AdminDeleteUserAttributesRequest')

const AdminDisableProviderForUserResponseSchema = z
  .object({})
  .openapi('AdminDisableProviderForUserResponse')

const ProviderNameTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(32)
  .openapi('ProviderNameType')

const ProviderUserIdentifierTypeSchema = z
  .object({
    ProviderName: ProviderNameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the provider, such as Facebook, Google, or Login with Amazon.',
        }),
    ).exactOptional(),
    ProviderAttributeName: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the provider attribute to link to, such as <code>NameID</code>.',
        }),
    ).exactOptional(),
    ProviderAttributeValue: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the provider attribute to link to, such as <code>xxxxx_account</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A container for information about an IdP for a user pool.',
    required: [],
  })
  .openapi('ProviderUserIdentifierType')

const AdminDisableProviderForUserRequestSchema = z
  .object({
    UserPoolId: StringTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    User: ProviderUserIdentifierTypeSchema.and(
      z.any().openapi({ description: 'The user to be disabled.' }),
    ),
  })
  .openapi({ required: ['UserPoolId', 'User'], title: 'AdminDisableProviderForUserRequest' })
  .openapi('AdminDisableProviderForUserRequest')

const AliasExistsExceptionSchema = z.any().openapi('AliasExistsException')

const AdminDisableUserResponseSchema = z
  .object({})
  .openapi({
    description:
      'Represents the response received from the server to disable the user as an administrator.',
  })
  .openapi('AdminDisableUserResponse')

const AdminDisableUserRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool where you want to disable the user.',
        }),
    ),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user name of the user you want to disable.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminDisableUserRequest',
    description: 'Represents the request to disable the user as an administrator.',
  })
  .openapi('AdminDisableUserRequest')

const AdminEnableUserResponseSchema = z
  .object({})
  .openapi({
    description:
      'Represents the response from the server for the request to enable a user as an administrator.',
  })
  .openapi('AdminEnableUserResponse')

const AdminEnableUserRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool where you want to enable the user.',
        }),
    ),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user name of the user you want to enable.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminEnableUserRequest',
    description: 'Represents the request that enables the user as an administrator.',
  })
  .openapi('AdminEnableUserRequest')

const DeviceKeyTypeSchema = z
  .string()
  .regex(/[\w-]+_[0-9a-f-]+/)
  .min(1)
  .max(55)
  .openapi('DeviceKeyType')

const AdminForgetDeviceRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    Username: UsernameTypeSchema.and(z.any().openapi({ description: 'The user name.' })),
    DeviceKey: DeviceKeyTypeSchema.and(z.any().openapi({ description: 'The device key.' })),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'DeviceKey'],
    title: 'AdminForgetDeviceRequest',
    description: 'Sends the forgot device request, as an administrator.',
  })
  .openapi('AdminForgetDeviceRequest')

const InvalidUserPoolConfigurationExceptionSchema = z
  .any()
  .openapi('InvalidUserPoolConfigurationException')

const DeviceTypeSchema = z
  .object({
    DeviceKey: DeviceKeyTypeSchema.and(
      z.any().openapi({ description: 'The device key.' }),
    ).exactOptional(),
    DeviceAttributes: AttributeListTypeSchema.and(
      z.any().openapi({ description: 'The device attributes.' }),
    ).exactOptional(),
    DeviceCreateDate: DateTypeSchema.and(
      z.any().openapi({ description: 'The creation date of the device.' }),
    ).exactOptional(),
    DeviceLastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    DeviceLastAuthenticatedDate: DateTypeSchema.and(
      z.any().openapi({ description: 'The date when the device was last authenticated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The device type.', required: [] })
  .openapi('DeviceType')

const AdminGetDeviceResponseSchema = z
  .object({ Device: DeviceTypeSchema.and(z.any().openapi({ description: 'The device.' })) })
  .openapi({ required: ['Device'], description: 'Gets the device response, as an administrator.' })
  .openapi('AdminGetDeviceResponse')

const AdminGetDeviceRequestSchema = z
  .object({
    DeviceKey: DeviceKeyTypeSchema.and(z.any().openapi({ description: 'The device key.' })),
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    Username: UsernameTypeSchema.and(z.any().openapi({ description: 'The user name.' })),
  })
  .openapi({
    required: ['DeviceKey', 'UserPoolId', 'Username'],
    title: 'AdminGetDeviceRequest',
    description: 'Represents the request to get the device, as an administrator.',
  })
  .openapi('AdminGetDeviceRequest')

const UserMFASettingListTypeSchema = z.array(StringTypeSchema).openapi('UserMFASettingListType')

const AdminGetUserResponseSchema = z
  .object({
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The username of the user that you requested.' }),
    ),
    UserAttributes: AttributeListTypeSchema.and(
      z
        .any()
        .openapi({ description: 'An array of name-value pairs representing user attributes.' }),
    ).exactOptional(),
    UserCreateDate: DateTypeSchema.and(
      z.any().openapi({ description: 'The date the user was created.' }),
    ).exactOptional(),
    UserLastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    Enabled: BooleanTypeSchema.and(
      z.any().openapi({ description: 'Indicates that the status is <code>enabled</code>.' }),
    ).exactOptional(),
    UserStatus: UserStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user status. Can be one of the following:</p> <ul> <li> <p>UNCONFIRMED - User has been created but not confirmed.</p> </li> <li> <p>CONFIRMED - User has been confirmed.</p> </li> <li> <p>UNKNOWN - User status isn't known.</p> </li> <li> <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset their password before they can sign in.</p> </li> <li> <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a temporary password, but on first sign-in, the user must change their password to a new value before doing anything else. </p> </li> </ul>",
        }),
    ).exactOptional(),
    MFAOptions: MFAOptionListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            " <i>This response parameter is no longer supported.</i> It provides information only about SMS MFA configurations. It doesn't provide information about time-based one-time password (TOTP) software token MFA configurations. To look up information about either type of MFA configuration, use UserMFASettingList instead.",
        }),
    ).exactOptional(),
    PreferredMfaSetting: StringTypeSchema.and(
      z.any().openapi({ description: "The user's preferred MFA setting." }),
    ).exactOptional(),
    UserMFASettingList: UserMFASettingListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MFA options that are activated for the user. The possible values in this list are <code>SMS_MFA</code> and <code>SOFTWARE_TOKEN_MFA</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Username'],
    description:
      'Represents the response from the server from the request to get the specified user as an administrator.',
  })
  .openapi('AdminGetUserResponse')

const AdminGetUserRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool where you want to get information about the user.',
        }),
    ),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user name of the user you want to retrieve.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminGetUserRequest',
    description: 'Represents the request to get the specified user as an administrator.',
  })
  .openapi('AdminGetUserRequest')

const ChallengeNameTypeSchema = z
  .enum([
    'SMS_MFA',
    'SOFTWARE_TOKEN_MFA',
    'SELECT_MFA_TYPE',
    'MFA_SETUP',
    'PASSWORD_VERIFIER',
    'CUSTOM_CHALLENGE',
    'DEVICE_SRP_AUTH',
    'DEVICE_PASSWORD_VERIFIER',
    'ADMIN_NO_SRP_AUTH',
    'NEW_PASSWORD_REQUIRED',
  ])
  .openapi('ChallengeNameType')

const SessionTypeSchema = z.string().min(20).max(2048).openapi('SessionType')

const ChallengeParametersTypeSchema = z
  .record(z.string(), StringTypeSchema)
  .openapi('ChallengeParametersType')

const TokenModelTypeSchema = z
  .string()
  .regex(/[A-Za-z0-9-_=.]+/)
  .openapi('TokenModelType')

const IntegerTypeSchema = z.int().openapi('IntegerType')

const NewDeviceMetadataTypeSchema = z
  .object({
    DeviceKey: DeviceKeyTypeSchema.and(
      z.any().openapi({ description: 'The device key.' }),
    ).exactOptional(),
    DeviceGroupKey: StringTypeSchema.and(
      z.any().openapi({ description: 'The device group key.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The new device metadata type.', required: [] })
  .openapi('NewDeviceMetadataType')

const AuthenticationResultTypeSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user who you want to authenticate.',
        }),
    ).exactOptional(),
    ExpiresIn: IntegerTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The expiration period of the authentication result in seconds.' }),
    ).exactOptional(),
    TokenType: StringTypeSchema.and(
      z.any().openapi({ description: 'The token type.' }),
    ).exactOptional(),
    RefreshToken: TokenModelTypeSchema.and(
      z.any().openapi({ description: 'The refresh token.' }),
    ).exactOptional(),
    IdToken: TokenModelTypeSchema.and(
      z.any().openapi({ description: 'The ID token.' }),
    ).exactOptional(),
    NewDeviceMetadata: NewDeviceMetadataTypeSchema.and(
      z.any().openapi({ description: 'The new device metadata from an authentication result.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The authentication result.', required: [] })
  .openapi('AuthenticationResultType')

const AdminInitiateAuthResponseSchema = z
  .object({
    ChallengeName: ChallengeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the challenge that you're responding to with this call. This is returned in the <code>AdminInitiateAuth</code> response if you must pass another challenge.</p> <ul> <li> <p> <code>MFA_SETUP</code>: If MFA is required, users who don't have at least one of the MFA methods set up are presented with an <code>MFA_SETUP</code> challenge. The user must set up at least one MFA type to continue to authenticate.</p> </li> <li> <p> <code>SELECT_MFA_TYPE</code>: Selects the MFA type. Valid MFA options are <code>SMS_MFA</code> for text SMS MFA, and <code>SOFTWARE_TOKEN_MFA</code> for time-based one-time password (TOTP) software token MFA.</p> </li> <li> <p> <code>SMS_MFA</code>: Next challenge is to supply an <code>SMS_MFA_CODE</code>, delivered via SMS.</p> </li> <li> <p> <code>PASSWORD_VERIFIER</code>: Next challenge is to supply <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after the client-side SRP calculations.</p> </li> <li> <p> <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued.</p> </li> <li> <p> <code>DEVICE_SRP_AUTH</code>: If device tracking was activated in your user pool and the previous challenges were passed, this challenge is returned so that Amazon Cognito can start tracking this device.</p> </li> <li> <p> <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to <code>PASSWORD_VERIFIER</code>, but for devices only.</p> </li> <li> <p> <code>ADMIN_NO_SRP_AUTH</code>: This is returned if you must authenticate with <code>USERNAME</code> and <code>PASSWORD</code> directly. An app client must be enabled to use this flow.</p> </li> <li> <p> <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their passwords after successful first login. Respond to this challenge with <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in the <code>requiredAttributes</code> parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write. For more information, see <a href=\"https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html\">AdminRespondToAuthChallenge</a>.</p> <note> <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value. In <code>AdminRespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p> </note> </li> <li> <p> <code>MFA_SETUP</code>: For users who are required to set up an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters <code>MFA_CAN_SETUP</code> value. </p> <p> To set up software token MFA, use the session returned here from <code>InitiateAuth</code> as an input to <code>AssociateSoftwareToken</code>, and use the session returned by <code>VerifySoftwareToken</code> as an input to <code>RespondToAuthChallenge</code> with challenge name <code>MFA_SETUP</code> to complete sign-in. To set up SMS MFA, users will need help from an administrator to add a phone number to their account and then call <code>InitiateAuth</code> again to restart sign-in.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service. If <code>AdminInitiateAuth</code> or <code>AdminRespondToAuthChallenge</code> API call determines that the caller must pass another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next <code>AdminRespondToAuthChallenge</code> API call.',
        }),
    ).exactOptional(),
    ChallengeParameters: ChallengeParametersTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The challenge parameters. These are returned to you in the <code>AdminInitiateAuth</code> response if you must pass another challenge. The responses in this parameter should be used to compute inputs to the next call (<code>AdminRespondToAuthChallenge</code>).</p> <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if applicable).</p> <p>The value of the <code>USER_ID_FOR_SRP</code> attribute is the user's actual username, not an alias (such as email address or phone number), even if you specified an alias in your call to <code>AdminInitiateAuth</code>. This happens because, in the <code>AdminRespondToAuthChallenge</code> API <code>ChallengeResponses</code>, the <code>USERNAME</code> attribute can't be an alias.</p>",
        }),
    ).exactOptional(),
    AuthenticationResult: AuthenticationResultTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The result of the authentication response. This is only returned if the caller doesn't need to pass another challenge. If the caller does need to pass another challenge before it gets tokens, <code>ChallengeName</code>, <code>ChallengeParameters</code>, and <code>Session</code> are returned.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Initiates the authentication response, as an administrator.',
    required: [],
  })
  .openapi('AdminInitiateAuthResponse')

const AuthFlowTypeSchema = z
  .enum([
    'USER_SRP_AUTH',
    'REFRESH_TOKEN_AUTH',
    'REFRESH_TOKEN',
    'CUSTOM_AUTH',
    'ADMIN_NO_SRP_AUTH',
    'USER_PASSWORD_AUTH',
    'ADMIN_USER_PASSWORD_AUTH',
  ])
  .openapi('AuthFlowType')

const AuthParametersTypeSchema = z
  .record(z.string(), StringTypeSchema)
  .openapi('AuthParametersType')

const AnalyticsMetadataTypeSchema = z
  .object({
    AnalyticsEndpointId: StringTypeSchema.and(
      z.any().openapi({ description: 'The endpoint ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics. For more information about Amazon Web Services Regions that can contain Amazon Pinpoint resources for use with Amazon Cognito user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics with Amazon Cognito user pools</a>.</p>',
    required: [],
  })
  .openapi('AnalyticsMetadataType')

const HttpHeaderSchema = z
  .object({
    headerName: StringTypeSchema.and(
      z.any().openapi({ description: 'The header name.' }),
    ).exactOptional(),
    headerValue: StringTypeSchema.and(
      z.any().openapi({ description: 'The header value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The HTTP header.', required: [] })
  .openapi('HttpHeader')

const HttpHeaderListSchema = z.array(HttpHeaderSchema).openapi('HttpHeaderList')

const ContextDataTypeSchema = z
  .object({
    IpAddress: StringTypeSchema.and(
      z.any().openapi({ description: "The source IP address of your user's device." }),
    ),
    ServerName: StringTypeSchema.and(
      z.any().openapi({ description: 'Your server endpoint where this API is invoked.' }),
    ),
    ServerPath: StringTypeSchema.and(
      z.any().openapi({ description: 'Your server path where this API is invoked.' }),
    ),
    HttpHeaders: HttpHeaderListSchema.and(
      z.any().openapi({ description: 'HttpHeaders received on your server in same order.' }),
    ),
    EncodedData: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Encoded device-fingerprint details that your app collected with the Amazon Cognito context data collection library. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding user device and session data to API requests</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IpAddress', 'ServerName', 'ServerPath', 'HttpHeaders'],
    description:
      'Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.',
  })
  .openapi('ContextDataType')

const AdminInitiateAuthRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Cognito user pool.' }),
    ),
    ClientId: ClientIdTypeSchema.and(z.any().openapi({ description: 'The app client ID.' })),
    AuthFlow: AuthFlowTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The authentication flow for this call to run. The API action will depend on this value. For example:</p> <ul> <li> <p> <code>REFRESH_TOKEN_AUTH</code> will take in a valid refresh token and return new tokens.</p> </li> <li> <p> <code>USER_SRP_AUTH</code> will take in <code>USERNAME</code> and <code>SRP_A</code> and return the Secure Remote Password (SRP) protocol variables to be used for next challenge execution.</p> </li> <li> <p> <code>ADMIN_USER_PASSWORD_AUTH</code> will take in <code>USERNAME</code> and <code>PASSWORD</code> and return the next challenge or tokens.</p> </li> </ul> <p>Valid values include:</p> <ul> <li> <p> <code>USER_SRP_AUTH</code>: Authentication flow for the Secure Remote Password (SRP) protocol.</p> </li> <li> <p> <code>REFRESH_TOKEN_AUTH</code>/<code>REFRESH_TOKEN</code>: Authentication flow for refreshing the access token and ID token by supplying a valid refresh token.</p> </li> <li> <p> <code>CUSTOM_AUTH</code>: Custom authentication flow.</p> </li> <li> <p> <code>ADMIN_NO_SRP_AUTH</code>: Non-SRP authentication flow; you can pass in the USERNAME and PASSWORD directly if the flow is enabled for calling the app client.</p> </li> <li> <p> <code>ADMIN_USER_PASSWORD_AUTH</code>: Admin-based user password authentication. This replaces the <code>ADMIN_NO_SRP_AUTH</code> authentication flow. In this flow, Amazon Cognito receives the password in the request instead of using the SRP process to verify passwords.</p> </li> </ul>',
        }),
    ),
    AuthParameters: AuthParametersTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The authentication parameters. These are inputs corresponding to the <code>AuthFlow</code> that you\'re invoking. The required values depend on the value of <code>AuthFlow</code>:</p> <ul> <li> <p>For <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required), <code>SRP_A</code> (required), <code>SECRET_HASH</code> (required if the app client is configured with a client secret), <code>DEVICE_KEY</code>.</p> </li> <li> <p>For <code>ADMIN_USER_PASSWORD_AUTH</code>: <code>USERNAME</code> (required), <code>PASSWORD</code> (required), <code>SECRET_HASH</code> (required if the app client is configured with a client secret), <code>DEVICE_KEY</code>.</p> </li> <li> <p>For <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code> (required), <code>SECRET_HASH</code> (required if the app client is configured with a client secret), <code>DEVICE_KEY</code>.</p> </li> <li> <p>For <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required), <code>SECRET_HASH</code> (if app client is configured with client secret), <code>DEVICE_KEY</code>. To start the authentication flow with password verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The SRP_A Value)</code>.</p> </li> </ul> <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for certain custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminInitiateAuth API action, Amazon Cognito invokes the Lambda functions that are specified for various triggers. The ClientMetadata value is passed as input to the functions for only the following triggers:</p> <ul> <li> <p>Pre signup</p> </li> <li> <p>Pre authentication</p> </li> <li> <p>User migration</p> </li> </ul> <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which the function receives as input. This payload contains a <code>validationData</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminInitiateAuth request. In your function code in Lambda, you can process the <code>validationData</code> value to enhance your workflow for your specific needs.</p> <p>When you use the AdminInitiateAuth API action, Amazon Cognito also invokes the functions for the following triggers, but it doesn't provide the ClientMetadata value as input:</p> <ul> <li> <p>Post authentication</p> </li> <li> <p>Custom message</p> </li> <li> <p>Pre token generation</p> </li> <li> <p>Create auth challenge</p> </li> <li> <p>Define auth challenge</p> </li> <li> <p>Verify auth challenge</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The analytics metadata for collecting Amazon Pinpoint metrics for <code>AdminInitiateAuth</code> calls.',
        }),
    ).exactOptional(),
    ContextData: ContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'ClientId', 'AuthFlow'],
    title: 'AdminInitiateAuthRequest',
    description: 'Initiates the authorization request, as an administrator.',
  })
  .openapi('AdminInitiateAuthRequest')

const MFAMethodNotFoundExceptionSchema = z.any().openapi('MFAMethodNotFoundException')

const PasswordResetRequiredExceptionSchema = z.any().openapi('PasswordResetRequiredException')

const UserNotConfirmedExceptionSchema = z.any().openapi('UserNotConfirmedException')

const AdminLinkProviderForUserResponseSchema = z
  .object({})
  .openapi('AdminLinkProviderForUserResponse')

const AdminLinkProviderForUserRequestSchema = z
  .object({
    UserPoolId: StringTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    DestinationUser: ProviderUserIdentifierTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The existing user in the user pool that you want to assign to the external IdP user account. This user can be a local (Username + Password) Amazon Cognito user pools user or a federated user (for example, a SAML or Facebook user). If the user doesn't exist, Amazon Cognito generates an exception. Amazon Cognito returns this user when the new user (with the linked IdP attribute) signs in.</p> <p>For a native username + password user, the <code>ProviderAttributeValue</code> for the <code>DestinationUser</code> should be the username in the user pool. For a federated user, it should be the provider-specific <code>user_id</code>.</p> <p>The <code>ProviderAttributeName</code> of the <code>DestinationUser</code> is ignored.</p> <p>The <code>ProviderName</code> should be set to <code>Cognito</code> for users in Cognito user pools.</p> <important> <p>All attributes in the DestinationUser profile must be mutable. If you have assigned the user any immutable custom attributes, the operation won't succeed.</p> </important>",
        }),
    ),
    SourceUser: ProviderUserIdentifierTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An external IdP account for a user who doesn't exist yet in the user pool. This user must be a federated user (for example, a SAML or Facebook user), not another native user.</p> <p>If the <code>SourceUser</code> is using a federated social IdP, such as Facebook, Google, or Login with Amazon, you must set the <code>ProviderAttributeName</code> to <code>Cognito_Subject</code>. For social IdPs, the <code>ProviderName</code> will be <code>Facebook</code>, <code>Google</code>, or <code>LoginWithAmazon</code>, and Amazon Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for <code>id</code>, <code>sub</code>, and <code>user_id</code>, respectively. The <code>ProviderAttributeValue</code> for the user must be the same value as the <code>id</code>, <code>sub</code>, or <code>user_id</code> value found in the social IdP token.</p> <p/> <p>For OIDC, the <code>ProviderAttributeName</code> can be any value that matches a claim in the ID token, or that your app retrieves from the <code>userInfo</code> endpoint. You must map the claim to a user pool attribute in your IdP configuration, and set the user pool attribute name as the value of <code>ProviderAttributeName</code> in your <code>AdminLinkProviderForUser</code> request.</p> <p>For SAML, the <code>ProviderAttributeName</code> can be any value that matches a claim in the SAML assertion. To link SAML users based on the subject of the SAML assertion, map the subject to a claim through the SAML IdP and set that claim name as the value of <code>ProviderAttributeName</code> in your <code>AdminLinkProviderForUser</code> request.</p> <p>For both OIDC and SAML users, when you set <code>ProviderAttributeName</code> to <code>Cognito_Subject</code>, Amazon Cognito will automatically parse the default unique identifier found in the subject from the IdP token.</p>",
        }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'DestinationUser', 'SourceUser'],
    title: 'AdminLinkProviderForUserRequest',
  })
  .openapi('AdminLinkProviderForUserRequest')

const DeviceListTypeSchema = z.array(DeviceTypeSchema).openapi('DeviceListType')

const SearchPaginationTokenTypeSchema = z
  .string()
  .regex(/[\S]+/)
  .min(1)
  .openapi('SearchPaginationTokenType')

const AdminListDevicesResponseSchema = z
  .object({
    Devices: DeviceListTypeSchema.and(
      z.any().openapi({ description: 'The devices in the list of devices response.' }),
    ).exactOptional(),
    PaginationToken: SearchPaginationTokenTypeSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Lists the device's response, as an administrator.", required: [] })
  .openapi('AdminListDevicesResponse')

const QueryLimitTypeSchema = z.int().min(0).max(60).openapi('QueryLimitType')

const AdminListDevicesRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    Username: UsernameTypeSchema.and(z.any().openapi({ description: 'The user name.' })),
    Limit: QueryLimitTypeSchema.and(
      z.any().openapi({ description: 'The limit of the devices request.' }),
    ).exactOptional(),
    PaginationToken: SearchPaginationTokenTypeSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminListDevicesRequest',
    description: 'Represents the request to list devices, as an administrator.',
  })
  .openapi('AdminListDevicesRequest')

const DescriptionTypeSchema = z.string().max(2048).openapi('DescriptionType')

const PrecedenceTypeSchema = z.int().min(0).openapi('PrecedenceType')

const GroupTypeSchema = z
  .object({
    GroupName: GroupNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the group.' }),
    ).exactOptional(),
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ).exactOptional(),
    Description: DescriptionTypeSchema.and(
      z.any().openapi({ description: 'A string containing the description of the group.' }),
    ).exactOptional(),
    RoleArn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The role Amazon Resource Name (ARN) for the group.' }),
    ).exactOptional(),
    Precedence: PrecedenceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower <code>Precedence</code> values take precedence over groups with higher ornull <code>Precedence</code> values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims.</p> <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither group takes precedence over the other. If two groups with the same <code>Precedence</code> have the same role ARN, that role is used in the <code>cognito:preferred_role</code> claim in tokens for users in each group. If the two groups have different role ARNs, the <code>cognito:preferred_role</code> claim isn't set in users' tokens.</p> <p>The default <code>Precedence</code> value is null.</p>",
        }),
    ).exactOptional(),
    LastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The group type.', required: [] })
  .openapi('GroupType')

const GroupListTypeSchema = z.array(GroupTypeSchema).openapi('GroupListType')

const PaginationKeySchema = z.string().regex(/[\S]+/).min(1).openapi('PaginationKey')

const AdminListGroupsForUserResponseSchema = z
  .object({
    Groups: GroupListTypeSchema.and(
      z.any().openapi({ description: 'The groups that the user belongs to.' }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminListGroupsForUserResponse')

const AdminListGroupsForUserRequestSchema = z
  .object({
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The username for the user.' }),
    ),
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    Limit: QueryLimitTypeSchema.and(
      z.any().openapi({ description: 'The limit of the request to list groups.' }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Username', 'UserPoolId'], title: 'AdminListGroupsForUserRequest' })
  .openapi('AdminListGroupsForUserRequest')

const EventTypeSchema = z
  .enum(['SignIn', 'SignUp', 'ForgotPassword', 'PasswordChange', 'ResendCode'])
  .openapi('EventType')

const EventResponseTypeSchema = z.enum(['Pass', 'Fail', 'InProgress']).openapi('EventResponseType')

const RiskDecisionTypeSchema = z
  .enum(['NoRisk', 'AccountTakeover', 'Block'])
  .openapi('RiskDecisionType')

const RiskLevelTypeSchema = z.enum(['Low', 'Medium', 'High']).openapi('RiskLevelType')

const WrappedBooleanTypeSchema = z.boolean().openapi('WrappedBooleanType')

const EventRiskTypeSchema = z
  .object({
    RiskDecision: RiskDecisionTypeSchema.and(
      z.any().openapi({ description: 'The risk decision.' }),
    ).exactOptional(),
    RiskLevel: RiskLevelTypeSchema.and(
      z.any().openapi({ description: 'The risk level.' }),
    ).exactOptional(),
    CompromisedCredentialsDetected: WrappedBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether compromised credentials were detected during an authentication event.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The event risk type.', required: [] })
  .openapi('EventRiskType')

const ChallengeNameSchema = z.enum(['Password', 'Mfa']).openapi('ChallengeName')

const ChallengeResponseSchema = z.enum(['Success', 'Failure']).openapi('ChallengeResponse')

const ChallengeResponseTypeSchema = z
  .object({
    ChallengeName: ChallengeNameSchema.and(
      z.any().openapi({ description: 'The challenge name.' }),
    ).exactOptional(),
    ChallengeResponse: ChallengeResponseSchema.and(
      z.any().openapi({ description: 'The challenge response.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The challenge response type.', required: [] })
  .openapi('ChallengeResponseType')

const ChallengeResponseListTypeSchema = z
  .array(ChallengeResponseTypeSchema)
  .openapi('ChallengeResponseListType')

const EventContextDataTypeSchema = z
  .object({
    IpAddress: StringTypeSchema.and(
      z.any().openapi({ description: "The source IP address of your user's device." }),
    ).exactOptional(),
    DeviceName: StringTypeSchema.and(
      z.any().openapi({ description: "The user's device name." }),
    ).exactOptional(),
    Timezone: StringTypeSchema.and(
      z.any().openapi({ description: "The user's time zone." }),
    ).exactOptional(),
    City: StringTypeSchema.and(
      z.any().openapi({ description: "The user's city." }),
    ).exactOptional(),
    Country: StringTypeSchema.and(
      z.any().openapi({ description: "The user's country." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the user context data captured at the time of an event request.',
    required: [],
  })
  .openapi('EventContextDataType')

const FeedbackValueTypeSchema = z.enum(['Valid', 'Invalid']).openapi('FeedbackValueType')

const EventFeedbackTypeSchema = z
  .object({
    FeedbackValue: FeedbackValueTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The authentication event feedback value. When you provide a <code>FeedbackValue</code> value of <code>valid</code>, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a <code>FeedbackValue</code> value of <code>invalid</code>, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level.",
        }),
    ),
    Provider: StringTypeSchema.and(z.any().openapi({ description: 'The provider.' })),
    FeedbackDate: DateTypeSchema.and(
      z.any().openapi({ description: 'The event feedback date.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FeedbackValue', 'Provider'],
    description: 'Specifies the event feedback type.',
  })
  .openapi('EventFeedbackType')

const AuthEventTypeSchema = z
  .object({
    EventId: StringTypeSchema.and(
      z.any().openapi({ description: 'The event ID.' }),
    ).exactOptional(),
    EventType: EventTypeSchema.and(
      z.any().openapi({ description: 'The event type.' }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
    EventResponse: EventResponseTypeSchema.and(
      z.any().openapi({ description: 'The event response.' }),
    ).exactOptional(),
    EventRisk: EventRiskTypeSchema.and(
      z.any().openapi({ description: 'The event risk.' }),
    ).exactOptional(),
    ChallengeResponses: ChallengeResponseListTypeSchema.and(
      z.any().openapi({ description: 'The challenge responses.' }),
    ).exactOptional(),
    EventContextData: EventContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user context data captured at the time of an event request. This value provides additional information about the client from which event the request is received.',
        }),
    ).exactOptional(),
    EventFeedback: EventFeedbackTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag specifying the user feedback captured at the time of an event request is good or bad. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The authentication event type.', required: [] })
  .openapi('AuthEventType')

const AuthEventsTypeSchema = z.array(AuthEventTypeSchema).openapi('AuthEventsType')

const AdminListUserAuthEventsResponseSchema = z
  .object({
    AuthEvents: AuthEventsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response object. It includes the <code>EventID</code>, <code>EventType</code>, <code>CreationDate</code>, <code>EventRisk</code>, and <code>EventResponse</code>.',
        }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminListUserAuthEventsResponse')

const AdminListUserAuthEventsRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user pool username or an alias.' }),
    ),
    MaxResults: QueryLimitTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of authentication events to return. Returns 60 events if you set <code>MaxResults</code> to 0, or if you don't include a <code>MaxResults</code> parameter.",
        }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId', 'Username'], title: 'AdminListUserAuthEventsRequest' })
  .openapi('AdminListUserAuthEventsRequest')

const UserPoolAddOnNotEnabledExceptionSchema = z.any().openapi('UserPoolAddOnNotEnabledException')

const AdminRemoveUserFromGroupRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The username for the user.' }),
    ),
    GroupName: GroupNameTypeSchema.and(z.any().openapi({ description: 'The group name.' })),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'GroupName'],
    title: 'AdminRemoveUserFromGroupRequest',
  })
  .openapi('AdminRemoveUserFromGroupRequest')

const AdminResetUserPasswordResponseSchema = z
  .object({})
  .openapi({
    description:
      'Represents the response from the server to reset a user password as an administrator.',
  })
  .openapi('AdminResetUserPasswordResponse')

const AdminResetUserPasswordRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The user pool ID for the user pool where you want to reset the user's password.",
        }),
    ),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The user name of the user whose password you want to reset.' }),
    ),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminResetUserPassword API action, Amazon Cognito invokes the function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminResetUserPassword request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminResetUserPasswordRequest',
    description: "Represents the request to reset a user's password as an administrator.",
  })
  .openapi('AdminResetUserPasswordRequest')

const InvalidEmailRoleAccessPolicyExceptionSchema = z
  .any()
  .openapi('InvalidEmailRoleAccessPolicyException')

const AdminRespondToAuthChallengeResponseSchema = z
  .object({
    ChallengeName: ChallengeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the challenge. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.',
        }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service. If the caller must pass another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.',
        }),
    ).exactOptional(),
    ChallengeParameters: ChallengeParametersTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.',
        }),
    ).exactOptional(),
    AuthenticationResult: AuthenticationResultTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The result returned by the server in response to the authentication request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Responds to the authentication challenge, as an administrator.',
    required: [],
  })
  .openapi('AdminRespondToAuthChallengeResponse')

const ChallengeResponsesTypeSchema = z
  .record(z.string(), StringTypeSchema)
  .openapi('ChallengeResponsesType')

const AdminRespondToAuthChallengeRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Cognito user pool.' }),
    ),
    ClientId: ClientIdTypeSchema.and(z.any().openapi({ description: 'The app client ID.' })),
    ChallengeName: ChallengeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.',
        }),
    ),
    ChallengeResponses: ChallengeResponsesTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The challenge responses. These are inputs corresponding to the value of <code>ChallengeName</code>, for example:</p> <ul> <li> <p> <code>SMS_MFA</code>: <code>SMS_MFA_CODE</code>, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret).</p> </li> <li> <p> <code>PASSWORD_VERIFIER</code>: <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, <code>TIMESTAMP</code>, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret).</p> <note> <p> <code>PASSWORD_VERIFIER</code> requires <code>DEVICE_KEY</code> when signing in with a remembered device.</p> </note> </li> <li> <p> <code>ADMIN_NO_SRP_AUTH</code>: <code>PASSWORD</code>, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret). </p> </li> <li> <p> <code>NEW_PASSWORD_REQUIRED</code>: <code>NEW_PASSWORD</code>, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret). To set any required attributes that Amazon Cognito returned as <code>requiredAttributes</code> in the <code>AdminInitiateAuth</code> response, add a <code>userAttributes.<i>attributename</i> </code> parameter. This parameter can also set values for writable attributes that aren\'t required by your user pool.</p> <note> <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can\'t modify a required attribute that already has a value. In <code>AdminRespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p> </note> </li> <li> <p> <code>MFA_SETUP</code> requires <code>USERNAME</code>, plus you must use the session value returned by <code>VerifySoftwareToken</code> in the <code>Session</code> parameter.</p> </li> </ul> <p>The value of the <code>USERNAME</code> attribute must be the user\'s actual username, not an alias (such as an email address or phone number). To make this simpler, the <code>AdminInitiateAuth</code> response includes the actual username value in the <code>USERNAMEUSER_ID_FOR_SRP</code> attribute. This happens even if you specified an alias in your call to <code>AdminInitiateAuth</code>.</p> <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>',
        }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service. If an <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call determines that the caller must pass another challenge, it returns a session with other challenge parameters. This session should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.',
        }),
    ).exactOptional(),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The analytics metadata for collecting Amazon Pinpoint metrics for <code>AdminRespondToAuthChallenge</code> calls.',
        }),
    ).exactOptional(),
    ContextData: ContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminRespondToAuthChallenge API action, Amazon Cognito invokes any functions that you have assigned to the following triggers: </p> <ul> <li> <p>pre sign-up</p> </li> <li> <p>custom message</p> </li> <li> <p>post authentication</p> </li> <li> <p>user migration</p> </li> <li> <p>pre token generation</p> </li> <li> <p>define auth challenge</p> </li> <li> <p>create auth challenge</p> </li> <li> <p>verify auth challenge response</p> </li> </ul> <p>When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute that provides the data that you assigned to the ClientMetadata parameter in your AdminRespondToAuthChallenge request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'ClientId', 'ChallengeName'],
    title: 'AdminRespondToAuthChallengeRequest',
    description: 'The request to respond to the authentication challenge, as an administrator.',
  })
  .openapi('AdminRespondToAuthChallengeRequest')

const CodeMismatchExceptionSchema = z.any().openapi('CodeMismatchException')

const ExpiredCodeExceptionSchema = z.any().openapi('ExpiredCodeException')

const SoftwareTokenMFANotFoundExceptionSchema = z.any().openapi('SoftwareTokenMFANotFoundException')

const AdminSetUserMFAPreferenceResponseSchema = z
  .object({})
  .openapi('AdminSetUserMFAPreferenceResponse')

const SMSMfaSettingsTypeSchema = z
  .object({
    Enabled: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether SMS text message MFA is activated. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted.',
        }),
    ).exactOptional(),
    PreferredMfa: BooleanTypeSchema.and(
      z.any().openapi({ description: 'Specifies whether SMS is the preferred MFA method.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The type used for enabling SMS multi-factor authentication (MFA) at the user level. Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.",
    required: [],
  })
  .openapi('SMSMfaSettingsType')

const SoftwareTokenMfaSettingsTypeSchema = z
  .object({
    Enabled: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether software token MFA is activated. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted.',
        }),
    ).exactOptional(),
    PreferredMfa: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether software token MFA is the preferred MFA method.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The type used for enabling software token MFA at the user level. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.',
    required: [],
  })
  .openapi('SoftwareTokenMfaSettingsType')

const AdminSetUserMFAPreferenceRequestSchema = z
  .object({
    SMSMfaSettings: SMSMfaSettingsTypeSchema.and(
      z.any().openapi({ description: 'The SMS text message MFA settings.' }),
    ).exactOptional(),
    SoftwareTokenMfaSettings: SoftwareTokenMfaSettingsTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The time-based one-time password software token MFA settings.' }),
    ).exactOptional(),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user pool username or alias.' }),
    ),
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
  })
  .openapi({ required: ['Username', 'UserPoolId'], title: 'AdminSetUserMFAPreferenceRequest' })
  .openapi('AdminSetUserMFAPreferenceRequest')

const AdminSetUserPasswordResponseSchema = z.object({}).openapi('AdminSetUserPasswordResponse')

const AdminSetUserPasswordRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The user pool ID for the user pool where you want to set the user's password.",
        }),
    ),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user name of the user whose password you want to set.' }),
    ),
    Password: PasswordTypeSchema.and(
      z.any().openapi({ description: 'The password for the user.' }),
    ),
    Permanent: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>True</code> if the password is permanent, <code>False</code> if it is temporary.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'Password'],
    title: 'AdminSetUserPasswordRequest',
  })
  .openapi('AdminSetUserPasswordRequest')

const AdminSetUserSettingsResponseSchema = z
  .object({})
  .openapi({
    description:
      'Represents the response from the server to set user settings as an administrator.',
  })
  .openapi('AdminSetUserSettingsResponse')

const AdminSetUserSettingsRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the user pool that contains the user whose options you're setting.",
        }),
    ),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: "The user name of the user whose options you're setting." }),
    ),
    MFAOptions: MFAOptionListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use this parameter only to set an SMS configuration that uses SMS for delivery.',
        }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'MFAOptions'],
    title: 'AdminSetUserSettingsRequest',
    description:
      'You can use this parameter to set an MFA configuration that uses the SMS delivery medium.',
  })
  .openapi('AdminSetUserSettingsRequest')

const AdminUpdateAuthEventFeedbackResponseSchema = z
  .object({})
  .openapi('AdminUpdateAuthEventFeedbackResponse')

const EventIdTypeSchema = z
  .string()
  .regex(/[\w+-]+/)
  .min(1)
  .max(50)
  .openapi('EventIdType')

const AdminUpdateAuthEventFeedbackRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    Username: UsernameTypeSchema.and(z.any().openapi({ description: 'The user pool username.' })),
    EventId: EventIdTypeSchema.and(
      z.any().openapi({ description: 'The authentication event ID.' }),
    ),
    FeedbackValue: FeedbackValueTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The authentication event feedback value. When you provide a <code>FeedbackValue</code> value of <code>valid</code>, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a <code>FeedbackValue</code> value of <code>invalid</code>, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level.",
        }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'EventId', 'FeedbackValue'],
    title: 'AdminUpdateAuthEventFeedbackRequest',
  })
  .openapi('AdminUpdateAuthEventFeedbackRequest')

const AdminUpdateDeviceStatusResponseSchema = z
  .object({})
  .openapi({
    description: 'The status response to the request to update the device, as an administrator.',
  })
  .openapi('AdminUpdateDeviceStatusResponse')

const DeviceRememberedStatusTypeSchema = z
  .enum(['remembered', 'not_remembered'])
  .openapi('DeviceRememberedStatusType')

const AdminUpdateDeviceStatusRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    Username: UsernameTypeSchema.and(z.any().openapi({ description: 'The user name.' })),
    DeviceKey: DeviceKeyTypeSchema.and(z.any().openapi({ description: 'The device key.' })),
    DeviceRememberedStatus: DeviceRememberedStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The status indicating whether a device has been remembered or not.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'DeviceKey'],
    title: 'AdminUpdateDeviceStatusRequest',
    description: 'The request to update the device status, as an administrator.',
  })
  .openapi('AdminUpdateDeviceStatusRequest')

const AdminUpdateUserAttributesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Represents the response from the server for the request to update user attributes as an administrator.',
  })
  .openapi('AdminUpdateUserAttributesResponse')

const AdminUpdateUserAttributesRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool where you want to update user attributes.',
        }),
    ),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user name of the user for whom you want to update user attributes.',
        }),
    ),
    UserAttributes: AttributeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of name-value pairs representing user attributes.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>If your user pool requires verification before Amazon Cognito updates an attribute value that you specify in this request, Amazon Cognito doesn’t immediately update the value of that attribute. After your user receives and responds to a verification message to verify the new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages with the original attribute value until they verify the new value.</p> <p>To update the value of an attribute that requires verification in the same API request, include the <code>email_verified</code> or <code>phone_number_verified</code> attribute, with a value of <code>true</code>. If you set the <code>email_verified</code> or <code>phone_number_verified</code> value for an <code>email</code> or <code>phone_number</code> attribute that requires verification to <code>true</code>, Amazon Cognito doesn’t send a verification message to your user.</p>',
        }),
    ),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminUpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminUpdateUserAttributes request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'UserAttributes'],
    title: 'AdminUpdateUserAttributesRequest',
    description: "Represents the request to update the user's attributes as an administrator.",
  })
  .openapi('AdminUpdateUserAttributesRequest')

const AdminUserGlobalSignOutResponseSchema = z
  .object({})
  .openapi({ description: 'The global sign-out response, as an administrator.' })
  .openapi('AdminUserGlobalSignOutResponse')

const AdminUserGlobalSignOutRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    Username: UsernameTypeSchema.and(z.any().openapi({ description: 'The user name.' })),
  })
  .openapi({
    required: ['UserPoolId', 'Username'],
    title: 'AdminUserGlobalSignOutRequest',
    description: 'The request to sign out of all devices, as an administrator.',
  })
  .openapi('AdminUserGlobalSignOutRequest')

const SecretCodeTypeSchema = z
  .string()
  .regex(/[A-Za-z0-9]+/)
  .min(16)
  .openapi('SecretCodeType')

const AssociateSoftwareTokenResponseSchema = z
  .object({
    SecretCode: SecretCodeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique generated shared secret code that is used in the TOTP algorithm to generate a one-time code.',
        }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service. This allows authentication of the user as part of the MFA setup process.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateSoftwareTokenResponse')

const AssociateSoftwareTokenRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose software token you want to generate.',
        }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service. This allows authentication of the user as part of the MFA setup process.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'AssociateSoftwareTokenRequest', required: [] })
  .openapi('AssociateSoftwareTokenRequest')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const ChangePasswordResponseSchema = z
  .object({})
  .openapi({ description: 'The response from the server to the change password request.' })
  .openapi('ChangePasswordResponse')

const ChangePasswordRequestSchema = z
  .object({
    PreviousPassword: PasswordTypeSchema.and(z.any().openapi({ description: 'The old password.' })),
    ProposedPassword: PasswordTypeSchema.and(z.any().openapi({ description: 'The new password.' })),
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose password you want to change.',
        }),
    ),
  })
  .openapi({
    required: ['PreviousPassword', 'ProposedPassword', 'AccessToken'],
    title: 'ChangePasswordRequest',
    description: 'Represents the request to change a user password.',
  })
  .openapi('ChangePasswordRequest')

const ConfirmDeviceResponseSchema = z
  .object({
    UserConfirmationNecessary: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the user confirmation must confirm the device response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Confirms the device response.', required: [] })
  .openapi('ConfirmDeviceResponse')

const DeviceSecretVerifierConfigTypeSchema = z
  .object({
    PasswordVerifier: StringTypeSchema.and(
      z.any().openapi({ description: 'The password verifier.' }),
    ).exactOptional(),
    Salt: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a> ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The device verifier against which it is authenticated.', required: [] })
  .openapi('DeviceSecretVerifierConfigType')

const DeviceNameTypeSchema = z.string().min(1).max(1024).openapi('DeviceNameType')

const ConfirmDeviceRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose device you want to confirm.',
        }),
    ),
    DeviceKey: DeviceKeyTypeSchema.and(z.any().openapi({ description: 'The device key.' })),
    DeviceSecretVerifierConfig: DeviceSecretVerifierConfigTypeSchema.and(
      z.any().openapi({ description: 'The configuration of the device secret verifier.' }),
    ).exactOptional(),
    DeviceName: DeviceNameTypeSchema.and(
      z.any().openapi({ description: 'The device name.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccessToken', 'DeviceKey'],
    title: 'ConfirmDeviceRequest',
    description: 'Confirms the device request.',
  })
  .openapi('ConfirmDeviceRequest')

const ConfirmForgotPasswordResponseSchema = z
  .object({})
  .openapi({
    description:
      "The response from the server that results from a user's request to retrieve a forgotten password.",
  })
  .openapi('ConfirmForgotPasswordResponse')

const SecretHashTypeSchema = z
  .string()
  .regex(/[\w+=\/]+/)
  .min(1)
  .max(128)
  .openapi('SecretHashType')

const ConfirmationCodeTypeSchema = z
  .string()
  .regex(/[\S]+/)
  .min(1)
  .max(2048)
  .openapi('ConfirmationCodeType')

const UserContextDataTypeSchema = z
  .object({
    IpAddress: StringTypeSchema.and(
      z.any().openapi({ description: "The source IP address of your user's device." }),
    ).exactOptional(),
    EncodedData: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Encoded device-fingerprint details that your app collected with the Amazon Cognito context data collection library. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding user device and session data to API requests</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Contextual data, such as the user's device fingerprint, IP address, or location, used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
    required: [],
  })
  .openapi('UserContextDataType')

const ConfirmForgotPasswordRequestSchema = z
  .object({
    ClientId: ClientIdTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The app client ID of the app associated with the user pool.' }),
    ),
    SecretHash: SecretHashTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about <code>SecretHash</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>.',
        }),
    ).exactOptional(),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name of the user for whom you want to enter a code to retrieve a forgotten password.',
        }),
    ),
    ConfirmationCode: ConfirmationCodeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confirmation code from your user\'s request to reset their password. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html">ForgotPassword</a>.',
        }),
    ),
    Password: PasswordTypeSchema.and(
      z.any().openapi({ description: 'The new password that your user wants to set.' }),
    ),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Pinpoint analytics metadata for collecting metrics for <code>ConfirmForgotPassword</code> calls.',
        }),
    ).exactOptional(),
    UserContextData: UserContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ConfirmForgotPassword API action, Amazon Cognito invokes the function that is assigned to the <i>post confirmation</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your ConfirmForgotPassword request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientId', 'Username', 'ConfirmationCode', 'Password'],
    title: 'ConfirmForgotPasswordRequest',
    description: 'The request representing the confirmation for a password reset.',
  })
  .openapi('ConfirmForgotPasswordRequest')

const ConfirmSignUpResponseSchema = z
  .object({})
  .openapi({
    description: 'Represents the response from the server for the registration confirmation.',
  })
  .openapi('ConfirmSignUpResponse')

const ConfirmSignUpRequestSchema = z
  .object({
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the app client associated with the user pool.' }),
    ),
    SecretHash: SecretHashTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.',
        }),
    ).exactOptional(),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user name of the user whose registration you want to confirm.',
        }),
    ),
    ConfirmationCode: ConfirmationCodeTypeSchema.and(
      z
        .any()
        .openapi({
          description: "The confirmation code sent by a user's request to confirm registration.",
        }),
    ),
    ForceAliasCreation: ForceAliasCreationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean to be specified to force user confirmation irrespective of existing alias. By default set to <code>False</code>. If this parameter is set to <code>True</code> and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user being confirmed. If set to <code>False</code>, the API will throw an <b>AliasExistsException</b> error.',
        }),
    ).exactOptional(),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Pinpoint analytics metadata for collecting metrics for <code>ConfirmSignUp</code> calls.',
        }),
    ).exactOptional(),
    UserContextData: UserContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ConfirmSignUp API action, Amazon Cognito invokes the function that is assigned to the <i>post confirmation</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your ConfirmSignUp request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientId', 'Username', 'ConfirmationCode'],
    title: 'ConfirmSignUpRequest',
    description: 'Represents the request to confirm registration of a user.',
  })
  .openapi('ConfirmSignUpRequest')

const CreateGroupResponseSchema = z
  .object({
    Group: GroupTypeSchema.and(
      z.any().openapi({ description: 'The group object for the group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGroupResponse')

const CreateGroupRequestSchema = z
  .object({
    GroupName: GroupNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the group. Must be unique.' }),
    ),
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    Description: DescriptionTypeSchema.and(
      z.any().openapi({ description: 'A string containing the description of the group.' }),
    ).exactOptional(),
    RoleArn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The role Amazon Resource Name (ARN) for the group.' }),
    ).exactOptional(),
    Precedence: PrecedenceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower <code>Precedence</code> values take precedence over groups with higher or null <code>Precedence</code> values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims.</p> <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither group takes precedence over the other. If two groups with the same <code>Precedence</code> have the same role ARN, that role is used in the <code>cognito:preferred_role</code> claim in tokens for users in each group. If the two groups have different role ARNs, the <code>cognito:preferred_role</code> claim isn't set in users' tokens.</p> <p>The default <code>Precedence</code> value is null. The maximum <code>Precedence</code> value is <code>2^31-1</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GroupName', 'UserPoolId'], title: 'CreateGroupRequest' })
  .openapi('CreateGroupRequest')

const GroupExistsExceptionSchema = z.any().openapi('GroupExistsException')

const IdentityProviderTypeTypeSchema = z
  .enum(['SAML', 'Facebook', 'Google', 'LoginWithAmazon', 'SignInWithApple', 'OIDC'])
  .openapi('IdentityProviderTypeType')

const ProviderDetailsTypeSchema = z
  .record(z.string(), StringTypeSchema)
  .openapi('ProviderDetailsType')

const AttributeMappingTypeSchema = z
  .record(z.string(), StringTypeSchema)
  .openapi('AttributeMappingType')

const IdpIdentifierTypeSchema = z
  .string()
  .regex(/[\w\s+=.@-]+/)
  .min(1)
  .max(40)
  .openapi('IdpIdentifierType')

const IdpIdentifiersListTypeSchema = z
  .array(IdpIdentifierTypeSchema)
  .min(0)
  .max(50)
  .openapi('IdpIdentifiersListType')

const IdentityProviderTypeSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID.' }),
    ).exactOptional(),
    ProviderName: ProviderNameTypeSchema.and(
      z.any().openapi({ description: 'The IdP name.' }),
    ).exactOptional(),
    ProviderType: IdentityProviderTypeTypeSchema.and(
      z.any().openapi({ description: 'The IdP type.' }),
    ).exactOptional(),
    ProviderDetails: ProviderDetailsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The IdP details. The following list describes the provider detail keys for each IdP type.</p> <ul> <li> <p>For Google and Login with Amazon:</p> <ul> <li> <p>client_id</p> </li> <li> <p>client_secret</p> </li> <li> <p>authorize_scopes</p> </li> </ul> </li> <li> <p>For Facebook:</p> <ul> <li> <p>client_id</p> </li> <li> <p>client_secret</p> </li> <li> <p>authorize_scopes</p> </li> <li> <p>api_version</p> </li> </ul> </li> <li> <p>For Sign in with Apple:</p> <ul> <li> <p>client_id</p> </li> <li> <p>team_id</p> </li> <li> <p>key_id</p> </li> <li> <p>private_key</p> <p> <i>You can submit a private_key when you add or update an IdP. Describe operations don't return the private key.</i> </p> </li> <li> <p>authorize_scopes</p> </li> </ul> </li> <li> <p>For OIDC providers:</p> <ul> <li> <p>client_id</p> </li> <li> <p>client_secret</p> </li> <li> <p>attributes_request_method</p> </li> <li> <p>oidc_issuer</p> </li> <li> <p>authorize_scopes</p> </li> <li> <p>The following keys are only present if Amazon Cognito didn't discover them at the <code>oidc_issuer</code> URL.</p> <ul> <li> <p>authorize_url </p> </li> <li> <p>token_url </p> </li> <li> <p>attributes_url </p> </li> <li> <p>jwks_uri </p> </li> </ul> </li> <li> <p>Amazon Cognito sets the value of the following keys automatically. They are read-only.</p> <ul> <li> <p>attributes_url_add_attributes </p> </li> </ul> </li> </ul> </li> <li> <p>For SAML providers:</p> <ul> <li> <p>MetadataFile or MetadataURL</p> </li> <li> <p>IDPSignout <i>optional</i> </p> </li> </ul> </li> </ul>",
        }),
    ).exactOptional(),
    AttributeMapping: AttributeMappingTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A mapping of IdP attributes to standard and custom user pool attributes.',
        }),
    ).exactOptional(),
    IdpIdentifiers: IdpIdentifiersListTypeSchema.and(
      z.any().openapi({ description: 'A list of IdP identifiers.' }),
    ).exactOptional(),
    LastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A container for information about an IdP.', required: [] })
  .openapi('IdentityProviderType')

const CreateIdentityProviderResponseSchema = z
  .object({
    IdentityProvider: IdentityProviderTypeSchema.and(
      z.any().openapi({ description: 'The newly created IdP object.' }),
    ),
  })
  .openapi({ required: ['IdentityProvider'] })
  .openapi('CreateIdentityProviderResponse')

const ProviderNameTypeV1Schema = z
  .string()
  .regex(/[^_][\p{L}\p{M}\p{S}\p{N}\p{P}][^_]+/u)
  .min(3)
  .max(32)
  .openapi('ProviderNameTypeV1')

const CreateIdentityProviderRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    ProviderName: ProviderNameTypeV1Schema.and(z.any().openapi({ description: 'The IdP name.' })),
    ProviderType: IdentityProviderTypeTypeSchema.and(
      z.any().openapi({ description: 'The IdP type.' }),
    ),
    ProviderDetails: ProviderDetailsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The IdP details. The following list describes the provider detail keys for each IdP type.</p> <ul> <li> <p>For Google and Login with Amazon:</p> <ul> <li> <p>client_id</p> </li> <li> <p>client_secret</p> </li> <li> <p>authorize_scopes</p> </li> </ul> </li> <li> <p>For Facebook:</p> <ul> <li> <p>client_id</p> </li> <li> <p>client_secret</p> </li> <li> <p>authorize_scopes</p> </li> <li> <p>api_version</p> </li> </ul> </li> <li> <p>For Sign in with Apple:</p> <ul> <li> <p>client_id</p> </li> <li> <p>team_id</p> </li> <li> <p>key_id</p> </li> <li> <p>private_key</p> </li> <li> <p>authorize_scopes</p> </li> </ul> </li> <li> <p>For OpenID Connect (OIDC) providers:</p> <ul> <li> <p>client_id</p> </li> <li> <p>client_secret</p> </li> <li> <p>attributes_request_method</p> </li> <li> <p>oidc_issuer</p> </li> <li> <p>authorize_scopes</p> </li> <li> <p>The following keys are only present if Amazon Cognito didn't discover them at the <code>oidc_issuer</code> URL.</p> <ul> <li> <p>authorize_url </p> </li> <li> <p>token_url </p> </li> <li> <p>attributes_url </p> </li> <li> <p>jwks_uri </p> </li> </ul> </li> <li> <p>Amazon Cognito sets the value of the following keys automatically. They are read-only.</p> <ul> <li> <p>attributes_url_add_attributes </p> </li> </ul> </li> </ul> </li> <li> <p>For SAML providers:</p> <ul> <li> <p>MetadataFile or MetadataURL</p> </li> <li> <p>IDPSignout <i>optional</i> </p> </li> </ul> </li> </ul>",
        }),
    ),
    AttributeMapping: AttributeMappingTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A mapping of IdP attributes to standard and custom user pool attributes.',
        }),
    ).exactOptional(),
    IdpIdentifiers: IdpIdentifiersListTypeSchema.and(
      z.any().openapi({ description: 'A list of IdP identifiers.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'ProviderName', 'ProviderType', 'ProviderDetails'],
    title: 'CreateIdentityProviderRequest',
  })
  .openapi('CreateIdentityProviderRequest')

const DuplicateProviderExceptionSchema = z.any().openapi('DuplicateProviderException')

const ResourceServerIdentifierTypeSchema = z
  .string()
  .regex(/[\x21\x23-\x5B\x5D-\x7E]+/)
  .min(1)
  .max(256)
  .openapi('ResourceServerIdentifierType')

const ResourceServerNameTypeSchema = z
  .string()
  .regex(/[\w\s+=,.@-]+/)
  .min(1)
  .max(256)
  .openapi('ResourceServerNameType')

const ResourceServerScopeNameTypeSchema = z
  .string()
  .regex(/[\x21\x23-\x2E\x30-\x5B\x5D-\x7E]+/)
  .min(1)
  .max(256)
  .openapi('ResourceServerScopeNameType')

const ResourceServerScopeDescriptionTypeSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi('ResourceServerScopeDescriptionType')

const ResourceServerScopeTypeSchema = z
  .object({
    ScopeName: ResourceServerScopeNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the scope.' }),
    ),
    ScopeDescription: ResourceServerScopeDescriptionTypeSchema.and(
      z.any().openapi({ description: 'A description of the scope.' }),
    ),
  })
  .openapi({ required: ['ScopeName', 'ScopeDescription'], description: 'A resource server scope.' })
  .openapi('ResourceServerScopeType')

const ResourceServerScopeListTypeSchema = z
  .array(ResourceServerScopeTypeSchema)
  .max(100)
  .openapi('ResourceServerScopeListType')

const ResourceServerTypeSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that hosts the resource server.',
        }),
    ).exactOptional(),
    Identifier: ResourceServerIdentifierTypeSchema.and(
      z.any().openapi({ description: 'The identifier for the resource server.' }),
    ).exactOptional(),
    Name: ResourceServerNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the resource server.' }),
    ).exactOptional(),
    Scopes: ResourceServerScopeListTypeSchema.and(
      z
        .any()
        .openapi({ description: 'A list of scopes that are defined for the resource server.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A container for information about a resource server for a user pool.',
    required: [],
  })
  .openapi('ResourceServerType')

const CreateResourceServerResponseSchema = z
  .object({
    ResourceServer: ResourceServerTypeSchema.and(
      z.any().openapi({ description: 'The newly created resource server.' }),
    ),
  })
  .openapi({ required: ['ResourceServer'] })
  .openapi('CreateResourceServerResponse')

const CreateResourceServerRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    Identifier: ResourceServerIdentifierTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique resource server identifier for the resource server. This could be an HTTPS endpoint where the resource server is located, such as <code>https://my-weather-api.example.com</code>.',
        }),
    ),
    Name: ResourceServerNameTypeSchema.and(
      z.any().openapi({ description: 'A friendly name for the resource server.' }),
    ),
    Scopes: ResourceServerScopeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of scopes. Each scope is a key-value map with the keys <code>name</code> and <code>description</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId', 'Identifier', 'Name'], title: 'CreateResourceServerRequest' })
  .openapi('CreateResourceServerRequest')

const UserImportJobNameTypeSchema = z
  .string()
  .regex(/[\w\s+=,.@-]+/)
  .min(1)
  .max(128)
  .openapi('UserImportJobNameType')

const UserImportJobIdTypeSchema = z
  .string()
  .regex(/import-[0-9a-zA-Z-]+/)
  .min(1)
  .max(55)
  .openapi('UserImportJobIdType')

const PreSignedUrlTypeSchema = z.string().min(0).max(2048).openapi('PreSignedUrlType')

const UserImportJobStatusTypeSchema = z
  .enum([
    'Created',
    'Pending',
    'InProgress',
    'Stopping',
    'Expired',
    'Stopped',
    'Failed',
    'Succeeded',
  ])
  .openapi('UserImportJobStatusType')

const LongTypeSchema = z.int().openapi('LongType')

const CompletionMessageTypeSchema = z
  .string()
  .regex(/[\w]+/)
  .min(1)
  .max(128)
  .openapi('CompletionMessageType')

const UserImportJobTypeSchema = z
  .object({
    JobName: UserImportJobNameTypeSchema.and(
      z.any().openapi({ description: 'The job name for the user import job.' }),
    ).exactOptional(),
    JobId: UserImportJobIdTypeSchema.and(
      z.any().openapi({ description: 'The job ID for the user import job.' }),
    ).exactOptional(),
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that the users are being imported into.',
        }),
    ).exactOptional(),
    PreSignedUrl: PreSignedUrlTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The pre-signed URL to be used to upload the <code>.csv</code> file.',
        }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
    StartDate: DateTypeSchema.and(
      z.any().openapi({ description: 'The date when the user import job was started.' }),
    ).exactOptional(),
    CompletionDate: DateTypeSchema.and(
      z.any().openapi({ description: 'The date when the user import job was completed.' }),
    ).exactOptional(),
    Status: UserImportJobStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the user import job. One of the following:</p> <ul> <li> <p> <code>Created</code> - The job was created but not started.</p> </li> <li> <p> <code>Pending</code> - A transition state. You have started the job, but it has not begun importing users yet.</p> </li> <li> <p> <code>InProgress</code> - The job has started, and users are being imported.</p> </li> <li> <p> <code>Stopping</code> - You have stopped the job, but the job has not stopped importing users yet.</p> </li> <li> <p> <code>Stopped</code> - You have stopped the job, and the job has stopped importing users.</p> </li> <li> <p> <code>Succeeded</code> - The job has completed successfully.</p> </li> <li> <p> <code>Failed</code> - The job has stopped due to an error.</p> </li> <li> <p> <code>Expired</code> - You created a job, but did not start the job within 24-48 hours. All data associated with the job was deleted, and the job can't be started.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CloudWatchLogsRoleArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role Amazon Resource Name (ARN) for the Amazon CloudWatch Logging role for the user import job. For more information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer Guide.',
        }),
    ).exactOptional(),
    ImportedUsers: LongTypeSchema.and(
      z.any().openapi({ description: 'The number of users that were successfully imported.' }),
    ).exactOptional(),
    SkippedUsers: LongTypeSchema.and(
      z.any().openapi({ description: 'The number of users that were skipped.' }),
    ).exactOptional(),
    FailedUsers: LongTypeSchema.and(
      z.any().openapi({ description: "The number of users that couldn't be imported." }),
    ).exactOptional(),
    CompletionMessage: CompletionMessageTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The message returned when the user import job is completed.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The user import job type.', required: [] })
  .openapi('UserImportJobType')

const CreateUserImportJobResponseSchema = z
  .object({
    UserImportJob: UserImportJobTypeSchema.and(
      z.any().openapi({ description: 'The job object that represents the user import job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server to the request to create the user import job.',
    required: [],
  })
  .openapi('CreateUserImportJobResponse')

const CreateUserImportJobRequestSchema = z
  .object({
    JobName: UserImportJobNameTypeSchema.and(
      z.any().openapi({ description: 'The job name for the user import job.' }),
    ),
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that the users are being imported into.',
        }),
    ),
    CloudWatchLogsRoleArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role ARN for the Amazon CloudWatch Logs Logging role for the user import job.',
        }),
    ),
  })
  .openapi({
    required: ['JobName', 'UserPoolId', 'CloudWatchLogsRoleArn'],
    title: 'CreateUserImportJobRequest',
    description: 'Represents the request to create the user import job.',
  })
  .openapi('CreateUserImportJobRequest')

const UserPoolNameTypeSchema = z
  .string()
  .regex(/[\w\s+=,.@-]+/)
  .min(1)
  .max(128)
  .openapi('UserPoolNameType')

const PasswordPolicyMinLengthTypeSchema = z
  .int()
  .min(6)
  .max(99)
  .openapi('PasswordPolicyMinLengthType')

const TemporaryPasswordValidityDaysTypeSchema = z
  .int()
  .min(0)
  .max(365)
  .openapi('TemporaryPasswordValidityDaysType')

const PasswordPolicyTypeSchema = z
  .object({
    MinimumLength: PasswordPolicyMinLengthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The minimum length of the password in the policy that you have set. This value can't be less than 6.",
        }),
    ).exactOptional(),
    RequireUppercase: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'In the password policy that you have set, refers to whether you have required users to use at least one uppercase letter in their password.',
        }),
    ).exactOptional(),
    RequireLowercase: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'In the password policy that you have set, refers to whether you have required users to use at least one lowercase letter in their password.',
        }),
    ).exactOptional(),
    RequireNumbers: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'In the password policy that you have set, refers to whether you have required users to use at least one number in their password.',
        }),
    ).exactOptional(),
    RequireSymbols: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'In the password policy that you have set, refers to whether you have required users to use at least one symbol in their password.',
        }),
    ).exactOptional(),
    TemporaryPasswordValidityDays: TemporaryPasswordValidityDaysTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of days a temporary password is valid in the password policy. If the user doesn't sign in during this time, an administrator must reset their password.</p> <note> <p>When you set <code>TemporaryPasswordValidityDays</code> for a user pool, you can no longer set a value for the legacy <code>UnusedAccountValidityDays</code> parameter in that user pool.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The password policy type.', required: [] })
  .openapi('PasswordPolicyType')

const UserPoolPolicyTypeSchema = z
  .object({
    PasswordPolicy: PasswordPolicyTypeSchema.and(
      z.any().openapi({ description: 'The password policy.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The policy associated with a user pool.', required: [] })
  .openapi('UserPoolPolicyType')

const DeletionProtectionTypeSchema = z
  .enum(['ACTIVE', 'INACTIVE'])
  .openapi('DeletionProtectionType')

const CustomSMSSenderLambdaVersionTypeSchema = z
  .literal('V1_0')
  .openapi('CustomSMSSenderLambdaVersionType')

const CustomSMSLambdaVersionConfigTypeSchema = z
  .object({
    LambdaVersion: CustomSMSSenderLambdaVersionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Signature of the "request" attribute in the "event" information that Amazon Cognito passes to your custom SMS Lambda function. The only supported value is <code>V1_0</code>.',
        }),
    ),
    LambdaArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Lambda function that Amazon Cognito activates to send SMS notifications to users.',
        }),
    ),
  })
  .openapi({
    required: ['LambdaVersion', 'LambdaArn'],
    description: 'A custom SMS sender Lambda configuration type.',
  })
  .openapi('CustomSMSLambdaVersionConfigType')

const CustomEmailSenderLambdaVersionTypeSchema = z
  .literal('V1_0')
  .openapi('CustomEmailSenderLambdaVersionType')

const CustomEmailLambdaVersionConfigTypeSchema = z
  .object({
    LambdaVersion: CustomEmailSenderLambdaVersionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom email Lambda function. The only supported value is <code>V1_0</code>.',
        }),
    ),
    LambdaArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Lambda function that Amazon Cognito activates to send email notifications to users.',
        }),
    ),
  })
  .openapi({
    required: ['LambdaVersion', 'LambdaArn'],
    description: 'A custom email sender Lambda configuration type.',
  })
  .openapi('CustomEmailLambdaVersionConfigType')

const LambdaConfigTypeSchema = z
  .object({
    PreSignUp: ArnTypeSchema.and(
      z.any().openapi({ description: 'A pre-registration Lambda trigger.' }),
    ).exactOptional(),
    CustomMessage: ArnTypeSchema.and(
      z.any().openapi({ description: 'A custom Message Lambda trigger.' }),
    ).exactOptional(),
    PostConfirmation: ArnTypeSchema.and(
      z.any().openapi({ description: 'A post-confirmation Lambda trigger.' }),
    ).exactOptional(),
    PreAuthentication: ArnTypeSchema.and(
      z.any().openapi({ description: 'A pre-authentication Lambda trigger.' }),
    ).exactOptional(),
    PostAuthentication: ArnTypeSchema.and(
      z.any().openapi({ description: 'A post-authentication Lambda trigger.' }),
    ).exactOptional(),
    DefineAuthChallenge: ArnTypeSchema.and(
      z.any().openapi({ description: 'Defines the authentication challenge.' }),
    ).exactOptional(),
    CreateAuthChallenge: ArnTypeSchema.and(
      z.any().openapi({ description: 'Creates an authentication challenge.' }),
    ).exactOptional(),
    VerifyAuthChallengeResponse: ArnTypeSchema.and(
      z.any().openapi({ description: 'Verifies the authentication challenge response.' }),
    ).exactOptional(),
    PreTokenGeneration: ArnTypeSchema.and(
      z.any().openapi({ description: 'A Lambda trigger that is invoked before token generation.' }),
    ).exactOptional(),
    UserMigration: ArnTypeSchema.and(
      z.any().openapi({ description: 'The user migration Lambda config type.' }),
    ).exactOptional(),
    CustomSMSSender: CustomSMSLambdaVersionConfigTypeSchema.and(
      z.any().openapi({ description: 'A custom SMS sender Lambda trigger.' }),
    ).exactOptional(),
    CustomEmailSender: CustomEmailLambdaVersionConfigTypeSchema.and(
      z.any().openapi({ description: 'A custom email sender Lambda trigger.' }),
    ).exactOptional(),
    KMSKeyID: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an <a href="/kms/latest/developerguide/concepts.html#master_keys">KMS key</a>. Amazon Cognito uses the key to encrypt codes and temporary passwords sent to <code>CustomEmailSender</code> and <code>CustomSMSSender</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the configuration for Lambda triggers.', required: [] })
  .openapi('LambdaConfigType')

const StatusTypeSchema = z.enum(['Enabled', 'Disabled']).openapi('StatusType')

const SchemaAttributesListTypeSchema = z
  .array(SchemaAttributeTypeSchema)
  .min(1)
  .max(50)
  .openapi('SchemaAttributesListType')

const VerifiedAttributeTypeSchema = z
  .enum(['phone_number', 'email'])
  .openapi('VerifiedAttributeType')

const VerifiedAttributesListTypeSchema = z
  .array(VerifiedAttributeTypeSchema)
  .openapi('VerifiedAttributesListType')

const AliasAttributeTypeSchema = z
  .enum(['phone_number', 'email', 'preferred_username'])
  .openapi('AliasAttributeType')

const AliasAttributesListTypeSchema = z
  .array(AliasAttributeTypeSchema)
  .openapi('AliasAttributesListType')

const UsernameAttributeTypeSchema = z
  .enum(['phone_number', 'email'])
  .openapi('UsernameAttributeType')

const UsernameAttributesListTypeSchema = z
  .array(UsernameAttributeTypeSchema)
  .openapi('UsernameAttributesListType')

const SmsVerificationMessageTypeSchema = z
  .string()
  .regex(/.*\{####\}.*/)
  .min(6)
  .max(140)
  .openapi('SmsVerificationMessageType')

const EmailVerificationMessageTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{####\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*/u)
  .min(6)
  .max(20000)
  .openapi('EmailVerificationMessageType')

const EmailVerificationSubjectTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+/u)
  .min(1)
  .max(140)
  .openapi('EmailVerificationSubjectType')

const EmailVerificationMessageByLinkTypeSchema = z
  .string()
  .regex(
    /[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{##[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*##\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*/u,
  )
  .min(6)
  .max(20000)
  .openapi('EmailVerificationMessageByLinkType')

const EmailVerificationSubjectByLinkTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+/u)
  .min(1)
  .max(140)
  .openapi('EmailVerificationSubjectByLinkType')

const DefaultEmailOptionTypeSchema = z
  .enum(['CONFIRM_WITH_LINK', 'CONFIRM_WITH_CODE'])
  .openapi('DefaultEmailOptionType')

const VerificationMessageTemplateTypeSchema = z
  .object({
    SmsMessage: SmsVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The template for SMS messages that Amazon Cognito sends to your users.',
        }),
    ).exactOptional(),
    EmailMessage: EmailVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The template for email messages that Amazon Cognito sends to your users. You can set an <code>EmailMessage</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email messages with your own Amazon SES configuration.',
        }),
    ).exactOptional(),
    EmailSubject: EmailVerificationSubjectTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subject line for the email message template. You can set an <code>EmailSubject</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email messages with your own Amazon SES configuration.',
        }),
    ).exactOptional(),
    EmailMessageByLink: EmailVerificationMessageByLinkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email message template for sending a confirmation link to the user. You can set an <code>EmailMessageByLink</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email messages with your own Amazon SES configuration.',
        }),
    ).exactOptional(),
    EmailSubjectByLink: EmailVerificationSubjectByLinkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subject line for the email message template for sending a confirmation link to the user. You can set an <code>EmailSubjectByLink</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email messages with your own Amazon SES configuration.',
        }),
    ).exactOptional(),
    DefaultEmailOption: DefaultEmailOptionTypeSchema.and(
      z.any().openapi({ description: 'The default email option.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The template for verification messages.', required: [] })
  .openapi('VerificationMessageTemplateType')

const AttributesRequireVerificationBeforeUpdateTypeSchema = z
  .array(VerifiedAttributeTypeSchema)
  .openapi('AttributesRequireVerificationBeforeUpdateType')

const UserAttributeUpdateSettingsTypeSchema = z
  .object({
    AttributesRequireVerificationBeforeUpdate:
      AttributesRequireVerificationBeforeUpdateTypeSchema.and(
        z
          .any()
          .openapi({
            description:
              '<p>Requires that your user verifies their email address, phone number, or both before Amazon Cognito updates the value of that attribute. When you update a user attribute that has this option activated, Amazon Cognito sends a verification message to the new phone number or email address. Amazon Cognito doesn’t change the value of the attribute until your user responds to the verification message and confirms the new value.</p> <p>You can verify an updated email address or phone number with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html">VerifyUserAttribute</a> API request. You can also call the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html">AdminUpdateUserAttributes</a> API and set <code>email_verified</code> or <code>phone_number_verified</code> to true.</p> <p>When <code>AttributesRequireVerificationBeforeUpdate</code> is false, your user pool doesn\'t require that your users verify attribute changes before Amazon Cognito updates them. In a user pool where <code>AttributesRequireVerificationBeforeUpdate</code> is false, API operations that change attribute values can immediately update a user’s <code>email</code> or <code>phone_number</code> attribute.</p>',
          }),
      ).exactOptional(),
  })
  .openapi({
    description:
      'The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users\' email address and phone number attributes. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates"> Verifying updates to email addresses and phone numbers</a>.',
    required: [],
  })
  .openapi('UserAttributeUpdateSettingsType')

const UserPoolMfaTypeSchema = z.enum(['OFF', 'ON', 'OPTIONAL']).openapi('UserPoolMfaType')

const DeviceConfigurationTypeSchema = z
  .object({
    ChallengeRequiredOnNewDevice: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When true, a remembered device can sign in with device authentication instead of SMS and time-based one-time password (TOTP) factors for multi-factor authentication (MFA).</p> <note> <p>Whether or not <code>ChallengeRequiredOnNewDevice</code> is true, users who sign in with devices that have not been confirmed or remembered must still provide a second factor in a user pool that requires MFA.</p> </note>',
        }),
    ).exactOptional(),
    DeviceOnlyRememberedOnUserPrompt: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When true, Amazon Cognito doesn\'t automatically remember a user\'s device when your app sends a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html"> ConfirmDevice</a> API request. In your app, create a prompt for your user to choose whether they want to remember their device. Return the user\'s choice in an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html"> UpdateDeviceStatus</a> API request.</p> <p>When <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>false</code>, Amazon Cognito immediately remembers devices that you register in a <code>ConfirmDevice</code> API request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The device-remembering configuration for a user pool. A <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html"> DescribeUserPool</a> request returns a null value for this object when the user pool isn\'t configured to remember devices. When device remembering is active, you can remember a user\'s device with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html">ConfirmDevice</a> API request. Additionally. when the property <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>true</code>, you must follow <code>ConfirmDevice</code> with an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html">UpdateDeviceStatus</a> API request that sets the user\'s device to <code>remembered</code> or <code>not_remembered</code>.</p> <p>To sign in with a remembered device, include <code>DEVICE_KEY</code> in the authentication parameters in your user\'s <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html"> InitiateAuth</a> request. If your app doesn\'t include a <code>DEVICE_KEY</code> parameter, the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_ResponseSyntax">response</a> from Amazon Cognito includes newly-generated <code>DEVICE_KEY</code> and <code>DEVICE_GROUP_KEY</code> values under <code>NewDeviceMetadata</code>. Store these values to use in future device-authentication requests.</p> <note> <p>When you provide a value for any property of <code>DeviceConfiguration</code>, you activate the device remembering for the user pool.</p> </note>',
    required: [],
  })
  .openapi('DeviceConfigurationType')

const EmailAddressTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+@[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .openapi('EmailAddressType')

const EmailSendingAccountTypeSchema = z
  .enum(['COGNITO_DEFAULT', 'DEVELOPER'])
  .openapi('EmailSendingAccountType')

const SESConfigurationSetSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(64)
  .openapi('SESConfigurationSet')

const EmailConfigurationTypeSchema = z
  .object({
    SourceArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of a verified email address or an address from a verified domain in Amazon SES. You can set a <code>SourceArn</code> email from a verified domain only with an API request. You can set a verified email address, but not an address in a verified domain, in the Amazon Cognito console. Amazon Cognito uses the email address that you provide in one of the following ways, depending on the value that you specify for the <code>EmailSendingAccount</code> parameter:</p> <ul> <li> <p>If you specify <code>COGNITO_DEFAULT</code>, Amazon Cognito uses this address as the custom FROM address when it emails your users using its built-in email account.</p> </li> <li> <p>If you specify <code>DEVELOPER</code>, Amazon Cognito emails your users with this address by calling Amazon SES on your behalf.</p> </li> </ul> <p>The Region value of the <code>SourceArn</code> parameter must indicate a supported Amazon Web Services Region of your user pool. Typically, the Region in the <code>SourceArn</code> and the user pool Region are the same. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html#user-pool-email-developer-region-mapping">Amazon SES email configuration regions</a> in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito Developer Guide</a>.</p>',
        }),
    ).exactOptional(),
    ReplyToEmailAddress: EmailAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The destination to which the receiver of the email should reply.',
        }),
    ).exactOptional(),
    EmailSendingAccount: EmailSendingAccountTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether Amazon Cognito uses its built-in functionality to send your users email messages, or uses your Amazon Simple Email Service email configuration. Specify one of the following values:</p> <dl> <dt>COGNITO_DEFAULT</dt> <dd> <p>When Amazon Cognito emails your users, it uses its built-in email functionality. When you use the default option, Amazon Cognito allows only a limited number of emails each day for your user pool. For typical production environments, the default email limit is less than the required delivery volume. To achieve a higher delivery volume, specify DEVELOPER to use your Amazon SES email configuration.</p> <p>To look up the email delivery limit for the default option, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/limits.html">Limits</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <p>The default FROM address is <code>no-reply@verificationemail.com</code>. To customize the FROM address, provide the Amazon Resource Name (ARN) of an Amazon SES verified email address for the <code>SourceArn</code> parameter.</p> </dd> <dt>DEVELOPER</dt> <dd> <p>When Amazon Cognito emails your users, it uses your Amazon SES configuration. Amazon Cognito calls Amazon SES on your behalf to send email from your verified email address. When you use this option, the email delivery limits are the same limits that apply to your Amazon SES verified email address in your Amazon Web Services account.</p> <p>If you use this option, provide the ARN of an Amazon SES verified email address for the <code>SourceArn</code> parameter.</p> <p>Before Amazon Cognito can email your users, it requires additional permissions to call Amazon SES on your behalf. When you update your user pool with this option, Amazon Cognito creates a <i>service-linked role</i>, which is a type of role in your Amazon Web Services account. This role contains the permissions that allow you to access Amazon SES and send email messages from your email address. For more information about the service-linked role that Amazon Cognito creates, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html">Using Service-Linked Roles for Amazon Cognito</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    From: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either the sender’s email address or the sender’s name with their email address. For example, <code>testuser@example.com</code> or <code>Test User &lt;testuser@example.com&gt;</code>. This address appears before the body of the email.',
        }),
    ).exactOptional(),
    ConfigurationSet: SESConfigurationSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The set of configuration rules that can be applied to emails sent using Amazon Simple Email Service. A configuration set is applied to an email by including a reference to the configuration set in the headers of the email. Once applied, all of the rules in that configuration set are applied to the email. Configuration sets can be used to apply the following types of rules to emails: </p> <dl> <dt>Event publishing</dt> <dd> <p>Amazon Simple Email Service can track the number of send, delivery, open, click, bounce, and complaint events for each email sent. Use event publishing to send information about these events to other Amazon Web Services services such as and Amazon CloudWatch</p> </dd> <dt>IP pool management</dt> <dd> <p>When leasing dedicated IP addresses with Amazon Simple Email Service, you can create groups of IP addresses, called dedicated IP pools. You can then associate the dedicated IP pools with configuration sets.</p> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.</p> <note> <p>Amazon Cognito can send email messages with Amazon Simple Email Service resources in the Amazon Web Services Region where you created your user pool, and in alternate Regions in some cases. For more information on the supported Regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email settings for Amazon Cognito user pools</a>.</p> </note>',
    required: [],
  })
  .openapi('EmailConfigurationType')

const RegionCodeTypeSchema = z.string().min(5).max(32).openapi('RegionCodeType')

const SmsConfigurationTypeSchema = z
  .object({
    SnsCallerArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS caller. This is the ARN of the IAM role in your Amazon Web Services account that Amazon Cognito will use to send SMS messages. SMS messages are subject to a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html">spending limit</a>. ',
        }),
    ),
    ExternalId: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The external ID provides additional security for your IAM role. You can use an <code>ExternalId</code> with the IAM role that you use with Amazon SNS to send SMS messages for your user pool. If you provide an <code>ExternalId</code>, your Amazon Cognito user pool includes it in the request to assume your IAM role. You can configure the role trust policy to require that Amazon Cognito, and any principal, provide the <code>ExternalID</code>. If you use the Amazon Cognito Management Console to create a role for SMS multi-factor authentication (MFA), Amazon Cognito creates a role with the required permissions and a trust policy that demonstrates use of the <code>ExternalId</code>.</p> <p>For more information about the <code>ExternalId</code> of a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html">How to use an external ID when granting access to your Amazon Web Services resources to a third party</a> </p>',
        }),
    ).exactOptional(),
    SnsRegion: RegionCodeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Web Services Region to use with Amazon SNS integration. You can choose the same Region as your user pool, or a supported <b>Legacy Amazon SNS alternate Region</b>. </p> <p> Amazon Cognito resources in the Asia Pacific (Seoul) Amazon Web Services Region must use your Amazon SNS configuration in the Asia Pacific (Tokyo) Region. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html">SMS message settings for Amazon Cognito user pools</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SnsCallerArn'],
    description:
      'The SMS configuration type is the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.',
  })
  .openapi('SmsConfigurationType')

const TagValueTypeSchema = z.string().min(0).max(256).openapi('TagValueType')

const UserPoolTagsTypeSchema = z.record(z.string(), TagValueTypeSchema).openapi('UserPoolTagsType')

const DomainTypeSchema = z
  .string()
  .regex(/^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$/)
  .min(1)
  .max(63)
  .openapi('DomainType')

const AdminCreateUserUnusedAccountValidityDaysTypeSchema = z
  .int()
  .min(0)
  .max(365)
  .openapi('AdminCreateUserUnusedAccountValidityDaysType')

const MessageTemplateTypeSchema = z
  .object({
    SMSMessage: SmsVerificationMessageTypeSchema.and(
      z.any().openapi({ description: 'The message template for SMS messages.' }),
    ).exactOptional(),
    EmailMessage: EmailVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message template for email messages. EmailMessage is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is DEVELOPER. ',
        }),
    ).exactOptional(),
    EmailSubject: EmailVerificationSubjectTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subject line for email messages. EmailSubject is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is DEVELOPER. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The message template structure.', required: [] })
  .openapi('MessageTemplateType')

const AdminCreateUserConfigTypeSchema = z
  .object({
    AllowAdminCreateUserOnly: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>True</code> if only the administrator is allowed to create user profiles. Set to <code>False</code> if users can sign themselves up via an app.',
        }),
    ).exactOptional(),
    UnusedAccountValidityDays: AdminCreateUserUnusedAccountValidityDaysTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user account expiration limit, in days, after which a new account that hasn\'t signed in is no longer usable. To reset the account after that time limit, you must call <code>AdminCreateUser</code> again, specifying <code>"RESEND"</code> for the <code>MessageAction</code> parameter. The default value for this parameter is 7. </p> <note> <p>If you set a value for <code>TemporaryPasswordValidityDays</code> in <code>PasswordPolicy</code>, that value will be used, and <code>UnusedAccountValidityDays</code> will be no longer be an available parameter for that user pool.</p> </note>',
        }),
    ).exactOptional(),
    InviteMessageTemplate: MessageTemplateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The message template to be used for the welcome message to new users.</p> <p>See also <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization">Customizing User Invitation Messages</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration for creating a new user profile.', required: [] })
  .openapi('AdminCreateUserConfigType')

const AdvancedSecurityModeTypeSchema = z
  .enum(['OFF', 'AUDIT', 'ENFORCED'])
  .openapi('AdvancedSecurityModeType')

const UserPoolAddOnsTypeSchema = z
  .object({
    AdvancedSecurityMode: AdvancedSecurityModeTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The operating mode of advanced security features in your user pool.',
        }),
    ),
  })
  .openapi({
    required: ['AdvancedSecurityMode'],
    description:
      '<p>User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to <code>AUDIT</code>. To configure automatic security responses to risky traffic to your user pool, set to <code>ENFORCED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>',
  })
  .openapi('UserPoolAddOnsType')

const UsernameConfigurationTypeSchema = z
  .object({
    CaseSensitive: WrappedBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether user name case sensitivity will be applied for all users in the user pool through Amazon Cognito APIs. For most use cases, set case sensitivity to <code>False</code> (case insensitive) as a best practice. When usernames and email addresses are case insensitive, users can sign in as the same user when they enter a different capitalization of their user name.</p> <p>Valid values include:</p> <dl> <dt>True</dt> <dd> <p>Enables case sensitivity for all username input. When this option is set to <code>True</code>, users must sign in using the exact capitalization of their given username, such as “UserName”. This is the default value.</p> </dd> <dt>False</dt> <dd> <p>Enables case insensitivity for all username input. For example, when this option is set to <code>False</code>, users can sign in using <code>username</code>, <code>USERNAME</code>, or <code>UserName</code>. This option also enables both <code>preferred_username</code> and <code>email</code> alias to be case insensitive, in addition to the <code>username</code> attribute.</p> </dd> </dl>',
        }),
    ),
  })
  .openapi({ required: ['CaseSensitive'], description: 'The username configuration type. ' })
  .openapi('UsernameConfigurationType')

const PriorityTypeSchema = z.int().min(1).max(2).openapi('PriorityType')

const RecoveryOptionNameTypeSchema = z
  .enum(['verified_email', 'verified_phone_number', 'admin_only'])
  .openapi('RecoveryOptionNameType')

const RecoveryOptionTypeSchema = z
  .object({
    Priority: PriorityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A positive integer specifying priority of a method with 1 being the highest priority.',
        }),
    ),
    Name: RecoveryOptionNameTypeSchema.and(
      z.any().openapi({ description: 'The recovery method for a user.' }),
    ),
  })
  .openapi({
    required: ['Priority', 'Name'],
    description: 'A map containing a priority as a key, and recovery method name as a value.',
  })
  .openapi('RecoveryOptionType')

const RecoveryMechanismsTypeSchema = z
  .array(RecoveryOptionTypeSchema)
  .min(1)
  .max(2)
  .openapi('RecoveryMechanismsType')

const AccountRecoverySettingTypeSchema = z
  .object({
    RecoveryMechanisms: RecoveryMechanismsTypeSchema.and(
      z.any().openapi({ description: 'The list of <code>RecoveryOptionTypes</code>.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The data type for <code>AccountRecoverySetting</code>.', required: [] })
  .openapi('AccountRecoverySettingType')

const UserPoolTypeSchema = z
  .object({
    Id: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the user pool.' }),
    ).exactOptional(),
    Name: UserPoolNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the user pool.' }),
    ).exactOptional(),
    Policies: UserPoolPolicyTypeSchema.and(
      z.any().openapi({ description: 'The policies associated with the user pool.' }),
    ).exactOptional(),
    DeletionProtection: DeletionProtectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature.</p> <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request, Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool, send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an <code>UpdateUserPool</code> API request.</p>',
        }),
    ).exactOptional(),
    LambdaConfig: LambdaConfigTypeSchema.and(
      z.any().openapi({ description: 'The Lambda triggers associated with the user pool.' }),
    ).exactOptional(),
    Status: StatusTypeSchema.and(
      z.any().openapi({ description: 'The status of a user pool.' }),
    ).exactOptional(),
    LastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
    SchemaAttributes: SchemaAttributesListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the user attributes and their properties in your user pool. The attribute schema contains standard attributes, custom attributes with a <code>custom:</code> prefix, and developer attributes with a <code>dev:</code> prefix. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">User pool attributes</a>.</p> <p>Developer-only attributes are a legacy feature of user pools, are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.</p>',
        }),
    ).exactOptional(),
    AutoVerifiedAttributes: VerifiedAttributesListTypeSchema.and(
      z.any().openapi({ description: 'The attributes that are auto-verified in a user pool.' }),
    ).exactOptional(),
    AliasAttributes: AliasAttributesListTypeSchema.and(
      z.any().openapi({ description: 'The attributes that are aliased in a user pool.' }),
    ).exactOptional(),
    UsernameAttributes: UsernameAttributesListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether a user can use an email address or phone number as a username when they sign up.',
        }),
    ).exactOptional(),
    SmsVerificationMessage: SmsVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    EmailVerificationMessage: EmailVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    EmailVerificationSubject: EmailVerificationSubjectTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    VerificationMessageTemplate: VerificationMessageTemplateTypeSchema.and(
      z.any().openapi({ description: 'The template for verification messages.' }),
    ).exactOptional(),
    SmsAuthenticationMessage: SmsVerificationMessageTypeSchema.and(
      z.any().openapi({ description: 'The contents of the SMS authentication message.' }),
    ).exactOptional(),
    UserAttributeUpdateSettings: UserAttributeUpdateSettingsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users\' email address and phone number attributes. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates"> Verifying updates to email addresses and phone numbers</a>.',
        }),
    ).exactOptional(),
    MfaConfiguration: UserPoolMfaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Can be one of the following values:</p> <ul> <li> <p> <code>OFF</code> - MFA tokens aren't required and can't be specified during user registration.</p> </li> <li> <p> <code>ON</code> - MFA tokens are required for all user registrations. You can only specify required when you're initially creating a user pool.</p> </li> <li> <p> <code>OPTIONAL</code> - Users have the option when registering to create an MFA token.</p> </li> </ul>",
        }),
    ).exactOptional(),
    DeviceConfiguration: DeviceConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.</p> <note> <p>When you provide a value for any <code>DeviceConfiguration</code> field, you activate the Amazon Cognito device-remembering feature.</p> </note>',
        }),
    ).exactOptional(),
    EstimatedNumberOfUsers: IntegerTypeSchema.and(
      z.any().openapi({ description: 'A number estimating the size of the user pool.' }),
    ).exactOptional(),
    EmailConfiguration: EmailConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.',
        }),
    ).exactOptional(),
    SmsConfiguration: SmsConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SMS configuration with the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    UserPoolTags: UserPoolTagsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that are assigned to the user pool. A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.',
        }),
    ).exactOptional(),
    SmsConfigurationFailure: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reason why the SMS configuration can\'t send the messages to your users.</p> <p>This message might include comma-separated values to describe why your SMS configuration can\'t send messages to user pool end users.</p> <dl> <dt>InvalidSmsRoleAccessPolicyException</dt> <dd> <p>The Identity and Access Management role that Amazon Cognito uses to send SMS messages isn\'t properly configured. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SmsConfigurationType.html">SmsConfigurationType</a>.</p> </dd> <dt>SNSSandbox</dt> <dd> <p>The Amazon Web Services account is in the SNS SMS Sandbox and messages will only reach verified end users. This parameter won’t get populated with SNSSandbox if the user creating the user pool doesn’t have SNS permissions. To learn how to move your Amazon Web Services account out of the sandbox, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox-moving-to-production.html">Moving out of the SMS sandbox</a>.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    EmailConfigurationFailure: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Deprecated. Review error codes from API requests with <code>EventSource:cognito-idp.amazonaws.com</code> in CloudTrail for information about problems with user pool email configuration.',
        }),
    ).exactOptional(),
    Domain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain prefix, if the user pool has a domain associated with it.',
        }),
    ).exactOptional(),
    CustomDomain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A custom domain name that you provide to Amazon Cognito. This parameter applies only if you use a custom domain to host the sign-up and sign-in pages for your application. An example of a custom domain name might be <code>auth.example.com</code>.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>',
        }),
    ).exactOptional(),
    AdminCreateUserConfig: AdminCreateUserConfigTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration for <code>AdminCreateUser</code> requests.' }),
    ).exactOptional(),
    UserPoolAddOns: UserPoolAddOnsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to <code>AUDIT</code>. To configure automatic security responses to risky traffic to your user pool, set to <code>ENFORCED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>',
        }),
    ).exactOptional(),
    UsernameConfiguration: UsernameConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Case sensitivity of the username input for the selected sign-in option. For example, when case sensitivity is set to <code>False</code>, users can sign in using either "username" or "Username". This configuration is immutable once it has been set. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UsernameConfigurationType.html">UsernameConfigurationType</a>.',
        }),
    ).exactOptional(),
    Arn: ArnTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the user pool.' }),
    ).exactOptional(),
    AccountRecoverySetting: AccountRecoverySettingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The available verified method a user can use to recover their password when they call <code>ForgotPassword</code>. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A container for information about the user pool.', required: [] })
  .openapi('UserPoolType')

const CreateUserPoolResponseSchema = z
  .object({
    UserPool: UserPoolTypeSchema.and(
      z.any().openapi({ description: 'A container for the user pool details.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the response from the server for the request to create a user pool.',
    required: [],
  })
  .openapi('CreateUserPoolResponse')

const CreateUserPoolRequestSchema = z
  .object({
    PoolName: UserPoolNameTypeSchema.and(
      z.any().openapi({ description: 'A string used to name the user pool.' }),
    ),
    Policies: UserPoolPolicyTypeSchema.and(
      z.any().openapi({ description: 'The policies associated with the new user pool.' }),
    ).exactOptional(),
    DeletionProtection: DeletionProtectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature.</p> <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request, Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool, send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an <code>UpdateUserPool</code> API request.</p>',
        }),
    ).exactOptional(),
    LambdaConfig: LambdaConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Lambda trigger configuration information for the new user pool.</p> <note> <p>In a push model, event sources (such as Amazon S3 and custom applications) need permission to invoke a function. So you must make an extra call to add permission for these event sources to invoke your Lambda function.</p> <p/> <p>For more information on using the Lambda API to add permission, see<a href="https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html"> AddPermission </a>. </p> <p>For adding permission using the CLI, see<a href="https://docs.aws.amazon.com/cli/latest/reference/lambda/add-permission.html"> add-permission </a>.</p> </note>',
        }),
    ).exactOptional(),
    AutoVerifiedAttributes: VerifiedAttributesListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attributes to be auto-verified. Possible values: <b>email</b>, <b>phone_number</b>.',
        }),
    ).exactOptional(),
    AliasAttributes: AliasAttributesListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes supported as an alias for this user pool. Possible values: <b>phone_number</b>, <b>email</b>, or <b>preferred_username</b>.',
        }),
    ).exactOptional(),
    UsernameAttributes: UsernameAttributesListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether a user can use an email address or phone number as a username when they sign up.',
        }),
    ).exactOptional(),
    SmsVerificationMessage: SmsVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    EmailVerificationMessage: EmailVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    EmailVerificationSubject: EmailVerificationSubjectTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    VerificationMessageTemplate: VerificationMessageTemplateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The template for the verification message that the user sees when the app requests permission to access the user's information.",
        }),
    ).exactOptional(),
    SmsAuthenticationMessage: SmsVerificationMessageTypeSchema.and(
      z.any().openapi({ description: 'A string representing the SMS authentication message.' }),
    ).exactOptional(),
    MfaConfiguration: UserPoolMfaTypeSchema.and(
      z.any().openapi({ description: 'Specifies MFA configuration details.' }),
    ).exactOptional(),
    UserAttributeUpdateSettings: UserAttributeUpdateSettingsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users\' email address and phone number attributes. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates"> Verifying updates to email addresses and phone numbers</a>.',
        }),
    ).exactOptional(),
    DeviceConfiguration: DeviceConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.</p> <note> <p>When you provide a value for any <code>DeviceConfiguration</code> field, you activate the Amazon Cognito device-remembering feature.</p> </note>',
        }),
    ).exactOptional(),
    EmailConfiguration: EmailConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.',
        }),
    ).exactOptional(),
    SmsConfiguration: SmsConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SMS configuration with the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    UserPoolTags: UserPoolTagsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.',
        }),
    ).exactOptional(),
    AdminCreateUserConfig: AdminCreateUserConfigTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration for <code>AdminCreateUser</code> requests.' }),
    ).exactOptional(),
    Schema: SchemaAttributesListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of schema attributes for the new user pool. These attributes can be standard or custom attributes.',
        }),
    ).exactOptional(),
    UserPoolAddOns: UserPoolAddOnsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to <code>AUDIT</code>. To configure automatic security responses to risky traffic to your user pool, set to <code>ENFORCED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>',
        }),
    ).exactOptional(),
    UsernameConfiguration: UsernameConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Case sensitivity on the username input for the selected sign-in option. When case sensitivity is set to <code>False</code> (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, <code>username</code>, <code>USERNAME</code>, or <code>UserName</code>, or for email, <code>email@example.com</code> or <code>EMaiL@eXamplE.Com</code>. For most use cases, set case sensitivity to <code>False</code> (case insensitive) as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user.</p> <p>This configuration is immutable after you set it. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UsernameConfigurationType.html">UsernameConfigurationType</a>.</p>',
        }),
    ).exactOptional(),
    AccountRecoverySetting: AccountRecoverySettingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The available verified method a user can use to recover their password when they call <code>ForgotPassword</code>. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PoolName'],
    title: 'CreateUserPoolRequest',
    description: 'Represents the request to create a user pool.',
  })
  .openapi('CreateUserPoolRequest')

const UserPoolTaggingExceptionSchema = z.any().openapi('UserPoolTaggingException')

const ClientNameTypeSchema = z
  .string()
  .regex(/[\w\s+=,.@-]+/)
  .min(1)
  .max(128)
  .openapi('ClientNameType')

const ClientSecretTypeSchema = z
  .string()
  .regex(/[\w+]+/)
  .min(1)
  .max(64)
  .openapi('ClientSecretType')

const RefreshTokenValidityTypeSchema = z
  .int()
  .min(0)
  .max(315360000)
  .openapi('RefreshTokenValidityType')

const AccessTokenValidityTypeSchema = z.int().min(1).max(86400).openapi('AccessTokenValidityType')

const IdTokenValidityTypeSchema = z.int().min(1).max(86400).openapi('IdTokenValidityType')

const TimeUnitsTypeSchema = z.enum(['seconds', 'minutes', 'hours', 'days']).openapi('TimeUnitsType')

const TokenValidityUnitsTypeSchema = z
  .object({
    AccessToken: TimeUnitsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code> for the value that you set in the <code>AccessTokenValidity</code> parameter. The default <code>AccessTokenValidity</code> time unit is hours. <code>AccessTokenValidity</code> duration can range from five minutes to one day.',
        }),
    ).exactOptional(),
    IdToken: TimeUnitsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code> for the value that you set in the <code>IdTokenValidity</code> parameter. The default <code>IdTokenValidity</code> time unit is hours. <code>IdTokenValidity</code> duration can range from five minutes to one day.',
        }),
    ).exactOptional(),
    RefreshToken: TimeUnitsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code> for the value that you set in the <code>RefreshTokenValidity</code> parameter. The default <code>RefreshTokenValidity</code> time unit is days. <code>RefreshTokenValidity</code> duration can range from 60 minutes to 10 years.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The data type TokenValidityUnits specifies the time units you use when you set the duration of ID, access, and refresh tokens.',
    required: [],
  })
  .openapi('TokenValidityUnitsType')

const ClientPermissionTypeSchema = z.string().min(1).max(2048).openapi('ClientPermissionType')

const ClientPermissionListTypeSchema = z
  .array(ClientPermissionTypeSchema)
  .openapi('ClientPermissionListType')

const ExplicitAuthFlowsTypeSchema = z
  .enum([
    'ADMIN_NO_SRP_AUTH',
    'CUSTOM_AUTH_FLOW_ONLY',
    'USER_PASSWORD_AUTH',
    'ALLOW_ADMIN_USER_PASSWORD_AUTH',
    'ALLOW_CUSTOM_AUTH',
    'ALLOW_USER_PASSWORD_AUTH',
    'ALLOW_USER_SRP_AUTH',
    'ALLOW_REFRESH_TOKEN_AUTH',
  ])
  .openapi('ExplicitAuthFlowsType')

const ExplicitAuthFlowsListTypeSchema = z
  .array(ExplicitAuthFlowsTypeSchema)
  .openapi('ExplicitAuthFlowsListType')

const SupportedIdentityProvidersListTypeSchema = z
  .array(ProviderNameTypeSchema)
  .openapi('SupportedIdentityProvidersListType')

const RedirectUrlTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(1024)
  .openapi('RedirectUrlType')

const CallbackURLsListTypeSchema = z
  .array(RedirectUrlTypeSchema)
  .min(0)
  .max(100)
  .openapi('CallbackURLsListType')

const LogoutURLsListTypeSchema = z
  .array(RedirectUrlTypeSchema)
  .min(0)
  .max(100)
  .openapi('LogoutURLsListType')

const OAuthFlowTypeSchema = z
  .enum(['code', 'implicit', 'client_credentials'])
  .openapi('OAuthFlowType')

const OAuthFlowsTypeSchema = z.array(OAuthFlowTypeSchema).min(0).max(3).openapi('OAuthFlowsType')

const ScopeTypeSchema = z
  .string()
  .regex(/[\x21\x23-\x5B\x5D-\x7E]+/)
  .min(1)
  .max(256)
  .openapi('ScopeType')

const ScopeListTypeSchema = z.array(ScopeTypeSchema).max(50).openapi('ScopeListType')

const HexStringTypeSchema = z
  .string()
  .regex(/^[0-9a-fA-F]+$/)
  .openapi('HexStringType')

const AnalyticsConfigurationTypeSchema = z
  .object({
    ApplicationId: HexStringTypeSchema.and(
      z.any().openapi({ description: 'The application ID for an Amazon Pinpoint application.' }),
    ).exactOptional(),
    ApplicationArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Amazon Pinpoint project. You can use the Amazon Pinpoint project to integrate with the chosen user pool Client. Amazon Cognito publishes events to the Amazon Pinpoint project that the app ARN declares.',
        }),
    ).exactOptional(),
    RoleArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an Identity and Access Management role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics.',
        }),
    ).exactOptional(),
    ExternalId: StringTypeSchema.and(
      z.any().openapi({ description: 'The external ID.' }),
    ).exactOptional(),
    UserDataShared: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>UserDataShared</code> is <code>true</code>, Amazon Cognito includes user data in the events that it publishes to Amazon Pinpoint analytics.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The Amazon Pinpoint analytics configuration necessary to collect metrics for a user pool.</p> <note> <p>In Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.</p> </note>",
    required: [],
  })
  .openapi('AnalyticsConfigurationType')

const PreventUserExistenceErrorTypesSchema = z
  .enum(['LEGACY', 'ENABLED'])
  .openapi('PreventUserExistenceErrorTypes')

const AuthSessionValidityTypeSchema = z.int().min(3).max(15).openapi('AuthSessionValidityType')

const UserPoolClientTypeSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool client.' }),
    ).exactOptional(),
    ClientName: ClientNameTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The client name from the user pool request of the client type.' }),
    ).exactOptional(),
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the client associated with the user pool.' }),
    ).exactOptional(),
    ClientSecret: ClientSecretTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The client secret from the user pool request of the client type.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
    RefreshTokenValidity: RefreshTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session and retrieve new access and ID tokens for 10 days.</p> <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days. You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days.</p>",
        }),
    ).exactOptional(),
    AccessTokenValidity: AccessTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for <code>AccessTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with their access token for 10 hours.</p> <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour.</p>",
        }),
    ).exactOptional(),
    IdTokenValidity: IdTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for <code>IdTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their session with their ID token for 10 hours.</p> <p>The default time unit for <code>IdTokenValidity</code> in an API request is hours. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour.</p>",
        }),
    ).exactOptional(),
    TokenValidityUnits: TokenValidityUnitsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time units used to specify the token validity times of each token type: ID, access, and refresh.',
        }),
    ).exactOptional(),
    ReadAttributes: ClientPermissionListTypeSchema.and(
      z.any().openapi({ description: 'The Read-only attributes.' }),
    ).exactOptional(),
    WriteAttributes: ClientPermissionListTypeSchema.and(
      z.any().openapi({ description: 'The writeable attributes.' }),
    ).exactOptional(),
    ExplicitAuthFlows: ExplicitAuthFlowsListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.</p> <note> <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your user client supports <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.</p> </li> <li> <p> <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based authentication.</p> </li> <li> <p> <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.</p> </li> <li> <p> <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP-based authentication.</p> </li> <li> <p> <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh tokens.</p> </li> </ul> <p>In some environments, you will see the values <code>ADMIN_NO_SRP_AUTH</code>, <code>CUSTOM_AUTH_FLOW_ONLY</code>, or <code>USER_PASSWORD_AUTH</code>. You can't assign these legacy <code>ExplicitAuthFlows</code> values to user pool clients at the same time as values that begin with <code>ALLOW_</code>, like <code>ALLOW_USER_SRP_AUTH</code>.</p>",
        }),
    ).exactOptional(),
    SupportedIdentityProviders: SupportedIdentityProvidersListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of provider names for the IdPs that this client supports. The following are supported: <code>COGNITO</code>, <code>Facebook</code>, <code>Google</code>, <code>SignInWithApple</code>, <code>LoginWithAmazon</code>, and the names of your own SAML and OIDC providers.',
        }),
    ).exactOptional(),
    CallbackURLs: CallbackURLsListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of allowed redirect (callback) URLs for the IdPs.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.</p> <p>App callback URLs such as myapp://example are also supported.</p>',
        }),
    ).exactOptional(),
    LogoutURLs: LogoutURLsListTypeSchema.and(
      z.any().openapi({ description: 'A list of allowed logout URLs for the IdPs.' }),
    ).exactOptional(),
    DefaultRedirectURI: RedirectUrlTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.</p> <p>App callback URLs such as myapp://example are also supported.</p>',
        }),
    ).exactOptional(),
    AllowedOAuthFlows: OAuthFlowsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The allowed OAuth flows.</p> <dl> <dt>code</dt> <dd> <p>Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the <code>/oauth2/token</code> endpoint.</p> </dd> <dt>implicit</dt> <dd> <p>Issue the access token (and, optionally, ID token, based on scopes) directly to your user.</p> </dd> <dt>client_credentials</dt> <dd> <p>Issue the access token from the <code>/oauth2/token</code> endpoint directly to a non-person user using a combination of the client ID and client secret.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    AllowedOAuthScopes: ScopeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The OAuth scopes that your app client supports. Possible values that OAuth provides are <code>phone</code>, <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values that Amazon Web Services provides are <code>aws.cognito.signin.user.admin</code>. Amazon Cognito also supports custom scopes that you create in Resource Servers.',
        }),
    ).exactOptional(),
    AllowedOAuthFlowsUserPoolClient: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Set to <code>true</code> to use OAuth 2.0 features in your user pool app client.</p> <p> <code>AllowedOAuthFlowsUserPoolClient</code> must be <code>true</code> before you can configure the following features in your app client.</p> <ul> <li> <p> <code>CallBackURLs</code>: Callback URLs.</p> </li> <li> <p> <code>LogoutURLs</code>: Sign-out redirect URLs.</p> </li> <li> <p> <code>AllowedOAuthScopes</code>: OAuth 2.0 scopes.</p> </li> <li> <p> <code>AllowedOAuthFlows</code>: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.</p> </li> </ul> <p>To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or <code>UpdateUserPoolClient</code> API request. If you don't set a value for <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults to <code>false</code>.</p>",
        }),
    ).exactOptional(),
    AnalyticsConfiguration: AnalyticsConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Pinpoint analytics configuration for the user pool client.</p> <note> <p>Amazon Cognito user pools only support sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the Region where the user pool resides.</p> </note>',
        }),
    ).exactOptional(),
    PreventUserExistenceErrors: PreventUserExistenceErrorTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to <code>LEGACY</code>, those APIs return a <code>UserNotFoundException</code> exception if the user doesn't exist in the user pool.</p> <p>Valid values include:</p> <ul> <li> <p> <code>ENABLED</code> - This prevents user existence-related errors.</p> </li> <li> <p> <code>LEGACY</code> - This represents the old behavior of Amazon Cognito where user existence related errors aren't prevented.</p> </li> </ul>",
        }),
    ).exactOptional(),
    EnableTokenRevocation: WrappedBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether token revocation is activated for the user pool client. When you create a new user pool client, token revocation is activated by default. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.',
        }),
    ).exactOptional(),
    EnablePropagateAdditionalUserContextData: WrappedBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>When <code>EnablePropagateAdditionalUserContextData</code> is true, Amazon Cognito accepts an <code>IpAddress</code> value that you send in the <code>UserContextData</code> parameter. The <code>UserContextData</code> parameter sends information to Amazon Cognito advanced security for risk analysis. You can send <code>UserContextData</code> when you sign in Amazon Cognito native users with the <code>InitiateAuth</code> and <code>RespondToAuthChallenge</code> API operations.</p> <p>When <code>EnablePropagateAdditionalUserContextData</code> is false, you can't send your user's source IP address to Amazon Cognito advanced security with unauthenticated API operations. <code>EnablePropagateAdditionalUserContextData</code> doesn't affect whether you can send a source IP address in a <code>ContextData</code> parameter with the authenticated API operations <code>AdminInitiateAuth</code> and <code>AdminRespondToAuthChallenge</code>.</p> <p>You can only activate <code>EnablePropagateAdditionalUserContextData</code> in an app client that has a client secret. For more information about propagation of user context data, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint\">Adding user device and session data to API requests</a>.</p>",
        }),
    ).exactOptional(),
    AuthSessionValidity: AuthSessionValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a user pool client.', required: [] })
  .openapi('UserPoolClientType')

const CreateUserPoolClientResponseSchema = z
  .object({
    UserPoolClient: UserPoolClientTypeSchema.and(
      z.any().openapi({ description: 'The user pool client that was just created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the response from the server to create a user pool client.',
    required: [],
  })
  .openapi('CreateUserPoolClientResponse')

const GenerateSecretSchema = z.boolean().openapi('GenerateSecret')

const CreateUserPoolClientRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool where you want to create a user pool client.',
        }),
    ),
    ClientName: ClientNameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The client name for the user pool client you would like to create.',
        }),
    ),
    GenerateSecret: GenerateSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean to specify whether you want to generate a secret for the user pool client being created.',
        }),
    ).exactOptional(),
    RefreshTokenValidity: RefreshTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session and retrieve new access and ID tokens for 10 days.</p> <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days. You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days.</p>",
        }),
    ).exactOptional(),
    AccessTokenValidity: AccessTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for <code>AccessTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with their access token for 10 hours.</p> <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour.</p>",
        }),
    ).exactOptional(),
    IdTokenValidity: IdTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for <code>IdTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their session with their ID token for 10 hours.</p> <p>The default time unit for <code>IdTokenValidity</code> in an API request is hours. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour.</p>",
        }),
    ).exactOptional(),
    TokenValidityUnits: TokenValidityUnitsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The units in which the validity times are represented. The default unit for RefreshToken is days, and default for ID and access tokens are hours.',
        }),
    ).exactOptional(),
    ReadAttributes: ClientPermissionListTypeSchema.and(
      z.any().openapi({ description: 'The read attributes.' }),
    ).exactOptional(),
    WriteAttributes: ClientPermissionListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user pool attributes that the app client can write to.</p> <p>If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying IdP Attribute Mappings for Your user pool</a>.</p>',
        }),
    ).exactOptional(),
    ExplicitAuthFlows: ExplicitAuthFlowsListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.</p> <note> <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your user client supports <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.</p> </li> <li> <p> <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based authentication.</p> </li> <li> <p> <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.</p> </li> <li> <p> <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP-based authentication.</p> </li> <li> <p> <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh tokens.</p> </li> </ul> <p>In some environments, you will see the values <code>ADMIN_NO_SRP_AUTH</code>, <code>CUSTOM_AUTH_FLOW_ONLY</code>, or <code>USER_PASSWORD_AUTH</code>. You can't assign these legacy <code>ExplicitAuthFlows</code> values to user pool clients at the same time as values that begin with <code>ALLOW_</code>, like <code>ALLOW_USER_SRP_AUTH</code>.</p>",
        }),
    ).exactOptional(),
    SupportedIdentityProviders: SupportedIdentityProvidersListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: <code>COGNITO</code>, <code>Facebook</code>, <code>Google</code>, <code>SignInWithApple</code>, and <code>LoginWithAmazon</code>. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example <code>MySAMLIdP</code> or <code>MyOIDCIdP</code>.',
        }),
    ).exactOptional(),
    CallbackURLs: CallbackURLsListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of allowed redirect (callback) URLs for the IdPs.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.</p> <p>App callback URLs such as myapp://example are also supported.</p>',
        }),
    ).exactOptional(),
    LogoutURLs: LogoutURLsListTypeSchema.and(
      z.any().openapi({ description: 'A list of allowed logout URLs for the IdPs.' }),
    ).exactOptional(),
    DefaultRedirectURI: RedirectUrlTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.</p> <p>App callback URLs such as myapp://example are also supported.</p>',
        }),
    ).exactOptional(),
    AllowedOAuthFlows: OAuthFlowsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The allowed OAuth flows.</p> <dl> <dt>code</dt> <dd> <p>Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the <code>/oauth2/token</code> endpoint.</p> </dd> <dt>implicit</dt> <dd> <p>Issue the access token (and, optionally, ID token, based on scopes) directly to your user.</p> </dd> <dt>client_credentials</dt> <dd> <p>Issue the access token from the <code>/oauth2/token</code> endpoint directly to a non-person user using a combination of the client ID and client secret.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    AllowedOAuthScopes: ScopeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The allowed OAuth scopes. Possible values provided by OAuth are <code>phone</code>, <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values provided by Amazon Web Services are <code>aws.cognito.signin.user.admin</code>. Custom scopes created in Resource Servers are also supported.',
        }),
    ).exactOptional(),
    AllowedOAuthFlowsUserPoolClient: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Set to <code>true</code> to use OAuth 2.0 features in your user pool app client.</p> <p> <code>AllowedOAuthFlowsUserPoolClient</code> must be <code>true</code> before you can configure the following features in your app client.</p> <ul> <li> <p> <code>CallBackURLs</code>: Callback URLs.</p> </li> <li> <p> <code>LogoutURLs</code>: Sign-out redirect URLs.</p> </li> <li> <p> <code>AllowedOAuthScopes</code>: OAuth 2.0 scopes.</p> </li> <li> <p> <code>AllowedOAuthFlows</code>: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.</p> </li> </ul> <p>To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or <code>UpdateUserPoolClient</code> API request. If you don't set a value for <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults to <code>false</code>.</p>",
        }),
    ).exactOptional(),
    AnalyticsConfiguration: AnalyticsConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign.</p> <note> <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in Amazon Web Services Region us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.</p> </note>",
        }),
    ).exactOptional(),
    PreventUserExistenceErrors: PreventUserExistenceErrorTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to <code>LEGACY</code>, those APIs return a <code>UserNotFoundException</code> exception if the user doesn't exist in the user pool.</p> <p>Valid values include:</p> <ul> <li> <p> <code>ENABLED</code> - This prevents user existence-related errors.</p> </li> <li> <p> <code>LEGACY</code> - This represents the early behavior of Amazon Cognito where user existence related errors aren't prevented.</p> </li> </ul>",
        }),
    ).exactOptional(),
    EnableTokenRevocation: WrappedBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Activates or deactivates token revocation. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p> <p>If you don\'t include this parameter, token revocation is automatically activated for the new user pool client.</p>',
        }),
    ).exactOptional(),
    EnablePropagateAdditionalUserContextData: WrappedBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Activates the propagation of additional user context data. For more information about propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html"> Adding advanced security to a user pool</a>. If you don’t include this parameter, you can\'t send device fingerprint information, including source IP address, to Amazon Cognito advanced security. You can only activate <code>EnablePropagateAdditionalUserContextData</code> in an app client that has a client secret.',
        }),
    ).exactOptional(),
    AuthSessionValidity: AuthSessionValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'ClientName'],
    title: 'CreateUserPoolClientRequest',
    description: 'Represents the request to create a user pool client.',
  })
  .openapi('CreateUserPoolClientRequest')

const ScopeDoesNotExistExceptionSchema = z.any().openapi('ScopeDoesNotExistException')

const InvalidOAuthFlowExceptionSchema = z.any().openapi('InvalidOAuthFlowException')

const CreateUserPoolDomainResponseSchema = z
  .object({
    CloudFrontDomain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon CloudFront endpoint that you use as the target of the alias that you set up with your Domain Name Service (DNS) provider.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUserPoolDomainResponse')

const CustomDomainConfigTypeSchema = z
  .object({
    CertificateArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Certificate Manager SSL certificate. You use this certificate for the subdomain of your custom domain.',
        }),
    ),
  })
  .openapi({
    required: ['CertificateArn'],
    description:
      'The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.',
  })
  .openapi('CustomDomainConfigType')

const CreateUserPoolDomainRequestSchema = z
  .object({
    Domain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain string. For custom domains, this is the fully-qualified domain name, such as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone, such as <code>auth</code>.',
        }),
    ),
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    CustomDomainConfig: CustomDomainConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.</p> <p>Provide this parameter only if you want to use a custom domain for your user pool. Otherwise, you can exclude this parameter and use the Amazon Cognito hosted domain instead.</p> <p>For more information about the hosted domain and custom domains, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain.html">Configuring a User Pool Domain</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Domain', 'UserPoolId'], title: 'CreateUserPoolDomainRequest' })
  .openapi('CreateUserPoolDomainRequest')

const DeleteGroupRequestSchema = z
  .object({
    GroupName: GroupNameTypeSchema.and(z.any().openapi({ description: 'The name of the group.' })),
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
  })
  .openapi({ required: ['GroupName', 'UserPoolId'], title: 'DeleteGroupRequest' })
  .openapi('DeleteGroupRequest')

const DeleteIdentityProviderRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    ProviderName: ProviderNameTypeSchema.and(z.any().openapi({ description: 'The IdP name.' })),
  })
  .openapi({ required: ['UserPoolId', 'ProviderName'], title: 'DeleteIdentityProviderRequest' })
  .openapi('DeleteIdentityProviderRequest')

const UnsupportedIdentityProviderExceptionSchema = z
  .any()
  .openapi('UnsupportedIdentityProviderException')

const DeleteResourceServerRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that hosts the resource server.',
        }),
    ),
    Identifier: ResourceServerIdentifierTypeSchema.and(
      z.any().openapi({ description: 'The identifier for the resource server.' }),
    ),
  })
  .openapi({ required: ['UserPoolId', 'Identifier'], title: 'DeleteResourceServerRequest' })
  .openapi('DeleteResourceServerRequest')

const DeleteUserRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose user profile you want to delete.',
        }),
    ),
  })
  .openapi({
    required: ['AccessToken'],
    title: 'DeleteUserRequest',
    description: 'Represents the request to delete a user.',
  })
  .openapi('DeleteUserRequest')

const DeleteUserAttributesResponseSchema = z
  .object({})
  .openapi({ description: 'Represents the response from the server to delete user attributes.' })
  .openapi('DeleteUserAttributesResponse')

const DeleteUserAttributesRequestSchema = z
  .object({
    UserAttributeNames: AttributeNameListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings representing the user attribute names you want to delete.</p> <p>For custom attributes, you must prependattach the <code>custom:</code> prefix to the front of the attribute name.</p>',
        }),
    ),
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose attributes you want to delete.',
        }),
    ),
  })
  .openapi({
    required: ['UserAttributeNames', 'AccessToken'],
    title: 'DeleteUserAttributesRequest',
    description: 'Represents the request to delete user attributes.',
  })
  .openapi('DeleteUserAttributesRequest')

const DeleteUserPoolRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool you want to delete.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId'],
    title: 'DeleteUserPoolRequest',
    description: 'Represents the request to delete a user pool.',
  })
  .openapi('DeleteUserPoolRequest')

const DeleteUserPoolClientRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool where you want to delete the client.',
        }),
    ),
    ClientId: ClientIdTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The app client ID of the app associated with the user pool.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'ClientId'],
    title: 'DeleteUserPoolClientRequest',
    description: 'Represents the request to delete a user pool client.',
  })
  .openapi('DeleteUserPoolClientRequest')

const DeleteUserPoolDomainResponseSchema = z.object({}).openapi('DeleteUserPoolDomainResponse')

const DeleteUserPoolDomainRequestSchema = z
  .object({
    Domain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain string. For custom domains, this is the fully-qualified domain name, such as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone, such as <code>auth</code>.',
        }),
    ),
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
  })
  .openapi({ required: ['Domain', 'UserPoolId'], title: 'DeleteUserPoolDomainRequest' })
  .openapi('DeleteUserPoolDomainRequest')

const DescribeIdentityProviderResponseSchema = z
  .object({
    IdentityProvider: IdentityProviderTypeSchema.and(
      z.any().openapi({ description: 'The identity provider details.' }),
    ),
  })
  .openapi({ required: ['IdentityProvider'] })
  .openapi('DescribeIdentityProviderResponse')

const DescribeIdentityProviderRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    ProviderName: ProviderNameTypeSchema.and(z.any().openapi({ description: 'The IdP name.' })),
  })
  .openapi({ required: ['UserPoolId', 'ProviderName'], title: 'DescribeIdentityProviderRequest' })
  .openapi('DescribeIdentityProviderRequest')

const DescribeResourceServerResponseSchema = z
  .object({
    ResourceServer: ResourceServerTypeSchema.and(
      z.any().openapi({ description: 'The resource server.' }),
    ),
  })
  .openapi({ required: ['ResourceServer'] })
  .openapi('DescribeResourceServerResponse')

const DescribeResourceServerRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that hosts the resource server.',
        }),
    ),
    Identifier: ResourceServerIdentifierTypeSchema.and(
      z.any().openapi({ description: 'The identifier for the resource server' }),
    ),
  })
  .openapi({ required: ['UserPoolId', 'Identifier'], title: 'DescribeResourceServerRequest' })
  .openapi('DescribeResourceServerRequest')

const RiskConfigurationTypeSchema: z.ZodType<RiskConfigurationTypeType> = z
  .lazy(() =>
    z
      .object({
        UserPoolId: UserPoolIdTypeSchema.and(
          z.any().openapi({ description: 'The user pool ID.' }),
        ).exactOptional(),
        ClientId: ClientIdTypeSchema.and(
          z.any().openapi({ description: 'The app client ID.' }),
        ).exactOptional(),
        CompromisedCredentialsRiskConfiguration:
          CompromisedCredentialsRiskConfigurationTypeSchema.and(
            z
              .any()
              .openapi({
                description:
                  'The compromised credentials risk configuration object, including the <code>EventFilter</code> and the <code>EventAction</code>.',
              }),
          ).exactOptional(),
        AccountTakeoverRiskConfiguration: AccountTakeoverRiskConfigurationTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'The account takeover risk configuration object, including the <code>NotifyConfiguration</code> object and <code>Actions</code> to take if there is an account takeover.',
            }),
        ).exactOptional(),
        RiskExceptionConfiguration: RiskExceptionConfigurationTypeSchema.and(
          z.any().openapi({ description: 'The configuration to override the risk decision.' }),
        ).exactOptional(),
        LastModifiedDate: DateTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'The risk configuration type.', required: [] }),
  )
  .openapi('RiskConfigurationType')

const DescribeRiskConfigurationResponseSchema = z
  .object({
    RiskConfiguration: RiskConfigurationTypeSchema.and(
      z.any().openapi({ description: 'The risk configuration.' }),
    ),
  })
  .openapi({ required: ['RiskConfiguration'] })
  .openapi('DescribeRiskConfigurationResponse')

const DescribeRiskConfigurationRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The app client ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId'], title: 'DescribeRiskConfigurationRequest' })
  .openapi('DescribeRiskConfigurationRequest')

const DescribeUserImportJobResponseSchema = z
  .object({
    UserImportJob: UserImportJobTypeSchema.and(
      z.any().openapi({ description: 'The job object that represents the user import job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server to the request to describe the user import job.',
    required: [],
  })
  .openapi('DescribeUserImportJobResponse')

const DescribeUserImportJobRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that the users are being imported into.',
        }),
    ),
    JobId: UserImportJobIdTypeSchema.and(
      z.any().openapi({ description: 'The job ID for the user import job.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'JobId'],
    title: 'DescribeUserImportJobRequest',
    description: 'Represents the request to describe the user import job.',
  })
  .openapi('DescribeUserImportJobRequest')

const DescribeUserPoolResponseSchema = z
  .object({
    UserPool: UserPoolTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The container of metadata returned by the server to describe the pool.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the response to describe the user pool.', required: [] })
  .openapi('DescribeUserPoolResponse')

const DescribeUserPoolRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool you want to describe.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId'],
    title: 'DescribeUserPoolRequest',
    description: 'Represents the request to describe the user pool.',
  })
  .openapi('DescribeUserPoolRequest')

const DescribeUserPoolClientResponseSchema = z
  .object({
    UserPoolClient: UserPoolClientTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool client from a server response to describe the user pool client.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server from a request to describe the user pool client.',
    required: [],
  })
  .openapi('DescribeUserPoolClientResponse')

const DescribeUserPoolClientRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool you want to describe.' }),
    ),
    ClientId: ClientIdTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The app client ID of the app associated with the user pool.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'ClientId'],
    title: 'DescribeUserPoolClientRequest',
    description: 'Represents the request to describe a user pool client.',
  })
  .openapi('DescribeUserPoolClientRequest')

const AWSAccountIdTypeSchema = z
  .string()
  .regex(/[0-9]+/)
  .max(12)
  .openapi('AWSAccountIdType')

const S3BucketTypeSchema = z
  .string()
  .regex(/^[0-9A-Za-z\.\-_]*(?<!\.)$/)
  .min(3)
  .max(1024)
  .openapi('S3BucketType')

const DomainVersionTypeSchema = z.string().min(1).max(20).openapi('DomainVersionType')

const DomainStatusTypeSchema = z
  .enum(['CREATING', 'DELETING', 'UPDATING', 'ACTIVE', 'FAILED'])
  .openapi('DomainStatusType')

const DomainDescriptionTypeSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID.' }),
    ).exactOptional(),
    AWSAccountId: AWSAccountIdTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services ID for the user pool owner.' }),
    ).exactOptional(),
    Domain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain string. For custom domains, this is the fully-qualified domain name, such as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone, such as <code>auth</code>.',
        }),
    ).exactOptional(),
    S3Bucket: S3BucketTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 bucket where the static files for this domain are stored.',
        }),
    ).exactOptional(),
    CloudFrontDistribution: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon CloudFront endpoint that you use as the target of the alias that you set up with your Domain Name Service (DNS) provider.',
        }),
    ).exactOptional(),
    Version: DomainVersionTypeSchema.and(
      z.any().openapi({ description: 'The app version.' }),
    ).exactOptional(),
    Status: DomainStatusTypeSchema.and(
      z.any().openapi({ description: 'The domain status.' }),
    ).exactOptional(),
    CustomDomainConfig: CustomDomainConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A container for information about a domain.', required: [] })
  .openapi('DomainDescriptionType')

const DescribeUserPoolDomainResponseSchema = z
  .object({
    DomainDescription: DomainDescriptionTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A domain description object containing information about the domain.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUserPoolDomainResponse')

const DescribeUserPoolDomainRequestSchema = z
  .object({
    Domain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain string. For custom domains, this is the fully-qualified domain name, such as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone, such as <code>auth</code>.',
        }),
    ),
  })
  .openapi({ required: ['Domain'], title: 'DescribeUserPoolDomainRequest' })
  .openapi('DescribeUserPoolDomainRequest')

const ForgetDeviceRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose registered device you want to forget.',
        }),
    ).exactOptional(),
    DeviceKey: DeviceKeyTypeSchema.and(z.any().openapi({ description: 'The device key.' })),
  })
  .openapi({
    required: ['DeviceKey'],
    title: 'ForgetDeviceRequest',
    description: 'Represents the request to forget the device.',
  })
  .openapi('ForgetDeviceRequest')

const CodeDeliveryDetailsTypeSchema = z
  .object({
    Destination: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address or phone number destination where Amazon Cognito sent the code.',
        }),
    ).exactOptional(),
    DeliveryMedium: DeliveryMediumTypeSchema.and(
      z.any().openapi({ description: 'The method that Amazon Cognito used to send the code.' }),
    ).exactOptional(),
    AttributeName: AttributeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the attribute that Amazon Cognito verifies with the code.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The delivery details for an email or SMS message that Amazon Cognito sent for authentication or verification.',
    required: [],
  })
  .openapi('CodeDeliveryDetailsType')

const ForgotPasswordResponseSchema = z
  .object({
    CodeDeliveryDetails: CodeDeliveryDetailsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code delivery details returned by the server in response to the request to reset a password.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response from Amazon Cognito to a request to reset a password.',
    required: [],
  })
  .openapi('ForgotPasswordResponse')

const ForgotPasswordRequestSchema = z
  .object({
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the client associated with the user pool.' }),
    ),
    SecretHash: SecretHashTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.',
        }),
    ).exactOptional(),
    UserContextData: UserContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name of the user for whom you want to enter a code to reset a forgotten password.',
        }),
    ),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Pinpoint analytics metadata that contributes to your metrics for <code>ForgotPassword</code> calls.',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ForgotPassword API action, Amazon Cognito invokes any functions that are assigned to the following triggers: <i>pre sign-up</i>, <i>custom message</i>, and <i>user migration</i>. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your ForgotPassword request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientId', 'Username'],
    title: 'ForgotPasswordRequest',
    description: "Represents the request to reset a user's password.",
  })
  .openapi('ForgotPasswordRequest')

const ListOfStringTypesSchema = z.array(StringTypeSchema).openapi('ListOfStringTypes')

const GetCSVHeaderResponseSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that the users are to be imported into.',
        }),
    ).exactOptional(),
    CSVHeader: ListOfStringTypesSchema.and(
      z
        .any()
        .openapi({
          description: 'The header information of the CSV file for the user import job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server to the request to get the header information of the CSV file for the user import job.',
    required: [],
  })
  .openapi('GetCSVHeaderResponse')

const GetCSVHeaderRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that the users are to be imported into.',
        }),
    ),
  })
  .openapi({
    required: ['UserPoolId'],
    title: 'GetCSVHeaderRequest',
    description:
      'Represents the request to get the header information of the CSV file for the user import job.',
  })
  .openapi('GetCSVHeaderRequest')

const GetDeviceResponseSchema = z
  .object({ Device: DeviceTypeSchema.and(z.any().openapi({ description: 'The device.' })) })
  .openapi({ required: ['Device'], description: 'Gets the device response.' })
  .openapi('GetDeviceResponse')

const GetDeviceRequestSchema = z
  .object({
    DeviceKey: DeviceKeyTypeSchema.and(z.any().openapi({ description: 'The device key.' })),
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose device information you want to request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeviceKey'],
    title: 'GetDeviceRequest',
    description: 'Represents the request to get the device.',
  })
  .openapi('GetDeviceRequest')

const GetGroupResponseSchema = z
  .object({
    Group: GroupTypeSchema.and(
      z.any().openapi({ description: 'The group object for the group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGroupResponse')

const GetGroupRequestSchema = z
  .object({
    GroupName: GroupNameTypeSchema.and(z.any().openapi({ description: 'The name of the group.' })),
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
  })
  .openapi({ required: ['GroupName', 'UserPoolId'], title: 'GetGroupRequest' })
  .openapi('GetGroupRequest')

const GetIdentityProviderByIdentifierResponseSchema = z
  .object({
    IdentityProvider: IdentityProviderTypeSchema.and(
      z.any().openapi({ description: 'The identity provider details.' }),
    ),
  })
  .openapi({ required: ['IdentityProvider'] })
  .openapi('GetIdentityProviderByIdentifierResponse')

const GetIdentityProviderByIdentifierRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    IdpIdentifier: IdpIdentifierTypeSchema.and(
      z.any().openapi({ description: 'The IdP identifier.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'IdpIdentifier'],
    title: 'GetIdentityProviderByIdentifierRequest',
  })
  .openapi('GetIdentityProviderByIdentifierRequest')

const LogLevelSchema = z.literal('ERROR').openapi('LogLevel')

const EventSourceNameSchema = z.literal('userNotification').openapi('EventSourceName')

const CloudWatchLogsConfigurationTypeSchema = z
  .object({
    LogGroupArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (arn) of a CloudWatch Logs log group where your user pool sends logs. The log group must not be encrypted with Key Management Service and must be in the same Amazon Web Services account as your user pool.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The CloudWatch logging destination of a user pool detailed activity logging configuration.',
    required: [],
  })
  .openapi('CloudWatchLogsConfigurationType')

const LogConfigurationTypeSchema = z
  .object({
    LogLevel: LogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>errorlevel</code> selection of logs that a user pool sends for detailed activity logging.',
        }),
    ),
    EventSource: EventSourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of events that your user pool sends for detailed activity logging.',
        }),
    ),
    CloudWatchLogsConfiguration: CloudWatchLogsConfigurationTypeSchema.and(
      z.any().openapi({ description: 'The CloudWatch logging destination of a user pool.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LogLevel', 'EventSource'],
    description: 'The logging parameters of a user pool.',
  })
  .openapi('LogConfigurationType')

const LogConfigurationListTypeSchema = z
  .array(LogConfigurationTypeSchema)
  .min(0)
  .max(1)
  .openapi('LogConfigurationListType')

const LogDeliveryConfigurationTypeSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the user pool where you configured detailed activity logging.',
        }),
    ),
    LogConfigurations: LogConfigurationListTypeSchema.and(
      z.any().openapi({ description: 'The detailed activity logging destination of a user pool.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'LogConfigurations'],
    description: 'The logging parameters of a user pool.',
  })
  .openapi('LogDeliveryConfigurationType')

const GetLogDeliveryConfigurationResponseSchema = z
  .object({
    LogDeliveryConfiguration: LogDeliveryConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The detailed activity logging configuration of the requested user pool.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLogDeliveryConfigurationResponse')

const GetLogDeliveryConfigurationRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the user pool where you want to view detailed activity logging configuration.',
        }),
    ),
  })
  .openapi({ required: ['UserPoolId'], title: 'GetLogDeliveryConfigurationRequest' })
  .openapi('GetLogDeliveryConfigurationRequest')

const GetSigningCertificateResponseSchema = z
  .object({
    Certificate: StringTypeSchema.and(
      z.any().openapi({ description: 'The signing certificate.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Response from Amazon Cognito for a signing certificate request.',
    required: [],
  })
  .openapi('GetSigningCertificateResponse')

const GetSigningCertificateRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
  })
  .openapi({
    required: ['UserPoolId'],
    title: 'GetSigningCertificateRequest',
    description: 'Request to get a signing certificate from Amazon Cognito.',
  })
  .openapi('GetSigningCertificateRequest')

const ImageUrlTypeSchema = z.string().openapi('ImageUrlType')

const CSSTypeSchema = z.string().min(0).max(131072).openapi('CSSType')

const CSSVersionTypeSchema = z.string().openapi('CSSVersionType')

const UICustomizationTypeSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ).exactOptional(),
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The client ID for the client app.' }),
    ).exactOptional(),
    ImageUrl: ImageUrlTypeSchema.and(
      z.any().openapi({ description: 'The logo image for the UI customization.' }),
    ).exactOptional(),
    CSS: CSSTypeSchema.and(
      z.any().openapi({ description: 'The CSS values in the UI customization.' }),
    ).exactOptional(),
    CSSVersion: CSSVersionTypeSchema.and(
      z.any().openapi({ description: 'The CSS version number.' }),
    ).exactOptional(),
    LastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A container for the UI customization information for a user pool's built-in app UI.",
    required: [],
  })
  .openapi('UICustomizationType')

const GetUICustomizationResponseSchema = z
  .object({
    UICustomization: UICustomizationTypeSchema.and(
      z.any().openapi({ description: 'The UI customization information.' }),
    ),
  })
  .openapi({ required: ['UICustomization'] })
  .openapi('GetUICustomizationResponse')

const GetUICustomizationRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The client ID for the client app.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId'], title: 'GetUICustomizationRequest' })
  .openapi('GetUICustomizationRequest')

const GetUserResponseSchema = z
  .object({
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The username of the user that you requested.' }),
    ),
    UserAttributes: AttributeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of name-value pairs representing user attributes.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>',
        }),
    ),
    MFAOptions: MFAOptionListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            " <i>This response parameter is no longer supported.</i> It provides information only about SMS MFA configurations. It doesn't provide information about time-based one-time password (TOTP) software token MFA configurations. To look up information about either type of MFA configuration, use UserMFASettingList instead.",
        }),
    ).exactOptional(),
    PreferredMfaSetting: StringTypeSchema.and(
      z.any().openapi({ description: "The user's preferred MFA setting." }),
    ).exactOptional(),
    UserMFASettingList: UserMFASettingListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MFA options that are activated for the user. The possible values in this list are <code>SMS_MFA</code> and <code>SOFTWARE_TOKEN_MFA</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Username', 'UserAttributes'],
    description:
      'Represents the response from the server from the request to get information about the user.',
  })
  .openapi('GetUserResponse')

const GetUserRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-expired access token for the user whose information you want to query.',
        }),
    ),
  })
  .openapi({
    required: ['AccessToken'],
    title: 'GetUserRequest',
    description: 'Represents the request to get information about the user.',
  })
  .openapi('GetUserRequest')

const GetUserAttributeVerificationCodeResponseSchema = z
  .object({
    CodeDeliveryDetails: CodeDeliveryDetailsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code delivery details returned by the server in response to the request to get the user attribute verification code.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The verification code response returned by the server response to get the user attribute verification code.',
    required: [],
  })
  .openapi('GetUserAttributeVerificationCodeResponse')

const GetUserAttributeVerificationCodeRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-expired access token for the user whose attribute verification code you want to generate.',
        }),
    ),
    AttributeName: AttributeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attribute name returned by the server response to get the user attribute verification code.',
        }),
    ),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the GetUserAttributeVerificationCode API action, Amazon Cognito invokes the function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your GetUserAttributeVerificationCode request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccessToken', 'AttributeName'],
    title: 'GetUserAttributeVerificationCodeRequest',
    description: 'Represents the request to get user attribute verification.',
  })
  .openapi('GetUserAttributeVerificationCodeRequest')

const SmsMfaConfigTypeSchema = z
  .object({
    SmsAuthenticationMessage: SmsVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The SMS authentication message that will be sent to users with the code they must sign in. The message must contain the ‘{####}’ placeholder, which is replaced with the code. If the message isn't included, and default message will be used.",
        }),
    ).exactOptional(),
    SmsConfiguration: SmsConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SMS configuration with the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To request Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role that you provide for your Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The SMS text message multi-factor authentication (MFA) configuration type.',
    required: [],
  })
  .openapi('SmsMfaConfigType')

const SoftwareTokenMfaConfigTypeSchema = z
  .object({
    Enabled: BooleanTypeSchema.and(
      z.any().openapi({ description: 'Specifies whether software token MFA is activated.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The type used for enabling software token MFA at the user pool level.',
    required: [],
  })
  .openapi('SoftwareTokenMfaConfigType')

const GetUserPoolMfaConfigResponseSchema = z
  .object({
    SmsMfaConfiguration: SmsMfaConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The SMS text message multi-factor authentication (MFA) configuration.',
        }),
    ).exactOptional(),
    SoftwareTokenMfaConfiguration: SoftwareTokenMfaConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The software token multi-factor authentication (MFA) configuration.',
        }),
    ).exactOptional(),
    MfaConfiguration: UserPoolMfaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The multi-factor authentication (MFA) configuration. Valid values include:</p> <ul> <li> <p> <code>OFF</code> MFA won't be used for any users.</p> </li> <li> <p> <code>ON</code> MFA is required for all users to sign in.</p> </li> <li> <p> <code>OPTIONAL</code> MFA will be required only for individual users who have an MFA factor activated.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetUserPoolMfaConfigResponse')

const GetUserPoolMfaConfigRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
  })
  .openapi({ required: ['UserPoolId'], title: 'GetUserPoolMfaConfigRequest' })
  .openapi('GetUserPoolMfaConfigRequest')

const GlobalSignOutResponseSchema = z
  .object({})
  .openapi({ description: 'The response to the request to sign out all devices.' })
  .openapi('GlobalSignOutResponse')

const GlobalSignOutRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user who you want to sign out.',
        }),
    ),
  })
  .openapi({
    required: ['AccessToken'],
    title: 'GlobalSignOutRequest',
    description: 'Represents the request to sign out all devices.',
  })
  .openapi('GlobalSignOutRequest')

const InitiateAuthResponseSchema = z
  .object({
    ChallengeName: ChallengeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the challenge that you're responding to with this call. This name is returned in the <code>AdminInitiateAuth</code> response if you must pass another challenge.</p> <p>Valid values include the following:</p> <note> <p>All of the following challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if applicable) in the parameters.</p> </note> <ul> <li> <p> <code>SMS_MFA</code>: Next challenge is to supply an <code>SMS_MFA_CODE</code>, delivered via SMS.</p> </li> <li> <p> <code>PASSWORD_VERIFIER</code>: Next challenge is to supply <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after the client-side SRP calculations.</p> </li> <li> <p> <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued.</p> </li> <li> <p> <code>DEVICE_SRP_AUTH</code>: If device tracking was activated on your user pool and the previous challenges were passed, this challenge is returned so that Amazon Cognito can start tracking this device.</p> </li> <li> <p> <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to <code>PASSWORD_VERIFIER</code>, but for devices only.</p> </li> <li> <p> <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their passwords after successful first login. </p> <p>Respond to this challenge with <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in the <code>requiredAttributes</code> parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write. For more information, see <a href=\"https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html\">RespondToAuthChallenge</a>.</p> <note> <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value. In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter, then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p> </note> </li> <li> <p> <code>MFA_SETUP</code>: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters <code>MFA_CAN_SETUP</code> value. </p> <p> To set up software token MFA, use the session returned here from <code>InitiateAuth</code> as an input to <code>AssociateSoftwareToken</code>. Use the session returned by <code>VerifySoftwareToken</code> as an input to <code>RespondToAuthChallenge</code> with challenge name <code>MFA_SETUP</code> to complete sign-in. To set up SMS MFA, an administrator should help the user to add a phone number to their account, and then the user should call <code>InitiateAuth</code> again to restart sign-in.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should pass both ways in challenge-response calls to the service. If the caller must pass another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.',
        }),
    ).exactOptional(),
    ChallengeParameters: ChallengeParametersTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The challenge parameters. These are returned in the <code>InitiateAuth</code> response if you must pass another challenge. The responses in this parameter should be used to compute inputs to the next call (<code>RespondToAuthChallenge</code>). </p> <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if applicable).</p>',
        }),
    ).exactOptional(),
    AuthenticationResult: AuthenticationResultTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The result of the authentication response. This result is only returned if the caller doesn't need to pass another challenge. If the caller does need to pass another challenge before it gets tokens, <code>ChallengeName</code>, <code>ChallengeParameters</code>, and <code>Session</code> are returned.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Initiates the authentication response.', required: [] })
  .openapi('InitiateAuthResponse')

const InitiateAuthRequestSchema = z
  .object({
    AuthFlow: AuthFlowTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The authentication flow for this call to run. The API action will depend on this value. For example:</p> <ul> <li> <p> <code>REFRESH_TOKEN_AUTH</code> takes in a valid refresh token and returns new tokens.</p> </li> <li> <p> <code>USER_SRP_AUTH</code> takes in <code>USERNAME</code> and <code>SRP_A</code> and returns the SRP variables to be used for next challenge execution.</p> </li> <li> <p> <code>USER_PASSWORD_AUTH</code> takes in <code>USERNAME</code> and <code>PASSWORD</code> and returns the next challenge or tokens.</p> </li> </ul> <p>Valid values include:</p> <ul> <li> <p> <code>USER_SRP_AUTH</code>: Authentication flow for the Secure Remote Password (SRP) protocol.</p> </li> <li> <p> <code>REFRESH_TOKEN_AUTH</code>/<code>REFRESH_TOKEN</code>: Authentication flow for refreshing the access token and ID token by supplying a valid refresh token.</p> </li> <li> <p> <code>CUSTOM_AUTH</code>: Custom authentication flow.</p> </li> <li> <p> <code>USER_PASSWORD_AUTH</code>: Non-SRP authentication flow; user name and password are passed directly. If a user migration Lambda trigger is set, this flow will invoke the user migration Lambda if it doesn't find the user name in the user pool. </p> </li> </ul> <p> <code>ADMIN_NO_SRP_AUTH</code> isn't a valid value.</p>",
        }),
    ),
    AuthParameters: AuthParametersTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The authentication parameters. These are inputs corresponding to the <code>AuthFlow</code> that you\'re invoking. The required values depend on the value of <code>AuthFlow</code>:</p> <ul> <li> <p>For <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required), <code>SRP_A</code> (required), <code>SECRET_HASH</code> (required if the app client is configured with a client secret), <code>DEVICE_KEY</code>.</p> </li> <li> <p>For <code>USER_PASSWORD_AUTH</code>: <code>USERNAME</code> (required), <code>PASSWORD</code> (required), <code>SECRET_HASH</code> (required if the app client is configured with a client secret), <code>DEVICE_KEY</code>.</p> </li> <li> <p>For <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code> (required), <code>SECRET_HASH</code> (required if the app client is configured with a client secret), <code>DEVICE_KEY</code>.</p> </li> <li> <p>For <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required), <code>SECRET_HASH</code> (if app client is configured with client secret), <code>DEVICE_KEY</code>. To start the authentication flow with password verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The SRP_A Value)</code>.</p> </li> </ul> <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for certain custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the InitiateAuth API action, Amazon Cognito invokes the Lambda functions that are specified for various triggers. The ClientMetadata value is passed as input to the functions for only the following triggers:</p> <ul> <li> <p>Pre signup</p> </li> <li> <p>Pre authentication</p> </li> <li> <p>User migration</p> </li> </ul> <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which the function receives as input. This payload contains a <code>validationData</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your InitiateAuth request. In your function code in Lambda, you can process the <code>validationData</code> value to enhance your workflow for your specific needs.</p> <p>When you use the InitiateAuth API action, Amazon Cognito also invokes the functions for the following triggers, but it doesn't provide the ClientMetadata value as input:</p> <ul> <li> <p>Post authentication</p> </li> <li> <p>Custom message</p> </li> <li> <p>Pre token generation</p> </li> <li> <p>Create auth challenge</p> </li> <li> <p>Define auth challenge</p> </li> <li> <p>Verify auth challenge</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    ClientId: ClientIdTypeSchema.and(z.any().openapi({ description: 'The app client ID.' })),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Pinpoint analytics metadata that contributes to your metrics for <code>InitiateAuth</code> calls.',
        }),
    ).exactOptional(),
    UserContextData: UserContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AuthFlow', 'ClientId'],
    title: 'InitiateAuthRequest',
    description: 'Initiates the authentication request.',
  })
  .openapi('InitiateAuthRequest')

const ListDevicesResponseSchema = z
  .object({
    Devices: DeviceListTypeSchema.and(
      z.any().openapi({ description: 'The devices returned in the list devices response.' }),
    ).exactOptional(),
    PaginationToken: SearchPaginationTokenTypeSchema.and(
      z.any().openapi({ description: 'The pagination token for the list device response.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the response to list devices.', required: [] })
  .openapi('ListDevicesResponse')

const ListDevicesRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose list of devices you want to view.',
        }),
    ),
    Limit: QueryLimitTypeSchema.and(
      z.any().openapi({ description: 'The limit of the device request.' }),
    ).exactOptional(),
    PaginationToken: SearchPaginationTokenTypeSchema.and(
      z.any().openapi({ description: 'The pagination token for the list request.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccessToken'],
    title: 'ListDevicesRequest',
    description: 'Represents the request to list the devices.',
  })
  .openapi('ListDevicesRequest')

const ListGroupsResponseSchema = z
  .object({
    Groups: GroupListTypeSchema.and(
      z.any().openapi({ description: 'The group objects for the groups.' }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGroupsResponse')

const ListGroupsRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    Limit: QueryLimitTypeSchema.and(
      z.any().openapi({ description: 'The limit of the request to list groups.' }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId'], title: 'ListGroupsRequest' })
  .openapi('ListGroupsRequest')

const ProviderDescriptionSchema = z
  .object({
    ProviderName: ProviderNameTypeSchema.and(
      z.any().openapi({ description: 'The IdP name.' }),
    ).exactOptional(),
    ProviderType: IdentityProviderTypeTypeSchema.and(
      z.any().openapi({ description: 'The IdP type.' }),
    ).exactOptional(),
    LastModifiedDate: DateTypeSchema.and(
      z.any().openapi({ description: 'The date the provider was last modified.' }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A container for IdP details.', required: [] })
  .openapi('ProviderDescription')

const ProvidersListTypeSchema = z
  .array(ProviderDescriptionSchema)
  .min(0)
  .max(50)
  .openapi('ProvidersListType')

const PaginationKeyTypeSchema = z.string().regex(/[\S]+/).min(1).openapi('PaginationKeyType')

const ListIdentityProvidersResponseSchema = z
  .object({
    Providers: ProvidersListTypeSchema.and(
      z.any().openapi({ description: 'A list of IdP objects.' }),
    ),
    NextToken: PaginationKeyTypeSchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Providers'] })
  .openapi('ListIdentityProvidersResponse')

const ListProvidersLimitTypeSchema = z.int().min(0).max(60).openapi('ListProvidersLimitType')

const ListIdentityProvidersRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    MaxResults: ListProvidersLimitTypeSchema.and(
      z.any().openapi({ description: 'The maximum number of IdPs to return.' }),
    ).exactOptional(),
    NextToken: PaginationKeyTypeSchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId'], title: 'ListIdentityProvidersRequest' })
  .openapi('ListIdentityProvidersRequest')

const ResourceServersListTypeSchema = z
  .array(ResourceServerTypeSchema)
  .openapi('ResourceServersListType')

const ListResourceServersResponseSchema = z
  .object({
    ResourceServers: ResourceServersListTypeSchema.and(
      z.any().openapi({ description: 'The resource servers.' }),
    ),
    NextToken: PaginationKeyTypeSchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceServers'] })
  .openapi('ListResourceServersResponse')

const ListResourceServersLimitTypeSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListResourceServersLimitType')

const ListResourceServersRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    MaxResults: ListResourceServersLimitTypeSchema.and(
      z.any().openapi({ description: 'The maximum number of resource servers to return.' }),
    ).exactOptional(),
    NextToken: PaginationKeyTypeSchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId'], title: 'ListResourceServersRequest' })
  .openapi('ListResourceServersRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: UserPoolTagsTypeSchema.and(
      z.any().openapi({ description: 'The tags that are assigned to the user pool.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const UserImportJobsListTypeSchema = z
  .array(UserImportJobTypeSchema)
  .min(1)
  .max(50)
  .openapi('UserImportJobsListType')

const ListUserImportJobsResponseSchema = z
  .object({
    UserImportJobs: UserImportJobsListTypeSchema.and(
      z.any().openapi({ description: 'The user import jobs.' }),
    ).exactOptional(),
    PaginationToken: PaginationKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that can be used to return the next set of user import jobs in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server to the request to list the user import jobs.',
    required: [],
  })
  .openapi('ListUserImportJobsResponse')

const PoolQueryLimitTypeSchema = z.int().min(1).max(60).openapi('PoolQueryLimitType')

const ListUserImportJobsRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that the users are being imported into.',
        }),
    ),
    MaxResults: PoolQueryLimitTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of import jobs you want the request to return.',
        }),
    ),
    PaginationToken: PaginationKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to <code>ListUserImportJobs</code>, which can be used to return the next set of import jobs in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'MaxResults'],
    title: 'ListUserImportJobsRequest',
    description: 'Represents the request to list the user import jobs.',
  })
  .openapi('ListUserImportJobsRequest')

const UserPoolClientDescriptionSchema = z
  .object({
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the client associated with the user pool.' }),
    ).exactOptional(),
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool where you want to describe the user pool client.',
        }),
    ).exactOptional(),
    ClientName: ClientNameTypeSchema.and(
      z.any().openapi({ description: 'The client name from the user pool client description.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The description of the user pool client.', required: [] })
  .openapi('UserPoolClientDescription')

const UserPoolClientListTypeSchema = z
  .array(UserPoolClientDescriptionSchema)
  .openapi('UserPoolClientListType')

const ListUserPoolClientsResponseSchema = z
  .object({
    UserPoolClients: UserPoolClientListTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool clients in the response that lists user pool clients.',
        }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the response from the server that lists user pool clients.',
    required: [],
  })
  .openapi('ListUserPoolClientsResponse')

const QueryLimitSchema = z.int().min(1).max(60).openapi('QueryLimit')

const ListUserPoolClientsRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool where you want to list user pool clients.',
        }),
    ),
    MaxResults: QueryLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results you want the request to return when listing the user pool clients.',
        }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId'],
    title: 'ListUserPoolClientsRequest',
    description: 'Represents the request to list the user pool clients.',
  })
  .openapi('ListUserPoolClientsRequest')

const UserPoolDescriptionTypeSchema = z
  .object({
    Id: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The ID in a user pool description.' }),
    ).exactOptional(),
    Name: UserPoolNameTypeSchema.and(
      z.any().openapi({ description: 'The name in a user pool description.' }),
    ).exactOptional(),
    LambdaConfig: LambdaConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Lambda configuration information in a user pool description.',
        }),
    ).exactOptional(),
    Status: StatusTypeSchema.and(
      z.any().openapi({ description: 'The user pool status in a user pool description.' }),
    ).exactOptional(),
    LastModifiedDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was modified.',
        }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format, when the item was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A user pool description.', required: [] })
  .openapi('UserPoolDescriptionType')

const UserPoolListTypeSchema = z.array(UserPoolDescriptionTypeSchema).openapi('UserPoolListType')

const ListUserPoolsResponseSchema = z
  .object({
    UserPools: UserPoolListTypeSchema.and(
      z.any().openapi({ description: 'The user pools from the response to list users.' }),
    ).exactOptional(),
    NextToken: PaginationKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the response to list user pools.', required: [] })
  .openapi('ListUserPoolsResponse')

const ListUserPoolsRequestSchema = z
  .object({
    NextToken: PaginationKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
    MaxResults: PoolQueryLimitTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results you want the request to return when listing the user pools.',
        }),
    ),
  })
  .openapi({
    required: ['MaxResults'],
    title: 'ListUserPoolsRequest',
    description: 'Represents the request to list user pools.',
  })
  .openapi('ListUserPoolsRequest')

const UsersListTypeSchema = z.array(UserTypeSchema).openapi('UsersListType')

const ListUsersResponseSchema = z
  .object({
    Users: UsersListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the user pool users, and their attributes, that match your query.</p> <note> <p>Amazon Cognito creates a profile in your user pool for each native user in your user pool, and each unique user ID from your third-party identity providers (IdPs). When you link users with the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a> API operation, the output of <code>ListUsers</code> displays both the IdP user and the native user that you linked. You can identify IdP users in the <code>Users</code> object of this API response by the IdP prefix that Amazon Cognito appends to <code>Username</code>.</p> </note>',
        }),
    ).exactOptional(),
    PaginationToken: SearchPaginationTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response from the request to list users.', required: [] })
  .openapi('ListUsersResponse')

const SearchedAttributeNamesListTypeSchema = z
  .array(AttributeNameTypeSchema)
  .openapi('SearchedAttributeNamesListType')

const UserFilterTypeSchema = z.string().max(256).openapi('UserFilterType')

const ListUsersRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool on which the search should be performed.',
        }),
    ),
    AttributesToGet: SearchedAttributeNamesListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "A JSON array of user attribute names, for example <code>given_name</code>, that you want Amazon Cognito to include in the response for each user. When you don't provide an <code>AttributesToGet</code> parameter, Amazon Cognito returns all attributes for each user.",
        }),
    ).exactOptional(),
    Limit: QueryLimitTypeSchema.and(
      z.any().openapi({ description: 'Maximum number of users to be returned.' }),
    ).exactOptional(),
    PaginationToken: SearchPaginationTokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
    Filter: UserFilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter string of the form "<i>AttributeName</i> <i>Filter-Type</i> "<i>AttributeValue</i>"". Quotation marks within the filter string must be escaped using the backslash (\\) character. For example, "<code>family_name</code> = \\"Reddy\\"".</p> <ul> <li> <p> <i>AttributeName</i>: The name of the attribute to search for. You can only search for one attribute at a time.</p> </li> <li> <p> <i>Filter-Type</i>: For an exact match, use =, for example, "<code>given_name</code> = \\"Jon\\"". For a prefix ("starts with") match, use ^=, for example, "<code>given_name</code> ^= \\"Jon\\"". </p> </li> <li> <p> <i>AttributeValue</i>: The attribute value that must be matched for each user.</p> </li> </ul> <p>If the filter string is empty, <code>ListUsers</code> returns all users in the user pool.</p> <p>You can only search for the following standard attributes:</p> <ul> <li> <p> <code>username</code> (case-sensitive)</p> </li> <li> <p> <code>email</code> </p> </li> <li> <p> <code>phone_number</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>given_name</code> </p> </li> <li> <p> <code>family_name</code> </p> </li> <li> <p> <code>preferred_username</code> </p> </li> <li> <p> <code>cognito:user_status</code> (called <b>Status</b> in the Console) (case-insensitive)</p> </li> <li> <p> <code>status (called <b>Enabled</b> in the Console) (case-sensitive)</code> </p> </li> <li> <p> <code>sub</code> </p> </li> </ul> <p>Custom attributes aren\'t searchable.</p> <note> <p>You can also list users with a client-side filter. The server-side filter matches no more than one attribute. For an advanced search, use a client-side filter with the <code>--query</code> parameter of the <code>list-users</code> action in the CLI. When you use a client-side filter, ListUsers returns a paginated list of zero or more users. You can receive multiple pages in a row with zero results. Repeat the query with each pagination token that is returned until you receive a null pagination token value, and then review the combined result. </p> <p>For more information about server-side and client-side filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">FilteringCLI output</a> in the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Command Line Interface User Guide</a>. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-using-listusers-api">Searching for Users Using the ListUsers API</a> and <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-listusers-api-examples">Examples of Using the ListUsers API</a> in the <i>Amazon Cognito Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId'],
    title: 'ListUsersRequest',
    description: 'Represents the request to list users.',
  })
  .openapi('ListUsersRequest')

const ListUsersInGroupResponseSchema = z
  .object({
    Users: UsersListTypeSchema.and(
      z.any().openapi({ description: 'The users returned in the request to list users.' }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that you can use in a later request to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUsersInGroupResponse')

const ListUsersInGroupRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    GroupName: GroupNameTypeSchema.and(z.any().openapi({ description: 'The name of the group.' })),
    Limit: QueryLimitTypeSchema.and(
      z.any().openapi({ description: 'The limit of the request to list users.' }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId', 'GroupName'], title: 'ListUsersInGroupRequest' })
  .openapi('ListUsersInGroupRequest')

const ResendConfirmationCodeResponseSchema = z
  .object({
    CodeDeliveryDetails: CodeDeliveryDetailsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code delivery details returned by the server in response to the request to resend the confirmation code.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response from the server when Amazon Cognito makes the request to resend a confirmation code.',
    required: [],
  })
  .openapi('ResendConfirmationCodeResponse')

const ResendConfirmationCodeRequestSchema = z
  .object({
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the client associated with the user pool.' }),
    ),
    SecretHash: SecretHashTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.',
        }),
    ).exactOptional(),
    UserContextData: UserContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
    Username: UsernameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>username</code> attribute of the user to whom you want to resend a confirmation code.',
        }),
    ),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Pinpoint analytics metadata that contributes to your metrics for <code>ResendConfirmationCode</code> calls.',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ResendConfirmationCode API action, Amazon Cognito invokes the function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your ResendConfirmationCode request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientId', 'Username'],
    title: 'ResendConfirmationCodeRequest',
    description: 'Represents the request to resend the confirmation code.',
  })
  .openapi('ResendConfirmationCodeRequest')

const RespondToAuthChallengeResponseSchema = z
  .object({
    ChallengeName: ChallengeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.',
        }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service. If the caller must pass another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.',
        }),
    ).exactOptional(),
    ChallengeParameters: ChallengeParametersTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.',
        }),
    ).exactOptional(),
    AuthenticationResult: AuthenticationResultTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The result returned by the server in response to the request to respond to the authentication challenge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response to respond to the authentication challenge.',
    required: [],
  })
  .openapi('RespondToAuthChallengeResponse')

const RespondToAuthChallengeRequestSchema = z
  .object({
    ClientId: ClientIdTypeSchema.and(z.any().openapi({ description: 'The app client ID.' })),
    ChallengeName: ChallengeNameTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p> <p> <code>ADMIN_NO_SRP_AUTH</code> isn\'t a valid value.</p>',
        }),
    ),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service. If <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call determines that the caller must pass another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.',
        }),
    ).exactOptional(),
    ChallengeResponses: ChallengeResponsesTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The challenge responses. These are inputs corresponding to the value of <code>ChallengeName</code>, for example:</p> <note> <p> <code>SECRET_HASH</code> (if app client is configured with client secret) applies to all of the inputs that follow (including <code>SOFTWARE_TOKEN_MFA</code>).</p> </note> <ul> <li> <p> <code>SMS_MFA</code>: <code>SMS_MFA_CODE</code>, <code>USERNAME</code>.</p> </li> <li> <p> <code>PASSWORD_VERIFIER</code>: <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, <code>TIMESTAMP</code>, <code>USERNAME</code>.</p> <note> <p> <code>PASSWORD_VERIFIER</code> requires <code>DEVICE_KEY</code> when you sign in with a remembered device.</p> </note> </li> <li> <p> <code>NEW_PASSWORD_REQUIRED</code>: <code>NEW_PASSWORD</code>, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured with client secret). To set any required attributes that Amazon Cognito returned as <code>requiredAttributes</code> in the <code>InitiateAuth</code> response, add a <code>userAttributes.<i>attributename</i> </code> parameter. This parameter can also set values for writable attributes that aren\'t required by your user pool.</p> <note> <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can\'t modify a required attribute that already has a value. In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter, then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p> </note> </li> <li> <p> <code>SOFTWARE_TOKEN_MFA</code>: <code>USERNAME</code> and <code>SOFTWARE_TOKEN_MFA_CODE</code> are required attributes.</p> </li> <li> <p> <code>DEVICE_SRP_AUTH</code> requires <code>USERNAME</code>, <code>DEVICE_KEY</code>, <code>SRP_A</code> (and <code>SECRET_HASH</code>).</p> </li> <li> <p> <code>DEVICE_PASSWORD_VERIFIER</code> requires everything that <code>PASSWORD_VERIFIER</code> requires, plus <code>DEVICE_KEY</code>.</p> </li> <li> <p> <code>MFA_SETUP</code> requires <code>USERNAME</code>, plus you must use the session value returned by <code>VerifySoftwareToken</code> in the <code>Session</code> parameter.</p> </li> </ul> <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>',
        }),
    ).exactOptional(),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Pinpoint analytics metadata that contributes to your metrics for <code>RespondToAuthChallenge</code> calls.',
        }),
    ).exactOptional(),
    UserContextData: UserContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the RespondToAuthChallenge API action, Amazon Cognito invokes any functions that are assigned to the following triggers: <i>post authentication</i>, <i>pre token generation</i>, <i>define auth challenge</i>, <i>create auth challenge</i>, and <i>verify auth challenge</i>. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your RespondToAuthChallenge request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientId', 'ChallengeName'],
    title: 'RespondToAuthChallengeRequest',
    description: 'The request to respond to an authentication challenge.',
  })
  .openapi('RespondToAuthChallengeRequest')

const RevokeTokenResponseSchema = z.object({}).openapi('RevokeTokenResponse')

const RevokeTokenRequestSchema = z
  .object({
    Token: TokenModelTypeSchema.and(
      z.any().openapi({ description: 'The refresh token that you want to revoke.' }),
    ),
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The client ID for the token that you want to revoke.' }),
    ),
    ClientSecret: ClientSecretTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secret for the client ID. This is required only if the client ID has a secret.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Token', 'ClientId'], title: 'RevokeTokenRequest' })
  .openapi('RevokeTokenRequest')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const UnsupportedTokenTypeExceptionSchema = z.any().openapi('UnsupportedTokenTypeException')

const SetLogDeliveryConfigurationResponseSchema = z
  .object({
    LogDeliveryConfiguration: LogDeliveryConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The detailed activity logging configuration that you applied to the requested user pool.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetLogDeliveryConfigurationResponse')

const SetLogDeliveryConfigurationRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the user pool where you want to configure detailed activity logging .',
        }),
    ),
    LogConfigurations: LogConfigurationListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of all of the detailed activity logging configurations for a user pool.',
        }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'LogConfigurations'],
    title: 'SetLogDeliveryConfigurationRequest',
  })
  .openapi('SetLogDeliveryConfigurationRequest')

const SetRiskConfigurationResponseSchema = z
  .object({
    RiskConfiguration: RiskConfigurationTypeSchema.and(
      z.any().openapi({ description: 'The risk configuration.' }),
    ),
  })
  .openapi({ required: ['RiskConfiguration'] })
  .openapi('SetRiskConfigurationResponse')

const SetRiskConfigurationRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID. ' })),
    ClientId: ClientIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The app client ID. If <code>ClientId</code> is null, then the risk configuration is mapped to <code>userPoolId</code>. When the client ID is null, the same risk configuration is applied to all the clients in the userPool.</p> <p>Otherwise, <code>ClientId</code> is mapped to the client. When the client ID isn't null, the user pool configuration is overridden and the risk configuration for the client is used instead.</p>",
        }),
    ).exactOptional(),
    CompromisedCredentialsRiskConfiguration: CompromisedCredentialsRiskConfigurationTypeSchema.and(
      z.any().openapi({ description: 'The compromised credentials risk configuration.' }),
    ).exactOptional(),
    AccountTakeoverRiskConfiguration: AccountTakeoverRiskConfigurationTypeSchema.and(
      z.any().openapi({ description: 'The account takeover risk configuration.' }),
    ).exactOptional(),
    RiskExceptionConfiguration: RiskExceptionConfigurationTypeSchema.and(
      z.any().openapi({ description: 'The configuration to override the risk decision.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId'], title: 'SetRiskConfigurationRequest' })
  .openapi('SetRiskConfigurationRequest')

const SetUICustomizationResponseSchema = z
  .object({
    UICustomization: UICustomizationTypeSchema.and(
      z.any().openapi({ description: 'The UI customization information.' }),
    ),
  })
  .openapi({ required: ['UICustomization'] })
  .openapi('SetUICustomizationResponse')

const ImageFileTypeSchema = z.string().min(0).max(131072).openapi('ImageFileType')

const SetUICustomizationRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The client ID for the client app.' }),
    ).exactOptional(),
    CSS: CSSTypeSchema.and(
      z.any().openapi({ description: 'The CSS values in the UI customization.' }),
    ).exactOptional(),
    ImageFile: ImageFileTypeSchema.and(
      z.any().openapi({ description: 'The uploaded logo image for the UI customization.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId'], title: 'SetUICustomizationRequest' })
  .openapi('SetUICustomizationRequest')

const SetUserMFAPreferenceResponseSchema = z.object({}).openapi('SetUserMFAPreferenceResponse')

const SetUserMFAPreferenceRequestSchema = z
  .object({
    SMSMfaSettings: SMSMfaSettingsTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The SMS text message multi-factor authentication (MFA) settings.',
        }),
    ).exactOptional(),
    SoftwareTokenMfaSettings: SoftwareTokenMfaSettingsTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time-based one-time password (TOTP) software token MFA settings.',
        }),
    ).exactOptional(),
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose MFA preference you want to set.',
        }),
    ),
  })
  .openapi({ required: ['AccessToken'], title: 'SetUserMFAPreferenceRequest' })
  .openapi('SetUserMFAPreferenceRequest')

const SetUserPoolMfaConfigResponseSchema = z
  .object({
    SmsMfaConfiguration: SmsMfaConfigTypeSchema.and(
      z.any().openapi({ description: 'The SMS text message MFA configuration.' }),
    ).exactOptional(),
    SoftwareTokenMfaConfiguration: SoftwareTokenMfaConfigTypeSchema.and(
      z.any().openapi({ description: 'The software token MFA configuration.' }),
    ).exactOptional(),
    MfaConfiguration: UserPoolMfaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The MFA configuration. Valid values include:</p> <ul> <li> <p> <code>OFF</code> MFA won't be used for any users.</p> </li> <li> <p> <code>ON</code> MFA is required for all users to sign in.</p> </li> <li> <p> <code>OPTIONAL</code> MFA will be required only for individual users who have an MFA factor enabled.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetUserPoolMfaConfigResponse')

const SetUserPoolMfaConfigRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    SmsMfaConfiguration: SmsMfaConfigTypeSchema.and(
      z.any().openapi({ description: 'The SMS text message MFA configuration.' }),
    ).exactOptional(),
    SoftwareTokenMfaConfiguration: SoftwareTokenMfaConfigTypeSchema.and(
      z.any().openapi({ description: 'The software token MFA configuration.' }),
    ).exactOptional(),
    MfaConfiguration: UserPoolMfaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The MFA configuration. If you set the MfaConfiguration value to ‘ON’, only users who have set up an MFA factor can sign in. To learn more, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa.html">Adding Multi-Factor Authentication (MFA) to a user pool</a>. Valid values include:</p> <ul> <li> <p> <code>OFF</code> MFA won\'t be used for any users.</p> </li> <li> <p> <code>ON</code> MFA is required for all users to sign in.</p> </li> <li> <p> <code>OPTIONAL</code> MFA will be required only for individual users who have an MFA factor activated.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId'], title: 'SetUserPoolMfaConfigRequest' })
  .openapi('SetUserPoolMfaConfigRequest')

const SetUserSettingsResponseSchema = z
  .object({})
  .openapi({ description: 'The response from the server for a set user settings request.' })
  .openapi('SetUserSettingsResponse')

const SetUserSettingsRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose user settings you want to configure.',
        }),
    ),
    MFAOptions: MFAOptionListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use this parameter only to set an SMS configuration that uses SMS for delivery.',
        }),
    ),
  })
  .openapi({
    required: ['AccessToken', 'MFAOptions'],
    title: 'SetUserSettingsRequest',
    description: 'Represents the request to set user settings.',
  })
  .openapi('SetUserSettingsRequest')

const SignUpResponseSchema = z
  .object({
    UserConfirmed: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A response from the server indicating that a user registration has been confirmed.',
        }),
    ),
    CodeDeliveryDetails: CodeDeliveryDetailsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code delivery details returned by the server response to the user registration request.',
        }),
    ).exactOptional(),
    UserSub: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The UUID of the authenticated user. This isn't the same as <code>username</code>.",
        }),
    ),
  })
  .openapi({
    required: ['UserConfirmed', 'UserSub'],
    description: 'The response from the server for a registration request.',
  })
  .openapi('SignUpResponse')

const SignUpRequestSchema = z
  .object({
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the client associated with the user pool.' }),
    ),
    SecretHash: SecretHashTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.',
        }),
    ).exactOptional(),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The user name of the user you want to register.' }),
    ),
    Password: PasswordTypeSchema.and(
      z.any().openapi({ description: 'The password of the user you want to register.' }),
    ),
    UserAttributes: AttributeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of name-value pairs representing user attributes.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>',
        }),
    ).exactOptional(),
    ValidationData: AttributeListTypeSchema.and(
      z.any().openapi({ description: 'The validation data in the request to register a user.' }),
    ).exactOptional(),
    AnalyticsMetadata: AnalyticsMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Pinpoint analytics metadata that contributes to your metrics for <code>SignUp</code> calls.',
        }),
    ).exactOptional(),
    UserContextData: UserContextDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.',
        }),
    ).exactOptional(),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the SignUp API action, Amazon Cognito invokes any functions that are assigned to the following triggers: <i>pre sign-up</i>, <i>custom message</i>, and <i>post confirmation</i>. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your SignUp request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientId', 'Username', 'Password'],
    title: 'SignUpRequest',
    description: 'Represents the request to register a user.',
  })
  .openapi('SignUpRequest')

const StartUserImportJobResponseSchema = z
  .object({
    UserImportJob: UserImportJobTypeSchema.and(
      z.any().openapi({ description: 'The job object that represents the user import job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server to the request to start the user import job.',
    required: [],
  })
  .openapi('StartUserImportJobResponse')

const StartUserImportJobRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that the users are being imported into.',
        }),
    ),
    JobId: UserImportJobIdTypeSchema.and(
      z.any().openapi({ description: 'The job ID for the user import job.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'JobId'],
    title: 'StartUserImportJobRequest',
    description: 'Represents the request to start the user import job.',
  })
  .openapi('StartUserImportJobRequest')

const StopUserImportJobResponseSchema = z
  .object({
    UserImportJob: UserImportJobTypeSchema.and(
      z.any().openapi({ description: 'The job object that represents the user import job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server to the request to stop the user import job.',
    required: [],
  })
  .openapi('StopUserImportJobResponse')

const StopUserImportJobRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The user pool ID for the user pool that the users are being imported into.',
        }),
    ),
    JobId: UserImportJobIdTypeSchema.and(
      z.any().openapi({ description: 'The job ID for the user import job.' }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'JobId'],
    title: 'StopUserImportJobRequest',
    description: 'Represents the request to stop the user import job.',
  })
  .openapi('StopUserImportJobRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user pool to assign the tags to.',
        }),
    ),
    Tags: UserPoolTagsTypeSchema.and(
      z.any().openapi({ description: 'The tags to assign to the user pool.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeysTypeSchema = z.string().min(1).max(128).openapi('TagKeysType')

const UserPoolTagsListTypeSchema = z.array(TagKeysTypeSchema).openapi('UserPoolTagsListType')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.',
        }),
    ),
    TagKeys: UserPoolTagsListTypeSchema.and(
      z.any().openapi({ description: 'The keys of the tags to remove from the user pool.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAuthEventFeedbackResponseSchema = z
  .object({})
  .openapi('UpdateAuthEventFeedbackResponse')

const UpdateAuthEventFeedbackRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    Username: UsernameTypeSchema.and(z.any().openapi({ description: 'The user pool username.' })),
    EventId: EventIdTypeSchema.and(z.any().openapi({ description: 'The event ID.' })),
    FeedbackToken: TokenModelTypeSchema.and(
      z.any().openapi({ description: 'The feedback token.' }),
    ),
    FeedbackValue: FeedbackValueTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The authentication event feedback value. When you provide a <code>FeedbackValue</code> value of <code>valid</code>, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a <code>FeedbackValue</code> value of <code>invalid</code>, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level.",
        }),
    ),
  })
  .openapi({
    required: ['UserPoolId', 'Username', 'EventId', 'FeedbackToken', 'FeedbackValue'],
    title: 'UpdateAuthEventFeedbackRequest',
  })
  .openapi('UpdateAuthEventFeedbackRequest')

const UpdateDeviceStatusResponseSchema = z
  .object({})
  .openapi({ description: 'The response to the request to update the device status.' })
  .openapi('UpdateDeviceStatusResponse')

const UpdateDeviceStatusRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose device status you want to update.',
        }),
    ),
    DeviceKey: DeviceKeyTypeSchema.and(z.any().openapi({ description: 'The device key.' })),
    DeviceRememberedStatus: DeviceRememberedStatusTypeSchema.and(
      z.any().openapi({ description: 'The status of whether a device is remembered.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccessToken', 'DeviceKey'],
    title: 'UpdateDeviceStatusRequest',
    description: 'Represents the request to update the device status.',
  })
  .openapi('UpdateDeviceStatusRequest')

const UpdateGroupResponseSchema = z
  .object({
    Group: GroupTypeSchema.and(
      z.any().openapi({ description: 'The group object for the group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGroupResponse')

const UpdateGroupRequestSchema = z
  .object({
    GroupName: GroupNameTypeSchema.and(z.any().openapi({ description: 'The name of the group.' })),
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    Description: DescriptionTypeSchema.and(
      z.any().openapi({ description: 'A string containing the new description of the group.' }),
    ).exactOptional(),
    RoleArn: ArnTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new role Amazon Resource Name (ARN) for the group. This is used for setting the <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in the token.',
        }),
    ).exactOptional(),
    Precedence: PrecedenceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new precedence value for the group. For more information about this parameter, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html">CreateGroup</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GroupName', 'UserPoolId'], title: 'UpdateGroupRequest' })
  .openapi('UpdateGroupRequest')

const UpdateIdentityProviderResponseSchema = z
  .object({
    IdentityProvider: IdentityProviderTypeSchema.and(
      z.any().openapi({ description: 'The identity provider details.' }),
    ),
  })
  .openapi({ required: ['IdentityProvider'] })
  .openapi('UpdateIdentityProviderResponse')

const UpdateIdentityProviderRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(z.any().openapi({ description: 'The user pool ID.' })),
    ProviderName: ProviderNameTypeSchema.and(z.any().openapi({ description: 'The IdP name.' })),
    ProviderDetails: ProviderDetailsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IdP details to be updated, such as <code>MetadataURL</code> and <code>MetadataFile</code>.',
        }),
    ).exactOptional(),
    AttributeMapping: AttributeMappingTypeSchema.and(
      z.any().openapi({ description: 'The IdP attribute mapping to be changed.' }),
    ).exactOptional(),
    IdpIdentifiers: IdpIdentifiersListTypeSchema.and(
      z.any().openapi({ description: 'A list of IdP identifiers.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId', 'ProviderName'], title: 'UpdateIdentityProviderRequest' })
  .openapi('UpdateIdentityProviderRequest')

const UpdateResourceServerResponseSchema = z
  .object({
    ResourceServer: ResourceServerTypeSchema.and(
      z.any().openapi({ description: 'The resource server.' }),
    ),
  })
  .openapi({ required: ['ResourceServer'] })
  .openapi('UpdateResourceServerResponse')

const UpdateResourceServerRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool.' }),
    ),
    Identifier: ResourceServerIdentifierTypeSchema.and(
      z.any().openapi({ description: 'The identifier for the resource server.' }),
    ),
    Name: ResourceServerNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the resource server.' }),
    ),
    Scopes: ResourceServerScopeListTypeSchema.and(
      z.any().openapi({ description: 'The scope values to be set for the resource server.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserPoolId', 'Identifier', 'Name'], title: 'UpdateResourceServerRequest' })
  .openapi('UpdateResourceServerRequest')

const CodeDeliveryDetailsListTypeSchema = z
  .array(CodeDeliveryDetailsTypeSchema)
  .openapi('CodeDeliveryDetailsListType')

const UpdateUserAttributesResponseSchema = z
  .object({
    CodeDeliveryDetailsList: CodeDeliveryDetailsListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code delivery details list from the server for the request to update user attributes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server for the request to update user attributes.',
    required: [],
  })
  .openapi('UpdateUserAttributesResponse')

const UpdateUserAttributesRequestSchema = z
  .object({
    UserAttributes: AttributeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of name-value pairs representing user attributes.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>If you have set an attribute to require verification before Amazon Cognito updates its value, this request doesn’t immediately update the value of that attribute. After your user receives and responds to a verification message to verify the new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages with the original attribute value until they verify the new value.</p>',
        }),
    ),
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose user attributes you want to update.',
        }),
    ),
    ClientMetadata: ClientMetadataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action initiates. </p> <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the UpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your UpdateUserAttributes request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html\"> Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <note> <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p> <ul> <li> <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p> </li> <li> <p>Validate the ClientMetadata value.</p> </li> <li> <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserAttributes', 'AccessToken'],
    title: 'UpdateUserAttributesRequest',
    description: 'Represents the request to update user attributes.',
  })
  .openapi('UpdateUserAttributesRequest')

const UpdateUserPoolResponseSchema = z
  .object({})
  .openapi({
    description:
      'Represents the response from the server when you make a request to update the user pool.',
  })
  .openapi('UpdateUserPoolResponse')

const UpdateUserPoolRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z.any().openapi({ description: 'The user pool ID for the user pool you want to update.' }),
    ),
    Policies: UserPoolPolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A container with the policies you want to update in a user pool.',
        }),
    ).exactOptional(),
    DeletionProtection: DeletionProtectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature.</p> <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request, Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool, send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an <code>UpdateUserPool</code> API request.</p>',
        }),
    ).exactOptional(),
    LambdaConfig: LambdaConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lambda configuration information from the request to update the user pool.',
        }),
    ).exactOptional(),
    AutoVerifiedAttributes: VerifiedAttributesListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attributes that are automatically verified when Amazon Cognito requests to update user pools.',
        }),
    ).exactOptional(),
    SmsVerificationMessage: SmsVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    EmailVerificationMessage: EmailVerificationMessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    EmailVerificationSubject: EmailVerificationSubjectTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.',
        }),
    ).exactOptional(),
    VerificationMessageTemplate: VerificationMessageTemplateTypeSchema.and(
      z.any().openapi({ description: 'The template for verification messages.' }),
    ).exactOptional(),
    SmsAuthenticationMessage: SmsVerificationMessageTypeSchema.and(
      z.any().openapi({ description: 'The contents of the SMS authentication message.' }),
    ).exactOptional(),
    UserAttributeUpdateSettings: UserAttributeUpdateSettingsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users\' email address and phone number attributes. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates"> Verifying updates to email addresses and phone numbers</a>.',
        }),
    ).exactOptional(),
    MfaConfiguration: UserPoolMfaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Possible values include:</p> <ul> <li> <p> <code>OFF</code> - MFA tokens aren\'t required and can\'t be specified during user registration.</p> </li> <li> <p> <code>ON</code> - MFA tokens are required for all user registrations. You can only specify ON when you\'re initially creating a user pool. You can use the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html">SetUserPoolMfaConfig</a> API operation to turn MFA "ON" for existing user pools. </p> </li> <li> <p> <code>OPTIONAL</code> - Users have the option when registering to create an MFA token.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DeviceConfiguration: DeviceConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.</p> <note> <p>When you provide a value for any <code>DeviceConfiguration</code> field, you activate the Amazon Cognito device-remembering feature.</p> </note>',
        }),
    ).exactOptional(),
    EmailConfiguration: EmailConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for email invitation and verification messages from your user pool.',
        }),
    ).exactOptional(),
    SmsConfiguration: SmsConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SMS configuration with the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    UserPoolTags: UserPoolTagsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.',
        }),
    ).exactOptional(),
    AdminCreateUserConfig: AdminCreateUserConfigTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration for <code>AdminCreateUser</code> requests.' }),
    ).exactOptional(),
    UserPoolAddOns: UserPoolAddOnsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to <code>AUDIT</code>. To configure automatic security responses to risky traffic to your user pool, set to <code>ENFORCED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>',
        }),
    ).exactOptional(),
    AccountRecoverySetting: AccountRecoverySettingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The available verified method a user can use to recover their password when they call <code>ForgotPassword</code>. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId'],
    title: 'UpdateUserPoolRequest',
    description: 'Represents the request to update the user pool.',
  })
  .openapi('UpdateUserPoolRequest')

const UpdateUserPoolClientResponseSchema = z
  .object({
    UserPoolClient: UserPoolClientTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool client value from the response from the server when you request to update the user pool client.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server to the request to update the user pool client.',
    required: [],
  })
  .openapi('UpdateUserPoolClientResponse')

const UpdateUserPoolClientRequestSchema = z
  .object({
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user pool ID for the user pool where you want to update the user pool client.',
        }),
    ),
    ClientId: ClientIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the client associated with the user pool.' }),
    ),
    ClientName: ClientNameTypeSchema.and(
      z.any().openapi({ description: 'The client name from the update user pool client request.' }),
    ).exactOptional(),
    RefreshTokenValidity: RefreshTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session and retrieve new access and ID tokens for 10 days.</p> <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days. You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days.</p>",
        }),
    ).exactOptional(),
    AccessTokenValidity: AccessTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for <code>AccessTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with their access token for 10 hours.</p> <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour.</p>",
        }),
    ).exactOptional(),
    IdTokenValidity: IdTokenValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for <code>IdTokenValidity</code> as <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>, set a <code>TokenValidityUnits</code> value in your API request.</p> <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their session with their ID token for 10 hours.</p> <p>The default time unit for <code>IdTokenValidity</code> in an API request is hours. <i>Valid range</i> is displayed below in seconds.</p> <p>If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour.</p>",
        }),
    ).exactOptional(),
    TokenValidityUnits: TokenValidityUnitsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time units you use when you set the duration of ID, access, and refresh tokens. The default unit for RefreshToken is days, and the default for ID and access tokens is hours.',
        }),
    ).exactOptional(),
    ReadAttributes: ClientPermissionListTypeSchema.and(
      z.any().openapi({ description: 'The read-only attributes of the user pool.' }),
    ).exactOptional(),
    WriteAttributes: ClientPermissionListTypeSchema.and(
      z.any().openapi({ description: 'The writeable attributes of the user pool.' }),
    ).exactOptional(),
    ExplicitAuthFlows: ExplicitAuthFlowsListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.</p> <note> <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your user client supports <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.</p> </li> <li> <p> <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based authentication.</p> </li> <li> <p> <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.</p> </li> <li> <p> <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP-based authentication.</p> </li> <li> <p> <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh tokens.</p> </li> </ul> <p>In some environments, you will see the values <code>ADMIN_NO_SRP_AUTH</code>, <code>CUSTOM_AUTH_FLOW_ONLY</code>, or <code>USER_PASSWORD_AUTH</code>. You can't assign these legacy <code>ExplicitAuthFlows</code> values to user pool clients at the same time as values that begin with <code>ALLOW_</code>, like <code>ALLOW_USER_SRP_AUTH</code>.</p>",
        }),
    ).exactOptional(),
    SupportedIdentityProviders: SupportedIdentityProvidersListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of provider names for the IdPs that this client supports. The following are supported: <code>COGNITO</code>, <code>Facebook</code>, <code>Google</code>, <code>SignInWithApple</code>, <code>LoginWithAmazon</code>, and the names of your own SAML and OIDC providers.',
        }),
    ).exactOptional(),
    CallbackURLs: CallbackURLsListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of allowed redirect (callback) URLs for the IdPs.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.</p> <p>App callback URLs such as <code>myapp://example</code> are also supported.</p>',
        }),
    ).exactOptional(),
    LogoutURLs: LogoutURLsListTypeSchema.and(
      z.any().openapi({ description: 'A list of allowed logout URLs for the IdPs.' }),
    ).exactOptional(),
    DefaultRedirectURI: RedirectUrlTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for <code>http://localhost</code> for testing purposes only.</p> <p>App callback URLs such as <code>myapp://example</code> are also supported.</p>',
        }),
    ).exactOptional(),
    AllowedOAuthFlows: OAuthFlowsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The allowed OAuth flows.</p> <dl> <dt>code</dt> <dd> <p>Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the <code>/oauth2/token</code> endpoint.</p> </dd> <dt>implicit</dt> <dd> <p>Issue the access token (and, optionally, ID token, based on scopes) directly to your user.</p> </dd> <dt>client_credentials</dt> <dd> <p>Issue the access token from the <code>/oauth2/token</code> endpoint directly to a non-person user using a combination of the client ID and client secret.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    AllowedOAuthScopes: ScopeListTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The allowed OAuth scopes. Possible values provided by OAuth are <code>phone</code>, <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values provided by Amazon Web Services are <code>aws.cognito.signin.user.admin</code>. Custom scopes created in Resource Servers are also supported.',
        }),
    ).exactOptional(),
    AllowedOAuthFlowsUserPoolClient: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Set to <code>true</code> to use OAuth 2.0 features in your user pool app client.</p> <p> <code>AllowedOAuthFlowsUserPoolClient</code> must be <code>true</code> before you can configure the following features in your app client.</p> <ul> <li> <p> <code>CallBackURLs</code>: Callback URLs.</p> </li> <li> <p> <code>LogoutURLs</code>: Sign-out redirect URLs.</p> </li> <li> <p> <code>AllowedOAuthScopes</code>: OAuth 2.0 scopes.</p> </li> <li> <p> <code>AllowedOAuthFlows</code>: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.</p> </li> </ul> <p>To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or <code>UpdateUserPoolClient</code> API request. If you don't set a value for <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults to <code>false</code>.</p>",
        }),
    ).exactOptional(),
    AnalyticsConfiguration: AnalyticsConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Pinpoint analytics configuration necessary to collect metrics for this user pool.</p> <note> <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.</p> </note>",
        }),
    ).exactOptional(),
    PreventUserExistenceErrors: PreventUserExistenceErrorTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to <code>LEGACY</code>, those APIs return a <code>UserNotFoundException</code> exception if the user doesn't exist in the user pool.</p> <p>Valid values include:</p> <ul> <li> <p> <code>ENABLED</code> - This prevents user existence-related errors.</p> </li> <li> <p> <code>LEGACY</code> - This represents the early behavior of Amazon Cognito where user existence related errors aren't prevented.</p> </li> </ul>",
        }),
    ).exactOptional(),
    EnableTokenRevocation: WrappedBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Activates or deactivates token revocation. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.',
        }),
    ).exactOptional(),
    EnablePropagateAdditionalUserContextData: WrappedBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Activates the propagation of additional user context data. For more information about propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html"> Adding advanced security to a user pool</a>. If you don’t include this parameter, you can\'t send device fingerprint information, including source IP address, to Amazon Cognito advanced security. You can only activate <code>EnablePropagateAdditionalUserContextData</code> in an app client that has a client secret.',
        }),
    ).exactOptional(),
    AuthSessionValidity: AuthSessionValidityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolId', 'ClientId'],
    title: 'UpdateUserPoolClientRequest',
    description: 'Represents the request to update the user pool client.',
  })
  .openapi('UpdateUserPoolClientRequest')

const UpdateUserPoolDomainResponseSchema = z
  .object({
    CloudFrontDomain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon CloudFront endpoint that Amazon Cognito set up when you added the custom domain to your user pool.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The UpdateUserPoolDomain response output.', required: [] })
  .openapi('UpdateUserPoolDomainResponse')

const UpdateUserPoolDomainRequestSchema = z
  .object({
    Domain: DomainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The domain name for the custom domain that hosts the sign-up and sign-in pages for your application. One example might be <code>auth.example.com</code>. </p> <p>This string can include only lowercase letters, numbers, and hyphens. Don't use a hyphen for the first or last character. Use periods to separate subdomain names.</p>",
        }),
    ),
    UserPoolId: UserPoolIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the user pool that is associated with the custom domain whose certificate you're updating.",
        }),
    ),
    CustomDomainConfig: CustomDomainConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a custom domain that hosts the sign-up and sign-in pages for your application. Use this object to specify an SSL certificate that is managed by ACM.',
        }),
    ),
  })
  .openapi({
    required: ['Domain', 'UserPoolId', 'CustomDomainConfig'],
    title: 'UpdateUserPoolDomainRequest',
    description: 'The UpdateUserPoolDomain request input.',
  })
  .openapi('UpdateUserPoolDomainRequest')

const VerifySoftwareTokenResponseTypeSchema = z
  .enum(['SUCCESS', 'ERROR'])
  .openapi('VerifySoftwareTokenResponseType')

const VerifySoftwareTokenResponseSchema = z
  .object({
    Status: VerifySoftwareTokenResponseTypeSchema.and(
      z.any().openapi({ description: 'The status of the verify software token.' }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VerifySoftwareTokenResponse')

const SoftwareTokenMFAUserCodeTypeSchema = z
  .string()
  .regex(/[0-9]+/)
  .length(6)
  .openapi('SoftwareTokenMFAUserCodeType')

const VerifySoftwareTokenRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose software token you want to verify.',
        }),
    ).exactOptional(),
    Session: SessionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session that should be passed both ways in challenge-response calls to the service.',
        }),
    ).exactOptional(),
    UserCode: SoftwareTokenMFAUserCodeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The one- time password computed using the secret code returned by <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html">AssociateSoftwareToken</a>.',
        }),
    ),
    FriendlyDeviceName: StringTypeSchema.and(
      z.any().openapi({ description: 'The friendly device name.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserCode'], title: 'VerifySoftwareTokenRequest' })
  .openapi('VerifySoftwareTokenRequest')

const EnableSoftwareTokenMFAExceptionSchema = z.any().openapi('EnableSoftwareTokenMFAException')

const VerifyUserAttributeResponseSchema = z
  .object({})
  .openapi({
    description:
      'A container representing the response from the server from the request to verify user attributes.',
  })
  .openapi('VerifyUserAttributeResponse')

const VerifyUserAttributeRequestSchema = z
  .object({
    AccessToken: TokenModelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A valid access token that Amazon Cognito issued to the user whose user attributes you want to verify.',
        }),
    ),
    AttributeName: AttributeNameTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The attribute name in the request to verify user attributes.' }),
    ),
    Code: ConfirmationCodeTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The verification code in the request to verify user attributes.',
        }),
    ),
  })
  .openapi({
    required: ['AccessToken', 'AttributeName', 'Code'],
    title: 'VerifyUserAttributeRequest',
    description: 'Represents the request to verify user attributes.',
  })
  .openapi('VerifyUserAttributeRequest')

const AttributeMappingKeyTypeSchema = z.string().min(1).max(32).openapi('AttributeMappingKeyType')

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

export const postXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes',
  description:
    '<p>Adds additional user attributes to the user pool schema.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AddCustomAttributes',
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
        .literal('AWSCognitoIdentityProviderService.AddCustomAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.AddCustomAttributes'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddCustomAttributesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddCustomAttributesResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UserImportInProgressException',
      content: { 'application/json': { schema: UserImportInProgressExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup',
  description:
    '<p>Adds the specified user to the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminAddUserToGroup',
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
        .literal('AWSCognitoIdentityProviderService.AdminAddUserToGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.AdminAddUserToGroup'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminAddUserToGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp',
  description:
    '<p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminConfirmSignUp',
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
        .literal('AWSCognitoIdentityProviderService.AdminConfirmSignUp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.AdminConfirmSignUp'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminConfirmSignUpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdminConfirmSignUpResponseSchema } },
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
      description: 'UnexpectedLambdaException',
      content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
    },
    483: {
      description: 'UserLambdaValidationException',
      content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyFailedAttemptsException',
      content: { 'application/json': { schema: TooManyFailedAttemptsExceptionSchema } },
    },
    486: {
      description: 'InvalidLambdaResponseException',
      content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    489: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    490: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser',
  description:
    '<p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> isn\'t set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code> for the <code>MessageAction</code> parameter, and Amazon Cognito won\'t send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminCreateUser',
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
        .literal('AWSCognitoIdentityProviderService.AdminCreateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.AdminCreateUser'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminCreateUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdminCreateUserResponseSchema } },
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
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    483: {
      description: 'UsernameExistsException',
      content: { 'application/json': { schema: UsernameExistsExceptionSchema } },
    },
    484: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
    485: {
      description: 'CodeDeliveryFailureException',
      content: { 'application/json': { schema: CodeDeliveryFailureExceptionSchema } },
    },
    486: {
      description: 'UnexpectedLambdaException',
      content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
    },
    487: {
      description: 'UserLambdaValidationException',
      content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
    },
    488: {
      description: 'InvalidLambdaResponseException',
      content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
    },
    489: {
      description: 'PreconditionNotMetException',
      content: { 'application/json': { schema: PreconditionNotMetExceptionSchema } },
    },
    490: {
      description: 'InvalidSmsRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
    },
    491: {
      description: 'InvalidSmsRoleTrustRelationshipException',
      content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
    },
    492: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    493: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    494: {
      description: 'UnsupportedUserStateException',
      content: { 'application/json': { schema: UnsupportedUserStateExceptionSchema } },
    },
    495: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser',
  description:
    '<p>Deletes a user as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminDeleteUser',
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
        .literal('AWSCognitoIdentityProviderService.AdminDeleteUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.AdminDeleteUser'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminDeleteUserRequestSchema } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes',
    description:
      '<p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminDeleteUserAttributes',
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
          .literal('AWSCognitoIdentityProviderService.AdminDeleteUserAttributes')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminDeleteUserAttributes'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminDeleteUserAttributesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminDeleteUserAttributesResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser',
    description:
      '<p>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can\'t use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked <code>DestinationUser</code>, the user must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To deactivate a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminDisableProviderForUser',
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
          .literal('AWSCognitoIdentityProviderService.AdminDisableProviderForUser')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminDisableProviderForUser'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminDisableProviderForUserRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminDisableProviderForUserResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'AliasExistsException',
        content: { 'application/json': { schema: AliasExistsExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser',
  description:
    '<p>Deactivates a user and revokes all access tokens for the user. A deactivated user can\'t sign in, but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminDisableUser',
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
        .literal('AWSCognitoIdentityProviderService.AdminDisableUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.AdminDisableUser'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminDisableUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdminDisableUserResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser',
  description:
    '<p>Enables the specified user as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminEnableUser',
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
        .literal('AWSCognitoIdentityProviderService.AdminEnableUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.AdminEnableUser'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminEnableUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdminEnableUserResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice',
  description:
    '<p>Forgets the device, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminForgetDevice',
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
        .literal('AWSCognitoIdentityProviderService.AdminForgetDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.AdminForgetDevice'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminForgetDeviceRequestSchema } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice',
  description:
    '<p>Gets the device, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminGetDevice',
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
        .literal('AWSCognitoIdentityProviderService.AdminGetDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.AdminGetDevice'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminGetDeviceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdminGetDeviceResponseSchema } },
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
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    485: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser',
  description:
    '<p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminGetUser',
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
        .literal('AWSCognitoIdentityProviderService.AdminGetUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.AdminGetUser'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminGetUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdminGetUserResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth',
  description:
    '<p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminInitiateAuth',
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
        .literal('AWSCognitoIdentityProviderService.AdminInitiateAuth')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.AdminInitiateAuth'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminInitiateAuthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdminInitiateAuthResponseSchema } },
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
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    485: {
      description: 'UnexpectedLambdaException',
      content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
    },
    486: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    487: {
      description: 'UserLambdaValidationException',
      content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
    },
    488: {
      description: 'InvalidLambdaResponseException',
      content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
    },
    489: {
      description: 'MFAMethodNotFoundException',
      content: { 'application/json': { schema: MFAMethodNotFoundExceptionSchema } },
    },
    490: {
      description: 'InvalidSmsRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
    },
    491: {
      description: 'InvalidSmsRoleTrustRelationshipException',
      content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
    },
    492: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    493: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    494: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser',
    description:
      '<p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external IdP (<code>SourceUser</code>) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.</p> <note> <p>The maximum number of federated identities linked to a user is five.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminLinkProviderForUser',
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
          .literal('AWSCognitoIdentityProviderService.AdminLinkProviderForUser')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminLinkProviderForUser'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminLinkProviderForUserRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminLinkProviderForUserResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'AliasExistsException',
        content: { 'application/json': { schema: AliasExistsExceptionSchema } },
      },
      486: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      487: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices',
  description:
    '<p>Lists devices, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'AdminListDevices',
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
        .literal('AWSCognitoIdentityProviderService.AdminListDevices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.AdminListDevices'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminListDevicesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdminListDevicesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    485: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser',
    description:
      '<p>Lists the groups that the user belongs to.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminListGroupsForUser',
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
          .literal('AWSCognitoIdentityProviderService.AdminListGroupsForUser')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminListGroupsForUser'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: { 'application/json': { schema: AdminListGroupsForUserRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminListGroupsForUserResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents',
    description:
      '<p>A history of user activity and any risks detected as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminListUserAuthEvents',
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
          .literal('AWSCognitoIdentityProviderService.AdminListUserAuthEvents')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminListUserAuthEvents'],
              },
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
        content: { 'application/json': { schema: AdminListUserAuthEventsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminListUserAuthEventsResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'UserPoolAddOnNotEnabledException',
        content: { 'application/json': { schema: UserPoolAddOnNotEnabledExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup',
    description:
      '<p>Removes the specified user from the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminRemoveUserFromGroup',
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
          .literal('AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminRemoveUserFromGroupRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword',
    description:
      '<p>Resets the specified user\'s password in a user pool as an administrator. Works on any user.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Deactivates a user\'s password, requiring them to change it. If a user tries to sign in after the API is called, Amazon Cognito responds with a <code>PasswordResetRequiredException</code> error. Your app must then perform the actions that reset your user\'s password: the forgot-password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminResetUserPassword',
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
          .literal('AWSCognitoIdentityProviderService.AdminResetUserPassword')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminResetUserPassword'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminResetUserPasswordRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminResetUserPasswordResponseSchema } },
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
        description: 'UnexpectedLambdaException',
        content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
      },
      483: {
        description: 'UserLambdaValidationException',
        content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
      },
      484: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      485: {
        description: 'InvalidLambdaResponseException',
        content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
      },
      486: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      488: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      489: {
        description: 'InvalidSmsRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
      },
      490: {
        description: 'InvalidEmailRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
      },
      491: {
        description: 'InvalidSmsRoleTrustRelationshipException',
        content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
      },
      492: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge',
    description:
      '<p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminRespondToAuthChallenge',
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
          .literal('AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminRespondToAuthChallengeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminRespondToAuthChallengeResponseSchema } },
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
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'CodeMismatchException',
        content: { 'application/json': { schema: CodeMismatchExceptionSchema } },
      },
      484: {
        description: 'ExpiredCodeException',
        content: { 'application/json': { schema: ExpiredCodeExceptionSchema } },
      },
      485: {
        description: 'UnexpectedLambdaException',
        content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
      },
      486: {
        description: 'InvalidPasswordException',
        content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
      },
      487: {
        description: 'UserLambdaValidationException',
        content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
      },
      488: {
        description: 'InvalidLambdaResponseException',
        content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
      },
      489: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      490: {
        description: 'InvalidUserPoolConfigurationException',
        content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
      },
      491: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      492: {
        description: 'MFAMethodNotFoundException',
        content: { 'application/json': { schema: MFAMethodNotFoundExceptionSchema } },
      },
      493: {
        description: 'InvalidSmsRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
      },
      494: {
        description: 'InvalidSmsRoleTrustRelationshipException',
        content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
      },
      495: {
        description: 'AliasExistsException',
        content: { 'application/json': { schema: AliasExistsExceptionSchema } },
      },
      496: {
        description: 'PasswordResetRequiredException',
        content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
      },
      497: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      498: {
        description: 'UserNotConfirmedException',
        content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
      },
      499: {
        description: 'SoftwareTokenMFANotFoundException',
        content: { 'application/json': { schema: SoftwareTokenMFANotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference',
    description:
      '<p>The user\'s multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminSetUserMFAPreference',
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
          .literal('AWSCognitoIdentityProviderService.AdminSetUserMFAPreference')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminSetUserMFAPreference'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminSetUserMFAPreferenceRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminSetUserMFAPreferenceResponseSchema } },
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
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'PasswordResetRequiredException',
        content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'UserNotConfirmedException',
        content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword',
    description:
      '<p>Sets the specified user\'s password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status enters the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn\'t sign in before it expires, the user won\'t be able to sign in, and an administrator must reset their password. </p> <p>Once the user has set a new password, or the password is permanent, the user status is set to <code>Confirmed</code>.</p> <p> <code>AdminSetUserPassword</code> can set a password for the user profile that Amazon Cognito creates for third-party federated users. When you set a password, the federated user\'s status changes from <code>EXTERNAL_PROVIDER</code> to <code>CONFIRMED</code>. A user in this state can sign in as a federated user, and initiate authentication flows in the API like a linked native user. They can also modify their password and attributes in token-authenticated API requests like <code>ChangePassword</code> and <code>UpdateUserAttributes</code>. As a best security practice and to keep users in sync with your external IdP, don\'t set passwords on federated user profiles. To set up a federated user for native sign-in with a linked native user, refer to <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">Linking federated users to an existing user profile</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminSetUserPassword',
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
          .literal('AWSCognitoIdentityProviderService.AdminSetUserPassword')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminSetUserPassword'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminSetUserPasswordRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminSetUserPasswordResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      482: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      486: {
        description: 'InvalidPasswordException',
        content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings',
    description:
      '<p> <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can\'t use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminSetUserSettings',
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
          .literal('AWSCognitoIdentityProviderService.AdminSetUserSettings')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminSetUserSettings'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminSetUserSettingsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminSetUserSettingsResponseSchema } },
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
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback',
    description:
      '<p>Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminUpdateAuthEventFeedback',
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
          .literal('AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminUpdateAuthEventFeedbackRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminUpdateAuthEventFeedbackResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'UserPoolAddOnNotEnabledException',
        content: { 'application/json': { schema: UserPoolAddOnNotEnabledExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus',
    description:
      '<p>Updates the device status as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminUpdateDeviceStatus',
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
          .literal('AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminUpdateDeviceStatusRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminUpdateDeviceStatusResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidUserPoolConfigurationException',
        content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      485: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes',
    description:
      '<note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Updates the specified user\'s attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminUpdateUserAttributes',
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
          .literal('AWSCognitoIdentityProviderService.AdminUpdateUserAttributes')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminUpdateUserAttributes'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminUpdateUserAttributesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminUpdateUserAttributesResponseSchema } },
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
        description: 'UnexpectedLambdaException',
        content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
      },
      483: {
        description: 'UserLambdaValidationException',
        content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
      },
      484: {
        description: 'InvalidLambdaResponseException',
        content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
      },
      485: {
        description: 'AliasExistsException',
        content: { 'application/json': { schema: AliasExistsExceptionSchema } },
      },
      486: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      487: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      488: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      489: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      490: {
        description: 'InvalidSmsRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
      },
      491: {
        description: 'InvalidEmailRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
      },
      492: {
        description: 'InvalidSmsRoleTrustRelationshipException',
        content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut',
    description:
      '<p>Signs out a user from all devices. <code>AdminUserGlobalSignOut</code> invalidates all identity, access and refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.</p> <p>Your app isn\'t aware that a user\'s access token is revoked unless it attempts to authorize a user pools API request with an access token that contains the scope <code>aws.cognito.signin.user.admin</code>. Your app might otherwise accept access tokens until they expire.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'AdminUserGlobalSignOut',
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
          .literal('AWSCognitoIdentityProviderService.AdminUserGlobalSignOut')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AdminUserGlobalSignOut'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AdminUserGlobalSignOutRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AdminUserGlobalSignOutResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken',
    description:
      "<p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an <code>AssociateSoftwareToken</code> request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.</p> <note> <p>Amazon Cognito disassociates an existing software token when you verify the new token in a <a href=\"https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html\"> VerifySoftwareToken</a> API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge each time your user signs. Complete setup with <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p> <p>After you set up software token MFA for your user, Amazon Cognito generates a <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to this challenge with your user's TOTP.</p> </note> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
    operationId: 'AssociateSoftwareToken',
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
          .literal('AWSCognitoIdentityProviderService.AssociateSoftwareToken')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.AssociateSoftwareToken'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateSoftwareTokenRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateSoftwareTokenResponseSchema } },
      },
      480: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      485: {
        description: 'SoftwareTokenMFANotFoundException',
        content: { 'application/json': { schema: SoftwareTokenMFANotFoundExceptionSchema } },
      },
      486: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword',
  description:
    "<p>Changes the password for a specified user in a user pool.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'ChangePassword',
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
        .literal('AWSCognitoIdentityProviderService.ChangePassword')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ChangePassword'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ChangePasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChangePasswordResponseSchema } },
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
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    487: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    488: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    489: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    490: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice',
  description:
    "<p>Confirms tracking of the device. This API call is the call that begins device tracking.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'ConfirmDevice',
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
        .literal('AWSCognitoIdentityProviderService.ConfirmDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ConfirmDevice'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConfirmDeviceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfirmDeviceResponseSchema } },
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
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
    484: {
      description: 'InvalidLambdaResponseException',
      content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
    },
    485: {
      description: 'UsernameExistsException',
      content: { 'application/json': { schema: UsernameExistsExceptionSchema } },
    },
    486: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    489: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    490: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    491: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    492: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword',
    description:
      "<p>Allows a user to enter a confirmation code to reset a forgotten password.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
    operationId: 'ConfirmForgotPassword',
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
          .literal('AWSCognitoIdentityProviderService.ConfirmForgotPassword')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.ConfirmForgotPassword'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ConfirmForgotPasswordRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ConfirmForgotPasswordResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'UnexpectedLambdaException',
        content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
      },
      482: {
        description: 'UserLambdaValidationException',
        content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      484: {
        description: 'InvalidPasswordException',
        content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
      },
      485: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      486: {
        description: 'CodeMismatchException',
        content: { 'application/json': { schema: CodeMismatchExceptionSchema } },
      },
      487: {
        description: 'ExpiredCodeException',
        content: { 'application/json': { schema: ExpiredCodeExceptionSchema } },
      },
      488: {
        description: 'TooManyFailedAttemptsException',
        content: { 'application/json': { schema: TooManyFailedAttemptsExceptionSchema } },
      },
      489: {
        description: 'InvalidLambdaResponseException',
        content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
      },
      490: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      491: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      492: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      493: {
        description: 'UserNotConfirmedException',
        content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
      },
      494: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      495: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp',
  description:
    "<p>Confirms registration of a new user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'ConfirmSignUp',
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
        .literal('AWSCognitoIdentityProviderService.ConfirmSignUp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ConfirmSignUp'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConfirmSignUpRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfirmSignUpResponseSchema } },
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
      description: 'UnexpectedLambdaException',
      content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
    },
    483: {
      description: 'UserLambdaValidationException',
      content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyFailedAttemptsException',
      content: { 'application/json': { schema: TooManyFailedAttemptsExceptionSchema } },
    },
    486: {
      description: 'CodeMismatchException',
      content: { 'application/json': { schema: CodeMismatchExceptionSchema } },
    },
    487: {
      description: 'ExpiredCodeException',
      content: { 'application/json': { schema: ExpiredCodeExceptionSchema } },
    },
    488: {
      description: 'InvalidLambdaResponseException',
      content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
    },
    489: {
      description: 'AliasExistsException',
      content: { 'application/json': { schema: AliasExistsExceptionSchema } },
    },
    490: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    491: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    492: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    493: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    494: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup',
  description:
    '<p>Creates a new group in the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'CreateGroup',
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
        .literal('AWSCognitoIdentityProviderService.CreateGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.CreateGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateGroupRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGroupResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'GroupExistsException',
      content: { 'application/json': { schema: GroupExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    486: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider',
    description:
      '<p>Creates an IdP for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'CreateIdentityProvider',
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
          .literal('AWSCognitoIdentityProviderService.CreateIdentityProvider')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.CreateIdentityProvider'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateIdentityProviderRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateIdentityProviderResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'DuplicateProviderException',
        content: { 'application/json': { schema: DuplicateProviderExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer',
    description:
      '<p>Creates a new OAuth2.0 resource server and defines custom scopes within it.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'CreateResourceServer',
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
          .literal('AWSCognitoIdentityProviderService.CreateResourceServer')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.CreateResourceServer'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateResourceServerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateResourceServerResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      485: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob',
  description:
    '<p>Creates a user import job.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'CreateUserImportJob',
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
        .literal('AWSCognitoIdentityProviderService.CreateUserImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.CreateUserImportJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUserImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserImportJobResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'PreconditionNotMetException',
      content: { 'application/json': { schema: PreconditionNotMetExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool',
  description:
    '<note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <important> <p>If you don\'t provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'CreateUserPool',
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
        .literal('AWSCognitoIdentityProviderService.CreateUserPool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.CreateUserPool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUserPoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserPoolResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidSmsRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
    },
    484: {
      description: 'InvalidSmsRoleTrustRelationshipException',
      content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
    },
    485: {
      description: 'InvalidEmailRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
    },
    486: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    487: {
      description: 'UserPoolTaggingException',
      content: { 'application/json': { schema: UserPoolTaggingExceptionSchema } },
    },
    488: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient',
    description:
      '<p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p> <important> <p>If you don\'t provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'CreateUserPoolClient',
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
          .literal('AWSCognitoIdentityProviderService.CreateUserPoolClient')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.CreateUserPoolClient'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateUserPoolClientRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateUserPoolClientResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      484: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      485: {
        description: 'ScopeDoesNotExistException',
        content: { 'application/json': { schema: ScopeDoesNotExistExceptionSchema } },
      },
      486: {
        description: 'InvalidOAuthFlowException',
        content: { 'application/json': { schema: InvalidOAuthFlowExceptionSchema } },
      },
      487: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain',
    description:
      '<p>Creates a new domain for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'CreateUserPoolDomain',
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
          .literal('AWSCognitoIdentityProviderService.CreateUserPoolDomain')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.CreateUserPoolDomain'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateUserPoolDomainRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateUserPoolDomainResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup',
  description: '<p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>',
  operationId: 'DeleteGroup',
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
        .literal('AWSCognitoIdentityProviderService.DeleteGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.DeleteGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteGroupRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider',
    description: 'Deletes an IdP for a user pool.',
    operationId: 'DeleteIdentityProvider',
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
          .literal('AWSCognitoIdentityProviderService.DeleteIdentityProvider')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DeleteIdentityProvider'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteIdentityProviderRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'UnsupportedIdentityProviderException',
        content: { 'application/json': { schema: UnsupportedIdentityProviderExceptionSchema } },
      },
      482: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer',
    description: 'Deletes a resource server.',
    operationId: 'DeleteResourceServer',
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
          .literal('AWSCognitoIdentityProviderService.DeleteResourceServer')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DeleteResourceServer'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteResourceServerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser',
  description:
    "<p>Allows a user to delete their own user profile.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'DeleteUser',
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
        .literal('AWSCognitoIdentityProviderService.DeleteUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.DeleteUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteUserRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    485: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    486: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    487: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    488: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes',
    description:
      "<p>Deletes the attributes for a user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
    operationId: 'DeleteUserAttributes',
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
          .literal('AWSCognitoIdentityProviderService.DeleteUserAttributes')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DeleteUserAttributes'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteUserAttributesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteUserAttributesResponseSchema } },
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
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'PasswordResetRequiredException',
        content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
      },
      485: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      486: {
        description: 'UserNotConfirmedException',
        content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
      },
      487: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      488: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool',
  description: 'Deletes the specified Amazon Cognito user pool.',
  operationId: 'DeleteUserPool',
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
        .literal('AWSCognitoIdentityProviderService.DeleteUserPool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.DeleteUserPool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteUserPoolRequestSchema } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UserImportInProgressException',
      content: { 'application/json': { schema: UserImportInProgressExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient',
    description: 'Allows the developer to delete the user pool client.',
    operationId: 'DeleteUserPoolClient',
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
          .literal('AWSCognitoIdentityProviderService.DeleteUserPoolClient')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DeleteUserPoolClient'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteUserPoolClientRequestSchema } },
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
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      485: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomainRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain',
    description: 'Deletes a domain for a user pool.',
    operationId: 'DeleteUserPoolDomain',
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
          .literal('AWSCognitoIdentityProviderService.DeleteUserPoolDomain')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DeleteUserPoolDomain'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteUserPoolDomainRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteUserPoolDomainResponseSchema } },
      },
      480: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider',
    description: 'Gets information about a specific IdP.',
    operationId: 'DescribeIdentityProvider',
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
          .literal('AWSCognitoIdentityProviderService.DescribeIdentityProvider')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DescribeIdentityProvider'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeIdentityProviderRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeIdentityProviderResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer',
    description: 'Describes a resource server.',
    operationId: 'DescribeResourceServer',
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
          .literal('AWSCognitoIdentityProviderService.DescribeResourceServer')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DescribeResourceServer'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeResourceServerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeResourceServerResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration',
    description: 'Describes the risk configuration.',
    operationId: 'DescribeRiskConfiguration',
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
          .literal('AWSCognitoIdentityProviderService.DescribeRiskConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DescribeRiskConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeRiskConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeRiskConfigurationResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserPoolAddOnNotEnabledException',
        content: { 'application/json': { schema: UserPoolAddOnNotEnabledExceptionSchema } },
      },
      485: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob',
    description: 'Describes the user import job.',
    operationId: 'DescribeUserImportJob',
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
          .literal('AWSCognitoIdentityProviderService.DescribeUserImportJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DescribeUserImportJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeUserImportJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeUserImportJobResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool',
  description:
    '<p>Returns the configuration information and metadata of the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'DescribeUserPool',
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
        .literal('AWSCognitoIdentityProviderService.DescribeUserPool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.DescribeUserPool'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUserPoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUserPoolResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UserPoolTaggingException',
      content: { 'application/json': { schema: UserPoolTaggingExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient',
    description:
      '<p>Client method for returning the configuration information and metadata of the specified user pool app client.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'DescribeUserPoolClient',
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
          .literal('AWSCognitoIdentityProviderService.DescribeUserPoolClient')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DescribeUserPoolClient'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeUserPoolClientRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeUserPoolClientResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain',
    description: 'Gets information about a domain.',
    operationId: 'DescribeUserPoolDomain',
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
          .literal('AWSCognitoIdentityProviderService.DescribeUserPoolDomain')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.DescribeUserPoolDomain'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeUserPoolDomainRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeUserPoolDomainResponseSchema } },
      },
      480: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice',
  description:
    "<p>Forgets the specified device.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'ForgetDevice',
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
        .literal('AWSCognitoIdentityProviderService.ForgetDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ForgetDevice'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ForgetDeviceRequestSchema } },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    485: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    486: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    487: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    488: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    489: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword',
  description:
    '<p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user\'s password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p> <p>If neither a verified phone number nor a verified email exists, this API returns <code>InvalidParameterException</code>. If your app client has a client secret and you don\'t provide a <code>SECRET_HASH</code> parameter, this API returns <code>NotAuthorizedException</code>.</p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>',
  operationId: 'ForgotPassword',
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
        .literal('AWSCognitoIdentityProviderService.ForgotPassword')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ForgotPassword'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ForgotPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ForgotPasswordResponseSchema } },
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
      description: 'UnexpectedLambdaException',
      content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
    },
    483: {
      description: 'UserLambdaValidationException',
      content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'InvalidLambdaResponseException',
      content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'InvalidSmsRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
    },
    489: {
      description: 'InvalidSmsRoleTrustRelationshipException',
      content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
    },
    490: {
      description: 'InvalidEmailRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
    },
    491: {
      description: 'CodeDeliveryFailureException',
      content: { 'application/json': { schema: CodeDeliveryFailureExceptionSchema } },
    },
    492: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    493: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    494: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader',
  description:
    'Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job.',
  operationId: 'GetCSVHeader',
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
        .literal('AWSCognitoIdentityProviderService.GetCSVHeader')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.GetCSVHeader'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCSVHeaderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCSVHeaderResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice',
  description:
    "<p>Gets the device.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'GetDevice',
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
        .literal('AWSCognitoIdentityProviderService.GetDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.GetDevice'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDeviceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceResponseSchema } },
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
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    486: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    487: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    488: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    489: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup',
  description: '<p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>',
  operationId: 'GetGroup',
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
        .literal('AWSCognitoIdentityProviderService.GetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.GetGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetGroupRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGroupResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier',
    description: 'Gets the specified IdP.',
    operationId: 'GetIdentityProviderByIdentifier',
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
          .literal('AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetIdentityProviderByIdentifierRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetIdentityProviderByIdentifierResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration',
    description: 'Gets the detailed activity logging configuration for a user pool.',
    operationId: 'GetLogDeliveryConfiguration',
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
          .literal('AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetLogDeliveryConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetLogDeliveryConfigurationResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate',
    description:
      "<p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p> <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original certificate.</p>",
    operationId: 'GetSigningCertificate',
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
          .literal('AWSCognitoIdentityProviderService.GetSigningCertificate')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.GetSigningCertificate'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetSigningCertificateRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetSigningCertificateResponseSchema } },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization',
  description:
    "Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app <code>clientId</code> is <code>ALL</code>), then that information is returned. If nothing is present, then an empty shape is returned.",
  operationId: 'GetUICustomization',
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
        .literal('AWSCognitoIdentityProviderService.GetUICustomization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.GetUICustomization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetUICustomizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUICustomizationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser',
  description:
    "<p>Gets the user attributes and metadata for a user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
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
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityProviderService.GetUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.GetUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUserResponseSchema } },
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
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    485: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    486: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    487: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    488: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode',
    description:
      '<p>Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request.</p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>',
    operationId: 'GetUserAttributeVerificationCode',
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
          .literal('AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetUserAttributeVerificationCodeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetUserAttributeVerificationCodeResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UnexpectedLambdaException',
        content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
      },
      485: {
        description: 'UserLambdaValidationException',
        content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
      },
      486: {
        description: 'InvalidLambdaResponseException',
        content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
      },
      487: {
        description: 'InvalidSmsRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
      },
      488: {
        description: 'InvalidSmsRoleTrustRelationshipException',
        content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
      },
      489: {
        description: 'InvalidEmailRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
      },
      490: {
        description: 'CodeDeliveryFailureException',
        content: { 'application/json': { schema: CodeDeliveryFailureExceptionSchema } },
      },
      491: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      492: {
        description: 'PasswordResetRequiredException',
        content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
      },
      493: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      494: {
        description: 'UserNotConfirmedException',
        content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
      },
      495: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      496: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig',
    description: 'Gets the user pool multi-factor authentication (MFA) configuration.',
    operationId: 'GetUserPoolMfaConfig',
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
          .literal('AWSCognitoIdentityProviderService.GetUserPoolMfaConfig')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.GetUserPoolMfaConfig'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetUserPoolMfaConfigRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetUserPoolMfaConfigResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut',
  description:
    "<p>Signs out a user from all devices. <code>GlobalSignOut</code> invalidates all identity, access and refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.</p> <p>Your app isn't aware that a user's access token is revoked unless it attempts to authorize a user pools API request with an access token that contains the scope <code>aws.cognito.signin.user.admin</code>. Your app might otherwise accept access tokens until they expire.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'GlobalSignOut',
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
        .literal('AWSCognitoIdentityProviderService.GlobalSignOut')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.GlobalSignOut'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GlobalSignOutRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GlobalSignOutResponseSchema } },
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
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    485: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    486: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    487: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth',
  description:
    '<p>Initiates sign-in for a user in the Amazon Cognito user directory. You can\'t sign in a user with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>',
  operationId: 'InitiateAuth',
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
        .literal('AWSCognitoIdentityProviderService.InitiateAuth')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.InitiateAuth'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InitiateAuthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InitiateAuthResponseSchema } },
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
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'UnexpectedLambdaException',
      content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
    },
    485: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    486: {
      description: 'UserLambdaValidationException',
      content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
    },
    487: {
      description: 'InvalidLambdaResponseException',
      content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
    },
    488: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    489: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    490: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    491: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    492: {
      description: 'InvalidSmsRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
    },
    493: {
      description: 'InvalidSmsRoleTrustRelationshipException',
      content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
    },
    494: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListDevicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices',
  description:
    "<p>Lists the sign-in devices that Amazon Cognito has registered to the current user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'ListDevices',
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
        .literal('AWSCognitoIdentityProviderService.ListDevices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ListDevices'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListDevicesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDevicesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    486: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    487: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    488: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    489: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups',
  description:
    '<p>Lists the groups associated with a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'ListGroups',
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
        .literal('AWSCognitoIdentityProviderService.ListGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ListGroups'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: { content: { 'application/json': { schema: ListGroupsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders',
    description:
      '<p>Lists information about all IdPs for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'ListIdentityProviders',
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
          .literal('AWSCognitoIdentityProviderService.ListIdentityProviders')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.ListIdentityProviders'],
              },
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
        content: { 'application/json': { schema: ListIdentityProvidersRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListIdentityProvidersResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers',
  description:
    '<p>Lists the resource servers for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'ListResourceServers',
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
        .literal('AWSCognitoIdentityProviderService.ListResourceServers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.ListResourceServers'],
            },
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
      content: { 'application/json': { schema: ListResourceServersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceServersResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource',
  description:
    '<p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>',
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
        .literal('AWSCognitoIdentityProviderService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.ListTagsForResource'],
            },
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
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs',
  description:
    '<p>Lists user import jobs for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'ListUserImportJobs',
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
        .literal('AWSCognitoIdentityProviderService.ListUserImportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.ListUserImportJobs'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListUserImportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUserImportJobsResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients',
  description:
    '<p>Lists the clients that have been created for the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'ListUserPoolClients',
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
        .literal('AWSCognitoIdentityProviderService.ListUserPoolClients')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.ListUserPoolClients'],
            },
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
      content: { 'application/json': { schema: ListUserPoolClientsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUserPoolClientsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools',
  description:
    '<p>Lists the user pools associated with an Amazon Web Services account.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'ListUserPools',
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
        .literal('AWSCognitoIdentityProviderService.ListUserPools')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ListUserPools'] },
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
      content: { 'application/json': { schema: ListUserPoolsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUserPoolsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers',
  description:
    '<p>Lists users and their basic details in a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
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
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityProviderService.ListUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.ListUsers'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PaginationToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PaginationToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListUsersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup',
  description:
    '<p>Lists the users in the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'ListUsersInGroup',
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
        .literal('AWSCognitoIdentityProviderService.ListUsersInGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.ListUsersInGroup'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: ListUsersInGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersInGroupResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode',
    description:
      '<p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>',
    operationId: 'ResendConfirmationCode',
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
          .literal('AWSCognitoIdentityProviderService.ResendConfirmationCode')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.ResendConfirmationCode'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ResendConfirmationCodeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ResendConfirmationCodeResponseSchema } },
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
        description: 'UnexpectedLambdaException',
        content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
      },
      483: {
        description: 'UserLambdaValidationException',
        content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
      },
      484: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      485: {
        description: 'InvalidLambdaResponseException',
        content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
      },
      486: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      488: {
        description: 'InvalidSmsRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
      },
      489: {
        description: 'InvalidSmsRoleTrustRelationshipException',
        content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
      },
      490: {
        description: 'InvalidEmailRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
      },
      491: {
        description: 'CodeDeliveryFailureException',
        content: { 'application/json': { schema: CodeDeliveryFailureExceptionSchema } },
      },
      492: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      493: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      494: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge',
    description:
      '<p>Responds to the authentication challenge.</p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>',
    operationId: 'RespondToAuthChallenge',
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
          .literal('AWSCognitoIdentityProviderService.RespondToAuthChallenge')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.RespondToAuthChallenge'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RespondToAuthChallengeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: RespondToAuthChallengeResponseSchema } },
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
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'CodeMismatchException',
        content: { 'application/json': { schema: CodeMismatchExceptionSchema } },
      },
      484: {
        description: 'ExpiredCodeException',
        content: { 'application/json': { schema: ExpiredCodeExceptionSchema } },
      },
      485: {
        description: 'UnexpectedLambdaException',
        content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
      },
      486: {
        description: 'UserLambdaValidationException',
        content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
      },
      487: {
        description: 'InvalidPasswordException',
        content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
      },
      488: {
        description: 'InvalidLambdaResponseException',
        content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
      },
      489: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      490: {
        description: 'InvalidUserPoolConfigurationException',
        content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
      },
      491: {
        description: 'MFAMethodNotFoundException',
        content: { 'application/json': { schema: MFAMethodNotFoundExceptionSchema } },
      },
      492: {
        description: 'PasswordResetRequiredException',
        content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
      },
      493: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      494: {
        description: 'UserNotConfirmedException',
        content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
      },
      495: {
        description: 'InvalidSmsRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
      },
      496: {
        description: 'InvalidSmsRoleTrustRelationshipException',
        content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
      },
      497: {
        description: 'AliasExistsException',
        content: { 'application/json': { schema: AliasExistsExceptionSchema } },
      },
      498: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      499: {
        description: 'SoftwareTokenMFANotFoundException',
        content: { 'application/json': { schema: SoftwareTokenMFANotFoundExceptionSchema } },
      },
      500: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken',
  description:
    "<p>Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'RevokeToken',
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
        .literal('AWSCognitoIdentityProviderService.RevokeToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.RevokeToken'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RevokeTokenRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RevokeTokenResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'UnsupportedTokenTypeException',
      content: { 'application/json': { schema: UnsupportedTokenTypeExceptionSchema } },
    },
    486: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration',
    description: 'Sets up or modifies the detailed activity logging configuration of a user pool.',
    operationId: 'SetLogDeliveryConfiguration',
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
          .literal('AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetLogDeliveryConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SetLogDeliveryConfigurationResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration',
    description:
      '<p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To activate Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>',
    operationId: 'SetRiskConfiguration',
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
          .literal('AWSCognitoIdentityProviderService.SetRiskConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.SetRiskConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetRiskConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SetRiskConfigurationResponseSchema } },
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
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserPoolAddOnNotEnabledException',
        content: { 'application/json': { schema: UserPoolAddOnNotEnabledExceptionSchema } },
      },
      485: {
        description: 'CodeDeliveryFailureException',
        content: { 'application/json': { schema: CodeDeliveryFailureExceptionSchema } },
      },
      486: {
        description: 'InvalidEmailRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
      },
      487: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization',
  description:
    "<p>Sets the user interface (UI) customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the <code>ALL</code> configuration.</p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>",
  operationId: 'SetUICustomization',
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
        .literal('AWSCognitoIdentityProviderService.SetUICustomization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.SetUICustomization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetUICustomizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetUICustomizationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference',
    description:
      "<p>Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
    operationId: 'SetUserMFAPreference',
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
          .literal('AWSCognitoIdentityProviderService.SetUserMFAPreference')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.SetUserMFAPreference'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetUserMFAPreferenceRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SetUserMFAPreferenceResponseSchema } },
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
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'PasswordResetRequiredException',
        content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'UserNotConfirmedException',
        content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      487: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig',
    description:
      '<p>Sets the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>',
    operationId: 'SetUserPoolMfaConfig',
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
          .literal('AWSCognitoIdentityProviderService.SetUserPoolMfaConfig')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.SetUserPoolMfaConfig'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetUserPoolMfaConfigRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SetUserPoolMfaConfigResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InvalidSmsRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
      },
      484: {
        description: 'InvalidSmsRoleTrustRelationshipException',
        content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
      },
      485: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings',
  description:
    '<p> <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can\'t use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.</p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>',
  operationId: 'SetUserSettings',
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
        .literal('AWSCognitoIdentityProviderService.SetUserSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.SetUserSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetUserSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetUserSettingsResponseSchema } },
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
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    484: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    485: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    486: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    487: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceSignUpRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp',
  description:
    '<p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>',
  operationId: 'SignUp',
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
        .literal('AWSCognitoIdentityProviderService.SignUp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.SignUp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SignUpRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SignUpResponseSchema } },
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
      description: 'UnexpectedLambdaException',
      content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
    },
    483: {
      description: 'UserLambdaValidationException',
      content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
    486: {
      description: 'InvalidLambdaResponseException',
      content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
    },
    487: {
      description: 'UsernameExistsException',
      content: { 'application/json': { schema: UsernameExistsExceptionSchema } },
    },
    488: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    489: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    490: {
      description: 'InvalidSmsRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
    },
    491: {
      description: 'InvalidSmsRoleTrustRelationshipException',
      content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
    },
    492: {
      description: 'InvalidEmailRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
    },
    493: {
      description: 'CodeDeliveryFailureException',
      content: { 'application/json': { schema: CodeDeliveryFailureExceptionSchema } },
    },
    494: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob',
  description: 'Starts the user import.',
  operationId: 'StartUserImportJob',
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
        .literal('AWSCognitoIdentityProviderService.StartUserImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.StartUserImportJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartUserImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartUserImportJobResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'PreconditionNotMetException',
      content: { 'application/json': { schema: PreconditionNotMetExceptionSchema } },
    },
    485: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob',
  description: 'Stops the user import job.',
  operationId: 'StopUserImportJob',
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
        .literal('AWSCognitoIdentityProviderService.StopUserImportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.StopUserImportJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopUserImportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopUserImportJobResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'PreconditionNotMetException',
      content: { 'application/json': { schema: PreconditionNotMetExceptionSchema } },
    },
    485: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource',
  description:
    '<p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool, and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>',
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
        .literal('AWSCognitoIdentityProviderService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource',
  description:
    'Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account.',
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
        .literal('AWSCognitoIdentityProviderService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.UntagResource'] },
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
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback',
    description:
      "<p>Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
    operationId: 'UpdateAuthEventFeedback',
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
          .literal('AWSCognitoIdentityProviderService.UpdateAuthEventFeedback')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.UpdateAuthEventFeedback'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateAuthEventFeedbackRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateAuthEventFeedbackResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      484: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      485: {
        description: 'UserPoolAddOnNotEnabledException',
        content: { 'application/json': { schema: UserPoolAddOnNotEnabledExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus',
  description:
    "<p>Updates the device status.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'UpdateDeviceStatus',
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
        .literal('AWSCognitoIdentityProviderService.UpdateDeviceStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.UpdateDeviceStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDeviceStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDeviceStatusResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    486: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    487: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    488: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    489: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup',
  description:
    '<p>Updates the specified group with the specified attributes.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'UpdateGroup',
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
        .literal('AWSCognitoIdentityProviderService.UpdateGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.UpdateGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateGroupRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGroupResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider',
    description:
      '<p>Updates IdP information for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'UpdateIdentityProvider',
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
          .literal('AWSCognitoIdentityProviderService.UpdateIdentityProvider')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.UpdateIdentityProvider'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateIdentityProviderRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateIdentityProviderResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'UnsupportedIdentityProviderException',
        content: { 'application/json': { schema: UnsupportedIdentityProviderExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      486: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer',
    description:
      '<p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don\'t provide a value for an attribute, it is set to the default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'UpdateResourceServer',
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
          .literal('AWSCognitoIdentityProviderService.UpdateResourceServer')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.UpdateResourceServer'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateResourceServerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateResourceServerResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes',
    description:
      '<p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>',
    operationId: 'UpdateUserAttributes',
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
          .literal('AWSCognitoIdentityProviderService.UpdateUserAttributes')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.UpdateUserAttributes'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateUserAttributesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateUserAttributesResponseSchema } },
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
        description: 'CodeMismatchException',
        content: { 'application/json': { schema: CodeMismatchExceptionSchema } },
      },
      483: {
        description: 'ExpiredCodeException',
        content: { 'application/json': { schema: ExpiredCodeExceptionSchema } },
      },
      484: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      485: {
        description: 'UnexpectedLambdaException',
        content: { 'application/json': { schema: UnexpectedLambdaExceptionSchema } },
      },
      486: {
        description: 'UserLambdaValidationException',
        content: { 'application/json': { schema: UserLambdaValidationExceptionSchema } },
      },
      487: {
        description: 'InvalidLambdaResponseException',
        content: { 'application/json': { schema: InvalidLambdaResponseExceptionSchema } },
      },
      488: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      489: {
        description: 'AliasExistsException',
        content: { 'application/json': { schema: AliasExistsExceptionSchema } },
      },
      490: {
        description: 'InvalidSmsRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
      },
      491: {
        description: 'InvalidSmsRoleTrustRelationshipException',
        content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
      },
      492: {
        description: 'InvalidEmailRoleAccessPolicyException',
        content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
      },
      493: {
        description: 'CodeDeliveryFailureException',
        content: { 'application/json': { schema: CodeDeliveryFailureExceptionSchema } },
      },
      494: {
        description: 'PasswordResetRequiredException',
        content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
      },
      495: {
        description: 'UserNotFoundException',
        content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
      },
      496: {
        description: 'UserNotConfirmedException',
        content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
      },
      497: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      498: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool',
  description:
    '<note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>.</p> <important> <p>If you don\'t provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
  operationId: 'UpdateUserPool',
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
        .literal('AWSCognitoIdentityProviderService.UpdateUserPool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityProviderService.UpdateUserPool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateUserPoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateUserPoolResponseSchema } },
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
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'UserImportInProgressException',
      content: { 'application/json': { schema: UserImportInProgressExceptionSchema } },
    },
    486: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    487: {
      description: 'InvalidSmsRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidSmsRoleAccessPolicyExceptionSchema } },
    },
    488: {
      description: 'InvalidSmsRoleTrustRelationshipException',
      content: { 'application/json': { schema: InvalidSmsRoleTrustRelationshipExceptionSchema } },
    },
    489: {
      description: 'UserPoolTaggingException',
      content: { 'application/json': { schema: UserPoolTaggingExceptionSchema } },
    },
    490: {
      description: 'InvalidEmailRoleAccessPolicyException',
      content: { 'application/json': { schema: InvalidEmailRoleAccessPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient',
    description:
      '<p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don\'t provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'UpdateUserPoolClient',
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
          .literal('AWSCognitoIdentityProviderService.UpdateUserPoolClient')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.UpdateUserPoolClient'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateUserPoolClientRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateUserPoolClientResponseSchema } },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      485: {
        description: 'ScopeDoesNotExistException',
        content: { 'application/json': { schema: ScopeDoesNotExistExceptionSchema } },
      },
      486: {
        description: 'InvalidOAuthFlowException',
        content: { 'application/json': { schema: InvalidOAuthFlowExceptionSchema } },
      },
      487: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain',
    description:
      '<p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can\'t use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>',
    operationId: 'UpdateUserPoolDomain',
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
          .literal('AWSCognitoIdentityProviderService.UpdateUserPoolDomain')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityProviderService.UpdateUserPoolDomain'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateUserPoolDomainRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateUserPoolDomainResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken',
  description:
    "<p>Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as \"verified\" if successful. The request takes an access token or a session string, but not both.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html\">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>",
  operationId: 'VerifySoftwareToken',
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
        .literal('AWSCognitoIdentityProviderService.VerifySoftwareToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.VerifySoftwareToken'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: VerifySoftwareTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VerifySoftwareTokenResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidUserPoolConfigurationException',
      content: { 'application/json': { schema: InvalidUserPoolConfigurationExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    486: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    487: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    488: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    489: {
      description: 'EnableSoftwareTokenMFAException',
      content: { 'application/json': { schema: EnableSoftwareTokenMFAExceptionSchema } },
    },
    490: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    491: {
      description: 'SoftwareTokenMFANotFoundException',
      content: { 'application/json': { schema: SoftwareTokenMFANotFoundExceptionSchema } },
    },
    492: {
      description: 'CodeMismatchException',
      content: { 'application/json': { schema: CodeMismatchExceptionSchema } },
    },
    493: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute',
  description:
    '<p>Verifies the specified user attributes in the user pool.</p> <p> If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html"> UserAttributeUpdateSettingsType</a>. </p> <note> <p>Amazon Cognito doesn\'t evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can\'t use IAM credentials to authorize requests, and you can\'t grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>',
  operationId: 'VerifyUserAttribute',
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
        .literal('AWSCognitoIdentityProviderService.VerifyUserAttribute')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityProviderService.VerifyUserAttribute'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: VerifyUserAttributeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VerifyUserAttributeResponseSchema } },
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
      description: 'CodeMismatchException',
      content: { 'application/json': { schema: CodeMismatchExceptionSchema } },
    },
    483: {
      description: 'ExpiredCodeException',
      content: { 'application/json': { schema: ExpiredCodeExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    487: {
      description: 'PasswordResetRequiredException',
      content: { 'application/json': { schema: PasswordResetRequiredExceptionSchema } },
    },
    488: {
      description: 'UserNotFoundException',
      content: { 'application/json': { schema: UserNotFoundExceptionSchema } },
    },
    489: {
      description: 'UserNotConfirmedException',
      content: { 'application/json': { schema: UserNotConfirmedExceptionSchema } },
    },
    490: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    491: {
      description: 'AliasExistsException',
      content: { 'application/json': { schema: AliasExistsExceptionSchema } },
    },
    492: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})
