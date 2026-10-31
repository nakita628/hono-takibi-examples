import { createRoute, z } from '@hono/zod-openapi'

const HandshakeResourceSchema: z.ZodType<HandshakeResourceType> = z
  .lazy(() =>
    z
      .object({
        Value: HandshakeResourceValueSchema.and(
          z
            .any()
            .openapi({
              description:
                'The information that is passed to the other party in the handshake. The format of the value string must match the requirements of the specified type.',
            }),
        ).exactOptional(),
        Type: HandshakeResourceTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The type of information being passed, specifying how the value is to be interpreted by the other party:</p> <ul> <li> <p> <code>ACCOUNT</code> - Specifies an Amazon Web Services account ID number.</p> </li> <li> <p> <code>ORGANIZATION</code> - Specifies an organization ID number.</p> </li> <li> <p> <code>EMAIL</code> - Specifies the email address that is associated with the account that receives the handshake. </p> </li> <li> <p> <code>OWNER_EMAIL</code> - Specifies the email address associated with the management account. Included as information about an organization. </p> </li> <li> <p> <code>OWNER_NAME</code> - Specifies the name associated with the management account. Included as information about an organization. </p> </li> <li> <p> <code>NOTES</code> - Additional text provided by the handshake initiator and intended for the recipient to read.</p> </li> </ul>',
            }),
        ).exactOptional(),
        Resources: HandshakeResourcesSchema.and(
          z
            .any()
            .openapi({
              description:
                'When needed, contains an additional array of <code>HandshakeResource</code> objects.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Contains additional data that is needed to process a handshake.',
        required: [],
      }),
  )
  .openapi('HandshakeResource')

type HandshakeResourcesType = z.infer<typeof HandshakeResourceSchema>[]

type HandshakeResourceValueType = string

type HandshakeResourceTypeType =
  | 'ACCOUNT'
  | 'ORGANIZATION'
  | 'ORGANIZATION_FEATURE_SET'
  | 'EMAIL'
  | 'MASTER_EMAIL'
  | 'MASTER_NAME'
  | 'NOTES'
  | 'PARENT_HANDSHAKE'

const HandshakeResourceValueSchema: z.ZodType<HandshakeResourceValueType> = z
  .string()
  .openapi('HandshakeResourceValue')

const HandshakeResourceTypeSchema: z.ZodType<HandshakeResourceTypeType> = z
  .enum([
    'ACCOUNT',
    'ORGANIZATION',
    'ORGANIZATION_FEATURE_SET',
    'EMAIL',
    'MASTER_EMAIL',
    'MASTER_NAME',
    'NOTES',
    'PARENT_HANDSHAKE',
  ])
  .openapi('HandshakeResourceType')

const HandshakeResourcesSchema: z.ZodType<HandshakeResourcesType> = z
  .lazy(() => z.array(HandshakeResourceSchema))
  .openapi('HandshakeResources')

type HandshakeResourceType = {
  Value?: z.infer<typeof HandshakeResourceValueSchema> & { [key: string]: unknown }
  Type?: z.infer<typeof HandshakeResourceTypeSchema> & { [key: string]: unknown }
  Resources?: z.infer<typeof HandshakeResourcesSchema> & { [key: string]: unknown }
}

const HandshakeIdSchema = z
  .string()
  .regex(/^h-[0-9a-z]{8,32}$/)
  .max(34)
  .openapi('HandshakeId')

const HandshakeArnSchema = z
  .string()
  .regex(
    /^arn:aws:organizations::\d{12}:handshake\/o-[a-z0-9]{10,32}\/[a-z_]{1,32}\/h-[0-9a-z]{8,32}/,
  )
  .openapi('HandshakeArn')

const HandshakePartyIdSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(64)
  .openapi('HandshakePartyId')

const HandshakePartyTypeSchema = z
  .enum(['ACCOUNT', 'ORGANIZATION', 'EMAIL'])
  .openapi('HandshakePartyType')

const HandshakePartySchema = z
  .object({
    Id: HandshakePartyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) for the party.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ),
    Type: HandshakePartyTypeSchema.and(z.any().openapi({ description: 'The type of party.' })),
  })
  .openapi({ required: ['Id', 'Type'], description: 'Identifies a participant in a handshake.' })
  .openapi('HandshakeParty')

const HandshakePartiesSchema = z.array(HandshakePartySchema).openapi('HandshakeParties')

const HandshakeStateSchema = z
  .enum(['REQUESTED', 'OPEN', 'CANCELED', 'ACCEPTED', 'DECLINED', 'EXPIRED'])
  .openapi('HandshakeState')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ActionTypeSchema = z
  .enum([
    'INVITE',
    'ENABLE_ALL_FEATURES',
    'APPROVE_ALL_FEATURES',
    'ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE',
  ])
  .openapi('ActionType')

const HandshakeSchema = z
  .object({
    Id: HandshakeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of a handshake. The originating account creates the ID when it initiates the handshake.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ).exactOptional(),
    Arn: HandshakeArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of a handshake.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>',
        }),
    ).exactOptional(),
    Parties: HandshakePartiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the two accounts that are participating in the handshake.',
        }),
    ).exactOptional(),
    State: HandshakeStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the handshake. Use the state to trace the flow of the handshake through the process from its creation to its acceptance. The meaning of each of the valid values is as follows:</p> <ul> <li> <p> <b>REQUESTED</b>: This handshake was sent to multiple recipients (applicable to only some handshake types) and not all recipients have responded yet. The request stays in this state until all recipients respond.</p> </li> <li> <p> <b>OPEN</b>: This handshake was sent to multiple recipients (applicable to only some policy types) and all recipients have responded, allowing the originator to complete the handshake action.</p> </li> <li> <p> <b>CANCELED</b>: This handshake is no longer active because it was canceled by the originating account.</p> </li> <li> <p> <b>ACCEPTED</b>: This handshake is complete because it has been accepted by the recipient.</p> </li> <li> <p> <b>DECLINED</b>: This handshake is no longer active because it was declined by the recipient account.</p> </li> <li> <p> <b>EXPIRED</b>: This handshake is no longer active because the originator did not receive a response of any kind from the recipient before the expiration time (15 days).</p> </li> </ul>',
        }),
    ).exactOptional(),
    RequestedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the handshake request was made.' }),
    ).exactOptional(),
    ExpirationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the handshake expires. If the recipient of the handshake request fails to respond before the specified date and time, the handshake becomes inactive and is no longer valid.',
        }),
    ).exactOptional(),
    Action: ActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of handshake, indicating what action occurs when the recipient accepts the handshake. The following handshake types are supported:</p> <ul> <li> <p> <b>INVITE</b>: This type of handshake represents a request to join an organization. It is always sent from the management account to only non-member accounts.</p> </li> <li> <p> <b>ENABLE_ALL_FEATURES</b>: This type of handshake represents a request to enable all features in an organization. It is always sent from the management account to only <i>invited</i> member accounts. Created accounts do not receive this because those accounts were created by the organization's management account and approval is inferred.</p> </li> <li> <p> <b>APPROVE_ALL_FEATURES</b>: This type of handshake is sent from the Organizations service when all member accounts have approved the <code>ENABLE_ALL_FEATURES</code> invitation. It is sent only to the management account and signals the master that it can finalize the process to enable all features.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Resources: HandshakeResourcesSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional information that is needed to process the handshake.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a management account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are <code>CANCELED</code>, <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>EXPIRED</code> show up in lists for only 30 days after entering that state After that they are deleted.</p>',
    required: [],
  })
  .openapi('Handshake')

const AcceptHandshakeResponseSchema = z
  .object({
    Handshake: HandshakeSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains details about the accepted handshake.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Handshake: {
        Action: 'INVITE',
        Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111',
        ExpirationTimestamp: '20170228T1215Z',
        Id: 'h-examplehandshakeid111',
        Parties: [
          { Id: 'o-exampleorgid', Type: 'ORGANIZATION' },
          { Id: 'juan@example.com', Type: 'EMAIL' },
        ],
        RequestedTimestamp: '20170214T1215Z',
        Resources: [
          {
            Resources: [
              { Type: 'MASTER_EMAIL', Value: 'bill@amazon.com' },
              { Type: 'MASTER_NAME', Value: 'Org Master Account' },
              { Type: 'ORGANIZATION_FEATURE_SET', Value: 'ALL' },
            ],
            Type: 'ORGANIZATION',
            Value: 'o-exampleorgid',
          },
          { Type: 'ACCOUNT', Value: '222222222222' },
        ],
        State: 'ACCEPTED',
      },
    },
    required: [],
  })
  .openapi('AcceptHandshakeResponse')

const AcceptHandshakeRequestSchema = z
  .object({
    HandshakeId: HandshakeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the handshake that you want to accept.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['HandshakeId'], title: 'AcceptHandshakeRequest' })
  .openapi('AcceptHandshakeRequest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const AWSOrganizationsNotInUseExceptionSchema = z.any().openapi('AWSOrganizationsNotInUseException')

const HandshakeConstraintViolationExceptionSchema = z
  .any()
  .openapi('HandshakeConstraintViolationException')

const HandshakeNotFoundExceptionSchema = z.any().openapi('HandshakeNotFoundException')

const InvalidHandshakeTransitionExceptionSchema = z
  .any()
  .openapi('InvalidHandshakeTransitionException')

const HandshakeAlreadyInStateExceptionSchema = z.any().openapi('HandshakeAlreadyInStateException')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const ServiceExceptionSchema = z.any().openapi('ServiceException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const AccessDeniedForDependencyExceptionSchema = z
  .any()
  .openapi('AccessDeniedForDependencyException')

const PolicyIdSchema = z
  .string()
  .regex(/^p-[0-9a-zA-Z_]{8,128}$/)
  .max(130)
  .openapi('PolicyId')

const PolicyTargetIdSchema = z
  .string()
  .regex(/^(r-[0-9a-z]{4,32})|(\d{12})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$/)
  .max(100)
  .openapi('PolicyTargetId')

const AttachPolicyRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the policy that you want to attach to the target. You can get the ID for the policy by calling the <a>ListPolicies</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>',
        }),
    ),
    TargetId: PolicyTargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the root, OU, or account that you want to attach the policy to. You can get the ID by calling the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a> operations.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Account</b> - A string that consists of exactly 12 digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['PolicyId', 'TargetId'], title: 'AttachPolicyRequest' })
  .openapi('AttachPolicyRequest')

const ConstraintViolationExceptionSchema = z.any().openapi('ConstraintViolationException')

const DuplicatePolicyAttachmentExceptionSchema = z
  .any()
  .openapi('DuplicatePolicyAttachmentException')

const PolicyNotFoundExceptionSchema = z.any().openapi('PolicyNotFoundException')

const PolicyTypeNotEnabledExceptionSchema = z.any().openapi('PolicyTypeNotEnabledException')

const TargetNotFoundExceptionSchema = z.any().openapi('TargetNotFoundException')

const UnsupportedAPIEndpointExceptionSchema = z.any().openapi('UnsupportedAPIEndpointException')

const PolicyChangesInProgressExceptionSchema = z.any().openapi('PolicyChangesInProgressException')

const CancelHandshakeResponseSchema = z
  .object({
    Handshake: HandshakeSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains details about the handshake that you canceled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Handshake: {
        Action: 'INVITE',
        Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111',
        ExpirationTimestamp: '20170228T1215Z',
        Id: 'h-examplehandshakeid111',
        Parties: [
          { Id: 'o-exampleorgid', Type: 'ORGANIZATION' },
          { Id: 'susan@example.com', Type: 'EMAIL' },
        ],
        RequestedTimestamp: '20170214T1215Z',
        Resources: [
          {
            Resources: [
              { Type: 'MASTER_EMAIL', Value: 'bill@example.com' },
              { Type: 'MASTER_NAME', Value: 'Master Account' },
              { Type: 'ORGANIZATION_FEATURE_SET', Value: 'CONSOLIDATED_BILLING' },
            ],
            Type: 'ORGANIZATION',
            Value: 'o-exampleorgid',
          },
          { Type: 'ACCOUNT', Value: '222222222222' },
          {
            Type: 'NOTES',
            Value: "This is a request for Susan's account to join Bob's organization.",
          },
        ],
        State: 'CANCELED',
      },
    },
    required: [],
  })
  .openapi('CancelHandshakeResponse')

const CancelHandshakeRequestSchema = z
  .object({
    HandshakeId: HandshakeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the handshake that you want to cancel. You can get the ID from the <a>ListHandshakesForOrganization</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['HandshakeId'], title: 'CancelHandshakeRequest' })
  .openapi('CancelHandshakeRequest')

const AccountIdSchema = z
  .string()
  .regex(/^\d{12}$/)
  .max(12)
  .openapi('AccountId')

const CloseAccountRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Retrieves the Amazon Web Services account Id for the current <code>CloseAccount</code> API request. ',
        }),
    ),
  })
  .openapi({ required: ['AccountId'], title: 'CloseAccountRequest' })
  .openapi('CloseAccountRequest')

const AccountAlreadyClosedExceptionSchema = z.any().openapi('AccountAlreadyClosedException')

const AccountNotFoundExceptionSchema = z.any().openapi('AccountNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const CreateAccountRequestIdSchema = z
  .string()
  .regex(/^car-[a-z0-9]{8,32}$/)
  .max(36)
  .openapi('CreateAccountRequestId')

const CreateAccountNameSchema = z
  .string()
  .regex(/[\u0020-\u007E]+/)
  .min(1)
  .max(50)
  .openapi('CreateAccountName')

const CreateAccountStateSchema = z
  .enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED'])
  .openapi('CreateAccountState')

const CreateAccountFailureReasonSchema = z
  .enum([
    'ACCOUNT_LIMIT_EXCEEDED',
    'EMAIL_ALREADY_EXISTS',
    'INVALID_ADDRESS',
    'INVALID_EMAIL',
    'CONCURRENT_ACCOUNT_MODIFICATION',
    'INTERNAL_FAILURE',
    'GOVCLOUD_ACCOUNT_ALREADY_EXISTS',
    'MISSING_BUSINESS_VALIDATION',
    'FAILED_BUSINESS_VALIDATION',
    'PENDING_BUSINESS_VALIDATION',
    'INVALID_IDENTITY_FOR_BUSINESS_VALIDATION',
    'UNKNOWN_BUSINESS_VALIDATION',
    'MISSING_PAYMENT_INSTRUMENT',
    'INVALID_PAYMENT_INSTRUMENT',
    'UPDATE_EXISTING_RESOURCE_POLICY_WITH_TAGS_NOT_SUPPORTED',
  ])
  .openapi('CreateAccountFailureReason')

const CreateAccountStatusSchema = z
  .object({
    Id: CreateAccountRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) that references this request. You get this value from the response of the initial <a>CreateAccount</a> request to create the account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a create account request ID string requires "car-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ).exactOptional(),
    AccountName: CreateAccountNameSchema.and(
      z
        .any()
        .openapi({ description: 'The account name given to the account when it was created.' }),
    ).exactOptional(),
    State: CreateAccountStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the asynchronous request to create an Amazon Web Services account.',
        }),
    ).exactOptional(),
    RequestedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the request was made for the account creation.',
        }),
    ).exactOptional(),
    CompletedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the account was created and the request completed.',
        }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the account was created successfully, the unique identifier (ID) of the new account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>',
        }),
    ).exactOptional(),
    GovCloudAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the account was created successfully, the unique identifier (ID) of the new account in the Amazon Web Services GovCloud (US) Region.',
        }),
    ).exactOptional(),
    FailureReason: CreateAccountFailureReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If the request failed, a description of the reason for the failure.</p> <ul> <li> <p>ACCOUNT_LIMIT_EXCEEDED: The account couldn't be created because you reached the limit on the number of accounts in your organization.</p> </li> <li> <p>CONCURRENT_ACCOUNT_MODIFICATION: You already submitted a request with the same information.</p> </li> <li> <p>EMAIL_ALREADY_EXISTS: The account could not be created because another Amazon Web Services account with that email address already exists.</p> </li> <li> <p>FAILED_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization failed to receive business license validation.</p> </li> <li> <p>GOVCLOUD_ACCOUNT_ALREADY_EXISTS: The account in the Amazon Web Services GovCloud (US) Region could not be created because this Region already includes an account with that email address.</p> </li> <li> <p>IDENTITY_INVALID_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization can't complete business license validation because it doesn't have valid identity data.</p> </li> <li> <p>INVALID_ADDRESS: The account could not be created because the address you provided is not valid.</p> </li> <li> <p>INVALID_EMAIL: The account could not be created because the email address you provided is not valid.</p> </li> <li> <p>INVALID_PAYMENT_INSTRUMENT: The Amazon Web Services account that owns your organization does not have a supported payment method associated with the account. Amazon Web Services does not support cards issued by financial institutions in Russia or Belarus. For more information, see <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-general.html\">Managing your Amazon Web Services payments</a>.</p> </li> <li> <p>INTERNAL_FAILURE: The account could not be created because of an internal failure. Try again later. If the problem persists, contact Amazon Web Services Customer Support.</p> </li> <li> <p>MISSING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has not received Business Validation.</p> </li> <li> <p> MISSING_PAYMENT_INSTRUMENT: You must configure the management account with a valid payment method, such as a credit card.</p> </li> <li> <p>PENDING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization is still in the process of completing business license validation.</p> </li> <li> <p>UNKNOWN_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has an unknown issue with business license validation.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an Amazon Web Services account or an Amazon Web Services GovCloud (US) account in an organization.',
    required: [],
  })
  .openapi('CreateAccountStatus')

