import { createRoute, z } from '@hono/zod-openapi'

const AcceptPortfolioShareOutputSchema = z.object({}).openapi('AcceptPortfolioShareOutput')

const AcceptLanguageSchema = z.string().max(100).openapi('AcceptLanguage')

const IdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-]*/)
  .min(1)
  .max(100)
  .openapi('Id')

const PortfolioShareTypeSchema = z
  .enum(['IMPORTED', 'AWS_SERVICECATALOG', 'AWS_ORGANIZATIONS'])
  .openapi('PortfolioShareType')

const AcceptPortfolioShareInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    PortfolioShareType: PortfolioShareTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of shared portfolios to accept. The default is to accept imported portfolios.</p> <ul> <li> <p> <code>AWS_ORGANIZATIONS</code> - Accept portfolios shared by the management account of your organization.</p> </li> <li> <p> <code>IMPORTED</code> - Accept imported portfolios.</p> </li> <li> <p> <code>AWS_SERVICECATALOG</code> - Not supported. (Throws ResourceNotFoundException.)</p> </li> </ul> <p>For example, <code>aws servicecatalog accept-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId'], title: 'AcceptPortfolioShareInput' })
  .openapi('AcceptPortfolioShareInput')

const InvalidParametersExceptionSchema = z.any().openapi('InvalidParametersException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const AssociateBudgetWithResourceOutputSchema = z
  .object({})
  .openapi('AssociateBudgetWithResourceOutput')

const BudgetNameSchema = z.string().min(1).max(100).openapi('BudgetName')

const AssociateBudgetWithResourceInputSchema = z
  .object({
    BudgetName: BudgetNameSchema.and(
      z.any().openapi({ description: 'The name of the budget you want to associate.' }),
    ),
    ResourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description: ' The resource identifier. Either a portfolio-id or a product-id.',
        }),
    ),
  })
  .openapi({ required: ['BudgetName', 'ResourceId'], title: 'AssociateBudgetWithResourceInput' })
  .openapi('AssociateBudgetWithResourceInput')

const DuplicateResourceExceptionSchema = z.any().openapi('DuplicateResourceException')

const AssociatePrincipalWithPortfolioOutputSchema = z
  .object({})
  .openapi('AssociatePrincipalWithPortfolioOutput')

const PrincipalARNSchema = z.string().min(1).max(1000).openapi('PrincipalARN')

const PrincipalTypeSchema = z.enum(['IAM', 'IAM_PATTERN']).openapi('PrincipalType')

const AssociatePrincipalWithPortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    PrincipalARN: PrincipalARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the principal (user, role, or group). This field allows an ARN with no <code>accountID</code> if <code>PrincipalType</code> is <code>IAM_PATTERN</code>. </p> <p>You can associate multiple <code>IAM</code> patterns even if the account has no principal with that name. This is useful in Principal Name Sharing if you want to share a principal without creating it in the account that owns the portfolio. </p>',
        }),
    ),
    PrincipalType: PrincipalTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The principal type. The supported value is <code>IAM</code> if you use a fully defined ARN, or <code>IAM_PATTERN</code> if you use an ARN with no <code>accountID</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['PortfolioId', 'PrincipalARN', 'PrincipalType'],
    title: 'AssociatePrincipalWithPortfolioInput',
  })
  .openapi('AssociatePrincipalWithPortfolioInput')

const AssociateProductWithPortfolioOutputSchema = z
  .object({})
  .openapi('AssociateProductWithPortfolioOutput')

const AssociateProductWithPortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    SourcePortfolioId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the source portfolio.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProductId', 'PortfolioId'], title: 'AssociateProductWithPortfolioInput' })
  .openapi('AssociateProductWithPortfolioInput')

const AssociateServiceActionWithProvisioningArtifactOutputSchema = z
  .object({})
  .openapi('AssociateServiceActionWithProvisioningArtifactOutput')

const AssociateServiceActionWithProvisioningArtifactInputSchema = z
  .object({
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.',
        }),
    ),
    ProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.',
        }),
    ),
    ServiceActionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.',
        }),
    ),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProductId', 'ProvisioningArtifactId', 'ServiceActionId'],
    title: 'AssociateServiceActionWithProvisioningArtifactInput',
  })
  .openapi('AssociateServiceActionWithProvisioningArtifactInput')

const AssociateTagOptionWithResourceOutputSchema = z
  .object({})
  .openapi('AssociateTagOptionWithResourceOutput')

const ResourceIdSchema = z.string().openapi('ResourceId')

const TagOptionIdSchema = z.string().min(1).max(100).openapi('TagOptionId')

const AssociateTagOptionWithResourceInputSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(z.any().openapi({ description: 'The resource identifier.' })),
    TagOptionId: TagOptionIdSchema.and(
      z.any().openapi({ description: 'The TagOption identifier.' }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'TagOptionId'],
    title: 'AssociateTagOptionWithResourceInput',
  })
  .openapi('AssociateTagOptionWithResourceInput')

const TagOptionNotMigratedExceptionSchema = z.any().openapi('TagOptionNotMigratedException')

const InvalidStateExceptionSchema = z.any().openapi('InvalidStateException')

const ServiceActionAssociationErrorCodeSchema = z
  .enum([
    'DUPLICATE_RESOURCE',
    'INTERNAL_FAILURE',
    'LIMIT_EXCEEDED',
    'RESOURCE_NOT_FOUND',
    'THROTTLING',
    'INVALID_PARAMETER',
  ])
  .openapi('ServiceActionAssociationErrorCode')

const ServiceActionAssociationErrorMessageSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('ServiceActionAssociationErrorMessage')

const FailedServiceActionAssociationSchema = z
  .object({
    ServiceActionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.',
        }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.',
        }),
    ).exactOptional(),
    ErrorCode: ServiceActionAssociationErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code. Valid values are listed below.' }),
    ).exactOptional(),
    ErrorMessage: ServiceActionAssociationErrorMessageSchema.and(
      z.any().openapi({ description: 'A text description of the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object containing information about the error, along with identifying information about the self-service action and its associations.',
    required: [],
  })
  .openapi('FailedServiceActionAssociation')

const FailedServiceActionAssociationsSchema = z
  .array(FailedServiceActionAssociationSchema)
  .max(50)
  .openapi('FailedServiceActionAssociations')

const BatchAssociateServiceActionWithProvisioningArtifactOutputSchema = z
  .object({
    FailedServiceActionAssociations: FailedServiceActionAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains a list of errors, along with information to help you identify the self-service action.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchAssociateServiceActionWithProvisioningArtifactOutput')

const ServiceActionAssociationSchema = z
  .object({
    ServiceActionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.',
        }),
    ),
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.',
        }),
    ),
    ProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.',
        }),
    ),
  })
  .openapi({
    required: ['ServiceActionId', 'ProductId', 'ProvisioningArtifactId'],
    description:
      'A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.',
  })
  .openapi('ServiceActionAssociation')

const ServiceActionAssociationsSchema = z
  .array(ServiceActionAssociationSchema)
  .min(1)
  .max(50)
  .openapi('ServiceActionAssociations')

const BatchAssociateServiceActionWithProvisioningArtifactInputSchema = z
  .object({
    ServiceActionAssociations: ServiceActionAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.',
        }),
    ),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceActionAssociations'],
    title: 'BatchAssociateServiceActionWithProvisioningArtifactInput',
  })
  .openapi('BatchAssociateServiceActionWithProvisioningArtifactInput')

const BatchDisassociateServiceActionFromProvisioningArtifactOutputSchema = z
  .object({
    FailedServiceActionAssociations: FailedServiceActionAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains a list of errors, along with information to help you identify the self-service action.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDisassociateServiceActionFromProvisioningArtifactOutput')

const BatchDisassociateServiceActionFromProvisioningArtifactInputSchema = z
  .object({
    ServiceActionAssociations: ServiceActionAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.',
        }),
    ),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceActionAssociations'],
    title: 'BatchDisassociateServiceActionFromProvisioningArtifactInput',
  })
  .openapi('BatchDisassociateServiceActionFromProvisioningArtifactInput')

const CopyProductOutputSchema = z
  .object({
    CopyProductToken: IdSchema.and(
      z.any().openapi({ description: 'The token to use to track the progress of the operation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CopyProductOutput')

const ProductArnSchema = z
  .string()
  .regex(
    /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
  )
  .min(1)
  .max(1224)
  .openapi('ProductArn')

const ProductViewNameSchema = z.string().max(8191).openapi('ProductViewName')

const ProvisioningArtifactPropertyValueSchema = z
  .string()
  .openapi('ProvisioningArtifactPropertyValue')

const SourceProvisioningArtifactPropertiesMapSchema = z
  .record(z.string(), ProvisioningArtifactPropertyValueSchema)
  .openapi('SourceProvisioningArtifactPropertiesMap')

const SourceProvisioningArtifactPropertiesSchema = z
  .array(SourceProvisioningArtifactPropertiesMapSchema)
  .openapi('SourceProvisioningArtifactProperties')

const CopyOptionSchema = z.literal('CopyTags').openapi('CopyOption')

const CopyOptionsSchema = z.array(CopyOptionSchema).openapi('CopyOptions')

const IdempotencyTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(1)
  .max(128)
  .openapi('IdempotencyToken')

const CopyProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    SourceProductArn: ProductArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the source product.' }),
    ),
    TargetProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the target product. By default, a new product is created.',
        }),
    ).exactOptional(),
    TargetProductName: ProductViewNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the target product. The default is the name of the source product.',
        }),
    ).exactOptional(),
    SourceProvisioningArtifactIdentifiers: SourceProvisioningArtifactPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the provisioning artifacts (also known as versions) of the product to copy. By default, all provisioning artifacts are copied.',
        }),
    ).exactOptional(),
    CopyOptions: CopyOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The copy options. If the value is <code>CopyTags</code>, the tags from the source product are copied to the target product.',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request. ',
        }),
    ),
  })
  .openapi({ required: ['SourceProductArn', 'IdempotencyToken'], title: 'CopyProductInput' })
  .openapi('CopyProductInput')

const ConstraintTypeSchema = z.string().min(1).max(1024).openapi('ConstraintType')

const ConstraintDescriptionSchema = z.string().max(2000).openapi('ConstraintDescription')

const AccountIdSchema = z
  .string()
  .regex(/^[0-9]{12}$/)
  .openapi('AccountId')

const ConstraintDetailSchema = z
  .object({
    ConstraintId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the constraint.' }),
    ).exactOptional(),
    Type: ConstraintTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p>STACKSET</p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Description: ConstraintDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the constraint.' }),
    ).exactOptional(),
    Owner: AccountIdSchema.and(
      z.any().openapi({ description: 'The owner of the constraint.' }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the product the constraint applies to. Note that a constraint applies to a specific instance of a product within a certain portfolio.',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the portfolio the product resides in. The constraint applies only to the instance of the product that lives within this portfolio.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a constraint.', required: [] })
  .openapi('ConstraintDetail')

const ConstraintParametersSchema = z.string().openapi('ConstraintParameters')

const StatusSchema = z.enum(['AVAILABLE', 'CREATING', 'FAILED']).openapi('Status')

const CreateConstraintOutputSchema = z
  .object({
    ConstraintDetail: ConstraintDetailSchema.and(
      z.any().openapi({ description: 'Information about the constraint.' }),
    ).exactOptional(),
    ConstraintParameters: ConstraintParametersSchema.and(
      z.any().openapi({ description: 'The constraint parameters.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the current request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateConstraintOutput')

const CreateConstraintInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    Parameters: ConstraintParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p> <dl> <dt>LAUNCH</dt> <dd> <p>You are required to specify either the <code>RoleArn</code> or the <code>LocalRoleName</code> but can\'t use both.</p> <p>Specify the <code>RoleArn</code> property as follows:</p> <p> <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code> </p> <p>Specify the <code>LocalRoleName</code> property as follows:</p> <p> <code>{"LocalRoleName": "SCBasicLaunchRole"}</code> </p> <p>If you specify the <code>LocalRoleName</code> property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be account-agnostic so the administrator can create fewer resources per shared account.</p> <note> <p>The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.</p> </note> <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p> <p>You also cannot have more than one <code>LAUNCH</code> constraint on a product and portfolio.</p> </dd> <dt>NOTIFICATION</dt> <dd> <p>Specify the <code>NotificationArns</code> property as follows:</p> <p> <code>{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}</code> </p> </dd> <dt>RESOURCE_UPDATE</dt> <dd> <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p> <p> <code>{"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}</code> </p> <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p> </dd> <dt>STACKSET</dt> <dd> <p>Specify the <code>Parameters</code> property as follows:</p> <p> <code>{"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}</code> </p> <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p> <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p> <p>Products with a <code>STACKSET</code> constraint will launch an CloudFormation stack set.</p> </dd> <dt>TEMPLATE</dt> <dd> <p>Specify the <code>Rules</code> property. For more information, see <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html">Template Constraint Rules</a>.</p> </dd> </dl>',
        }),
    ),
    Type: ConstraintTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p> <code>RESOURCE_UPDATE</code> </p> </li> <li> <p> <code>STACKSET</code> </p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>',
        }),
    ),
    Description: ConstraintDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the constraint.' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ),
  })
  .openapi({
    required: ['PortfolioId', 'ProductId', 'Parameters', 'Type', 'IdempotencyToken'],
    title: 'CreateConstraintInput',
  })
  .openapi('CreateConstraintInput')

const ResourceARNSchema = z.string().min(1).max(150).openapi('ResourceARN')

const PortfolioDisplayNameSchema = z.string().min(1).max(100).openapi('PortfolioDisplayName')

const PortfolioDescriptionSchema = z.string().max(2000).openapi('PortfolioDescription')

const CreationTimeSchema = z.iso.datetime({ offset: true }).openapi('CreationTime')

const ProviderNameSchema = z.string().min(1).max(50).openapi('ProviderName')

const PortfolioDetailSchema = z
  .object({
    Id: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })).exactOptional(),
    ARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN assigned to the portfolio.' }),
    ).exactOptional(),
    DisplayName: PortfolioDisplayNameSchema.and(
      z.any().openapi({ description: 'The name to use for display purposes.' }),
    ).exactOptional(),
    Description: PortfolioDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the portfolio.' }),
    ).exactOptional(),
    CreatedTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    ProviderName: ProviderNameSchema.and(
      z.any().openapi({ description: 'The name of the portfolio provider.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a portfolio.', required: [] })
  .openapi('PortfolioDetail')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The tag key.' })),
    Value: TagValueSchema.and(z.any().openapi({ description: 'The value for this key.' })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).max(50).openapi('Tags')

const CreatePortfolioOutputSchema = z
  .object({
    PortfolioDetail: PortfolioDetailSchema.and(
      z.any().openapi({ description: 'Information about the portfolio.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'Information about the tags associated with the portfolio.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePortfolioOutput')

const AddTagsSchema = z.array(TagSchema).max(20).openapi('AddTags')

const CreatePortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    DisplayName: PortfolioDisplayNameSchema.and(
      z.any().openapi({ description: 'The name to use for display purposes.' }),
    ),
    Description: PortfolioDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the portfolio.' }),
    ).exactOptional(),
    ProviderName: ProviderNameSchema.and(
      z.any().openapi({ description: 'The name of the portfolio provider.' }),
    ),
    Tags: AddTagsSchema.and(z.any().openapi({ description: 'One or more tags.' })).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ),
  })
  .openapi({
    required: ['DisplayName', 'ProviderName', 'IdempotencyToken'],
    title: 'CreatePortfolioInput',
  })
  .openapi('CreatePortfolioInput')

const CreatePortfolioShareOutputSchema = z
  .object({
    PortfolioShareToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The portfolio shares a unique identifier that only returns if the portfolio is shared to an organization node.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePortfolioShareOutput')

const OrganizationNodeTypeSchema = z
  .enum(['ORGANIZATION', 'ORGANIZATIONAL_UNIT', 'ACCOUNT'])
  .openapi('OrganizationNodeType')

const OrganizationNodeValueSchema = z
  .string()
  .regex(
    /(^[0-9]{12}$)|(^arn:aws:organizations::\d{12}:organization\/o-[a-z0-9]{10,32})|(^o-[a-z0-9]{10,32}$)|(^arn:aws:organizations::\d{12}:ou\/o-[a-z0-9]{10,32}\/ou-[0-9a-z]{4,32}-[0-9a-z]{8,32}$)|(^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$)/,
  )
  .openapi('OrganizationNodeValue')

const OrganizationNodeSchema = z
  .object({
    Type: OrganizationNodeTypeSchema.and(
      z.any().openapi({ description: 'The organization node type.' }),
    ).exactOptional(),
    Value: OrganizationNodeValueSchema.and(
      z.any().openapi({ description: 'The identifier of the organization node.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the organization node.', required: [] })
  .openapi('OrganizationNode')

const BooleanSchema = z.boolean().openapi('Boolean')

const CreatePortfolioShareInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID. For example, <code>123456789012</code>.',
        }),
    ).exactOptional(),
    OrganizationNode: OrganizationNodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The organization node to whom you are going to share. When you pass <code>OrganizationNode</code>, it creates <code>PortfolioShare</code> for all of the Amazon Web Services accounts that are associated to the <code>OrganizationNode</code>. The output returns a <code>PortfolioShareToken</code>, which enables the administrator to monitor the status of the <code>PortfolioShare</code> creation process.',
        }),
    ).exactOptional(),
    ShareTagOptions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables <code>TagOptions </code> sharing when creating the portfolio share. If this flag is not provided, TagOptions sharing is disabled.',
        }),
    ).exactOptional(),
    SharePrincipals: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables or disables <code>Principal</code> sharing when creating the portfolio share. If this flag is not provided, principal sharing is disabled. </p> <p>When you enable Principal Name Sharing for a portfolio share, the share recipient account end users with a principal that matches any of the associated IAM patterns can provision products from the portfolio. Once shared, the share recipient can view associations of <code>PrincipalType</code>: <code>IAM_PATTERN</code> on their portfolio. You can create the principals in the recipient account before or after creating the share. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId'], title: 'CreatePortfolioShareInput' })
  .openapi('CreatePortfolioShareInput')

const OperationNotSupportedExceptionSchema = z.any().openapi('OperationNotSupportedException')

const ProductViewOwnerSchema = z.string().max(8191).openapi('ProductViewOwner')

const ProductViewShortDescriptionSchema = z
  .string()
  .max(8191)
  .openapi('ProductViewShortDescription')

const ProductTypeSchema = z
  .enum(['CLOUD_FORMATION_TEMPLATE', 'MARKETPLACE', 'TERRAFORM_OPEN_SOURCE'])
  .openapi('ProductType')

const ProductViewDistributorSchema = z.string().openapi('ProductViewDistributor')

const HasDefaultPathSchema = z.boolean().openapi('HasDefaultPath')

const SupportEmailSchema = z.string().max(254).openapi('SupportEmail')

const SupportDescriptionSchema = z.string().max(8191).openapi('SupportDescription')

const SupportUrlSchema = z.string().max(2083).openapi('SupportUrl')

const ProductViewSummarySchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The product view identifier.' }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    Name: ProductViewNameSchema.and(
      z.any().openapi({ description: 'The name of the product.' }),
    ).exactOptional(),
    Owner: ProductViewOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the product. Contact the product administrator for the significance of this value.',
        }),
    ).exactOptional(),
    ShortDescription: ProductViewShortDescriptionSchema.and(
      z.any().openapi({ description: 'Short description of the product.' }),
    ).exactOptional(),
    Type: ProductTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The product type. Contact the product administrator for the significance of this value. If this value is <code>MARKETPLACE</code>, the product was created by Amazon Web Services Marketplace.',
        }),
    ).exactOptional(),
    Distributor: ProductViewDistributorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The distributor of the product. Contact the product administrator for the significance of this value.',
        }),
    ).exactOptional(),
    HasDefaultPath: HasDefaultPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the product has a default path. If the product does not have a default path, call <a>ListLaunchPaths</a> to disambiguate between paths. Otherwise, <a>ListLaunchPaths</a> is not required, and the output of <a>ProductViewSummary</a> can be used directly with <a>DescribeProvisioningParameters</a>.',
        }),
    ).exactOptional(),
    SupportEmail: SupportEmailSchema.and(
      z
        .any()
        .openapi({
          description: 'The email contact information to obtain support for this Product.',
        }),
    ).exactOptional(),
    SupportDescription: SupportDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the support for this Product.' }),
    ).exactOptional(),
    SupportUrl: SupportUrlSchema.and(
      z.any().openapi({ description: 'The URL information to obtain support for this Product.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a product view.', required: [] })
  .openapi('ProductViewSummary')

const CreatedTimeSchema = z.iso.datetime({ offset: true }).openapi('CreatedTime')

const SourceTypeSchema = z.literal('CODESTAR').openapi('SourceType')

const CodeStarConnectionArnSchema = z
  .string()
  .regex(
    /arn:[a-z0-9][-.a-z0-9]{0,62}:codestar-connections:([a-z0-9][-.a-z0-9]{0,62})?:([a-z0-9][-.a-z0-9]{0,62})?:[^\/].{0,1023}$/,
  )
  .min(1)
  .max(1224)
  .openapi('CodeStarConnectionArn')

const RepositorySchema = z.string().min(1).max(100).openapi('Repository')

const RepositoryBranchSchema = z.string().min(1).max(250).openapi('RepositoryBranch')

const RepositoryArtifactPathSchema = z.string().min(1).max(4096).openapi('RepositoryArtifactPath')

const CodeStarParametersSchema = z
  .object({
    ConnectionArn: CodeStarConnectionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CodeStar ARN, which is the connection between Service Catalog and the external repository.',
        }),
    ),
    Repository: RepositorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific repository where the product’s artifact-to-be-synced resides, formatted as "Account/Repo." ',
        }),
    ),
    Branch: RepositoryBranchSchema.and(
      z.any().openapi({ description: 'The specific branch where the artifact resides. ' }),
    ),
    ArtifactPath: RepositoryArtifactPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The absolute path wehre the artifact resides within the repo and branch, formatted as "folder/file.json." ',
        }),
    ),
  })
  .openapi({
    required: ['ConnectionArn', 'Repository', 'Branch', 'ArtifactPath'],
    description: 'The subtype containing details about the Codestar connection <code>Type</code>. ',
  })
  .openapi('CodeStarParameters')

