import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const BooleanSchema = z.boolean().openapi('Boolean')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const IntegerSchema = z.int().openapi('Integer')

const ParameterDefinitionSchema = z
  .object({
    AllowedPattern: StringSchema.exactOptional().openapi({
      xml: { name: 'allowedPattern' },
      description: 'A regular expression that represents the patterns to allow for String types.',
    }),
    AllowedValues: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'allowedValues' },
      description: 'An array containing the list of values allowed for the parameter.',
    }),
    ConstraintDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'constraintDescription' },
      description:
        '<p>A string that explains a constraint when the constraint is violated. For example, without a constraint description,\n a parameter that has an allowed pattern of [A-Za-z0-9]+ displays the following error message when the user\n specifies an invalid value:</p><p>\n Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+\n </p><p>By adding a constraint description, such as "must contain only uppercase and lowercase letters and numbers," you can display\n the following customized error message:</p><p>\n Malformed input-Parameter MyParameter must contain only uppercase and lowercase letters and numbers.\n </p>',
    }),
    DefaultValue: StringSchema.exactOptional().openapi({
      xml: { name: 'defaultValue' },
      description:
        'A value of the appropriate type for the template to use if no value is specified when a stack is created.\n If you define constraints for the parameter, you must specify a value that adheres to those constraints.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'A string of up to 4,000 characters that describes the parameter.',
    }),
    MaxLength: IntegerSchema.exactOptional().openapi({
      xml: { name: 'maxLength' },
      description:
        'An integer value that determines the largest number of characters that you want to allow for String types.',
    }),
    MaxValue: IntegerSchema.exactOptional().openapi({
      xml: { name: 'maxValue' },
      description:
        'A numeric value that determines the largest numeric value that you want to allow for Number types.',
    }),
    MinLength: IntegerSchema.exactOptional().openapi({
      xml: { name: 'minLength' },
      description:
        'An integer value that determines the smallest number of characters that you want to allow for String types.',
    }),
    MinValue: IntegerSchema.exactOptional().openapi({
      xml: { name: 'minValue' },
      description:
        'A numeric value that determines the smallest numeric value that you want to allow for Number types.',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description: 'The name of the parameter.',
    }),
    NoEcho: BooleanSchema.exactOptional().openapi({
      xml: { name: 'noEcho' },
      description:
        'Whether to mask the parameter value whenever anyone makes a call that describes the stack. If you set the\n value to true, the parameter value is masked with asterisks (*****).',
    }),
    ReferencedByResources: ListOfStringSchema.openapi({
      xml: { name: 'referencedByResources' },
      description: 'A list of AWS SAM resources that use this parameter.',
    }),
    Type: StringSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description:
        '<p>The type of the parameter.</p><p>Valid values: String | Number | List&lt;Number> | CommaDelimitedList\n </p><p>\n String: A literal string.</p><p>For example, users can specify "MyUserName".</p><p>\n Number: An integer or float. AWS CloudFormation validates the parameter value as a number. However, when you use the\n parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a string.</p><p>For example, users might specify "8888".</p><p>\n List&lt;Number>: An array of integers or floats that are separated by commas. AWS CloudFormation validates the parameter value as numbers. However, when\n you use the parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a list of strings.</p><p>For example, users might specify "80,20", and then Ref results in ["80","20"].</p><p>\n CommaDelimitedList: An array of literal strings that are separated by commas. The total number of strings should be one more than the total number of commas.\n Also, each member string is space-trimmed.</p><p>For example, users might specify "test,dev,prod", and then Ref results in ["test","dev","prod"].</p>',
    }),
  })
  .openapi({
    required: ['ReferencedByResources', 'Name'],
    description: 'Parameters supported by the application.',
  })
  .openapi('ParameterDefinition')

const ListOfParameterDefinitionSchema = z
  .array(ParameterDefinitionSchema)
  .openapi('ListOfParameterDefinition')

const CapabilitySchema = z
  .enum([
    'CAPABILITY_IAM',
    'CAPABILITY_NAMED_IAM',
    'CAPABILITY_AUTO_EXPAND',
    'CAPABILITY_RESOURCE_POLICY',
  ])
  .openapi({ description: 'Values that must be specified in order to deploy some applications.' })
  .openapi('Capability')

const ListOfCapabilitySchema = z.array(CapabilitySchema).openapi('ListOfCapability')