const CreateAccountResponseSchema = z
  .object({
    CreateAccountStatus: CreateAccountStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains details about the request to create an account. This response structure might not be fully populated when you first receive it because account creation is an asynchronous process. You can pass the returned <code>CreateAccountStatus</code> ID as a parameter to <a>DescribeCreateAccountStatus</a> to get status about the progress of the request at later times. You can also check the CloudTrail log for the <code>CreateAccountResult</code> event. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>Organizations User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CreateAccountStatus: { Id: 'car-examplecreateaccountrequestid111', State: 'IN_PROGRESS' },
    },
    required: [],
  })
  .openapi('CreateAccountResponse')

const EmailSchema = z
  .string()
  .regex(/[^\s@]+@[^\s@]+\.[^\s@]+/)
  .min(6)
  .max(64)
  .openapi('Email')

const RoleNameSchema = z
  .string()
  .regex(/[\w+=,.@-]{1,64}/)
  .max(64)
  .openapi('RoleName')

const IAMUserAccessToBillingSchema = z.enum(['ALLOW', 'DENY']).openapi('IAMUserAccessToBilling')

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
      z.any().openapi({ description: 'The key identifier, or name, of the tag.' }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.",
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<p>A custom key-value pair associated with a resource within your organization.</p> <p>You can attach tags to any of the following organization resources.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Organization root</p> </li> <li> <p>Policy</p> </li> </ul>',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const CreateAccountRequestSchema = z
  .object({
    Email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The email address of the owner to assign to the new member account. This email address must not already be associated with another Amazon Web Services account. You must use a valid email address to complete account creation.</p> <p>The rules for a valid email address:</p> <ul> <li> <p>The address must be a minimum of 6 and a maximum of 64 characters long.</p> </li> <li> <p>All characters must be 7-bit ASCII characters.</p> </li> <li> <p>There must be one and only one @ symbol, which separates the local name from the domain name.</p> </li> <li> <p>The local name can't contain any of the following characters:</p> <p>whitespace, \" ' ( ) &lt; &gt; [ ] : ; , \\ | % &amp;</p> </li> <li> <p>The local name can't begin with a dot (.)</p> </li> <li> <p>The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or dot (.)</p> </li> <li> <p>The domain name can't begin or end with a hyphen (-) or dot (.)</p> </li> <li> <p>The domain name must contain at least one dot</p> </li> </ul> <p>You can't access the root user of the account or remove an account that was created with an invalid email address.</p>",
        }),
    ),
    AccountName: CreateAccountNameSchema.and(
      z.any().openapi({ description: 'The friendly name of the member account.' }),
    ),
    RoleName: RoleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of an IAM role that Organizations automatically preconfigures in the new member account. This role trusts the management account, allowing users in the management account to assume the role, as permitted by the management account administrator. The role has administrator permissions in the new member account.</p> <p>If you don\'t specify this parameter, the role name defaults to <code>OrganizationAccountAccessRole</code>.</p> <p>For more information about how to use this role to access the member account, see the following links:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Accessing and Administering the Member Accounts in Your Organization</a> in the <i>Organizations User Guide</i> </p> </li> <li> <p>Steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">Tutorial: Delegate Access Across Amazon Web Services accounts Using IAM Roles</a> in the <i>IAM User Guide</i> </p> </li> </ul> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter. The pattern can include uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>',
        }),
    ).exactOptional(),
    IamUserAccessToBilling: IAMUserAccessToBillingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If set to <code>ALLOW</code>, the new account enables IAM users to access account billing information <i>if</i> they have the required permissions. If set to <code>DENY</code>, only the root user of the new account can access account billing information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p> <p>If you don\'t specify this parameter, the value defaults to <code>ALLOW</code>, and IAM users and roles with the required permissions can access billing information for the new account.</p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can\'t set it to <code>null</code>. For more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the Organizations User Guide.</p> <note> <p>If any one of the tags is not valid or if you exceed the maximum allowed number of tags for an account, then the entire request fails and the account is not created.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Email', 'AccountName'], title: 'CreateAccountRequest' })
  .openapi('CreateAccountRequest')

const FinalizingOrganizationExceptionSchema = z.any().openapi('FinalizingOrganizationException')

const CreateGovCloudAccountResponseSchema = z
  .object({ CreateAccountStatus: CreateAccountStatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateGovCloudAccountResponse')

const CreateGovCloudAccountRequestSchema = z
  .object({
    Email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the email address of the owner to assign to the new member account in the commercial Region. This email address must not already be associated with another Amazon Web Services account. You must use a valid email address to complete account creation.</p> <p>The rules for a valid email address:</p> <ul> <li> <p>The address must be a minimum of 6 and a maximum of 64 characters long.</p> </li> <li> <p>All characters must be 7-bit ASCII characters.</p> </li> <li> <p>There must be one and only one @ symbol, which separates the local name from the domain name.</p> </li> <li> <p>The local name can't contain any of the following characters:</p> <p>whitespace, \" ' ( ) &lt; &gt; [ ] : ; , \\ | % &amp;</p> </li> <li> <p>The local name can't begin with a dot (.)</p> </li> <li> <p>The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or dot (.)</p> </li> <li> <p>The domain name can't begin or end with a hyphen (-) or dot (.)</p> </li> <li> <p>The domain name must contain at least one dot</p> </li> </ul> <p>You can't access the root user of the account or remove an account that was created with an invalid email address. Like all request parameters for <code>CreateGovCloudAccount</code>, the request for the email address for the Amazon Web Services GovCloud (US) account originates from the commercial Region, not from the Amazon Web Services GovCloud (US) Region.</p>",
        }),
    ),
    AccountName: CreateAccountNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The friendly name of the member account. </p> <p>The account name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or dot (.) You can't separate characters with a dash (–).</p>",
        }),
    ),
    RoleName: RoleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional)</p> <p>The name of an IAM role that Organizations automatically preconfigures in the new member accounts in both the Amazon Web Services GovCloud (US) Region and in the commercial Region. This role trusts the management account, allowing users in the management account to assume the role, as permitted by the management account administrator. The role has administrator permissions in the new member account.</p> <p>If you don\'t specify this parameter, the role name defaults to <code>OrganizationAccountAccessRole</code>.</p> <p>For more information about how to use this role to access the member account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Accessing and Administering the Member Accounts in Your Organization</a> in the <i>Organizations User Guide</i> and steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">Tutorial: Delegate Access Across Amazon Web Services accounts Using IAM Roles</a> in the <i>IAM User Guide.</i> </p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter. The pattern can include uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>',
        }),
    ).exactOptional(),
    IamUserAccessToBilling: IAMUserAccessToBillingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If set to <code>ALLOW</code>, the new linked account in the commercial Region enables IAM users to access account billing information <i>if</i> they have the required permissions. If set to <code>DENY</code>, only the root user of the new account can access account billing information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>Amazon Web Services Billing and Cost Management User Guide.</i> </p> <p>If you don\'t specify this parameter, the value defaults to <code>ALLOW</code>, and IAM users and roles with the required permissions can access billing information for the new account.</p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tags that you want to attach to the newly created account. These tags are attached to the commercial account associated with the GovCloud account, and not to the GovCloud account itself. To add tags to the actual GovCloud account, call the <a>TagResource</a> operation in the GovCloud region after the new GovCloud account exists.</p> <p>For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can\'t set it to <code>null</code>. For more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the Organizations User Guide.</p> <note> <p>If any one of the tags is not valid or if you exceed the maximum allowed number of tags for an account, then the entire request fails and the account is not created.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Email', 'AccountName'], title: 'CreateGovCloudAccountRequest' })
  .openapi('CreateGovCloudAccountRequest')

const OrganizationIdSchema = z
  .string()
  .regex(/^o-[a-z0-9]{10,32}$/)
  .openapi('OrganizationId')

const OrganizationArnSchema = z
  .string()
  .regex(/^arn:aws:organizations::\d{12}:organization\/o-[a-z0-9]{10,32}/)
  .openapi('OrganizationArn')

const OrganizationFeatureSetSchema = z
  .enum(['ALL', 'CONSOLIDATED_BILLING'])
  .openapi('OrganizationFeatureSet')

const AccountArnSchema = z
  .string()
  .regex(/^arn:aws:organizations::\d{12}:account\/o-[a-z0-9]{10,32}\/\d{12}/)
  .openapi('AccountArn')

const PolicyTypeSchema = z
  .enum(['SERVICE_CONTROL_POLICY', 'TAG_POLICY', 'BACKUP_POLICY', 'AISERVICES_OPT_OUT_POLICY'])
  .openapi('PolicyType')

const PolicyTypeStatusSchema = z
  .enum(['ENABLED', 'PENDING_ENABLE', 'PENDING_DISABLE'])
  .openapi('PolicyTypeStatus')

const PolicyTypeSummarySchema = z
  .object({
    Type: PolicyTypeSchema.and(
      z.any().openapi({ description: 'The name of the policy type.' }),
    ).exactOptional(),
    Status: PolicyTypeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the policy type as it relates to the associated root. To attach a policy of the specified type to a root or to an OU or account in that root, it must be available in the organization and enabled for that root.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a policy type and its status in the associated root.',
    required: [],
  })
  .openapi('PolicyTypeSummary')

const PolicyTypesSchema = z.array(PolicyTypeSummarySchema).openapi('PolicyTypes')

const OrganizationSchema = z
  .object({
    Id: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of an organization.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits.</p>',
        }),
    ).exactOptional(),
    Arn: OrganizationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an organization.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>',
        }),
    ).exactOptional(),
    FeatureSet: OrganizationFeatureSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the functionality that currently is available to the organization. If set to "ALL", then all features are enabled and policies can be applied to accounts in the organization. If set to "CONSOLIDATED_BILLING", then only consolidated billing functionality is available. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>Organizations User Guide</i>.',
        }),
    ).exactOptional(),
    MasterAccountArn: AccountArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the account that is designated as the management account for the organization.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>',
        }),
    ).exactOptional(),
    MasterAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the management account of an organization.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>',
        }),
    ).exactOptional(),
    MasterAccountEmail: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address that is associated with the Amazon Web Services account that is designated as the management account for the organization.',
        }),
    ).exactOptional(),
    AvailablePolicyTypes: PolicyTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<important> <p>Do not use. This field is deprecated and doesn't provide complete information about the policies in your organization.</p> </important> <p>To determine the policies that are enabled and available for use in your organization, use the <a>ListRoots</a> operation instead.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .',
    required: [],
  })
  .openapi('Organization')

const CreateOrganizationResponseSchema = z
  .object({
    Organization: OrganizationSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains details about the newly created organization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Organization: {
        Arn: 'arn:aws:organizations::111111111111:organization/o-exampleorgid',
        AvailablePolicyTypes: [],
        FeatureSet: 'CONSOLIDATED_BILLING',
        Id: 'o-exampleorgid',
        MasterAccountArn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111',
        MasterAccountEmail: 'bill@example.com',
        MasterAccountId: '111111111111',
      },
    },
    required: [],
  })
  .openapi('CreateOrganizationResponse')

const CreateOrganizationRequestSchema = z
  .object({
    FeatureSet: OrganizationFeatureSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.</p> <ul> <li> <p> <code>CONSOLIDATED_BILLING</code>: All member accounts have their bills consolidated to and paid by the management account. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only">Consolidated billing</a> in the <i>Organizations User Guide.</i> </p> <p> The consolidated billing feature subset isn\'t available for organizations in the Amazon Web Services GovCloud (US) Region.</p> </li> <li> <p> <code>ALL</code>: In addition to all the features supported by the consolidated billing feature set, the management account can also apply any policy type to any member account in the organization. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-all">All features</a> in the <i>Organizations User Guide.</i> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateOrganizationRequest', required: [] })
  .openapi('CreateOrganizationRequest')

const AlreadyInOrganizationExceptionSchema = z.any().openapi('AlreadyInOrganizationException')

const OrganizationalUnitIdSchema = z
  .string()
  .regex(/^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$/)
  .max(68)
  .openapi('OrganizationalUnitId')

const OrganizationalUnitArnSchema = z
  .string()
  .regex(/^arn:aws:organizations::\d{12}:ou\/o-[a-z0-9]{10,32}\/ou-[0-9a-z]{4,32}-[0-9a-z]{8,32}/)
  .openapi('OrganizationalUnitArn')

const OrganizationalUnitNameSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(128)
  .openapi('OrganizationalUnitName')

const OrganizationalUnitSchema = z
  .object({
    Id: OrganizationalUnitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) associated with this OU.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p>',
        }),
    ).exactOptional(),
    Arn: OrganizationalUnitArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of this OU.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>',
        }),
    ).exactOptional(),
    Name: OrganizationalUnitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The friendly name of this OU.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about an organizational unit (OU). An OU is a container of Amazon Web Services accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.',
    required: [],
  })
  .openapi('OrganizationalUnit')

const CreateOrganizationalUnitResponseSchema = z
  .object({
    OrganizationalUnit: OrganizationalUnitSchema.and(
      z
        .any()
        .openapi({ description: 'A structure that contains details about the newly created OU.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      OrganizationalUnit: {
        Arn: 'arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111',
        Id: 'ou-examplerootid111-exampleouid111',
        Name: 'AccountingOU',
      },
    },
    required: [],
  })
  .openapi('CreateOrganizationalUnitResponse')

const ParentIdSchema = z
  .string()
  .regex(/^(r-[0-9a-z]{4,32})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$/)
  .max(100)
  .openapi('ParentId')

const CreateOrganizationalUnitRequestSchema = z
  .object({
    ParentId: ParentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the parent root or OU that you want to create the new OU in.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
    Name: OrganizationalUnitNameSchema.and(
      z.any().openapi({ description: 'The friendly name to assign to the new OU.' }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tags that you want to attach to the newly created OU. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can\'t set it to <code>null</code>. For more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the Organizations User Guide.</p> <note> <p>If any one of the tags is not valid or if you exceed the allowed number of tags for an OU, then the entire request fails and the OU is not created.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ParentId', 'Name'], title: 'CreateOrganizationalUnitRequest' })
  .openapi('CreateOrganizationalUnitRequest')

const DuplicateOrganizationalUnitExceptionSchema = z
  .any()
  .openapi('DuplicateOrganizationalUnitException')

const ParentNotFoundExceptionSchema = z.any().openapi('ParentNotFoundException')

const PolicyArnSchema = z
  .string()
  .regex(
    /^(arn:aws:organizations::\d{12}:policy\/o-[a-z0-9]{10,32}\/[0-9a-z_]+\/p-[0-9a-z]{10,32})|(arn:aws:organizations::aws:policy\/[0-9a-z_]+\/p-[0-9a-zA-Z_]{10,128})/,
  )
  .openapi('PolicyArn')

const PolicyNameSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(128)
  .openapi('PolicyName')

const PolicyDescriptionSchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(512)
  .openapi('PolicyDescription')

const AwsManagedPolicySchema = z.boolean().openapi('AwsManagedPolicy')

const PolicySummarySchema = z
  .object({
    Id: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>',
        }),
    ).exactOptional(),
    Arn: PolicyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the policy.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>',
        }),
    ).exactOptional(),
    Name: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The friendly name of the policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>',
        }),
    ).exactOptional(),
    Description: PolicyDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the policy.' }),
    ).exactOptional(),
    Type: PolicyTypeSchema.and(
      z.any().openapi({ description: 'The type of policy.' }),
    ).exactOptional(),
    AwsManaged: AwsManagedPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value that indicates whether the specified policy is an Amazon Web Services managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.',
    required: [],
  })
  .openapi('PolicySummary')

const PolicyContentSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(1000000)
  .openapi('PolicyContent')

const PolicySchema = z
  .object({
    PolicySummary: PolicySummarySchema.and(
      z
        .any()
        .openapi({ description: 'A structure that contains additional details about the policy.' }),
    ).exactOptional(),
    Content: PolicyContentSchema.and(
      z.any().openapi({ description: 'The text content of the policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.',
    required: [],
  })
  .openapi('Policy')

const CreatePolicyResponseSchema = z
  .object({
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains details about the newly created policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Policy: {
        Content: '{"Version":"2012-10-17","Statement":{"Effect":"Allow","Action":"s3:*"}}',
        PolicySummary: {
          Arn: 'arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111',
          Description: 'Allows delegation of all S3 actions',
          Name: 'AllowAllS3Actions',
          Type: 'SERVICE_CONTROL_POLICY',
        },
      },
    },
    required: [],
  })
  .openapi('CreatePolicyResponse')

const CreatePolicyRequestSchema = z
  .object({
    Content: PolicyContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy text content to add to the new policy. The text that you supply must adhere to the rules of the policy type you specify in the <code>Type</code> parameter.',
        }),
    ),
    Description: PolicyDescriptionSchema.and(
      z.any().openapi({ description: 'An optional description to assign to the policy.' }),
    ),
    Name: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The friendly name to assign to the policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>',
        }),
    ),
    Type: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of policy to create. You can specify one of the following values:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul>',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can\'t set it to <code>null</code>. For more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the Organizations User Guide.</p> <note> <p>If any one of the tags is not valid or if you exceed the allowed number of tags for a policy, then the entire request fails and the policy is not created.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Content', 'Description', 'Name', 'Type'], title: 'CreatePolicyRequest' })
  .openapi('CreatePolicyRequest')

const DuplicatePolicyExceptionSchema = z.any().openapi('DuplicatePolicyException')

const MalformedPolicyDocumentExceptionSchema = z.any().openapi('MalformedPolicyDocumentException')

const PolicyTypeNotAvailableForOrganizationExceptionSchema = z
  .any()
  .openapi('PolicyTypeNotAvailableForOrganizationException')

const DeclineHandshakeResponseSchema = z
  .object({
    Handshake: HandshakeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains details about the declined handshake. The state is updated to show the value <code>DECLINED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Handshake: {
        Action: 'INVITE',
        Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111',
        ExpirationTimestamp: '2016-12-15T19:27:58Z',
        Id: 'h-examplehandshakeid111',
        Parties: [
          { Id: '222222222222', Type: 'ACCOUNT' },
          { Id: 'o-exampleorgid', Type: 'ORGANIZATION' },
        ],
        RequestedTimestamp: '2016-11-30T19:27:58Z',
        Resources: [
          {
            Resources: [
              { Type: 'MASTER_EMAIL', Value: 'bill@example.com' },
              { Type: 'MASTER_NAME', Value: 'Master Account' },
            ],
            Type: 'ORGANIZATION',
            Value: 'o-exampleorgid',
          },
          { Type: 'ACCOUNT', Value: '222222222222' },
          {
            Type: 'NOTES',
            Value: "This is an invitation to Susan's account to join the Bill's organization.",
          },
        ],
        State: 'DECLINED',
      },
    },
    required: [],
  })
  .openapi('DeclineHandshakeResponse')

const DeclineHandshakeRequestSchema = z
  .object({
    HandshakeId: HandshakeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the handshake that you want to decline. You can get the ID from the <a>ListHandshakesForAccount</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['HandshakeId'], title: 'DeclineHandshakeRequest' })
  .openapi('DeclineHandshakeRequest')

const OrganizationNotEmptyExceptionSchema = z.any().openapi('OrganizationNotEmptyException')

const DeleteOrganizationalUnitRequestSchema = z
  .object({
    OrganizationalUnitId: OrganizationalUnitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the organizational unit that you want to delete. You can get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['OrganizationalUnitId'], title: 'DeleteOrganizationalUnitRequest' })
  .openapi('DeleteOrganizationalUnitRequest')

const OrganizationalUnitNotEmptyExceptionSchema = z
  .any()
  .openapi('OrganizationalUnitNotEmptyException')

const OrganizationalUnitNotFoundExceptionSchema = z
  .any()
  .openapi('OrganizationalUnitNotFoundException')

const DeletePolicyRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the policy that you want to delete. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a> operations.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>',
        }),
    ),
  })
  .openapi({ required: ['PolicyId'], title: 'DeletePolicyRequest' })
  .openapi('DeletePolicyRequest')

const PolicyInUseExceptionSchema = z.any().openapi('PolicyInUseException')

const ResourcePolicyNotFoundExceptionSchema = z.any().openapi('ResourcePolicyNotFoundException')

const ServicePrincipalSchema = z
  .string()
  .regex(/[\w+=,.@-]*/)
  .min(1)
  .max(128)
  .openapi('ServicePrincipal')

const DeregisterDelegatedAdministratorRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account ID number of the member account in the organization that you want to deregister as a delegated administrator.',
        }),
    ),
    ServicePrincipal: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The service principal name of an Amazon Web Services service for which the account is a delegated administrator.</p> <p>Delegated administrator privileges are revoked for only the specified Amazon Web Services service from the member account. If the specified service is the only service for which the member account is a delegated administrator, the operation also revokes Organizations read action permissions.</p>',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'ServicePrincipal'],
    title: 'DeregisterDelegatedAdministratorRequest',
  })
  .openapi('DeregisterDelegatedAdministratorRequest')

const AccountNotRegisteredExceptionSchema = z.any().openapi('AccountNotRegisteredException')

const AccountNameSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(128)
  .openapi('AccountName')

const AccountStatusSchema = z
  .enum(['ACTIVE', 'SUSPENDED', 'PENDING_CLOSURE'])
  .openapi('AccountStatus')

const AccountJoinedMethodSchema = z.enum(['INVITED', 'CREATED']).openapi('AccountJoinedMethod')

const AccountSchema = z
  .object({
    Id: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>',
        }),
    ).exactOptional(),
    Arn: AccountArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the account.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>',
        }),
    ).exactOptional(),
    Email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address associated with the Amazon Web Services account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for this parameter is a string of characters that represents a standard internet email address.</p>',
        }),
    ).exactOptional(),
    Name: AccountNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The friendly name of the account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>',
        }),
    ).exactOptional(),
    Status: AccountStatusSchema.and(
      z.any().openapi({ description: 'The status of the account in the organization.' }),
    ).exactOptional(),
    JoinedMethod: AccountJoinedMethodSchema.and(
      z.any().openapi({ description: 'The method by which the account joined the organization.' }),
    ).exactOptional(),
    JoinedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date the account became a part of the organization.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about an Amazon Web Services account that is a member of an organization.',
    required: [],
  })
  .openapi('Account')

const DescribeAccountResponseSchema = z
  .object({
    Account: AccountSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains information about the requested account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Account: {
        Arn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/555555555555',
        Email: 'anika@example.com',
        Id: '555555555555',
        Name: 'Beta Account',
      },
    },
    required: [],
  })
  .openapi('DescribeAccountResponse')

const DescribeAccountRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the Amazon Web Services account that you want information about. You can get the ID from the <a>ListAccounts</a> or <a>ListAccountsForParent</a> operations.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['AccountId'], title: 'DescribeAccountRequest' })
  .openapi('DescribeAccountRequest')

const DescribeCreateAccountStatusResponseSchema = z
  .object({
    CreateAccountStatus: CreateAccountStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the current status of an account creation request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CreateAccountStatus: {
        AccountId: '333333333333',
        Id: 'car-exampleaccountcreationrequestid',
        State: 'SUCCEEDED',
      },
    },
    required: [],
  })
  .openapi('DescribeCreateAccountStatusResponse')

const DescribeCreateAccountStatusRequestSchema = z
  .object({
    CreateAccountRequestId: CreateAccountRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the <code>Id</code> value that uniquely identifies the <code>CreateAccount</code> request. You can get the value from the <code>CreateAccountStatus.Id</code> response in an earlier <a>CreateAccount</a> request, or from the <a>ListCreateAccountStatus</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a create account request ID string requires "car-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['CreateAccountRequestId'], title: 'DescribeCreateAccountStatusRequest' })
  .openapi('DescribeCreateAccountStatusRequest')

const CreateAccountStatusNotFoundExceptionSchema = z
  .any()
  .openapi('CreateAccountStatusNotFoundException')

const EffectivePolicyTypeSchema = z
  .enum(['TAG_POLICY', 'BACKUP_POLICY', 'AISERVICES_OPT_OUT_POLICY'])
  .openapi('EffectivePolicyType')

const EffectivePolicySchema = z
  .object({
    PolicyContent: PolicyContentSchema.and(
      z.any().openapi({ description: 'The text content of the policy.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time of the last update to this policy.' }),
    ).exactOptional(),
    TargetId: PolicyTargetIdSchema.and(
      z.any().openapi({ description: 'The account ID of the policy target. ' }),
    ).exactOptional(),
    PolicyType: EffectivePolicyTypeSchema.and(
      z.any().openapi({ description: 'The policy type.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account.',
    required: [],
  })
  .openapi('EffectivePolicy')

const DescribeEffectivePolicyResponseSchema = z
  .object({
    EffectivePolicy: EffectivePolicySchema.and(
      z.any().openapi({ description: 'The contents of the effective policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEffectivePolicyResponse')

const DescribeEffectivePolicyRequestSchema = z
  .object({
    PolicyType: EffectivePolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of policy that you want information about. You can specify one of the following values:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul>',
        }),
    ),
    TargetId: PolicyTargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "When you're signed in as the management account, specify the ID of the account that you want details about. Specifying an organization root or organizational unit (OU) as the target is not supported.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyType'], title: 'DescribeEffectivePolicyRequest' })
  .openapi('DescribeEffectivePolicyRequest')

const EffectivePolicyNotFoundExceptionSchema = z.any().openapi('EffectivePolicyNotFoundException')

const DescribeHandshakeResponseSchema = z
  .object({
    Handshake: HandshakeSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains information about the specified handshake.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Handshake: {
        Action: 'INVITE',
        Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111',
        ExpirationTimestamp: '2016-11-30T17:24:58.046Z',
        Id: 'h-examplehandshakeid111',
        Parties: [
          { Id: 'o-exampleorgid', Type: 'ORGANIZATION' },
          { Id: '333333333333', Type: 'ACCOUNT' },
        ],
        RequestedTimestamp: '2016-11-30T17:24:58.046Z',
        Resources: [
          {
            Resources: [
              { Type: 'MASTER_EMAIL', Value: 'bill@example.com' },
              { Type: 'MASTER_NAME', Value: 'Master Account' },
            ],
            Type: 'ORGANIZATION',
            Value: 'o-exampleorgid',
          },
          { Type: 'ACCOUNT', Value: '333333333333' },
        ],
        State: 'OPEN',
      },
    },
    required: [],
  })
  .openapi('DescribeHandshakeResponse')

const DescribeHandshakeRequestSchema = z
  .object({
    HandshakeId: HandshakeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the handshake that you want information about. You can get the ID from the original call to <a>InviteAccountToOrganization</a>, or from a call to <a>ListHandshakesForAccount</a> or <a>ListHandshakesForOrganization</a>.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['HandshakeId'], title: 'DescribeHandshakeRequest' })
  .openapi('DescribeHandshakeRequest')

const DescribeOrganizationResponseSchema = z
  .object({
    Organization: OrganizationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A structure that contains information about the organization.</p> <important> <p>The <code>AvailablePolicyTypes</code> part of the response is deprecated, and you shouldn't use it in your apps. It doesn't include any policy type supported by Organizations other than SCPs. To determine which policy types are enabled in your organization, use the <code> <a>ListRoots</a> </code> operation.</p> </important>",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Organization: {
        Arn: 'arn:aws:organizations::111111111111:organization/o-exampleorgid',
        AvailablePolicyTypes: [{ Status: 'ENABLED', Type: 'SERVICE_CONTROL_POLICY' }],
        FeatureSet: 'ALL',
        Id: 'o-exampleorgid',
        MasterAccountArn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111',
        MasterAccountEmail: 'bill@example.com',
      },
    },
    required: [],
  })
  .openapi('DescribeOrganizationResponse')

const DescribeOrganizationalUnitResponseSchema = z
  .object({
    OrganizationalUnit: OrganizationalUnitSchema.and(
      z.any().openapi({ description: 'A structure that contains details about the specified OU.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      OrganizationalUnit: {
        Arn: 'arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111',
        Id: 'ou-examplerootid111-exampleouid111',
        Name: 'Accounting Group',
      },
    },
    required: [],
  })
  .openapi('DescribeOrganizationalUnitResponse')

const DescribeOrganizationalUnitRequestSchema = z
  .object({
    OrganizationalUnitId: OrganizationalUnitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the organizational unit that you want details about. You can get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['OrganizationalUnitId'], title: 'DescribeOrganizationalUnitRequest' })
  .openapi('DescribeOrganizationalUnitRequest')

const DescribePolicyResponseSchema = z
  .object({
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({ description: 'A structure that contains details about the specified policy.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Policy: {
        Content:
          '{\\n  \\"Version\\": \\"2012-10-17\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}',
        PolicySummary: {
          Arn: 'arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111',
          AwsManaged: false,
          Description: 'Enables admins to delegate S3 permissions',
          Id: 'p-examplepolicyid111',
          Name: 'AllowAllS3Actions',
          Type: 'SERVICE_CONTROL_POLICY',
        },
      },
    },
    required: [],
  })
  .openapi('DescribePolicyResponse')

const DescribePolicyRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the policy that you want details about. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a> operations.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>',
        }),
    ),
  })
  .openapi({ required: ['PolicyId'], title: 'DescribePolicyRequest' })
  .openapi('DescribePolicyRequest')

const ResourcePolicyIdSchema = z
  .string()
  .regex(/^rp-[0-9a-zA-Z_]{4,128}$/)
  .max(131)
  .openapi('ResourcePolicyId')

const ResourcePolicyArnSchema = z
  .string()
  .regex(
    /^arn:[a-z0-9][a-z0-9-.]{0,62}:organizations::\d{12}:resourcepolicy\/o-[a-z0-9]{10,32}\/rp-[0-9a-zA-Z_]{4,128}/,
  )
  .openapi('ResourcePolicyArn')

const ResourcePolicySummarySchema = z
  .object({
    Id: ResourcePolicyIdSchema.and(
      z.any().openapi({ description: 'The unique identifier (ID) of the resource policy.' }),
    ).exactOptional(),
    Arn: ResourcePolicyArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains resource policy ID and Amazon Resource Name (ARN).',
    required: [],
  })
  .openapi('ResourcePolicySummary')

const ResourcePolicyContentSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(40000)
  .openapi('ResourcePolicyContent')

const ResourcePolicySchema = z
  .object({
    ResourcePolicySummary: ResourcePolicySummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains resource policy ID and Amazon Resource Name (ARN).',
        }),
    ).exactOptional(),
    Content: ResourcePolicyContentSchema.and(
      z.any().openapi({ description: 'The policy text of the resource policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains details about a resource policy.',
    required: [],
  })
  .openapi('ResourcePolicy')

const DescribeResourcePolicyResponseSchema = z
  .object({
    ResourcePolicy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({ description: 'A structure that contains details about the resource policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourcePolicyResponse')

const DetachPolicyRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the policy you want to detach. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a> operations.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>',
        }),
    ),
    TargetId: PolicyTargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the root, OU, or account that you want to detach the policy from. You can get the ID from the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a> operations.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Account</b> - A string that consists of exactly 12 digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['PolicyId', 'TargetId'], title: 'DetachPolicyRequest' })
  .openapi('DetachPolicyRequest')