const SourceConnectionParametersSchema = z
  .object({
    CodeStar: CodeStarParametersSchema.and(
      z.any().openapi({ description: 'Provides <code>ConnectionType</code> details.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides connection details.', required: [] })
  .openapi('SourceConnectionParameters')

const LastSyncTimeSchema = z.iso.datetime({ offset: true }).openapi('LastSyncTime')

const LastSyncStatusSchema = z.enum(['SUCCEEDED', 'FAILED']).openapi('LastSyncStatus')

const LastSyncStatusMessageSchema = z.string().openapi('LastSyncStatusMessage')

const LastSuccessfulSyncTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('LastSuccessfulSyncTime')

const LastSyncSchema = z
  .object({
    LastSyncTime: LastSyncTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the last attempted sync from the repository to the Service Catalog product. ',
        }),
    ).exactOptional(),
    LastSyncStatus: LastSyncStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the sync. Responses include <code>SUCCEEDED</code> or <code>FAILED</code>. ',
        }),
    ).exactOptional(),
    LastSyncStatusMessage: LastSyncStatusMessageSchema.and(
      z.any().openapi({ description: "The sync's status message. " }),
    ).exactOptional(),
    LastSuccessfulSyncTime: LastSuccessfulSyncTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the latest successful sync from the source repo artifact to the Service Catalog product.',
        }),
    ).exactOptional(),
    LastSuccessfulSyncProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ProvisioningArtifactID of the ProvisioningArtifact created from the latest successful sync. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Provides details about the product's connection sync and contains the following sub-fields. </p> <ul> <li> <p> <code>LastSyncTime</code> </p> </li> <li> <p> <code>LastSyncStatus</code> </p> </li> <li> <p> <code>LastSyncStatusMessage</code> </p> </li> <li> <p> <code>LastSuccessfulSyncTime</code> </p> </li> <li> <p> <code>LastSuccessfulSyncProvisioningArtifactID</code> </p> </li> </ul>",
    required: [],
  })
  .openapi('LastSync')

const SourceConnectionDetailSchema = z
  .object({
    Type: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The only supported <code>SourceConnection</code> type is Codestar.',
        }),
    ).exactOptional(),
    ConnectionParameters: SourceConnectionParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The connection details based on the connection <code>Type</code>.',
        }),
    ).exactOptional(),
    LastSync: LastSyncSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Provides details about the product's connection sync and contains the following sub-fields. </p> <ul> <li> <p> <code>LastSyncTime</code> </p> </li> <li> <p> <code>LastSyncStatus</code> </p> </li> <li> <p> <code>LastSyncStatusMessage</code> </p> </li> <li> <p> <code>LastSuccessfulSyncTime</code> </p> </li> <li> <p> <code>LastSuccessfulSyncProvisioningArtifactID</code> </p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides details about the configured <code>SourceConnection</code>. ',
    required: [],
  })
  .openapi('SourceConnectionDetail')

const ProductViewDetailSchema = z
  .object({
    ProductViewSummary: ProductViewSummarySchema.and(
      z.any().openapi({ description: 'Summary information about the product view.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the product.</p> <ul> <li> <p> <code>AVAILABLE</code> - The product is ready for use.</p> </li> <li> <p> <code>CREATING</code> - Product creation has started; the product is not ready for use.</p> </li> <li> <p> <code>FAILED</code> - An action failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the product.' }),
    ).exactOptional(),
    CreatedTime: CreatedTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    SourceConnection: SourceConnectionDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'A top level <code>ProductViewDetail</code> response containing details about the product’s connection. Service Catalog returns this field for the <code>CreateProduct</code>, <code>UpdateProduct</code>, <code>DescribeProductAsAdmin</code>, and <code>SearchProductAsAdmin</code> APIs. This response contains the same fields as the <code>ConnectionParameters</code> request, with the addition of the <code>LastSync</code> response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a product view.', required: [] })
  .openapi('ProductViewDetail')

const ProvisioningArtifactNameSchema = z.string().max(8192).openapi('ProvisioningArtifactName')

const ProvisioningArtifactTypeSchema = z
  .enum(['CLOUD_FORMATION_TEMPLATE', 'MARKETPLACE_AMI', 'MARKETPLACE_CAR', 'TERRAFORM_OPEN_SOURCE'])
  .openapi('ProvisioningArtifactType')

const ProvisioningArtifactActiveSchema = z.boolean().openapi('ProvisioningArtifactActive')

const ProvisioningArtifactGuidanceSchema = z
  .enum(['DEFAULT', 'DEPRECATED'])
  .openapi('ProvisioningArtifactGuidance')

const SourceRevisionSchema = z.string().min(1).max(512).openapi('SourceRevision')

const ProvisioningArtifactDetailSchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
    Name: ProvisioningArtifactNameSchema.and(
      z.any().openapi({ description: 'The name of the provisioning artifact.' }),
    ).exactOptional(),
    Description: ProvisioningArtifactNameSchema.and(
      z.any().openapi({ description: 'The description of the provisioning artifact.' }),
    ).exactOptional(),
    Type: ProvisioningArtifactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of provisioning artifact.</p> <ul> <li> <p> <code>CLOUD_FORMATION_TEMPLATE</code> - CloudFormation template</p> </li> <li> <p> <code>MARKETPLACE_AMI</code> - Amazon Web Services Marketplace AMI</p> </li> <li> <p> <code>MARKETPLACE_CAR</code> - Amazon Web Services Marketplace Clusters and Amazon Web Services Resources</p> </li> </ul>',
        }),
    ).exactOptional(),
    CreatedTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    Active: ProvisioningArtifactActiveSchema.and(
      z.any().openapi({ description: 'Indicates whether the product version is active.' }),
    ).exactOptional(),
    Guidance: ProvisioningArtifactGuidanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.',
        }),
    ).exactOptional(),
    SourceRevision: SourceRevisionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the revision of the external artifact that was used to automatically sync the Service Catalog product and create the provisioning artifact. Service Catalog includes this response parameter as a high level field to the existing <code>ProvisioningArtifactDetail</code> type, which is returned as part of the response for <code>CreateProduct</code>, <code>UpdateProduct</code>, <code>DescribeProductAsAdmin</code>, <code>DescribeProvisioningArtifact</code>, <code>ListProvisioningArtifact</code>, and <code>UpdateProvisioningArticat</code> APIs. </p> <p>This field only exists for Repo-Synced products. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a provisioning artifact (also known as a version) for a product.',
    required: [],
  })
  .openapi('ProvisioningArtifactDetail')

const CreateProductOutputSchema = z
  .object({
    ProductViewDetail: ProductViewDetailSchema.and(
      z.any().openapi({ description: 'Information about the product view.' }),
    ).exactOptional(),
    ProvisioningArtifactDetail: ProvisioningArtifactDetailSchema.and(
      z.any().openapi({ description: 'Information about the provisioning artifact. ' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'Information about the tags associated with the product.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProductOutput')

const ProvisioningArtifactDescriptionSchema = z
  .string()
  .max(8192)
  .openapi('ProvisioningArtifactDescription')

const ProvisioningArtifactInfoValueSchema = z.string().openapi('ProvisioningArtifactInfoValue')

const ProvisioningArtifactInfoSchema = z
  .record(z.string(), ProvisioningArtifactInfoValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('ProvisioningArtifactInfo')

const DisableTemplateValidationSchema = z.boolean().openapi('DisableTemplateValidation')

const ProvisioningArtifactPropertiesSchema = z
  .object({
    Name: ProvisioningArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.',
        }),
    ).exactOptional(),
    Description: ProvisioningArtifactDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the provisioning artifact, including how it differs from the previous provisioning artifact.',
        }),
    ).exactOptional(),
    Info: ProvisioningArtifactInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the template source with one of the following options, but not both. Keys accepted: [ <code>LoadTemplateFromURL</code>, <code>ImportFromPhysicalId</code> ]</p> <p>The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format. Specify the URL in JSON format as follows:</p> <p> <code>"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."</code> </p> <p> <code>ImportFromPhysicalId</code>: The physical id of the resource that contains the template. Currently only supports CloudFormation stack arn. Specify the physical id in JSON format as follows: <code>ImportFromPhysicalId: “arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]</code> </p>',
        }),
    ).exactOptional(),
    Type: ProvisioningArtifactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of provisioning artifact.</p> <ul> <li> <p> <code>CLOUD_FORMATION_TEMPLATE</code> - CloudFormation template</p> </li> <li> <p> <code>MARKETPLACE_AMI</code> - Amazon Web Services Marketplace AMI</p> </li> <li> <p> <code>MARKETPLACE_CAR</code> - Amazon Web Services Marketplace Clusters and Amazon Web Services Resources</p> </li> <li> <p> <code>TERRAFORM_OPEN_SOURCE</code> - Terraform open source configuration file</p> </li> </ul>',
        }),
    ).exactOptional(),
    DisableTemplateValidation: DisableTemplateValidationSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to true, Service Catalog stops validating the specified provisioning artifact even if it is invalid.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a provisioning artifact (also known as a version) for a product.',
    required: [],
  })
  .openapi('ProvisioningArtifactProperties')

const SourceConnectionSchema = z
  .object({
    Type: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The only supported <code>SourceConnection</code> type is Codestar. ',
        }),
    ).exactOptional(),
    ConnectionParameters: SourceConnectionParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The connection details based on the connection <code>Type</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['ConnectionParameters'],
    description:
      'A top level <code>ProductViewDetail</code> response containing details about the product’s connection. Service Catalog returns this field for the <code>CreateProduct</code>, <code>UpdateProduct</code>, <code>DescribeProductAsAdmin</code>, and <code>SearchProductAsAdmin</code> APIs. This response contains the same fields as the <code>ConnectionParameters</code> request, with the addition of the <code>LastSync</code> response.',
  })
  .openapi('SourceConnection')

const CreateProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Name: ProductViewNameSchema.and(z.any().openapi({ description: 'The name of the product.' })),
    Owner: ProductViewOwnerSchema.and(
      z.any().openapi({ description: 'The owner of the product.' }),
    ),
    Description: ProductViewShortDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the product.' }),
    ).exactOptional(),
    Distributor: ProductViewOwnerSchema.and(
      z.any().openapi({ description: 'The distributor of the product.' }),
    ).exactOptional(),
    SupportDescription: SupportDescriptionSchema.and(
      z.any().openapi({ description: 'The support information about the product.' }),
    ).exactOptional(),
    SupportEmail: SupportEmailSchema.and(
      z.any().openapi({ description: 'The contact email for product support.' }),
    ).exactOptional(),
    SupportUrl: SupportUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The contact URL for product support.</p> <p> <code>^https?:\\/\\// </code>/ is the pattern used to validate SupportUrl.</p>',
        }),
    ).exactOptional(),
    ProductType: ProductTypeSchema.and(z.any().openapi({ description: 'The type of product.' })),
    Tags: AddTagsSchema.and(z.any().openapi({ description: 'One or more tags.' })).exactOptional(),
    ProvisioningArtifactParameters: ProvisioningArtifactPropertiesSchema.and(
      z.any().openapi({ description: 'The configuration of the provisioning artifact. ' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ),
    SourceConnection: SourceConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies connection details for the created product and syncs the product to the connection source artifact. This automatically manages the product's artifacts based on changes to the source. The <code>SourceConnection</code> parameter consists of the following sub-fields.</p> <ul> <li> <p> <code>Type</code> </p> </li> <li> <p> <code>ConnectionParamters</code> </p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Owner', 'ProductType', 'IdempotencyToken'],
    title: 'CreateProductInput',
  })
  .openapi('CreateProductInput')

const ProvisionedProductPlanNameSchema = z.string().openapi('ProvisionedProductPlanName')

const ProvisionedProductNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9._-]*/)
  .min(1)
  .max(128)
  .openapi('ProvisionedProductName')

const CreateProvisionedProductPlanOutputSchema = z
  .object({
    PlanName: ProvisionedProductPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the plan.' }),
    ).exactOptional(),
    PlanId: IdSchema.and(z.any().openapi({ description: 'The plan identifier.' })).exactOptional(),
    ProvisionProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    ProvisionedProductName: ProvisionedProductNameSchema.and(
      z.any().openapi({ description: 'The user-friendly name of the provisioned product.' }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProvisionedProductPlanOutput')

const ProvisionedProductPlanTypeSchema = z
  .literal('CLOUDFORMATION')
  .openapi('ProvisionedProductPlanType')

const NotificationArnSchema = z
  .string()
  .regex(
    /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
  )
  .min(1)
  .max(1224)
  .openapi('NotificationArn')

const NotificationArnsSchema = z.array(NotificationArnSchema).max(5).openapi('NotificationArns')

const ParameterKeySchema = z.string().min(1).max(1000).openapi('ParameterKey')

const ParameterValueSchema = z.string().max(4096).openapi('ParameterValue')

const UsePreviousValueSchema = z.boolean().openapi('UsePreviousValue')

const UpdateProvisioningParameterSchema = z
  .object({
    Key: ParameterKeySchema.and(
      z.any().openapi({ description: 'The parameter key.' }),
    ).exactOptional(),
    Value: ParameterValueSchema.and(
      z.any().openapi({ description: 'The parameter value.' }),
    ).exactOptional(),
    UsePreviousValue: UsePreviousValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to true, <code>Value</code> is ignored and the previous parameter value is kept.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The parameter key-value pair used to update a provisioned product.',
    required: [],
  })
  .openapi('UpdateProvisioningParameter')

const UpdateProvisioningParametersSchema = z
  .array(UpdateProvisioningParameterSchema)
  .openapi('UpdateProvisioningParameters')

const CreateProvisionedProductPlanInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PlanName: ProvisionedProductPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the plan.' }),
    ),
    PlanType: ProvisionedProductPlanTypeSchema.and(
      z.any().openapi({ description: 'The plan type.' }),
    ),
    NotificationArns: NotificationArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.',
        }),
    ).exactOptional(),
    PathId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>.',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    ProvisionedProductName: ProvisionedProductNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-friendly name for the provisioned product. This value must be unique for the Amazon Web Services account and cannot be updated after the product is provisioned.',
        }),
    ),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ),
    ProvisioningParameters: UpdateProvisioningParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Parameters specified by the administrator that are required for provisioning the product.',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more tags.</p> <p>If the plan is for an existing provisioned product, the product must have a <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'PlanName',
      'PlanType',
      'ProductId',
      'ProvisionedProductName',
      'ProvisioningArtifactId',
      'IdempotencyToken',
    ],
    title: 'CreateProvisionedProductPlanInput',
  })
  .openapi('CreateProvisionedProductPlanInput')

const CreateProvisioningArtifactOutputSchema = z
  .object({
    ProvisioningArtifactDetail: ProvisioningArtifactDetailSchema.and(
      z.any().openapi({ description: 'Information about the provisioning artifact.' }),
    ).exactOptional(),
    Info: ProvisioningArtifactInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the template source with one of the following options, but not both. Keys accepted: [ <code>LoadTemplateFromURL</code>, <code>ImportFromPhysicalId</code> ].</p> <p>Use the URL of the CloudFormation template in Amazon S3 or GitHub in JSON format. </p> <p> <code>LoadTemplateFromURL</code> </p> <p>Use the URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.</p> <p> <code>ImportFromPhysicalId</code> </p> <p>Use the physical id of the resource that contains the template; currently supports CloudFormation stack ARN.</p>',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the current request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProvisioningArtifactOutput')

const CreateProvisioningArtifactInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    Parameters: ProvisioningArtifactPropertiesSchema.and(
      z.any().openapi({ description: 'The configuration for the provisioning artifact.' }),
    ),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ),
  })
  .openapi({
    required: ['ProductId', 'Parameters', 'IdempotencyToken'],
    title: 'CreateProvisioningArtifactInput',
  })
  .openapi('CreateProvisioningArtifactInput')

const ServiceActionNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-.]*/)
  .min(1)
  .max(256)
  .openapi('ServiceActionName')

const ServiceActionDescriptionSchema = z.string().max(1024).openapi('ServiceActionDescription')

const ServiceActionDefinitionTypeSchema = z
  .literal('SSM_AUTOMATION')
  .openapi('ServiceActionDefinitionType')

const ServiceActionSummarySchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The self-service action identifier.' }),
    ).exactOptional(),
    Name: ServiceActionNameSchema.and(
      z.any().openapi({ description: 'The self-service action name.' }),
    ).exactOptional(),
    Description: ServiceActionDescriptionSchema.and(
      z.any().openapi({ description: 'The self-service action description.' }),
    ).exactOptional(),
    DefinitionType: ServiceActionDefinitionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-service action definition type. For example, <code>SSM_AUTOMATION</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about the self-service action.', required: [] })
  .openapi('ServiceActionSummary')

const ServiceActionDefinitionValueSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('ServiceActionDefinitionValue')

const ServiceActionDefinitionMapSchema = z
  .record(z.string(), ServiceActionDefinitionValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('ServiceActionDefinitionMap')

const ServiceActionDetailSchema = z
  .object({
    ServiceActionSummary: ServiceActionSummarySchema.and(
      z.any().openapi({ description: 'Summary information about the self-service action.' }),
    ).exactOptional(),
    Definition: ServiceActionDefinitionMapSchema.and(
      z.any().openapi({ description: 'A map that defines the self-service action.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object containing detailed information about the self-service action.',
    required: [],
  })
  .openapi('ServiceActionDetail')

const CreateServiceActionOutputSchema = z
  .object({
    ServiceActionDetail: ServiceActionDetailSchema.and(
      z
        .any()
        .openapi({
          description: 'An object containing information about the self-service action.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateServiceActionOutput')

const CreateServiceActionInputSchema = z
  .object({
    Name: ServiceActionNameSchema.and(
      z.any().openapi({ description: 'The self-service action name.' }),
    ),
    DefinitionType: ServiceActionDefinitionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service action definition type. For example, <code>SSM_AUTOMATION</code>.',
        }),
    ),
    Definition: ServiceActionDefinitionMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The self-service action definition. Can be one of the following:</p> <dl> <dt>Name</dt> <dd> <p>The name of the Amazon Web Services Systems Manager document (SSM document). For example, <code>AWS-RestartEC2Instance</code>.</p> <p>If you are using a shared SSM document, you must provide the ARN instead of the name.</p> </dd> <dt>Version</dt> <dd> <p>The Amazon Web Services Systems Manager automation document version. For example, <code>"Version": "1"</code> </p> </dd> <dt>AssumeRole</dt> <dd> <p>The Amazon Resource Name (ARN) of the role that performs the self-service actions on your behalf. For example, <code>"AssumeRole": "arn:aws:iam::12345678910:role/ActionRole"</code>.</p> <p>To reuse the provisioned product launch role, set to <code>"AssumeRole": "LAUNCH_ROLE"</code>.</p> </dd> <dt>Parameters</dt> <dd> <p>The list of parameters in JSON format.</p> <p>For example: <code>[{\\"Name\\":\\"InstanceId\\",\\"Type\\":\\"TARGET\\"}]</code> or <code>[{\\"Name\\":\\"InstanceId\\",\\"Type\\":\\"TEXT_VALUE\\"}]</code>.</p> </dd> </dl>',
        }),
    ),
    Description: ServiceActionDescriptionSchema.and(
      z.any().openapi({ description: 'The self-service action description.' }),
    ).exactOptional(),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'DefinitionType', 'Definition', 'IdempotencyToken'],
    title: 'CreateServiceActionInput',
  })
  .openapi('CreateServiceActionInput')

const TagOptionKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagOptionKey')

const TagOptionValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(256)
  .openapi('TagOptionValue')

const TagOptionActiveSchema = z.boolean().openapi('TagOptionActive')

const OwnerSchema = z.string().openapi('Owner')

const TagOptionDetailSchema = z
  .object({
    Key: TagOptionKeySchema.and(
      z.any().openapi({ description: 'The TagOption key.' }),
    ).exactOptional(),
    Value: TagOptionValueSchema.and(
      z.any().openapi({ description: 'The TagOption value.' }),
    ).exactOptional(),
    Active: TagOptionActiveSchema.and(
      z.any().openapi({ description: 'The TagOption active state.' }),
    ).exactOptional(),
    Id: TagOptionIdSchema.and(
      z.any().openapi({ description: 'The TagOption identifier.' }),
    ).exactOptional(),
    Owner: OwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account Id of the owner account that created the TagOption.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a TagOption.', required: [] })
  .openapi('TagOptionDetail')

const CreateTagOptionOutputSchema = z
  .object({
    TagOptionDetail: TagOptionDetailSchema.and(
      z.any().openapi({ description: 'Information about the TagOption.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTagOptionOutput')

const CreateTagOptionInputSchema = z
  .object({
    Key: TagOptionKeySchema.and(z.any().openapi({ description: 'The TagOption key.' })),
    Value: TagOptionValueSchema.and(z.any().openapi({ description: 'The TagOption value.' })),
  })
  .openapi({ required: ['Key', 'Value'], title: 'CreateTagOptionInput' })
  .openapi('CreateTagOptionInput')

const DeleteConstraintOutputSchema = z.object({}).openapi('DeleteConstraintOutput')

const DeleteConstraintInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The identifier of the constraint.' })),
  })
  .openapi({ required: ['Id'], title: 'DeleteConstraintInput' })
  .openapi('DeleteConstraintInput')

const DeletePortfolioOutputSchema = z.object({}).openapi('DeletePortfolioOutput')

const DeletePortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
  })
  .openapi({ required: ['Id'], title: 'DeletePortfolioInput' })
  .openapi('DeletePortfolioInput')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const DeletePortfolioShareOutputSchema = z
  .object({
    PortfolioShareToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The portfolio share unique identifier. This will only be returned if delete is made to an organization node.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeletePortfolioShareOutput')

const DeletePortfolioShareInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID.' }),
    ).exactOptional(),
    OrganizationNode: OrganizationNodeSchema.and(
      z
        .any()
        .openapi({ description: 'The organization node to whom you are going to stop sharing.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId'], title: 'DeletePortfolioShareInput' })
  .openapi('DeletePortfolioShareInput')

const DeleteProductOutputSchema = z.object({}).openapi('DeleteProductOutput')

const DeleteProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
  })
  .openapi({ required: ['Id'], title: 'DeleteProductInput' })
  .openapi('DeleteProductInput')

const DeleteProvisionedProductPlanOutputSchema = z
  .object({})
  .openapi('DeleteProvisionedProductPlanOutput')

const IgnoreErrorsSchema = z.boolean().openapi('IgnoreErrors')

const DeleteProvisionedProductPlanInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PlanId: IdSchema.and(z.any().openapi({ description: 'The plan identifier.' })),
    IgnoreErrors: IgnoreErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to true, Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PlanId'], title: 'DeleteProvisionedProductPlanInput' })
  .openapi('DeleteProvisionedProductPlanInput')

const DeleteProvisioningArtifactOutputSchema = z
  .object({})
  .openapi('DeleteProvisioningArtifactOutput')

const DeleteProvisioningArtifactInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ),
  })
  .openapi({
    required: ['ProductId', 'ProvisioningArtifactId'],
    title: 'DeleteProvisioningArtifactInput',
  })
  .openapi('DeleteProvisioningArtifactInput')

