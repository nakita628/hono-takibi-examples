import { createRoute, z } from '@hono/zod-openapi'

const AttachCustomerManagedPolicyReferenceToPermissionSetResponseSchema = z
  .object({})
  .openapi('AttachCustomerManagedPolicyReferenceToPermissionSetResponse')

const InstanceArnSchema = z
  .string()
  .regex(
    /arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance\/(sso)?ins-[a-zA-Z0-9-.]{16}/,
  )
  .min(10)
  .max(1224)
  .openapi('InstanceArn')

const PermissionSetArnSchema = z
  .string()
  .regex(
    /arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::permissionSet\/(sso)?ins-[a-zA-Z0-9-.]{16}\/ps-[a-zA-Z0-9-.\/]{16}/,
  )
  .min(10)
  .max(1224)
  .openapi('PermissionSetArn')

const ManagedPolicyNameSchema = z
  .string()
  .regex(/[\w+=,.@-]+/)
  .min(1)
  .max(128)
  .openapi('ManagedPolicyName')

const ManagedPolicyPathSchema = z
  .string()
  .regex(/((\/[A-Za-z0-9\.,\+@=_-]+)*)\//)
  .min(1)
  .max(512)
  .openapi('ManagedPolicyPath')

const CustomerManagedPolicyReferenceSchema = z
  .object({
    Name: ManagedPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IAM policy that you have configured in each account where you want to deploy your permission set.',
        }),
    ),
    Path: ManagedPolicyPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the IAM policy that you have configured in each account where you want to deploy your permission set. The default is <code>/</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.',
  })
  .openapi('CustomerManagedPolicyReference')

const AttachCustomerManagedPolicyReferenceToPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. ',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>PermissionSet</code>.' }),
    ),
    CustomerManagedPolicyReference: CustomerManagedPolicyReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn', 'CustomerManagedPolicyReference'],
    title: 'AttachCustomerManagedPolicyReferenceToPermissionSetRequest',
  })
  .openapi('AttachCustomerManagedPolicyReferenceToPermissionSetRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const AttachManagedPolicyToPermissionSetResponseSchema = z
  .object({})
  .openapi('AttachManagedPolicyToPermissionSetResponse')

const ManagedPolicyArnSchema = z
  .string()
  .regex(
    /arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::aws:policy\/[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]+/u,
  )
  .min(20)
  .max(2048)
  .openapi('ManagedPolicyArn')

const AttachManagedPolicyToPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the <a>PermissionSet</a> that the managed policy should be attached to.',
        }),
    ),
    ManagedPolicyArn: ManagedPolicyArnSchema.and(
      z
        .any()
        .openapi({ description: 'The AWS managed policy ARN to be attached to a permission set.' }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn', 'ManagedPolicyArn'],
    title: 'AttachManagedPolicyToPermissionSetRequest',
  })
  .openapi('AttachManagedPolicyToPermissionSetRequest')

const StatusValuesSchema = z.enum(['IN_PROGRESS', 'FAILED', 'SUCCEEDED']).openapi('StatusValues')

const UUIdSchema = z
  .string()
  .regex(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/)
  .length(36)
  .openapi('UUId')

const ReasonSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*/u)
  .openapi('Reason')

const TargetIdSchema = z
  .string()
  .regex(/\d{12}/)
  .length(12)
  .openapi('TargetId')

const TargetTypeSchema = z.literal('AWS_ACCOUNT').openapi('TargetType')

const PrincipalTypeSchema = z.enum(['USER', 'GROUP']).openapi('PrincipalType')

const PrincipalIdSchema = z
  .string()
  .regex(
    /^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/,
  )
  .min(1)
  .max(47)
  .openapi('PrincipalId')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const AccountAssignmentOperationStatusSchema = z
  .object({
    Status: StatusValuesSchema.and(
      z.any().openapi({ description: 'The status of the permission set provisioning process.' }),
    ).exactOptional(),
    RequestId: UUIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.',
        }),
    ).exactOptional(),
    FailureReason: ReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that contains an error or exception in case of an operation failure.',
        }),
    ).exactOptional(),
    TargetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).',
        }),
    ).exactOptional(),
    TargetType: TargetTypeSchema.and(
      z.any().openapi({ description: 'The entity type for which the assignment will be created.' }),
    ).exactOptional(),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    PrincipalType: PrincipalTypeSchema.and(
      z.any().openapi({ description: 'The entity type for which the assignment will be created.' }),
    ).exactOptional(),
    PrincipalId: PrincipalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.',
        }),
    ).exactOptional(),
    CreatedDate: DateSchema.and(
      z.any().openapi({ description: 'The date that the permission set was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The status of the creation or deletion operation of an assignment that a principal needs to access an account.',
    required: [],
  })
  .openapi('AccountAssignmentOperationStatus')

const CreateAccountAssignmentResponseSchema = z
  .object({
    AccountAssignmentCreationStatus: AccountAssignmentOperationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the account assignment creation operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAccountAssignmentResponse')

const CreateAccountAssignmentRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    TargetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).',
        }),
    ),
    TargetType: TargetTypeSchema.and(
      z.any().openapi({ description: 'The entity type for which the assignment will be created.' }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the permission set that the admin wants to grant the principal access to.',
        }),
    ),
    PrincipalType: PrincipalTypeSchema.and(
      z.any().openapi({ description: 'The entity type for which the assignment will be created.' }),
    ),
    PrincipalId: PrincipalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.',
        }),
    ),
  })
  .openapi({
    required: [
      'InstanceArn',
      'TargetId',
      'TargetType',
      'PermissionSetArn',
      'PrincipalType',
      'PrincipalId',
    ],
    title: 'CreateAccountAssignmentRequest',
  })
  .openapi('CreateAccountAssignmentRequest')

const CreateInstanceAccessControlAttributeConfigurationResponseSchema = z
  .object({})
  .openapi('CreateInstanceAccessControlAttributeConfigurationResponse')

const AccessControlAttributeKeySchema = z
  .string()
  .regex(/[\p{L}\p{Z}\p{N}_.:\/=+\-@]+/u)
  .min(1)
  .max(128)
  .openapi('AccessControlAttributeKey')