const PolicyNotAttachedExceptionSchema = z.any().openapi('PolicyNotAttachedException')

const DisableAWSServiceAccessRequestSchema = z
  .object({
    ServicePrincipal: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service principal name of the Amazon Web Services service for which you want to disable integration with your organization. This is typically in the form of a URL, such as <code> <i>service-abbreviation</i>.amazonaws.com</code>.',
        }),
    ),
  })
  .openapi({ required: ['ServicePrincipal'], title: 'DisableAWSServiceAccessRequest' })
  .openapi('DisableAWSServiceAccessRequest')

const RootIdSchema = z
  .string()
  .regex(/^r-[0-9a-z]{4,32}$/)
  .max(34)
  .openapi('RootId')

const RootArnSchema = z
  .string()
  .regex(/^arn:aws:organizations::\d{12}:root\/o-[a-z0-9]{10,32}\/r-[0-9a-z]{4,32}/)
  .openapi('RootArn')

const RootNameSchema = z.string().min(1).max(128).openapi('RootName')

const RootSchema = z
  .object({
    Id: RootIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) for the root.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by from 4 to 32 lowercase letters or digits.</p>',
        }),
    ).exactOptional(),
    Arn: RootArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the root.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>',
        }),
    ).exactOptional(),
    Name: RootNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The friendly name of the root.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>',
        }),
    ).exactOptional(),
    PolicyTypes: PolicyTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The types of policies that are currently enabled for the root and therefore can be attached to the root or to its OUs or accounts.</p> <note> <p>Even if a policy type is shown as available in the organization, you can separately enable and disable them at the root level by using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. Use <a>DescribeOrganization</a> to see the availability of the policy types in that organization.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. The root contains every Amazon Web Services account in the organization.',
    required: [],
  })
  .openapi('Root')

const DisablePolicyTypeResponseSchema = z
  .object({
    Root: RootSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that shows the root with the updated list of enabled policy types.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Root: {
        Arn: 'arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111',
        Id: 'r-examplerootid111',
        Name: 'Root',
        PolicyTypes: [],
      },
    },
    required: [],
  })
  .openapi('DisablePolicyTypeResponse')

const DisablePolicyTypeRequestSchema = z
  .object({
    RootId: RootIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the root in which you want to disable a policy type. You can get the ID from the <a>ListRoots</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by from 4 to 32 lowercase letters or digits.</p>',
        }),
    ),
    PolicyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The policy type that you want to disable in this root. You can specify one of the following values:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['RootId', 'PolicyType'], title: 'DisablePolicyTypeRequest' })
  .openapi('DisablePolicyTypeRequest')

const RootNotFoundExceptionSchema = z.any().openapi('RootNotFoundException')

const EnableAWSServiceAccessRequestSchema = z
  .object({
    ServicePrincipal: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service principal name of the Amazon Web Services service for which you want to enable integration with your organization. This is typically in the form of a URL, such as <code> <i>service-abbreviation</i>.amazonaws.com</code>.',
        }),
    ),
  })
  .openapi({ required: ['ServicePrincipal'], title: 'EnableAWSServiceAccessRequest' })
  .openapi('EnableAWSServiceAccessRequest')

const EnableAllFeaturesResponseSchema = z
  .object({
    Handshake: HandshakeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains details about the handshake created to support this request to enable all features in the organization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Handshake: {
        Action: 'ENABLE_ALL_FEATURES',
        Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/enable_all_features/h-examplehandshakeid111',
        ExpirationTimestamp: '2017-02-28T09:35:40.05Z',
        Id: 'h-examplehandshakeid111',
        Parties: [{ Id: 'o-exampleorgid', Type: 'ORGANIZATION' }],
        RequestedTimestamp: '2017-02-13T09:35:40.05Z',
        Resources: [{ Type: 'ORGANIZATION', Value: 'o-exampleorgid' }],
        State: 'REQUESTED',
      },
    },
    required: [],
  })
  .openapi('EnableAllFeaturesResponse')

const EnableAllFeaturesRequestSchema = z
  .object({})
  .openapi({ title: 'EnableAllFeaturesRequest' })
  .openapi('EnableAllFeaturesRequest')

const EnablePolicyTypeResponseSchema = z
  .object({
    Root: RootSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that shows the root with the updated list of enabled policy types.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Root: {
        Arn: 'arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111',
        Id: 'r-examplerootid111',
        Name: 'Root',
        PolicyTypes: [{ Status: 'ENABLED', Type: 'SERVICE_CONTROL_POLICY' }],
      },
    },
    required: [],
  })
  .openapi('EnablePolicyTypeResponse')

const EnablePolicyTypeRequestSchema = z
  .object({
    RootId: RootIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the root in which you want to enable a policy type. You can get the ID from the <a>ListRoots</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by from 4 to 32 lowercase letters or digits.</p>',
        }),
    ),
    PolicyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The policy type that you want to enable. You can specify one of the following values:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['RootId', 'PolicyType'], title: 'EnablePolicyTypeRequest' })
  .openapi('EnablePolicyTypeRequest')

const PolicyTypeAlreadyEnabledExceptionSchema = z.any().openapi('PolicyTypeAlreadyEnabledException')

const InviteAccountToOrganizationResponseSchema = z
  .object({
    Handshake: HandshakeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains details about the handshake that is created to support this invitation request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Handshake: {
        Action: 'INVITE',
        Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111',
        ExpirationTimestamp: '2017-02-16T09:36:05.02Z',
        Id: 'h-examplehandshakeid111',
        Parties: [
          { Id: 'o-exampleorgid', Type: 'ORGANIZATION' },
          { Id: 'juan@example.com', Type: 'EMAIL' },
        ],
        RequestedTimestamp: '2017-02-01T09:36:05.02Z',
        Resources: [
          {
            Resources: [
              { Type: 'MASTER_EMAIL', Value: 'bill@amazon.com' },
              { Type: 'MASTER_NAME', Value: 'Org Master Account' },
              { Type: 'ORGANIZATION_FEATURE_SET', Value: 'FULL' },
            ],
            Type: 'ORGANIZATION',
            Value: 'o-exampleorgid',
          },
          { Type: 'EMAIL', Value: 'juan@example.com' },
        ],
        State: 'OPEN',
      },
    },
    required: [],
  })
  .openapi('InviteAccountToOrganizationResponse')

const HandshakeNotesSchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(1024)
  .openapi('HandshakeNotes')

const InviteAccountToOrganizationRequestSchema = z
  .object({
    Target: HandshakePartySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier (ID) of the Amazon Web Services account that you want to invite to join your organization. This is a JSON object that contains the following elements:</p> <p> <code>{ "Type": "ACCOUNT", "Id": "&lt;<i> <b>account id number</b> </i>&gt;" }</code> </p> <p>If you use the CLI, you can submit this as a single string, similar to the following example:</p> <p> <code>--target Id=123456789012,Type=ACCOUNT</code> </p> <p>If you specify <code>"Type": "ACCOUNT"</code>, you must provide the Amazon Web Services account ID number as the <code>Id</code>. If you specify <code>"Type": "EMAIL"</code>, you must specify the email address that is associated with the account.</p> <p> <code>--target Id=diego@example.com,Type=EMAIL</code> </p>',
        }),
    ),
    Notes: HandshakeNotesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information that you want to include in the generated email to the recipient account owner.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tags that you want to attach to the account when it becomes a member of the organization. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can\'t set it to <code>null</code>. For more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the Organizations User Guide.</p> <important> <p>Any tags in the request are checked for compliance with any applicable tag policies when the request is made. The request is rejected if the tags in the request don\'t match the requirements of the policy at that time. Tag policy compliance is <i> <b>not</b> </i> checked again when the invitation is accepted and the tags are actually attached to the account. That means that if the tag policy changes between the invitation and the acceptance, then that tags could potentially be non-compliant.</p> </important> <note> <p>If any one of the tags is not valid or if you exceed the allowed number of tags for an account, then the entire request fails and invitations are not sent.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Target'], title: 'InviteAccountToOrganizationRequest' })
  .openapi('InviteAccountToOrganizationRequest')

const AccountOwnerNotVerifiedExceptionSchema = z.any().openapi('AccountOwnerNotVerifiedException')

const DuplicateHandshakeExceptionSchema = z.any().openapi('DuplicateHandshakeException')

const MasterCannotLeaveOrganizationExceptionSchema = z
  .any()
  .openapi('MasterCannotLeaveOrganizationException')

const EnabledServicePrincipalSchema = z
  .object({
    ServicePrincipal: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service principal. This is typically in the form of a URL, such as: <code> <i>servicename</i>.amazonaws.com</code>.',
        }),
    ).exactOptional(),
    DateEnabled: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the service principal was enabled for integration with Organizations.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that contains details of a service principal that represents an Amazon Web Services service that is enabled to integrate with Organizations.',
    required: [],
  })
  .openapi('EnabledServicePrincipal')

const EnabledServicePrincipalsSchema = z
  .array(EnabledServicePrincipalSchema)
  .openapi('EnabledServicePrincipals')

const NextTokenSchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(100000)
  .openapi('NextToken')

const ListAWSServiceAccessForOrganizationResponseSchema = z
  .object({
    EnabledServicePrincipals: EnabledServicePrincipalsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the service principals for the services that are enabled to integrate with your organization. Each principal is a structure that includes the name and the date that it was enabled for integration with Organizations.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAWSServiceAccessForOrganizationResponse')

const MaxResultsSchema = z.int().min(1).max(20).openapi('MaxResults')

const ListAWSServiceAccessForOrganizationRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAWSServiceAccessForOrganizationRequest', required: [] })
  .openapi('ListAWSServiceAccessForOrganizationRequest')

const AccountsSchema = z.array(AccountSchema).openapi('Accounts')

const ListAccountsResponseSchema = z
  .object({
    Accounts: AccountsSchema.and(
      z.any().openapi({ description: 'A list of objects in the organization.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Accounts: [
        {
          Arn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111',
          Email: 'bill@example.com',
          Id: '111111111111',
          JoinedMethod: 'INVITED',
          JoinedTimestamp: '20161215T193015Z',
          Name: 'Master Account',
          Status: 'ACTIVE',
        },
        {
          Arn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/222222222222',
          Email: 'alice@example.com',
          Id: '222222222222',
          JoinedMethod: 'INVITED',
          JoinedTimestamp: '20161215T210221Z',
          Name: 'Developer Account',
          Status: 'ACTIVE',
        },
        {
          Arn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333',
          Email: 'juan@example.com',
          Id: '333333333333',
          JoinedMethod: 'INVITED',
          JoinedTimestamp: '20161215T210347Z',
          Name: 'Test Account',
          Status: 'ACTIVE',
        },
        {
          Arn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444',
          Email: 'anika@example.com',
          Id: '444444444444',
          JoinedMethod: 'INVITED',
          JoinedTimestamp: '20161215T210332Z',
          Name: 'Production Account',
          Status: 'ACTIVE',
        },
      ],
    },
    required: [],
  })
  .openapi('ListAccountsResponse')

const ListAccountsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAccountsRequest', required: [] })
  .openapi('ListAccountsRequest')

const ListAccountsForParentResponseSchema = z
  .object({
    Accounts: AccountsSchema.and(
      z.any().openapi({ description: 'A list of the accounts in the specified root or OU.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Accounts: [
        {
          Arn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333',
          Email: 'juan@example.com',
          Id: '333333333333',
          JoinedMethod: 'INVITED',
          JoinedTimestamp: 1481835795.536,
          Name: 'Development Account',
          Status: 'ACTIVE',
        },
        {
          Arn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444',
          Email: 'anika@example.com',
          Id: '444444444444',
          JoinedMethod: 'INVITED',
          JoinedTimestamp: 1481835812.143,
          Name: 'Test Account',
          Status: 'ACTIVE',
        },
      ],
    },
    required: [],
  })
  .openapi('ListAccountsForParentResponse')

const ListAccountsForParentRequestSchema = z
  .object({
    ParentId: ParentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier (ID) for the parent root or organization unit (OU) whose accounts you want to list.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ParentId'], title: 'ListAccountsForParentRequest' })
  .openapi('ListAccountsForParentRequest')

const ChildIdSchema = z
  .string()
  .regex(/^(\d{12})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$/)
  .max(100)
  .openapi('ChildId')

const ChildTypeSchema = z.enum(['ACCOUNT', 'ORGANIZATIONAL_UNIT']).openapi('ChildType')

const ChildSchema = z
  .object({
    Id: ChildIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of this child entity.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the following:</p> <ul> <li> <p> <b>Account</b> - A string that consists of exactly 12 digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Type: ChildTypeSchema.and(
      z.any().openapi({ description: 'The type of this child entity.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains a list of child entities, either OUs or accounts.',
    required: [],
  })
  .openapi('Child')

const ChildrenSchema = z.array(ChildSchema).openapi('Children')

const ListChildrenResponseSchema = z
  .object({
    Children: ChildrenSchema.and(
      z.any().openapi({ description: 'The list of children of the specified parent container.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Children: [
        { Id: 'ou-examplerootid111-exampleouid111', Type: 'ORGANIZATIONAL_UNIT' },
        { Id: 'ou-examplerootid111-exampleouid222', Type: 'ORGANIZATIONAL_UNIT' },
      ],
    },
    required: [],
  })
  .openapi('ListChildrenResponse')

const ListChildrenRequestSchema = z
  .object({
    ParentId: ParentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) for the parent root or OU whose children you want to list.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
    ChildType: ChildTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Filters the output to include only the specified child type.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ParentId', 'ChildType'], title: 'ListChildrenRequest' })
  .openapi('ListChildrenRequest')

const CreateAccountStatusesSchema = z
  .array(CreateAccountStatusSchema)
  .openapi('CreateAccountStatuses')

const ListCreateAccountStatusResponseSchema = z
  .object({
    CreateAccountStatuses: CreateAccountStatusesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects with details about the requests. Certain elements, such as the accountId number, are present in the output only after the account has been successfully created.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CreateAccountStatuses: [
        {
          AccountName: 'Production Account',
          Id: 'car-exampleaccountcreationrequestid2',
          RequestedTimestamp: '2017-01-15T13:45:23.01Z',
          State: 'IN_PROGRESS',
        },
      ],
    },
    required: [],
  })
  .openapi('ListCreateAccountStatusResponse')

const CreateAccountStatesSchema = z.array(CreateAccountStateSchema).openapi('CreateAccountStates')

const ListCreateAccountStatusRequestSchema = z
  .object({
    States: CreateAccountStatesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of one or more states that you want included in the response. If this parameter isn't present, all requests are included in the response.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCreateAccountStatusRequest', required: [] })
  .openapi('ListCreateAccountStatusRequest')

const DelegatedAdministratorSchema = z
  .object({
    Id: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: "The unique identifier (ID) of the delegated administrator's account.",
        }),
    ).exactOptional(),
    Arn: AccountArnSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) of the delegated administrator's account.",
        }),
    ).exactOptional(),
    Email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address that is associated with the delegated administrator's Amazon Web Services account.",
        }),
    ).exactOptional(),
    Name: AccountNameSchema.and(
      z
        .any()
        .openapi({ description: "The friendly name of the delegated administrator's account." }),
    ).exactOptional(),
    Status: AccountStatusSchema.and(
      z
        .any()
        .openapi({
          description: "The status of the delegated administrator's account in the organization.",
        }),
    ).exactOptional(),
    JoinedMethod: AccountJoinedMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            "The method by which the delegated administrator's account joined the organization.",
        }),
    ).exactOptional(),
    JoinedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date when the delegated administrator's account became a part of the organization.",
        }),
    ).exactOptional(),
    DelegationEnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date when the account was made a delegated administrator.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about the delegated administrator.', required: [] })
  .openapi('DelegatedAdministrator')