const DeleteServiceActionOutputSchema = z.object({}).openapi('DeleteServiceActionOutput')

const DeleteServiceActionInputSchema = z
  .object({
    Id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.',
        }),
    ),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'DeleteServiceActionInput' })
  .openapi('DeleteServiceActionInput')

const DeleteTagOptionOutputSchema = z.object({}).openapi('DeleteTagOptionOutput')

const DeleteTagOptionInputSchema = z
  .object({
    Id: TagOptionIdSchema.and(z.any().openapi({ description: 'The TagOption identifier.' })),
  })
  .openapi({ required: ['Id'], title: 'DeleteTagOptionInput' })
  .openapi('DeleteTagOptionInput')

const DescribeConstraintOutputSchema = z
  .object({
    ConstraintDetail: ConstraintDetailSchema.and(
      z.any().openapi({ description: 'Information about the constraint.' }),
    ).exactOptional(),
    ConstraintParameters: ConstraintParametersSchema.and(
      z.any().openapi({ description: 'The constraint parameters.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the current request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConstraintOutput')

const DescribeConstraintInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The identifier of the constraint.' })),
  })
  .openapi({ required: ['Id'], title: 'DescribeConstraintInput' })
  .openapi('DescribeConstraintInput')

const CopyProductStatusSchema = z
  .enum(['SUCCEEDED', 'IN_PROGRESS', 'FAILED'])
  .openapi('CopyProductStatus')

const StatusDetailSchema = z.string().openapi('StatusDetail')

const DescribeCopyProductStatusOutputSchema = z
  .object({
    CopyProductStatus: CopyProductStatusSchema.and(
      z.any().openapi({ description: 'The status of the copy product operation.' }),
    ).exactOptional(),
    TargetProductId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the copied product.' }),
    ).exactOptional(),
    StatusDetail: StatusDetailSchema.and(
      z.any().openapi({ description: 'The status message.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCopyProductStatusOutput')

const DescribeCopyProductStatusInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    CopyProductToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the copy product operation. This token is returned by <a>CopyProduct</a>.',
        }),
    ),
  })
  .openapi({ required: ['CopyProductToken'], title: 'DescribeCopyProductStatusInput' })
  .openapi('DescribeCopyProductStatusInput')

const TagOptionDetailsSchema = z.array(TagOptionDetailSchema).openapi('TagOptionDetails')

const BudgetDetailSchema = z
  .object({
    BudgetName: BudgetNameSchema.and(
      z.any().openapi({ description: 'Name of the associated budget.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a budget.', required: [] })
  .openapi('BudgetDetail')

const BudgetsSchema = z.array(BudgetDetailSchema).openapi('Budgets')

const DescribePortfolioOutputSchema = z
  .object({
    PortfolioDetail: PortfolioDetailSchema.and(
      z.any().openapi({ description: 'Information about the portfolio.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'Information about the tags associated with the portfolio.' }),
    ).exactOptional(),
    TagOptions: TagOptionDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the TagOptions associated with the portfolio.',
        }),
    ).exactOptional(),
    Budgets: BudgetsSchema.and(
      z.any().openapi({ description: 'Information about the associated budgets.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePortfolioOutput')

const DescribePortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
  })
  .openapi({ required: ['Id'], title: 'DescribePortfolioInput' })
  .openapi('DescribePortfolioInput')

const ShareStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'COMPLETED_WITH_ERRORS', 'ERROR'])
  .openapi('ShareStatus')

const SuccessfulSharesSchema = z.array(AccountIdSchema).openapi('SuccessfulShares')

const NamespacesSchema = z.array(AccountIdSchema).openapi('Namespaces')

const MessageSchema = z.string().openapi('Message')

const ErrorSchema = z.string().openapi('Error')

const ShareErrorSchema = z
  .object({
    Accounts: NamespacesSchema.and(
      z.any().openapi({ description: 'List of accounts impacted by the error.' }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z.any().openapi({ description: 'Information about the error.' }),
    ).exactOptional(),
    Error: ErrorSchema.and(
      z.any().openapi({ description: 'Error type that happened when processing the operation.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Errors that occurred during the portfolio share operation.',
    required: [],
  })
  .openapi('ShareError')

const ShareErrorsSchema = z.array(ShareErrorSchema).openapi('ShareErrors')

const ShareDetailsSchema = z
  .object({
    SuccessfulShares: SuccessfulSharesSchema.and(
      z.any().openapi({ description: 'List of accounts for whom the operation succeeded.' }),
    ).exactOptional(),
    ShareErrors: ShareErrorsSchema.and(
      z.any().openapi({ description: 'List of errors.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the portfolio share operation.', required: [] })
  .openapi('ShareDetails')

const DescribePortfolioShareStatusOutputSchema = z
  .object({
    PortfolioShareToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the portfolio share operation. For example, <code>share-6v24abcdefghi</code>.',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(
      z.any().openapi({ description: 'The portfolio identifier.' }),
    ).exactOptional(),
    OrganizationNodeValue: OrganizationNodeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Organization node identifier. It can be either account id, organizational unit id or organization id.',
        }),
    ).exactOptional(),
    Status: ShareStatusSchema.and(
      z.any().openapi({ description: 'Status of the portfolio share operation.' }),
    ).exactOptional(),
    ShareDetails: ShareDetailsSchema.and(
      z.any().openapi({ description: 'Information about the portfolio share operation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePortfolioShareStatusOutput')

const DescribePortfolioShareStatusInputSchema = z
  .object({
    PortfolioShareToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the portfolio share operation. This token is returned either by CreatePortfolioShare or by DeletePortfolioShare.',
        }),
    ),
  })
  .openapi({ required: ['PortfolioShareToken'], title: 'DescribePortfolioShareStatusInput' })
  .openapi('DescribePortfolioShareStatusInput')

const PageTokenSchema = z
  .string()
  .regex(/[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*/)
  .max(2024)
  .openapi('PageToken')

const DescribePortfolioShareTypeSchema = z
  .enum(['ACCOUNT', 'ORGANIZATION', 'ORGANIZATIONAL_UNIT', 'ORGANIZATION_MEMBER_ACCOUNT'])
  .openapi('DescribePortfolioShareType')

const PortfolioShareDetailSchema = z
  .object({
    PrincipalId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the recipient entity that received the portfolio share. The recipient entity can be one of the following:</p> <p>1. An external account.</p> <p>2. An organziation member account.</p> <p>3. An organzational unit (OU).</p> <p>4. The organization itself. (This shares with every account in the organization).</p>',
        }),
    ).exactOptional(),
    Type: DescribePortfolioShareTypeSchema.and(
      z.any().openapi({ description: 'The type of the portfolio share.' }),
    ).exactOptional(),
    Accepted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the shared portfolio is imported by the recipient account. If the recipient is in an organization node, the share is automatically imported, and the field is always set to true.',
        }),
    ).exactOptional(),
    ShareTagOptions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether TagOptions sharing is enabled or disabled for the portfolio share.',
        }),
    ).exactOptional(),
    SharePrincipals: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates if <code>Principal</code> sharing is enabled or disabled for the portfolio share. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the portfolio share.', required: [] })
  .openapi('PortfolioShareDetail')

const PortfolioShareDetailsSchema = z
  .array(PortfolioShareDetailSchema)
  .openapi('PortfolioShareDetails')

const DescribePortfolioSharesOutputSchema = z
  .object({
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
    PortfolioShareDetails: PortfolioShareDetailsSchema.and(
      z.any().openapi({ description: 'Summaries about each of the portfolio shares.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePortfolioSharesOutput')

const PageSizeMax100Schema = z.int().min(0).max(100).openapi('PageSizeMax100')

const DescribePortfolioSharesInputSchema = z
  .object({
    PortfolioId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the portfolio for which shares will be retrieved.',
        }),
    ),
    Type: DescribePortfolioShareTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of portfolio share to summarize. This field acts as a filter on the type of portfolio share, which can be one of the following:</p> <p>1. <code>ACCOUNT</code> - Represents an external account to account share.</p> <p>2. <code>ORGANIZATION</code> - Represents a share to an organization. This share is available to every account in the organization.</p> <p>3. <code>ORGANIZATIONAL_UNIT</code> - Represents a share to an organizational unit.</p> <p>4. <code>ORGANIZATION_MEMBER_ACCOUNT</code> - Represents a share to an account in the organization.</p>',
        }),
    ),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId', 'Type'], title: 'DescribePortfolioSharesInput' })
  .openapi('DescribePortfolioSharesInput')

const ProvisioningArtifactCreatedTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('ProvisioningArtifactCreatedTime')

const ProvisioningArtifactSchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
    Name: ProvisioningArtifactNameSchema.and(
      z.any().openapi({ description: 'The name of the provisioning artifact.' }),
    ).exactOptional(),
    Description: ProvisioningArtifactDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the provisioning artifact.' }),
    ).exactOptional(),
    CreatedTime: ProvisioningArtifactCreatedTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    Guidance: ProvisioningArtifactGuidanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a provisioning artifact. A provisioning artifact is also known as a product version.',
    required: [],
  })
  .openapi('ProvisioningArtifact')

const ProvisioningArtifactsSchema = z
  .array(ProvisioningArtifactSchema)
  .openapi('ProvisioningArtifacts')

const PortfolioNameSchema = z.string().openapi('PortfolioName')

const LaunchPathSchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the launch path.' }),
    ).exactOptional(),
    Name: PortfolioNameSchema.and(
      z.any().openapi({ description: 'The name of the launch path.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A launch path object.', required: [] })
  .openapi('LaunchPath')

const LaunchPathsSchema = z.array(LaunchPathSchema).openapi('LaunchPaths')

const DescribeProductOutputSchema = z
  .object({
    ProductViewSummary: ProductViewSummarySchema.and(
      z.any().openapi({ description: 'Summary information about the product view.' }),
    ).exactOptional(),
    ProvisioningArtifacts: ProvisioningArtifactsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the provisioning artifacts for the specified product.',
        }),
    ).exactOptional(),
    Budgets: BudgetsSchema.and(
      z.any().openapi({ description: 'Information about the associated budgets.' }),
    ).exactOptional(),
    LaunchPaths: LaunchPathsSchema.and(
      z.any().openapi({ description: 'Information about the associated launch paths.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProductOutput')

const DescribeProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })).exactOptional(),
    Name: ProductViewNameSchema.and(
      z.any().openapi({ description: 'The product name.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeProductInput', required: [] })
  .openapi('DescribeProductInput')

const ProvisioningArtifactSummarySchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
    Name: ProvisioningArtifactNameSchema.and(
      z.any().openapi({ description: 'The name of the provisioning artifact.' }),
    ).exactOptional(),
    Description: ProvisioningArtifactDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the provisioning artifact.' }),
    ).exactOptional(),
    CreatedTime: ProvisioningArtifactCreatedTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    ProvisioningArtifactMetadata: ProvisioningArtifactInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata for the provisioning artifact. This is used with Amazon Web Services Marketplace products.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information about a provisioning artifact (also known as a version) for a product.',
    required: [],
  })
  .openapi('ProvisioningArtifactSummary')

const ProvisioningArtifactSummariesSchema = z
  .array(ProvisioningArtifactSummarySchema)
  .openapi('ProvisioningArtifactSummaries')

const DescribeProductAsAdminOutputSchema = z
  .object({
    ProductViewDetail: ProductViewDetailSchema.and(
      z.any().openapi({ description: 'Information about the product view.' }),
    ).exactOptional(),
    ProvisioningArtifactSummaries: ProvisioningArtifactSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the provisioning artifacts (also known as versions) for the specified product.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'Information about the tags associated with the product.' }),
    ).exactOptional(),
    TagOptions: TagOptionDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the TagOptions associated with the product.' }),
    ).exactOptional(),
    Budgets: BudgetsSchema.and(
      z.any().openapi({ description: 'Information about the associated budgets.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProductAsAdminOutput')

const DescribeProductAsAdminInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })).exactOptional(),
    Name: ProductViewNameSchema.and(
      z.any().openapi({ description: 'The product name.' }),
    ).exactOptional(),
    SourcePortfolioId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the shared portfolio that the specified product is associated with.</p> <p>You can provide this parameter to retrieve the shared TagOptions associated with the product. If this parameter is provided and if TagOptions sharing is enabled in the portfolio share, the API returns both local and shared TagOptions associated with the product. Otherwise only local TagOptions will be returned. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeProductAsAdminInput', required: [] })
  .openapi('DescribeProductAsAdminInput')

const DescribeProductViewOutputSchema = z
  .object({
    ProductViewSummary: ProductViewSummarySchema.and(
      z.any().openapi({ description: 'Summary information about the product.' }),
    ).exactOptional(),
    ProvisioningArtifacts: ProvisioningArtifactsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the provisioning artifacts for the product.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProductViewOutput')

const DescribeProductViewInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The product view identifier.' })),
  })
  .openapi({ required: ['Id'], title: 'DescribeProductViewInput' })
  .openapi('DescribeProductViewInput')

const ProvisionedProductNameOrArnSchema = z
  .string()
  .regex(
    /[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}|arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
  )
  .min(1)
  .max(1224)
  .openapi('ProvisionedProductNameOrArn')

const ProvisionedProductTypeSchema = z.string().openapi('ProvisionedProductType')

const ProvisionedProductIdSchema = z.string().openapi('ProvisionedProductId')

const ProvisionedProductStatusSchema = z
  .enum(['AVAILABLE', 'UNDER_CHANGE', 'TAINTED', 'ERROR', 'PLAN_IN_PROGRESS'])
  .openapi('ProvisionedProductStatus')

const ProvisionedProductStatusMessageSchema = z.string().openapi('ProvisionedProductStatusMessage')

const LastRequestIdSchema = z.string().openapi('LastRequestId')

const RoleArnSchema = z
  .string()
  .regex(/arn:[a-z0-9-\.]{1,63}:iam::[a-z0-9-\.]{0,63}:role\/.{0,1023}/)
  .min(1)
  .max(1224)
  .openapi('RoleArn')

const ProvisionedProductDetailSchema = z
  .object({
    Name: ProvisionedProductNameOrArnSchema.and(
      z.any().openapi({ description: 'The user-friendly name of the provisioned product.' }),
    ).exactOptional(),
    Arn: ProvisionedProductNameOrArnSchema.and(
      z.any().openapi({ description: 'The ARN of the provisioned product.' }),
    ).exactOptional(),
    Type: ProvisionedProductTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.',
        }),
    ).exactOptional(),
    Id: ProvisionedProductIdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioned product.' }),
    ).exactOptional(),
    Status: ProvisionedProductStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the provisioned product.</p> <ul> <li> <p> <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p> </li> <li> <p> <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results. Wait for an <code>AVAILABLE</code> status before performing operations.</p> </li> <li> <p> <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p> </li> <li> <p> <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p> </li> <li> <p> <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an <code>AVAILABLE</code> status before performing operations.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StatusMessage: ProvisionedProductStatusMessageSchema.and(
      z.any().openapi({ description: 'The current status message of the provisioned product.' }),
    ).exactOptional(),
    CreatedTime: CreatedTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ).exactOptional(),
    LastRecordId: LastRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The record identifier of the last request performed on this provisioned product.',
        }),
    ).exactOptional(),
    LastProvisioningRecordId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The record identifier of the last request performed on this provisioned product of the following types:</p> <ul> <li> <p> ProvisionedProduct </p> </li> <li> <p> UpdateProvisionedProduct </p> </li> <li> <p> ExecuteProvisionedProductPlan </p> </li> <li> <p> TerminateProvisionedProduct </p> </li> </ul>',
        }),
    ).exactOptional(),
    LastSuccessfulProvisioningRecordId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The record identifier of the last successful request performed on this provisioned product of the following types:</p> <ul> <li> <p> ProvisionedProduct </p> </li> <li> <p> UpdateProvisionedProduct </p> </li> <li> <p> ExecuteProvisionedProductPlan </p> </li> <li> <p> TerminateProvisionedProduct </p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.',
        }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.',
        }),
    ).exactOptional(),
    LaunchRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the launch role associated with the provisioned product.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a provisioned product.', required: [] })
  .openapi('ProvisionedProductDetail')

const CloudWatchDashboardNameSchema = z.string().openapi('CloudWatchDashboardName')

const CloudWatchDashboardSchema = z
  .object({
    Name: CloudWatchDashboardNameSchema.and(
      z.any().openapi({ description: 'The name of the CloudWatch dashboard.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a CloudWatch dashboard.', required: [] })
  .openapi('CloudWatchDashboard')

const CloudWatchDashboardsSchema = z
  .array(CloudWatchDashboardSchema)
  .openapi('CloudWatchDashboards')

const DescribeProvisionedProductOutputSchema = z
  .object({
    ProvisionedProductDetail: ProvisionedProductDetailSchema.and(
      z.any().openapi({ description: 'Information about the provisioned product.' }),
    ).exactOptional(),
    CloudWatchDashboards: CloudWatchDashboardsSchema.and(
      z
        .any()
        .openapi({
          description: 'Any CloudWatch dashboards that were created when provisioning the product.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProvisionedProductOutput')

const DescribeProvisionedProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The provisioned product identifier. You must provide the name or ID, but not both.</p> <p>If you do not provide a name or ID, or you provide both name and ID, an <code>InvalidParametersException</code> will occur.</p>',
        }),
    ).exactOptional(),
    Name: ProvisionedProductNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the provisioned product. You must provide the name or ID, but not both.</p> <p>If you do not provide a name or ID, or you provide both name and ID, an <code>InvalidParametersException</code> will occur.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeProvisionedProductInput',
    description:
      'DescribeProvisionedProductAPI input structure. AcceptLanguage - [Optional] The language code for localization. Id - [Optional] The provisioned product identifier. Name - [Optional] Another provisioned product identifier. Customers must provide either Id or Name.',
    required: [],
  })
  .openapi('DescribeProvisionedProductInput')

const ProvisionedProductPlanStatusSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'CREATE_SUCCESS',
    'CREATE_FAILED',
    'EXECUTE_IN_PROGRESS',
    'EXECUTE_SUCCESS',
    'EXECUTE_FAILED',
  ])
  .openapi('ProvisionedProductPlanStatus')

const UpdatedTimeSchema = z.iso.datetime({ offset: true }).openapi('UpdatedTime')

const StatusMessageSchema = z
  .string()
  .regex(/[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*/)
  .openapi('StatusMessage')

const ProvisionedProductPlanDetailsSchema = z
  .object({
    CreatedTime: CreatedTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    PathId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>.',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    PlanName: ProvisionedProductPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the plan.' }),
    ).exactOptional(),
    PlanId: IdSchema.and(z.any().openapi({ description: 'The plan identifier.' })).exactOptional(),
    ProvisionProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    ProvisionProductName: ProvisionedProductNameSchema.and(
      z.any().openapi({ description: 'The user-friendly name of the provisioned product.' }),
    ).exactOptional(),
    PlanType: ProvisionedProductPlanTypeSchema.and(
      z.any().openapi({ description: 'The plan type.' }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
    Status: ProvisionedProductPlanStatusSchema.and(
      z.any().openapi({ description: 'The status.' }),
    ).exactOptional(),
    UpdatedTime: UpdatedTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp when the plan was last updated.' }),
    ).exactOptional(),
    NotificationArns: NotificationArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.',
        }),
    ).exactOptional(),
    ProvisioningParameters: UpdateProvisioningParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Parameters specified by the administrator that are required for provisioning the product.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ description: 'One or more tags.' })).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'The status message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a plan.', required: [] })
  .openapi('ProvisionedProductPlanDetails')

const ChangeActionSchema = z.enum(['ADD', 'MODIFY', 'REMOVE']).openapi('ChangeAction')

