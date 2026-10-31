import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const ResourceShareInvitationStatusSchema = z
  .enum(['PENDING', 'ACCEPTED', 'REJECTED', 'EXPIRED'])
  .openapi('ResourceShareInvitationStatus')

const ResourceShareAssociationTypeSchema = z
  .enum(['PRINCIPAL', 'RESOURCE'])
  .openapi('ResourceShareAssociationType')

const ResourceShareAssociationStatusSchema = z
  .enum(['ASSOCIATING', 'ASSOCIATED', 'FAILED', 'DISASSOCIATING', 'DISASSOCIATED'])
  .openapi('ResourceShareAssociationStatus')

const BooleanSchema = z.boolean().openapi('Boolean')

const ResourceShareAssociationSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share.',
        }),
    ).exactOptional(),
    resourceShareName: StringSchema.and(
      z.any().openapi({ description: 'The name of the resource share.' }),
    ).exactOptional(),
    associatedEntity: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The associated entity. This can be either of the following:</p> <ul> <li> <p>For a resource association, this is the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource.</p> </li> <li> <p>For principal associations, this is one of the following:</p> <ul> <li> <p>The ID of an Amazon Web Services account</p> </li> <li> <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations</p> </li> <li> <p>The ARN of an organizational unit (OU) in Organizations</p> </li> <li> <p>The ARN of an IAM role</p> </li> <li> <p>The ARN of an IAM user</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    associationType: ResourceShareAssociationTypeSchema.and(
      z.any().openapi({ description: 'The type of entity included in this association.' }),
    ).exactOptional(),
    status: ResourceShareAssociationStatusSchema.and(
      z.any().openapi({ description: 'The current status of the association.' }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'A message about the status of the association.' }),
    ).exactOptional(),
    creationTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the association was created.' }),
    ).exactOptional(),
    lastUpdatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the association was last updated.' }),
    ).exactOptional(),
    external: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the principal belongs to the same organization in Organizations as the Amazon Web Services account that owns the resource share.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an association between a resource share and either a principal or a resource.',
    required: [],
  })
  .openapi('ResourceShareAssociation')

const ResourceShareAssociationListSchema = z
  .array(ResourceShareAssociationSchema)
  .openapi('ResourceShareAssociationList')

const ResourceShareInvitationSchema = z
  .object({
    resourceShareInvitationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation.',
        }),
    ).exactOptional(),
    resourceShareName: StringSchema.and(
      z.any().openapi({ description: 'The name of the resource share.' }),
    ).exactOptional(),
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share',
        }),
    ).exactOptional(),
    senderAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that sent the invitation.',
        }),
    ).exactOptional(),
    receiverAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that received the invitation.',
        }),
    ).exactOptional(),
    invitationTimestamp: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the invitation was sent.' }),
    ).exactOptional(),
    status: ResourceShareInvitationStatusSchema.and(
      z.any().openapi({ description: 'The current status of the invitation.' }),
    ).exactOptional(),
    resourceShareAssociations: ResourceShareAssociationListSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'To view the resources associated with a pending resource share invitation, use <a>ListPendingInvitationResources</a>.This member has been deprecated. Use ListPendingInvitationResources.',
        }),
    ).exactOptional(),
    receiverArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the IAM user or role that received the invitation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an invitation for an Amazon Web Services account to join a resource share.',
    required: [],
  })
  .openapi('ResourceShareInvitation')

const AcceptResourceShareInvitationResponseSchema = z
  .object({
    resourceShareInvitation: ResourceShareInvitationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about the specified invitation.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AcceptResourceShareInvitationResponse')

const MalformedArnExceptionSchema = z.any().openapi('MalformedArnException')

const OperationNotPermittedExceptionSchema = z.any().openapi('OperationNotPermittedException')

const ResourceShareInvitationArnNotFoundExceptionSchema = z
  .any()
  .openapi('ResourceShareInvitationArnNotFoundException')

const ResourceShareInvitationAlreadyAcceptedExceptionSchema = z
  .any()
  .openapi('ResourceShareInvitationAlreadyAcceptedException')

const ResourceShareInvitationAlreadyRejectedExceptionSchema = z
  .any()
  .openapi('ResourceShareInvitationAlreadyRejectedException')

const ResourceShareInvitationExpiredExceptionSchema = z
  .any()
  .openapi('ResourceShareInvitationExpiredException')

const ServerInternalExceptionSchema = z.any().openapi('ServerInternalException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const InvalidClientTokenExceptionSchema = z.any().openapi('InvalidClientTokenException')

const IdempotentParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotentParameterMismatchException')

const AssociateResourceShareResponseSchema = z
  .object({
    resourceShareAssociations: ResourceShareAssociationListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that contain information about the associations.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateResourceShareResponse')

const UnknownResourceExceptionSchema = z.any().openapi('UnknownResourceException')

const InvalidStateTransitionExceptionSchema = z.any().openapi('InvalidStateTransitionException')

const ResourceShareLimitExceededExceptionSchema = z
  .any()
  .openapi('ResourceShareLimitExceededException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AssociateResourceSharePermissionResponseSchema = z
  .object({
    returnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A return value of <code>true</code> indicates that the request succeeded. A value of <code>false</code> indicates that the request failed.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateResourceSharePermissionResponse')

const PermissionTypeSchema = z.enum(['CUSTOMER_MANAGED', 'AWS_MANAGED']).openapi('PermissionType')

const PermissionFeatureSetSchema = z
  .enum(['CREATED_FROM_POLICY', 'PROMOTING_TO_STANDARD', 'STANDARD'])
  .openapi('PermissionFeatureSet')

const TagKeySchema = z.string().openapi('TagKey')

const TagValueSchema = z.string().openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key, or name, attached to the tag. Every tag must have a key. Key names are case sensitive.',
        }),
    ).exactOptional(),
    value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string value attached to the tag. The value can be an empty string. Key values are case sensitive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A structure containing a tag. A tag is metadata that you can attach to your resources to help organize and categorize them. You can also use them to help you secure your resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const ResourceSharePermissionSummarySchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission you want information about.',
        }),
    ).exactOptional(),
    version: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the permission associated with this resource share.',
        }),
    ).exactOptional(),
    defaultVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the version of the managed permission used by this resource share is the default version for this managed permission.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of this managed permission.' }),
    ).exactOptional(),
    resourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of resource to which this permission applies. This takes the form of: <code>service-code</code>:<code>resource-code</code>, and is case-insensitive. For example, an Amazon EC2 Subnet would be represented by the string <code>ec2:subnet</code>.',
        }),
    ).exactOptional(),
    status: StringSchema.and(
      z.any().openapi({ description: 'The current status of the permission.' }),
    ).exactOptional(),
    creationTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the permission was created.' }),
    ).exactOptional(),
    lastUpdatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the permission was last updated.' }),
    ).exactOptional(),
    isResourceTypeDefault: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the managed permission associated with this resource share is the default managed permission for all resources of this resource type.',
        }),
    ).exactOptional(),
    permissionType: PermissionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of managed permission. This can be one of the following values:</p> <ul> <li> <p> <code>AWS_MANAGED</code> – Amazon Web Services created and manages this managed permission. You can associate it with your resource shares, but you can't modify it.</p> </li> <li> <p> <code>CUSTOMER_MANAGED</code> – You, or another principal in your account created this managed permission. You can associate it with your resource shares and create new versions that have different permissions.</p> </li> </ul>",
        }),
    ).exactOptional(),
    featureSet: PermissionFeatureSetSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates what features are available for this resource share. This parameter can have one of the following values:</p> <ul> <li> <p> <b>STANDARD</b> – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been <b>CREATED_FROM_POLICY</b> and then promoted.</p> </li> <li> <p> <b>CREATED_FROM_POLICY</b> – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p> </li> <li> <p> <b>PROMOTING_TO_STANDARD</b> – This resource share was originally <code>CREATED_FROM_POLICY</code>, but the customer ran the <a>PromoteResourceShareCreatedFromPolicy</a> and that operation is still in progress. This value changes to <code>STANDARD</code> when complete.</p> </li> </ul>",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the tag key value pairs currently attached to the permission.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an RAM permission.', required: [] })
  .openapi('ResourceSharePermissionSummary')