const AccessControlAttributeValueSourceSchema = z
  .string()
  .regex(/[\p{L}\p{Z}\p{N}_.:\/=+\-@\[\]\{\}\$\\"]*/u)
  .min(0)
  .max(256)
  .openapi('AccessControlAttributeValueSource')

const AccessControlAttributeValueSourceListSchema = z
  .array(AccessControlAttributeValueSourceSchema)
  .length(1)
  .openapi('AccessControlAttributeValueSourceList')

const AccessControlAttributeValueSchema = z
  .object({
    Source: AccessControlAttributeValueSourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity source to use when mapping a specified attribute to IAM Identity Center.',
        }),
    ),
  })
  .openapi({
    required: ['Source'],
    description:
      'The value used for mapping a specified attribute to an identity source. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/attributemappingsconcept.html">Attribute mappings</a> in the <i>IAM Identity Center User Guide</i>.',
  })
  .openapi('AccessControlAttributeValue')

const AccessControlAttributeSchema = z
  .object({
    Key: AccessControlAttributeKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in IAM Identity Center.',
        }),
    ),
    Value: AccessControlAttributeValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The value used for mapping a specified attribute to an identity source.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'These are IAM Identity Center identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your AWS resources based upon the configured attribute values. When you enable ABAC and specify <code>AccessControlAttributes</code>, IAM Identity Center passes the attribute values of the authenticated user into IAM for use in policy evaluation.',
  })
  .openapi('AccessControlAttribute')

const AccessControlAttributeListSchema = z
  .array(AccessControlAttributeSchema)
  .min(0)
  .max(50)
  .openapi('AccessControlAttributeList')

const InstanceAccessControlAttributeConfigurationSchema = z
  .object({
    AccessControlAttributes: AccessControlAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the attributes that are configured for ABAC in the specified IAM Identity Center instance.',
        }),
    ),
  })
  .openapi({
    required: ['AccessControlAttributes'],
    description:
      'Specifies the attributes to add to your attribute-based access control (ABAC) configuration.',
  })
  .openapi('InstanceAccessControlAttributeConfiguration')

const CreateInstanceAccessControlAttributeConfigurationRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed.',
        }),
    ),
    InstanceAccessControlAttributeConfiguration:
      InstanceAccessControlAttributeConfigurationSchema.and(
        z
          .any()
          .openapi({
            description:
              'Specifies the IAM Identity Center identity store attributes to add to your ABAC configuration. When using an external identity provider as an identity source, you can pass attributes through the SAML assertion. Doing so provides an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center will replace the attribute value with the value from the IAM Identity Center identity store.',
          }),
      ),
  })
  .openapi({
    required: ['InstanceArn', 'InstanceAccessControlAttributeConfiguration'],
    title: 'CreateInstanceAccessControlAttributeConfigurationRequest',
  })
  .openapi('CreateInstanceAccessControlAttributeConfigurationRequest')

const PermissionSetNameSchema = z
  .string()
  .regex(/[\w+=,.@-]+/)
  .min(1)
  .max(32)
  .openapi('PermissionSetName')

const PermissionSetDescriptionSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u00A0-\u00FF]*/)
  .min(1)
  .max(700)
  .openapi('PermissionSetDescription')

const DurationSchema = z
  .string()
  .regex(
    /^(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)([DW]))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/,
  )
  .min(1)
  .max(100)
  .openapi('Duration')

const RelayStateSchema = z
  .string()
  .regex(/[a-zA-Z0-9&$@#\\\/%?=~\-_'"|!:,.;*+\[\]\ \(\)\{\}]+/)
  .min(1)
  .max(240)
  .openapi('RelayState')

const PermissionSetSchema = z
  .object({
    Name: PermissionSetNameSchema.and(
      z.any().openapi({ description: 'The name of the permission set.' }),
    ).exactOptional(),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    Description: PermissionSetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the <a>PermissionSet</a>.' }),
    ).exactOptional(),
    CreatedDate: DateSchema.and(
      z.any().openapi({ description: 'The date that the permission set was created.' }),
    ).exactOptional(),
    SessionDuration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time that the application user sessions are valid for in the ISO-8601 standard.',
        }),
    ).exactOptional(),
    RelayState: RelayStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to redirect users within the application during the federation authentication process.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An entity that contains IAM policies.', required: [] })
  .openapi('PermissionSet')

const CreatePermissionSetResponseSchema = z
  .object({
    PermissionSet: PermissionSetSchema.and(
      z.any().openapi({ description: 'Defines the level of access on an AWS account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePermissionSetResponse')

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
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key for the tag.' })),
    Value: TagValueSchema.and(z.any().openapi({ description: 'The value of the tag.' })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center creates in AWS accounts.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(50).openapi('TagList')

const CreatePermissionSetRequestSchema = z
  .object({
    Name: PermissionSetNameSchema.and(
      z.any().openapi({ description: 'The name of the <a>PermissionSet</a>.' }),
    ),
    Description: PermissionSetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the <a>PermissionSet</a>.' }),
    ).exactOptional(),
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    SessionDuration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time that the application user sessions are valid in the ISO-8601 standard.',
        }),
    ).exactOptional(),
    RelayState: RelayStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to redirect users within the application during the federation authentication process.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to attach to the new <a>PermissionSet</a>.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'InstanceArn'], title: 'CreatePermissionSetRequest' })
  .openapi('CreatePermissionSetRequest')

const DeleteAccountAssignmentResponseSchema = z
  .object({
    AccountAssignmentDeletionStatus: AccountAssignmentOperationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the account assignment deletion operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteAccountAssignmentResponse')

const DeleteAccountAssignmentRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    TargetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).',
        }),
    ),
    TargetType: TargetTypeSchema.and(
      z.any().openapi({ description: 'The entity type for which the assignment will be deleted.' }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the permission set that will be used to remove access.',
        }),
    ),
    PrincipalType: PrincipalTypeSchema.and(
      z.any().openapi({ description: 'The entity type for which the assignment will be deleted.' }),
    ),
    PrincipalId: PrincipalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.',
        }),
    ),
  })
  .openapi({
    required: [
      'InstanceArn',
      'TargetId',
      'TargetType',
      'PermissionSetArn',
      'PrincipalType',
      'PrincipalId',
    ],
    title: 'DeleteAccountAssignmentRequest',
  })
  .openapi('DeleteAccountAssignmentRequest')

