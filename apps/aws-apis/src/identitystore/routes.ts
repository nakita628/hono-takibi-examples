import { createRoute, z } from '@hono/zod-openapi'

const ResourceIdSchema = z
  .string()
  .regex(
    /([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}/,
  )
  .min(1)
  .max(47)
  .openapi('ResourceId')

const IdentityStoreIdSchema = z
  .string()
  .regex(/d-[0-9a-f]{10}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .min(1)
  .max(36)
  .openapi('IdentityStoreId')

const CreateGroupResponseSchema = z
  .object({
    GroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the newly created group in the identity store.',
        }),
    ),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({ required: ['GroupId', 'IdentityStoreId'] })
  .openapi('CreateGroupResponse')

const GroupDisplayNameSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r  ]+/u)
  .min(1)
  .max(1024)
  .openapi('GroupDisplayName')

const SensitiveStringTypeSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r  　]+/u)
  .min(1)
  .max(1024)
  .openapi('SensitiveStringType')

const CreateGroupRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    DisplayName: GroupDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing the name of the group. This value is commonly displayed when the group is referenced. "Administrator" and "AWSAdministrators" are reserved names and can\'t be used for users or groups.',
        }),
    ).exactOptional(),
    Description: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string containing the description of the group.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['IdentityStoreId'], title: 'CreateGroupRequest' })
  .openapi('CreateGroupRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const CreateGroupMembershipResponseSchema = z
  .object({
    MembershipId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for a newly created <code>GroupMembership</code> in an identity store.',
        }),
    ),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({ required: ['MembershipId', 'IdentityStoreId'] })
  .openapi('CreateGroupMembershipResponse')

const MemberIdSchema = z
  .object({
    UserId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'An object containing the identifiers of resources that can be members.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object containing the identifier of a group member.', required: [] })
  .openapi('MemberId')

const CreateGroupMembershipRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
    MemberId: MemberIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.',
        }),
    ),
  })
  .openapi({
    required: ['IdentityStoreId', 'GroupId', 'MemberId'],
    title: 'CreateGroupMembershipRequest',
  })
  .openapi('CreateGroupMembershipRequest')

const CreateUserResponseSchema = z
  .object({
    UserId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the newly created user in the identity store.',
        }),
    ),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({ required: ['UserId', 'IdentityStoreId'] })
  .openapi('CreateUserResponse')

const UserNameSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(128)
  .openapi('UserName')

const NameSchema = z
  .object({
    Formatted: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string containing a formatted version of the name for display.',
        }),
    ).exactOptional(),
    FamilyName: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The family name of the user.' }),
    ).exactOptional(),
    GivenName: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The given name of the user.' }),
    ).exactOptional(),
    MiddleName: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The middle name of the user.' }),
    ).exactOptional(),
    HonorificPrefix: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The honorific prefix of the user. For example, "Dr."' }),
    ).exactOptional(),
    HonorificSuffix: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The honorific suffix of the user. For example, "M.D."' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The full name of the user.', required: [] })
  .openapi('Name')

const SensitiveBooleanTypeSchema = z.boolean().openapi('SensitiveBooleanType')

const EmailSchema = z
  .object({
    Value: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string containing an email address. For example, "johndoe@amazon.com."',
        }),
    ).exactOptional(),
    Type: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string representing the type of address. For example, "Work."',
        }),
    ).exactOptional(),
    Primary: SensitiveBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value representing whether this is the primary email address for the associated resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The email address associated with the user.', required: [] })
  .openapi('Email')

const EmailsSchema = z.array(EmailSchema).length(1).openapi('Emails')

const AddressSchema = z
  .object({
    StreetAddress: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The street of the address.' }),
    ).exactOptional(),
    Locality: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string of the address locality.' }),
    ).exactOptional(),
    Region: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The region of the address.' }),
    ).exactOptional(),
    PostalCode: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The postal code of the address.' }),
    ).exactOptional(),
    Country: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The country of the address.' }),
    ).exactOptional(),
    Formatted: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string containing a formatted version of the address for display.',
        }),
    ).exactOptional(),
    Type: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string representing the type of address. For example, "Home."',
        }),
    ).exactOptional(),
    Primary: SensitiveBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value representing whether this is the primary address for the associated resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The address associated with the specified user.', required: [] })
  .openapi('Address')