const CreatePermissionResponseSchema = z
  .object({
    permission: ResourceSharePermissionSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'A structure with information about this customer managed permission.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePermissionResponse')

const InvalidPolicyExceptionSchema = z.any().openapi('InvalidPolicyException')

const PermissionAlreadyExistsExceptionSchema = z.any().openapi('PermissionAlreadyExistsException')

const MalformedPolicyTemplateExceptionSchema = z.any().openapi('MalformedPolicyTemplateException')

const PermissionLimitExceededExceptionSchema = z.any().openapi('PermissionLimitExceededException')

const PermissionStatusSchema = z
  .enum(['ATTACHABLE', 'UNATTACHABLE', 'DELETING', 'DELETED'])
  .openapi('PermissionStatus')

const ResourceSharePermissionDetailSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of this RAM managed permission.',
        }),
    ).exactOptional(),
    version: StringSchema.and(
      z.any().openapi({ description: 'The version of the permission described in this response.' }),
    ).exactOptional(),
    defaultVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the version of the permission represented in this response is the default version for this permission.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of this permission.' }),
    ).exactOptional(),
    resourceType: StringSchema.and(
      z.any().openapi({ description: 'The resource type to which this permission applies.' }),
    ).exactOptional(),
    permission: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The permission's effect and actions in JSON format. The <code>effect</code> indicates whether the specified actions are allowed or denied. The <code>actions</code> list the operations to which the principal is granted or denied access.",
        }),
    ).exactOptional(),
    creationTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the permission was created.' }),
    ).exactOptional(),
    lastUpdatedTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the permission was last updated.' }),
    ).exactOptional(),
    isResourceTypeDefault: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the version of the permission represented in this response is the default version for all resources of this resource type.',
        }),
    ).exactOptional(),
    permissionType: PermissionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of managed permission. This can be one of the following values:</p> <ul> <li> <p> <code>AWS_MANAGED</code> – Amazon Web Services created and manages this managed permission. You can associate it with your resource shares, but you can't modify it.</p> </li> <li> <p> <code>CUSTOMER_MANAGED</code> – You, or another principal in your account created this managed permission. You can associate it with your resource shares and create new versions that have different permissions.</p> </li> </ul>",
        }),
    ).exactOptional(),
    featureSet: PermissionFeatureSetSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates what features are available for this resource share. This parameter can have one of the following values:</p> <ul> <li> <p> <b>STANDARD</b> – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been <b>CREATED_FROM_POLICY</b> and then promoted.</p> </li> <li> <p> <b>CREATED_FROM_POLICY</b> – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p> </li> <li> <p> <b>PROMOTING_TO_STANDARD</b> – This resource share was originally <code>CREATED_FROM_POLICY</code>, but the customer ran the <a>PromoteResourceShareCreatedFromPolicy</a> and that operation is still in progress. This value changes to <code>STANDARD</code> when complete.</p> </li> </ul>",
        }),
    ).exactOptional(),
    status: PermissionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of the association between the permission and the resource share. The following are the possible values:</p> <ul> <li> <p> <code>ATTACHABLE</code> – This permission or version can be associated with resource shares.</p> </li> <li> <p> <code>UNATTACHABLE</code> – This permission or version can't currently be associated with resource shares.</p> </li> <li> <p> <code>DELETING</code> – This permission or version is in the process of being deleted.</p> </li> <li> <p> <code>DELETED</code> – This permission or version is deleted.</p> </li> </ul>",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tag key and value pairs attached to the resource share.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a RAM managed permission.', required: [] })
  .openapi('ResourceSharePermissionDetail')

const CreatePermissionVersionResponseSchema = z
  .object({
    permission: ResourceSharePermissionDetailSchema.exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePermissionVersionResponse')

const PermissionVersionsLimitExceededExceptionSchema = z
  .any()
  .openapi('PermissionVersionsLimitExceededException')

const ResourceShareStatusSchema = z
  .enum(['PENDING', 'ACTIVE', 'FAILED', 'DELETING', 'DELETED'])
  .openapi('ResourceShareStatus')

const ResourceShareFeatureSetSchema = z
  .enum(['CREATED_FROM_POLICY', 'PROMOTING_TO_STANDARD', 'STANDARD'])
  .openapi('ResourceShareFeatureSet')

const ResourceShareSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the resource share.' }),
    ).exactOptional(),
    owningAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that owns the resource share.',
        }),
    ).exactOptional(),
    allowExternalPrincipals: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether principals outside your organization in Organizations can be associated with a resource share.</p> <ul> <li> <p> <code>True</code> – the resource share can be shared with any Amazon Web Services account.</p> </li> <li> <p> <code>False</code> – the resource share can be shared with only accounts in the same organization as the account that owns the resource share.</p> </li> </ul>',
        }),
    ).exactOptional(),
    status: ResourceShareStatusSchema.and(
      z.any().openapi({ description: 'The current status of the resource share.' }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'A message about the status of the resource share.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tag key and value pairs attached to the resource share.' }),
    ).exactOptional(),
    creationTime: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the resource share was created.' }),
    ).exactOptional(),
    lastUpdatedTime: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the resource share was last updated.' }),
    ).exactOptional(),
    featureSet: ResourceShareFeatureSetSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates what features are available for this resource share. This parameter can have one of the following values:</p> <ul> <li> <p> <b>STANDARD</b> – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been <b>CREATED_FROM_POLICY</b> and then promoted.</p> </li> <li> <p> <b>CREATED_FROM_POLICY</b> – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p> </li> <li> <p> <b>PROMOTING_TO_STANDARD</b> – This resource share was originally <code>CREATED_FROM_POLICY</code>, but the customer ran the <a>PromoteResourceShareCreatedFromPolicy</a> and that operation is still in progress. This value changes to <code>STANDARD</code> when complete.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a resource share in RAM.', required: [] })
  .openapi('ResourceShare')

const CreateResourceShareResponseSchema = z
  .object({
    resourceShare: ResourceShareSchema.and(
      z.any().openapi({ description: 'An object with information about the new resource share.' }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateResourceShareResponse')

const TagPolicyViolationExceptionSchema = z.any().openapi('TagPolicyViolationException')

const DeletePermissionResponseSchema = z
  .object({
    returnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A boolean that indicates whether the delete operations succeeded.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
    permissionStatus: PermissionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'This operation is performed asynchronously, and this response parameter indicates the current status.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeletePermissionResponse')

const DeletePermissionVersionResponseSchema = z
  .object({
    returnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A boolean value that indicates whether the operation is successful.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
    permissionStatus: PermissionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'This operation is performed asynchronously, and this response parameter indicates the current status.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeletePermissionVersionResponse')

const DeleteResourceShareResponseSchema = z
  .object({
    returnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A return value of <code>true</code> indicates that the request succeeded. A value of <code>false</code> indicates that the request failed.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteResourceShareResponse')

const DisassociateResourceShareResponseSchema = z
  .object({
    resourceShareAssociations: ResourceShareAssociationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects with information about the updated associations for this resource share.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateResourceShareResponse')

const DisassociateResourceSharePermissionResponseSchema = z
  .object({
    returnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A return value of <code>true</code> indicates that the request succeeded. A value of <code>false</code> indicates that the request failed.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateResourceSharePermissionResponse')

const EnableSharingWithAwsOrganizationResponseSchema = z
  .object({
    returnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A return value of <code>true</code> indicates that the request succeeded. A value of <code>false</code> indicates that the request failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnableSharingWithAwsOrganizationResponse')

const GetPermissionResponseSchema = z
  .object({
    permission: ResourceSharePermissionDetailSchema.and(
      z.any().openapi({ description: 'An object with details about the permission.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPermissionResponse')

const PolicySchema = z.string().openapi('Policy')

const PolicyListSchema = z.array(PolicySchema).openapi('PolicyList')

const GetResourcePoliciesResponseSchema = z
  .object({
    policies: PolicyListSchema.and(
      z.any().openapi({ description: 'An array of resource policy documents in JSON format.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourcePoliciesResponse')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ResourceArnNotFoundExceptionSchema = z.any().openapi('ResourceArnNotFoundException')

const GetResourceShareAssociationsResponseSchema = z
  .object({
    resourceShareAssociations: ResourceShareAssociationListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that contain the details about the associations.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceShareAssociationsResponse')

const ResourceShareInvitationListSchema = z
  .array(ResourceShareInvitationSchema)
  .openapi('ResourceShareInvitationList')

const GetResourceShareInvitationsResponseSchema = z
  .object({
    resourceShareInvitations: ResourceShareInvitationListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that contain the details about the invitations.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceShareInvitationsResponse')

const InvalidMaxResultsExceptionSchema = z.any().openapi('InvalidMaxResultsException')

const ResourceShareListSchema = z.array(ResourceShareSchema).openapi('ResourceShareList')

const GetResourceSharesResponseSchema = z
  .object({
    resourceShares: ResourceShareListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contain the information about the resource shares.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceSharesResponse')

const TagValueListSchema = z.array(TagValueSchema).openapi('TagValueList')

const TagFilterSchema = z
  .object({
    tagKey: TagKeySchema.and(
      z
        .any()
        .openapi({
          description: "The tag key. This must have a valid string value and can't be empty.",
        }),
    ).exactOptional(),
    tagValues: TagValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of zero or more tag values. If no values are provided, then the filter matches any tag with the specified key, regardless of its value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A tag key and optional list of possible values that you can use to filter results for tagged resources.',
    required: [],
  })
  .openapi('TagFilter')

const ResourceStatusSchema = z
  .enum(['AVAILABLE', 'ZONAL_RESOURCE_INACCESSIBLE', 'LIMIT_EXCEEDED', 'UNAVAILABLE', 'PENDING'])
  .openapi('ResourceStatus')

const ResourceRegionScopeSchema = z.enum(['REGIONAL', 'GLOBAL']).openapi('ResourceRegionScope')

const ResourceSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource.',
        }),
    ).exactOptional(),
    type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type. This takes the form of: <code>service-code</code>:<code>resource-code</code>, and is case-insensitive. For example, an Amazon EC2 Subnet would be represented by the string <code>ec2:subnet</code>.',
        }),
    ).exactOptional(),
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share this resource is associated with.',
        }),
    ).exactOptional(),
    resourceGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource group. This value is available only if the resource is part of a resource group.',
        }),
    ).exactOptional(),
    status: ResourceStatusSchema.and(
      z.any().openapi({ description: 'The current status of the resource.' }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'A message about the status of the resource.' }),
    ).exactOptional(),
    creationTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the resource was associated with the resource share.',
        }),
    ).exactOptional(),
    lastUpdatedTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date an time when the association between the resource and the resource share was last updated.',
        }),
    ).exactOptional(),
    resourceRegionScope: ResourceRegionScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the scope of visibility of this resource:</p> <ul> <li> <p> <b>REGIONAL</b> – The resource can be accessed only by using requests that target the Amazon Web Services Region in which the resource exists.</p> </li> <li> <p> <b>GLOBAL</b> – The resource can be accessed from any Amazon Web Services Region.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a resource associated with a resource share in RAM.',
    required: [],
  })
  .openapi('Resource')

const ResourceListSchema = z.array(ResourceSchema).openapi('ResourceList')

const ListPendingInvitationResourcesResponseSchema = z
  .object({
    resources: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contain the information about the resources included the specified resource share.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPendingInvitationResourcesResponse')

const MissingRequiredParameterExceptionSchema = z.any().openapi('MissingRequiredParameterException')

const AssociatedPermissionSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the associated managed permission.',
        }),
    ).exactOptional(),
    permissionVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the permission currently associated with the resource share.',
        }),
    ).exactOptional(),
    defaultVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the associated resource share is using the default version of the permission.',
        }),
    ).exactOptional(),
    resourceType: StringSchema.and(
      z.any().openapi({ description: 'The resource type to which this permission applies.' }),
    ).exactOptional(),
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of the association between the permission and the resource share. The following are the possible values:</p> <ul> <li> <p> <code>ATTACHABLE</code> – This permission or version can be associated with resource shares.</p> </li> <li> <p> <code>UNATTACHABLE</code> – This permission or version can't currently be associated with resource shares.</p> </li> <li> <p> <code>DELETING</code> – This permission or version is in the process of being deleted.</p> </li> <li> <p> <code>DELETED</code> – This permission or version is deleted.</p> </li> </ul>",
        }),
    ).exactOptional(),
    featureSet: PermissionFeatureSetSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates what features are available for this resource share. This parameter can have one of the following values:</p> <ul> <li> <p> <b>STANDARD</b> – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been <b>CREATED_FROM_POLICY</b> and then promoted.</p> </li> <li> <p> <b>CREATED_FROM_POLICY</b> – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p> </li> <li> <p> <b>PROMOTING_TO_STANDARD</b> – This resource share was originally <code>CREATED_FROM_POLICY</code>, but the customer ran the <a>PromoteResourceShareCreatedFromPolicy</a> and that operation is still in progress. This value changes to <code>STANDARD</code> when complete.</p> </li> </ul>",
        }),
    ).exactOptional(),
    lastUpdatedTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the association between the permission and the resource share was last updated.',
        }),
    ).exactOptional(),
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource share associated with this permission.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that describes a managed permission associated with a resource share.',
    required: [],
  })
  .openapi('AssociatedPermission')