const VersionSchema = z
  .object({
    ApplicationId: StringSchema.openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    CreationTime: StringSchema.openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    ParameterDefinitions: ListOfParameterDefinitionSchema.openapi({
      xml: { name: 'parameterDefinitions' },
      description: 'An array of parameter types supported by the application.',
    }),
    RequiredCapabilities: ListOfCapabilitySchema.openapi({
      xml: { name: 'requiredCapabilities' },
      description:
        '<p>A list of values that you must specify before you can deploy certain applications.\n Some applications might include resources that can affect permissions in your AWS\n account, for example, by creating new AWS Identity and Access Management (IAM) users.\n For those applications, you must explicitly acknowledge their capabilities by\n specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,\n CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or\n CAPABILITY_NAMED_IAM:\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.\n If the application contains IAM resources, you can specify either CAPABILITY_IAM\n or CAPABILITY_NAMED_IAM. If the application contains IAM resources\n with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS::TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify\n CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review\n all permissions associated with the application before deploying. If you don\'t specify\n this parameter for an application that requires capabilities, the call will fail.</p>',
    }),
    ResourcesSupported: BooleanSchema.openapi({
      xml: { name: 'resourcesSupported' },
      description:
        'Whether all of the AWS resources contained in this application are supported in the region\n in which it is being retrieved.',
    }),
    SemanticVersion: StringSchema.openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
    SourceCodeArchiveUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeArchiveUrl' },
      description:
        '<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>',
    }),
    SourceCodeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeUrl' },
      description:
        'A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.',
    }),
    TemplateUrl: StringSchema.openapi({
      xml: { name: 'templateUrl' },
      description: 'A link to the packaged AWS SAM template of your application.',
    }),
  })
  .openapi({
    required: [
      'TemplateUrl',
      'ParameterDefinitions',
      'ResourcesSupported',
      'CreationTime',
      'RequiredCapabilities',
      'ApplicationId',
      'SemanticVersion',
    ],
    description: 'Application version details.',
  })
  .openapi('Version')

const CreateApplicationResponseSchema = z
  .object({
    ApplicationId: StringSchema.exactOptional().openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    Author: StringSchema.exactOptional().openapi({
      xml: { name: 'author' },
      description:
        '<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>',
    }),
    CreationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description:
        '<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>',
    }),
    HomePageUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'homePageUrl' },
      description:
        'A URL with more information about the application, for example the location of your GitHub repository for the application.',
    }),
    IsVerifiedAuthor: BooleanSchema.exactOptional().openapi({
      xml: { name: 'isVerifiedAuthor' },
      description:
        "Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.",
    }),
    Labels: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'labels' },
      description:
        '<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";</p>',
    }),
    LicenseUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'licenseUrl' },
      description:
        '<p>A link to a license file of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p>',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description:
        '<p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\\\-]+";</p>',
    }),
    ReadmeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'readmeUrl' },
      description:
        '<p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>',
    }),
    SpdxLicenseId: StringSchema.exactOptional().openapi({
      xml: { name: 'spdxLicenseId' },
      description: 'A valid identifier from https://spdx.org/licenses/.',
    }),
    VerifiedAuthorUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'verifiedAuthorUrl' },
      description:
        'The URL to the public profile of a verified author. This URL is submitted by the author.',
    }),
    Version: VersionSchema.exactOptional().openapi({
      xml: { name: 'version' },
      description: 'Version information about the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateApplicationResponse')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const CreateApplicationVersionResponseSchema = z
  .object({
    ApplicationId: StringSchema.exactOptional().openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    CreationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    ParameterDefinitions: ListOfParameterDefinitionSchema.exactOptional().openapi({
      xml: { name: 'parameterDefinitions' },
      description: 'An array of parameter types supported by the application.',
    }),
    RequiredCapabilities: ListOfCapabilitySchema.exactOptional().openapi({
      xml: { name: 'requiredCapabilities' },
      description:
        '<p>A list of values that you must specify before you can deploy certain applications.\n Some applications might include resources that can affect permissions in your AWS\n account, for example, by creating new AWS Identity and Access Management (IAM) users.\n For those applications, you must explicitly acknowledge their capabilities by\n specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,\n CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or\n CAPABILITY_NAMED_IAM:\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.\n If the application contains IAM resources, you can specify either CAPABILITY_IAM\n or CAPABILITY_NAMED_IAM. If the application contains IAM resources\n with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS::TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify\n CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review\n all permissions associated with the application before deploying. If you don\'t specify\n this parameter for an application that requires capabilities, the call will fail.</p>',
    }),
    ResourcesSupported: BooleanSchema.exactOptional().openapi({
      xml: { name: 'resourcesSupported' },
      description:
        'Whether all of the AWS resources contained in this application are supported in the region\n in which it is being retrieved.',
    }),
    SemanticVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
    SourceCodeArchiveUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeArchiveUrl' },
      description:
        '<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>',
    }),
    SourceCodeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeUrl' },
      description:
        'A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.',
    }),
    TemplateUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'templateUrl' },
      description: 'A link to the packaged AWS SAM template of your application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateApplicationVersionResponse')