const AddressesSchema = z.array(AddressSchema).length(1).openapi('Addresses')

const PhoneNumberSchema = z
  .object({
    Value: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing a phone number. For example, "8675309" or "+1 (800) 123-4567".',
        }),
    ).exactOptional(),
    Type: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string representing the type of a phone number. For example, "Mobile."',
        }),
    ).exactOptional(),
    Primary: SensitiveBooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value representing whether this is the primary phone number for the associated resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The phone number associated with the user.', required: [] })
  .openapi('PhoneNumber')

const PhoneNumbersSchema = z.array(PhoneNumberSchema).length(1).openapi('PhoneNumbers')

const CreateUserRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. "Administrator" and "AWSAdministrators" are reserved names and can\'t be used for users or groups.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'An object containing the name of the user.' }),
    ).exactOptional(),
    DisplayName: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing the name of the user. This value is typically formatted for display when the user is referenced. For example, "John Doe." ',
        }),
    ).exactOptional(),
    NickName: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string containing an alternate name for the user.' }),
    ).exactOptional(),
    ProfileUrl: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string containing a URL that might be associated with the user.',
        }),
    ).exactOptional(),
    Emails: EmailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>Email</code> objects containing email addresses associated with the user.',
        }),
    ).exactOptional(),
    Addresses: AddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>Address</code> objects containing addresses associated with the user.',
        }),
    ).exactOptional(),
    PhoneNumbers: PhoneNumbersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>PhoneNumber</code> objects containing phone numbers associated with the user.',
        }),
    ).exactOptional(),
    UserType: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case.',
        }),
    ).exactOptional(),
    Title: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case.',
        }),
    ).exactOptional(),
    PreferredLanguage: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing the preferred language of the user. For example, "American English" or "en-us."',
        }),
    ).exactOptional(),
    Locale: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string containing the geographical region or location of the user.',
        }),
    ).exactOptional(),
    Timezone: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string containing the time zone of the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['IdentityStoreId'], title: 'CreateUserRequest' })
  .openapi('CreateUserRequest')

const DeleteGroupResponseSchema = z.object({}).openapi('DeleteGroupResponse')

const DeleteGroupRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'GroupId'], title: 'DeleteGroupRequest' })
  .openapi('DeleteGroupRequest')

const DeleteGroupMembershipResponseSchema = z.object({}).openapi('DeleteGroupMembershipResponse')

const DeleteGroupMembershipRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    MembershipId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for a <code>GroupMembership</code> in an identity store.',
        }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'MembershipId'], title: 'DeleteGroupMembershipRequest' })
  .openapi('DeleteGroupMembershipRequest')

const DeleteUserResponseSchema = z.object({}).openapi('DeleteUserResponse')

const DeleteUserRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    UserId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a user in the identity store.' }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'UserId'], title: 'DeleteUserRequest' })
  .openapi('DeleteUserRequest')

const ExternalIdIssuerSchema = z
  .string()
  .regex(/\(\?!\(\?i\)\(arn\|aws\):\)[\p\{L\}\p\{M\}\p\{S\}\p\{N\}\p\{P\}]\+/)
  .min(1)
  .max(100)
  .openapi('ExternalIdIssuer')

const ExternalIdIdentifierSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(256)
  .openapi('ExternalIdIdentifier')

const ExternalIdSchema = z
  .object({
    Issuer: ExternalIdIssuerSchema.and(
      z.any().openapi({ description: 'The issuer for an external identifier.' }),
    ),
    Id: ExternalIdIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier issued to this resource by an external identity provider.',
        }),
    ),
  })
  .openapi({
    required: ['Issuer', 'Id'],
    description: 'The identifier issued to this resource by an external identity provider.',
  })
  .openapi('ExternalId')

const ExternalIdsSchema = z.array(ExternalIdSchema).min(1).max(10).openapi('ExternalIds')