const DeleteInlinePolicyFromPermissionSetResponseSchema = z
  .object({})
  .openapi('DeleteInlinePolicyFromPermissionSetResponse')

const DeleteInlinePolicyFromPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the permission set that will be used to remove access.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn'],
    title: 'DeleteInlinePolicyFromPermissionSetRequest',
  })
  .openapi('DeleteInlinePolicyFromPermissionSetRequest')

const DeleteInstanceAccessControlAttributeConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteInstanceAccessControlAttributeConfigurationResponse')

const DeleteInstanceAccessControlAttributeConfigurationRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn'],
    title: 'DeleteInstanceAccessControlAttributeConfigurationRequest',
  })
  .openapi('DeleteInstanceAccessControlAttributeConfigurationRequest')

const DeletePermissionSetResponseSchema = z.object({}).openapi('DeletePermissionSetResponse')

const DeletePermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the permission set that should be deleted.' }),
    ),
  })
  .openapi({ required: ['InstanceArn', 'PermissionSetArn'], title: 'DeletePermissionSetRequest' })
  .openapi('DeletePermissionSetRequest')

const DeletePermissionsBoundaryFromPermissionSetResponseSchema = z
  .object({})
  .openapi('DeletePermissionsBoundaryFromPermissionSetResponse')

const DeletePermissionsBoundaryFromPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. ',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>PermissionSet</code>.' }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn'],
    title: 'DeletePermissionsBoundaryFromPermissionSetRequest',
  })
  .openapi('DeletePermissionsBoundaryFromPermissionSetRequest')

const DescribeAccountAssignmentCreationStatusResponseSchema = z
  .object({
    AccountAssignmentCreationStatus: AccountAssignmentOperationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the account assignment creation operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountAssignmentCreationStatusResponse')

const DescribeAccountAssignmentCreationStatusRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    AccountAssignmentCreationRequestId: UUIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier that is used to track the request operation progress.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'AccountAssignmentCreationRequestId'],
    title: 'DescribeAccountAssignmentCreationStatusRequest',
  })
  .openapi('DescribeAccountAssignmentCreationStatusRequest')

const DescribeAccountAssignmentDeletionStatusResponseSchema = z
  .object({
    AccountAssignmentDeletionStatus: AccountAssignmentOperationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the account assignment deletion operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountAssignmentDeletionStatusResponse')

const DescribeAccountAssignmentDeletionStatusRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    AccountAssignmentDeletionRequestId: UUIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier that is used to track the request operation progress.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'AccountAssignmentDeletionRequestId'],
    title: 'DescribeAccountAssignmentDeletionStatusRequest',
  })
  .openapi('DescribeAccountAssignmentDeletionStatusRequest')

const InstanceAccessControlAttributeConfigurationStatusSchema = z
  .enum(['ENABLED', 'CREATION_IN_PROGRESS', 'CREATION_FAILED'])
  .openapi('InstanceAccessControlAttributeConfigurationStatus')

const InstanceAccessControlAttributeConfigurationStatusReasonSchema = z
  .string()
  .openapi('InstanceAccessControlAttributeConfigurationStatusReason')

const DescribeInstanceAccessControlAttributeConfigurationResponseSchema = z
  .object({
    Status: InstanceAccessControlAttributeConfigurationStatusSchema.and(
      z.any().openapi({ description: 'The status of the attribute configuration process.' }),
    ).exactOptional(),
    StatusReason: InstanceAccessControlAttributeConfigurationStatusReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides more details about the current status of the specified attribute.',
        }),
    ).exactOptional(),
    InstanceAccessControlAttributeConfiguration:
      InstanceAccessControlAttributeConfigurationSchema.and(
        z
          .any()
          .openapi({
            description:
              'Gets the list of IAM Identity Center identity store attributes that have been added to your ABAC configuration.',
          }),
      ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeInstanceAccessControlAttributeConfigurationResponse')

const DescribeInstanceAccessControlAttributeConfigurationRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn'],
    title: 'DescribeInstanceAccessControlAttributeConfigurationRequest',
  })
  .openapi('DescribeInstanceAccessControlAttributeConfigurationRequest')

const DescribePermissionSetResponseSchema = z
  .object({
    PermissionSet: PermissionSetSchema.and(
      z.any().openapi({ description: 'Describes the level of access on an AWS account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePermissionSetResponse')

const DescribePermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the permission set. ' }),
    ),
  })
  .openapi({ required: ['InstanceArn', 'PermissionSetArn'], title: 'DescribePermissionSetRequest' })
  .openapi('DescribePermissionSetRequest')

const AccountIdSchema = z
  .string()
  .regex(/\d{12}/)
  .length(12)
  .openapi('AccountId')

const PermissionSetProvisioningStatusSchema = z
  .object({
    Status: StatusValuesSchema.and(
      z.any().openapi({ description: 'The status of the permission set provisioning process.' }),
    ).exactOptional(),
    RequestId: UUIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.',
        }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the AWS account from which to list the assignments.',
        }),
    ).exactOptional(),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the permission set that is being provisioned. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    FailureReason: ReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that contains an error or exception in case of an operation failure.',
        }),
    ).exactOptional(),
    CreatedDate: DateSchema.and(
      z.any().openapi({ description: 'The date that the permission set was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that is used to provide the status of the provisioning operation for a specified permission set.',
    required: [],
  })
  .openapi('PermissionSetProvisioningStatus')

const DescribePermissionSetProvisioningStatusResponseSchema = z
  .object({
    PermissionSetProvisioningStatus: PermissionSetProvisioningStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the permission set provisioning operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePermissionSetProvisioningStatusResponse')

const DescribePermissionSetProvisioningStatusRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    ProvisionPermissionSetRequestId: UUIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that is provided by the <a>ProvisionPermissionSet</a> call to retrieve the current status of the provisioning workflow.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'ProvisionPermissionSetRequestId'],
    title: 'DescribePermissionSetProvisioningStatusRequest',
  })
  .openapi('DescribePermissionSetProvisioningStatusRequest')