const DelegatedAdministratorsSchema = z
  .array(DelegatedAdministratorSchema)
  .openapi('DelegatedAdministrators')

const ListDelegatedAdministratorsResponseSchema = z
  .object({
    DelegatedAdministrators: DelegatedAdministratorsSchema.and(
      z
        .any()
        .openapi({ description: 'The list of delegated administrators in your organization.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDelegatedAdministratorsResponse')

const ListDelegatedAdministratorsRequestSchema = z
  .object({
    ServicePrincipal: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies a service principal name. If specified, then the operation lists the delegated administrators only for the specified service.</p> <p>If you don't specify a service principal, the operation lists all delegated administrators for all services in your organization.</p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDelegatedAdministratorsRequest', required: [] })
  .openapi('ListDelegatedAdministratorsRequest')

const DelegatedServiceSchema = z
  .object({
    ServicePrincipal: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Amazon Web Services service that can request an operation for the specified service. This is typically in the form of a URL, such as: <code> <i>servicename</i>.amazonaws.com</code>.',
        }),
    ).exactOptional(),
    DelegationEnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the account became a delegated administrator for this service. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the Amazon Web Services service for which the account is a delegated administrator.',
    required: [],
  })
  .openapi('DelegatedService')

const DelegatedServicesSchema = z.array(DelegatedServiceSchema).openapi('DelegatedServices')

const ListDelegatedServicesForAccountResponseSchema = z
  .object({
    DelegatedServices: DelegatedServicesSchema.and(
      z
        .any()
        .openapi({
          description: 'The services for which the account is a delegated administrator.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDelegatedServicesForAccountResponse')

const ListDelegatedServicesForAccountRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account ID number of a delegated administrator account in the organization.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AccountId'], title: 'ListDelegatedServicesForAccountRequest' })
  .openapi('ListDelegatedServicesForAccountRequest')

const HandshakesSchema = z.array(HandshakeSchema).openapi('Handshakes')

const ListHandshakesForAccountResponseSchema = z
  .object({
    Handshakes: HandshakesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a>Handshake</a> objects with details about each of the handshakes that is associated with the specified account.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Handshakes: [
        {
          Action: 'INVITE',
          Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111',
          ExpirationTimestamp: '2017-01-28T14:35:23.3Z',
          Id: 'h-examplehandshakeid111',
          Parties: [
            { Id: 'o-exampleorgid', Type: 'ORGANIZATION' },
            { Id: 'juan@example.com', Type: 'EMAIL' },
          ],
          RequestedTimestamp: '2017-01-13T14:35:23.3Z',
          Resources: [
            {
              Resources: [
                { Type: 'MASTER_EMAIL', Value: 'bill@amazon.com' },
                { Type: 'MASTER_NAME', Value: 'Org Master Account' },
                { Type: 'ORGANIZATION_FEATURE_SET', Value: 'FULL' },
              ],
              Type: 'ORGANIZATION',
              Value: 'o-exampleorgid',
            },
            { Type: 'EMAIL', Value: 'juan@example.com' },
          ],
          State: 'OPEN',
        },
      ],
    },
    required: [],
  })
  .openapi('ListHandshakesForAccountResponse')

const HandshakeFilterSchema = z
  .object({
    ActionType: ActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the type of handshake action.</p> <p>If you specify <code>ActionType</code>, you cannot also specify <code>ParentHandshakeId</code>.</p>',
        }),
    ).exactOptional(),
    ParentHandshakeId: HandshakeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the parent handshake. Only used for handshake types that are a child of another type.</p> <p>If you specify <code>ParentHandshakeId</code>, you cannot also specify <code>ActionType</code>.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the criteria that are used to select the handshakes for the operation.',
    required: [],
  })
  .openapi('HandshakeFilter')

const ListHandshakesForAccountRequestSchema = z
  .object({
    Filter: HandshakeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the handshakes that you want included in the response. The default is all types. Use the <code>ActionType</code> element to limit the output to only a specified type, such as <code>INVITE</code>, <code>ENABLE_ALL_FEATURES</code>, or <code>APPROVE_ALL_FEATURES</code>. Alternatively, for the <code>ENABLE_ALL_FEATURES</code> handshake that generates a separate child handshake for each member account, you can specify <code>ParentHandshakeId</code> to see only the handshakes that were generated by that parent request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListHandshakesForAccountRequest', required: [] })
  .openapi('ListHandshakesForAccountRequest')

const ListHandshakesForOrganizationResponseSchema = z
  .object({
    Handshakes: HandshakesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a>Handshake</a> objects with details about each of the handshakes that are associated with an organization.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Handshakes: [
        {
          Action: 'INVITE',
          Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111',
          ExpirationTimestamp: '2017-01-28T14:35:23.3Z',
          Id: 'h-examplehandshakeid111',
          Parties: [
            { Id: 'o-exampleorgid', Type: 'ORGANIZATION' },
            { Id: 'juan@example.com', Type: 'EMAIL' },
          ],
          RequestedTimestamp: '2017-01-13T14:35:23.3Z',
          Resources: [
            {
              Resources: [
                { Type: 'MASTER_EMAIL', Value: 'bill@amazon.com' },
                { Type: 'MASTER_NAME', Value: 'Org Master Account' },
                { Type: 'ORGANIZATION_FEATURE_SET', Value: 'FULL' },
              ],
              Type: 'ORGANIZATION',
              Value: 'o-exampleorgid',
            },
            { Type: 'EMAIL', Value: 'juan@example.com' },
          ],
          State: 'OPEN',
        },
        {
          Action: 'INVITE',
          Arn: 'arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111',
          ExpirationTimestamp: '2017-01-28T14:35:23.3Z',
          Id: 'h-examplehandshakeid222',
          Parties: [
            { Id: 'o-exampleorgid', Type: 'ORGANIZATION' },
            { Id: 'anika@example.com', Type: 'EMAIL' },
          ],
          RequestedTimestamp: '2017-01-13T14:35:23.3Z',
          Resources: [
            {
              Resources: [
                { Type: 'MASTER_EMAIL', Value: 'bill@example.com' },
                { Type: 'MASTER_NAME', Value: 'Master Account' },
              ],
              Type: 'ORGANIZATION',
              Value: 'o-exampleorgid',
            },
            { Type: 'EMAIL', Value: 'anika@example.com' },
            {
              Type: 'NOTES',
              Value: "This is an invitation to Anika's account to join Bill's organization.",
            },
          ],
          State: 'ACCEPTED',
        },
      ],
    },
    required: [],
  })
  .openapi('ListHandshakesForOrganizationResponse')

const ListHandshakesForOrganizationRequestSchema = z
  .object({
    Filter: HandshakeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A filter of the handshakes that you want included in the response. The default is all types. Use the <code>ActionType</code> element to limit the output to only a specified type, such as <code>INVITE</code>, <code>ENABLE-ALL-FEATURES</code>, or <code>APPROVE-ALL-FEATURES</code>. Alternatively, for the <code>ENABLE-ALL-FEATURES</code> handshake that generates a separate child handshake for each member account, you can specify the <code>ParentHandshakeId</code> to see only the handshakes that were generated by that parent request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListHandshakesForOrganizationRequest', required: [] })
  .openapi('ListHandshakesForOrganizationRequest')

const OrganizationalUnitsSchema = z.array(OrganizationalUnitSchema).openapi('OrganizationalUnits')

const ListOrganizationalUnitsForParentResponseSchema = z
  .object({
    OrganizationalUnits: OrganizationalUnitsSchema.and(
      z.any().openapi({ description: 'A list of the OUs in the specified root or parent OU.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      OrganizationalUnits: [
        {
          Arn: 'arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examlerootid111-exampleouid111',
          Id: 'ou-examplerootid111-exampleouid111',
          Name: 'Development',
        },
        {
          Arn: 'arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examlerootid111-exampleouid222',
          Id: 'ou-examplerootid111-exampleouid222',
          Name: 'Production',
        },
      ],
    },
    required: [],
  })
  .openapi('ListOrganizationalUnitsForParentResponse')

const ListOrganizationalUnitsForParentRequestSchema = z
  .object({
    ParentId: ParentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the root or OU whose child OUs you want to list.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ParentId'], title: 'ListOrganizationalUnitsForParentRequest' })
  .openapi('ListOrganizationalUnitsForParentRequest')

const ParentTypeSchema = z.enum(['ROOT', 'ORGANIZATIONAL_UNIT']).openapi('ParentType')

const ParentSchema = z
  .object({
    Id: ParentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the parent entity.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Type: ParentTypeSchema.and(
      z.any().openapi({ description: 'The type of the parent entity.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.',
    required: [],
  })
  .openapi('Parent')

const ParentsSchema = z.array(ParentSchema).openapi('Parents')

const ListParentsResponseSchema = z
  .object({
    Parents: ParentsSchema.and(
      z.any().openapi({ description: 'A list of parents for the specified child account or OU.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Parents: [{ Id: 'ou-examplerootid111-exampleouid111', Type: 'ORGANIZATIONAL_UNIT' }],
    },
    required: [],
  })
  .openapi('ListParentsResponse')

const ListParentsRequestSchema = z
  .object({
    ChildId: ChildIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the OU or account whose parent containers you want to list. Don\'t specify a root.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the following:</p> <ul> <li> <p> <b>Account</b> - A string that consists of exactly 12 digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ChildId'], title: 'ListParentsRequest' })
  .openapi('ListParentsRequest')

const ChildNotFoundExceptionSchema = z.any().openapi('ChildNotFoundException')

const PoliciesSchema = z.array(PolicySummarySchema).openapi('Policies')

const ListPoliciesResponseSchema = z
  .object({
    Policies: PoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of policies that match the filter criteria in the request. The output list doesn't include the policy contents. To see the content for a policy, see <a>DescribePolicy</a>.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Policies: [
        {
          Arn: 'arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111',
          AwsManaged: false,
          Description:
            'Enables account admins to delegate permissions for any S3 actions to users and roles in their accounts.',
          Id: 'p-examplepolicyid111',
          Name: 'AllowAllS3Actions',
          Type: 'SERVICE_CONTROL_POLICY',
        },
        {
          Arn: 'arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid222',
          AwsManaged: false,
          Description:
            'Enables account admins to delegate permissions for any EC2 actions to users and roles in their accounts.',
          Id: 'p-examplepolicyid222',
          Name: 'AllowAllEC2Actions',
          Type: 'SERVICE_CONTROL_POLICY',
        },
        {
          Arn: 'arn:aws:organizations::aws:policy/service_control_policy/p-FullAWSAccess',
          AwsManaged: true,
          Description: 'Allows access to every operation',
          Id: 'p-FullAWSAccess',
          Name: 'FullAWSAccess',
          Type: 'SERVICE_CONTROL_POLICY',
        },
      ],
    },
    required: [],
  })
  .openapi('ListPoliciesResponse')

const ListPoliciesRequestSchema = z
  .object({
    Filter: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the type of policy that you want to include in the response. You must specify one of the following values:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Filter'], title: 'ListPoliciesRequest' })
  .openapi('ListPoliciesRequest')

const ListPoliciesForTargetResponseSchema = z
  .object({
    Policies: PoliciesSchema.and(
      z
        .any()
        .openapi({ description: 'The list of policies that match the criteria in the request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Policies: [
        {
          Arn: 'arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid222',
          AwsManaged: false,
          Description:
            'Enables account admins to delegate permissions for any EC2 actions to users and roles in their accounts.',
          Id: 'p-examplepolicyid222',
          Name: 'AllowAllEC2Actions',
          Type: 'SERVICE_CONTROL_POLICY',
        },
      ],
    },
    required: [],
  })
  .openapi('ListPoliciesForTargetResponse')

const ListPoliciesForTargetRequestSchema = z
  .object({
    TargetId: PolicyTargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the root, organizational unit, or account whose policies you want to list.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Account</b> - A string that consists of exactly 12 digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
    Filter: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of policy that you want to include in the returned list. You must specify one of the following values:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetId', 'Filter'], title: 'ListPoliciesForTargetRequest' })
  .openapi('ListPoliciesForTargetRequest')

const RootsSchema = z.array(RootSchema).openapi('Roots')

const ListRootsResponseSchema = z
  .object({
    Roots: RootsSchema.and(
      z.any().openapi({ description: 'A list of roots that are defined in an organization.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Roots: [
        {
          Arn: 'arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111',
          Id: 'r-examplerootid111',
          Name: 'Root',
          PolicyTypes: [{ Status: 'ENABLED', Type: 'SERVICE_CONTROL_POLICY' }],
        },
      ],
    },
    required: [],
  })
  .openapi('ListRootsResponse')

const ListRootsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRootsRequest', required: [] })
  .openapi('ListRootsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags that are assigned to the resource.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TaggableResourceIdSchema = z
  .string()
  .regex(
    /^(r-[0-9a-z]{4,32})|(\d{12})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})|(^p-[0-9a-zA-Z_]{8,128})|(^rp-[0-9a-zA-Z_]{4,128})$/,
  )
  .max(130)
  .openapi('TaggableResourceId')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceId: TaggableResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the resource with the tags to list.</p> <p>You can specify any of the following taggable resources.</p> <ul> <li> <p>Amazon Web Services account – specify the account ID number.</p> </li> <li> <p>Organizational unit – specify the OU ID that begins with <code>ou-</code> and looks similar to: <code>ou-<i>1a2b-34uvwxyz</i> </code> </p> </li> <li> <p>Root – specify the root ID that begins with <code>r-</code> and looks similar to: <code>r-<i>1a2b</i> </code> </p> </li> <li> <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks similar to: <code>p-<i>12abcdefg3</i> </code> </p> </li> </ul>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceId'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const GenericArnSchema = z
  .string()
  .regex(/^arn:aws:organizations::.+:.+/)
  .openapi('GenericArn')

const TargetNameSchema = z.string().min(1).max(128).openapi('TargetName')

const TargetTypeSchema = z.enum(['ACCOUNT', 'ORGANIZATIONAL_UNIT', 'ROOT']).openapi('TargetType')

const PolicyTargetSummarySchema = z
  .object({
    TargetId: PolicyTargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the policy target.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Account</b> - A string that consists of exactly 12 digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Arn: GenericArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the policy target.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>',
        }),
    ).exactOptional(),
    Name: TargetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The friendly name of the policy target.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>',
        }),
    ).exactOptional(),
    Type: TargetTypeSchema.and(
      z.any().openapi({ description: 'The type of the policy target.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a root, OU, or account that a policy is attached to.',
    required: [],
  })
  .openapi('PolicyTargetSummary')

const PolicyTargetsSchema = z.array(PolicyTargetSummarySchema).openapi('PolicyTargets')

const ListTargetsForPolicyResponseSchema = z
  .object({
    Targets: PolicyTargetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of structures, each of which contains details about one of the entities to which the specified policy is attached.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Targets: [
        {
          Arn: 'arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111',
          Name: 'Root',
          TargetId: 'r-examplerootid111',
          Type: 'ROOT',
        },
        {
          Arn: 'arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333;',
          Name: 'Developer Test Account',
          TargetId: '333333333333',
          Type: 'ACCOUNT',
        },
        {
          Arn: 'arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111',
          Name: 'Accounting',
          TargetId: 'ou-examplerootid111-exampleouid111',
          Type: 'ORGANIZATIONAL_UNIT',
        },
      ],
    },
    required: [],
  })
  .openapi('ListTargetsForPolicyResponse')

const ListTargetsForPolicyRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the policy whose attachments you want to know.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyId'], title: 'ListTargetsForPolicyRequest' })
  .openapi('ListTargetsForPolicyRequest')

const MoveAccountRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the account that you want to move.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>',
        }),
    ),
    SourceParentId: ParentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the root or organizational unit that you want to move the account from.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
    DestinationParentId: ParentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the root or organizational unit that you want to move the account to.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p> <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.</p> </li> <li> <p> <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'SourceParentId', 'DestinationParentId'],
    title: 'MoveAccountRequest',
  })
  .openapi('MoveAccountRequest')

const SourceParentNotFoundExceptionSchema = z.any().openapi('SourceParentNotFoundException')

const DestinationParentNotFoundExceptionSchema = z
  .any()
  .openapi('DestinationParentNotFoundException')

const DuplicateAccountExceptionSchema = z.any().openapi('DuplicateAccountException')

const PutResourcePolicyResponseSchema = z
  .object({
    ResourcePolicy: ResourcePolicySchema.and(
      z
        .any()
        .openapi({ description: 'A structure that contains details about the resource policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutResourcePolicyResponse')

const PutResourcePolicyRequestSchema = z
  .object({
    Content: ResourcePolicyContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'If provided, the new content for the resource policy. The text must be correctly formatted JSON that complies with the syntax for the resource policy\'s type. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service Control Policy Syntax</a> in the <i>Organizations User Guide.</i> ',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of tags that you want to attach to the newly created resource policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can\'t set it to <code>null</code>. For more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the Organizations User Guide.</p> <note> <p>Calls with tags apply to the initial creation of the resource policy, otherwise an exception is thrown. If any one of the tags is not valid or if you exceed the allowed number of tags for the resource policy, then the entire request fails and the resource policy is not created. </p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Content'], title: 'PutResourcePolicyRequest' })
  .openapi('PutResourcePolicyRequest')

const RegisterDelegatedAdministratorRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account ID number of the member account in the organization to register as a delegated administrator.',
        }),
    ),
    ServicePrincipal: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service principal of the Amazon Web Services service for which you want to make the member account a delegated administrator.',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'ServicePrincipal'],
    title: 'RegisterDelegatedAdministratorRequest',
  })
  .openapi('RegisterDelegatedAdministratorRequest')

const AccountAlreadyRegisteredExceptionSchema = z.any().openapi('AccountAlreadyRegisteredException')

const RemoveAccountFromOrganizationRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the member account that you want to remove from the organization.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>',
        }),
    ),
  })
  .openapi({ required: ['AccountId'], title: 'RemoveAccountFromOrganizationRequest' })
  .openapi('RemoveAccountFromOrganizationRequest')