const DescribeGroupResponseSchema = z
  .object({
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
    DisplayName: GroupDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The group’s display name value. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time that the group is created and stored as an attribute of the group object in the identity store.',
        }),
    ).exactOptional(),
    ExternalIds: ExternalIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ExternalId</code> objects that contains the identifiers issued to this resource by an external identity provider.',
        }),
    ).exactOptional(),
    Description: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string containing a description of the group.' }),
    ).exactOptional(),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({ required: ['GroupId', 'IdentityStoreId'] })
  .openapi('DescribeGroupResponse')

const DescribeGroupRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier for the identity store, such as <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and <code>1234567890</code> is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.',
        }),
    ),
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'GroupId'], title: 'DescribeGroupRequest' })
  .openapi('DescribeGroupRequest')

const DescribeGroupMembershipResponseSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    MembershipId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for a <code>GroupMembership</code> in an identity store.',
        }),
    ),
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
    MemberId: MemberIdSchema,
  })
  .openapi({ required: ['IdentityStoreId', 'MembershipId', 'GroupId', 'MemberId'] })
  .openapi('DescribeGroupMembershipResponse')

const DescribeGroupMembershipRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    MembershipId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for a <code>GroupMembership</code> in an identity store.',
        }),
    ),
  })
  .openapi({
    required: ['IdentityStoreId', 'MembershipId'],
    title: 'DescribeGroupMembershipRequest',
  })
  .openapi('DescribeGroupMembershipRequest')

const DescribeUserResponseSchema = z
  .object({
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store.',
        }),
    ).exactOptional(),
    UserId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a user in the identity store.' }),
    ),
    ExternalIds: ExternalIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ExternalId</code> objects that contains the identifiers issued to this resource by an external identity provider.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the user.' })).exactOptional(),
    DisplayName: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The display name of the user.' }),
    ).exactOptional(),
    NickName: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'An alternative descriptive name for the user.' }),
    ).exactOptional(),
    ProfileUrl: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: "A URL link for the user's profile." }),
    ).exactOptional(),
    Emails: EmailsSchema.and(
      z.any().openapi({ description: 'The email address of the user.' }),
    ).exactOptional(),
    Addresses: AddressesSchema.and(
      z.any().openapi({ description: 'The physical address of the user.' }),
    ).exactOptional(),
    PhoneNumbers: PhoneNumbersSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code>PhoneNumber</code> objects associated with a user.',
        }),
    ).exactOptional(),
    UserType: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string indicating the type of user.' }),
    ).exactOptional(),
    Title: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string containing the title of the user.' }),
    ).exactOptional(),
    PreferredLanguage: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The preferred language of the user.' }),
    ).exactOptional(),
    Locale: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string containing the geographical region or location of the user.',
        }),
    ).exactOptional(),
    Timezone: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'The time zone for a user.' }),
    ).exactOptional(),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({ required: ['UserId', 'IdentityStoreId'] })
  .openapi('DescribeUserResponse')

const DescribeUserRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier for the identity store, such as <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and <code>1234567890</code> is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.',
        }),
    ),
    UserId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a user in the identity store.' }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'UserId'], title: 'DescribeUserRequest' })
  .openapi('DescribeUserRequest')

const GetGroupIdResponseSchema = z
  .object({
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({ required: ['GroupId', 'IdentityStoreId'] })
  .openapi('GetGroupIdResponse')

const AttributePathSchema = z
  .string()
  .regex(/\p{L}+(?:\.\p{L}+){0,2}/u)
  .min(1)
  .max(255)
  .openapi('AttributePath')

const AttributeValueSchema = z
  .object({})
  .openapi({
    description:
      'The value of the attribute. This is a <code>Document</code> type. This type is not supported by Java V1, Go V1, and older versions of the AWS CLI.',
  })
  .openapi('AttributeValue')

const UniqueAttributeSchema = z
  .object({
    AttributePath: AttributePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string representation of the path to a given attribute or sub-attribute. Supports JMESPath.',
        }),
    ),
    AttributeValue: AttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the attribute. This is a <code>Document</code> type. This type is not supported by Java V1, Go V1, and older versions of the AWS CLI.',
        }),
    ),
  })
  .openapi({
    required: ['AttributePath', 'AttributeValue'],
    description: "An entity attribute that's unique to a specific entity.",
  })
  .openapi('UniqueAttribute')