const LogicalResourceIdSchema = z.string().openapi('LogicalResourceId')

const PhysicalResourceIdSchema = z.string().openapi('PhysicalResourceId')

const PlanResourceTypeSchema = z.string().min(1).max(256).openapi('PlanResourceType')

const ReplacementSchema = z.enum(['TRUE', 'FALSE', 'CONDITIONAL']).openapi('Replacement')

const ResourceAttributeSchema = z
  .enum(['PROPERTIES', 'METADATA', 'CREATIONPOLICY', 'UPDATEPOLICY', 'DELETIONPOLICY', 'TAGS'])
  .openapi('ResourceAttribute')

const ScopeSchema = z.array(ResourceAttributeSchema).openapi('Scope')

const PropertyNameSchema = z.string().openapi('PropertyName')

const RequiresRecreationSchema = z
  .enum(['NEVER', 'CONDITIONALLY', 'ALWAYS'])
  .openapi('RequiresRecreation')

const ResourceTargetDefinitionSchema = z
  .object({
    Attribute: ResourceAttributeSchema.and(
      z.any().openapi({ description: 'The attribute to be changed.' }),
    ).exactOptional(),
    Name: PropertyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the attribute is <code>Properties</code>, the value is the name of the property. Otherwise, the value is null.',
        }),
    ).exactOptional(),
    RequiresRecreation: RequiresRecreationSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the attribute is <code>Properties</code>, indicates whether a change to this property causes the resource to be re-created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a change to a resource attribute.', required: [] })
  .openapi('ResourceTargetDefinition')

const EvaluationTypeSchema = z.enum(['STATIC', 'DYNAMIC']).openapi('EvaluationType')

const CausingEntitySchema = z.string().openapi('CausingEntity')

const ResourceChangeDetailSchema = z
  .object({
    Target: ResourceTargetDefinitionSchema.and(
      z.any().openapi({ description: 'Information about the resource attribute to be modified.' }),
    ).exactOptional(),
    Evaluation: EvaluationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'For static evaluations, the value of the resource attribute will change and the new value is known. For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.',
        }),
    ).exactOptional(),
    CausingEntity: CausingEntitySchema.and(
      z.any().openapi({ description: 'The ID of the entity that caused the change.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a change to a resource attribute.', required: [] })
  .openapi('ResourceChangeDetail')

const ResourceChangeDetailsSchema = z
  .array(ResourceChangeDetailSchema)
  .openapi('ResourceChangeDetails')

const ResourceChangeSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z.any().openapi({ description: 'The change action.' }),
    ).exactOptional(),
    LogicalResourceId: LogicalResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the resource, as defined in the CloudFormation template.',
        }),
    ).exactOptional(),
    PhysicalResourceId: PhysicalResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the resource, if it was already created.' }),
    ).exactOptional(),
    ResourceType: PlanResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource.' }),
    ).exactOptional(),
    Replacement: ReplacementSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the change type is <code>Modify</code>, indicates whether the existing resource is deleted and replaced with a new one.',
        }),
    ).exactOptional(),
    Scope: ScopeSchema.and(z.any().openapi({ description: 'The change scope.' })).exactOptional(),
    Details: ResourceChangeDetailsSchema.and(
      z.any().openapi({ description: 'Information about the resource changes.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a resource change that will occur when a plan is executed.',
    required: [],
  })
  .openapi('ResourceChange')

const ResourceChangesSchema = z.array(ResourceChangeSchema).openapi('ResourceChanges')

const DescribeProvisionedProductPlanOutputSchema = z
  .object({
    ProvisionedProductPlanDetails: ProvisionedProductPlanDetailsSchema.and(
      z.any().openapi({ description: 'Information about the plan.' }),
    ).exactOptional(),
    ResourceChanges: ResourceChangesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the resource changes that will occur when the plan is executed.',
        }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProvisionedProductPlanOutput')

const PageSizeSchema = z.int().min(0).max(20).openapi('PageSize')

const DescribeProvisionedProductPlanInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PlanId: IdSchema.and(z.any().openapi({ description: 'The plan identifier.' })),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PlanId'], title: 'DescribeProvisionedProductPlanInput' })
  .openapi('DescribeProvisionedProductPlanInput')

const DescribeProvisioningArtifactOutputSchema = z
  .object({
    ProvisioningArtifactDetail: ProvisioningArtifactDetailSchema.and(
      z.any().openapi({ description: 'Information about the provisioning artifact.' }),
    ).exactOptional(),
    Info: ProvisioningArtifactInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the current request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProvisioningArtifactOutput')

const VerboseSchema = z.boolean().openapi('Verbose')

const DescribeProvisioningArtifactInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    ProvisioningArtifactName: ProvisioningArtifactNameSchema.and(
      z.any().openapi({ description: 'The provisioning artifact name.' }),
    ).exactOptional(),
    ProductName: ProductViewNameSchema.and(
      z.any().openapi({ description: 'The product name.' }),
    ).exactOptional(),
    Verbose: VerboseSchema.and(
      z.any().openapi({ description: 'Indicates whether a verbose level of detail is enabled.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeProvisioningArtifactInput', required: [] })
  .openapi('DescribeProvisioningArtifactInput')

const DefaultValueSchema = z.string().openapi('DefaultValue')

const ParameterTypeSchema = z.string().openapi('ParameterType')

const NoEchoSchema = z.boolean().openapi('NoEcho')

const DescriptionSchema = z.string().openapi('Description')

const StringSchema = z.string().openapi('String')

const AllowedValuesSchema = z.array(StringSchema).openapi('AllowedValues')

const ParameterConstraintsSchema = z
  .object({
    AllowedValues: AllowedValuesSchema.and(
      z
        .any()
        .openapi({
          description: 'The values that the administrator has allowed for the parameter.',
        }),
    ).exactOptional(),
    AllowedPattern: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A regular expression that represents the patterns that allow for <code>String</code> types. The pattern must match the entire parameter value provided.',
        }),
    ).exactOptional(),
    ConstraintDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that explains a constraint when the constraint is violated. For example, without a constraint description, a parameter that has an allowed pattern of <code>[A-Za-z0-9]+</code> displays the following error message when the user specifies an invalid value:</p> <p> <code>Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+</code> </p> <p>By adding a constraint description, such as must only contain letters (uppercase and lowercase) and numbers, you can display the following customized error message:</p> <p> <code>Malformed input-Parameter MyParameter must only contain uppercase and lowercase letters and numbers.</code> </p>',
        }),
    ).exactOptional(),
    MaxLength: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer value that determines the largest number of characters you want to allow for <code>String</code> types. ',
        }),
    ).exactOptional(),
    MinLength: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer value that determines the smallest number of characters you want to allow for <code>String</code> types.',
        }),
    ).exactOptional(),
    MaxValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A numeric value that determines the largest numeric value you want to allow for <code>Number</code> types.',
        }),
    ).exactOptional(),
    MinValue: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A numeric value that determines the smallest numeric value you want to allow for <code>Number</code> types. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The constraints that the administrator has put on the parameter.',
    required: [],
  })
  .openapi('ParameterConstraints')

const ProvisioningArtifactParameterSchema = z
  .object({
    ParameterKey: ParameterKeySchema.and(
      z.any().openapi({ description: 'The parameter key.' }),
    ).exactOptional(),
    DefaultValue: DefaultValueSchema.and(
      z.any().openapi({ description: 'The default value.' }),
    ).exactOptional(),
    ParameterType: ParameterTypeSchema.and(
      z.any().openapi({ description: 'The parameter type.' }),
    ).exactOptional(),
    IsNoEcho: NoEchoSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this value is true, the value for this parameter is obfuscated from view when the parameter is retrieved. This parameter is used to hide sensitive information.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the parameter.' }),
    ).exactOptional(),
    ParameterConstraints: ParameterConstraintsSchema.and(
      z
        .any()
        .openapi({ description: 'Constraints that the administrator has put on a parameter.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a parameter used to provision a product.',
    required: [],
  })
  .openapi('ProvisioningArtifactParameter')

const ProvisioningArtifactParametersSchema = z
  .array(ProvisioningArtifactParameterSchema)
  .openapi('ProvisioningArtifactParameters')

const ConstraintSummarySchema = z
  .object({
    Type: ConstraintTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p>STACKSET</p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Description: ConstraintDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the constraint.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a constraint.', required: [] })
  .openapi('ConstraintSummary')

const ConstraintSummariesSchema = z.array(ConstraintSummarySchema).openapi('ConstraintSummaries')

const InstructionTypeSchema = z.string().openapi('InstructionType')

const InstructionValueSchema = z.string().openapi('InstructionValue')

const UsageInstructionSchema = z
  .object({
    Type: InstructionTypeSchema.and(
      z.any().openapi({ description: 'The usage instruction type for the value.' }),
    ).exactOptional(),
    Value: InstructionValueSchema.and(
      z.any().openapi({ description: 'The usage instruction value for this type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Additional information provided by the administrator.', required: [] })
  .openapi('UsageInstruction')

const UsageInstructionsSchema = z.array(UsageInstructionSchema).openapi('UsageInstructions')

const TagOptionValuesSchema = z.array(TagOptionValueSchema).openapi('TagOptionValues')

const TagOptionSummarySchema = z
  .object({
    Key: TagOptionKeySchema.and(
      z.any().openapi({ description: 'The TagOption key.' }),
    ).exactOptional(),
    Values: TagOptionValuesSchema.and(
      z.any().openapi({ description: 'The TagOption value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a TagOption.', required: [] })
  .openapi('TagOptionSummary')

const TagOptionSummariesSchema = z.array(TagOptionSummarySchema).openapi('TagOptionSummaries')

const StackSetAccountsSchema = z.array(AccountIdSchema).openapi('StackSetAccounts')

const RegionSchema = z.string().openapi('Region')

const StackSetRegionsSchema = z.array(RegionSchema).openapi('StackSetRegions')

const ProvisioningArtifactPreferencesSchema = z
  .object({
    StackSetAccounts: StackSetAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more Amazon Web Services accounts where stack instances are deployed from the stack set. These accounts can be scoped in <code>ProvisioningPreferences$StackSetAccounts</code> and <code>UpdateProvisioningPreferences$StackSetAccounts</code>.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>',
        }),
    ).exactOptional(),
    StackSetRegions: StackSetRegionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more Amazon Web Services Regions where stack instances are deployed from the stack set. These Regions can be scoped in <code>ProvisioningPreferences$StackSetRegions</code> and <code>UpdateProvisioningPreferences$StackSetRegions</code>.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>CloudFormation User Guide</i>.</p>',
    required: [],
  })
  .openapi('ProvisioningArtifactPreferences')

const ProvisioningArtifactOutputKeySchema = z
  .string()
  .regex(/[a-zA-Z0-9]*/)
  .min(1)
  .max(255)
  .openapi('ProvisioningArtifactOutputKey')

const OutputDescriptionSchema = z.string().max(1024).openapi('OutputDescription')

const ProvisioningArtifactOutputSchema = z
  .object({
    Key: ProvisioningArtifactOutputKeySchema.and(
      z.any().openapi({ description: 'The provisioning artifact output key.' }),
    ).exactOptional(),
    Description: OutputDescriptionSchema.and(
      z.any().openapi({ description: 'Description of the provisioning artifact output key.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provisioning artifact output.', required: [] })
  .openapi('ProvisioningArtifactOutput')

const ProvisioningArtifactOutputsSchema = z
  .array(ProvisioningArtifactOutputSchema)
  .max(60)
  .openapi('ProvisioningArtifactOutputs')

const DescribeProvisioningParametersOutputSchema = z
  .object({
    ProvisioningArtifactParameters: ProvisioningArtifactParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the parameters used to provision the product.',
        }),
    ).exactOptional(),
    ConstraintSummaries: ConstraintSummariesSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the constraints used to provision the product.',
        }),
    ).exactOptional(),
    UsageInstructions: UsageInstructionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Any additional metadata specifically related to the provisioning of the product. For example, see the <code>Version</code> field of the CloudFormation template.',
        }),
    ).exactOptional(),
    TagOptions: TagOptionSummariesSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the TagOptions associated with the resource.' }),
    ).exactOptional(),
    ProvisioningArtifactPreferences: ProvisioningArtifactPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about preferences, such as Regions and accounts, for the provisioning artifact.',
        }),
    ).exactOptional(),
    ProvisioningArtifactOutputs: ProvisioningArtifactOutputsSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The output of the provisioning artifact.This property is deprecated and returns the Id and Description of the Provisioning Artifact. Use ProvisioningArtifactOutputKeys instead to get the Keys and Descriptions of the outputs.',
        }),
    ).exactOptional(),
    ProvisioningArtifactOutputKeys: ProvisioningArtifactOutputsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the keys and descriptions of the outputs. These outputs can be referenced from a provisioned product launched from this provisioning artifact.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProvisioningParametersOutput')

const DescribeProvisioningParametersInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The product identifier. You must provide the product name or ID, but not both.',
        }),
    ).exactOptional(),
    ProductName: ProductViewNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the product. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioning artifact. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProvisioningArtifactName: ProvisioningArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the provisioning artifact. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    PathId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    PathName: PortfolioDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the path. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeProvisioningParametersInput', required: [] })
  .openapi('DescribeProvisioningParametersInput')

const RecordStatusSchema = z
  .enum(['CREATED', 'IN_PROGRESS', 'IN_PROGRESS_IN_ERROR', 'SUCCEEDED', 'FAILED'])
  .openapi('RecordStatus')

const RecordTypeSchema = z.string().openapi('RecordType')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const ErrorDescriptionSchema = z.string().openapi('ErrorDescription')

const RecordErrorSchema = z
  .object({
    Code: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The numeric value of the error.' }),
    ).exactOptional(),
    Description: ErrorDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The error code and description resulting from an operation.',
    required: [],
  })
  .openapi('RecordError')

const RecordErrorsSchema = z.array(RecordErrorSchema).openapi('RecordErrors')

const RecordTagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(128)
  .openapi('RecordTagKey')

const RecordTagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(256)
  .openapi('RecordTagValue')

const RecordTagSchema = z
  .object({
    Key: RecordTagKeySchema.and(
      z.any().openapi({ description: 'The key for this tag.' }),
    ).exactOptional(),
    Value: RecordTagValueSchema.and(
      z.any().openapi({ description: 'The value for this tag.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a tag, which is a key-value pair.', required: [] })
  .openapi('RecordTag')

const RecordTagsSchema = z.array(RecordTagSchema).max(50).openapi('RecordTags')

const RecordDetailSchema = z
  .object({
    RecordId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the record.' }),
    ).exactOptional(),
    ProvisionedProductName: ProvisionedProductNameSchema.and(
      z.any().openapi({ description: 'The user-friendly name of the provisioned product.' }),
    ).exactOptional(),
    Status: RecordStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the provisioned product.</p> <ul> <li> <p> <code>CREATED</code> - The request was created but the operation has not started.</p> </li> <li> <p> <code>IN_PROGRESS</code> - The requested operation is in progress.</p> </li> <li> <p> <code>IN_PROGRESS_IN_ERROR</code> - The provisioned product is under change but the requested operation failed and some remediation is occurring. For example, a rollback.</p> </li> <li> <p> <code>SUCCEEDED</code> - The requested operation has successfully completed.</p> </li> <li> <p> <code>FAILED</code> - The requested operation has unsuccessfully completed. Investigate using the error messages returned.</p> </li> </ul>',
        }),
    ).exactOptional(),
    CreatedTime: CreatedTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    UpdatedTime: UpdatedTimeSchema.and(
      z.any().openapi({ description: 'The time when the record was last updated.' }),
    ).exactOptional(),
    ProvisionedProductType: ProvisionedProductTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.',
        }),
    ).exactOptional(),
    RecordType: RecordTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The record type.</p> <ul> <li> <p> <code>PROVISION_PRODUCT</code> </p> </li> <li> <p> <code>UPDATE_PROVISIONED_PRODUCT</code> </p> </li> <li> <p> <code>TERMINATE_PROVISIONED_PRODUCT</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedProductId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioned product.' }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
    PathId: IdSchema.and(z.any().openapi({ description: 'The path identifier.' })).exactOptional(),
    RecordErrors: RecordErrorsSchema.and(
      z.any().openapi({ description: 'The errors that occurred.' }),
    ).exactOptional(),
    RecordTags: RecordTagsSchema.and(
      z.any().openapi({ description: 'One or more tags.' }),
    ).exactOptional(),
    LaunchRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the launch role associated with the provisioned product.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a request operation.', required: [] })
  .openapi('RecordDetail')

const OutputKeySchema = z.string().openapi('OutputKey')

const OutputValueSchema = z.string().openapi('OutputValue')

const RecordOutputSchema = z
  .object({
    OutputKey: OutputKeySchema.and(
      z.any().openapi({ description: 'The output key.' }),
    ).exactOptional(),
    OutputValue: OutputValueSchema.and(
      z.any().openapi({ description: 'The output value.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the output.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.',
    required: [],
  })
  .openapi('RecordOutput')

const RecordOutputsSchema = z.array(RecordOutputSchema).openapi('RecordOutputs')

const DescribeRecordOutputSchema = z
  .object({
    RecordDetail: RecordDetailSchema.and(
      z.any().openapi({ description: 'Information about the product.' }),
    ).exactOptional(),
    RecordOutputs: RecordOutputsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.',
        }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRecordOutput')

const DescribeRecordInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The record identifier of the provisioned product. This identifier is returned by the request operation.',
        }),
    ),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'DescribeRecordInput' })
  .openapi('DescribeRecordInput')

const DescribeServiceActionOutputSchema = z
  .object({
    ServiceActionDetail: ServiceActionDetailSchema.and(
      z.any().openapi({ description: 'Detailed information about the self-service action.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeServiceActionOutput')

const DescribeServiceActionInputSchema = z
  .object({
    Id: IdSchema.and(z.any().openapi({ description: 'The self-service action identifier.' })),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'DescribeServiceActionInput' })
  .openapi('DescribeServiceActionInput')

const ExecutionParameterKeySchema = z.string().min(1).max(50).openapi('ExecutionParameterKey')

const ExecutionParameterTypeSchema = z.string().min(1).max(1024).openapi('ExecutionParameterType')

const ExecutionParameterValueSchema = z.string().min(0).max(512).openapi('ExecutionParameterValue')

const ExecutionParameterValueListSchema = z
  .array(ExecutionParameterValueSchema)
  .min(0)
  .max(25)
  .openapi('ExecutionParameterValueList')

const ExecutionParameterSchema = z
  .object({
    Name: ExecutionParameterKeySchema.and(
      z.any().openapi({ description: 'The name of the execution parameter.' }),
    ).exactOptional(),
    Type: ExecutionParameterTypeSchema.and(
      z.any().openapi({ description: 'The execution parameter type.' }),
    ).exactOptional(),
    DefaultValues: ExecutionParameterValueListSchema.and(
      z.any().openapi({ description: 'The default values for the execution parameter.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.',
    required: [],
  })
  .openapi('ExecutionParameter')

const ExecutionParametersSchema = z.array(ExecutionParameterSchema).openapi('ExecutionParameters')

const DescribeServiceActionExecutionParametersOutputSchema = z
  .object({
    ServiceActionParameters: ExecutionParametersSchema.and(
      z.any().openapi({ description: 'The parameters of the self-service action.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeServiceActionExecutionParametersOutput')

const DescribeServiceActionExecutionParametersInputSchema = z
  .object({
    ProvisionedProductId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioned product.' }),
    ),
    ServiceActionId: IdSchema.and(
      z.any().openapi({ description: 'The self-service action identifier.' }),
    ),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProvisionedProductId', 'ServiceActionId'],
    title: 'DescribeServiceActionExecutionParametersInput',
  })
  .openapi('DescribeServiceActionExecutionParametersInput')

const DescribeTagOptionOutputSchema = z
  .object({
    TagOptionDetail: TagOptionDetailSchema.and(
      z.any().openapi({ description: 'Information about the TagOption.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTagOptionOutput')

const DescribeTagOptionInputSchema = z
  .object({
    Id: TagOptionIdSchema.and(z.any().openapi({ description: 'The TagOption identifier.' })),
  })
  .openapi({ required: ['Id'], title: 'DescribeTagOptionInput' })
  .openapi('DescribeTagOptionInput')

const DisableAWSOrganizationsAccessOutputSchema = z
  .object({})
  .openapi('DisableAWSOrganizationsAccessOutput')

const DisableAWSOrganizationsAccessInputSchema = z
  .object({})
  .openapi({ title: 'DisableAWSOrganizationsAccessInput' })
  .openapi('DisableAWSOrganizationsAccessInput')

const DisassociateBudgetFromResourceOutputSchema = z
  .object({})
  .openapi('DisassociateBudgetFromResourceOutput')

const DisassociateBudgetFromResourceInputSchema = z
  .object({
    BudgetName: BudgetNameSchema.and(
      z.any().openapi({ description: 'The name of the budget you want to disassociate.' }),
    ),
    ResourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource identifier you want to disassociate from. Either a portfolio-id or a product-id.',
        }),
    ),
  })
  .openapi({ required: ['BudgetName', 'ResourceId'], title: 'DisassociateBudgetFromResourceInput' })
  .openapi('DisassociateBudgetFromResourceInput')

const DisassociatePrincipalFromPortfolioOutputSchema = z
  .object({})
  .openapi('DisassociatePrincipalFromPortfolioOutput')

const DisassociatePrincipalFromPortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    PrincipalARN: PrincipalARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the principal (user, role, or group). This field allows an ARN with no <code>accountID</code> if <code>PrincipalType</code> is <code>IAM_PATTERN</code>.',
        }),
    ),
    PrincipalType: PrincipalTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The supported value is <code>IAM</code> if you use a fully defined ARN, or <code>IAM_PATTERN</code> if you use no <code>accountID</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PortfolioId', 'PrincipalARN'],
    title: 'DisassociatePrincipalFromPortfolioInput',
  })
  .openapi('DisassociatePrincipalFromPortfolioInput')

const DisassociateProductFromPortfolioOutputSchema = z
  .object({})
  .openapi('DisassociateProductFromPortfolioOutput')

const DisassociateProductFromPortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
  })
  .openapi({
    required: ['ProductId', 'PortfolioId'],
    title: 'DisassociateProductFromPortfolioInput',
  })
  .openapi('DisassociateProductFromPortfolioInput')

const DisassociateServiceActionFromProvisioningArtifactOutputSchema = z
  .object({})
  .openapi('DisassociateServiceActionFromProvisioningArtifactOutput')

const DisassociateServiceActionFromProvisioningArtifactInputSchema = z
  .object({
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.',
        }),
    ),
    ProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.',
        }),
    ),
    ServiceActionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.',
        }),
    ),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProductId', 'ProvisioningArtifactId', 'ServiceActionId'],
    title: 'DisassociateServiceActionFromProvisioningArtifactInput',
  })
  .openapi('DisassociateServiceActionFromProvisioningArtifactInput')