const AssociatedPermissionListSchema = z
  .array(AssociatedPermissionSchema)
  .openapi('AssociatedPermissionList')

const ListPermissionAssociationsResponseSchema = z
  .object({
    permissions: AssociatedPermissionListSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure with information about this customer managed permission.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionAssociationsResponse')

const ResourceSharePermissionListSchema = z
  .array(ResourceSharePermissionSummarySchema)
  .openapi('ResourceSharePermissionList')

const ListPermissionVersionsResponseSchema = z
  .object({
    permissions: ResourceSharePermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contain details for each of the available versions.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionVersionsResponse')

const ListPermissionsResponseSchema = z
  .object({
    permissions: ResourceSharePermissionListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects with information about the permissions.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionsResponse')

const PrincipalSchema = z
  .object({
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the principal that can be associated with a resource share.',
        }),
    ).exactOptional(),
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource share the principal is associated with.',
        }),
    ).exactOptional(),
    creationTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the principal was associated with the resource share.',
        }),
    ).exactOptional(),
    lastUpdatedTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the association between the resource share and the principal was last updated.',
        }),
    ).exactOptional(),
    external: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the relationship between the Amazon Web Services account the principal belongs to and the account that owns the resource share:</p> <ul> <li> <p> <code>True</code> – The two accounts belong to same organization.</p> </li> <li> <p> <code>False</code> – The two accounts do not belong to the same organization.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a principal for use with Resource Access Manager.',
    required: [],
  })
  .openapi('Principal')

const PrincipalListSchema = z.array(PrincipalSchema).openapi('PrincipalList')

const ListPrincipalsResponseSchema = z
  .object({
    principals: PrincipalListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that contain the details about the principals.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPrincipalsResponse')

const ReplacePermissionAssociationsWorkStatusSchema = z
  .enum(['IN_PROGRESS', 'COMPLETED', 'FAILED'])
  .openapi('ReplacePermissionAssociationsWorkStatus')

const ReplacePermissionAssociationsWorkSchema = z
  .object({
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the background task associated with one <a>ReplacePermissionAssociations</a> request.',
        }),
    ).exactOptional(),
    fromPermissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that this background task is replacing.',
        }),
    ).exactOptional(),
    fromPermissionVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the managed permission that this background task is replacing.',
        }),
    ).exactOptional(),
    toPermissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the managed permission that this background task is associating with the resource shares in place of the managed permission and version specified in <code>fromPermissionArn</code> and <code>fromPermissionVersion</code>.',
        }),
    ).exactOptional(),
    toPermissionVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the managed permission that this background task is associating with the resource shares. This is always the version that is currently the default for this managed permission.',
        }),
    ).exactOptional(),
    status: ReplacePermissionAssociationsWorkStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the current status of the background tasks for the specified ID. The output is one of the following strings:</p> <ul> <li> <p> <code>IN_PROGRESS</code> </p> </li> <li> <p> <code>COMPLETED</code> </p> </li> <li> <p> <code>FAILED</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the reason for a <code>FAILED</code> status. This field is present only when there <code>status</code> is <code>FAILED</code>.',
        }),
    ).exactOptional(),
    creationTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when this asynchronous background task was created.',
        }),
    ).exactOptional(),
    lastUpdatedTime: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the status of this background task was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that represents the background work that RAM performs when you invoke the <a>ReplacePermissionAssociations</a> operation.',
    required: [],
  })
  .openapi('ReplacePermissionAssociationsWork')

const ReplacePermissionAssociationsWorkListSchema = z
  .array(ReplacePermissionAssociationsWorkSchema)
  .openapi('ReplacePermissionAssociationsWorkList')

const ListReplacePermissionAssociationsWorkResponseSchema = z
  .object({
    replacePermissionAssociationsWorks: ReplacePermissionAssociationsWorkListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of data structures that provide details of the matching work IDs.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReplacePermissionAssociationsWorkResponse')

const ListResourceSharePermissionsResponseSchema = z
  .object({
    permissions: ResourceSharePermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that describe the permissions associated with the resource share.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourceSharePermissionsResponse')

const ServiceNameAndResourceTypeSchema = z
  .object({
    resourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the resource. This takes the form of: <code>service-code</code>:<code>resource-code</code>, and is case-insensitive. For example, an Amazon EC2 Subnet would be represented by the string <code>ec2:subnet</code>.',
        }),
    ).exactOptional(),
    serviceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon Web Services service to which resources of this type belong.',
        }),
    ).exactOptional(),
    resourceRegionScope: ResourceRegionScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the scope of visibility of resources of this type:</p> <ul> <li> <p> <b>REGIONAL</b> – The resource can be accessed only by using requests that target the Amazon Web Services Region in which the resource exists.</p> </li> <li> <p> <b>GLOBAL</b> – The resource can be accessed from any Amazon Web Services Region.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a shareable resource type and the Amazon Web Services service to which resources of that type belong.',
    required: [],
  })
  .openapi('ServiceNameAndResourceType')

const ServiceNameAndResourceTypeListSchema = z
  .array(ServiceNameAndResourceTypeSchema)
  .openapi('ServiceNameAndResourceTypeList')