const AlternateIdentifierSchema = z
  .object({
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier issued to this resource by an external identity provider.',
        }),
    ).exactOptional(),
    UniqueAttribute: UniqueAttributeSchema.and(
      z.any().openapi({ description: "An entity attribute that's unique to a specific entity." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute.',
    required: [],
  })
  .openapi('AlternateIdentifier')

const GetGroupIdRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    AlternateIdentifier: AlternateIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For the unique attribute, the only valid path is <code>displayName</code>.',
        }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'AlternateIdentifier'], title: 'GetGroupIdRequest' })
  .openapi('GetGroupIdRequest')

const GetGroupMembershipIdResponseSchema = z
  .object({
    MembershipId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for a <code>GroupMembership</code> in an identity store.',
        }),
    ),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({ required: ['MembershipId', 'IdentityStoreId'] })
  .openapi('GetGroupMembershipIdResponse')

const GetGroupMembershipIdRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
    MemberId: MemberIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.',
        }),
    ),
  })
  .openapi({
    required: ['IdentityStoreId', 'GroupId', 'MemberId'],
    title: 'GetGroupMembershipIdRequest',
  })
  .openapi('GetGroupMembershipIdRequest')

const GetUserIdResponseSchema = z
  .object({
    UserId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a user in the identity store.' }),
    ),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({ required: ['UserId', 'IdentityStoreId'] })
  .openapi('GetUserIdResponse')

const GetUserIdRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    AlternateIdentifier: AlternateIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For the unique attribute, the only valid paths are <code>userName</code> and <code>emails.value</code>.',
        }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'AlternateIdentifier'], title: 'GetUserIdRequest' })
  .openapi('GetUserIdRequest')

const GroupMembershipExistenceResultSchema = z
  .object({
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ).exactOptional(),
    MemberId: MemberIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.',
        }),
    ).exactOptional(),
    MembershipExists: SensitiveBooleanTypeSchema.and(
      z.any().openapi({ description: 'Indicates whether a membership relation exists or not.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Indicates whether a resource is a member of a group in the identity store.',
    required: [],
  })
  .openapi('GroupMembershipExistenceResult')

const GroupMembershipExistenceResultsSchema = z
  .array(GroupMembershipExistenceResultSchema)
  .openapi('GroupMembershipExistenceResults')

const IsMemberInGroupsResponseSchema = z
  .object({
    Results: GroupMembershipExistenceResultsSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the results of membership existence checks.' }),
    ),
  })
  .openapi({ required: ['Results'] })
  .openapi('IsMemberInGroupsResponse')

const GroupIdsSchema = z.array(ResourceIdSchema).min(1).max(100).openapi('GroupIds')

const IsMemberInGroupsRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    MemberId: MemberIdSchema.and(
      z.any().openapi({ description: 'An object containing the identifier of a group member.' }),
    ),
    GroupIds: GroupIdsSchema.and(
      z.any().openapi({ description: 'A list of identifiers for groups in the identity store.' }),
    ),
  })
  .openapi({
    required: ['IdentityStoreId', 'MemberId', 'GroupIds'],
    title: 'IsMemberInGroupsRequest',
  })
  .openapi('IsMemberInGroupsRequest')

const GroupMembershipSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    MembershipId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for a <code>GroupMembership</code> object in an identity store.',
        }),
    ).exactOptional(),
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ).exactOptional(),
    MemberId: MemberIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityStoreId'],
    description:
      'Contains the identifiers for a group, a group member, and a <code>GroupMembership</code> object in the identity store.',
  })
  .openapi('GroupMembership')

const GroupMembershipsSchema = z.array(GroupMembershipSchema).openapi('GroupMemberships')

const NextTokenSchema = z
  .string()
  .regex(/[-a-zA-Z0-9+=\/:]*/)
  .min(1)
  .max(65535)
  .openapi('NextToken')