const TagResourceRequestSchema = z
  .object({
    ResourceId: TaggableResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the resource to add a tag to.</p> <p>You can specify any of the following taggable resources.</p> <ul> <li> <p>Amazon Web Services account – specify the account ID number.</p> </li> <li> <p>Organizational unit – specify the OU ID that begins with <code>ou-</code> and looks similar to: <code>ou-<i>1a2b-34uvwxyz</i> </code> </p> </li> <li> <p>Root – specify the root ID that begins with <code>r-</code> and looks similar to: <code>r-<i>1a2b</i> </code> </p> </li> <li> <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks similar to: <code>p-<i>12abcdefg3</i> </code> </p> </li> </ul>',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of tags to add to the specified resource.</p> <p>For each tag in the list, you must specify both a tag key and a value. The value can be an empty string, but you can't set it to <code>null</code>.</p> <note> <p>If any one of the tags is not valid or if you exceed the maximum allowed number of tags for a resource, then the entire request fails.</p> </note>",
        }),
    ),
  })
  .openapi({ required: ['ResourceId', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const UntagResourceRequestSchema = z
  .object({
    ResourceId: TaggableResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the resource to remove a tag from.</p> <p>You can specify any of the following taggable resources.</p> <ul> <li> <p>Amazon Web Services account – specify the account ID number.</p> </li> <li> <p>Organizational unit – specify the OU ID that begins with <code>ou-</code> and looks similar to: <code>ou-<i>1a2b-34uvwxyz</i> </code> </p> </li> <li> <p>Root – specify the root ID that begins with <code>r-</code> and looks similar to: <code>r-<i>1a2b</i> </code> </p> </li> <li> <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks similar to: <code>p-<i>12abcdefg3</i> </code> </p> </li> </ul>',
        }),
    ),
    TagKeys: TagKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of keys for tags to remove from the specified resource.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateOrganizationalUnitResponseSchema = z
  .object({
    OrganizationalUnit: OrganizationalUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the details about the specified OU, including its new name.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      OrganizationalUnit: {
        Arn: 'arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111',
        Id: 'ou-examplerootid111-exampleouid111',
        Name: 'AccountingOU',
      },
    },
    required: [],
  })
  .openapi('UpdateOrganizationalUnitResponse')

const UpdateOrganizationalUnitRequestSchema = z
  .object({
    OrganizationalUnitId: OrganizationalUnitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the OU that you want to rename. You can get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.</p>',
        }),
    ),
    Name: OrganizationalUnitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new name that you want to assign to the OU.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationalUnitId'], title: 'UpdateOrganizationalUnitRequest' })
  .openapi('UpdateOrganizationalUnitRequest')

const UpdatePolicyResponseSchema = z
  .object({
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains details about the updated policy, showing the requested changes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Policy: {
        Content:
          '{ \\"Version\\": \\"2012-10-17\\", \\"Statement\\": { \\"Effect\\": \\"Allow\\", \\"Action\\": \\"s3:*\\", \\"Resource\\": \\"*\\" } }',
        PolicySummary: {
          Arn: 'arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111',
          AwsManaged: false,
          Description: 'This description replaces the original.',
          Id: 'p-examplepolicyid111',
          Name: 'Renamed-Policy',
          Type: 'SERVICE_CONTROL_POLICY',
        },
      },
    },
    required: [],
  })
  .openapi('UpdatePolicyResponse')

const UpdatePolicyRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier (ID) of the policy that you want to update.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>',
        }),
    ),
    Name: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If provided, the new name for the policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>',
        }),
    ).exactOptional(),
    Description: PolicyDescriptionSchema.and(
      z.any().openapi({ description: 'If provided, the new description for the policy.' }),
    ).exactOptional(),
    Content: PolicyContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'If provided, the new content for the policy. The text must be correctly formatted JSON that complies with the syntax for the policy\'s type. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service Control Policy Syntax</a> in the <i>Organizations User Guide.</i> ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyId'], title: 'UpdatePolicyRequest' })
  .openapi('UpdatePolicyRequest')

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