const ListResourceTypesResponseSchema = z
  .object({
    resourceTypes: ServiceNameAndResourceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contain information about the resource types that can be shared using RAM.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourceTypesResponse')

const ListResourcesResponseSchema = z
  .object({
    resources: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of objects that contain information about the resources.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, this value indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>. This indicates that this is the last page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourcesResponse')

const InvalidResourceTypeExceptionSchema = z.any().openapi('InvalidResourceTypeException')

const PromotePermissionCreatedFromPolicyResponseSchema = z
  .object({
    permission: ResourceSharePermissionSummarySchema.exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PromotePermissionCreatedFromPolicyResponse')

const PromoteResourceShareCreatedFromPolicyResponseSchema = z
  .object({
    returnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A return value of <code>true</code> indicates that the request succeeded. A value of <code>false</code> indicates that the request failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PromoteResourceShareCreatedFromPolicyResponse')

const UnmatchedPolicyPermissionExceptionSchema = z
  .any()
  .openapi('UnmatchedPolicyPermissionException')

const RejectResourceShareInvitationResponseSchema = z
  .object({
    resourceShareInvitation: ResourceShareInvitationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains the details about the rejected invitation.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RejectResourceShareInvitationResponse')

const ReplacePermissionAssociationsResponseSchema = z
  .object({
    replacePermissionAssociationsWork: ReplacePermissionAssociationsWorkSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a data structure that you can use to track the asynchronous tasks that RAM performs to complete this operation. You can use the <a>ListReplacePermissionAssociationsWork</a> operation and pass the <code>id</code> value returned in this structure.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReplacePermissionAssociationsResponse')

const SetDefaultPermissionVersionResponseSchema = z
  .object({
    returnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'A boolean value that indicates whether the operation was successful.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetDefaultPermissionVersionResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagLimitExceededExceptionSchema = z.any().openapi('TagLimitExceededException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateResourceShareResponseSchema = z
  .object({
    resourceShare: ResourceShareSchema.and(
      z.any().openapi({ description: 'Information about the resource share.' }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the <code>clientToken</code> request parameter of that later call. All other parameters must also have the same values that you used in the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResourceShareResponse')

const AcceptResourceShareInvitationRequestSchema = z
  .object({
    resourceShareInvitationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to accept.',
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceShareInvitationArn'],
    title: 'AcceptResourceShareInvitationRequest',
  })
  .openapi('AcceptResourceShareInvitationRequest')

const IntegerSchema = z.int().openapi('Integer')

const AssociateResourceSharePermissionRequestSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to which you want to add or replace permissions.',
        }),
    ),
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission to associate with the resource share. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.',
        }),
    ),
    replace: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether the specified permission should replace the existing permission associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to a resource share that currently doesn't have a permission. The default value is <code>false</code>.</p> <note> <p>A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set <code>replace</code> to <code>true</code> then the operation returns an error. This helps prevent accidental overwriting of a permission.</p> </note>",
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
    permissionVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the version of the RAM permission to associate with the resource share. You can specify <i>only</i> the version that is currently set as the default version for the permission. If you also set the <code>replace</code> pararameter to <code>true</code>, then this operation updates an outdated version of the permission to the current default version.</p> <note> <p>You don't need to specify this parameter because the default behavior is to use the version that is currently set as the default version for the permission. This parameter is supported for backwards compatibility.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceShareArn', 'permissionArn'],
    title: 'AssociateResourceSharePermissionRequest',
  })
  .openapi('AssociateResourceSharePermissionRequest')

const ResourceArnListSchema = z.array(StringSchema).openapi('ResourceArnList')

const PrincipalArnOrIdListSchema = z.array(StringSchema).openapi('PrincipalArnOrIdList')

const AssociateResourceShareRequestSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add principals or resources to.',
        }),
    ),
    resourceArns: ResourceArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources that you want to share. This can be <code>null</code> if you want to add only principals.',
        }),
    ).exactOptional(),
    principals: PrincipalArnOrIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a list of principals to whom you want to the resource share. This can be <code>null</code> if you want to add only resources.</p> <p>What the principals can do with the resources in the share is determined by the RAM permissions that you associate with the resource share. See <a>AssociateResourceSharePermission</a>.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceShareArn'], title: 'AssociateResourceShareRequest' })
  .openapi('AssociateResourceShareRequest')

const PermissionNameSchema = z
  .string()
  .regex(/[\w.-]*/)
  .min(1)
  .max(36)
  .openapi('PermissionName')

const CreatePermissionRequestSchema = z
  .object({
    name: PermissionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the customer managed permission. The name must be unique within the Amazon Web Services Region.',
        }),
    ),
    resourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the resource type that this customer managed permission applies to.</p> <p>The format is <code> <i>&lt;service-code&gt;</i>:<i>&lt;resource-type&gt;</i> </code> and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string <code>ec2:subnet</code>. To see the list of valid values for this parameter, query the <a>ListResourceTypes</a> operation.</p>',
        }),
    ),
    policyTemplate: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can\'t include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>',
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of one or more tag key and value pairs to attach to the permission.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'resourceType', 'policyTemplate'],
    title: 'CreatePermissionRequest',
  })
  .openapi('CreatePermissionRequest')

const CreatePermissionVersionRequestSchema = z
  .object({
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission you\'re creating a new version for.',
        }),
    ),
    policyTemplate: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can\'t include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>',
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['permissionArn', 'policyTemplate'],
    title: 'CreatePermissionVersionRequest',
  })
  .openapi('CreatePermissionVersionRequest')

const PermissionArnListSchema = z.array(StringSchema).openapi('PermissionArnList')

const CreateResourceShareRequestSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'Specifies the name of the resource share.' }),
    ),
    resourceArns: ResourceArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of one or more ARNs of the resources to associate with the resource share.',
        }),
    ).exactOptional(),
    principals: PrincipalArnOrIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a list of one or more principals to associate with the resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.",
        }),
    ).exactOptional(),
    allowExternalPrincipals: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of <code>true</code> lets you share with individual Amazon Web Services accounts that are <i>not</i> in your organization. A value of <code>false</code> only has meaning if your account is a member of an Amazon Web Services Organization. The default value is <code>true</code>.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
    permissionArns: PermissionArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateResourceShareRequest' })
  .openapi('CreateResourceShareRequest')

const DeletePermissionRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePermissionRequest' })
  .openapi('DeletePermissionRequest')

const DeletePermissionVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePermissionVersionRequest' })
  .openapi('DeletePermissionVersionRequest')

const DeleteResourceShareRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteResourceShareRequest' })
  .openapi('DeleteResourceShareRequest')

const DisassociateResourceSharePermissionRequestSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove the managed permission from.',
        }),
    ),
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission to disassociate from the resource share. Changes to permissions take effect immediately.',
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceShareArn', 'permissionArn'],
    title: 'DisassociateResourceSharePermissionRequest',
  })
  .openapi('DisassociateResourceSharePermissionRequest')

const DisassociateResourceShareRequestSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove resources or principals from.',
        }),
    ),
    resourceArns: ResourceArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for one or more resources that you want to remove from the resource share. After the operation runs, these resources are no longer shared with principals associated with the resource share.',
        }),
    ).exactOptional(),
    principals: PrincipalArnOrIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a list of one or more principals that no longer are to have access to the resources in this resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceShareArn'], title: 'DisassociateResourceShareRequest' })
  .openapi('DisassociateResourceShareRequest')

const EnableSharingWithAwsOrganizationRequestSchema = z
  .object({})
  .openapi({ title: 'EnableSharingWithAwsOrganizationRequest' })
  .openapi('EnableSharingWithAwsOrganizationRequest')

const GetPermissionRequestSchema = z
  .object({
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.',
        }),
    ),
    permissionVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the version number of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version.</p> <p>To see the list of available versions, use <a>ListPermissionVersions</a>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['permissionArn'], title: 'GetPermissionRequest' })
  .openapi('GetPermissionRequest')

const MaxResultsSchema = z.int().min(1).max(500).openapi('MaxResults')

const GetResourcePoliciesRequestSchema = z
  .object({
    resourceArns: ResourceArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources whose policies you want to retrieve.',
        }),
    ),
    principal: StringSchema.and(
      z.any().openapi({ description: 'Specifies the principal.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceArns'], title: 'GetResourcePoliciesRequest' })
  .openapi('GetResourcePoliciesRequest')

const ResourceShareArnListSchema = z.array(StringSchema).openapi('ResourceShareArnList')

const GetResourceShareAssociationsRequestSchema = z
  .object({
    associationType: ResourceShareAssociationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether you want to retrieve the associations that involve a specified resource or principal.</p> <ul> <li> <p> <code>PRINCIPAL</code> – list the principals whose associations you want to see.</p> </li> <li> <p> <code>RESOURCE</code> – list the resources whose associations you want to see.</p> </li> </ul>',
        }),
    ),
    resourceShareArns: ResourceShareArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share whose associations you want to retrieve.',
        }),
    ).exactOptional(),
    resourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource whose resource shares you want to retrieve.</p> <p>You cannot specify this parameter if the association type is <code>PRINCIPAL</code>.</p>',
        }),
    ).exactOptional(),
    principal: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an individual IAM user or role.</p> <p>You cannot specify this parameter if the association type is <code>RESOURCE</code>.</p>',
        }),
    ).exactOptional(),
    associationStatus: ResourceShareAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to retrieve only associations that have this status.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['associationType'], title: 'GetResourceShareAssociationsRequest' })
  .openapi('GetResourceShareAssociationsRequest')

const ResourceShareInvitationArnListSchema = z
  .array(StringSchema)
  .openapi('ResourceShareInvitationArnList')

const GetResourceShareInvitationsRequestSchema = z
  .object({
    resourceShareInvitationArns: ResourceShareInvitationArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share invitations you want information about.',
        }),
    ).exactOptional(),
    resourceShareArns: ResourceShareArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want details about invitations only for the resource shares described by this list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> ',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetResourceShareInvitationsRequest', required: [] })
  .openapi('GetResourceShareInvitationsRequest')

const ResourceOwnerSchema = z.enum(['SELF', 'OTHER-ACCOUNTS']).openapi('ResourceOwner')

const TagFiltersSchema = z.array(TagFilterSchema).openapi('TagFilters')

const GetResourceSharesRequestSchema = z
  .object({
    resourceShareArns: ResourceShareArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of individual resource shares that you want information about.',
        }),
    ).exactOptional(),
    resourceShareStatus: ResourceShareStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to retrieve details of only those resource shares that have this status.',
        }),
    ).exactOptional(),
    resourceOwner: ResourceOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want to retrieve details of only those resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resource shares that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resource shares that other accounts share with your account</p> </li> </ul>',
        }),
    ),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of an individual resource share that you want to retrieve details about.',
        }),
    ).exactOptional(),
    tagFilters: TagFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to retrieve details of only those resource shares that match the specified tag keys and values.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to retrieve details of only those resource shares that use the managed permission with this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>.',
        }),
    ).exactOptional(),
    permissionVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to retrieve details for only those resource shares that use the specified version of the managed permission.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceOwner'], title: 'GetResourceSharesRequest' })
  .openapi('GetResourceSharesRequest')

const ResourceRegionScopeFilterSchema = z
  .enum(['ALL', 'REGIONAL', 'GLOBAL'])
  .openapi('ResourceRegionScopeFilter')

const ListPendingInvitationResourcesRequestSchema = z
  .object({
    resourceShareInvitationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation. You can use <a>GetResourceShareInvitations</a> to find the ARN of the invitation.',
        }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
    resourceRegionScope: ResourceRegionScopeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceShareInvitationArn'],
    title: 'ListPendingInvitationResourcesRequest',
  })
  .openapi('ListPendingInvitationResourcesRequest')