const DetachCustomerManagedPolicyReferenceFromPermissionSetResponseSchema = z
  .object({})
  .openapi('DetachCustomerManagedPolicyReferenceFromPermissionSetResponse')

const DetachCustomerManagedPolicyReferenceFromPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. ',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>PermissionSet</code>.' }),
    ),
    CustomerManagedPolicyReference: CustomerManagedPolicyReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn', 'CustomerManagedPolicyReference'],
    title: 'DetachCustomerManagedPolicyReferenceFromPermissionSetRequest',
  })
  .openapi('DetachCustomerManagedPolicyReferenceFromPermissionSetRequest')

const DetachManagedPolicyFromPermissionSetResponseSchema = z
  .object({})
  .openapi('DetachManagedPolicyFromPermissionSetResponse')

const DetachManagedPolicyFromPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the <a>PermissionSet</a> from which the policy should be detached.',
        }),
    ),
    ManagedPolicyArn: ManagedPolicyArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS managed policy ARN to be detached from a permission set.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn', 'ManagedPolicyArn'],
    title: 'DetachManagedPolicyFromPermissionSetRequest',
  })
  .openapi('DetachManagedPolicyFromPermissionSetRequest')

const PermissionSetPolicyDocumentSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(1)
  .max(10240)
  .openapi('PermissionSetPolicyDocument')

const GetInlinePolicyForPermissionSetResponseSchema = z
  .object({
    InlinePolicy: PermissionSetPolicyDocumentSchema.and(
      z.any().openapi({ description: 'The inline policy that is attached to the permission set.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInlinePolicyForPermissionSetResponse')

const GetInlinePolicyForPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the permission set.' }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn'],
    title: 'GetInlinePolicyForPermissionSetRequest',
  })
  .openapi('GetInlinePolicyForPermissionSetRequest')

const PermissionsBoundarySchema = z
  .object({
    CustomerManagedPolicyReference: CustomerManagedPolicyReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.',
        }),
    ).exactOptional(),
    ManagedPolicyArn: ManagedPolicyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. Specify either <code>CustomerManagedPolicyReference</code> to use the name and path of a customer managed policy, or <code>ManagedPolicyArn</code> to use the ARN of an AWS managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>Policies used as permissions boundaries don\'t provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the <i>IAM User Guide</i>.</p> </important>',
    required: [],
  })
  .openapi('PermissionsBoundary')

const GetPermissionsBoundaryForPermissionSetResponseSchema = z
  .object({
    PermissionsBoundary: PermissionsBoundarySchema.and(
      z
        .any()
        .openapi({
          description: 'The permissions boundary attached to the specified permission set.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPermissionsBoundaryForPermissionSetResponse')

const GetPermissionsBoundaryForPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. ',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>PermissionSet</code>.' }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn'],
    title: 'GetPermissionsBoundaryForPermissionSetRequest',
  })
  .openapi('GetPermissionsBoundaryForPermissionSetRequest')

const AccountAssignmentOperationStatusMetadataSchema = z
  .object({
    Status: StatusValuesSchema.and(
      z.any().openapi({ description: 'The status of the permission set provisioning process.' }),
    ).exactOptional(),
    RequestId: UUIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.',
        }),
    ).exactOptional(),
    CreatedDate: DateSchema.and(
      z.any().openapi({ description: 'The date that the permission set was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the <a>AccountAssignment</a> creation request.',
    required: [],
  })
  .openapi('AccountAssignmentOperationStatusMetadata')

const AccountAssignmentOperationStatusListSchema = z
  .array(AccountAssignmentOperationStatusMetadataSchema)
  .openapi('AccountAssignmentOperationStatusList')

const TokenSchema = z
  .string()
  .regex(/^[-a-zA-Z0-9+=\/_]*/)
  .max(2048)
  .openapi('Token')

const ListAccountAssignmentCreationStatusResponseSchema = z
  .object({
    AccountAssignmentsCreationStatus: AccountAssignmentOperationStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the account assignment creation operation.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccountAssignmentCreationStatusResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const OperationStatusFilterSchema = z
  .object({
    Status: StatusValuesSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters the list operations result based on the status attribute.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Filters he operation status list based on the passed attribute value.',
    required: [],
  })
  .openapi('OperationStatusFilter')

const ListAccountAssignmentCreationStatusRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to display for the assignment.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
    Filter: OperationStatusFilterSchema.and(
      z.any().openapi({ description: 'Filters results based on the passed attribute value.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceArn'], title: 'ListAccountAssignmentCreationStatusRequest' })
  .openapi('ListAccountAssignmentCreationStatusRequest')

const ListAccountAssignmentDeletionStatusResponseSchema = z
  .object({
    AccountAssignmentsDeletionStatus: AccountAssignmentOperationStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the account assignment deletion operation.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccountAssignmentDeletionStatusResponse')

const ListAccountAssignmentDeletionStatusRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to display for the assignment.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
    Filter: OperationStatusFilterSchema.and(
      z.any().openapi({ description: 'Filters results based on the passed attribute value.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceArn'], title: 'ListAccountAssignmentDeletionStatusRequest' })
  .openapi('ListAccountAssignmentDeletionStatusRequest')

const AccountAssignmentSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The identifier of the AWS account.' }),
    ).exactOptional(),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the permission set. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    PrincipalType: PrincipalTypeSchema.and(
      z.any().openapi({ description: 'The entity type for which the assignment will be created.' }),
    ).exactOptional(),
    PrincipalId: PrincipalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the <a href="/singlesignon/latest/IdentityStoreAPIReference/welcome.html">IAM Identity Center Identity Store API Reference</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The assignment that indicates a principal's limited access to a specified AWS account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note>",
    required: [],
  })
  .openapi('AccountAssignment')

const AccountAssignmentListSchema = z
  .array(AccountAssignmentSchema)
  .openapi('AccountAssignmentList')

const ListAccountAssignmentsResponseSchema = z
  .object({
    AccountAssignments: AccountAssignmentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of assignments that match the input AWS account and permission set.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccountAssignmentsResponse')

const ListAccountAssignmentsRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    AccountId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the AWS account from which to list the assignments.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the permission set from which to list assignments.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to display for the assignment.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceArn', 'AccountId', 'PermissionSetArn'],
    title: 'ListAccountAssignmentsRequest',
  })
  .openapi('ListAccountAssignmentsRequest')

const AccountListSchema = z.array(AccountIdSchema).openapi('AccountList')

const ListAccountsForProvisionedPermissionSetResponseSchema = z
  .object({
    AccountIds: AccountListSchema.and(
      z.any().openapi({ description: 'The list of AWS <code>AccountIds</code>.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccountsForProvisionedPermissionSetResponse')

const ProvisioningStatusSchema = z
  .enum(['LATEST_PERMISSION_SET_PROVISIONED', 'LATEST_PERMISSION_SET_NOT_PROVISIONED'])
  .openapi('ProvisioningStatus')

const ListAccountsForProvisionedPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the <a>PermissionSet</a> from which the associated AWS accounts will be listed.',
        }),
    ),
    ProvisioningStatus: ProvisioningStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The permission set provisioning status for an AWS account.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to display for the <a>PermissionSet</a>.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn'],
    title: 'ListAccountsForProvisionedPermissionSetRequest',
  })
  .openapi('ListAccountsForProvisionedPermissionSetRequest')

const CustomerManagedPolicyReferenceListSchema = z
  .array(CustomerManagedPolicyReferenceSchema)
  .openapi('CustomerManagedPolicyReferenceList')

const ListCustomerManagedPolicyReferencesInPermissionSetResponseSchema = z
  .object({
    CustomerManagedPolicyReferences: CustomerManagedPolicyReferenceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the names and paths of the customer managed policies that you have attached to your permission set.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCustomerManagedPolicyReferencesInPermissionSetResponse')

const ListCustomerManagedPolicyReferencesInPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. ',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>PermissionSet</code>. ' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to display for the list call.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn'],
    title: 'ListCustomerManagedPolicyReferencesInPermissionSetRequest',
  })
  .openapi('ListCustomerManagedPolicyReferencesInPermissionSetRequest')

const IdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]*/)
  .min(1)
  .max(64)
  .openapi('Id')

const InstanceMetadataSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
    IdentityStoreId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the identity store that is connected to the IAM Identity Center instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the IAM Identity Center instance.',
    required: [],
  })
  .openapi('InstanceMetadata')

const InstanceListSchema = z.array(InstanceMetadataSchema).openapi('InstanceList')

const ListInstancesResponseSchema = z
  .object({
    Instances: InstanceListSchema.and(
      z
        .any()
        .openapi({
          description: 'Lists the IAM Identity Center instances that the caller has access to.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInstancesResponse')

const ListInstancesRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to display for the instance.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListInstancesRequest', required: [] })
  .openapi('ListInstancesRequest')

const NameSchema = z.string().min(1).max(100).openapi('Name')

const AttachedManagedPolicySchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the AWS managed policy.' }),
    ).exactOptional(),
    Arn: ManagedPolicyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the AWS managed policy. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that stores the details of the AWS managed policy.',
    required: [],
  })
  .openapi('AttachedManagedPolicy')

const AttachedManagedPolicyListSchema = z
  .array(AttachedManagedPolicySchema)
  .openapi('AttachedManagedPolicyList')

const ListManagedPoliciesInPermissionSetResponseSchema = z
  .object({
    AttachedManagedPolicies: AttachedManagedPolicyListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of the <a>AttachedManagedPolicy</a> data type object.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListManagedPoliciesInPermissionSetResponse')

const ListManagedPoliciesInPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the <a>PermissionSet</a> whose managed policies will be listed.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to display for the <a>PermissionSet</a>.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn'],
    title: 'ListManagedPoliciesInPermissionSetRequest',
  })
  .openapi('ListManagedPoliciesInPermissionSetRequest')

const PermissionSetProvisioningStatusMetadataSchema = z
  .object({
    Status: StatusValuesSchema.and(
      z.any().openapi({ description: 'The status of the permission set provisioning process.' }),
    ).exactOptional(),
    RequestId: UUIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.',
        }),
    ).exactOptional(),
    CreatedDate: DateSchema.and(
      z.any().openapi({ description: 'The date that the permission set was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the permission set provisioning status.',
    required: [],
  })
  .openapi('PermissionSetProvisioningStatusMetadata')

const PermissionSetProvisioningStatusListSchema = z
  .array(PermissionSetProvisioningStatusMetadataSchema)
  .openapi('PermissionSetProvisioningStatusList')

const ListPermissionSetProvisioningStatusResponseSchema = z
  .object({
    PermissionSetsProvisioningStatus: PermissionSetProvisioningStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the permission set provisioning operation.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionSetProvisioningStatusResponse')

const ListPermissionSetProvisioningStatusRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to display for the assignment.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
    Filter: OperationStatusFilterSchema.and(
      z.any().openapi({ description: 'Filters results based on the passed attribute value.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceArn'], title: 'ListPermissionSetProvisioningStatusRequest' })
  .openapi('ListPermissionSetProvisioningStatusRequest')

const PermissionSetListSchema = z.array(PermissionSetArnSchema).openapi('PermissionSetList')

const ListPermissionSetsResponseSchema = z
  .object({
    PermissionSets: PermissionSetListSchema.and(
      z.any().openapi({ description: 'Defines the level of access on an AWS account.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionSetsResponse')

const ListPermissionSetsRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to display for the assignment.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceArn'], title: 'ListPermissionSetsRequest' })
  .openapi('ListPermissionSetsRequest')

const ListPermissionSetsProvisionedToAccountResponseSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
    PermissionSets: PermissionSetListSchema.and(
      z.any().openapi({ description: 'Defines the level of access that an AWS account has.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionSetsProvisionedToAccountResponse')

const ListPermissionSetsProvisionedToAccountRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the AWS account from which to list the assignments.',
        }),
    ),
    ProvisioningStatus: ProvisioningStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the permission set provisioning operation.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to display for the assignment.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['InstanceArn', 'AccountId'],
    title: 'ListPermissionSetsProvisionedToAccountRequest',
  })
  .openapi('ListPermissionSetsProvisionedToAccountRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'A set of key-value pairs that are used to manage the resource.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TaggableResourceArnSchema = z
  .string()
  .regex(
    /arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::permissionSet\/(sso)?ins-[a-zA-Z0-9-.]{16}\/ps-[a-zA-Z0-9-.\/]{16}/,
  )
  .min(10)
  .max(2048)
  .openapi('TaggableResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    ResourceArn: TaggableResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource with the tags to be listed.' }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceArn', 'ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ProvisionPermissionSetResponseSchema = z
  .object({
    PermissionSetProvisioningStatus: PermissionSetProvisioningStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status object for the permission set provisioning operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProvisionPermissionSetResponse')

const ProvisionTargetTypeSchema = z
  .enum(['AWS_ACCOUNT', 'ALL_PROVISIONED_ACCOUNTS'])
  .openapi('ProvisionTargetType')

const ProvisionPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the permission set.' }),
    ),
    TargetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).',
        }),
    ).exactOptional(),
    TargetType: ProvisionTargetTypeSchema.and(
      z.any().openapi({ description: 'The entity type for which the assignment will be created.' }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn', 'TargetType'],
    title: 'ProvisionPermissionSetRequest',
  })
  .openapi('ProvisionPermissionSetRequest')

const PutInlinePolicyToPermissionSetResponseSchema = z
  .object({})
  .openapi('PutInlinePolicyToPermissionSetResponse')

const PutInlinePolicyToPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the permission set.' }),
    ),
    InlinePolicy: PermissionSetPolicyDocumentSchema.and(
      z.any().openapi({ description: 'The inline policy to attach to a <a>PermissionSet</a>.' }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn', 'InlinePolicy'],
    title: 'PutInlinePolicyToPermissionSetRequest',
  })
  .openapi('PutInlinePolicyToPermissionSetRequest')

const PutPermissionsBoundaryToPermissionSetResponseSchema = z
  .object({})
  .openapi('PutPermissionsBoundaryToPermissionSetResponse')

const PutPermissionsBoundaryToPermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. ',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the <code>PermissionSet</code>.' }),
    ),
    PermissionsBoundary: PermissionsBoundarySchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions boundary that you want to attach to a <code>PermissionSet</code>.',
        }),
    ),
  })
  .openapi({
    required: ['InstanceArn', 'PermissionSetArn', 'PermissionsBoundary'],
    title: 'PutPermissionsBoundaryToPermissionSetRequest',
  })
  .openapi('PutPermissionsBoundaryToPermissionSetRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    ResourceArn: TaggableResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource with the tags to be listed.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'A set of key-value pairs that are used to manage the resource.' }),
    ),
  })
  .openapi({ required: ['InstanceArn', 'ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    ResourceArn: TaggableResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource with the tags to be listed.' }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of tags that are attached to the resource.' }),
    ),
  })
  .openapi({ required: ['InstanceArn', 'ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateInstanceAccessControlAttributeConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateInstanceAccessControlAttributeConfigurationResponse')

const UpdateInstanceAccessControlAttributeConfigurationRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed.',
        }),
    ),
    InstanceAccessControlAttributeConfiguration:
      InstanceAccessControlAttributeConfigurationSchema.and(
        z.any().openapi({ description: 'Updates the attributes for your ABAC configuration.' }),
      ),
  })
  .openapi({
    required: ['InstanceArn', 'InstanceAccessControlAttributeConfiguration'],
    title: 'UpdateInstanceAccessControlAttributeConfigurationRequest',
  })
  .openapi('UpdateInstanceAccessControlAttributeConfigurationRequest')