const CreateCloudFormationChangeSetResponseSchema = z
  .object({
    ApplicationId: StringSchema.exactOptional().openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    ChangeSetId: StringSchema.exactOptional().openapi({
      xml: { name: 'changeSetId' },
      description:
        '<p>The Amazon Resource Name (ARN) of the change set.</p><p>Length constraints: Minimum length of 1.</p><p>Pattern: ARN:[-a-zA-Z0-9:/]*</p>',
    }),
    SemanticVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
    StackId: StringSchema.exactOptional().openapi({
      xml: { name: 'stackId' },
      description: 'The unique ID of the stack.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateCloudFormationChangeSetResponse')

const ParameterValueSchema = z
  .object({
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description:
        "The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation\n uses the default value that is specified in your template.",
    }),
    Value: StringSchema.openapi({
      xml: { name: 'value' },
      description: 'The input value associated with the parameter.',
    }),
  })
  .openapi({ required: ['Value', 'Name'], description: 'Parameter value of the application.' })
  .openapi('ParameterValue')

const RollbackTriggerSchema = z
  .object({
    Arn: StringSchema.openapi({
      xml: { name: 'arn' },
      description:
        'This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>\n </i> Data Type.',
    }),
    Type: StringSchema.openapi({
      xml: { name: 'type' },
      description:
        'This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>\n </i> Data Type.',
    }),
  })
  .openapi({
    required: ['Type', 'Arn'],
    description:
      'This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackTrigger">RollbackTrigger</a>\n </i> Data Type.',
  })
  .openapi('RollbackTrigger')

const ListOfRollbackTriggerSchema = z.array(RollbackTriggerSchema).openapi('ListOfRollbackTrigger')

const TagSchema = z
  .object({
    Key: StringSchema.openapi({
      xml: { name: 'key' },
      description:
        'This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>\n </i> Data Type.',
    }),
    Value: StringSchema.openapi({
      xml: { name: 'value' },
      description:
        'This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">\n Tag</a>\n </i>\n Data Type.',
    }),
  })
  .openapi({
    required: ['Value', 'Key'],
    description:
      'This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/Tag">Tag</a>\n </i> Data Type.',
  })
  .openapi('Tag')

const StatusSchema = z.enum(['PREPARING', 'ACTIVE', 'EXPIRED']).openapi('Status')

const CreateCloudFormationTemplateResponseSchema = z
  .object({
    ApplicationId: StringSchema.exactOptional().openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    CreationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    ExpirationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'expirationTime' },
      description:
        'The date and time this template expires. Templates\n expire 1 hour after creation.',
    }),
    SemanticVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
    Status: StatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        '<p>Status of the template creation workflow.</p><p>Possible values: PREPARING | ACTIVE | EXPIRED\n </p>',
    }),
    TemplateId: StringSchema.exactOptional().openapi({
      xml: { name: 'templateId' },
      description:
        '<p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}</p>',
    }),
    TemplateUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'templateUrl' },
      description:
        'A link to the template that can be used to deploy the application using\n AWS CloudFormation.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateCloudFormationTemplateResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const GetApplicationResponseSchema = z
  .object({
    ApplicationId: StringSchema.exactOptional().openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    Author: StringSchema.exactOptional().openapi({
      xml: { name: 'author' },
      description:
        '<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>',
    }),
    CreationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description:
        '<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>',
    }),
    HomePageUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'homePageUrl' },
      description:
        'A URL with more information about the application, for example the location of your GitHub repository for the application.',
    }),
    IsVerifiedAuthor: BooleanSchema.exactOptional().openapi({
      xml: { name: 'isVerifiedAuthor' },
      description:
        "Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.",
    }),
    Labels: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'labels' },
      description:
        '<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";</p>',
    }),
    LicenseUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'licenseUrl' },
      description:
        '<p>A link to a license file of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p>',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description:
        '<p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\\\-]+";</p>',
    }),
    ReadmeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'readmeUrl' },
      description:
        '<p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>',
    }),
    SpdxLicenseId: StringSchema.exactOptional().openapi({
      xml: { name: 'spdxLicenseId' },
      description: 'A valid identifier from https://spdx.org/licenses/.',
    }),
    VerifiedAuthorUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'verifiedAuthorUrl' },
      description:
        'The URL to the public profile of a verified author. This URL is submitted by the author.',
    }),
    Version: VersionSchema.exactOptional().openapi({
      xml: { name: 'version' },
      description: 'Version information about the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetApplicationResponse')

const ApplicationPolicyStatementSchema = z
  .object({
    Actions: ListOfStringSchema.openapi({
      xml: { name: 'actions' },
      description:
        'For the list of actions supported for this operation, see <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application \n Permissions</a>.',
    }),
    PrincipalOrgIDs: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'principalOrgIDs' },
      description:
        'An array of PrinciplalOrgIDs, which corresponds to AWS IAM <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#principal-org-id">aws:PrincipalOrgID</a> global condition key.',
    }),
    Principals: ListOfStringSchema.openapi({
      xml: { name: 'principals' },
      description: 'An array of AWS account IDs, or * to make the application public.',
    }),
    StatementId: StringSchema.exactOptional().openapi({
      xml: { name: 'statementId' },
      description: 'A unique ID for the statement.',
    }),
  })
  .openapi({
    required: ['Principals', 'Actions'],
    description: 'Policy statement applied to the application.',
  })
  .openapi('ApplicationPolicyStatement')