export const postXAmzTargetAWSOrganizationsV20161128AcceptHandshakeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake',
  description:
    '<p>Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request.</p> <p>You can only call this operation by the following principals when they also have the relevant IAM permissions:</p> <ul> <li> <p> <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from the member account.</p> <p>The user who calls the API for an invitation to join must have the <code>organizations:AcceptHandshake</code> permission. If you enabled all features in the organization, the user must also have the <code>iam:CreateServiceLinkedRole</code> permission so that Organizations can create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide</i>.</p> </li> <li> <p> <b>Enable all features final confirmation</b> handshake: only a principal from the management account.</p> <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an Amazon Web Services account to join your organization</a> in the <i>Organizations User Guide.</i> For more information about requests to enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features in your organization</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it\'s deleted.</p>',
  operationId: 'AcceptHandshake',
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
        .literal('AWSOrganizationsV20161128.AcceptHandshake')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.AcceptHandshake'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AcceptHandshakeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptHandshakeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'HandshakeConstraintViolationException',
      content: { 'application/json': { schema: HandshakeConstraintViolationExceptionSchema } },
    },
    483: {
      description: 'HandshakeNotFoundException',
      content: { 'application/json': { schema: HandshakeNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidHandshakeTransitionException',
      content: { 'application/json': { schema: InvalidHandshakeTransitionExceptionSchema } },
    },
    485: {
      description: 'HandshakeAlreadyInStateException',
      content: { 'application/json': { schema: HandshakeAlreadyInStateExceptionSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    488: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    489: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    490: {
      description: 'AccessDeniedForDependencyException',
      content: { 'application/json': { schema: AccessDeniedForDependencyExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128AttachPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy',
  description:
    '<p>Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy. Refer to the <i>Organizations User Guide</i> for information about each policy type:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul> <p>This operation can be called only from the organization\'s management account.</p>',
  operationId: 'AttachPolicy',
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
        .literal('AWSOrganizationsV20161128.AttachPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.AttachPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AttachPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'DuplicatePolicyAttachmentException',
      content: { 'application/json': { schema: DuplicatePolicyAttachmentExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    487: {
      description: 'PolicyTypeNotEnabledException',
      content: { 'application/json': { schema: PolicyTypeNotEnabledExceptionSchema } },
    },
    488: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    489: {
      description: 'TargetNotFoundException',
      content: { 'application/json': { schema: TargetNotFoundExceptionSchema } },
    },
    490: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    491: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
    492: {
      description: 'PolicyChangesInProgressException',
      content: { 'application/json': { schema: PolicyChangesInProgressExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128CancelHandshakeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake',
  description:
    "<p>Cancels a handshake. Canceling a handshake sets the handshake state to <code>CANCELED</code>.</p> <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient can no longer respond to that handshake.</p> <p>After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>",
  operationId: 'CancelHandshake',
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
        .literal('AWSOrganizationsV20161128.CancelHandshake')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.CancelHandshake'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelHandshakeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelHandshakeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'HandshakeNotFoundException',
      content: { 'application/json': { schema: HandshakeNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidHandshakeTransitionException',
      content: { 'application/json': { schema: InvalidHandshakeTransitionExceptionSchema } },
    },
    484: {
      description: 'HandshakeAlreadyInStateException',
      content: { 'application/json': { schema: HandshakeAlreadyInStateExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128CloseAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount',
  description:
    '<p>Closes an Amazon Web Services member account within an organization. You can close an account when <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features are enabled </a>. You can\'t close the management account with this API. This is an asynchronous request that Amazon Web Services performs in the background. Because <code>CloseAccount</code> operates asynchronously, it can return a successful completion message even though account closure might still be in progress. You need to wait a few minutes before the account is fully closed. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>AccountId</code> that you sent in the <code>CloseAccount</code> request to provide as a parameter to the <a>DescribeAccount</a> operation. </p> <p>While the close account request is in progress, Account status will indicate PENDING_CLOSURE. When the close account request completes, the status will change to SUSPENDED. </p> </li> <li> <p>Check the CloudTrail log for the <code>CloseAccountResult</code> event that gets published after the account closes successfully. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <note> <ul> <li> <p>You can close only 10% of member accounts, between 10 and 200, within a rolling 30 day period. This quota is not bound by a calendar month, but starts when you close an account.</p> <p>After you reach this limit, you can close additional accounts in the Billing console. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/close-account.html">Closing an account</a> in the Amazon Web Services Billing and Cost Management User Guide.</p> </li> <li> <p>To reinstate a closed account, contact Amazon Web Services Support within the 90-day grace period while the account is in SUSPENDED status. </p> </li> <li> <p>If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud (US) account, the <code>CloseAccount</code> request will close both accounts. To learn important pre-closure details, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/Closing-govcloud-account.html"> Closing an Amazon Web Services GovCloud (US) account</a> in the <i> Amazon Web Services GovCloud User Guide</i>.</p> </li> </ul> </note> <p>For more information about closing accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide.</i> </p>',
  operationId: 'CloseAccount',
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
        .literal('AWSOrganizationsV20161128.CloseAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.CloseAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CloseAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AccountAlreadyClosedException',
      content: { 'application/json': { schema: AccountAlreadyClosedExceptionSchema } },
    },
    482: {
      description: 'AccountNotFoundException',
      content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
    },
    483: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    487: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    488: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    489: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    490: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128CreateAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount',
  description:
    '<p>Creates an Amazon Web Services account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that Amazon Web Services performs in the background. Because <code>CreateAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>Id</code> value of the <code>CreateAccountStatus</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>The user who calls the API to create an account must have the <code>organizations:CreateAccount</code> permission. If you enabled all features in the organization, Organizations creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide</i>.</p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>Organizations preconfigures the new member account with a role (named <code>OrganizationAccountAccessRole</code> by default) that grants users in the management account administrator permissions in the new member account. Principals in the management account can assume the role. Organizations clones the company name and address information for the new account from the organization\'s management account.</p> <p>This operation can be called only from the organization\'s management account.</p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>Organizations User Guide</i>.</p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>Using <code>CreateAccount</code> to create multiple temporary accounts isn\'t recommended. You can only close an account from the Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>',
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
      'X-Amz-Target': z
        .literal('AWSOrganizationsV20161128.CreateAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.CreateAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAccountResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'FinalizingOrganizationException',
      content: { 'application/json': { schema: FinalizingOrganizationExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount',
  description:
    '<p>This action is available if all of the following are true:</p> <ul> <li> <p>You\'re authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For more information on the Amazon Web Services GovCloud (US) Region, see the <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html"> <i>Amazon Web Services GovCloud User Guide</i>.</a> </p> </li> <li> <p>You already have an account in the Amazon Web Services GovCloud (US) Region that is paired with a management account of an organization in the commercial Region.</p> </li> <li> <p>You call this action from the management account of your organization in the commercial Region.</p> </li> <li> <p>You have the <code>organizations:CreateGovCloudAccount</code> permission. </p> </li> </ul> <p>Organizations automatically creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide.</i> </p> <p>Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also do the following:</p> <ul> <li> <p>Verify that CloudTrail is enabled to store logs.</p> </li> <li> <p>Create an Amazon S3 bucket for CloudTrail log storage.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying CloudTrail Is Enabled</a> in the <i>Amazon Web Services GovCloud User Guide</i>. </p> </li> </ul> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission. The tags are attached to the commercial account associated with the GovCloud account, rather than the GovCloud account itself. To add tags to the GovCloud account, call the <a>TagResource</a> operation in the GovCloud Region after the new GovCloud account exists.</p> <p>You call this action from the management account of your organization in the commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US) Region. After the account is created, the management account of an organization in the Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the <i>Amazon Web Services GovCloud User Guide.</i> </p> <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that Amazon Web Services performs in the background. Because <code>CreateGovCloudAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p/> <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts: a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the commercial Region for billing and support purposes. The account in the commercial Region is automatically a member of the organization whose credentials made the request. Both accounts are associated with the same email address.</p> <p>A role is created in the new account in the commercial Region that allows the management account in the organization in the commercial Region to assume it. An Amazon Web Services GovCloud (US) account is then created and associated with the commercial account that you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management account of the commercial organization. For more information and to view a diagram that explains how account access works, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the <i>Amazon Web Services GovCloud User Guide.</i> </p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account is <i>not</i> automatically collected. This includes a payment method and signing the end user license agreement (EULA). If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary accounts isn\'t recommended. You can only close an account from the Amazon Web Services Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>',
  operationId: 'CreateGovCloudAccount',
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
        .literal('AWSOrganizationsV20161128.CreateGovCloudAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.CreateGovCloudAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGovCloudAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGovCloudAccountResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'FinalizingOrganizationException',
      content: { 'application/json': { schema: FinalizingOrganizationExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128CreateOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization',
  description:
    '<p>Creates an Amazon Web Services organization. The account whose user is calling the <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">management account</a> of the new organization.</p> <p>This operation must be called using credentials from the account that is to become the new organization\'s management account. The principal must also have the relevant IAM permissions.</p> <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the <code>FeatureSet</code> parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default, and you can\'t use organization policies</p>',
  operationId: 'CreateOrganization',
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
        .literal('AWSOrganizationsV20161128.CreateOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.CreateOrganization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateOrganizationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AlreadyInOrganizationException',
      content: { 'application/json': { schema: AlreadyInOrganizationExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'AccessDeniedForDependencyException',
      content: { 'application/json': { schema: AccessDeniedForDependencyExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit',
  description:
    '<p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five.</p> <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the <i>Organizations User Guide.</i> </p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization\'s management account.</p>',
  operationId: 'CreateOrganizationalUnit',
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
        .literal('AWSOrganizationsV20161128.CreateOrganizationalUnit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrganizationsV20161128.CreateOrganizationalUnit'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOrganizationalUnitRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateOrganizationalUnitResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'DuplicateOrganizationalUnitException',
      content: { 'application/json': { schema: DuplicateOrganizationalUnitExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'ParentNotFoundException',
      content: { 'application/json': { schema: ParentNotFoundExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    488: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128CreatePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy',
  description:
    '<p>Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual Amazon Web Services account.</p> <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing Organization Policies</a>.</p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization\'s management account.</p>',
  operationId: 'CreatePolicy',
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
        .literal('AWSOrganizationsV20161128.CreatePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.CreatePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePolicyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'DuplicatePolicyException',
      content: { 'application/json': { schema: DuplicatePolicyExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'MalformedPolicyDocumentException',
      content: { 'application/json': { schema: MalformedPolicyDocumentExceptionSchema } },
    },
    487: {
      description: 'PolicyTypeNotAvailableForOrganizationException',
      content: {
        'application/json': { schema: PolicyTypeNotAvailableForOrganizationExceptionSchema },
      },
    },
    488: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    489: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    490: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DeclineHandshakeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake',
  description:
    "<p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code> and effectively deactivates the request.</p> <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a> instead. The originator can't reactivate a declined request, but can reinitiate the process with a new handshake request.</p> <p>After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>",
  operationId: 'DeclineHandshake',
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
        .literal('AWSOrganizationsV20161128.DeclineHandshake')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DeclineHandshake'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeclineHandshakeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeclineHandshakeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'HandshakeNotFoundException',
      content: { 'application/json': { schema: HandshakeNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidHandshakeTransitionException',
      content: { 'application/json': { schema: InvalidHandshakeTransitionExceptionSchema } },
    },
    484: {
      description: 'HandshakeAlreadyInStateException',
      content: { 'application/json': { schema: HandshakeAlreadyInStateExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DeleteOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization',
  description:
    'Deletes the organization. You can delete an organization only by using credentials from the management account. The organization must be empty of member accounts.',
  operationId: 'DeleteOrganization',
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
        .literal('AWSOrganizationsV20161128.DeleteOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DeleteOrganization'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'OrganizationNotEmptyException',
      content: { 'application/json': { schema: OrganizationNotEmptyExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit',
  description:
    "<p>Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete.</p> <p>This operation can be called only from the organization's management account.</p>",
  operationId: 'DeleteOrganizationalUnit',
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
        .literal('AWSOrganizationsV20161128.DeleteOrganizationalUnit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrganizationsV20161128.DeleteOrganizationalUnit'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteOrganizationalUnitRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'OrganizationalUnitNotEmptyException',
      content: { 'application/json': { schema: OrganizationalUnitNotEmptyExceptionSchema } },
    },
    485: {
      description: 'OrganizationalUnitNotFoundException',
      content: { 'application/json': { schema: OrganizationalUnitNotFoundExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DeletePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy',
  description:
    "<p>Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts.</p> <p>This operation can be called only from the organization's management account.</p>",
  operationId: 'DeletePolicy',
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
        .literal('AWSOrganizationsV20161128.DeletePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DeletePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'PolicyInUseException',
      content: { 'application/json': { schema: PolicyInUseExceptionSchema } },
    },
    485: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy',
  description:
    "<p>Deletes the resource policy from your organization.</p> <p>You can only call this operation from the organization's management account.</p>",
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
        .literal('AWSOrganizationsV20161128.DeleteResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DeleteResourcePolicy'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    482: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    486: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    487: {
      description: 'ResourcePolicyNotFoundException',
      content: { 'application/json': { schema: ResourcePolicyNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator',
    description:
      '<p>Removes the specified member Amazon Web Services account as a delegated administrator for the specified Amazon Web Services service.</p> <important> <p>Deregistering a delegated administrator can have unintended impacts on the functionality of the enabled Amazon Web Services service. See the documentation for the enabled service before you deregister a delegated administrator so that you understand any potential impacts.</p> </important> <p>You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with Organizations</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization\'s management account.</p>',
    operationId: 'DeregisterDelegatedAdministrator',
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
          .literal('AWSOrganizationsV20161128.DeregisterDelegatedAdministrator')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrganizationsV20161128.DeregisterDelegatedAdministrator'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeregisterDelegatedAdministratorRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'AccountNotFoundException',
        content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
      },
      482: {
        description: 'AccountNotRegisteredException',
        content: { 'application/json': { schema: AccountNotRegisteredExceptionSchema } },
      },
      483: {
        description: 'AWSOrganizationsNotInUseException',
        content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
      },
      484: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      485: {
        description: 'ConstraintViolationException',
        content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
      },
      486: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      487: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      488: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      489: {
        description: 'UnsupportedAPIEndpointException',
        content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSOrganizationsV20161128DescribeAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount',
  description:
    "<p>Retrieves Organizations-related information about the specified account.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'DescribeAccount',
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
        .literal('AWSOrganizationsV20161128.DescribeAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DescribeAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccountResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AccountNotFoundException',
      content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
    },
    482: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus',
  description:
    "<p>Retrieves the current status of an asynchronous request to create an account.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'DescribeCreateAccountStatus',
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
        .literal('AWSOrganizationsV20161128.DescribeCreateAccountStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrganizationsV20161128.DescribeCreateAccountStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCreateAccountStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCreateAccountStatusResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'CreateAccountStatusNotFoundException',
      content: { 'application/json': { schema: CreateAccountStatusNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy',
  description:
    '<p>Returns the contents of the effective policy for specified policy type and account. The effective policy is the aggregation of any policies of the specified type that the account inherits, plus any policy of that type that is directly attached to the account.</p> <p>This operation applies only to policy types <i>other</i> than service control policies (SCPs).</p> <p>For more information about policy inheritance, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance Works</a> in the <i>Organizations User Guide</i>.</p> <p>This operation can be called only from the organization\'s management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>',
  operationId: 'DescribeEffectivePolicy',
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
        .literal('AWSOrganizationsV20161128.DescribeEffectivePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DescribeEffectivePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEffectivePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEffectivePolicyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'TargetNotFoundException',
      content: { 'application/json': { schema: TargetNotFoundExceptionSchema } },
    },
    486: {
      description: 'EffectivePolicyNotFoundException',
      content: { 'application/json': { schema: EffectivePolicyNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    488: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DescribeHandshakeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake',
  description:
    "<p>Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original <a>InviteAccountToOrganization</a> operation that generated the handshake.</p> <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> for only 30 days after they change to that state. They're then deleted and no longer accessible.</p> <p>This operation can be called from any account in the organization.</p>",
  operationId: 'DescribeHandshake',
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
        .literal('AWSOrganizationsV20161128.DescribeHandshake')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DescribeHandshake'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeHandshakeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeHandshakeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'HandshakeNotFoundException',
      content: { 'application/json': { schema: HandshakeNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DescribeOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization',
  description:
    "<p>Retrieves information about the organization that the user's account belongs to.</p> <p>This operation can be called from any account in the organization.</p> <note> <p>Even if a policy type is shown as available in the organization, you can disable it separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified root.</p> </note>",
  operationId: 'DescribeOrganization',
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
        .literal('AWSOrganizationsV20161128.DescribeOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DescribeOrganization'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOrganizationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit',
  description:
    "<p>Retrieves information about an organizational unit (OU).</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'DescribeOrganizationalUnit',
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
        .literal('AWSOrganizationsV20161128.DescribeOrganizationalUnit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrganizationsV20161128.DescribeOrganizationalUnit'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeOrganizationalUnitRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOrganizationalUnitResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'OrganizationalUnitNotFoundException',
      content: { 'application/json': { schema: OrganizationalUnitNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DescribePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy',
  description:
    "<p>Retrieves information about a policy.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'DescribePolicy',
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
        .literal('AWSOrganizationsV20161128.DescribePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DescribePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePolicyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy',
  description:
    "<p>Retrieves information about a resource policy.</p> <p>You can only call this operation from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'DescribeResourcePolicy',
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
        .literal('AWSOrganizationsV20161128.DescribeResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DescribeResourcePolicy'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourcePolicyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    482: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    485: {
      description: 'ResourcePolicyNotFoundException',
      content: { 'application/json': { schema: ResourcePolicyNotFoundExceptionSchema } },
    },
    486: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DetachPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy',
  description:
    '<p>Detaches a policy from a target root, organizational unit (OU), or account.</p> <important> <p>If the policy being detached is a service control policy (SCP), the changes to permissions for Identity and Access Management (IAM) users and roles in affected accounts are immediate.</p> </important> <p>Every root, OU, and account must have at least one SCP attached. If you want to replace the default <code>FullAWSAccess</code> policy with an SCP that limits the permissions that can be delegated, you must attach the replacement SCP before you can remove the default SCP. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_allowlist">allow list</a>". If you instead attach a second SCP and leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect": "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in the <code>FullAWSAccess</code> policy (or any other attached SCP), you\'re using the authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_denylist">deny list</a>".</p> <p>This operation can be called only from the organization\'s management account.</p>',
  operationId: 'DetachPolicy',
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
        .literal('AWSOrganizationsV20161128.DetachPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DetachPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetachPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'PolicyNotAttachedException',
      content: { 'application/json': { schema: PolicyNotAttachedExceptionSchema } },
    },
    486: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    488: {
      description: 'TargetNotFoundException',
      content: { 'application/json': { schema: TargetNotFoundExceptionSchema } },
    },
    489: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    490: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
    491: {
      description: 'PolicyChangesInProgressException',
      content: { 'application/json': { schema: PolicyChangesInProgressExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess',
  description:
    "<p>Disables the integration of an Amazon Web Services service (the service that is specified by <code>ServicePrincipal</code>) with Organizations. When you disable integration, the specified service no longer can create a <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html\">service-linked role</a> in <i>new</i> accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations.</p> <important> <p>We <b> <i>strongly recommend</i> </b> that you don't use this command to disable integration between Organizations and the specified Amazon Web Services service. Instead, use the console or commands that are provided by the specified service. This lets the trusted service perform any required initialization when enabling trusted access, such as creating any required resources and any required clean up of resources when disabling trusted access. </p> <p>For information about how to disable trusted service access to your organization using the trusted service, see the <b>Learn more</b> link under the <b>Supports Trusted Access</b> column at <a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html\">Amazon Web Services services that you can use with Organizations</a>. on this page.</p> <p>If you disable access by using this command, it causes the following actions to occur:</p> <ul> <li> <p>The service can no longer create a service-linked role in the accounts in your organization. This means that the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations. </p> </li> <li> <p>The service can no longer perform tasks in the member accounts in the organization, unless those operations are explicitly permitted by the IAM policies that are attached to your roles. This includes any data aggregation from the member accounts to the management account, or to a delegated administrator account, where relevant.</p> </li> <li> <p>Some services detect this and clean up any remaining data or resources related to the integration, while other services stop accessing the organization but leave any historical data and configuration in place to support a possible re-enabling of the integration.</p> </li> </ul> <p>Using the other service's console or commands to disable the integration ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service. </p> </important> <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified service can no longer perform operations in your organization's accounts </p> <p>For more information about integrating other services with Organizations, including the list of services that work with Organizations, see <a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html\">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>",
  operationId: 'DisableAWSServiceAccess',
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
        .literal('AWSOrganizationsV20161128.DisableAWSServiceAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DisableAWSServiceAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableAWSServiceAccessRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType',
  description:
    '<p>Disables an organizational policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the <a>EnablePolicyType</a> operation.</p> <p>This is an asynchronous request that Amazon Web Services performs in the background. If you disable a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. Amazon Web Services recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation.</p> <p>This operation can be called only from the organization\'s management account.</p> <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>',
  operationId: 'DisablePolicyType',
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
        .literal('AWSOrganizationsV20161128.DisablePolicyType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.DisablePolicyType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisablePolicyTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisablePolicyTypeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'PolicyTypeNotEnabledException',
      content: { 'application/json': { schema: PolicyTypeNotEnabledExceptionSchema } },
    },
    486: {
      description: 'RootNotFoundException',
      content: { 'application/json': { schema: RootNotFoundExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    488: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    489: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
    490: {
      description: 'PolicyChangesInProgressException',
      content: { 'application/json': { schema: PolicyChangesInProgressExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess',
  description:
    '<p>Enables the integration of an Amazon Web Services service (the service that is specified by <code>ServicePrincipal</code>) with Organizations. When you enable integration, you allow the specified service to create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in all the accounts in your organization. This allows the service to perform operations on your behalf in your organization and its accounts.</p> <important> <p>We recommend that you enable integration between Organizations and the specified Amazon Web Services service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization\'s accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service.</p> </important> <p>For more information about enabling services to integrate with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>You can only call this operation from the organization\'s management account and only if the organization has <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all features</a>.</p>',
  operationId: 'EnableAWSServiceAccess',
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
        .literal('AWSOrganizationsV20161128.EnableAWSServiceAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.EnableAWSServiceAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableAWSServiceAccessRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures',
  description:
    '<p>Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can\'t use any of the advanced account administration features that Organizations supports. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <p>This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.</p> </important> <p>After you enable all features, you can separately enable or disable individual policy types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use <a>ListRoots</a>.</p> <p>After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains <code>"Action": "ENABLE_ALL_FEATURES"</code>. This completes the change.</p> <p>After you enable all features in your organization, the management account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The management account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this.</p> <p>This operation can be called only from the organization\'s management account.</p>',
  operationId: 'EnableAllFeatures',
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
        .literal('AWSOrganizationsV20161128.EnableAllFeatures')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.EnableAllFeatures'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableAllFeaturesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableAllFeaturesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'HandshakeConstraintViolationException',
      content: { 'application/json': { schema: HandshakeConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType',
  description:
    "<p>Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the <a>DisablePolicyType</a> operation.</p> <p>This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation.</p> <p>This operation can be called only from the organization's management account.</p> <p>You can enable a policy type in a root only if that policy type is available in the organization. To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>",
  operationId: 'EnablePolicyType',
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
        .literal('AWSOrganizationsV20161128.EnablePolicyType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.EnablePolicyType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnablePolicyTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnablePolicyTypeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'PolicyTypeAlreadyEnabledException',
      content: { 'application/json': { schema: PolicyTypeAlreadyEnabledExceptionSchema } },
    },
    486: {
      description: 'RootNotFoundException',
      content: { 'application/json': { schema: RootNotFoundExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    488: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    489: {
      description: 'PolicyTypeNotAvailableForOrganizationException',
      content: {
        'application/json': { schema: PolicyTypeNotAvailableForOrganizationExceptionSchema },
      },
    },
    490: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
    491: {
      description: 'PolicyChangesInProgressException',
      content: { 'application/json': { schema: PolicyChangesInProgressExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization',
  description:
    '<p>Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account\'s owner. The invitation is implemented as a <a>Handshake</a> whose details are in the response.</p> <important> <ul> <li> <p>You can invite Amazon Web Services accounts only from the same seller as the management account. For example, if your organization\'s management account was created by Amazon Internet Services Pvt. Ltd (AISPL), an Amazon Web Services seller in India, you can invite only other AISPL accounts to your organization. You can\'t combine accounts from AISPL and Amazon Web Services or from any other Amazon Web Services seller. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated Billing in India</a>.</p> </li> <li> <p>If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> </ul> </important> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization\'s management account.</p>',
  operationId: 'InviteAccountToOrganization',
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
        .literal('AWSOrganizationsV20161128.InviteAccountToOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrganizationsV20161128.InviteAccountToOrganization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InviteAccountToOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InviteAccountToOrganizationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'AccountOwnerNotVerifiedException',
      content: { 'application/json': { schema: AccountOwnerNotVerifiedExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'HandshakeConstraintViolationException',
      content: { 'application/json': { schema: HandshakeConstraintViolationExceptionSchema } },
    },
    485: {
      description: 'DuplicateHandshakeException',
      content: { 'application/json': { schema: DuplicateHandshakeExceptionSchema } },
    },
    486: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    487: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    488: {
      description: 'FinalizingOrganizationException',
      content: { 'application/json': { schema: FinalizingOrganizationExceptionSchema } },
    },
    489: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    490: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128LeaveOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization',
  description:
    '<p>Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the management account, use <a>RemoveAccountFromOrganization</a> instead.</p> <p>This operation can be called only from a member account in the organization.</p> <important> <ul> <li> <p>The management account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do. This includes preventing them from successfully calling <code>LeaveOrganization</code> and leaving the organization.</p> </li> <li> <p>You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For each account that you want to make standalone, you must perform the following steps. If any of the steps are already completed for this account, that step doesn\'t appear.</p> <ul> <li> <p>Choose a support plan</p> </li> <li> <p>Provide and verify the required contact information</p> </li> <li> <p>Provide a current payment method</p> </li> </ul> <p>Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn\'t attached to an organization. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization.</p> </li> <li> <p>You can leave an organization only after you enable IAM user access to billing in your account. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>Amazon Web Services Billing and Cost Management User Guide.</i> </p> </li> <li> <p>After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</p> </li> <li> <p>A newly created account has a waiting period before it can be removed from its organization. If you get an error that indicates that a wait period is required, then try again in a few days.</p> </li> </ul> </important>',
  operationId: 'LeaveOrganization',
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
        .literal('AWSOrganizationsV20161128.LeaveOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.LeaveOrganization'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AccountNotFoundException',
      content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
    },
    482: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'MasterCannotLeaveOrganizationException',
      content: { 'application/json': { schema: MasterCannotLeaveOrganizationExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    488: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization',
    description:
      '<p>Returns a list of the Amazon Web Services services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts.</p> <p>For more information about integrating other services with Organizations, including the list of services that currently work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization\'s management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>',
    operationId: 'ListAWSServiceAccessForOrganization',
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
          .literal('AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization'],
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
        content: {
          'application/json': { schema: ListAWSServiceAccessForOrganizationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListAWSServiceAccessForOrganizationResponseSchema },
        },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'AWSOrganizationsNotInUseException',
        content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
      },
      482: {
        description: 'ConstraintViolationException',
        content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
      },
      483: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      484: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      486: {
        description: 'UnsupportedAPIEndpointException',
        content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSOrganizationsV20161128ListAccountsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts',
  description:
    "<p>Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
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
      'X-Amz-Target': z
        .literal('AWSOrganizationsV20161128.ListAccounts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListAccounts'] },
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
      content: { 'application/json': { schema: ListAccountsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccountsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListAccountsForParentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent',
  description:
    "<p>Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the <a>ListAccounts</a> operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'ListAccountsForParent',
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
        .literal('AWSOrganizationsV20161128.ListAccountsForParent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListAccountsForParent'] },
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
      content: { 'application/json': { schema: ListAccountsForParentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccountsForParentResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ParentNotFoundException',
      content: { 'application/json': { schema: ParentNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListChildrenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListChildren',
  description:
    "<p>Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with <a>ListParents</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'ListChildren',
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
        .literal('AWSOrganizationsV20161128.ListChildren')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListChildren'] },
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
      content: { 'application/json': { schema: ListChildrenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListChildrenResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ParentNotFoundException',
      content: { 'application/json': { schema: ParentNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus',
  description:
    "<p>Lists the account creation requests that match the specified status that is currently being tracked for the organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'ListCreateAccountStatus',
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
        .literal('AWSOrganizationsV20161128.ListCreateAccountStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListCreateAccountStatus'] },
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
      content: { 'application/json': { schema: ListCreateAccountStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCreateAccountStatusResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators',
  description:
    "<p>Lists the Amazon Web Services accounts that are designated as delegated administrators in this organization.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'ListDelegatedAdministrators',
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
        .literal('AWSOrganizationsV20161128.ListDelegatedAdministrators')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrganizationsV20161128.ListDelegatedAdministrators'],
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
      content: { 'application/json': { schema: ListDelegatedAdministratorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDelegatedAdministratorsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    486: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount',
    description:
      "<p>List the Amazon Web Services services for which the specified account is a delegated administrator.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
    operationId: 'ListDelegatedServicesForAccount',
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
          .literal('AWSOrganizationsV20161128.ListDelegatedServicesForAccount')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrganizationsV20161128.ListDelegatedServicesForAccount'],
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
        content: { 'application/json': { schema: ListDelegatedServicesForAccountRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListDelegatedServicesForAccountResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'AccountNotFoundException',
        content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
      },
      482: {
        description: 'AccountNotRegisteredException',
        content: { 'application/json': { schema: AccountNotRegisteredExceptionSchema } },
      },
      483: {
        description: 'AWSOrganizationsNotInUseException',
        content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
      },
      484: {
        description: 'ConstraintViolationException',
        content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
      },
      485: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      486: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      487: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      488: {
        description: 'UnsupportedAPIEndpointException',
        content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount',
  description:
    "<p>Lists the current handshakes that are associated with the account of the requesting user.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called from any account in the organization.</p>",
  operationId: 'ListHandshakesForAccount',
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
        .literal('AWSOrganizationsV20161128.ListHandshakesForAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrganizationsV20161128.ListHandshakesForAccount'],
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
      content: { 'application/json': { schema: ListHandshakesForAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListHandshakesForAccountResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization',
    description:
      "<p>Lists the handshakes that are associated with the organization that the requesting user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list of handshake structures. Each structure contains details and status about a handshake.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
    operationId: 'ListHandshakesForOrganization',
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
          .literal('AWSOrganizationsV20161128.ListHandshakesForOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrganizationsV20161128.ListHandshakesForOrganization'],
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
        content: { 'application/json': { schema: ListHandshakesForOrganizationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListHandshakesForOrganizationResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'AWSOrganizationsNotInUseException',
        content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
      },
      482: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      483: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      484: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent',
    description:
      "<p>Lists the organizational units (OUs) in a parent organizational unit or root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
    operationId: 'ListOrganizationalUnitsForParent',
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
          .literal('AWSOrganizationsV20161128.ListOrganizationalUnitsForParent')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrganizationsV20161128.ListOrganizationalUnitsForParent'],
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
        content: { 'application/json': { schema: ListOrganizationalUnitsForParentRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListOrganizationalUnitsForParentResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'AWSOrganizationsNotInUseException',
        content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
      },
      482: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      483: {
        description: 'ParentNotFoundException',
        content: { 'application/json': { schema: ParentNotFoundExceptionSchema } },
      },
      484: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSOrganizationsV20161128ListParentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListParents',
  description:
    "<p>Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with <a>ListChildren</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p> <note> <p>In the current release, a child can have only a single parent.</p> </note>",
  operationId: 'ListParents',
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
        .literal('AWSOrganizationsV20161128.ListParents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListParents'] },
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
    body: { content: { 'application/json': { schema: ListParentsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListParentsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ChildNotFoundException',
      content: { 'application/json': { schema: ChildNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies',
  description:
    "<p>Retrieves the list of all policies in an organization of a specified type.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'ListPolicies',
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
        .literal('AWSOrganizationsV20161128.ListPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListPolicies'] },
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
      content: { 'application/json': { schema: ListPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPoliciesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget',
  description:
    "<p>Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'ListPoliciesForTarget',
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
        .literal('AWSOrganizationsV20161128.ListPoliciesForTarget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListPoliciesForTarget'] },
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
      content: { 'application/json': { schema: ListPoliciesForTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPoliciesForTargetResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TargetNotFoundException',
      content: { 'application/json': { schema: TargetNotFoundExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListRootsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListRoots',
  description:
    "<p>Lists the roots that are defined in the current organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p> <note> <p>Policy types can be enabled and disabled in roots. This is distinct from whether they're available in the organization. When you enable all features, you make policy types available for use in that organization. Individual policy types can then be enabled and disabled in a root. To see the availability of a policy type in an organization, use <a>DescribeOrganization</a>.</p> </note>",
  operationId: 'ListRoots',
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
        .literal('AWSOrganizationsV20161128.ListRoots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListRoots'] },
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
    body: { content: { 'application/json': { schema: ListRootsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRootsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource',
  description:
    "<p>Lists tags that are attached to the specified resource.</p> <p>You can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
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
        .literal('AWSOrganizationsV20161128.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListTagsForResource'] },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'TargetNotFoundException',
      content: { 'application/json': { schema: TargetNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy',
  description:
    "<p>Lists all the roots, organizational units (OUs), and accounts that the specified policy is attached to.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>",
  operationId: 'ListTargetsForPolicy',
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
        .literal('AWSOrganizationsV20161128.ListTargetsForPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.ListTargetsForPolicy'] },
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
      content: { 'application/json': { schema: ListTargetsForPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTargetsForPolicyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128MoveAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount',
  description:
    "<p>Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU.</p> <p>This operation can be called only from the organization's management account.</p>",
  operationId: 'MoveAccount',
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
        .literal('AWSOrganizationsV20161128.MoveAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.MoveAccount'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MoveAccountRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'SourceParentNotFoundException',
      content: { 'application/json': { schema: SourceParentNotFoundExceptionSchema } },
    },
    483: {
      description: 'DestinationParentNotFoundException',
      content: { 'application/json': { schema: DestinationParentNotFoundExceptionSchema } },
    },
    484: {
      description: 'DuplicateAccountException',
      content: { 'application/json': { schema: DuplicateAccountExceptionSchema } },
    },
    485: {
      description: 'AccountNotFoundException',
      content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    488: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    489: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128PutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy',
  description:
    "<p>Creates or updates a resource policy.</p> <p>You can only call this operation from the organization's management account.</p>",
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
        .literal('AWSOrganizationsV20161128.PutResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.PutResourcePolicy'] },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    482: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    487: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator',
    description:
      '<p>Enables the specified member account to administer the Organizations features of the specified Amazon Web Services service. It grants read-only access to Organizations service data. The account still requires IAM permissions to access and administer the Amazon Web Services service.</p> <p>You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with Organizations</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization\'s management account.</p>',
    operationId: 'RegisterDelegatedAdministrator',
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
          .literal('AWSOrganizationsV20161128.RegisterDelegatedAdministrator')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrganizationsV20161128.RegisterDelegatedAdministrator'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RegisterDelegatedAdministratorRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'AccountAlreadyRegisteredException',
        content: { 'application/json': { schema: AccountAlreadyRegisteredExceptionSchema } },
      },
      482: {
        description: 'AccountNotFoundException',
        content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
      },
      483: {
        description: 'AWSOrganizationsNotInUseException',
        content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
      },
      484: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      485: {
        description: 'ConstraintViolationException',
        content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
      },
      486: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      487: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      488: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      489: {
        description: 'UnsupportedAPIEndpointException',
        content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization',
    description:
      "<p>Removes the specified account from the organization.</p> <p>The removed account becomes a standalone account that isn't a member of any organization. It's no longer subject to any policies and is responsible for its own bill payments. The organization's management account is no longer charged for any expenses accrued by the member account after it's removed from the organization.</p> <p>This operation can be called only from the organization's management account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p> <important> <ul> <li> <p>You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For an account that you want to make standalone, you must choose a support plan, provide and verify the required contact information, and provide a current payment method. Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. To remove an account that doesn't yet have this information, you must sign in as the member account and follow the steps at <a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info\"> To leave an organization when all required account information has not yet been provided</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization.</p> </li> <li> <p>After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</p> </li> </ul> </important>",
    operationId: 'RemoveAccountFromOrganization',
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
          .literal('AWSOrganizationsV20161128.RemoveAccountFromOrganization')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSOrganizationsV20161128.RemoveAccountFromOrganization'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RemoveAccountFromOrganizationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'AccountNotFoundException',
        content: { 'application/json': { schema: AccountNotFoundExceptionSchema } },
      },
      482: {
        description: 'AWSOrganizationsNotInUseException',
        content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
      },
      483: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'ConstraintViolationException',
        content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
      },
      485: {
        description: 'InvalidInputException',
        content: { 'application/json': { schema: InvalidInputExceptionSchema } },
      },
      486: {
        description: 'MasterCannotLeaveOrganizationException',
        content: { 'application/json': { schema: MasterCannotLeaveOrganizationExceptionSchema } },
      },
      487: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      488: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSOrganizationsV20161128TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.TagResource',
  description:
    "<p>Adds one or more tags to the specified resource.</p> <p>Currently, you can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>",
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
        .literal('AWSOrganizationsV20161128.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    483: {
      description: 'TargetNotFoundException',
      content: { 'application/json': { schema: TargetNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.UntagResource',
  description:
    "<p>Removes any tags with the specified keys from the specified resource.</p> <p>You can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>",
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
        .literal('AWSOrganizationsV20161128.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.UntagResource'] },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    483: {
      description: 'TargetNotFoundException',
      content: { 'application/json': { schema: TargetNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit',
  description:
    "<p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached.</p> <p>This operation can be called only from the organization's management account.</p>",
  operationId: 'UpdateOrganizationalUnit',
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
        .literal('AWSOrganizationsV20161128.UpdateOrganizationalUnit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSOrganizationsV20161128.UpdateOrganizationalUnit'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrganizationalUnitRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateOrganizationalUnitResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'DuplicateOrganizationalUnitException',
      content: { 'application/json': { schema: DuplicateOrganizationalUnitExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'OrganizationalUnitNotFoundException',
      content: { 'application/json': { schema: OrganizationalUnitNotFoundExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSOrganizationsV20161128UpdatePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy',
  description:
    "<p>Updates an existing policy with a new name, description, or content. If you don't supply any parameter, that value remains unchanged. You can't change a policy's type.</p> <p>This operation can be called only from the organization's management account.</p>",
  operationId: 'UpdatePolicy',
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
        .literal('AWSOrganizationsV20161128.UpdatePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSOrganizationsV20161128.UpdatePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePolicyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'AWSOrganizationsNotInUseException',
      content: { 'application/json': { schema: AWSOrganizationsNotInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    484: {
      description: 'DuplicatePolicyException',
      content: { 'application/json': { schema: DuplicatePolicyExceptionSchema } },
    },
    485: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    486: {
      description: 'MalformedPolicyDocumentException',
      content: { 'application/json': { schema: MalformedPolicyDocumentExceptionSchema } },
    },
    487: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    488: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    489: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    490: {
      description: 'UnsupportedAPIEndpointException',
      content: { 'application/json': { schema: UnsupportedAPIEndpointExceptionSchema } },
    },
    491: {
      description: 'PolicyChangesInProgressException',
      content: { 'application/json': { schema: PolicyChangesInProgressExceptionSchema } },
    },
  },
})