const UpdatePermissionSetResponseSchema = z.object({}).openapi('UpdatePermissionSetResponse')

const UpdatePermissionSetRequestSchema = z
  .object({
    InstanceArn: InstanceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.',
        }),
    ),
    PermissionSetArn: PermissionSetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the permission set.' }),
    ),
    Description: PermissionSetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the <a>PermissionSet</a>.' }),
    ).exactOptional(),
    SessionDuration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time that the application user sessions are valid for in the ISO-8601 standard.',
        }),
    ).exactOptional(),
    RelayState: RelayStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to redirect users within the application during the federation authentication process.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceArn', 'PermissionSetArn'], title: 'UpdatePermissionSetRequest' })
  .openapi('UpdatePermissionSetRequest')

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

export const postXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet',
    description:
      'Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.',
    operationId: 'AttachCustomerManagedPolicyReferenceToPermissionSet',
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
          .literal('SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: AttachCustomerManagedPolicyReferenceToPermissionSetRequestSchema,
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
            schema: AttachCustomerManagedPolicyReferenceToPermissionSetResponseSchema,
          },
        },
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
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet',
  description:
    '<p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>',
  operationId: 'AttachManagedPolicyToPermissionSet',
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
        .literal('SWBExternalService.AttachManagedPolicyToPermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SWBExternalService.AttachManagedPolicyToPermissionSet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AttachManagedPolicyToPermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachManagedPolicyToPermissionSetResponseSchema } },
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
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceCreateAccountAssignmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.CreateAccountAssignment',
  description:
    '<p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>',
  operationId: 'CreateAccountAssignment',
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
        .literal('SWBExternalService.CreateAccountAssignment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.CreateAccountAssignment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAccountAssignmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAccountAssignmentResponseSchema } },
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
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration',
    description:
      '<p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>',
    operationId: 'CreateInstanceAccessControlAttributeConfiguration',
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
          .literal('SWBExternalService.CreateInstanceAccessControlAttributeConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.CreateInstanceAccessControlAttributeConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: CreateInstanceAccessControlAttributeConfigurationRequestSchema,
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
            schema: CreateInstanceAccessControlAttributeConfigurationResponseSchema,
          },
        },
      },
      480: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetSWBExternalServiceCreatePermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.CreatePermissionSet',
  description:
    '<p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>',
  operationId: 'CreatePermissionSet',
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
        .literal('SWBExternalService.CreatePermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.CreatePermissionSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePermissionSetResponseSchema } },
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
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceDeleteAccountAssignmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.DeleteAccountAssignment',
  description:
    "<p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>",
  operationId: 'DeleteAccountAssignment',
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
        .literal('SWBExternalService.DeleteAccountAssignment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.DeleteAccountAssignment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAccountAssignmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAccountAssignmentResponseSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet',
    description: 'Deletes the inline policy from a specified permission set.',
    operationId: 'DeleteInlinePolicyFromPermissionSet',
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
          .literal('SWBExternalService.DeleteInlinePolicyFromPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DeleteInlinePolicyFromPermissionSet'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DeleteInlinePolicyFromPermissionSetRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteInlinePolicyFromPermissionSetResponseSchema },
        },
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
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration',
    description:
      'Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.',
    operationId: 'DeleteInstanceAccessControlAttributeConfiguration',
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
          .literal('SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DeleteInstanceAccessControlAttributeConfigurationRequestSchema,
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
            schema: DeleteInstanceAccessControlAttributeConfigurationResponseSchema,
          },
        },
      },
      480: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetSWBExternalServiceDeletePermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.DeletePermissionSet',
  description: 'Deletes the specified permission set.',
  operationId: 'DeletePermissionSet',
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
        .literal('SWBExternalService.DeletePermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.DeletePermissionSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePermissionSetResponseSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet',
    description: 'Deletes the permissions boundary from a specified <a>PermissionSet</a>.',
    operationId: 'DeletePermissionsBoundaryFromPermissionSet',
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
          .literal('SWBExternalService.DeletePermissionsBoundaryFromPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DeletePermissionsBoundaryFromPermissionSet'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DeletePermissionsBoundaryFromPermissionSetRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeletePermissionsBoundaryFromPermissionSetResponseSchema },
        },
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
    },
  })