const ListOfApplicationPolicyStatementSchema = z
  .array(ApplicationPolicyStatementSchema)
  .openapi('ListOfApplicationPolicyStatement')

const GetApplicationPolicyResponseSchema = z
  .object({
    Statements: ListOfApplicationPolicyStatementSchema.exactOptional().openapi({
      xml: { name: 'statements' },
      description: 'An array of policy statements applied to the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetApplicationPolicyResponse')

const GetCloudFormationTemplateResponseSchema = z
  .object({
    ApplicationId: StringSchema.exactOptional().openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    CreationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    ExpirationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'expirationTime' },
      description:
        'The date and time this template expires. Templates\n expire 1 hour after creation.',
    }),
    SemanticVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
    Status: StatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        '<p>Status of the template creation workflow.</p><p>Possible values: PREPARING | ACTIVE | EXPIRED\n </p>',
    }),
    TemplateId: StringSchema.exactOptional().openapi({
      xml: { name: 'templateId' },
      description:
        '<p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}</p>',
    }),
    TemplateUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'templateUrl' },
      description:
        'A link to the template that can be used to deploy the application using\n AWS CloudFormation.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCloudFormationTemplateResponse')

const ApplicationDependencySummarySchema = z
  .object({
    ApplicationId: StringSchema.openapi({
      xml: { name: 'applicationId' },
      description: 'The Amazon Resource Name (ARN) of the nested application.',
    }),
    SemanticVersion: StringSchema.openapi({
      xml: { name: 'semanticVersion' },
      description: 'The semantic version of the nested application.',
    }),
  })
  .openapi({
    required: ['ApplicationId', 'SemanticVersion'],
    description: 'A nested application summary.',
  })
  .openapi('ApplicationDependencySummary')

const ListOfApplicationDependencySummarySchema = z
  .array(ApplicationDependencySummarySchema)
  .openapi('ListOfApplicationDependencySummary')

const ListApplicationDependenciesResponseSchema = z
  .object({
    Dependencies: ListOfApplicationDependencySummarySchema.exactOptional().openapi({
      xml: { name: 'dependencies' },
      description: 'An array of application summaries nested in the application.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'The token to request the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationDependenciesResponse')

const VersionSummarySchema = z
  .object({
    ApplicationId: StringSchema.openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    CreationTime: StringSchema.openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    SemanticVersion: StringSchema.openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
    SourceCodeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeUrl' },
      description:
        'A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.',
    }),
  })
  .openapi({
    required: ['CreationTime', 'ApplicationId', 'SemanticVersion'],
    description: 'An application version summary.',
  })
  .openapi('VersionSummary')

const ListOfVersionSummarySchema = z.array(VersionSummarySchema).openapi('ListOfVersionSummary')

const ListApplicationVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'The token to request the next page of results.',
    }),
    Versions: ListOfVersionSummarySchema.exactOptional().openapi({
      xml: { name: 'versions' },
      description: 'An array of version summaries for the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationVersionsResponse')

const ApplicationSummarySchema = z
  .object({
    ApplicationId: StringSchema.openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    Author: StringSchema.openapi({
      xml: { name: 'author' },
      description:
        '<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>',
    }),
    CreationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    Description: StringSchema.openapi({
      xml: { name: 'description' },
      description:
        '<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>',
    }),
    HomePageUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'homePageUrl' },
      description:
        'A URL with more information about the application, for example the location of your GitHub repository for the application.',
    }),
    Labels: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'labels' },
      description:
        '<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";</p>',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description:
        '<p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\\\-]+";</p>',
    }),
    SpdxLicenseId: StringSchema.exactOptional().openapi({
      xml: { name: 'spdxLicenseId' },
      description:
        'A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>.',
    }),
  })
  .openapi({
    required: ['Description', 'Author', 'ApplicationId', 'Name'],
    description: 'Summary of details about the application.',
  })
  .openapi('ApplicationSummary')

const ListOfApplicationSummarySchema = z
  .array(ApplicationSummarySchema)
  .openapi('ListOfApplicationSummary')