const DisassociateTagOptionFromResourceOutputSchema = z
  .object({})
  .openapi('DisassociateTagOptionFromResourceOutput')

const DisassociateTagOptionFromResourceInputSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(z.any().openapi({ description: 'The resource identifier.' })),
    TagOptionId: TagOptionIdSchema.and(
      z.any().openapi({ description: 'The TagOption identifier.' }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'TagOptionId'],
    title: 'DisassociateTagOptionFromResourceInput',
  })
  .openapi('DisassociateTagOptionFromResourceInput')

const EnableAWSOrganizationsAccessOutputSchema = z
  .object({})
  .openapi('EnableAWSOrganizationsAccessOutput')

const EnableAWSOrganizationsAccessInputSchema = z
  .object({})
  .openapi({ title: 'EnableAWSOrganizationsAccessInput' })
  .openapi('EnableAWSOrganizationsAccessInput')

const ExecuteProvisionedProductPlanOutputSchema = z
  .object({
    RecordDetail: RecordDetailSchema.and(
      z.any().openapi({ description: 'Information about the result of provisioning the product.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExecuteProvisionedProductPlanOutput')

const ExecuteProvisionedProductPlanInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PlanId: IdSchema.and(z.any().openapi({ description: 'The plan identifier.' })),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ),
  })
  .openapi({
    required: ['PlanId', 'IdempotencyToken'],
    title: 'ExecuteProvisionedProductPlanInput',
  })
  .openapi('ExecuteProvisionedProductPlanInput')

const ExecuteProvisionedProductServiceActionOutputSchema = z
  .object({
    RecordDetail: RecordDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object containing detailed information about the result of provisioning the product.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExecuteProvisionedProductServiceActionOutput')

const ExecutionParameterMapSchema = z
  .record(z.string(), ExecutionParameterValueListSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('ExecutionParameterMap')

const ExecuteProvisionedProductServiceActionInputSchema = z
  .object({
    ProvisionedProductId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioned product.' }),
    ),
    ServiceActionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.',
        }),
    ),
    ExecuteToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'An idempotency token that uniquely identifies the execute request.',
        }),
    ),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Parameters: ExecutionParameterMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of all self-service action parameters and their values. If a provided parameter is of a special type, such as <code>TARGET</code>, the provided value will override the default value generated by Service Catalog. If the parameters field is not provided, no additional parameters are passed and default values will be used for any special parameters such as <code>TARGET</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProvisionedProductId', 'ServiceActionId', 'ExecuteToken'],
    title: 'ExecuteProvisionedProductServiceActionInput',
  })
  .openapi('ExecuteProvisionedProductServiceActionInput')

const AccessStatusSchema = z.enum(['ENABLED', 'UNDER_CHANGE', 'DISABLED']).openapi('AccessStatus')

const GetAWSOrganizationsAccessStatusOutputSchema = z
  .object({
    AccessStatus: AccessStatusSchema.and(
      z.any().openapi({ description: 'The status of the portfolio share feature.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAWSOrganizationsAccessStatusOutput')

const GetAWSOrganizationsAccessStatusInputSchema = z
  .object({})
  .openapi({ title: 'GetAWSOrganizationsAccessStatusInput' })
  .openapi('GetAWSOrganizationsAccessStatusInput')

const GetProvisionedProductOutputsOutputSchema = z
  .object({
    Outputs: RecordOutputsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL. ',
        }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetProvisionedProductOutputsOutput')

const OutputKeysSchema = z.array(OutputKeySchema).max(60).openapi('OutputKeys')

const GetProvisionedProductOutputsInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the provisioned product that you want the outputs from.',
        }),
    ).exactOptional(),
    ProvisionedProductName: ProvisionedProductNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the provisioned product that you want the outputs from.',
        }),
    ).exactOptional(),
    OutputKeys: OutputKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of keys that the API should return with their values. If none are provided, the API will return all outputs of the provisioned product.',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetProvisionedProductOutputsInput', required: [] })
  .openapi('GetProvisionedProductOutputsInput')

const ImportAsProvisionedProductOutputSchema = z
  .object({ RecordDetail: RecordDetailSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ImportAsProvisionedProductOutput')

const PhysicalIdSchema = z.string().openapi('PhysicalId')

const ImportAsProvisionedProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ),
    ProvisionedProductName: ProvisionedProductNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-friendly name of the provisioned product. The value must be unique for the Amazon Web Services account. The name cannot be updated after the product is provisioned. ',
        }),
    ),
    PhysicalId: PhysicalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the resource to be imported. It only currently supports CloudFormation stack IDs.',
        }),
    ),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ),
  })
  .openapi({
    required: [
      'ProductId',
      'ProvisioningArtifactId',
      'ProvisionedProductName',
      'PhysicalId',
      'IdempotencyToken',
    ],
    title: 'ImportAsProvisionedProductInput',
  })
  .openapi('ImportAsProvisionedProductInput')

const PortfolioDetailsSchema = z.array(PortfolioDetailSchema).openapi('PortfolioDetails')