const ListPermissionAssociationsRequestSchema = z
  .object({
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission.',
        }),
    ).exactOptional(),
    permissionVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to list only those associations with resource shares that use this version of the managed permission. If you don't provide a value for this parameter, then the operation returns information about associations with resource shares that use any version of the managed permission.",
        }),
    ).exactOptional(),
    associationStatus: ResourceShareAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to list only those associations with resource shares that match this status.',
        }),
    ).exactOptional(),
    resourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to list only those associations with resource shares that include at least one resource of this resource type.',
        }),
    ).exactOptional(),
    featureSet: PermissionFeatureSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to list only those associations with resource shares that have a <code>featureSet</code> with this value.',
        }),
    ).exactOptional(),
    defaultVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When <code>true</code>, specifies that you want to list only those associations with resource shares that use the default version of the specified managed permission.</p> <p>When <code>false</code> (the default value), lists associations with resource shares that use any version of the specified managed permission.</p>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPermissionAssociationsRequest', required: [] })
  .openapi('ListPermissionAssociationsRequest')

const ListPermissionVersionsRequestSchema = z
  .object({
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission whose versions you want to list. You can use the <code>permissionVersion</code> parameter on the <a>AssociateResourceSharePermission</a> operation to specify a non-default version to attach.',
        }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['permissionArn'], title: 'ListPermissionVersionsRequest' })
  .openapi('ListPermissionVersionsRequest')

const PermissionTypeFilterSchema = z
  .enum(['ALL', 'AWS_MANAGED', 'CUSTOMER_MANAGED'])
  .openapi('PermissionTypeFilter')

const ListPermissionsRequestSchema = z
  .object({
    resourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want to list only those permissions that apply to the specified resource type. This parameter is not case sensitive.</p> <p>For example, to list only permissions that apply to Amazon EC2 subnets, specify <code>ec2:subnet</code>. You can use the <a>ListResourceTypes</a> operation to get the specific string required.</p>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
    permissionType: PermissionTypeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies that you want to list only permissions of this type:</p> <ul> <li> <p> <code>AWS</code> – returns only Amazon Web Services managed permissions.</p> </li> <li> <p> <code>LOCAL</code> – returns only customer managed permissions</p> </li> <li> <p> <code>ALL</code> – returns both Amazon Web Services managed permissions and customer managed permissions.</p> </li> </ul> <p>If you don't specify this parameter, the default is <code>All</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPermissionsRequest', required: [] })
  .openapi('ListPermissionsRequest')

const ListPrincipalsRequestSchema = z
  .object({
    resourceOwner: ResourceOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want to list information for only resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – principals that your account is sharing resources with</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – principals that are sharing resources with your account</p> </li> </ul>',
        }),
    ),
    resourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to list principal information for the resource share with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>.',
        }),
    ).exactOptional(),
    principals: PrincipalArnOrIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want to list information for only the listed principals.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
    resourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want to list information for only principals associated with resource shares that include the specified resource type.</p> <p>For a list of valid values, query the <a>ListResourceTypes</a> operation.</p>',
        }),
    ).exactOptional(),
    resourceShareArns: ResourceShareArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to list information for only principals associated with the resource shares specified by a list the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceOwner'], title: 'ListPrincipalsRequest' })
  .openapi('ListPrincipalsRequest')

const ReplacePermissionAssociationsWorkIdListSchema = z
  .array(StringSchema)
  .openapi('ReplacePermissionAssociationsWorkIdList')

const ListReplacePermissionAssociationsWorkRequestSchema = z
  .object({
    workIds: ReplacePermissionAssociationsWorkIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of IDs. These values come from the <code>id</code>field of the <code>replacePermissionAssociationsWork</code>structure returned by the <a>ReplacePermissionAssociations</a> operation. ',
        }),
    ).exactOptional(),
    status: ReplacePermissionAssociationsWorkStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to see only the details about requests with a status that matches this value.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReplacePermissionAssociationsWorkRequest', required: [] })
  .openapi('ListReplacePermissionAssociationsWorkRequest')

const ListResourceSharePermissionsRequestSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share for which you want to retrieve the associated permissions.',
        }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceShareArn'], title: 'ListResourceSharePermissionsRequest' })
  .openapi('ListResourceSharePermissionsRequest')

const ListResourceTypesRequestSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
    resourceRegionScope: ResourceRegionScopeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResourceTypesRequest', required: [] })
  .openapi('ListResourceTypesRequest')

const ListResourcesRequestSchema = z
  .object({
    resourceOwner: ResourceOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want to list only the resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resources that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resources that other accounts share with your account</p> </li> </ul>',
        }),
    ),
    principal: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to list only the resource shares that are associated with the specified principal.',
        }),
    ).exactOptional(),
    resourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want to list only the resource shares that include resources of the specified resource type.</p> <p>For valid values, query the <a>ListResourceTypes</a> operation.</p>',
        }),
    ).exactOptional(),
    resourceArns: ResourceArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to list only the resource shares that include resources with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.',
        }),
    ).exactOptional(),
    resourceShareArns: ResourceShareArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to list only resources in the resource shares identified by the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
    resourceRegionScope: ResourceRegionScopeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceOwner'], title: 'ListResourcesRequest' })
  .openapi('ListResourcesRequest')

const PromotePermissionCreatedFromPolicyRequestSchema = z
  .object({
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the <code>CREATED_FROM_POLICY</code> permission that you want to promote. You can get this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> by calling the <a>ListResourceSharePermissions</a> operation.',
        }),
    ),
    name: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies a name for the promoted customer managed permission.' }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['permissionArn', 'name'],
    title: 'PromotePermissionCreatedFromPolicyRequest',
  })
  .openapi('PromotePermissionCreatedFromPolicyRequest')

const PromoteResourceShareCreatedFromPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'PromoteResourceShareCreatedFromPolicyRequest' })
  .openapi('PromoteResourceShareCreatedFromPolicyRequest')

const RejectResourceShareInvitationRequestSchema = z
  .object({
    resourceShareInvitationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to reject.',
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceShareInvitationArn'],
    title: 'RejectResourceShareInvitationRequest',
  })
  .openapi('RejectResourceShareInvitationRequest')

const ReplacePermissionAssociationsRequestSchema = z
  .object({
    fromPermissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to replace.',
        }),
    ),
    fromPermissionVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want to updated the permissions for only those resource shares that use the specified version of the managed permission.',
        }),
    ).exactOptional(),
    toPermissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of the managed permission that you want to associate with resource shares in place of the one specified by <code>fromPerssionArn</code> and <code>fromPermissionVersion</code>.</p> <p>The operation always associates the version that is currently the default for the specified managed permission.</p>',
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['fromPermissionArn', 'toPermissionArn'],
    title: 'ReplacePermissionAssociationsRequest',
  })
  .openapi('ReplacePermissionAssociationsRequest')

const SetDefaultPermissionVersionRequestSchema = z
  .object({
    permissionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission whose default version you want to change.',
        }),
    ),
    permissionVersion: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the version number that you want to designate as the default for customer managed permission. To see a list of all available version numbers, use <a>ListPermissionVersions</a>.',
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['permissionArn', 'permissionVersion'],
    title: 'SetDefaultPermissionVersionRequest',
  })
  .openapi('SetDefaultPermissionVersionRequest')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add tags to. You must specify <i>either</i> <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more tag key and value pairs. The tag key must be present and not be an empty string. The tag value must be present but can be an empty string.',
        }),
    ),
    resourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to add tags to. You must specify <i>either</i> <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove tags from. The tags are removed from the resource share, not the resources in the resource share. You must specify either <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both.',
        }),
    ).exactOptional(),
    tagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies a list of one or more tag keys that you want to remove.',
        }),
    ),
    resourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to remove tags from. You must specify either <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateResourceShareRequestSchema = z
  .object({
    resourceShareArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to modify.',
        }),
    ),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'If specified, the new name that you want to attach to the resource share.',
        }),
    ).exactOptional(),
    allowExternalPrincipals: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether principals outside your organization in Organizations can be associated with a resource share.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceShareArn'], title: 'UpdateResourceShareRequest' })
  .openapi('UpdateResourceShareRequest')

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