export const postXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus',
    description: 'Describes the status of the assignment creation request.',
    operationId: 'DescribeAccountAssignmentCreationStatus',
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
          .literal('SWBExternalService.DescribeAccountAssignmentCreationStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DescribeAccountAssignmentCreationStatus'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeAccountAssignmentCreationStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeAccountAssignmentCreationStatusResponseSchema },
        },
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
    },
  })

export const postXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus',
    description: 'Describes the status of the assignment deletion request.',
    operationId: 'DescribeAccountAssignmentDeletionStatus',
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
          .literal('SWBExternalService.DescribeAccountAssignmentDeletionStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DescribeAccountAssignmentDeletionStatus'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeAccountAssignmentDeletionStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeAccountAssignmentDeletionStatusResponseSchema },
        },
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
    },
  })

export const postXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration',
    description:
      'Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.',
    operationId: 'DescribeInstanceAccessControlAttributeConfiguration',
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
          .literal('SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DescribeInstanceAccessControlAttributeConfigurationRequestSchema,
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
            schema: DescribeInstanceAccessControlAttributeConfigurationResponseSchema,
          },
        },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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

export const postXAmzTargetSWBExternalServiceDescribePermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.DescribePermissionSet',
  description: 'Gets the details of the permission set.',
  operationId: 'DescribePermissionSet',
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
        .literal('SWBExternalService.DescribePermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.DescribePermissionSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePermissionSetResponseSchema } },
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
  },
})

export const postXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus',
    description: 'Describes the status for the given permission set provisioning request.',
    operationId: 'DescribePermissionSetProvisioningStatus',
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
          .literal('SWBExternalService.DescribePermissionSetProvisioningStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DescribePermissionSetProvisioningStatus'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribePermissionSetProvisioningStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribePermissionSetProvisioningStatusResponseSchema },
        },
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
    },
  })

export const postXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet',
    description:
      'Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.',
    operationId: 'DetachCustomerManagedPolicyReferenceFromPermissionSet',
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
          .literal('SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DetachCustomerManagedPolicyReferenceFromPermissionSetRequestSchema,
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
            schema: DetachCustomerManagedPolicyReferenceFromPermissionSetResponseSchema,
          },
        },
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
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet',
    description: 'Detaches the attached AWS managed policy ARN from the specified permission set.',
    operationId: 'DetachManagedPolicyFromPermissionSet',
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
          .literal('SWBExternalService.DetachManagedPolicyFromPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.DetachManagedPolicyFromPermissionSet'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DetachManagedPolicyFromPermissionSetRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DetachManagedPolicyFromPermissionSetResponseSchema },
        },
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
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet',
  description: 'Obtains the inline policy assigned to the permission set.',
  operationId: 'GetInlinePolicyForPermissionSet',
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
        .literal('SWBExternalService.GetInlinePolicyForPermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SWBExternalService.GetInlinePolicyForPermissionSet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInlinePolicyForPermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInlinePolicyForPermissionSetResponseSchema } },
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
  },
})

export const postXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet',
    description: 'Obtains the permissions boundary for a specified <a>PermissionSet</a>.',
    operationId: 'GetPermissionsBoundaryForPermissionSet',
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
          .literal('SWBExternalService.GetPermissionsBoundaryForPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.GetPermissionsBoundaryForPermissionSet'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetPermissionsBoundaryForPermissionSetRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetPermissionsBoundaryForPermissionSetResponseSchema },
        },
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
    },
  })

export const postXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus',
    description:
      'Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.',
    operationId: 'ListAccountAssignmentCreationStatus',
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
          .literal('SWBExternalService.ListAccountAssignmentCreationStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.ListAccountAssignmentCreationStatus'],
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
          'application/json': { schema: ListAccountAssignmentCreationStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListAccountAssignmentCreationStatusResponseSchema },
        },
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
    },
  },
)