const ListAcceptedPortfolioSharesOutputSchema = z
  .object({
    PortfolioDetails: PortfolioDetailsSchema.and(
      z.any().openapi({ description: 'Information about the portfolios.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAcceptedPortfolioSharesOutput')

const ListAcceptedPortfolioSharesInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PortfolioShareType: PortfolioShareTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of shared portfolios to list. The default is to list imported portfolios.</p> <ul> <li> <p> <code>AWS_ORGANIZATIONS</code> - List portfolios accepted and shared via organizational sharing by the management account or delegated administrator of your organization.</p> </li> <li> <p> <code>AWS_SERVICECATALOG</code> - Deprecated type.</p> </li> <li> <p> <code>IMPORTED</code> - List imported portfolios that have been accepted and shared through account-to-account sharing.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAcceptedPortfolioSharesInput', required: [] })
  .openapi('ListAcceptedPortfolioSharesInput')

const ListBudgetsForResourceOutputSchema = z
  .object({
    Budgets: BudgetsSchema.and(
      z.any().openapi({ description: 'Information about the associated budgets.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBudgetsForResourceOutput')

const ListBudgetsForResourceInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ResourceId: IdSchema.and(z.any().openapi({ description: 'The resource identifier.' })),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceId'], title: 'ListBudgetsForResourceInput' })
  .openapi('ListBudgetsForResourceInput')

const ConstraintDetailsSchema = z.array(ConstraintDetailSchema).openapi('ConstraintDetails')

const ListConstraintsForPortfolioOutputSchema = z
  .object({
    ConstraintDetails: ConstraintDetailsSchema.and(
      z.any().openapi({ description: 'Information about the constraints.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConstraintsForPortfolioOutput')

const ListConstraintsForPortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    ProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId'], title: 'ListConstraintsForPortfolioInput' })
  .openapi('ListConstraintsForPortfolioInput')

const LaunchPathSummarySchema = z
  .object({
    Id: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the product path.' }),
    ).exactOptional(),
    ConstraintSummaries: ConstraintSummariesSchema.and(
      z.any().openapi({ description: 'The constraints on the portfolio-product relationship.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags associated with this product path.' }),
    ).exactOptional(),
    Name: PortfolioNameSchema.and(
      z.any().openapi({ description: 'The name of the portfolio that contains the product. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a product path for a user.', required: [] })
  .openapi('LaunchPathSummary')

const LaunchPathSummariesSchema = z.array(LaunchPathSummarySchema).openapi('LaunchPathSummaries')

const ListLaunchPathsOutputSchema = z
  .object({
    LaunchPathSummaries: LaunchPathSummariesSchema.and(
      z.any().openapi({ description: 'Information about the launch path.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLaunchPathsOutput')

const ListLaunchPathsInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProductId'], title: 'ListLaunchPathsInput' })
  .openapi('ListLaunchPathsInput')

const OrganizationNodesSchema = z.array(OrganizationNodeSchema).openapi('OrganizationNodes')

const ListOrganizationPortfolioAccessOutputSchema = z
  .object({
    OrganizationNodes: OrganizationNodesSchema.and(
      z.any().openapi({ description: 'Displays information about the organization nodes.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOrganizationPortfolioAccessOutput')

const ListOrganizationPortfolioAccessInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The portfolio identifier. For example, <code>port-2abcdext3y5fk</code>.',
        }),
    ),
    OrganizationNodeType: OrganizationNodeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The organization node type that will be returned in the output.</p> <ul> <li> <p> <code>ORGANIZATION</code> - Organization that has access to the portfolio. </p> </li> <li> <p> <code>ORGANIZATIONAL_UNIT</code> - Organizational unit that has access to the portfolio within your organization.</p> </li> <li> <p> <code>ACCOUNT</code> - Account that has access to the portfolio within your organization.</p> </li> </ul>',
        }),
    ),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PortfolioId', 'OrganizationNodeType'],
    title: 'ListOrganizationPortfolioAccessInput',
  })
  .openapi('ListOrganizationPortfolioAccessInput')

const AccountIdsSchema = z.array(AccountIdSchema).openapi('AccountIds')

const ListPortfolioAccessOutputSchema = z
  .object({
    AccountIds: AccountIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Amazon Web Services accounts with access to the portfolio.',
        }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPortfolioAccessOutput')

const ListPortfolioAccessInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    OrganizationParentId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of an organization node the portfolio is shared with. All children of this node with an inherited portfolio share will be returned.',
        }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId'], title: 'ListPortfolioAccessInput' })
  .openapi('ListPortfolioAccessInput')

const ListPortfoliosOutputSchema = z
  .object({
    PortfolioDetails: PortfolioDetailsSchema.and(
      z.any().openapi({ description: 'Information about the portfolios.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPortfoliosOutput')

const ListPortfoliosInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPortfoliosInput', required: [] })
  .openapi('ListPortfoliosInput')

const ListPortfoliosForProductOutputSchema = z
  .object({
    PortfolioDetails: PortfolioDetailsSchema.and(
      z.any().openapi({ description: 'Information about the portfolios.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPortfoliosForProductOutput')

const ListPortfoliosForProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProductId'], title: 'ListPortfoliosForProductInput' })
  .openapi('ListPortfoliosForProductInput')

const PrincipalSchema = z
  .object({
    PrincipalARN: PrincipalARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the principal (user, role, or group). This field allows for an ARN with no <code>accountID</code> if the <code>PrincipalType</code> is an <code>IAM_PATTERN</code>. ',
        }),
    ).exactOptional(),
    PrincipalType: PrincipalTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The principal type. The supported value is <code>IAM</code> if you use a fully defined ARN, or <code>IAM_PATTERN</code> if you use an ARN with no <code>accountID</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a principal.', required: [] })
  .openapi('Principal')

const PrincipalsSchema = z.array(PrincipalSchema).openapi('Principals')

const ListPrincipalsForPortfolioOutputSchema = z
  .object({
    Principals: PrincipalsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the portfolio.',
        }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPrincipalsForPortfolioOutput')

const ListPrincipalsForPortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId'], title: 'ListPrincipalsForPortfolioInput' })
  .openapi('ListPrincipalsForPortfolioInput')

const ProvisionedProductPlanSummarySchema = z
  .object({
    PlanName: ProvisionedProductPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the plan.' }),
    ).exactOptional(),
    PlanId: IdSchema.and(z.any().openapi({ description: 'The plan identifier.' })).exactOptional(),
    ProvisionProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    ProvisionProductName: ProvisionedProductNameSchema.and(
      z.any().openapi({ description: 'The user-friendly name of the provisioned product.' }),
    ).exactOptional(),
    PlanType: ProvisionedProductPlanTypeSchema.and(
      z.any().openapi({ description: 'The plan type.' }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a plan.', required: [] })
  .openapi('ProvisionedProductPlanSummary')

const ProvisionedProductPlansSchema = z
  .array(ProvisionedProductPlanSummarySchema)
  .openapi('ProvisionedProductPlans')

const ListProvisionedProductPlansOutputSchema = z
  .object({
    ProvisionedProductPlans: ProvisionedProductPlansSchema.and(
      z.any().openapi({ description: 'Information about the plans.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProvisionedProductPlansOutput')

const AccessLevelFilterKeySchema = z
  .enum(['Account', 'Role', 'User'])
  .openapi('AccessLevelFilterKey')

const AccessLevelFilterValueSchema = z.string().openapi('AccessLevelFilterValue')

const AccessLevelFilterSchema = z
  .object({
    Key: AccessLevelFilterKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The access level.</p> <ul> <li> <p> <code>Account</code> - Filter results based on the account.</p> </li> <li> <p> <code>Role</code> - Filter results based on the federated role of the specified user.</p> </li> <li> <p> <code>User</code> - Filter results based on the specified user.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Value: AccessLevelFilterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user to which the access level applies. The only supported value is <code>Self</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The access level to use to filter results.', required: [] })
  .openapi('AccessLevelFilter')

const ListProvisionedProductPlansInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    AccessLevelFilter: AccessLevelFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access level to use to obtain results. The default is <code>User</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListProvisionedProductPlansInput', required: [] })
  .openapi('ListProvisionedProductPlansInput')

const ProvisioningArtifactDetailsSchema = z
  .array(ProvisioningArtifactDetailSchema)
  .openapi('ProvisioningArtifactDetails')

const ListProvisioningArtifactsOutputSchema = z
  .object({
    ProvisioningArtifactDetails: ProvisioningArtifactDetailsSchema.and(
      z.any().openapi({ description: 'Information about the provisioning artifacts.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProvisioningArtifactsOutput')

const ListProvisioningArtifactsInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
  })
  .openapi({ required: ['ProductId'], title: 'ListProvisioningArtifactsInput' })
  .openapi('ListProvisioningArtifactsInput')

const ProvisioningArtifactViewSchema = z
  .object({
    ProductViewSummary: ProductViewSummarySchema.and(
      z.any().openapi({ description: 'Summary information about a product view.' }),
    ).exactOptional(),
    ProvisioningArtifact: ProvisioningArtifactSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a provisioning artifact. A provisioning artifact is also known as a product version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains summary information about a product view and a provisioning artifact.',
    required: [],
  })
  .openapi('ProvisioningArtifactView')

const ProvisioningArtifactViewsSchema = z
  .array(ProvisioningArtifactViewSchema)
  .openapi('ProvisioningArtifactViews')

const ListProvisioningArtifactsForServiceActionOutputSchema = z
  .object({
    ProvisioningArtifactViews: ProvisioningArtifactViewsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects with information about product views and provisioning artifacts.',
        }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProvisioningArtifactsForServiceActionOutput')

const ListProvisioningArtifactsForServiceActionInputSchema = z
  .object({
    ServiceActionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.',
        }),
    ),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceActionId'],
    title: 'ListProvisioningArtifactsForServiceActionInput',
  })
  .openapi('ListProvisioningArtifactsForServiceActionInput')

const RecordDetailsSchema = z.array(RecordDetailSchema).openapi('RecordDetails')

const ListRecordHistoryOutputSchema = z
  .object({
    RecordDetails: RecordDetailsSchema.and(
      z.any().openapi({ description: 'The records, in reverse chronological order.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRecordHistoryOutput')

const SearchFilterKeySchema = z.string().openapi('SearchFilterKey')

const SearchFilterValueSchema = z.string().openapi('SearchFilterValue')

const ListRecordHistorySearchFilterSchema = z
  .object({
    Key: SearchFilterKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filter key.</p> <ul> <li> <p> <code>product</code> - Filter results based on the specified product identifier.</p> </li> <li> <p> <code>provisionedproduct</code> - Filter results based on the provisioned product identifier.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Value: SearchFilterValueSchema.and(
      z.any().openapi({ description: 'The filter value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The search filter to use when listing history records.', required: [] })
  .openapi('ListRecordHistorySearchFilter')

const ListRecordHistoryInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    AccessLevelFilter: AccessLevelFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access level to use to obtain results. The default is <code>User</code>.',
        }),
    ).exactOptional(),
    SearchFilter: ListRecordHistorySearchFilterSchema.and(
      z.any().openapi({ description: 'The search filter to scope the results.' }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRecordHistoryInput', required: [] })
  .openapi('ListRecordHistoryInput')

const ResourceDetailIdSchema = z.string().openapi('ResourceDetailId')

const ResourceDetailARNSchema = z.string().openapi('ResourceDetailARN')

const ResourceDetailNameSchema = z.string().openapi('ResourceDetailName')

const ResourceDetailDescriptionSchema = z.string().openapi('ResourceDetailDescription')

const ResourceDetailCreatedTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('ResourceDetailCreatedTime')

const ResourceDetailSchema = z
  .object({
    Id: ResourceDetailIdSchema.and(
      z.any().openapi({ description: 'The identifier of the resource.' }),
    ).exactOptional(),
    ARN: ResourceDetailARNSchema.and(
      z.any().openapi({ description: 'The ARN of the resource.' }),
    ).exactOptional(),
    Name: ResourceDetailNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Description: ResourceDetailDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the resource.' }),
    ).exactOptional(),
    CreatedTime: ResourceDetailCreatedTimeSchema.and(
      z.any().openapi({ description: 'The creation time of the resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a resource.', required: [] })
  .openapi('ResourceDetail')

const ResourceDetailsSchema = z.array(ResourceDetailSchema).openapi('ResourceDetails')

const ListResourcesForTagOptionOutputSchema = z
  .object({
    ResourceDetails: ResourceDetailsSchema.and(
      z.any().openapi({ description: 'Information about the resources.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourcesForTagOptionOutput')

const ResourceTypeSchema = z.string().openapi('ResourceType')

const ListResourcesForTagOptionInputSchema = z
  .object({
    TagOptionId: TagOptionIdSchema.and(
      z.any().openapi({ description: 'The TagOption identifier.' }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource type.</p> <ul> <li> <p> <code>Portfolio</code> </p> </li> <li> <p> <code>Product</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TagOptionId'], title: 'ListResourcesForTagOptionInput' })
  .openapi('ListResourcesForTagOptionInput')

const ServiceActionSummariesSchema = z
  .array(ServiceActionSummarySchema)
  .openapi('ServiceActionSummaries')

const ListServiceActionsOutputSchema = z
  .object({
    ServiceActionSummaries: ServiceActionSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object containing information about the service actions associated with the provisioning artifact.',
        }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListServiceActionsOutput')

const ListServiceActionsInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServiceActionsInput', required: [] })
  .openapi('ListServiceActionsInput')

const ListServiceActionsForProvisioningArtifactOutputSchema = z
  .object({
    ServiceActionSummaries: ServiceActionSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object containing information about the self-service actions associated with the provisioning artifact.',
        }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListServiceActionsForProvisioningArtifactOutput')

const ListServiceActionsForProvisioningArtifactInputSchema = z
  .object({
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.',
        }),
    ),
    ProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.',
        }),
    ),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProductId', 'ProvisioningArtifactId'],
    title: 'ListServiceActionsForProvisioningArtifactInput',
  })
  .openapi('ListServiceActionsForProvisioningArtifactInput')

const StackInstanceStatusSchema = z
  .enum(['CURRENT', 'OUTDATED', 'INOPERABLE'])
  .openapi('StackInstanceStatus')

const StackInstanceSchema = z
  .object({
    Account: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon Web Services account that the stack instance is associated with.',
        }),
    ).exactOptional(),
    Region: RegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon Web Services Region that the stack instance is associated with.',
        }),
    ).exactOptional(),
    StackInstanceStatus: StackInstanceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the stack instance, in terms of its synchronization with its associated stack set. </p> <ul> <li> <p> <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to true, to delete the stack instance, and then delete the stack manually. </p> </li> <li> <p> <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because either the associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation, or the stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or was stopped before the stack was created or updated.</p> </li> <li> <p> <code>CURRENT</code>: The stack is currently up to date with the stack set.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. ",
    required: [],
  })
  .openapi('StackInstance')

const StackInstancesSchema = z.array(StackInstanceSchema).openapi('StackInstances')

const ListStackInstancesForProvisionedProductOutputSchema = z
  .object({
    StackInstances: StackInstancesSchema.and(
      z.any().openapi({ description: 'List of stack instances.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStackInstancesForProvisionedProductOutput')

const ListStackInstancesForProvisionedProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedProductId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioned product.' }),
    ),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProvisionedProductId'],
    title: 'ListStackInstancesForProvisionedProductInput',
  })
  .openapi('ListStackInstancesForProvisionedProductInput')

const ListTagOptionsOutputSchema = z
  .object({
    TagOptionDetails: TagOptionDetailsSchema.and(
      z.any().openapi({ description: 'Information about the TagOptions.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagOptionsOutput')

const ListTagOptionsFiltersSchema = z
  .object({
    Key: TagOptionKeySchema.and(
      z.any().openapi({ description: 'The TagOption key.' }),
    ).exactOptional(),
    Value: TagOptionValueSchema.and(
      z.any().openapi({ description: 'The TagOption value.' }),
    ).exactOptional(),
    Active: TagOptionActiveSchema.and(
      z.any().openapi({ description: 'The active state.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Filters to use when listing TagOptions.', required: [] })
  .openapi('ListTagOptionsFilters')

const ListTagOptionsInputSchema = z
  .object({
    Filters: ListTagOptionsFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The search filters. If no search filters are specified, the output includes all TagOptions.',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTagOptionsInput', required: [] })
  .openapi('ListTagOptionsInput')

const NotifyProvisionProductEngineWorkflowResultOutputSchema = z
  .object({})
  .openapi('NotifyProvisionProductEngineWorkflowResultOutput')

const EngineWorkflowTokenSchema = z
  .string()
  .regex(/[0-9A-Za-z+\/=]+/)
  .min(1)
  .max(20000)
  .openapi('EngineWorkflowToken')

const EngineWorkflowStatusSchema = z.enum(['SUCCEEDED', 'FAILED']).openapi('EngineWorkflowStatus')

const EngineWorkflowFailureReasonSchema = z
  .string()
  .regex(/[\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]*/)
  .min(1)
  .max(2048)
  .openapi('EngineWorkflowFailureReason')

const UniqueTagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('UniqueTagKey')

const UniqueTagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(256)
  .openapi('UniqueTagValue')

const UniqueTagResourceIdentifierSchema = z
  .object({
    Key: UniqueTagKeySchema.and(
      z.any().openapi({ description: " A unique key that's attached to a resource. " }),
    ).exactOptional(),
    Value: UniqueTagValueSchema.and(
      z.any().openapi({ description: " A unique value that's attached to a resource. " }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The unique key-value pair for a tag that identifies provisioned product resources. ',
    required: [],
  })
  .openapi('UniqueTagResourceIdentifier')

const EngineWorkflowResourceIdentifierSchema = z
  .object({
    UniqueTag: UniqueTagResourceIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique key-value pair for a tag that identifies provisioned product resources. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The ID for the provisioned product resources that are part of a resource group. ',
    required: [],
  })
  .openapi('EngineWorkflowResourceIdentifier')

const NotifyProvisionProductEngineWorkflowResultInputSchema = z
  .object({
    WorkflowToken: EngineWorkflowTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The encrypted contents of the provisioning engine execution payload that Service Catalog sends after the Terraform product provisioning workflow starts. ',
        }),
    ),
    RecordId: IdSchema.and(z.any().openapi({ description: ' The identifier of the record. ' })),
    Status: EngineWorkflowStatusSchema.and(
      z.any().openapi({ description: ' The status of the provisioning engine execution. ' }),
    ),
    FailureReason: EngineWorkflowFailureReasonSchema.and(
      z
        .any()
        .openapi({ description: ' The reason why the provisioning engine execution failed. ' }),
    ).exactOptional(),
    ResourceIdentifier: EngineWorkflowResourceIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID for the provisioned product resources that are part of a resource group. ',
        }),
    ).exactOptional(),
    Outputs: RecordOutputsSchema.and(
      z.any().openapi({ description: ' The output of the provisioning engine execution. ' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The idempotency token that identifies the provisioning engine execution. ',
        }),
    ),
  })
  .openapi({
    required: ['WorkflowToken', 'RecordId', 'Status', 'IdempotencyToken'],
    title: 'NotifyProvisionProductEngineWorkflowResultInput',
  })
  .openapi('NotifyProvisionProductEngineWorkflowResultInput')

const NotifyTerminateProvisionedProductEngineWorkflowResultOutputSchema = z
  .object({})
  .openapi('NotifyTerminateProvisionedProductEngineWorkflowResultOutput')

const NotifyTerminateProvisionedProductEngineWorkflowResultInputSchema = z
  .object({
    WorkflowToken: EngineWorkflowTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The encrypted contents of the terminate engine execution payload that Service Catalog sends after the Terraform product terminate workflow starts. ',
        }),
    ),
    RecordId: IdSchema.and(z.any().openapi({ description: ' The identifier of the record. ' })),
    Status: EngineWorkflowStatusSchema.and(
      z.any().openapi({ description: ' The status of the terminate engine execution. ' }),
    ),
    FailureReason: EngineWorkflowFailureReasonSchema.and(
      z.any().openapi({ description: ' The reason why the terminate engine execution failed. ' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The idempotency token that identifies the terminate engine execution. ',
        }),
    ),
  })
  .openapi({
    required: ['WorkflowToken', 'RecordId', 'Status', 'IdempotencyToken'],
    title: 'NotifyTerminateProvisionedProductEngineWorkflowResultInput',
  })
  .openapi('NotifyTerminateProvisionedProductEngineWorkflowResultInput')

const NotifyUpdateProvisionedProductEngineWorkflowResultOutputSchema = z
  .object({})
  .openapi('NotifyUpdateProvisionedProductEngineWorkflowResultOutput')

const NotifyUpdateProvisionedProductEngineWorkflowResultInputSchema = z
  .object({
    WorkflowToken: EngineWorkflowTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The encrypted contents of the update engine execution payload that Service Catalog sends after the Terraform product update workflow starts. ',
        }),
    ),
    RecordId: IdSchema.and(z.any().openapi({ description: ' The identifier of the record. ' })),
    Status: EngineWorkflowStatusSchema.and(
      z.any().openapi({ description: ' The status of the update engine execution. ' }),
    ),
    FailureReason: EngineWorkflowFailureReasonSchema.and(
      z.any().openapi({ description: ' The reason why the update engine execution failed. ' }),
    ).exactOptional(),
    Outputs: RecordOutputsSchema.and(
      z.any().openapi({ description: ' The output of the update engine execution. ' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The idempotency token that identifies the update engine execution. ',
        }),
    ),
  })
  .openapi({
    required: ['WorkflowToken', 'RecordId', 'Status', 'IdempotencyToken'],
    title: 'NotifyUpdateProvisionedProductEngineWorkflowResultInput',
  })
  .openapi('NotifyUpdateProvisionedProductEngineWorkflowResultInput')

const ProvisionProductOutputSchema = z
  .object({
    RecordDetail: RecordDetailSchema.and(
      z.any().openapi({ description: 'Information about the result of provisioning the product.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProvisionProductOutput')

const ProvisioningParameterSchema = z
  .object({
    Key: ParameterKeySchema.and(
      z.any().openapi({ description: 'The parameter key.' }),
    ).exactOptional(),
    Value: ParameterValueSchema.and(
      z.any().openapi({ description: 'The parameter value.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a parameter used to provision a product.',
    required: [],
  })
  .openapi('ProvisioningParameter')

const ProvisioningParametersSchema = z
  .array(ProvisioningParameterSchema)
  .openapi('ProvisioningParameters')

const StackSetFailureToleranceCountSchema = z.int().min(0).openapi('StackSetFailureToleranceCount')

const StackSetFailureTolerancePercentageSchema = z
  .int()
  .min(0)
  .max(100)
  .openapi('StackSetFailureTolerancePercentage')

const StackSetMaxConcurrencyCountSchema = z.int().min(1).openapi('StackSetMaxConcurrencyCount')

const StackSetMaxConcurrencyPercentageSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('StackSetMaxConcurrencyPercentage')

const ProvisioningPreferencesSchema = z
  .object({
    StackSetAccounts: StackSetAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more Amazon Web Services accounts where the provisioned product will be available.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The specified accounts should be within the list of accounts from the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all acounts from the <code>STACKSET</code> constraint.</p>',
        }),
    ).exactOptional(),
    StackSetRegions: StackSetRegionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more Amazon Web Services Regions where the provisioned product will be available.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The specified Regions should be within the list of Regions from the <code>STACKSET</code> constraint. To get the list of Regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all Regions from the <code>STACKSET</code> constraint.</p>',
        }),
    ).exactOptional(),
    StackSetFailureToleranceCount: StackSetFailureToleranceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of accounts, per Region, for which this operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p> <p>The default value is <code>0</code> if no value is specified.</p>",
        }),
    ).exactOptional(),
    StackSetFailureTolerancePercentage: StackSetFailureTolerancePercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The percentage of accounts, per Region, for which this stack operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p> <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>",
        }),
    ).exactOptional(),
    StackSetMaxConcurrencyCount: StackSetMaxConcurrencyCountSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p> <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>',
        }),
    ).exactOptional(),
    StackSetMaxConcurrencyPercentage: StackSetMaxConcurrencyPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum percentage of accounts in which to perform this operation at one time.</p> <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, Service Catalog sets the number as <code>1</code> instead.</p> <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type</p> <p>One or more Amazon Web Services accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The Amazon Web Services accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>',
    required: [],
  })
  .openapi('ProvisioningPreferences')

const ProvisionProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The product identifier. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProductName: ProductViewNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the product. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioning artifact. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProvisioningArtifactName: ProvisioningArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the provisioning artifact. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    PathId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    PathName: PortfolioDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the path. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProvisionedProductName: ProvisionedProductNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-friendly name for the provisioned product. This value must be unique for the Amazon Web Services account and cannot be updated after the product is provisioned.',
        }),
    ),
    ProvisioningParameters: ProvisioningParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Parameters specified by the administrator that are required for provisioning the product.',
        }),
    ).exactOptional(),
    ProvisioningPreferences: ProvisioningPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the provisioning preferences for a stack set.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ description: 'One or more tags.' })).exactOptional(),
    NotificationArns: NotificationArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.',
        }),
    ).exactOptional(),
    ProvisionToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'An idempotency token that uniquely identifies the provisioning request.',
        }),
    ),
  })
  .openapi({
    required: ['ProvisionedProductName', 'ProvisionToken'],
    title: 'ProvisionProductInput',
  })
  .openapi('ProvisionProductInput')

const RejectPortfolioShareOutputSchema = z.object({}).openapi('RejectPortfolioShareOutput')

const RejectPortfolioShareInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    PortfolioShareType: PortfolioShareTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of shared portfolios to reject. The default is to reject imported portfolios.</p> <ul> <li> <p> <code>AWS_ORGANIZATIONS</code> - Reject portfolios shared by the management account of your organization.</p> </li> <li> <p> <code>IMPORTED</code> - Reject imported portfolios.</p> </li> <li> <p> <code>AWS_SERVICECATALOG</code> - Not supported. (Throws ResourceNotFoundException.)</p> </li> </ul> <p>For example, <code>aws servicecatalog reject-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId'], title: 'RejectPortfolioShareInput' })
  .openapi('RejectPortfolioShareInput')

const ProvisionedProductDetailsSchema = z
  .array(ProvisionedProductDetailSchema)
  .openapi('ProvisionedProductDetails')

const ScanProvisionedProductsOutputSchema = z
  .object({
    ProvisionedProducts: ProvisionedProductDetailsSchema.and(
      z.any().openapi({ description: 'Information about the provisioned products.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScanProvisionedProductsOutput')

const ScanProvisionedProductsInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    AccessLevelFilter: AccessLevelFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access level to use to obtain results. The default is <code>User</code>.',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ScanProvisionedProductsInput', required: [] })
  .openapi('ScanProvisionedProductsInput')

const ProductViewSummariesSchema = z.array(ProductViewSummarySchema).openapi('ProductViewSummaries')

const AttributeValueSchema = z.string().openapi('AttributeValue')

const ApproximateCountSchema = z.int().openapi('ApproximateCount')

const ProductViewAggregationValueSchema = z
  .object({
    Value: AttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the product view aggregation.' }),
    ).exactOptional(),
    ApproximateCount: ApproximateCountSchema.and(
      z
        .any()
        .openapi({ description: 'An approximate count of the products that match the value.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.',
    required: [],
  })
  .openapi('ProductViewAggregationValue')

const ProductViewAggregationValuesSchema = z
  .array(ProductViewAggregationValueSchema)
  .openapi('ProductViewAggregationValues')

const ProductViewAggregationsSchema = z
  .record(z.string(), ProductViewAggregationValuesSchema)
  .openapi('ProductViewAggregations')

const SearchProductsOutputSchema = z
  .object({
    ProductViewSummaries: ProductViewSummariesSchema.and(
      z.any().openapi({ description: 'Information about the product views.' }),
    ).exactOptional(),
    ProductViewAggregations: ProductViewAggregationsSchema.and(
      z.any().openapi({ description: 'The product view aggregations.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchProductsOutput')

const ProductViewFilterValueSchema = z.string().openapi('ProductViewFilterValue')

const ProductViewFilterValuesSchema = z
  .array(ProductViewFilterValueSchema)
  .openapi('ProductViewFilterValues')

const ProductViewFiltersSchema = z
  .record(z.string(), ProductViewFilterValuesSchema)
  .openapi('ProductViewFilters')

const ProductViewSortBySchema = z
  .enum(['Title', 'VersionCount', 'CreationDate'])
  .openapi('ProductViewSortBy')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const SearchProductsInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Filters: ProductViewFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The search filters. If no search filters are specified, the output includes all products to which the caller has access.',
        }),
    ).exactOptional(),
    PageSize: PageSizeMax100Schema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    SortBy: ProductViewSortBySchema.and(
      z
        .any()
        .openapi({
          description: 'The sort field. If no value is specified, the results are not sorted.',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The sort order. If no value is specified, the results are not sorted.',
        }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'SearchProductsInput', required: [] })
  .openapi('SearchProductsInput')

const ProductViewDetailsSchema = z.array(ProductViewDetailSchema).openapi('ProductViewDetails')

const SearchProductsAsAdminOutputSchema = z
  .object({
    ProductViewDetails: ProductViewDetailsSchema.and(
      z.any().openapi({ description: 'Information about the product views.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchProductsAsAdminOutput')

const ProductSourceSchema = z.literal('ACCOUNT').openapi('ProductSource')

const SearchProductsAsAdminInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(
      z.any().openapi({ description: 'The portfolio identifier.' }),
    ).exactOptional(),
    Filters: ProductViewFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The search filters. If no search filters are specified, the output includes all products to which the administrator has access.',
        }),
    ).exactOptional(),
    SortBy: ProductViewSortBySchema.and(
      z
        .any()
        .openapi({
          description: 'The sort field. If no value is specified, the results are not sorted.',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The sort order. If no value is specified, the results are not sorted.',
        }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    ProductSource: ProductSourceSchema.and(
      z.any().openapi({ description: 'Access level of the source of the product.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'SearchProductsAsAdminInput', required: [] })
  .openapi('SearchProductsAsAdminInput')

const UserArnSchema = z.string().openapi('UserArn')

const UserArnSessionSchema = z.string().openapi('UserArnSession')

const ProvisionedProductAttributeSchema = z
  .object({
    Name: ProvisionedProductNameOrArnSchema.and(
      z.any().openapi({ description: 'The user-friendly name of the provisioned product.' }),
    ).exactOptional(),
    Arn: ProvisionedProductNameOrArnSchema.and(
      z.any().openapi({ description: 'The ARN of the provisioned product.' }),
    ).exactOptional(),
    Type: ProvisionedProductTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.',
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioned product.' }),
    ).exactOptional(),
    Status: ProvisionedProductStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the provisioned product.</p> <ul> <li> <p> <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p> </li> <li> <p> <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results. Wait for an <code>AVAILABLE</code> status before performing operations.</p> </li> <li> <p> <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p> </li> <li> <p> <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p> </li> <li> <p> <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an <code>AVAILABLE</code> status before performing operations.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StatusMessage: ProvisionedProductStatusMessageSchema.and(
      z.any().openapi({ description: 'The current status message of the provisioned product.' }),
    ).exactOptional(),
    CreatedTime: CreatedTimeSchema.and(
      z.any().openapi({ description: 'The UTC time stamp of the creation time.' }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.',
        }),
    ).exactOptional(),
    LastRecordId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The record identifier of the last request performed on this provisioned product.',
        }),
    ).exactOptional(),
    LastProvisioningRecordId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The record identifier of the last request performed on this provisioned product of the following types:</p> <ul> <li> <p> ProvisionedProduct </p> </li> <li> <p> UpdateProvisionedProduct </p> </li> <li> <p> ExecuteProvisionedProductPlan </p> </li> <li> <p> TerminateProvisionedProduct </p> </li> </ul>',
        }),
    ).exactOptional(),
    LastSuccessfulProvisioningRecordId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The record identifier of the last successful request performed on this provisioned product of the following types:</p> <ul> <li> <p> ProvisionedProduct </p> </li> <li> <p> UpdateProvisionedProduct </p> </li> <li> <p> ExecuteProvisionedProductPlan </p> </li> <li> <p> TerminateProvisionedProduct </p> </li> </ul>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ description: 'One or more tags.' })).exactOptional(),
    PhysicalId: PhysicalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z.any().openapi({ description: 'The product identifier.' }),
    ).exactOptional(),
    ProductName: ProductViewNameSchema.and(
      z.any().openapi({ description: 'The name of the product.' }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
    ProvisioningArtifactName: ProvisioningArtifactNameSchema.and(
      z.any().openapi({ description: 'The name of the provisioning artifact.' }),
    ).exactOptional(),
    UserArn: UserArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user.' }),
    ).exactOptional(),
    UserArnSession: UserArnSessionSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the user in the session. This ARN might contain a session ID.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a provisioned product.', required: [] })
  .openapi('ProvisionedProductAttribute')

const ProvisionedProductAttributesSchema = z
  .array(ProvisionedProductAttributeSchema)
  .openapi('ProvisionedProductAttributes')

const TotalResultsCountSchema = z.int().openapi('TotalResultsCount')

const SearchProvisionedProductsOutputSchema = z
  .object({
    ProvisionedProducts: ProvisionedProductAttributesSchema.and(
      z.any().openapi({ description: 'Information about the provisioned products.' }),
    ).exactOptional(),
    TotalResultsCount: TotalResultsCountSchema.and(
      z.any().openapi({ description: 'The number of provisioned products found.' }),
    ).exactOptional(),
    NextPageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token to use to retrieve the next set of results. If there are no additional results, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchProvisionedProductsOutput')

const ProvisionedProductViewFilterValueSchema = z
  .string()
  .openapi('ProvisionedProductViewFilterValue')

const ProvisionedProductViewFilterValuesSchema = z
  .array(ProvisionedProductViewFilterValueSchema)
  .openapi('ProvisionedProductViewFilterValues')

const ProvisionedProductFiltersSchema = z
  .record(z.string(), ProvisionedProductViewFilterValuesSchema)
  .openapi('ProvisionedProductFilters')

const SortFieldSchema = z.string().openapi('SortField')

const SearchProvisionedProductsPageSizeSchema = z
  .int()
  .min(0)
  .max(100)
  .openapi('SearchProvisionedProductsPageSize')

const SearchProvisionedProductsInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    AccessLevelFilter: AccessLevelFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access level to use to obtain results. The default is <code>User</code>.',
        }),
    ).exactOptional(),
    Filters: ProvisionedProductFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The search filters.</p> <p>When the key is <code>SearchQuery</code>, the searchable fields are <code>arn</code>, <code>createdTime</code>, <code>id</code>, <code>lastRecordId</code>, <code>idempotencyToken</code>, <code>name</code>, <code>physicalId</code>, <code>productId</code>, <code>provisioningArtifact</code>, <code>type</code>, <code>status</code>, <code>tags</code>, <code>userArn</code>, <code>userArnSession</code>, <code>lastProvisioningRecordId</code>, <code>lastSuccessfulProvisioningRecordId</code>, <code>productName</code>, and <code>provisioningArtifactName</code>.</p> <p>Example: <code>"SearchQuery":["status:AVAILABLE"]</code> </p>',
        }),
    ).exactOptional(),
    SortBy: SortFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sort field. If no value is specified, the results are not sorted. The valid values are <code>arn</code>, <code>id</code>, <code>name</code>, and <code>lastRecordId</code>.',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The sort order. If no value is specified, the results are not sorted.',
        }),
    ).exactOptional(),
    PageSize: SearchProvisionedProductsPageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return with this call.' }),
    ).exactOptional(),
    PageToken: PageTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page token for the next set of results. To retrieve the first set of results, use null.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'SearchProvisionedProductsInput', required: [] })
  .openapi('SearchProvisionedProductsInput')

const TerminateProvisionedProductOutputSchema = z
  .object({
    RecordDetail: RecordDetailSchema.and(
      z.any().openapi({ description: 'Information about the result of this request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TerminateProvisionedProductOutput')

const RetainPhysicalResourcesSchema = z.boolean().openapi('RetainPhysicalResources')

const TerminateProvisionedProductInputSchema = z
  .object({
    ProvisionedProductName: ProvisionedProductNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.',
        }),
    ).exactOptional(),
    ProvisionedProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.',
        }),
    ).exactOptional(),
    TerminateToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An idempotency token that uniquely identifies the termination request. This token is only valid during the termination process. After the provisioned product is terminated, subsequent requests to terminate the same provisioned product always return <b>ResourceNotFound</b>.',
        }),
    ),
    IgnoreErrors: IgnoreErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to true, Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.',
        }),
    ).exactOptional(),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    RetainPhysicalResources: RetainPhysicalResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'When this boolean parameter is set to true, the <code>TerminateProvisionedProduct</code> API deletes the Service Catalog provisioned product. However, it does not remove the CloudFormation stack, stack set, or the underlying resources of the deleted provisioned product. The default value is false.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TerminateToken'], title: 'TerminateProvisionedProductInput' })
  .openapi('TerminateProvisionedProductInput')