export const postAcceptresourceshareinvitationRoute = createRoute({
  method: 'post',
  path: '/acceptresourceshareinvitation',
  description:
    'Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.',
  operationId: 'AcceptResourceShareInvitation',
  request: {
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
              resourceShareInvitationArn: z
                .string()
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to accept.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['resourceShareInvitationArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptResourceShareInvitationResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    482: {
      description: 'ResourceShareInvitationArnNotFoundException',
      content: {
        'application/json': { schema: ResourceShareInvitationArnNotFoundExceptionSchema },
      },
    },
    483: {
      description: 'ResourceShareInvitationAlreadyAcceptedException',
      content: {
        'application/json': { schema: ResourceShareInvitationAlreadyAcceptedExceptionSchema },
      },
    },
    484: {
      description: 'ResourceShareInvitationAlreadyRejectedException',
      content: {
        'application/json': { schema: ResourceShareInvitationAlreadyRejectedExceptionSchema },
      },
    },
    485: {
      description: 'ResourceShareInvitationExpiredException',
      content: { 'application/json': { schema: ResourceShareInvitationExpiredExceptionSchema } },
    },
    486: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    488: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    489: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postAssociateresourceshareRoute = createRoute({
  method: 'post',
  path: '/associateresourceshare',
  description:
    'Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. ',
  operationId: 'AssociateResourceShare',
  request: {
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
              resourceShareArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add principals or resources to.',
                }),
              resourceArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources that you want to share. This can be <code>null</code> if you want to add only principals.',
                }),
              principals: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a list of principals to whom you want to the resource share. This can be <code>null</code> if you want to add only resources.</p> <p>What the principals can do with the resources in the share is determined by the RAM permissions that you associate with the resource share. See <a>AssociateResourceSharePermission</a>.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['resourceShareArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateResourceShareResponseSchema } },
    },
    480: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    481: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    482: {
      description: 'InvalidStateTransitionException',
      content: { 'application/json': { schema: InvalidStateTransitionExceptionSchema } },
    },
    483: {
      description: 'ResourceShareLimitExceededException',
      content: { 'application/json': { schema: ResourceShareLimitExceededExceptionSchema } },
    },
    484: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    485: {
      description: 'InvalidStateTransitionException',
      content: { 'application/json': { schema: InvalidStateTransitionExceptionSchema } },
    },
    486: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    487: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    488: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    489: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    490: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    491: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    492: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAssociateresourcesharepermissionRoute = createRoute({
  method: 'post',
  path: '/associateresourcesharepermission',
  description:
    'Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.',
  operationId: 'AssociateResourceSharePermission',
  request: {
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
              resourceShareArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to which you want to add or replace permissions.',
                }),
              permissionArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission to associate with the resource share. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.',
                }),
              replace: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Specifies whether the specified permission should replace the existing permission associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to a resource share that currently doesn't have a permission. The default value is <code>false</code>.</p> <note> <p>A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set <code>replace</code> to <code>true</code> then the operation returns an error. This helps prevent accidental overwriting of a permission.</p> </note>",
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
              permissionVersion: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Specifies the version of the RAM permission to associate with the resource share. You can specify <i>only</i> the version that is currently set as the default version for the permission. If you also set the <code>replace</code> pararameter to <code>true</code>, then this operation updates an outdated version of the permission to the current default version.</p> <note> <p>You don't need to specify this parameter because the default behavior is to use the version that is currently set as the default version for the permission. This parameter is supported for backwards compatibility.</p> </note>",
                }),
            })
            .openapi({ required: ['resourceShareArn', 'permissionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateResourceSharePermissionResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postCreatepermissionRoute = createRoute({
  method: 'post',
  path: '/createpermission',
  description:
    'Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.',
  operationId: 'CreatePermission',
  request: {
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
              name: z
                .string()
                .regex(/[\w.-]*/)
                .min(1)
                .max(36)
                .openapi({
                  description:
                    'Specifies the name of the customer managed permission. The name must be unique within the Amazon Web Services Region.',
                }),
              resourceType: z
                .string()
                .openapi({
                  description:
                    '<p>Specifies the name of the resource type that this customer managed permission applies to.</p> <p>The format is <code> <i>&lt;service-code&gt;</i>:<i>&lt;resource-type&gt;</i> </code> and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string <code>ec2:subnet</code>. To see the list of valid values for this parameter, query the <a>ListResourceTypes</a> operation.</p>',
                }),
              policyTemplate: z
                .string()
                .openapi({
                  description:
                    '<p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can\'t include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
              tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies a list of one or more tag key and value pairs to attach to the permission.',
                }),
            })
            .openapi({ required: ['name', 'resourceType', 'policyTemplate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePermissionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidPolicyException',
      content: { 'application/json': { schema: InvalidPolicyExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'PermissionAlreadyExistsException',
      content: { 'application/json': { schema: PermissionAlreadyExistsExceptionSchema } },
    },
    486: {
      description: 'MalformedPolicyTemplateException',
      content: { 'application/json': { schema: MalformedPolicyTemplateExceptionSchema } },
    },
    487: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    488: {
      description: 'PermissionLimitExceededException',
      content: { 'application/json': { schema: PermissionLimitExceededExceptionSchema } },
    },
    489: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postCreatepermissionversionRoute = createRoute({
  method: 'post',
  path: '/createpermissionversion',
  description:
    '<p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>',
  operationId: 'CreatePermissionVersion',
  request: {
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
              permissionArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission you\'re creating a new version for.',
                }),
              policyTemplate: z
                .string()
                .openapi({
                  description:
                    '<p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can\'t include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['permissionArn', 'policyTemplate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePermissionVersionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidPolicyException',
      content: { 'application/json': { schema: InvalidPolicyExceptionSchema } },
    },
    482: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    485: {
      description: 'MalformedPolicyTemplateException',
      content: { 'application/json': { schema: MalformedPolicyTemplateExceptionSchema } },
    },
    486: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    487: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    488: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    489: {
      description: 'PermissionVersionsLimitExceededException',
      content: { 'application/json': { schema: PermissionVersionsLimitExceededExceptionSchema } },
    },
  },
})

export const postCreateresourceshareRoute = createRoute({
  method: 'post',
  path: '/createresourceshare',
  description:
    '<p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn\'t change any permissions or quotas that apply to the resource in the account that created it.</p> </note>',
  operationId: 'CreateResourceShare',
  request: {
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
              name: z
                .string()
                .openapi({ description: 'Specifies the name of the resource share.' }),
              resourceArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies a list of one or more ARNs of the resources to associate with the resource share.',
                }),
              principals: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a list of one or more principals to associate with the resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>',
                }),
              tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    "Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.",
                }),
              allowExternalPrincipals: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of <code>true</code> lets you share with individual Amazon Web Services accounts that are <i>not</i> in your organization. A value of <code>false</code> only has meaning if your account is a member of an Amazon Web Services Organization. The default value is <code>true</code>.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
              permissionArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResourceShareResponseSchema } },
    },
    480: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    481: {
      description: 'InvalidStateTransitionException',
      content: { 'application/json': { schema: InvalidStateTransitionExceptionSchema } },
    },
    482: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    483: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    484: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    487: {
      description: 'ResourceShareLimitExceededException',
      content: { 'application/json': { schema: ResourceShareLimitExceededExceptionSchema } },
    },
    488: {
      description: 'TagPolicyViolationException',
      content: { 'application/json': { schema: TagPolicyViolationExceptionSchema } },
    },
    489: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    490: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteDeletepermissionPermissionArnRoute = createRoute({
  method: 'delete',
  path: '/deletepermission#permissionArn',
  description:
    "Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.",
  operationId: 'DeletePermission',
  request: {
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
      permissionArn: z
        .string()
        .openapi({
          param: {
            name: 'permissionArn',
            in: 'query',
            required: true,
            description:
              'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission that you want to delete.',
            schema: { type: 'string' },
          },
        }),
      clientToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePermissionResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    484: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    485: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    486: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const deleteDeletepermissionversionPermissionArnPermissionVersionRoute = createRoute({
  method: 'delete',
  path: '/deletepermissionversion#permissionArn&permissionVersion',
  description:
    '<p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>',
  operationId: 'DeletePermissionVersion',
  request: {
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
      permissionArn: z
        .string()
        .openapi({
          param: {
            name: 'permissionArn',
            in: 'query',
            required: true,
            description:
              'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission with the version you want to delete.',
            schema: { type: 'string' },
          },
        }),
      permissionVersion: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'permissionVersion',
            in: 'query',
            required: true,
            description:
              "<p>Specifies the version number to delete.</p> <p>You can't delete the default version for a customer managed permission.</p> <p>You can't delete a version if it's the only version of the permission. You must either first create another version, or delete the permission completely.</p> <p>You can't delete a version if it is attached to any resource shares. If the version is the default, you must first use <a>SetDefaultPermissionVersion</a> to set a different version as the default for the customer managed permission, and then use <a>AssociateResourceSharePermission</a> to update your resource shares to use the new default version.</p>",
            schema: { type: 'integer' },
          },
        }),
      clientToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePermissionVersionResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    485: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    486: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    487: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const deleteDeleteresourceshareResourceShareArnRoute = createRoute({
  method: 'delete',
  path: '/deleteresourceshare#resourceShareArn',
  description:
    "<p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>",
  operationId: 'DeleteResourceShare',
  request: {
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
      resourceShareArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceShareArn',
            in: 'query',
            required: true,
            description:
              'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to delete.',
            schema: { type: 'string' },
          },
        }),
      clientToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourceShareResponseSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidStateTransitionException',
      content: { 'application/json': { schema: InvalidStateTransitionExceptionSchema } },
    },
    483: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    484: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    485: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    487: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    488: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postDisassociateresourceshareRoute = createRoute({
  method: 'post',
  path: '/disassociateresourceshare',
  description:
    'Removes the specified principals or resources from participating in the specified resource share.',
  operationId: 'DisassociateResourceShare',
  request: {
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
              resourceShareArn: z
                .string()
                .openapi({
                  description:
                    'Specifies <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove resources or principals from.',
                }),
              resourceArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for one or more resources that you want to remove from the resource share. After the operation runs, these resources are no longer shared with principals associated with the resource share.',
                }),
              principals: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a list of one or more principals that no longer are to have access to the resources in this resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['resourceShareArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateResourceShareResponseSchema } },
    },
    480: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    481: {
      description: 'ResourceShareLimitExceededException',
      content: { 'application/json': { schema: ResourceShareLimitExceededExceptionSchema } },
    },
    482: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    483: {
      description: 'InvalidStateTransitionException',
      content: { 'application/json': { schema: InvalidStateTransitionExceptionSchema } },
    },
    484: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    487: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    488: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    489: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
  },
})

export const postDisassociateresourcesharepermissionRoute = createRoute({
  method: 'post',
  path: '/disassociateresourcesharepermission',
  description:
    'Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.',
  operationId: 'DisassociateResourceSharePermission',
  request: {
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
              resourceShareArn: z
                .string()
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove the managed permission from.',
                }),
              permissionArn: z
                .string()
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission to disassociate from the resource share. Changes to permissions take effect immediately.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['resourceShareArn', 'permissionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateResourceSharePermissionResponseSchema },
      },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    487: {
      description: 'InvalidStateTransitionException',
      content: { 'application/json': { schema: InvalidStateTransitionExceptionSchema } },
    },
  },
})