const ListApplicationsResponseSchema = z
  .object({
    Applications: ListOfApplicationSummarySchema.exactOptional().openapi({
      xml: { name: 'applications' },
      description: 'An array of application summaries.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'The token to request the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationsResponse')

const PutApplicationPolicyResponseSchema = z
  .object({
    Statements: ListOfApplicationPolicyStatementSchema.exactOptional().openapi({
      xml: { name: 'statements' },
      description: 'An array of policy statements applied to the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PutApplicationPolicyResponse')

const UpdateApplicationResponseSchema = z
  .object({
    ApplicationId: StringSchema.exactOptional().openapi({
      xml: { name: 'applicationId' },
      description: 'The application Amazon Resource Name (ARN).',
    }),
    Author: StringSchema.exactOptional().openapi({
      xml: { name: 'author' },
      description:
        '<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>',
    }),
    CreationTime: StringSchema.exactOptional().openapi({
      xml: { name: 'creationTime' },
      description: 'The date and time this resource was created.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description:
        '<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>',
    }),
    HomePageUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'homePageUrl' },
      description:
        'A URL with more information about the application, for example the location of your GitHub repository for the application.',
    }),
    IsVerifiedAuthor: BooleanSchema.exactOptional().openapi({
      xml: { name: 'isVerifiedAuthor' },
      description:
        "Whether the author of this application has been verified. This means means that AWS has made a good faith review, as a reasonable and prudent service provider, of the information provided by the requester and has confirmed that the requester's identity is as claimed.",
    }),
    Labels: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'labels' },
      description:
        '<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";</p>',
    }),
    LicenseUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'licenseUrl' },
      description:
        '<p>A link to a license file of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p>',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description:
        '<p>The name of the application.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\\\-]+";</p>',
    }),
    ReadmeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'readmeUrl' },
      description:
        '<p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>',
    }),
    SpdxLicenseId: StringSchema.exactOptional().openapi({
      xml: { name: 'spdxLicenseId' },
      description: 'A valid identifier from https://spdx.org/licenses/.',
    }),
    VerifiedAuthorUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'verifiedAuthorUrl' },
      description:
        'The URL to the public profile of a verified author. This URL is submitted by the author.',
    }),
    Version: VersionSchema.exactOptional().openapi({
      xml: { name: 'version' },
      description: 'Version information about the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateApplicationResponse')

const CreateApplicationRequestSchema = z
  .object({
    Author: StringSchema.openapi({
      xml: { name: 'author' },
      description:
        '<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>',
    }),
    Description: StringSchema.openapi({
      xml: { name: 'description' },
      description:
        '<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>',
    }),
    HomePageUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'homePageUrl' },
      description:
        'A URL with more information about the application, for example the location of your GitHub repository for the application.',
    }),
    Labels: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'labels' },
      description:
        '<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";</p>',
    }),
    LicenseBody: StringSchema.exactOptional().openapi({
      xml: { name: 'licenseBody' },
      description:
        '<p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.\n The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>',
    }),
    LicenseUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'licenseUrl' },
      description:
        '<p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description:
        '<p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\\\-]+";</p>',
    }),
    ReadmeBody: StringSchema.exactOptional().openapi({
      xml: { name: 'readmeBody' },
      description:
        '<p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.\n The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>',
    }),
    ReadmeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'readmeUrl' },
      description:
        '<p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>',
    }),
    SemanticVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
    SourceCodeArchiveUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeArchiveUrl' },
      description:
        '<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>',
    }),
    SourceCodeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeUrl' },
      description:
        'A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.',
    }),
    SpdxLicenseId: StringSchema.exactOptional().openapi({
      xml: { name: 'spdxLicenseId' },
      description:
        'A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>.',
    }),
    TemplateBody: StringSchema.exactOptional().openapi({
      xml: { name: 'templateBody' },
      description:
        '<p>The local raw packaged AWS SAM template file of your application.\n The file has the format file://&lt;path>/&lt;filename>.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>',
    }),
    TemplateUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'templateUrl' },
      description:
        '<p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>',
    }),
  })
  .openapi({ required: ['Description', 'Name', 'Author'], title: 'CreateApplicationRequest' })
  .openapi('CreateApplicationRequest')

const CreateApplicationVersionRequestSchema = z
  .object({
    SourceCodeArchiveUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeArchiveUrl' },
      description:
        '<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>',
    }),
    SourceCodeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceCodeUrl' },
      description:
        'A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.',
    }),
    TemplateBody: StringSchema.exactOptional().openapi({
      xml: { name: 'templateBody' },
      description: 'The raw packaged AWS SAM template of your application.',
    }),
    TemplateUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'templateUrl' },
      description: 'A link to the packaged AWS SAM template of your application.',
    }),
  })
  .openapi({ title: 'CreateApplicationVersionRequest', required: [] })
  .openapi('CreateApplicationVersionRequest')

const ListOfParameterValueSchema = z.array(ParameterValueSchema).openapi('ListOfParameterValue')

const RollbackConfigurationSchema = z
  .object({
    MonitoringTimeInMinutes: IntegerSchema.exactOptional().openapi({
      xml: { name: 'monitoringTimeInMinutes' },
      description:
        'This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>\n </i> Data Type.',
    }),
    RollbackTriggers: ListOfRollbackTriggerSchema.exactOptional().openapi({
      xml: { name: 'rollbackTriggers' },
      description:
        'This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>\n </i> Data Type.',
    }),
  })
  .openapi({
    description:
      'This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>\n </i> Data Type.',
    required: [],
  })
  .openapi('RollbackConfiguration')

const ListOfTagSchema = z.array(TagSchema).openapi('ListOfTag')