const UpdateConstraintOutputSchema = z
  .object({
    ConstraintDetail: ConstraintDetailSchema.and(
      z.any().openapi({ description: 'Information about the constraint.' }),
    ).exactOptional(),
    ConstraintParameters: ConstraintParametersSchema.and(
      z.any().openapi({ description: 'The constraint parameters.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the current request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConstraintOutput')

const UpdateConstraintInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The identifier of the constraint.' })),
    Description: ConstraintDescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the constraint.' }),
    ).exactOptional(),
    Parameters: ConstraintParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p> <dl> <dt>LAUNCH</dt> <dd> <p>You are required to specify either the <code>RoleArn</code> or the <code>LocalRoleName</code> but can\'t use both.</p> <p>Specify the <code>RoleArn</code> property as follows:</p> <p> <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code> </p> <p>Specify the <code>LocalRoleName</code> property as follows:</p> <p> <code>{"LocalRoleName": "SCBasicLaunchRole"}</code> </p> <p>If you specify the <code>LocalRoleName</code> property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be account-agnostic so the administrator can create fewer resources per shared account.</p> <note> <p>The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.</p> </note> <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p> <p>You also cannot have more than one <code>LAUNCH</code> constraint on a product and portfolio.</p> </dd> <dt>NOTIFICATION</dt> <dd> <p>Specify the <code>NotificationArns</code> property as follows:</p> <p> <code>{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}</code> </p> </dd> <dt>RESOURCE_UPDATE</dt> <dd> <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p> <p> <code>{"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}</code> </p> <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p> </dd> <dt>STACKSET</dt> <dd> <p>Specify the <code>Parameters</code> property as follows:</p> <p> <code>{"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}</code> </p> <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p> <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p> <p>Products with a <code>STACKSET</code> constraint will launch an CloudFormation stack set.</p> </dd> <dt>TEMPLATE</dt> <dd> <p>Specify the <code>Rules</code> property. For more information, see <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html">Template Constraint Rules</a>.</p> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'UpdateConstraintInput' })
  .openapi('UpdateConstraintInput')

const UpdatePortfolioOutputSchema = z
  .object({
    PortfolioDetail: PortfolioDetailSchema.and(
      z.any().openapi({ description: 'Information about the portfolio.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'Information about the tags associated with the portfolio.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePortfolioOutput')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const UpdatePortfolioInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The portfolio identifier.' })),
    DisplayName: PortfolioDisplayNameSchema.and(
      z.any().openapi({ description: 'The name to use for display purposes.' }),
    ).exactOptional(),
    Description: PortfolioDescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the portfolio.' }),
    ).exactOptional(),
    ProviderName: ProviderNameSchema.and(
      z.any().openapi({ description: 'The updated name of the portfolio provider.' }),
    ).exactOptional(),
    AddTags: AddTagsSchema.and(
      z.any().openapi({ description: 'The tags to add.' }),
    ).exactOptional(),
    RemoveTags: TagKeysSchema.and(
      z.any().openapi({ description: 'The tags to remove.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'UpdatePortfolioInput' })
  .openapi('UpdatePortfolioInput')

const UpdatePortfolioShareOutputSchema = z
  .object({
    PortfolioShareToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that tracks the status of the <code>UpdatePortfolioShare</code> operation for external account to account or organizational type sharing.',
        }),
    ).exactOptional(),
    Status: ShareStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of <code>UpdatePortfolioShare</code> operation. You can also obtain the operation status using <code>DescribePortfolioShareStatus</code> API. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePortfolioShareOutput')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const UpdatePortfolioShareInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    PortfolioId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the portfolio for which the share will be updated.',
        }),
    ),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account Id of the recipient account. This field is required when updating an external account to account type share.',
        }),
    ).exactOptional(),
    OrganizationNode: OrganizationNodeSchema.exactOptional(),
    ShareTagOptions: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables <code>TagOptions</code> sharing for the portfolio share. If this field is not provided, the current state of TagOptions sharing on the portfolio share will not be modified.',
        }),
    ).exactOptional(),
    SharePrincipals: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag to enables or disables <code>Principals</code> sharing in the portfolio. If this field is not provided, the current state of the <code>Principals</code> sharing on the portfolio share will not be modified. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PortfolioId'], title: 'UpdatePortfolioShareInput' })
  .openapi('UpdatePortfolioShareInput')

const UpdateProductOutputSchema = z
  .object({
    ProductViewDetail: ProductViewDetailSchema.and(
      z.any().openapi({ description: 'Information about the product view.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'Information about the tags associated with the product.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProductOutput')

const UpdateProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    Name: ProductViewNameSchema.and(
      z.any().openapi({ description: 'The updated product name.' }),
    ).exactOptional(),
    Owner: ProductViewOwnerSchema.and(
      z.any().openapi({ description: 'The updated owner of the product.' }),
    ).exactOptional(),
    Description: ProductViewShortDescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the product.' }),
    ).exactOptional(),
    Distributor: ProductViewOwnerSchema.and(
      z.any().openapi({ description: 'The updated distributor of the product.' }),
    ).exactOptional(),
    SupportDescription: SupportDescriptionSchema.and(
      z.any().openapi({ description: 'The updated support description for the product.' }),
    ).exactOptional(),
    SupportEmail: SupportEmailSchema.and(
      z.any().openapi({ description: 'The updated support email for the product.' }),
    ).exactOptional(),
    SupportUrl: SupportUrlSchema.and(
      z.any().openapi({ description: 'The updated support URL for the product.' }),
    ).exactOptional(),
    AddTags: AddTagsSchema.and(
      z.any().openapi({ description: 'The tags to add to the product.' }),
    ).exactOptional(),
    RemoveTags: TagKeysSchema.and(
      z.any().openapi({ description: 'The tags to remove from the product.' }),
    ).exactOptional(),
    SourceConnection: SourceConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies connection details for the updated product and syncs the product to the connection source artifact. This automatically manages the product's artifacts based on changes to the source. The <code>SourceConnection</code> parameter consists of the following sub-fields.</p> <ul> <li> <p> <code>Type</code> </p> </li> <li> <p> <code>ConnectionParamters</code> </p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'UpdateProductInput' })
  .openapi('UpdateProductInput')

const UpdateProvisionedProductOutputSchema = z
  .object({
    RecordDetail: RecordDetailSchema.and(
      z.any().openapi({ description: 'Information about the result of the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProvisionedProductOutput')

const StackSetOperationTypeSchema = z
  .enum(['CREATE', 'UPDATE', 'DELETE'])
  .openapi('StackSetOperationType')

const UpdateProvisioningPreferencesSchema = z
  .object({
    StackSetAccounts: StackSetAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more Amazon Web Services accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The Amazon Web Services accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>',
        }),
    ).exactOptional(),
    StackSetRegions: StackSetRegionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more Amazon Web Services Regions where the provisioned product will be available.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The specified Regions should be within the list of Regions from the <code>STACKSET</code> constraint. To get the list of Regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all Regions from the <code>STACKSET</code> constraint.</p>',
        }),
    ).exactOptional(),
    StackSetFailureToleranceCount: StackSetFailureToleranceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of accounts, per Region, for which this operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p> <p>The default value is <code>0</code> if no value is specified.</p>",
        }),
    ).exactOptional(),
    StackSetFailureTolerancePercentage: StackSetFailureTolerancePercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The percentage of accounts, per Region, for which this stack operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p> <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>",
        }),
    ).exactOptional(),
    StackSetMaxConcurrencyCount: StackSetMaxConcurrencyCountSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p> <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>',
        }),
    ).exactOptional(),
    StackSetMaxConcurrencyPercentage: StackSetMaxConcurrencyPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum percentage of accounts in which to perform this operation at one time.</p> <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, Service Catalog sets the number as <code>1</code> instead.</p> <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>',
        }),
    ).exactOptional(),
    StackSetOperationType: StackSetOperationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines what action Service Catalog performs to a stack set or a stack instance represented by the provisioned product. The default value is <code>UPDATE</code> if nothing is specified.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <dl> <dt>CREATE</dt> <dd> <p>Creates a new stack instance in the stack set represented by the provisioned product. In this case, only new stack instances are created based on accounts and Regions; if new ProductId or ProvisioningArtifactID are passed, they will be ignored.</p> </dd> <dt>UPDATE</dt> <dd> <p>Updates the stack set represented by the provisioned product and also its stack instances.</p> </dd> <dt>DELETE</dt> <dd> <p>Deletes a stack instance in the stack set represented by the provisioned product.</p> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.',
    required: [],
  })
  .openapi('UpdateProvisioningPreferences')

const UpdateProvisionedProductInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedProductName: ProvisionedProductNameOrArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.',
        }),
    ).exactOptional(),
    ProvisionedProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the provisioned product. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the product. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProductName: ProductViewNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the product. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ).exactOptional(),
    ProvisioningArtifactName: ProvisioningArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the provisioning artifact. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    PathId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path identifier. This value is optional if the product has a default path, and required if the product has more than one path. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    PathName: PortfolioDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the path. You must provide the name or ID, but not both.',
        }),
    ).exactOptional(),
    ProvisioningParameters: UpdateProvisioningParametersSchema.and(
      z.any().openapi({ description: 'The new parameters.' }),
    ).exactOptional(),
    ProvisioningPreferences: UpdateProvisioningPreferencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains information about the provisioning preferences for a stack set.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more tags. Requires the product to have <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.',
        }),
    ).exactOptional(),
    UpdateToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency token that uniquely identifies the provisioning update request.',
        }),
    ),
  })
  .openapi({ required: ['UpdateToken'], title: 'UpdateProvisionedProductInput' })
  .openapi('UpdateProvisionedProductInput')

const PropertyValueSchema = z.string().min(0).max(1024).openapi('PropertyValue')

const ProvisionedProductPropertiesSchema = z
  .record(z.string(), PropertyValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('ProvisionedProductProperties')

const UpdateProvisionedProductPropertiesOutputSchema = z
  .object({
    ProvisionedProductId: IdSchema.and(
      z.any().openapi({ description: 'The provisioned product identifier.' }),
    ).exactOptional(),
    ProvisionedProductProperties: ProvisionedProductPropertiesSchema.and(
      z.any().openapi({ description: 'A map that contains the properties updated.' }),
    ).exactOptional(),
    RecordId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the record.' }),
    ).exactOptional(),
    Status: RecordStatusSchema.and(
      z.any().openapi({ description: 'The status of the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProvisionedProductPropertiesOutput')

const UpdateProvisionedProductPropertiesInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProvisionedProductId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioned product.' }),
    ),
    ProvisionedProductProperties: ProvisionedProductPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map that contains the provisioned product properties to be updated.</p> <p>The <code>LAUNCH_ROLE</code> key accepts role ARNs. This key allows an administrator to call <code>UpdateProvisionedProductProperties</code> to update the launch role that is associated with a provisioned product. This role is used when an end user calls a provisioning operation such as <code>UpdateProvisionedProduct</code>, <code>TerminateProvisionedProduct</code>, or <code>ExecuteProvisionedProductServiceAction</code>. Only a role ARN is valid. A user ARN is invalid. </p> <p>The <code>OWNER</code> key accepts user ARNs, IAM role ARNs, and STS assumed-role ARNs. The owner is the user that has permission to see, update, terminate, and execute service actions in the provisioned product.</p> <p>The administrator can change the owner of a provisioned product to another IAM or STS entity within the same account. Both end user owners and administrators can see ownership history of the provisioned product using the <code>ListRecordHistory</code> API. The new owner can describe all past records for the provisioned product using the <code>DescribeRecord</code> API. The previous owner can no longer use <code>DescribeRecord</code>, but can still see the product's history from when he was an owner using <code>ListRecordHistory</code>.</p> <p>If a provisioned product ownership is assigned to an end user, they can see and perform any action through the API or Service Catalog console such as update, terminate, and execute service actions. If an end user provisions a product and the owner is updated to someone else, they will no longer be able to see or perform any actions through API or the Service Catalog console on that provisioned product.</p>",
        }),
    ),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotency token that uniquely identifies the provisioning product update request.',
        }),
    ),
  })
  .openapi({
    required: ['ProvisionedProductId', 'ProvisionedProductProperties', 'IdempotencyToken'],
    title: 'UpdateProvisionedProductPropertiesInput',
  })
  .openapi('UpdateProvisionedProductPropertiesInput')

const UpdateProvisioningArtifactOutputSchema = z
  .object({
    ProvisioningArtifactDetail: ProvisioningArtifactDetailSchema.and(
      z.any().openapi({ description: 'Information about the provisioning artifact.' }),
    ).exactOptional(),
    Info: ProvisioningArtifactInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the current request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProvisioningArtifactOutput')

const UpdateProvisioningArtifactInputSchema = z
  .object({
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
    ProductId: IdSchema.and(z.any().openapi({ description: 'The product identifier.' })),
    ProvisioningArtifactId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the provisioning artifact.' }),
    ),
    Name: ProvisioningArtifactNameSchema.and(
      z.any().openapi({ description: 'The updated name of the provisioning artifact.' }),
    ).exactOptional(),
    Description: ProvisioningArtifactDescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the provisioning artifact.' }),
    ).exactOptional(),
    Active: ProvisioningArtifactActiveSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the product version is active.</p> <p>Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact.</p>',
        }),
    ).exactOptional(),
    Guidance: ProvisioningArtifactGuidanceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p> <p>The <code>DEFAULT</code> value indicates that the product version is active.</p> <p>The administrator can set the guidance to <code>DEPRECATED</code> to inform users that the product version is deprecated. Users are able to make updates to a provisioned product of a deprecated version but cannot launch new provisioned products using a deprecated version.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProductId', 'ProvisioningArtifactId'],
    title: 'UpdateProvisioningArtifactInput',
  })
  .openapi('UpdateProvisioningArtifactInput')