export const postEnablesharingwithawsorganizationRoute = createRoute({
  method: 'post',
  path: '/enablesharingwithawsorganization',
  description:
    "<p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>",
  operationId: 'EnableSharingWithAwsOrganization',
  request: {
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
      content: { 'application/json': { schema: EnableSharingWithAwsOrganizationResponseSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postGetpermissionRoute = createRoute({
  method: 'post',
  path: '/getpermission',
  description: 'Retrieves the contents of a managed permission in JSON format.',
  operationId: 'GetPermission',
  request: {
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
              permissionArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.',
                }),
              permissionVersion: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Specifies the version number of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version.</p> <p>To see the list of available versions, use <a>ListPermissionVersions</a>.</p>",
                }),
            })
            .openapi({ required: ['permissionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPermissionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    482: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postGetresourcepoliciesRoute = createRoute({
  method: 'post',
  path: '/getresourcepolicies',
  description:
    'Retrieves the resource policies for the specified resources that you own and have shared.',
  operationId: 'GetResourcePolicies',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              resourceArns: z
                .array(StringSchema)
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources whose policies you want to retrieve.',
                }),
              principal: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specifies the principal.' }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
            })
            .openapi({ required: ['resourceArns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcePoliciesResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceArnNotFoundException',
      content: { 'application/json': { schema: ResourceArnNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postGetresourceshareassociationsRoute = createRoute({
  method: 'post',
  path: '/getresourceshareassociations',
  description:
    'Retrieves the lists of resources and principals that associated for resource shares that you own.',
  operationId: 'GetResourceShareAssociations',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              associationType: z
                .enum(['PRINCIPAL', 'RESOURCE'])
                .openapi({
                  description:
                    '<p>Specifies whether you want to retrieve the associations that involve a specified resource or principal.</p> <ul> <li> <p> <code>PRINCIPAL</code> – list the principals whose associations you want to see.</p> </li> <li> <p> <code>RESOURCE</code> – list the resources whose associations you want to see.</p> </li> </ul>',
                }),
              resourceShareArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share whose associations you want to retrieve.',
                }),
              resourceArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource whose resource shares you want to retrieve.</p> <p>You cannot specify this parameter if the association type is <code>PRINCIPAL</code>.</p>',
                }),
              principal: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an individual IAM user or role.</p> <p>You cannot specify this parameter if the association type is <code>RESOURCE</code>.</p>',
                }),
              associationStatus: z
                .enum(['ASSOCIATING', 'ASSOCIATED', 'FAILED', 'DISASSOCIATING', 'DISASSOCIATED'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to retrieve only associations that have this status.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
            })
            .openapi({ required: ['associationType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceShareAssociationsResponseSchema } },
    },
    480: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    481: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postGetresourceshareinvitationsRoute = createRoute({
  method: 'post',
  path: '/getresourceshareinvitations',
  description: 'Retrieves details about invitations that you have received for resource shares.',
  operationId: 'GetResourceShareInvitations',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              resourceShareInvitationArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share invitations you want information about.',
                }),
              resourceShareArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want details about invitations only for the resource shares described by this list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> ',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
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
      content: { 'application/json': { schema: GetResourceShareInvitationsResponseSchema } },
    },
    480: {
      description: 'ResourceShareInvitationArnNotFoundException',
      content: {
        'application/json': { schema: ResourceShareInvitationArnNotFoundExceptionSchema },
      },
    },
    481: {
      description: 'InvalidMaxResultsException',
      content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
    },
    482: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    483: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    484: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postGetresourcesharesRoute = createRoute({
  method: 'post',
  path: '/getresourceshares',
  description:
    'Retrieves details about the resource shares that you own or that are shared with you.',
  operationId: 'GetResourceShares',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              resourceShareArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of individual resource shares that you want information about.',
                }),
              resourceShareStatus: z
                .enum(['PENDING', 'ACTIVE', 'FAILED', 'DELETING', 'DELETED'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to retrieve details of only those resource shares that have this status.',
                }),
              resourceOwner: z
                .enum(['SELF', 'OTHER-ACCOUNTS'])
                .openapi({
                  description:
                    '<p>Specifies that you want to retrieve details of only those resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resource shares that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resource shares that other accounts share with your account</p> </li> </ul>',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the name of an individual resource share that you want to retrieve details about.',
                }),
              tagFilters: z
                .array(TagFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to retrieve details of only those resource shares that match the specified tag keys and values.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
              permissionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to retrieve details of only those resource shares that use the managed permission with this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>.',
                }),
              permissionVersion: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to retrieve details for only those resource shares that use the specified version of the managed permission.',
                }),
            })
            .openapi({ required: ['resourceOwner'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceSharesResponseSchema } },
    },
    480: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    481: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postListpendinginvitationresourcesRoute = createRoute({
  method: 'post',
  path: '/listpendinginvitationresources',
  description:
    "Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.",
  operationId: 'ListPendingInvitationResources',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              resourceShareInvitationArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation. You can use <a>GetResourceShareInvitations</a> to find the ARN of the invitation.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
              resourceRegionScope: z
                .enum(['ALL', 'REGIONAL', 'GLOBAL'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>',
                }),
            })
            .openapi({ required: ['resourceShareInvitationArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPendingInvitationResourcesResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ResourceShareInvitationArnNotFoundException',
      content: {
        'application/json': { schema: ResourceShareInvitationArnNotFoundExceptionSchema },
      },
    },
    486: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    487: {
      description: 'ResourceShareInvitationAlreadyRejectedException',
      content: {
        'application/json': { schema: ResourceShareInvitationAlreadyRejectedExceptionSchema },
      },
    },
    488: {
      description: 'ResourceShareInvitationExpiredException',
      content: { 'application/json': { schema: ResourceShareInvitationExpiredExceptionSchema } },
    },
  },
})