const ListGroupMembershipsResponseSchema = z
  .object({
    GroupMemberships: GroupMembershipsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>GroupMembership</code> objects in the group.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used for the <code>ListUsers</code>, <code>ListGroups</code>, and <code>ListGroupMemberships</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GroupMemberships'] })
  .openapi('ListGroupMembershipsResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListGroupMembershipsRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to be returned per request. This parameter is used in all <code>List</code> requests to specify how many results to return in one page.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used for the <code>ListUsers</code>, <code>ListGroups</code> and <code>ListGroupMemberships</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IdentityStoreId', 'GroupId'], title: 'ListGroupMembershipsRequest' })
  .openapi('ListGroupMembershipsRequest')

const ListGroupMembershipsForMemberResponseSchema = z
  .object({
    GroupMemberships: GroupMembershipsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>GroupMembership</code> objects in the group for a specified member.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used for the <code>ListUsers</code>, <code>ListGroups</code>, and <code>ListGroupMemberships</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GroupMemberships'] })
  .openapi('ListGroupMembershipsForMemberResponse')

const ListGroupMembershipsForMemberRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    MemberId: MemberIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the identifier of a group member. Setting the <code>UserID</code> field to the specific identifier for a user indicates that the user is a member of the group.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to be returned per request. This parameter is used in the <code>ListUsers</code> and <code>ListGroups</code> requests to specify how many results to return in one page. The length limit is 50 characters.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used for the <code>ListUsers</code>, <code>ListGroups</code>, and <code>ListGroupMemberships</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityStoreId', 'MemberId'],
    title: 'ListGroupMembershipsForMemberRequest',
  })
  .openapi('ListGroupMembershipsForMemberRequest')

const GroupSchema = z
  .object({
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
    DisplayName: GroupDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display name value for the group. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time the group is created and stored as an attribute of the group object in the identity store.',
        }),
    ).exactOptional(),
    ExternalIds: ExternalIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ExternalId</code> objects that contains the identifiers issued to this resource by an external identity provider.',
        }),
    ).exactOptional(),
    Description: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string containing a description of the specified group.' }),
    ).exactOptional(),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({
    required: ['GroupId', 'IdentityStoreId'],
    description: 'A group object that contains the metadata and attributes for a specified group.',
  })
  .openapi('Group')

const GroupsSchema = z.array(GroupSchema).openapi('Groups')

const ListGroupsResponseSchema = z
  .object({
    Groups: GroupsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>Group</code> objects in the identity store.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it1 is used in the API request to search for the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Groups'] })
  .openapi('ListGroupsResponse')

const FilterSchema = z
  .object({
    AttributePath: AttributePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attribute path that is used to specify which attribute name to search. Length limit is 255 characters. For example, <code>UserName</code> is a valid attribute path for the <code>ListUsers</code> API, and <code>DisplayName</code> is a valid attribute path for the <code>ListGroups</code> API.',
        }),
    ),
    AttributeValue: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the data for an attribute. Each attribute value is described as a name-value pair. ',
        }),
    ),
  })
  .openapi({
    required: ['AttributePath', 'AttributeValue'],
    description:
      'A query filter used by <code>ListUsers</code> and <code>ListGroups</code>. This filter object provides the attribute name and attribute value to search users or groups.',
  })
  .openapi('Filter')

const FiltersSchema = z.array(FilterSchema).min(0).max(1).openapi('Filters')

const ListGroupsRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier for the identity store, such as <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and <code>1234567890</code> is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to be returned per request. This parameter is used in the <code>ListUsers</code> and <code>ListGroups</code> requests to specify how many results to return in one page. The length limit is 50 characters.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'A list of <code>Filter</code> objects, which is used in the <code>ListUsers</code> and <code>ListGroups</code> requests.Using filters with ListGroups API is deprecated, please use GetGroupId API instead.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IdentityStoreId'], title: 'ListGroupsRequest' })
  .openapi('ListGroupsRequest')