const CreateCloudFormationChangeSetRequestSchema = z
  .object({
    Capabilities: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'capabilities' },
      description:
        '<p>A list of values that you must specify before you can deploy certain applications.\n Some applications might include resources that can affect permissions in your AWS\n account, for example, by creating new AWS Identity and Access Management (IAM) users.\n For those applications, you must explicitly acknowledge their capabilities by\n specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,\n CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or\n CAPABILITY_NAMED_IAM:\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.\n If the application contains IAM resources, you can specify either CAPABILITY_IAM\n or CAPABILITY_NAMED_IAM. If the application contains IAM resources\n with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS:TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify\n CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review\n all permissions associated with the application before deploying. If you don\'t specify\n this parameter for an application that requires capabilities, the call will fail.</p>',
    }),
    ChangeSetName: StringSchema.exactOptional().openapi({
      xml: { name: 'changeSetName' },
      description:
        'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
    }),
    ClientToken: StringSchema.exactOptional().openapi({
      xml: { name: 'clientToken' },
      description:
        'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description:
        'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
    }),
    NotificationArns: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'notificationArns' },
      description:
        'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
    }),
    ParameterOverrides: ListOfParameterValueSchema.exactOptional().openapi({
      xml: { name: 'parameterOverrides' },
      description: 'A list of parameter values for the parameters of the application.',
    }),
    ResourceTypes: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'resourceTypes' },
      description:
        'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
    }),
    RollbackConfiguration: RollbackConfigurationSchema.exactOptional().openapi({
      xml: { name: 'rollbackConfiguration' },
      description:
        'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
    }),
    SemanticVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
    StackName: StringSchema.openapi({
      xml: { name: 'stackName' },
      description:
        'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
    }),
    Tags: ListOfTagSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description:
        'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
    }),
    TemplateId: StringSchema.exactOptional().openapi({
      xml: { name: 'templateId' },
      description:
        '<p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}</p>',
    }),
  })
  .openapi({ required: ['StackName'], title: 'CreateCloudFormationChangeSetRequest' })
  .openapi('CreateCloudFormationChangeSetRequest')

const CreateCloudFormationTemplateRequestSchema = z
  .object({
    SemanticVersion: StringSchema.exactOptional().openapi({
      xml: { name: 'semanticVersion' },
      description:
        '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
    }),
  })
  .openapi({ title: 'CreateCloudFormationTemplateRequest', required: [] })
  .openapi('CreateCloudFormationTemplateRequest')

const DeleteApplicationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const GetApplicationPolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetApplicationPolicyRequest' })
  .openapi('GetApplicationPolicyRequest')

const GetApplicationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetApplicationRequest' })
  .openapi('GetApplicationRequest')

const GetCloudFormationTemplateRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetCloudFormationTemplateRequest' })
  .openapi('GetCloudFormationTemplateRequest')

const MaxItemsSchema = z.int().min(1).max(100).openapi('MaxItems')

const ListApplicationDependenciesRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListApplicationDependenciesRequest' })
  .openapi('ListApplicationDependenciesRequest')

const ListApplicationVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListApplicationVersionsRequest' })
  .openapi('ListApplicationVersionsRequest')

const ListApplicationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListApplicationsRequest' })
  .openapi('ListApplicationsRequest')

const PutApplicationPolicyRequestSchema = z
  .object({
    Statements: ListOfApplicationPolicyStatementSchema.openapi({
      xml: { name: 'statements' },
      description: 'An array of policy statements applied to the application.',
    }),
  })
  .openapi({ required: ['Statements'], title: 'PutApplicationPolicyRequest' })
  .openapi('PutApplicationPolicyRequest')

const UnshareApplicationRequestSchema = z
  .object({
    OrganizationId: StringSchema.openapi({
      xml: { name: 'organizationId' },
      description: 'The AWS Organization ID to unshare the application from.',
    }),
  })
  .openapi({ required: ['OrganizationId'], title: 'UnshareApplicationRequest' })
  .openapi('UnshareApplicationRequest')

const UpdateApplicationRequestSchema = z
  .object({
    Author: StringSchema.exactOptional().openapi({
      xml: { name: 'author' },
      description:
        '<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description:
        '<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>',
    }),
    HomePageUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'homePageUrl' },
      description:
        'A URL with more information about the application, for example the location of your GitHub repository for the application.',
    }),
    Labels: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'labels' },
      description:
        '<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";</p>',
    }),
    ReadmeBody: StringSchema.exactOptional().openapi({
      xml: { name: 'readmeBody' },
      description:
        '<p>A text readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>',
    }),
    ReadmeUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'readmeUrl' },
      description:
        '<p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>',
    }),
  })
  .openapi({ title: 'UpdateApplicationRequest', required: [] })
  .openapi('UpdateApplicationRequest')

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