const UpdateServiceActionOutputSchema = z
  .object({
    ServiceActionDetail: ServiceActionDetailSchema.and(
      z.any().openapi({ description: 'Detailed information about the self-service action.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateServiceActionOutput')

const UpdateServiceActionInputSchema = z
  .object({
    Id: IdSchema.and(z.any().openapi({ description: 'The self-service action identifier.' })),
    Name: ServiceActionNameSchema.and(
      z.any().openapi({ description: 'The self-service action name.' }),
    ).exactOptional(),
    Definition: ServiceActionDefinitionMapSchema.and(
      z.any().openapi({ description: 'A map that defines the self-service action.' }),
    ).exactOptional(),
    Description: ServiceActionDescriptionSchema.and(
      z.any().openapi({ description: 'The self-service action description.' }),
    ).exactOptional(),
    AcceptLanguage: AcceptLanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code.</p> <ul> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'UpdateServiceActionInput' })
  .openapi('UpdateServiceActionInput')

const UpdateTagOptionOutputSchema = z
  .object({
    TagOptionDetail: TagOptionDetailSchema.and(
      z.any().openapi({ description: 'Information about the TagOption.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTagOptionOutput')

const UpdateTagOptionInputSchema = z
  .object({
    Id: TagOptionIdSchema.and(z.any().openapi({ description: 'The TagOption identifier.' })),
    Value: TagOptionValueSchema.and(
      z.any().openapi({ description: 'The updated value.' }),
    ).exactOptional(),
    Active: TagOptionActiveSchema.and(
      z.any().openapi({ description: 'The updated active state.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], title: 'UpdateTagOptionInput' })
  .openapi('UpdateTagOptionInput')

const ProductViewAggregationTypeSchema = z.string().openapi('ProductViewAggregationType')

const ProductViewFilterBySchema = z
  .enum(['FullTextSearch', 'Owner', 'ProductType', 'SourceProductId'])
  .openapi('ProductViewFilterBy')

const PropertyKeySchema = z.enum(['OWNER', 'LAUNCH_ROLE']).openapi('PropertyKey')

const ProvisionedProductViewFilterBySchema = z
  .literal('SearchQuery')
  .openapi('ProvisionedProductViewFilterBy')

const ProvisioningArtifactInfoKeySchema = z.string().openapi('ProvisioningArtifactInfoKey')

const ProvisioningArtifactPropertyNameSchema = z
  .literal('Id')
  .openapi('ProvisioningArtifactPropertyName')

const ServiceActionDefinitionKeySchema = z
  .enum(['Name', 'Version', 'AssumeRole', 'Parameters'])
  .openapi('ServiceActionDefinitionKey')

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

export const postXAmzTargetAWS242ServiceCatalogServiceAcceptPortfolioShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare',
  description: 'Accepts an offer to share the specified portfolio.',
  operationId: 'AcceptPortfolioShare',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.AcceptPortfolioShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.AcceptPortfolioShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AcceptPortfolioShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptPortfolioShareOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource',
    description: 'Associates the specified budget with the specified resource.',
    operationId: 'AssociateBudgetWithResource',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.AssociateBudgetWithResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.AssociateBudgetWithResource'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateBudgetWithResourceInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateBudgetWithResourceOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'DuplicateResourceException',
        content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio',
    description:
      '<p>Associates the specified principal ARN with the specified portfolio.</p> <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is included in the share. </p> <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are required. </p> <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code> </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>',
    operationId: 'AssociatePrincipalWithPortfolio',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociatePrincipalWithPortfolioInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociatePrincipalWithPortfolioOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio',
    description:
      '<p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>',
    operationId: 'AssociateProductWithPortfolio',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.AssociateProductWithPortfolio')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.AssociateProductWithPortfolio'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateProductWithPortfolioInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateProductWithPortfolioOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifactRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact',
    description: 'Associates a self-service action with a provisioning artifact.',
    operationId: 'AssociateServiceActionWithProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: AssociateServiceActionWithProvisioningArtifactInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: AssociateServiceActionWithProvisioningArtifactOutputSchema,
          },
        },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'DuplicateResourceException',
        content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      483: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceAssociateTagOptionWithResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource',
    description: 'Associate the specified TagOption with the specified portfolio or product.',
    operationId: 'AssociateTagOptionWithResource',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.AssociateTagOptionWithResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.AssociateTagOptionWithResource'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateTagOptionWithResourceInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateTagOptionWithResourceOutputSchema } },
      },
      480: {
        description: 'TagOptionNotMigratedException',
        content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      483: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      484: {
        description: 'DuplicateResourceException',
        content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
      },
      485: {
        description: 'InvalidStateException',
        content: { 'application/json': { schema: InvalidStateExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifactRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact',
    description: 'Associates multiple self-service actions with provisioning artifacts.',
    operationId: 'BatchAssociateServiceActionWithProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal(
            'AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: BatchAssociateServiceActionWithProvisioningArtifactInputSchema,
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
            schema: BatchAssociateServiceActionWithProvisioningArtifactOutputSchema,
          },
        },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifactRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact',
    description:
      'Disassociates a batch of self-service actions from the specified provisioning artifact.',
    operationId: 'BatchDisassociateServiceActionFromProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal(
            'AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: BatchDisassociateServiceActionFromProvisioningArtifactInputSchema,
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
            schema: BatchDisassociateServiceActionFromProvisioningArtifactOutputSchema,
          },
        },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceCopyProductRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct',
  description:
    '<p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same Region or another Region. If you copy a product to another account, you must first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>',
  operationId: 'CopyProduct',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.CopyProduct')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.CopyProduct'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CopyProductInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CopyProductOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceCreateConstraintRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint',
  description:
    '<p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>',
  operationId: 'CreateConstraint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.CreateConstraint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.CreateConstraint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConstraintInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConstraintOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'DuplicateResourceException',
      content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio',
  description:
    '<p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>',
  operationId: 'CreatePortfolio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.CreatePortfolio')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.CreatePortfolio'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePortfolioInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePortfolioOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceCreatePortfolioShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare',
  description:
    "<p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>",
  operationId: 'CreatePortfolioShare',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.CreatePortfolioShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.CreatePortfolioShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePortfolioShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePortfolioShareOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    483: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    484: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceCreateProductRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct',
  description:
    '<p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>',
  operationId: 'CreateProduct',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.CreateProduct')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.CreateProduct'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateProductInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProductOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceCreateProvisionedProductPlanRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan',
    description:
      '<p>Creates a plan.</p> <p>A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>',
    operationId: 'CreateProvisionedProductPlan',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.CreateProvisionedProductPlan')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.CreateProvisionedProductPlan'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateProvisionedProductPlanInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateProvisionedProductPlanOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidStateException',
        content: { 'application/json': { schema: InvalidStateExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceCreateProvisioningArtifactRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact',
    description:
      '<p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>',
    operationId: 'CreateProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.CreateProvisioningArtifact')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.CreateProvisioningArtifact'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateProvisioningArtifactInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateProvisioningArtifactOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWS242ServiceCatalogServiceCreateServiceActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction',
  description: 'Creates a self-service action.',
  operationId: 'CreateServiceAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.CreateServiceAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.CreateServiceAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServiceActionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceActionOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceCreateTagOptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption',
  description: 'Creates a TagOption.',
  operationId: 'CreateTagOption',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.CreateTagOption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.CreateTagOption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateTagOptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTagOptionOutputSchema } },
    },
    480: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
    481: {
      description: 'DuplicateResourceException',
      content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDeleteConstraintRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint',
  description:
    '<p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>',
  operationId: 'DeleteConstraint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DeleteConstraint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DeleteConstraint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConstraintInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConstraintOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio',
  description:
    '<p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>',
  operationId: 'DeletePortfolio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DeletePortfolio')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DeletePortfolio'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePortfolioInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePortfolioOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDeletePortfolioShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare',
  description:
    '<p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>',
  operationId: 'DeletePortfolioShare',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DeletePortfolioShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DeletePortfolioShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePortfolioShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePortfolioShareOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    482: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDeleteProductRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct',
  description:
    '<p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>',
  operationId: 'DeleteProduct',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DeleteProduct')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DeleteProduct'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteProductInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProductOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    483: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDeleteProvisionedProductPlanRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan',
    description: 'Deletes the specified plan.',
    operationId: 'DeleteProvisionedProductPlan',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DeleteProvisionedProductPlan')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DeleteProvisionedProductPlan'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteProvisionedProductPlanInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteProvisionedProductPlanOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDeleteProvisioningArtifactRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact',
    description:
      '<p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>',
    operationId: 'DeleteProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DeleteProvisioningArtifact')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DeleteProvisioningArtifact'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteProvisioningArtifactInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteProvisioningArtifactOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ResourceInUseException',
        content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
      },
      482: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWS242ServiceCatalogServiceDeleteServiceActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction',
  description: 'Deletes a self-service action.',
  operationId: 'DeleteServiceAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DeleteServiceAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DeleteServiceAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteServiceActionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServiceActionOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDeleteTagOptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption',
  description:
    '<p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>',
  operationId: 'DeleteTagOption',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DeleteTagOption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DeleteTagOption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteTagOptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTagOptionOutputSchema } },
    },
    480: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeConstraintRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint',
  description: 'Gets information about the specified constraint.',
  operationId: 'DescribeConstraint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribeConstraint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DescribeConstraint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConstraintInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConstraintOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeCopyProductStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus',
  description: 'Gets the status of the specified copy product operation.',
  operationId: 'DescribeCopyProductStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribeCopyProductStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.DescribeCopyProductStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCopyProductStatusInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCopyProductStatusOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio',
  description:
    '<p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>',
  operationId: 'DescribePortfolio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribePortfolio')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DescribePortfolio'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePortfolioInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePortfolioOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioShareStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus',
    description:
      'Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.',
    operationId: 'DescribePortfolioShareStatus',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DescribePortfolioShareStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DescribePortfolioShareStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribePortfolioShareStatusInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribePortfolioShareStatusOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      482: {
        description: 'OperationNotSupportedException',
        content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDescribePortfolioSharesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares',
  description:
    '<p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>',
  operationId: 'DescribePortfolioShares',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribePortfolioShares')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.DescribePortfolioShares'],
            },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePortfolioSharesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePortfolioSharesOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeProductRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct',
  description:
    '<p>Gets information about the specified product.</p> <note> <p> Running this operation with administrator access results in a failure. <a>DescribeProductAsAdmin</a> should be used instead. </p> </note>',
  operationId: 'DescribeProduct',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribeProduct')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DescribeProduct'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProductInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProductOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeProductAsAdminRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin',
  description:
    'Gets information about the specified product. This operation is run with administrator access.',
  operationId: 'DescribeProductAsAdmin',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribeProductAsAdmin')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.DescribeProductAsAdmin'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProductAsAdminInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProductAsAdminOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeProductViewRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView',
  description: 'Gets information about the specified product.',
  operationId: 'DescribeProductView',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribeProductView')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DescribeProductView'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProductViewInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProductViewOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct',
    description: 'Gets information about the specified provisioned product.',
    operationId: 'DescribeProvisionedProduct',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DescribeProvisionedProduct')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DescribeProvisionedProduct'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeProvisionedProductInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeProvisionedProductOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisionedProductPlanRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan',
    description: 'Gets information about the resource changes for the specified plan.',
    operationId: 'DescribeProvisionedProductPlan',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DescribeProvisionedProductPlan')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DescribeProvisionedProductPlan'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeProvisionedProductPlanInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeProvisionedProductPlanOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningArtifactRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact',
    description:
      'Gets information about the specified provisioning artifact (also known as a version) for the specified product.',
    operationId: 'DescribeProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DescribeProvisioningArtifact')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DescribeProvisioningArtifact'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeProvisioningArtifactInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeProvisioningArtifactOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeProvisioningParametersRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters',
    description:
      '<p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>',
    operationId: 'DescribeProvisioningParameters',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DescribeProvisioningParameters')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DescribeProvisioningParameters'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeProvisioningParametersInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeProvisioningParametersOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeRecordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord',
  description:
    "<p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>",
  operationId: 'DescribeRecord',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribeRecord')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DescribeRecord'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRecordInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRecordOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction',
  description: 'Describes a self-service action.',
  operationId: 'DescribeServiceAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribeServiceAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DescribeServiceAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeServiceActionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeServiceActionOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeServiceActionExecutionParametersRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters',
    description:
      'Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.',
    operationId: 'DescribeServiceActionExecutionParameters',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeServiceActionExecutionParametersInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeServiceActionExecutionParametersOutputSchema },
        },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDescribeTagOptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption',
  description: 'Gets information about the specified TagOption.',
  operationId: 'DescribeTagOption',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.DescribeTagOption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.DescribeTagOption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTagOptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTagOptionOutputSchema } },
    },
    480: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess',
    description:
      '<p>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API.</p> <p>You cannot call this API if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p> <important> <p>If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</p> </important>',
    operationId: 'DisableAWSOrganizationsAccess',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DisableAWSOrganizationsAccess')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DisableAWSOrganizationsAccess'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisableAWSOrganizationsAccessInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisableAWSOrganizationsAccessOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidStateException',
        content: { 'application/json': { schema: InvalidStateExceptionSchema } },
      },
      482: {
        description: 'OperationNotSupportedException',
        content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource',
    description: 'Disassociates the specified budget from the specified resource.',
    operationId: 'DisassociateBudgetFromResource',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DisassociateBudgetFromResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DisassociateBudgetFromResource'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisassociateBudgetFromResourceInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateBudgetFromResourceOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio',
    description:
      '<p>Disassociates a previously associated principal ARN from a specified portfolio.</p> <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the <code>AssociatePrincipalWithPortfolio</code> call request details. For example, to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code> IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p> <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. </p>',
    operationId: 'DisassociatePrincipalFromPortfolio',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisassociatePrincipalFromPortfolioInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociatePrincipalFromPortfolioOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio',
    description:
      '<p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>',
    operationId: 'DisassociateProductFromPortfolio',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DisassociateProductFromPortfolio')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DisassociateProductFromPortfolio'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisassociateProductFromPortfolioInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateProductFromPortfolioOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ResourceInUseException',
        content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
      },
      482: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifactRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact',
    description:
      'Disassociates the specified self-service action association from the specified provisioning artifact.',
    operationId: 'DisassociateServiceActionFromProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DisassociateServiceActionFromProvisioningArtifactInputSchema,
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
            schema: DisassociateServiceActionFromProvisioningArtifactOutputSchema,
          },
        },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceDisassociateTagOptionFromResourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource',
    description: 'Disassociates the specified TagOption from the specified resource.',
    operationId: 'DisassociateTagOptionFromResource',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.DisassociateTagOptionFromResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.DisassociateTagOptionFromResource'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisassociateTagOptionFromResourceInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateTagOptionFromResourceOutputSchema } },
      },
      480: {
        description: 'TagOptionNotMigratedException',
        content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess',
    description:
      '<p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p> <important> <p>If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</p> </important>',
    operationId: 'EnableAWSOrganizationsAccess',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.EnableAWSOrganizationsAccess')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.EnableAWSOrganizationsAccess'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: EnableAWSOrganizationsAccessInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: EnableAWSOrganizationsAccessOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidStateException',
        content: { 'application/json': { schema: InvalidStateExceptionSchema } },
      },
      482: {
        description: 'OperationNotSupportedException',
        content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductPlanRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan',
    description:
      'Provisions or modifies a product based on the resource changes for the specified plan.',
    operationId: 'ExecuteProvisionedProductPlan',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ExecuteProvisionedProductPlan')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ExecuteProvisionedProductPlan'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ExecuteProvisionedProductPlanInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ExecuteProvisionedProductPlanOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidStateException',
        content: { 'application/json': { schema: InvalidStateExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceExecuteProvisionedProductServiceActionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction',
    description: 'Executes a self-service action against a provisioned product.',
    operationId: 'ExecuteProvisionedProductServiceAction',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ExecuteProvisionedProductServiceActionInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ExecuteProvisionedProductServiceActionOutputSchema },
        },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidStateException',
        content: { 'application/json': { schema: InvalidStateExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus',
    description:
      'Get the Access Status for Organizations portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.',
    operationId: 'GetAWSOrganizationsAccessStatus',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetAWSOrganizationsAccessStatusInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetAWSOrganizationsAccessStatusOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'OperationNotSupportedException',
        content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceGetProvisionedProductOutputsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs',
    description:
      'This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.',
    operationId: 'GetProvisionedProductOutputs',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.GetProvisionedProductOutputs')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.GetProvisionedProductOutputs'],
              },
            },
          }),
      }),
      query: z.object({
        PageSize: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageSize',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        PageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetProvisionedProductOutputsInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetProvisionedProductOutputsOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceImportAsProvisionedProductRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct',
    description:
      "<p> Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. </p> <p> Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks are not supported. </p> <p> The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and <code>IMPORT_ROLLBACK_COMPLETE</code>. </p> <p> Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <note> <p> When you import an existing CloudFormation stack into a portfolio, constraints that are associated with the product aren't applied during the import process. The constraints are applied after you call <code>UpdateProvisionedProduct</code> for the provisioned product. </p> </note> <p> The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>",
    operationId: 'ImportAsProvisionedProduct',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ImportAsProvisionedProduct')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ImportAsProvisionedProduct'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ImportAsProvisionedProductInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ImportAsProvisionedProductOutputSchema } },
      },
      480: {
        description: 'DuplicateResourceException',
        content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
      },
      481: {
        description: 'InvalidStateException',
        content: { 'application/json': { schema: InvalidStateExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWS242ServiceCatalogServiceListAcceptedPortfolioSharesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares',
    description:
      'Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which organizational shares were accepted by this account.',
    operationId: 'ListAcceptedPortfolioShares',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ListAcceptedPortfolioShares')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ListAcceptedPortfolioShares'],
              },
            },
          }),
      }),
      query: z.object({
        PageSize: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageSize',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        PageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListAcceptedPortfolioSharesInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListAcceptedPortfolioSharesOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'OperationNotSupportedException',
        content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource',
  description: 'Lists all the budgets associated to the specified resource.',
  operationId: 'ListBudgetsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListBudgetsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.ListBudgetsForResource'],
            },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListBudgetsForResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBudgetsForResourceOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListConstraintsForPortfolioRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio',
    description: 'Lists the constraints for the specified portfolio and product.',
    operationId: 'ListConstraintsForPortfolio',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ListConstraintsForPortfolio')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ListConstraintsForPortfolio'],
              },
            },
          }),
      }),
      query: z.object({
        PageSize: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageSize',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        PageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListConstraintsForPortfolioInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListConstraintsForPortfolioOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceListLaunchPathsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths',
  description:
    '<p> Lists the paths to the specified product. A path describes how the user gets access to a specified product and is necessary when provisioning a product. A path also determines the constraints that are put on a product. A path is dependent on a specific product, porfolio, and principal. </p> <note> <p> When provisioning a product that\'s been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>',
  operationId: 'ListLaunchPaths',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListLaunchPaths')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.ListLaunchPaths'] },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLaunchPathsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLaunchPathsOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess',
    description:
      '<p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>',
    operationId: 'ListOrganizationPortfolioAccess',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ListOrganizationPortfolioAccess')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ListOrganizationPortfolioAccess'],
              },
            },
          }),
      }),
      query: z.object({
        PageSize: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageSize',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        PageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListOrganizationPortfolioAccessInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListOrganizationPortfolioAccessOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      482: {
        description: 'OperationNotSupportedException',
        content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceListPortfolioAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess',
  description:
    '<p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>',
  operationId: 'ListPortfolioAccess',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListPortfolioAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.ListPortfolioAccess'] },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListPortfolioAccessInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPortfolioAccessOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListPortfoliosRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios',
  description: 'Lists all portfolios in the catalog.',
  operationId: 'ListPortfolios',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListPortfolios')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.ListPortfolios'] },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListPortfoliosInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPortfoliosOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListPortfoliosForProductRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct',
  description: 'Lists all portfolios that the specified product is associated with.',
  operationId: 'ListPortfoliosForProduct',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListPortfoliosForProduct')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.ListPortfoliosForProduct'],
            },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListPortfoliosForProductInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPortfoliosForProductOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListPrincipalsForPortfolioRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio',
    description:
      'Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.',
    operationId: 'ListPrincipalsForPortfolio',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ListPrincipalsForPortfolio')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ListPrincipalsForPortfolio'],
              },
            },
          }),
      }),
      query: z.object({
        PageSize: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageSize',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        PageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListPrincipalsForPortfolioInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListPrincipalsForPortfolioOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWS242ServiceCatalogServiceListProvisionedProductPlansRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans',
    description:
      'Lists the plans for the specified provisioned product or all plans to which the user has access.',
    operationId: 'ListProvisionedProductPlans',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ListProvisionedProductPlans')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ListProvisionedProductPlans'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListProvisionedProductPlansInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListProvisionedProductPlansOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts',
  description:
    'Lists all provisioning artifacts (also known as versions) for the specified product.',
  operationId: 'ListProvisioningArtifacts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListProvisioningArtifacts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.ListProvisioningArtifacts'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListProvisioningArtifactsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProvisioningArtifactsOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListProvisioningArtifactsForServiceActionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction',
    description:
      'Lists all provisioning artifacts (also known as versions) for the specified self-service action.',
    operationId: 'ListProvisioningArtifactsForServiceAction',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction'],
              },
            },
          }),
      }),
      query: z.object({
        PageSize: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageSize',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        PageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ListProvisioningArtifactsForServiceActionInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListProvisioningArtifactsForServiceActionOutputSchema },
        },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory',
  description: 'Lists the specified requests or all performed requests.',
  operationId: 'ListRecordHistory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListRecordHistory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.ListRecordHistory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRecordHistoryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRecordHistoryOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListResourcesForTagOptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption',
  description: 'Lists the resources associated with the specified TagOption.',
  operationId: 'ListResourcesForTagOption',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListResourcesForTagOption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.ListResourcesForTagOption'],
            },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListResourcesForTagOptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourcesForTagOptionOutputSchema } },
    },
    480: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListServiceActionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions',
  description: 'Lists all self-service actions.',
  operationId: 'ListServiceActions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListServiceActions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.ListServiceActions'] },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServiceActionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServiceActionsOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceListServiceActionsForProvisioningArtifactRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact',
    description:
      'Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.',
    operationId: 'ListServiceActionsForProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact'],
              },
            },
          }),
      }),
      query: z.object({
        PageSize: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageSize',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        PageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'PageToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ListServiceActionsForProvisioningArtifactInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListServiceActionsForProvisioningArtifactOutputSchema },
        },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceListStackInstancesForProvisionedProductRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct',
    description:
      'Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. ',
    operationId: 'ListStackInstancesForProvisionedProduct',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ListStackInstancesForProvisionedProductInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListStackInstancesForProvisionedProductOutputSchema },
        },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceListTagOptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions',
  description: 'Lists the specified TagOptions or all TagOptions.',
  operationId: 'ListTagOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ListTagOptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.ListTagOptions'] },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagOptionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagOptionsOutputSchema } },
    },
    480: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceNotifyProvisionProductEngineWorkflowResultRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult',
    description: ' Notifies the result of the provisioning engine execution. ',
    operationId: 'NotifyProvisionProductEngineWorkflowResult',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: NotifyProvisionProductEngineWorkflowResultInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: NotifyProvisionProductEngineWorkflowResultOutputSchema },
        },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceNotifyTerminateProvisionedProductEngineWorkflowResultRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult',
    description: ' Notifies the result of the terminate engine execution. ',
    operationId: 'NotifyTerminateProvisionedProductEngineWorkflowResult',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal(
            'AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult',
          )
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: NotifyTerminateProvisionedProductEngineWorkflowResultInputSchema,
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
            schema: NotifyTerminateProvisionedProductEngineWorkflowResultOutputSchema,
          },
        },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceNotifyUpdateProvisionedProductEngineWorkflowResultRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult',
    description: ' Notifies the result of the update engine execution. ',
    operationId: 'NotifyUpdateProvisionedProductEngineWorkflowResult',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult',
                ],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: NotifyUpdateProvisionedProductEngineWorkflowResultInputSchema,
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
            schema: NotifyUpdateProvisionedProductEngineWorkflowResultOutputSchema,
          },
        },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceProvisionProductRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct',
  description:
    '<p> Provisions the specified product. </p> <p> A provisioned product is a resourced instance of a product. For example, provisioning a product that\'s based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>. </p> <p> If the request contains a tag key with an empty list of values, there\'s a tag conflict for that key. Don\'t include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". </p> <note> <p> When provisioning a product that\'s been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>',
  operationId: 'ProvisionProduct',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ProvisionProduct')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.ProvisionProduct'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProvisionProductInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ProvisionProductOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'DuplicateResourceException',
      content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceRejectPortfolioShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare',
  description: 'Rejects an offer to share the specified portfolio.',
  operationId: 'RejectPortfolioShare',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.RejectPortfolioShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.RejectPortfolioShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RejectPortfolioShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectPortfolioShareOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceScanProvisionedProductsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts',
  description:
    '<p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>',
  operationId: 'ScanProvisionedProducts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.ScanProvisionedProducts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.ScanProvisionedProducts'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ScanProvisionedProductsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScanProvisionedProductsOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceSearchProductsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts',
  description: 'Gets information about the products to which the caller has access.',
  operationId: 'SearchProducts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.SearchProducts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.SearchProducts'] },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchProductsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchProductsOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceSearchProductsAsAdminRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin',
  description: 'Gets information about the products for the specified portfolio or all products.',
  operationId: 'SearchProductsAsAdmin',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.SearchProductsAsAdmin')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.SearchProductsAsAdmin'] },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchProductsAsAdminInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchProductsAsAdminOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceSearchProvisionedProductsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts',
  description: 'Gets information about the provisioned products that meet the specified criteria.',
  operationId: 'SearchProvisionedProducts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.SearchProvisionedProducts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.SearchProvisionedProducts'],
            },
          },
        }),
    }),
    query: z.object({
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchProvisionedProductsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchProvisionedProductsOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceTerminateProvisionedProductRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct',
    description:
      '<p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>',
    operationId: 'TerminateProvisionedProduct',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.TerminateProvisionedProduct')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.TerminateProvisionedProduct'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: TerminateProvisionedProductInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: TerminateProvisionedProductOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceUpdateConstraintRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint',
  description: 'Updates the specified constraint.',
  operationId: 'UpdateConstraint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.UpdateConstraint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.UpdateConstraint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConstraintInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConstraintOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio',
  description:
    '<p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>',
  operationId: 'UpdatePortfolio',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.UpdatePortfolio')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.UpdatePortfolio'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePortfolioInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePortfolioOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
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
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceUpdatePortfolioShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare',
  description:
    '<p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing or Principal sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>',
  operationId: 'UpdatePortfolioShare',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.UpdatePortfolioShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.UpdatePortfolioShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePortfolioShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePortfolioShareOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    482: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceUpdateProductRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct',
  description: 'Updates the specified product.',
  operationId: 'UpdateProduct',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.UpdateProduct')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.UpdateProduct'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateProductInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProductOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    482: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct',
  description:
    '<p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>',
  operationId: 'UpdateProvisionedProduct',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.UpdateProvisionedProduct')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWS242ServiceCatalogService.UpdateProvisionedProduct'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateProvisionedProductInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProvisionedProductOutputSchema } },
    },
    480: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisionedProductPropertiesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties',
    description: 'Requests updates to the properties of the specified provisioned product.',
    operationId: 'UpdateProvisionedProductProperties',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.UpdateProvisionedProductProperties')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.UpdateProvisionedProductProperties'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateProvisionedProductPropertiesInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateProvisionedProductPropertiesOutputSchema } },
      },
      480: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidStateException',
        content: { 'application/json': { schema: InvalidStateExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWS242ServiceCatalogServiceUpdateProvisioningArtifactRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact',
    description:
      '<p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>',
    operationId: 'UpdateProvisioningArtifact',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWS242ServiceCatalogService.UpdateProvisioningArtifact')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWS242ServiceCatalogService.UpdateProvisioningArtifact'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateProvisioningArtifactInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateProvisioningArtifactOutputSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidParametersException',
        content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWS242ServiceCatalogServiceUpdateServiceActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction',
  description: 'Updates a self-service action.',
  operationId: 'UpdateServiceAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.UpdateServiceAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.UpdateServiceAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceActionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceActionOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWS242ServiceCatalogServiceUpdateTagOptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption',
  description: 'Updates the specified TagOption.',
  operationId: 'UpdateTagOption',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWS242ServiceCatalogService.UpdateTagOption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWS242ServiceCatalogService.UpdateTagOption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTagOptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTagOptionOutputSchema } },
    },
    480: {
      description: 'TagOptionNotMigratedException',
      content: { 'application/json': { schema: TagOptionNotMigratedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'DuplicateResourceException',
      content: { 'application/json': { schema: DuplicateResourceExceptionSchema } },
    },
    483: {
      description: 'InvalidParametersException',
      content: { 'application/json': { schema: InvalidParametersExceptionSchema } },
    },
  },
})