const UserSchema = z
  .object({
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store.',
        }),
    ).exactOptional(),
    UserId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a user in the identity store.' }),
    ),
    ExternalIds: ExternalIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ExternalId</code> objects that contains the identifiers issued to this resource by an external identity provider.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'An object containing the name of the user.' }),
    ).exactOptional(),
    DisplayName: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing the name of the user that is formatted for display when the user is referenced. For example, "John Doe."',
        }),
    ).exactOptional(),
    NickName: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string containing an alternate name for the user.' }),
    ).exactOptional(),
    ProfileUrl: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string containing a URL that might be associated with the user.',
        }),
    ).exactOptional(),
    Emails: EmailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>Email</code> objects containing email addresses associated with the user.',
        }),
    ).exactOptional(),
    Addresses: AddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>Address</code> objects containing addresses associated with the user.',
        }),
    ).exactOptional(),
    PhoneNumbers: PhoneNumbersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>PhoneNumber</code> objects containing phone numbers associated with the user.',
        }),
    ).exactOptional(),
    UserType: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case.',
        }),
    ).exactOptional(),
    Title: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case.',
        }),
    ).exactOptional(),
    PreferredLanguage: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing the preferred language of the user. For example, "American English" or "en-us."',
        }),
    ).exactOptional(),
    Locale: SensitiveStringTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A string containing the geographical region or location of the user.',
        }),
    ).exactOptional(),
    Timezone: SensitiveStringTypeSchema.and(
      z.any().openapi({ description: 'A string containing the time zone of the user.' }),
    ).exactOptional(),
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
  })
  .openapi({
    required: ['UserId', 'IdentityStoreId'],
    description: 'A user object that contains the metadata and attributes for a specified user.',
  })
  .openapi('User')

const UsersSchema = z.array(UserSchema).openapi('Users')

const ListUsersResponseSchema = z
  .object({
    Users: UsersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>User</code> objects in the identity store.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Users'] })
  .openapi('ListUsersResponse')

const ListUsersRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The globally unique identifier for the identity store, such as <code>d-1234567890</code>. In this example, <code>d-</code> is a fixed prefix, and <code>1234567890</code> is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to be returned per request. This parameter is used in the <code>ListUsers</code> and <code>ListGroups</code> requests to specify how many results to return in one page. The length limit is 50 characters.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used for the <code>ListUsers</code> and <code>ListGroups</code> API operations. This value is generated by the identity store service. It is returned in the API response if the total results are more than the size of one page. This token is also returned when it is used in the API request to search for the next page.',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'A list of <code>Filter</code> objects, which is used in the <code>ListUsers</code> and <code>ListGroups</code> requests. Using filters with ListUsers API is deprecated, please use GetGroupId API instead.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['IdentityStoreId'], title: 'ListUsersRequest' })
  .openapi('ListUsersRequest')

const UpdateGroupResponseSchema = z.object({}).openapi('UpdateGroupResponse')

const AttributeOperationSchema = z
  .object({
    AttributePath: AttributePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string representation of the path to a given attribute or sub-attribute. Supports JMESPath.',
        }),
    ),
    AttributeValue: AttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the attribute. This is a <code>Document</code> type. This type is not supported by Java V1, Go V1, and older versions of the AWS CLI.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AttributePath'],
    description:
      'An operation that applies to the requested group. This operation might add, replace, or remove an attribute.',
  })
  .openapi('AttributeOperation')

const AttributeOperationsSchema = z
  .array(AttributeOperationSchema)
  .min(1)
  .max(100)
  .openapi('AttributeOperations')

const UpdateGroupRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    GroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a group in the identity store.' }),
    ),
    Operations: AttributeOperationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>AttributeOperation</code> objects to apply to the requested group. These operations might add, replace, or remove an attribute.',
        }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'GroupId', 'Operations'], title: 'UpdateGroupRequest' })
  .openapi('UpdateGroupRequest')

const UpdateUserResponseSchema = z.object({}).openapi('UpdateUserResponse')

const UpdateUserRequestSchema = z
  .object({
    IdentityStoreId: IdentityStoreIdSchema.and(
      z.any().openapi({ description: 'The globally unique identifier for the identity store.' }),
    ),
    UserId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for a user in the identity store.' }),
    ),
    Operations: AttributeOperationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>AttributeOperation</code> objects to apply to the requested user. These operations might add, replace, or remove an attribute.',
        }),
    ),
  })
  .openapi({ required: ['IdentityStoreId', 'UserId', 'Operations'], title: 'UpdateUserRequest' })
  .openapi('UpdateUserRequest')

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