export const getApplicationsRoute = createRoute({
  method: 'get',
  path: '/applications',
  description: 'Lists applications owned by the requester.',
  operationId: 'ListApplications',
  request: {
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
      maxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxItems',
            in: 'query',
            required: false,
            description: 'The total number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token to specify where to start paginating.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
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
      content: { 'application/json': { schema: ListApplicationsResponseSchema } },
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
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postApplicationsRoute = createRoute({
  method: 'post',
  path: '/applications',
  description:
    'Creates an application, optionally including an AWS SAM file to create the first application version in the same call.',
  operationId: 'CreateApplication',
  request: {
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
              author: z
                .string()
                .openapi({
                  description:
                    '<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>',
                }),
              description: z
                .string()
                .openapi({
                  description:
                    '<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>',
                }),
              homePageUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A URL with more information about the application, for example the location of your GitHub repository for the application.',
                }),
              labels: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";</p>',
                }),
              licenseBody: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A local text file that contains the license of the app that matches the spdxLicenseID value of your application.\n The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>',
                }),
              licenseUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.</p><p>Maximum size 5 MB</p><p>You can specify only one of licenseBody and licenseUrl; otherwise, an error results.</p>',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    '<p>The name of the application that you want to publish.</p><p>Minimum length=1. Maximum length=140</p><p>Pattern: "[a-zA-Z0-9\\\\-]+";</p>',
                }),
              readmeBody: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A local text readme file in Markdown language that contains a more detailed description of the application and how it works.\n The file has the format file://&lt;path>/&lt;filename>.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>',
                }),
              readmeUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p><p>You can specify only one of readmeBody and readmeUrl; otherwise, an error results.</p>',
                }),
              semanticVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
                }),
              sourceCodeArchiveUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>',
                }),
              sourceCodeUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.',
                }),
              spdxLicenseId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A valid identifier from <a href="https://spdx.org/licenses/">https://spdx.org/licenses/</a>.',
                }),
              templateBody: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The local raw packaged AWS SAM template file of your application.\n The file has the format file://&lt;path>/&lt;filename>.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>',
                }),
              templateUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A link to the S3 object containing the packaged AWS SAM template of your application.</p><p>You can specify only one of templateBody and templateUrl; otherwise an error results.</p>',
                }),
            })
            .openapi({ required: ['author', 'description', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const putApplicationsApplicationIdVersionsSemanticVersionRoute = createRoute({
  method: 'put',
  path: '/applications/{applicationId}/versions/{semanticVersion}',
  description: 'Creates an application version.',
  operationId: 'CreateApplicationVersion',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
      semanticVersion: z
        .string()
        .openapi({
          param: {
            name: 'semanticVersion',
            in: 'path',
            required: true,
            description: 'The semantic version of the new version.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sourceCodeArchiveUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>',
                }),
              sourceCodeUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.',
                }),
              templateBody: z
                .string()
                .exactOptional()
                .openapi({ description: 'The raw packaged AWS SAM template of your application.' }),
              templateUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A link to the packaged AWS SAM template of your application.',
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
      content: { 'application/json': { schema: CreateApplicationVersionResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postApplicationsApplicationIdChangesetsRoute = createRoute({
  method: 'post',
  path: '/applications/{applicationId}/changesets',
  description: 'Creates an AWS CloudFormation change set for the given application.',
  operationId: 'CreateCloudFormationChangeSet',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              capabilities: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list of values that you must specify before you can deploy certain applications.\n Some applications might include resources that can affect permissions in your AWS\n account, for example, by creating new AWS Identity and Access Management (IAM) users.\n For those applications, you must explicitly acknowledge their capabilities by\n specifying this parameter.</p><p>The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,\n CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.</p><p>The following resources require you to specify CAPABILITY_IAM or\n CAPABILITY_NAMED_IAM:\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">AWS::IAM::Group</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM::Policy</a>, and\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">AWS::IAM::Role</a>.\n If the application contains IAM resources, you can specify either CAPABILITY_IAM\n or CAPABILITY_NAMED_IAM. If the application contains IAM resources\n with custom names, you must specify CAPABILITY_NAMED_IAM.</p><p>The following resources require you to specify CAPABILITY_RESOURCE_POLICY:\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html">AWS::Lambda::Permission</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html">AWS::IAM:Policy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html">AWS::ApplicationAutoScaling::ScalingPolicy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html">AWS::S3::BucketPolicy</a>,\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html">AWS::SQS::QueuePolicy</a>, and\n <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html">AWS::SNS:TopicPolicy</a>.</p><p>Applications that contain one or more nested applications require you to specify\n CAPABILITY_AUTO_EXPAND.</p><p>If your application template contains any of the above resources, we recommend that you review\n all permissions associated with the application before deploying. If you don\'t specify\n this parameter for an application that requires capabilities, the call will fail.</p>',
                }),
              changeSetName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
                }),
              notificationArns: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
                }),
              parameterOverrides: z
                .array(ParameterValueSchema)
                .exactOptional()
                .openapi({
                  description: 'A list of parameter values for the parameters of the application.',
                }),
              resourceTypes: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
                }),
              rollbackConfiguration: z
                .object({
                  MonitoringTimeInMinutes: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'monitoringTimeInMinutes' },
                    description:
                      'This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>\n </i> Data Type.',
                  }),
                  RollbackTriggers: ListOfRollbackTriggerSchema.exactOptional().openapi({
                    xml: { name: 'rollbackTriggers' },
                    description:
                      'This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>\n </i> Data Type.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>\n </i> Data Type.',
                  required: [],
                }),
              semanticVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
                }),
              stackName: z
                .string()
                .openapi({
                  description:
                    'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
                }),
              tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'This property corresponds to the parameter of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/CreateChangeSet">CreateChangeSet</a>\n </i> API.',
                }),
              templateId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}</p>',
                }),
            })
            .openapi({ required: ['stackName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCloudFormationChangeSetResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postApplicationsApplicationIdTemplatesRoute = createRoute({
  method: 'post',
  path: '/applications/{applicationId}/templates',
  description: 'Creates an AWS CloudFormation template.',
  operationId: 'CreateCloudFormationTemplate',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              semanticVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The semantic version of the application:</p><p>\n <a href="https://semver.org/">https://semver.org/</a>\n </p>',
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
      content: { 'application/json': { schema: CreateCloudFormationTemplateResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdRoute = createRoute({
  method: 'get',
  path: '/applications/{applicationId}',
  description: 'Gets the specified application.',
  operationId: 'GetApplication',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      semanticVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'semanticVersion',
            in: 'query',
            required: false,
            description: 'The semantic version of the application to get.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApplicationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteApplicationsApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/applications/{applicationId}',
  description: 'Deletes the specified application.',
  operationId: 'DeleteApplication',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
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
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const patchApplicationsApplicationIdRoute = createRoute({
  method: 'patch',
  path: '/applications/{applicationId}',
  description: 'Updates the specified application.',
  operationId: 'UpdateApplication',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              author: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of the author publishing the app.</p><p>Minimum length=1. Maximum length=127.</p><p>Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";</p>',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The description of the application.</p><p>Minimum length=1. Maximum length=256</p>',
                }),
              homePageUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A URL with more information about the application, for example the location of your GitHub repository for the application.',
                }),
              labels: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Labels to improve discovery of apps in search results.</p><p>Minimum length=1. Maximum length=127. Maximum number of labels: 10</p><p>Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";</p>',
                }),
              readmeBody: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A text readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>',
                }),
              readmeUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.</p><p>Maximum size 5 MB</p>',
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
      content: { 'application/json': { schema: UpdateApplicationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdPolicyRoute = createRoute({
  method: 'get',
  path: '/applications/{applicationId}/policy',
  description: 'Retrieves the policy for the application.',
  operationId: 'GetApplicationPolicy',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApplicationPolicyResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const putApplicationsApplicationIdPolicyRoute = createRoute({
  method: 'put',
  path: '/applications/{applicationId}/policy',
  description:
    'Sets the permission policy for an application. For the list of actions supported for this operation, see\n <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application \n Permissions</a>\n .',
  operationId: 'PutApplicationPolicy',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              statements: z
                .array(ApplicationPolicyStatementSchema)
                .openapi({
                  description: 'An array of policy statements applied to the application.',
                }),
            })
            .openapi({ required: ['statements'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutApplicationPolicyResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/applications/{applicationId}/templates/{templateId}',
  description: 'Gets the specified AWS CloudFormation template.',
  operationId: 'GetCloudFormationTemplate',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
      templateId: z
        .string()
        .openapi({
          param: {
            name: 'templateId',
            in: 'path',
            required: true,
            description:
              '<p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}</p>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCloudFormationTemplateResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdDependenciesRoute = createRoute({
  method: 'get',
  path: '/applications/{applicationId}/dependencies',
  description: 'Retrieves the list of applications nested in the containing application.',
  operationId: 'ListApplicationDependencies',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxItems',
            in: 'query',
            required: false,
            description: 'The total number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token to specify where to start paginating.',
            schema: { type: 'string' },
          },
        }),
      semanticVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'semanticVersion',
            in: 'query',
            required: false,
            description: 'The semantic version of the application to get.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
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
      content: { 'application/json': { schema: ListApplicationDependenciesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getApplicationsApplicationIdVersionsRoute = createRoute({
  method: 'get',
  path: '/applications/{applicationId}/versions',
  description: 'Lists versions for the specified application.',
  operationId: 'ListApplicationVersions',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxItems',
            in: 'query',
            required: false,
            description: 'The total number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token to specify where to start paginating.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
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
      content: { 'application/json': { schema: ListApplicationVersionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postApplicationsApplicationIdUnshareRoute = createRoute({
  method: 'post',
  path: '/applications/{applicationId}/unshare',
  description:
    "<p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>",
  operationId: 'UnshareApplication',
  request: {
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
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the application.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              organizationId: z
                .string()
                .openapi({
                  description: 'The AWS Organization ID to unshare the application from.',
                }),
            })
            .openapi({ required: ['organizationId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})