export const postXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus',
    description:
      'Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.',
    operationId: 'ListAccountAssignmentDeletionStatus',
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
          .literal('SWBExternalService.ListAccountAssignmentDeletionStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.ListAccountAssignmentDeletionStatus'],
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
          'application/json': { schema: ListAccountAssignmentDeletionStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListAccountAssignmentDeletionStatusResponseSchema },
        },
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
    },
  },
)

export const postXAmzTargetSWBExternalServiceListAccountAssignmentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.ListAccountAssignments',
  description: 'Lists the assignee of the specified AWS account with the specified permission set.',
  operationId: 'ListAccountAssignments',
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
        .literal('SWBExternalService.ListAccountAssignments')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.ListAccountAssignments'] },
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
      content: { 'application/json': { schema: ListAccountAssignmentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccountAssignmentsResponseSchema } },
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
  },
})

export const postXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet',
    description: 'Lists all the AWS accounts where the specified permission set is provisioned.',
    operationId: 'ListAccountsForProvisionedPermissionSet',
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
          .literal('SWBExternalService.ListAccountsForProvisionedPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.ListAccountsForProvisionedPermissionSet'],
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
          'application/json': { schema: ListAccountsForProvisionedPermissionSetRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListAccountsForProvisionedPermissionSetResponseSchema },
        },
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
    },
  })

export const postXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet',
    description:
      'Lists all customer managed policies attached to a specified <a>PermissionSet</a>.',
    operationId: 'ListCustomerManagedPolicyReferencesInPermissionSet',
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
          .literal('SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet'],
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
          'application/json': {
            schema: ListCustomerManagedPolicyReferencesInPermissionSetRequestSchema,
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
            schema: ListCustomerManagedPolicyReferencesInPermissionSetResponseSchema,
          },
        },
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
    },
  })

export const postXAmzTargetSWBExternalServiceListInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.ListInstances',
  description: 'Lists the IAM Identity Center instances that the caller has access to.',
  operationId: 'ListInstances',
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
        .literal('SWBExternalService.ListInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.ListInstances'] },
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
      content: { 'application/json': { schema: ListInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInstancesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet',
  description: 'Lists the AWS managed policy that is attached to a specified permission set.',
  operationId: 'ListManagedPoliciesInPermissionSet',
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
        .literal('SWBExternalService.ListManagedPoliciesInPermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SWBExternalService.ListManagedPoliciesInPermissionSet'],
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
      content: { 'application/json': { schema: ListManagedPoliciesInPermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListManagedPoliciesInPermissionSetResponseSchema } },
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
  },
})

export const postXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus',
    description:
      'Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.',
    operationId: 'ListPermissionSetProvisioningStatus',
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
          .literal('SWBExternalService.ListPermissionSetProvisioningStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.ListPermissionSetProvisioningStatus'],
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
          'application/json': { schema: ListPermissionSetProvisioningStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListPermissionSetProvisioningStatusResponseSchema },
        },
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
    },
  },
)

export const postXAmzTargetSWBExternalServiceListPermissionSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.ListPermissionSets',
  description: 'Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.',
  operationId: 'ListPermissionSets',
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
        .literal('SWBExternalService.ListPermissionSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.ListPermissionSets'] },
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
      content: { 'application/json': { schema: ListPermissionSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPermissionSetsResponseSchema } },
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
  },
})

export const postXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount',
    description: 'Lists all the permission sets that are provisioned to a specified AWS account.',
    operationId: 'ListPermissionSetsProvisionedToAccount',
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
          .literal('SWBExternalService.ListPermissionSetsProvisionedToAccount')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.ListPermissionSetsProvisionedToAccount'],
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
          'application/json': { schema: ListPermissionSetsProvisionedToAccountRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListPermissionSetsProvisionedToAccountResponseSchema },
        },
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
    },
  })

export const postXAmzTargetSWBExternalServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.ListTagsForResource',
  description: 'Lists the tags that are attached to a specified resource.',
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
        .literal('SWBExternalService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.ListTagsForResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceProvisionPermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.ProvisionPermissionSet',
  description:
    'The process by which a specified permission set is provisioned to the specified target.',
  operationId: 'ProvisionPermissionSet',
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
        .literal('SWBExternalService.ProvisionPermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.ProvisionPermissionSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProvisionPermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ProvisionPermissionSetResponseSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet',
  description:
    '<p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>',
  operationId: 'PutInlinePolicyToPermissionSet',
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
        .literal('SWBExternalService.PutInlinePolicyToPermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.PutInlinePolicyToPermissionSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutInlinePolicyToPermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutInlinePolicyToPermissionSetResponseSchema } },
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
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet',
    description:
      'Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.',
    operationId: 'PutPermissionsBoundaryToPermissionSet',
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
          .literal('SWBExternalService.PutPermissionsBoundaryToPermissionSet')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.PutPermissionsBoundaryToPermissionSet'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: PutPermissionsBoundaryToPermissionSetRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: PutPermissionsBoundaryToPermissionSetResponseSchema },
        },
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
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetSWBExternalServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.TagResource',
  description: 'Associates a set of tags with a specified resource.',
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
        .literal('SWBExternalService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.TagResource'] },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.UntagResource',
  description: 'Disassociates a set of tags from a specified resource.',
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
        .literal('SWBExternalService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.UntagResource'] },
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
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration',
    description:
      'Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.',
    operationId: 'UpdateInstanceAccessControlAttributeConfiguration',
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
          .literal('SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: UpdateInstanceAccessControlAttributeConfigurationRequestSchema,
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
            schema: UpdateInstanceAccessControlAttributeConfigurationResponseSchema,
          },
        },
      },
      480: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetSWBExternalServiceUpdatePermissionSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SWBExternalService.UpdatePermissionSet',
  description: 'Updates an existing permission set.',
  operationId: 'UpdatePermissionSet',
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
        .literal('SWBExternalService.UpdatePermissionSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SWBExternalService.UpdatePermissionSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePermissionSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePermissionSetResponseSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