export const postXAmzTargetAWSIdentityStoreCreateGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.CreateGroup',
  description: 'Creates a group within the specified identity store.',
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
        .literal('AWSIdentityStore.CreateGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.CreateGroup'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreCreateGroupMembershipRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.CreateGroupMembership',
  description:
    'Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.',
  operationId: 'CreateGroupMembership',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.CreateGroupMembership')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.CreateGroupMembership'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGroupMembershipRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGroupMembershipResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreCreateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.CreateUser',
  description: 'Creates a user within the specified identity store.',
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
      'X-Amz-Target': z
        .literal('AWSIdentityStore.CreateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.CreateUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreDeleteGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.DeleteGroup',
  description: 'Delete a group within an identity store given <code>GroupId</code>.',
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
        .literal('AWSIdentityStore.DeleteGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.DeleteGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteGroupRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreDeleteGroupMembershipRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership',
  description: 'Delete a membership within a group given <code>MembershipId</code>.',
  operationId: 'DeleteGroupMembership',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.DeleteGroupMembership')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.DeleteGroupMembership'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteGroupMembershipRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGroupMembershipResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.DeleteUser',
  description: 'Deletes a user within an identity store given <code>UserId</code>.',
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
        .literal('AWSIdentityStore.DeleteUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.DeleteUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUserResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreDescribeGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.DescribeGroup',
  description:
    'Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.',
  operationId: 'DescribeGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.DescribeGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.DescribeGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreDescribeGroupMembershipRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership',
  description:
    'Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.',
  operationId: 'DescribeGroupMembership',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.DescribeGroupMembership')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.DescribeGroupMembership'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGroupMembershipRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGroupMembershipResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreDescribeUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.DescribeUser',
  description:
    'Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.',
  operationId: 'DescribeUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.DescribeUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.DescribeUser'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUserResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreGetGroupIdRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.GetGroupId',
  description: 'Retrieves <code>GroupId</code> in an identity store.',
  operationId: 'GetGroupId',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.GetGroupId')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.GetGroupId'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetGroupIdRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGroupIdResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreGetGroupMembershipIdRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId',
  description: 'Retrieves the <code>MembershipId</code> in an identity store.',
  operationId: 'GetGroupMembershipId',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.GetGroupMembershipId')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.GetGroupMembershipId'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetGroupMembershipIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGroupMembershipIdResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreGetUserIdRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.GetUserId',
  description: 'Retrieves the <code>UserId</code> in an identity store.',
  operationId: 'GetUserId',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.GetUserId')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.GetUserId'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetUserIdRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUserIdResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreIsMemberInGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.IsMemberInGroups',
  description:
    "Checks the user's membership in all requested groups and returns if the member exists in all queried groups.",
  operationId: 'IsMemberInGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.IsMemberInGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.IsMemberInGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IsMemberInGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IsMemberInGroupsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreListGroupMembershipsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.ListGroupMemberships',
  description:
    'For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.',
  operationId: 'ListGroupMemberships',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.ListGroupMemberships')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.ListGroupMemberships'] },
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
      content: { 'application/json': { schema: ListGroupMembershipsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupMembershipsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember',
  description:
    'For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.',
  operationId: 'ListGroupMembershipsForMember',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSIdentityStore.ListGroupMembershipsForMember')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.ListGroupMembershipsForMember'] },
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
      content: { 'application/json': { schema: ListGroupMembershipsForMemberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupMembershipsForMemberResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreListGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.ListGroups',
  description:
    'Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.',
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
        .literal('AWSIdentityStore.ListGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.ListGroups'] },
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
    body: { content: { 'application/json': { schema: ListGroupsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreListUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.ListUsers',
  description:
    'Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.',
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
        .literal('AWSIdentityStore.ListUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.ListUsers'] },
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
    body: { content: { 'application/json': { schema: ListUsersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreUpdateGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.UpdateGroup',
  description:
    'For the specified group in the specified identity store, updates the group metadata and attributes.',
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
        .literal('AWSIdentityStore.UpdateGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.UpdateGroup'] },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSIdentityStoreUpdateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSIdentityStore.UpdateUser',
  description:
    'For the specified user in the specified identity store, updates the user metadata and attributes.',
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
      'X-Amz-Target': z
        .literal('AWSIdentityStore.UpdateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSIdentityStore.UpdateUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateUserResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})