export const postListpermissionassociationsRoute = createRoute({
  method: 'post',
  path: '/listpermissionassociations',
  description:
    'Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.',
  operationId: 'ListPermissionAssociations',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              permissionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission.',
                }),
              permissionVersion: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to list only those associations with resource shares that use this version of the managed permission. If you don't provide a value for this parameter, then the operation returns information about associations with resource shares that use any version of the managed permission.",
                }),
              associationStatus: z
                .enum(['ASSOCIATING', 'ASSOCIATED', 'FAILED', 'DISASSOCIATING', 'DISASSOCIATED'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to list only those associations with resource shares that match this status.',
                }),
              resourceType: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to list only those associations with resource shares that include at least one resource of this resource type.',
                }),
              featureSet: z
                .enum(['CREATED_FROM_POLICY', 'PROMOTING_TO_STANDARD', 'STANDARD'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to list only those associations with resource shares that have a <code>featureSet</code> with this value.',
                }),
              defaultVersion: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>When <code>true</code>, specifies that you want to list only those associations with resource shares that use the default version of the specified managed permission.</p> <p>When <code>false</code> (the default value), lists associations with resource shares that use any version of the specified managed permission.</p>',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
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
      content: { 'application/json': { schema: ListPermissionAssociationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postListpermissionversionsRoute = createRoute({
  method: 'post',
  path: '/listpermissionversions',
  description: 'Lists the available versions of the specified RAM permission.',
  operationId: 'ListPermissionVersions',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              permissionArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission whose versions you want to list. You can use the <code>permissionVersion</code> parameter on the <a>AssociateResourceSharePermission</a> operation to specify a non-default version to attach.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
            })
            .openapi({ required: ['permissionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPermissionVersionsResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postListpermissionsRoute = createRoute({
  method: 'post',
  path: '/listpermissions',
  description:
    'Retrieves a list of available RAM permissions that you can use for the supported resource types. ',
  operationId: 'ListPermissions',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              resourceType: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies that you want to list only those permissions that apply to the specified resource type. This parameter is not case sensitive.</p> <p>For example, to list only permissions that apply to Amazon EC2 subnets, specify <code>ec2:subnet</code>. You can use the <a>ListResourceTypes</a> operation to get the specific string required.</p>',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
              permissionType: z
                .enum(['ALL', 'AWS_MANAGED', 'CUSTOMER_MANAGED'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>Specifies that you want to list only permissions of this type:</p> <ul> <li> <p> <code>AWS</code> – returns only Amazon Web Services managed permissions.</p> </li> <li> <p> <code>LOCAL</code> – returns only customer managed permissions</p> </li> <li> <p> <code>ALL</code> – returns both Amazon Web Services managed permissions and customer managed permissions.</p> </li> </ul> <p>If you don't specify this parameter, the default is <code>All</code>.</p>",
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
      content: { 'application/json': { schema: ListPermissionsResponseSchema } },
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
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postListprincipalsRoute = createRoute({
  method: 'post',
  path: '/listprincipals',
  description:
    'Lists the principals that you are sharing resources with or that are sharing resources with you.',
  operationId: 'ListPrincipals',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              resourceOwner: z
                .enum(['SELF', 'OTHER-ACCOUNTS'])
                .openapi({
                  description:
                    '<p>Specifies that you want to list information for only resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – principals that your account is sharing resources with</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – principals that are sharing resources with your account</p> </li> </ul>',
                }),
              resourceArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to list principal information for the resource share with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>.',
                }),
              principals: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies that you want to list information for only the listed principals.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>',
                }),
              resourceType: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies that you want to list information for only principals associated with resource shares that include the specified resource type.</p> <p>For a list of valid values, query the <a>ListResourceTypes</a> operation.</p>',
                }),
              resourceShareArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to list information for only principals associated with the resource shares specified by a list the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
            })
            .openapi({ required: ['resourceOwner'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPrincipalsResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postListreplacepermissionassociationsworkRoute = createRoute({
  method: 'post',
  path: '/listreplacepermissionassociationswork',
  description:
    'Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.',
  operationId: 'ListReplacePermissionAssociationsWork',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              workIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of IDs. These values come from the <code>id</code>field of the <code>replacePermissionAssociationsWork</code>structure returned by the <a>ReplacePermissionAssociations</a> operation. ',
                }),
              status: z
                .enum(['IN_PROGRESS', 'COMPLETED', 'FAILED'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to see only the details about requests with a status that matches this value.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
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
        'application/json': { schema: ListReplacePermissionAssociationsWorkResponseSchema },
      },
    },
    480: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postListresourcesharepermissionsRoute = createRoute({
  method: 'post',
  path: '/listresourcesharepermissions',
  description: 'Lists the RAM permissions that are associated with a resource share.',
  operationId: 'ListResourceSharePermissions',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              resourceShareArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share for which you want to retrieve the associated permissions.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
            })
            .openapi({ required: ['resourceShareArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceSharePermissionsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    482: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postListresourcetypesRoute = createRoute({
  method: 'post',
  path: '/listresourcetypes',
  description: 'Lists the resource types that can be shared by RAM.',
  operationId: 'ListResourceTypes',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
              resourceRegionScope: z
                .enum(['ALL', 'REGIONAL', 'GLOBAL'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>',
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
      content: { 'application/json': { schema: ListResourceTypesResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postListresourcesRoute = createRoute({
  method: 'post',
  path: '/listresources',
  description:
    'Lists the resources that you added to a resource share or the resources that are shared with you.',
  operationId: 'ListResources',
  request: {
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
          schema: z
            .object({
              resourceOwner: z
                .enum(['SELF', 'OTHER-ACCOUNTS'])
                .openapi({
                  description:
                    '<p>Specifies that you want to list only the resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resources that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resources that other accounts share with your account</p> </li> </ul>',
                }),
              principal: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to list only the resource shares that are associated with the specified principal.',
                }),
              resourceType: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies that you want to list only the resource shares that include resources of the specified resource type.</p> <p>For valid values, query the <a>ListResourceTypes</a> operation.</p>',
                }),
              resourceArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to list only the resource shares that include resources with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.',
                }),
              resourceShareArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to list only resources in the resource shares identified by the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
              resourceRegionScope: z
                .enum(['ALL', 'REGIONAL', 'GLOBAL'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>',
                }),
            })
            .openapi({ required: ['resourceOwner'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourcesResponseSchema } },
    },
    480: {
      description: 'InvalidResourceTypeException',
      content: { 'application/json': { schema: InvalidResourceTypeExceptionSchema } },
    },
    481: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    482: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postPromotepermissioncreatedfrompolicyRoute = createRoute({
  method: 'post',
  path: '/promotepermissioncreatedfrompolicy',
  description:
    "<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>",
  operationId: 'PromotePermissionCreatedFromPolicy',
  request: {
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
              permissionArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the <code>CREATED_FROM_POLICY</code> permission that you want to promote. You can get this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> by calling the <a>ListResourceSharePermissions</a> operation.',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Specifies a name for the promoted customer managed permission.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['permissionArn', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PromotePermissionCreatedFromPolicyResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    484: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
  },
})

export const postPromoteresourcesharecreatedfrompolicyResourceShareArnRoute = createRoute({
  method: 'post',
  path: '/promoteresourcesharecreatedfrompolicy#resourceShareArn',
  description:
    "<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>",
  operationId: 'PromoteResourceShareCreatedFromPolicy',
  request: {
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
      resourceShareArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceShareArn',
            in: 'query',
            required: true,
            description:
              'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to promote.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PromoteResourceShareCreatedFromPolicyResponseSchema },
      },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'ResourceShareLimitExceededException',
      content: { 'application/json': { schema: ResourceShareLimitExceededExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    485: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    488: {
      description: 'InvalidStateTransitionException',
      content: { 'application/json': { schema: InvalidStateTransitionExceptionSchema } },
    },
    489: {
      description: 'UnmatchedPolicyPermissionException',
      content: { 'application/json': { schema: UnmatchedPolicyPermissionExceptionSchema } },
    },
  },
})

export const postRejectresourceshareinvitationRoute = createRoute({
  method: 'post',
  path: '/rejectresourceshareinvitation',
  description:
    'Rejects an invitation to a resource share from another Amazon Web Services account.',
  operationId: 'RejectResourceShareInvitation',
  request: {
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
              resourceShareInvitationArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to reject.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['resourceShareInvitationArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectResourceShareInvitationResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    482: {
      description: 'ResourceShareInvitationArnNotFoundException',
      content: {
        'application/json': { schema: ResourceShareInvitationArnNotFoundExceptionSchema },
      },
    },
    483: {
      description: 'ResourceShareInvitationAlreadyAcceptedException',
      content: {
        'application/json': { schema: ResourceShareInvitationAlreadyAcceptedExceptionSchema },
      },
    },
    484: {
      description: 'ResourceShareInvitationAlreadyRejectedException',
      content: {
        'application/json': { schema: ResourceShareInvitationAlreadyRejectedExceptionSchema },
      },
    },
    485: {
      description: 'ResourceShareInvitationExpiredException',
      content: { 'application/json': { schema: ResourceShareInvitationExpiredExceptionSchema } },
    },
    486: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    488: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    489: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postReplacepermissionassociationsRoute = createRoute({
  method: 'post',
  path: '/replacepermissionassociations',
  description:
    '<p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>',
  operationId: 'ReplacePermissionAssociations',
  request: {
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
              fromPermissionArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to replace.',
                }),
              fromPermissionVersion: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies that you want to updated the permissions for only those resource shares that use the specified version of the managed permission.',
                }),
              toPermissionArn: z
                .string()
                .openapi({
                  description:
                    '<p>Specifies the ARN of the managed permission that you want to associate with resource shares in place of the one specified by <code>fromPerssionArn</code> and <code>fromPermissionVersion</code>.</p> <p>The operation always associates the version that is currently the default for the specified managed permission.</p>',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['fromPermissionArn', 'toPermissionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReplacePermissionAssociationsResponseSchema } },
    },
    480: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    485: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    486: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    487: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postSetdefaultpermissionversionRoute = createRoute({
  method: 'post',
  path: '/setdefaultpermissionversion',
  description:
    'Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.',
  operationId: 'SetDefaultPermissionVersion',
  request: {
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
              permissionArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission whose default version you want to change.',
                }),
              permissionVersion: z
                .int()
                .openapi({
                  description:
                    'Specifies the version number that you want to designate as the default for customer managed permission. To see a list of all available version numbers, use <a>ListPermissionVersions</a>.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['permissionArn', 'permissionVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetDefaultPermissionVersionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    482: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    485: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    486: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
  },
})

export const postTagresourceRoute = createRoute({
  method: 'post',
  path: '/tagresource',
  description:
    '<p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceShareArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add tags to. You must specify <i>either</i> <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both.',
                }),
              tags: z
                .array(TagSchema)
                .openapi({
                  description:
                    'A list of one or more tag key and value pairs. The tag key must be present and not be an empty string. The tag value must be present but can be an empty string.',
                }),
              resourceArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to add tags to. You must specify <i>either</i> <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both.',
                }),
            })
            .openapi({ required: ['tags'] }),
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    482: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    483: {
      description: 'TagLimitExceededException',
      content: { 'application/json': { schema: TagLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceArnNotFoundException',
      content: { 'application/json': { schema: ResourceArnNotFoundExceptionSchema } },
    },
    485: {
      description: 'TagPolicyViolationException',
      content: { 'application/json': { schema: TagPolicyViolationExceptionSchema } },
    },
    486: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postUntagresourceRoute = createRoute({
  method: 'post',
  path: '/untagresource',
  description:
    'Removes the specified tag key and value pairs from the specified resource share or managed permission.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceShareArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove tags from. The tags are removed from the resource share, not the resources in the resource share. You must specify either <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both.',
                }),
              tagKeys: z
                .array(TagKeySchema)
                .openapi({
                  description: 'Specifies a list of one or more tag keys that you want to remove.',
                }),
              resourceArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to remove tags from. You must specify either <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both.',
                }),
            })
            .openapi({ required: ['tagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    483: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postUpdateresourceshareRoute = createRoute({
  method: 'post',
  path: '/updateresourceshare',
  description: 'Modifies some of the properties of the specified resource share.',
  operationId: 'UpdateResourceShare',
  request: {
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
              resourceShareArn: z
                .string()
                .openapi({
                  description:
                    'Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to modify.',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If specified, the new name that you want to attach to the resource share.',
                }),
              allowExternalPrincipals: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether principals outside your organization in Organizations can be associated with a resource share.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don\'t provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>',
                }),
            })
            .openapi({ required: ['resourceShareArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourceShareResponseSchema } },
    },
    480: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    483: {
      description: 'MalformedArnException',
      content: { 'application/json': { schema: MalformedArnExceptionSchema } },
    },
    484: {
      description: 'InvalidClientTokenException',
      content: { 'application/json': { schema: InvalidClientTokenExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    487: {
      description: 'ServerInternalException',
      content: { 'application/json': { schema: ServerInternalExceptionSchema } },
    },
    488: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})
