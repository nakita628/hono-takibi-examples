import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().min(1).openapi('String')

const ArnSchema = z
  .string()
  .regex(
    /^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:[A-Za-z0-9][A-Za-z0-9_\/.-]{0,62}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9_\/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_\/+=,@.\\-]{0,1023}$/,
  )
  .openapi('Arn')

const ApplicationFleetAssociationSchema = z
  .object({
    FleetName: StringSchema.and(
      z.any().openapi({ description: 'The name of the fleet associated with the application.' }),
    ),
    ApplicationArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the application associated with the fleet.' }),
    ),
  })
  .openapi({
    required: ['FleetName', 'ApplicationArn'],
    description: 'Describes the application fleet association.',
  })
  .openapi('ApplicationFleetAssociation')

const AssociateApplicationFleetResultSchema = z
  .object({
    ApplicationFleetAssociation: ApplicationFleetAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'If fleet name is specified, this returns the list of applications that are associated to it. If application ARN is specified, this returns the list of fleets to which it is associated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateApplicationFleetResult')

const NameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$/)
  .openapi('Name')

const AssociateApplicationFleetRequestSchema = z
  .object({
    FleetName: NameSchema.and(z.any().openapi({ description: 'The name of the fleet.' })),
    ApplicationArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the application.' })),
  })
  .openapi({ required: ['FleetName', 'ApplicationArn'], title: 'AssociateApplicationFleetRequest' })
  .openapi('AssociateApplicationFleetRequest')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidParameterCombinationExceptionSchema = z
  .any()
  .openapi('InvalidParameterCombinationException')

const OperationNotPermittedExceptionSchema = z.any().openapi('OperationNotPermittedException')

const AssociateApplicationToEntitlementResultSchema = z
  .object({})
  .openapi('AssociateApplicationToEntitlementResult')

const AssociateApplicationToEntitlementRequestSchema = z
  .object({
    StackName: NameSchema.and(z.any().openapi({ description: 'The name of the stack.' })),
    EntitlementName: NameSchema.and(
      z.any().openapi({ description: 'The name of the entitlement.' }),
    ),
    ApplicationIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the application.' }),
    ),
  })
  .openapi({
    required: ['StackName', 'EntitlementName', 'ApplicationIdentifier'],
    title: 'AssociateApplicationToEntitlementRequest',
  })
  .openapi('AssociateApplicationToEntitlementRequest')

const EntitlementNotFoundExceptionSchema = z.any().openapi('EntitlementNotFoundException')

const AssociateFleetResultSchema = z.object({}).openapi('AssociateFleetResult')

const AssociateFleetRequestSchema = z
  .object({
    FleetName: StringSchema.and(z.any().openapi({ description: 'The name of the fleet. ' })),
    StackName: StringSchema.and(z.any().openapi({ description: 'The name of the stack.' })),
  })
  .openapi({ required: ['FleetName', 'StackName'], title: 'AssociateFleetRequest' })
  .openapi('AssociateFleetRequest')

const InvalidAccountStatusExceptionSchema = z.any().openapi('InvalidAccountStatusException')

const IncompatibleImageExceptionSchema = z.any().openapi('IncompatibleImageException')

const UsernameSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(128)
  .openapi('Username')

const AuthenticationTypeSchema = z
  .enum(['API', 'SAML', 'USERPOOL', 'AWS_AD'])
  .openapi('AuthenticationType')

const BooleanSchema = z.boolean().openapi('Boolean')

const UserStackAssociationSchema = z
  .object({
    StackName: StringSchema.and(
      z.any().openapi({ description: 'The name of the stack that is associated with the user.' }),
    ),
    UserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The email address of the user who is associated with the stack.</p> <note> <p>Users' email addresses are case-sensitive.</p> </note>",
        }),
    ),
    AuthenticationType: AuthenticationTypeSchema.and(
      z.any().openapi({ description: 'The authentication type for the user.' }),
    ),
    SendEmailNotification: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether a welcome email is sent to a user after the user is created in the user pool.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StackName', 'UserName', 'AuthenticationType'],
    description: 'Describes a user in the user pool and the associated stack.',
  })
  .openapi('UserStackAssociation')

const UserStackAssociationErrorCodeSchema = z
  .enum(['STACK_NOT_FOUND', 'USER_NAME_NOT_FOUND', 'DIRECTORY_NOT_FOUND', 'INTERNAL_ERROR'])
  .openapi('UserStackAssociationErrorCode')

const UserStackAssociationErrorSchema = z
  .object({
    UserStackAssociation: UserStackAssociationSchema.and(
      z.any().openapi({ description: 'Information about the user and associated stack.' }),
    ).exactOptional(),
    ErrorCode: UserStackAssociationErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code for the error that is returned when a user can’t be associated with or disassociated from a stack.',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message for the error that is returned when a user can’t be associated with or disassociated from a stack.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the error that is returned when a user can’t be associated with or disassociated from a stack. ',
    required: [],
  })
  .openapi('UserStackAssociationError')

const UserStackAssociationErrorListSchema = z
  .array(UserStackAssociationErrorSchema)
  .openapi('UserStackAssociationErrorList')

const BatchAssociateUserStackResultSchema = z
  .object({
    errors: UserStackAssociationErrorListSchema.and(
      z.any().openapi({ description: 'The list of UserStackAssociationError objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchAssociateUserStackResult')

const UserStackAssociationListSchema = z
  .array(UserStackAssociationSchema)
  .min(1)
  .max(25)
  .openapi('UserStackAssociationList')

const BatchAssociateUserStackRequestSchema = z
  .object({
    UserStackAssociations: UserStackAssociationListSchema.and(
      z.any().openapi({ description: 'The list of UserStackAssociation objects.' }),
    ),
  })
  .openapi({ required: ['UserStackAssociations'], title: 'BatchAssociateUserStackRequest' })
  .openapi('BatchAssociateUserStackRequest')

const BatchDisassociateUserStackResultSchema = z
  .object({
    errors: UserStackAssociationErrorListSchema.and(
      z.any().openapi({ description: 'The list of UserStackAssociationError objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDisassociateUserStackResult')

const BatchDisassociateUserStackRequestSchema = z
  .object({
    UserStackAssociations: UserStackAssociationListSchema.and(
      z.any().openapi({ description: 'The list of UserStackAssociation objects.' }),
    ),
  })
  .openapi({ required: ['UserStackAssociations'], title: 'BatchDisassociateUserStackRequest' })
  .openapi('BatchDisassociateUserStackRequest')

const CopyImageResponseSchema = z
  .object({
    DestinationImageName: NameSchema.and(
      z.any().openapi({ description: 'The name of the destination image.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CopyImageResponse')

const RegionNameSchema = z.string().min(1).max(32).openapi('RegionName')

const DescriptionSchema = z.string().max(256).openapi('Description')

const CopyImageRequestSchema = z
  .object({
    SourceImageName: NameSchema.and(
      z.any().openapi({ description: 'The name of the image to copy.' }),
    ),
    DestinationImageName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name that the image will have when it is copied to the destination.',
        }),
    ),
    DestinationRegion: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination region to which the image will be copied. This parameter is required, even if you are copying an image within the same region.',
        }),
    ),
    DestinationImageDescription: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description that the image will have when it is copied to the destination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceImageName', 'DestinationImageName', 'DestinationRegion'],
    title: 'CopyImageRequest',
  })
  .openapi('CopyImageRequest')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const ResourceNotAvailableExceptionSchema = z.any().openapi('ResourceNotAvailableException')

const S3BucketSchema = z
  .string()
  .regex(/^[0-9a-z\.\-]*(?<!\.)$/)
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const S3KeySchema = z.string().min(1).max(1024).openapi('S3Key')

const S3LocationSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'The S3 bucket of the S3 object.' }),
    ),
    S3Key: S3KeySchema.and(z.any().openapi({ description: 'The S3 key of the S3 object.' })),
  })
  .openapi({ required: ['S3Bucket', 'S3Key'], description: 'Describes the S3 location.' })
  .openapi('S3Location')

const IntegerSchema = z.int().openapi('Integer')

const ScriptDetailsSchema = z
  .object({
    ScriptS3Location: S3LocationSchema.and(
      z.any().openapi({ description: 'The S3 object location for the script.' }),
    ),
    ExecutablePath: StringSchema.and(
      z.any().openapi({ description: 'The run path for the script.' }),
    ),
    ExecutableParameters: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The runtime parameters passed to the run path for the script.' }),
    ).exactOptional(),
    TimeoutInSeconds: IntegerSchema.and(
      z.any().openapi({ description: 'The run timeout, in seconds, for the script.' }),
    ),
  })
  .openapi({
    required: ['ScriptS3Location', 'ExecutablePath', 'TimeoutInSeconds'],
    description: 'Describes the details of the script.',
  })
  .openapi('ScriptDetails')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AppBlockSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the app block.' })),
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the app block.' })),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the app block.' }),
    ).exactOptional(),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The display name of the app block.' }),
    ).exactOptional(),
    SourceS3Location: S3LocationSchema.and(
      z.any().openapi({ description: 'The source S3 location of the app block.' }),
    ).exactOptional(),
    SetupScriptDetails: ScriptDetailsSchema.and(
      z.any().openapi({ description: 'The setup script details of the app block.' }),
    ),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The created time of the app block.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Arn', 'SetupScriptDetails'],
    description:
      '<p>Describes an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>',
  })
  .openapi('AppBlock')

const CreateAppBlockResultSchema = z
  .object({
    AppBlock: AppBlockSchema.and(
      z.any().openapi({ description: 'The app block.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAppBlockResult')

const DisplayNameSchema = z.string().max(100).openapi('DisplayName')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagsSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('Tags')

const CreateAppBlockRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the app block.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the app block.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The display name of the app block. This is not displayed to the user.',
        }),
    ).exactOptional(),
    SourceS3Location: S3LocationSchema.and(
      z.any().openapi({ description: 'The source S3 location of the app block.' }),
    ),
    SetupScriptDetails: ScriptDetailsSchema.and(
      z.any().openapi({ description: 'The setup script details of the app block.' }),
    ),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags assigned to the app block.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'SourceS3Location', 'SetupScriptDetails'],
    title: 'CreateAppBlockRequest',
  })
  .openapi('CreateAppBlockRequest')

const MetadataSchema = z.record(z.string(), StringSchema).openapi('Metadata')

const PlatformTypeSchema = z
  .enum(['WINDOWS', 'WINDOWS_SERVER_2016', 'WINDOWS_SERVER_2019', 'AMAZON_LINUX2'])
  .openapi('PlatformType')

const PlatformsSchema = z.array(PlatformTypeSchema).max(4).openapi('Platforms')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const ApplicationSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ).exactOptional(),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The application name to display.' }),
    ).exactOptional(),
    IconURL: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL for the application icon. This URL might be time-limited.',
        }),
    ).exactOptional(),
    LaunchPath: StringSchema.and(
      z.any().openapi({ description: 'The path to the application executable in the instance.' }),
    ).exactOptional(),
    LaunchParameters: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The arguments that are passed to the application at launch.' }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there is a problem, the application can be disabled after image creation.',
        }),
    ).exactOptional(),
    Metadata: MetadataSchema.and(
      z.any().openapi({ description: 'Additional attributes that describe the application.' }),
    ).exactOptional(),
    WorkingDirectory: StringSchema.and(
      z.any().openapi({ description: 'The working directory for the application.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the application.' }),
    ).exactOptional(),
    AppBlockArn: ArnSchema.and(
      z.any().openapi({ description: 'The app block ARN of the application.' }),
    ).exactOptional(),
    IconS3Location: S3LocationSchema.and(
      z.any().openapi({ description: 'The S3 location of the application icon.' }),
    ).exactOptional(),
    Platforms: PlatformsSchema.and(
      z.any().openapi({ description: 'The platforms on which the application can run.' }),
    ).exactOptional(),
    InstanceFamilies: StringListSchema.and(
      z.any().openapi({ description: 'The instance families for the application.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the application was created within the app block.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an application in the application catalog.', required: [] })
  .openapi('Application')

const CreateApplicationResultSchema = z
  .object({ Application: ApplicationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateApplicationResult')

const CreateApplicationRequestSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application. This name is visible to users when display name is not specified.',
        }),
    ),
    DisplayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display name of the application. This name is visible to users in the application catalog.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
    IconS3Location: S3LocationSchema.and(
      z.any().openapi({ description: 'The location in S3 of the application icon.' }),
    ),
    LaunchPath: StringSchema.and(
      z.any().openapi({ description: 'The launch path of the application.' }),
    ),
    WorkingDirectory: StringSchema.and(
      z.any().openapi({ description: 'The working directory of the application.' }),
    ).exactOptional(),
    LaunchParameters: StringSchema.and(
      z.any().openapi({ description: 'The launch parameters of the application.' }),
    ).exactOptional(),
    Platforms: PlatformsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platforms the application supports. WINDOWS_SERVER_2019 and AMAZON_LINUX2 are supported for Elastic fleets.',
        }),
    ),
    InstanceFamilies: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance families the application supports. Valid values are GENERAL_PURPOSE and GRAPHICS_G4.',
        }),
    ),
    AppBlockArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The app block ARN to which the application should be associated',
        }),
    ),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags assigned to the application.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Name',
      'IconS3Location',
      'LaunchPath',
      'Platforms',
      'InstanceFamilies',
      'AppBlockArn',
    ],
    title: 'CreateApplicationRequest',
  })
  .openapi('CreateApplicationRequest')

const DirectoryNameSchema = z.string().openapi('DirectoryName')

const OrganizationalUnitDistinguishedNameSchema = z
  .string()
  .max(2000)
  .openapi('OrganizationalUnitDistinguishedName')

const OrganizationalUnitDistinguishedNamesListSchema = z
  .array(OrganizationalUnitDistinguishedNameSchema)
  .openapi('OrganizationalUnitDistinguishedNamesList')

const AccountNameSchema = z.string().min(1).openapi('AccountName')

const AccountPasswordSchema = z.string().min(1).max(127).openapi('AccountPassword')

const ServiceAccountCredentialsSchema = z
  .object({
    AccountName: AccountNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.',
        }),
    ),
    AccountPassword: AccountPasswordSchema.and(
      z.any().openapi({ description: 'The password for the account.' }),
    ),
  })
  .openapi({
    required: ['AccountName', 'AccountPassword'],
    description:
      'Describes the credentials for the service account used by the fleet or image builder to connect to the directory.',
  })
  .openapi('ServiceAccountCredentials')

const CertificateBasedAuthStatusSchema = z
  .enum(['DISABLED', 'ENABLED', 'ENABLED_NO_DIRECTORY_LOGIN_FALLBACK'])
  .openapi('CertificateBasedAuthStatus')

const CertificateBasedAuthPropertiesSchema = z
  .object({
    Status: CertificateBasedAuthStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The status of the certificate-based authentication properties.' }),
    ).exactOptional(),
    CertificateAuthorityArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the AWS Certificate Manager Private CA resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.',
    required: [],
  })
  .openapi('CertificateBasedAuthProperties')

const DirectoryConfigSchema = z
  .object({
    DirectoryName: DirectoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified name of the directory (for example, corp.example.com).',
        }),
    ),
    OrganizationalUnitDistinguishedNames: OrganizationalUnitDistinguishedNamesListSchema.and(
      z
        .any()
        .openapi({
          description: 'The distinguished names of the organizational units for computer accounts.',
        }),
    ).exactOptional(),
    ServiceAccountCredentials: ServiceAccountCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The credentials for the service account used by the fleet or image builder to connect to the directory.',
        }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the directory configuration was created.' }),
    ).exactOptional(),
    CertificateBasedAuthProperties: CertificateBasedAuthPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryName'],
    description:
      'Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.',
  })
  .openapi('DirectoryConfig')

const CreateDirectoryConfigResultSchema = z
  .object({
    DirectoryConfig: DirectoryConfigSchema.and(
      z.any().openapi({ description: 'Information about the directory configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDirectoryConfigResult')

const CreateDirectoryConfigRequestSchema = z
  .object({
    DirectoryName: DirectoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified name of the directory (for example, corp.example.com).',
        }),
    ),
    OrganizationalUnitDistinguishedNames: OrganizationalUnitDistinguishedNamesListSchema.and(
      z
        .any()
        .openapi({
          description: 'The distinguished names of the organizational units for computer accounts.',
        }),
    ),
    ServiceAccountCredentials: ServiceAccountCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The credentials for the service account used by the fleet or image builder to connect to the directory.',
        }),
    ).exactOptional(),
    CertificateBasedAuthProperties: CertificateBasedAuthPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryName', 'OrganizationalUnitDistinguishedNames'],
    title: 'CreateDirectoryConfigRequest',
  })
  .openapi('CreateDirectoryConfigRequest')

const InvalidRoleExceptionSchema = z.any().openapi('InvalidRoleException')

const AppVisibilitySchema = z.enum(['ALL', 'ASSOCIATED']).openapi('AppVisibility')

const EntitlementAttributeSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A supported AWS IAM SAML <code>PrincipalTag</code> attribute that is matched to the associated value when a user identity federates into an Amazon AppStream 2.0 SAML application.</p> <p>The following are valid values:</p> <ul> <li> <p>roles</p> </li> <li> <p>department </p> </li> <li> <p>organization </p> </li> <li> <p>groups </p> </li> <li> <p>title </p> </li> <li> <p>costCenter </p> </li> <li> <p>userType</p> </li> </ul> <p> </p>',
        }),
    ),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that is matched to a supported SAML attribute name when a user identity federates into an Amazon AppStream 2.0 SAML application. ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'An attribute associated with an entitlement. Application entitlements work by matching a supported SAML 2.0 attribute name to a value when a user identity federates to an Amazon AppStream 2.0 SAML application.',
  })
  .openapi('EntitlementAttribute')

const EntitlementAttributeListSchema = z
  .array(EntitlementAttributeSchema)
  .min(1)
  .openapi('EntitlementAttributeList')

const EntitlementSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the entitlement.' })),
    StackName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stack with which the entitlement is associated.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the entitlement.' }),
    ).exactOptional(),
    AppVisibility: AppVisibilitySchema.and(
      z.any().openapi({ description: 'Specifies whether all or selected apps are entitled.' }),
    ),
    Attributes: EntitlementAttributeListSchema.and(
      z.any().openapi({ description: 'The attributes of the entitlement.' }),
    ),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the entitlement was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the entitlement was last modified.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'StackName', 'AppVisibility', 'Attributes'],
    description:
      "Specifies an entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.",
  })
  .openapi('Entitlement')

const CreateEntitlementResultSchema = z
  .object({
    Entitlement: EntitlementSchema.and(
      z.any().openapi({ description: 'The entitlement.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEntitlementResult')

const CreateEntitlementRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the entitlement.' })),
    StackName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stack with which the entitlement is associated.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the entitlement.' }),
    ).exactOptional(),
    AppVisibility: AppVisibilitySchema.and(
      z.any().openapi({ description: 'Specifies whether all or selected apps are entitled.' }),
    ),
    Attributes: EntitlementAttributeListSchema.and(
      z.any().openapi({ description: 'The attributes of the entitlement.' }),
    ),
  })
  .openapi({
    required: ['Name', 'StackName', 'AppVisibility', 'Attributes'],
    title: 'CreateEntitlementRequest',
  })
  .openapi('CreateEntitlementRequest')

const EntitlementAlreadyExistsExceptionSchema = z.any().openapi('EntitlementAlreadyExistsException')

const FleetTypeSchema = z.enum(['ALWAYS_ON', 'ON_DEMAND', 'ELASTIC']).openapi('FleetType')

const ComputeCapacityStatusSchema = z
  .object({
    Desired: IntegerSchema.and(
      z.any().openapi({ description: 'The desired number of streaming instances.' }),
    ),
    Running: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of simultaneous streaming instances that are running.',
        }),
    ).exactOptional(),
    InUse: IntegerSchema.and(
      z.any().openapi({ description: 'The number of instances in use for streaming.' }),
    ).exactOptional(),
    Available: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of currently available instances that can be used to stream sessions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Desired'], description: 'Describes the capacity status for a fleet.' })
  .openapi('ComputeCapacityStatus')

const FleetStateSchema = z
  .enum(['STARTING', 'RUNNING', 'STOPPING', 'STOPPED'])
  .openapi('FleetState')

const SubnetIdListSchema = z
  .array(StringSchema)
  .openapi({ description: 'The subnet identifiers.' })
  .openapi('SubnetIdList')

const SecurityGroupIdListSchema = z
  .array(StringSchema)
  .max(5)
  .openapi({ description: 'The security group identifiers.' })
  .openapi('SecurityGroupIdList')

const VpcConfigSchema = z
  .object({
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance. Fleet instances use one or more subnets. Image builder instances use one subnet.',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifiers of the security groups for the fleet or image builder.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes VPC configuration information for fleets and image builders.',
    required: [],
  })
  .openapi('VpcConfig')

const FleetErrorCodeSchema = z
  .enum([
    'IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION',
    'IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION',
    'IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION',
    'NETWORK_INTERFACE_LIMIT_EXCEEDED',
    'INTERNAL_SERVICE_ERROR',
    'IAM_SERVICE_ROLE_IS_MISSING',
    'MACHINE_ROLE_IS_MISSING',
    'STS_DISABLED_IN_REGION',
    'SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES',
    'IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION',
    'SUBNET_NOT_FOUND',
    'IMAGE_NOT_FOUND',
    'INVALID_SUBNET_CONFIGURATION',
    'SECURITY_GROUPS_NOT_FOUND',
    'IGW_NOT_ATTACHED',
    'IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION',
    'FLEET_STOPPED',
    'FLEET_INSTANCE_PROVISIONING_FAILURE',
    'DOMAIN_JOIN_ERROR_FILE_NOT_FOUND',
    'DOMAIN_JOIN_ERROR_ACCESS_DENIED',
    'DOMAIN_JOIN_ERROR_LOGON_FAILURE',
    'DOMAIN_JOIN_ERROR_INVALID_PARAMETER',
    'DOMAIN_JOIN_ERROR_MORE_DATA',
    'DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN',
    'DOMAIN_JOIN_ERROR_NOT_SUPPORTED',
    'DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME',
    'DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED',
    'DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED',
    'DOMAIN_JOIN_NERR_PASSWORD_EXPIRED',
    'DOMAIN_JOIN_INTERNAL_SERVICE_ERROR',
  ])
  .openapi('FleetErrorCode')

const FleetErrorSchema = z
  .object({
    ErrorCode: FleetErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a fleet error.', required: [] })
  .openapi('FleetError')

const FleetErrorsSchema = z.array(FleetErrorSchema).openapi('FleetErrors')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const DomainJoinInfoSchema = z
  .object({
    DirectoryName: DirectoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified name of the directory (for example, corp.example.com).',
        }),
    ).exactOptional(),
    OrganizationalUnitDistinguishedName: OrganizationalUnitDistinguishedNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The distinguished name of the organizational unit for computer accounts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.',
    required: [],
  })
  .openapi('DomainJoinInfo')

const StreamViewSchema = z.enum(['APP', 'DESKTOP']).openapi('StreamView')

const UsbDeviceFilterStringSchema = z
  .string()
  .regex(
    /^((\w*)\s*(\w*)\s*\,\s*(\w*)\s*\,\s*\*?(\w*)\s*\,\s*\*?(\w*)\s*\,\s*\*?\d*\s*\,\s*\*?\d*\s*\,\s*[0-1]\s*\,\s*[0-1]\s*)$/,
  )
  .min(0)
  .max(100)
  .openapi('UsbDeviceFilterString')

const UsbDeviceFilterStringsSchema = z
  .array(UsbDeviceFilterStringSchema)
  .openapi('UsbDeviceFilterStrings')

const FleetSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the fleet.' }),
    ),
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the fleet.' })),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The fleet name to display.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    ImageName: StringSchema.and(
      z.any().openapi({ description: 'The name of the image used to create the fleet.' }),
    ).exactOptional(),
    ImageArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the public, private, or shared image.' }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance type to use when launching fleet instances. The following instance types are available:</p> <ul> <li> <p>stream.standard.small</p> </li> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.compute.large</p> </li> <li> <p>stream.compute.xlarge</p> </li> <li> <p>stream.compute.2xlarge</p> </li> <li> <p>stream.compute.4xlarge</p> </li> <li> <p>stream.compute.8xlarge</p> </li> <li> <p>stream.memory.large</p> </li> <li> <p>stream.memory.xlarge</p> </li> <li> <p>stream.memory.2xlarge</p> </li> <li> <p>stream.memory.4xlarge</p> </li> <li> <p>stream.memory.8xlarge</p> </li> <li> <p>stream.memory.z1d.large</p> </li> <li> <p>stream.memory.z1d.xlarge</p> </li> <li> <p>stream.memory.z1d.2xlarge</p> </li> <li> <p>stream.memory.z1d.3xlarge</p> </li> <li> <p>stream.memory.z1d.6xlarge</p> </li> <li> <p>stream.memory.z1d.12xlarge</p> </li> <li> <p>stream.graphics-design.large</p> </li> <li> <p>stream.graphics-design.xlarge</p> </li> <li> <p>stream.graphics-design.2xlarge</p> </li> <li> <p>stream.graphics-design.4xlarge</p> </li> <li> <p>stream.graphics-desktop.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.xlarge</p> </li> <li> <p>stream.graphics.g4dn.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.4xlarge</p> </li> <li> <p>stream.graphics.g4dn.8xlarge</p> </li> <li> <p>stream.graphics.g4dn.12xlarge</p> </li> <li> <p>stream.graphics.g4dn.16xlarge</p> </li> <li> <p>stream.graphics-pro.4xlarge</p> </li> <li> <p>stream.graphics-pro.8xlarge</p> </li> <li> <p>stream.graphics-pro.16xlarge</p> </li> </ul>',
        }),
    ),
    FleetType: FleetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The fleet type.</p> <dl> <dt>ALWAYS_ON</dt> <dd> <p>Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.</p> </dd> <dt>ON_DEMAND</dt> <dd> <p>Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    ComputeCapacityStatus: ComputeCapacityStatusSchema.and(
      z.any().openapi({ description: 'The capacity status for the fleet.' }),
    ),
    MaxUserDurationInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. </p> <p>Specify a value between 600 and 360000.</p>',
        }),
    ).exactOptional(),
    DisconnectTimeoutInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time that a streaming session remains active after users disconnect. If they try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.</p> <p>Specify a value between 60 and 360000.</p>',
        }),
    ).exactOptional(),
    State: FleetStateSchema.and(
      z.any().openapi({ description: 'The current state for the fleet.' }),
    ),
    VpcConfig: VpcConfigSchema.and(
      z.any().openapi({ description: 'The VPC configuration for the fleet.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the fleet was created.' }),
    ).exactOptional(),
    FleetErrors: FleetErrorsSchema.and(
      z.any().openapi({ description: 'The fleet errors.' }),
    ).exactOptional(),
    EnableDefaultInternetAccess: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether default internet access is enabled for the fleet.',
        }),
    ).exactOptional(),
    DomainJoinInfo: DomainJoinInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. ',
        }),
    ).exactOptional(),
    IdleDisconnectTimeoutInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time interval begins. Users are notified before they are disconnected due to inactivity. If users try to reconnect to the streaming session before the time interval specified in <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are disconnected.</p> <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p> <note> <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p> </note>",
        }),
    ).exactOptional(),
    IamRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that is applied to the fleet. To assume a role, the fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    StreamView: StreamViewSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p> <p>The default value is <code>APP</code>.</p>',
        }),
    ).exactOptional(),
    Platform: PlatformTypeSchema.and(
      z.any().openapi({ description: 'The platform of the fleet.' }),
    ).exactOptional(),
    MaxConcurrentSessions: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of concurrent sessions for the fleet.' }),
    ).exactOptional(),
    UsbDeviceFilterStrings: UsbDeviceFilterStringsSchema.and(
      z.any().openapi({ description: 'The USB device filter strings associated with the fleet.' }),
    ).exactOptional(),
    SessionScriptS3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn', 'Name', 'InstanceType', 'ComputeCapacityStatus', 'State'],
    description: 'Describes a fleet.',
  })
  .openapi('Fleet')

const CreateFleetResultSchema = z
  .object({
    Fleet: FleetSchema.and(
      z.any().openapi({ description: 'Information about the fleet.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFleetResult')

const ComputeCapacitySchema = z
  .object({
    DesiredInstances: IntegerSchema.and(
      z.any().openapi({ description: 'The desired number of streaming instances.' }),
    ),
  })
  .openapi({ required: ['DesiredInstances'], description: 'Describes the capacity for a fleet.' })
  .openapi('ComputeCapacity')

const CreateFleetRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'A unique name for the fleet.' })),
    ImageName: StringSchema.and(
      z.any().openapi({ description: 'The name of the image used to create the fleet.' }),
    ).exactOptional(),
    ImageArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the public, private, or shared image to use.' }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance type to use when launching fleet instances. The following instance types are available:</p> <ul> <li> <p>stream.standard.small</p> </li> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.standard.xlarge</p> </li> <li> <p>stream.standard.2xlarge</p> </li> <li> <p>stream.compute.large</p> </li> <li> <p>stream.compute.xlarge</p> </li> <li> <p>stream.compute.2xlarge</p> </li> <li> <p>stream.compute.4xlarge</p> </li> <li> <p>stream.compute.8xlarge</p> </li> <li> <p>stream.memory.large</p> </li> <li> <p>stream.memory.xlarge</p> </li> <li> <p>stream.memory.2xlarge</p> </li> <li> <p>stream.memory.4xlarge</p> </li> <li> <p>stream.memory.8xlarge</p> </li> <li> <p>stream.memory.z1d.large</p> </li> <li> <p>stream.memory.z1d.xlarge</p> </li> <li> <p>stream.memory.z1d.2xlarge</p> </li> <li> <p>stream.memory.z1d.3xlarge</p> </li> <li> <p>stream.memory.z1d.6xlarge</p> </li> <li> <p>stream.memory.z1d.12xlarge</p> </li> <li> <p>stream.graphics-design.large</p> </li> <li> <p>stream.graphics-design.xlarge</p> </li> <li> <p>stream.graphics-design.2xlarge</p> </li> <li> <p>stream.graphics-design.4xlarge</p> </li> <li> <p>stream.graphics-desktop.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.xlarge</p> </li> <li> <p>stream.graphics.g4dn.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.4xlarge</p> </li> <li> <p>stream.graphics.g4dn.8xlarge</p> </li> <li> <p>stream.graphics.g4dn.12xlarge</p> </li> <li> <p>stream.graphics.g4dn.16xlarge</p> </li> <li> <p>stream.graphics-pro.4xlarge</p> </li> <li> <p>stream.graphics-pro.8xlarge</p> </li> <li> <p>stream.graphics-pro.16xlarge</p> </li> </ul> <p>The following instance types are available for Elastic fleets:</p> <ul> <li> <p>stream.standard.small</p> </li> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.standard.xlarge</p> </li> <li> <p>stream.standard.2xlarge</p> </li> </ul>',
        }),
    ),
    FleetType: FleetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The fleet type.</p> <dl> <dt>ALWAYS_ON</dt> <dd> <p>Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.</p> </dd> <dt>ON_DEMAND</dt> <dd> <p>Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    ComputeCapacity: ComputeCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The desired capacity for the fleet. This is not allowed for Elastic fleets. For Elastic fleets, specify MaxConcurrentSessions instead.',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC configuration for the fleet. This is required for Elastic fleets, but not required for other fleet types. Elastic fleets require that you specify at least two subnets in different availability zones.',
        }),
    ).exactOptional(),
    MaxUserDurationInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p> <p>Specify a value between 600 and 360000.</p>',
        }),
    ).exactOptional(),
    DisconnectTimeoutInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p> <p>Specify a value between 60 and 360000.</p>',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The fleet name to display.' }),
    ).exactOptional(),
    EnableDefaultInternetAccess: BooleanObjectSchema.and(
      z
        .any()
        .openapi({ description: 'Enables or disables default internet access for the fleet.' }),
    ).exactOptional(),
    DomainJoinInfo: DomainJoinInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. This is not allowed for Elastic fleets. ',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags to associate with the fleet. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p> <p>If you do not specify a value, the value is set to an empty string.</p> <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p> <p>_ . : / = + \\ - @</p> <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    IdleDisconnectTimeoutInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time interval begins. Users are notified before they are disconnected due to inactivity. If they try to reconnect to the streaming session before the time interval specified in <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are disconnected.</p> <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p> <note> <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p> </note>",
        }),
    ).exactOptional(),
    IamRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    StreamView: StreamViewSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p> <p>The default value is <code>APP</code>.</p>',
        }),
    ).exactOptional(),
    Platform: PlatformTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fleet platform. WINDOWS_SERVER_2019 and AMAZON_LINUX2 are supported for Elastic fleets. ',
        }),
    ).exactOptional(),
    MaxConcurrentSessions: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum concurrent sessions of the Elastic fleet. This is required for Elastic fleets, and not allowed for other fleet types.',
        }),
    ).exactOptional(),
    UsbDeviceFilterStrings: UsbDeviceFilterStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client. This is allowed but not required for Elastic fleets.',
        }),
    ).exactOptional(),
    SessionScriptS3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'InstanceType'], title: 'CreateFleetRequest' })
  .openapi('CreateFleetRequest')

const RequestLimitExceededExceptionSchema = z.any().openapi('RequestLimitExceededException')

const ImageBuilderStateSchema = z
  .enum([
    'PENDING',
    'UPDATING_AGENT',
    'RUNNING',
    'STOPPING',
    'STOPPED',
    'REBOOTING',
    'SNAPSHOTTING',
    'DELETING',
    'FAILED',
    'UPDATING',
    'PENDING_QUALIFICATION',
  ])
  .openapi('ImageBuilderState')

const ImageBuilderStateChangeReasonCodeSchema = z
  .enum(['INTERNAL_ERROR', 'IMAGE_UNAVAILABLE'])
  .openapi('ImageBuilderStateChangeReasonCode')

const ImageBuilderStateChangeReasonSchema = z
  .object({
    Code: ImageBuilderStateChangeReasonCodeSchema.and(
      z.any().openapi({ description: 'The state change reason code.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The state change reason message.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the reason why the last image builder state change occurred.',
    required: [],
  })
  .openapi('ImageBuilderStateChangeReason')

const NetworkAccessConfigurationSchema = z
  .object({
    EniPrivateIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private IP address of the elastic network interface that is attached to instances in your VPC.',
        }),
    ).exactOptional(),
    EniId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the network details of the fleet or image builder instance.',
    required: [],
  })
  .openapi('NetworkAccessConfiguration')

const ResourceErrorSchema = z
  .object({
    ErrorCode: FleetErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
    ErrorTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time the error occurred.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a resource error.', required: [] })
  .openapi('ResourceError')

const ResourceErrorsSchema = z.array(ResourceErrorSchema).openapi('ResourceErrors')

const AppstreamAgentVersionSchema = z.string().min(1).max(100).openapi('AppstreamAgentVersion')

const AccessEndpointTypeSchema = z.literal('STREAMING').openapi('AccessEndpointType')

const AccessEndpointSchema = z
  .object({
    EndpointType: AccessEndpointTypeSchema.and(
      z.any().openapi({ description: 'The type of interface endpoint.' }),
    ),
    VpceId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier (ID) of the VPC in which the interface endpoint is used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndpointType'],
    description:
      'Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.',
  })
  .openapi('AccessEndpoint')

const AccessEndpointListSchema = z
  .array(AccessEndpointSchema)
  .min(1)
  .max(4)
  .openapi('AccessEndpointList')

const ImageBuilderSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the image builder.' })),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the image builder.' }),
    ).exactOptional(),
    ImageArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the image from which this builder was created.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The image builder name to display.' }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z.any().openapi({ description: 'The VPC configuration of the image builder.' }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance type for the image builder. The following instance types are available:</p> <ul> <li> <p>stream.standard.small</p> </li> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.compute.large</p> </li> <li> <p>stream.compute.xlarge</p> </li> <li> <p>stream.compute.2xlarge</p> </li> <li> <p>stream.compute.4xlarge</p> </li> <li> <p>stream.compute.8xlarge</p> </li> <li> <p>stream.memory.large</p> </li> <li> <p>stream.memory.xlarge</p> </li> <li> <p>stream.memory.2xlarge</p> </li> <li> <p>stream.memory.4xlarge</p> </li> <li> <p>stream.memory.8xlarge</p> </li> <li> <p>stream.memory.z1d.large</p> </li> <li> <p>stream.memory.z1d.xlarge</p> </li> <li> <p>stream.memory.z1d.2xlarge</p> </li> <li> <p>stream.memory.z1d.3xlarge</p> </li> <li> <p>stream.memory.z1d.6xlarge</p> </li> <li> <p>stream.memory.z1d.12xlarge</p> </li> <li> <p>stream.graphics-design.large</p> </li> <li> <p>stream.graphics-design.xlarge</p> </li> <li> <p>stream.graphics-design.2xlarge</p> </li> <li> <p>stream.graphics-design.4xlarge</p> </li> <li> <p>stream.graphics-desktop.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.xlarge</p> </li> <li> <p>stream.graphics.g4dn.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.4xlarge</p> </li> <li> <p>stream.graphics.g4dn.8xlarge</p> </li> <li> <p>stream.graphics.g4dn.12xlarge</p> </li> <li> <p>stream.graphics.g4dn.16xlarge</p> </li> <li> <p>stream.graphics-pro.4xlarge</p> </li> <li> <p>stream.graphics-pro.8xlarge</p> </li> <li> <p>stream.graphics-pro.16xlarge</p> </li> </ul>',
        }),
    ).exactOptional(),
    Platform: PlatformTypeSchema.and(
      z.any().openapi({ description: 'The operating system platform of the image builder.' }),
    ).exactOptional(),
    IamRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that is applied to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    State: ImageBuilderStateSchema.and(
      z.any().openapi({ description: 'The state of the image builder.' }),
    ).exactOptional(),
    StateChangeReason: ImageBuilderStateChangeReasonSchema.and(
      z.any().openapi({ description: 'The reason why the last state change occurred.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time stamp when the image builder was created.' }),
    ).exactOptional(),
    EnableDefaultInternetAccess: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Enables or disables default internet access for the image builder.',
        }),
    ).exactOptional(),
    DomainJoinInfo: DomainJoinInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. ',
        }),
    ).exactOptional(),
    NetworkAccessConfiguration: NetworkAccessConfigurationSchema.exactOptional(),
    ImageBuilderErrors: ResourceErrorsSchema.and(
      z.any().openapi({ description: 'The image builder errors.' }),
    ).exactOptional(),
    AppstreamAgentVersion: AppstreamAgentVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the AppStream 2.0 agent that is currently being used by the image builder. ',
        }),
    ).exactOptional(),
    AccessEndpoints: AccessEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of virtual private cloud (VPC) interface endpoint objects. Administrators can connect to the image builder only through the specified endpoints.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description: 'Describes a virtual machine that is used to create an image. ',
  })
  .openapi('ImageBuilder')

const CreateImageBuilderResultSchema = z
  .object({
    ImageBuilder: ImageBuilderSchema.and(
      z.any().openapi({ description: 'Information about the image builder.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateImageBuilderResult')

const CreateImageBuilderRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'A unique name for the image builder.' })),
    ImageName: StringSchema.and(
      z.any().openapi({ description: 'The name of the image used to create the image builder.' }),
    ).exactOptional(),
    ImageArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the public, private, or shared image to use.' }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance type to use when launching the image builder. The following instance types are available:</p> <ul> <li> <p>stream.standard.small</p> </li> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.compute.large</p> </li> <li> <p>stream.compute.xlarge</p> </li> <li> <p>stream.compute.2xlarge</p> </li> <li> <p>stream.compute.4xlarge</p> </li> <li> <p>stream.compute.8xlarge</p> </li> <li> <p>stream.memory.large</p> </li> <li> <p>stream.memory.xlarge</p> </li> <li> <p>stream.memory.2xlarge</p> </li> <li> <p>stream.memory.4xlarge</p> </li> <li> <p>stream.memory.8xlarge</p> </li> <li> <p>stream.memory.z1d.large</p> </li> <li> <p>stream.memory.z1d.xlarge</p> </li> <li> <p>stream.memory.z1d.2xlarge</p> </li> <li> <p>stream.memory.z1d.3xlarge</p> </li> <li> <p>stream.memory.z1d.6xlarge</p> </li> <li> <p>stream.memory.z1d.12xlarge</p> </li> <li> <p>stream.graphics-design.large</p> </li> <li> <p>stream.graphics-design.xlarge</p> </li> <li> <p>stream.graphics-design.2xlarge</p> </li> <li> <p>stream.graphics-design.4xlarge</p> </li> <li> <p>stream.graphics-desktop.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.xlarge</p> </li> <li> <p>stream.graphics.g4dn.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.4xlarge</p> </li> <li> <p>stream.graphics.g4dn.8xlarge</p> </li> <li> <p>stream.graphics.g4dn.12xlarge</p> </li> <li> <p>stream.graphics.g4dn.16xlarge</p> </li> <li> <p>stream.graphics-pro.4xlarge</p> </li> <li> <p>stream.graphics-pro.8xlarge</p> </li> <li> <p>stream.graphics-pro.16xlarge</p> </li> </ul>',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The image builder name to display.' }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC configuration for the image builder. You can specify only one subnet.',
        }),
    ).exactOptional(),
    IamRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM role to apply to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    EnableDefaultInternetAccess: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Enables or disables default internet access for the image builder.',
        }),
    ).exactOptional(),
    DomainJoinInfo: DomainJoinInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. ',
        }),
    ).exactOptional(),
    AppstreamAgentVersion: AppstreamAgentVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. ',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags to associate with the image builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p> <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p> <p>_ . : / = + \\ - @</p> <p>If you do not specify a value, the value is set to an empty string.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    AccessEndpoints: AccessEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the image builder only through the specified endpoints.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'InstanceType'], title: 'CreateImageBuilderRequest' })
  .openapi('CreateImageBuilderRequest')

const CreateImageBuilderStreamingURLResultSchema = z
  .object({
    StreamingURL: StringSchema.and(
      z.any().openapi({ description: 'The URL to start the AppStream 2.0 streaming session.' }),
    ).exactOptional(),
    Expires: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The elapsed time, in seconds after the Unix epoch, when this URL expires.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateImageBuilderStreamingURLResult')

const LongSchema = z.int().openapi('Long')

const CreateImageBuilderStreamingURLRequestSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the image builder.' })),
    Validity: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 3600 seconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateImageBuilderStreamingURLRequest' })
  .openapi('CreateImageBuilderStreamingURLRequest')

const StorageConnectorTypeSchema = z
  .enum(['HOMEFOLDERS', 'GOOGLE_DRIVE', 'ONE_DRIVE'])
  .openapi({ description: 'The type of storage connector.' })
  .openapi('StorageConnectorType')

const ResourceIdentifierSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi({ description: 'The ARN of the resource.' })
  .openapi('ResourceIdentifier')

const DomainSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({ description: 'GSuite domain for GDrive integration.' })
  .openapi('Domain')

const DomainListSchema = z.array(DomainSchema).max(50).openapi('DomainList')

const StorageConnectorSchema = z
  .object({
    ConnectorType: StorageConnectorTypeSchema.and(
      z.any().openapi({ description: 'The type of storage connector.' }),
    ),
    ResourceIdentifier: ResourceIdentifierSchema.and(
      z.any().openapi({ description: 'The ARN of the storage connector.' }),
    ).exactOptional(),
    Domains: DomainListSchema.and(
      z.any().openapi({ description: 'The names of the domains for the account.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConnectorType'],
    description: 'Describes a connector that enables persistent storage for users.',
  })
  .openapi('StorageConnector')

const StorageConnectorListSchema = z
  .array(StorageConnectorSchema)
  .openapi({ description: 'The storage connectors.' })
  .openapi('StorageConnectorList')

const RedirectURLSchema = z.string().max(1000).openapi('RedirectURL')

const FeedbackURLSchema = z.string().max(1000).openapi('FeedbackURL')

const StackErrorCodeSchema = z
  .enum(['STORAGE_CONNECTOR_ERROR', 'INTERNAL_SERVICE_ERROR'])
  .openapi('StackErrorCode')

const StackErrorSchema = z
  .object({
    ErrorCode: StackErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a stack error.', required: [] })
  .openapi('StackError')

const StackErrorsSchema = z
  .array(StackErrorSchema)
  .openapi({ description: 'The stack errors.' })
  .openapi('StackErrors')

const ActionSchema = z
  .enum([
    'CLIPBOARD_COPY_FROM_LOCAL_DEVICE',
    'CLIPBOARD_COPY_TO_LOCAL_DEVICE',
    'FILE_UPLOAD',
    'FILE_DOWNLOAD',
    'PRINTING_TO_LOCAL_DEVICE',
    'DOMAIN_PASSWORD_SIGNIN',
    'DOMAIN_SMART_CARD_SIGNIN',
  ])
  .openapi('Action')

const PermissionSchema = z.enum(['ENABLED', 'DISABLED']).openapi('Permission')

const UserSettingSchema = z
  .object({
    Action: ActionSchema.and(
      z.any().openapi({ description: 'The action that is enabled or disabled.' }),
    ),
    Permission: PermissionSchema.and(
      z.any().openapi({ description: 'Indicates whether the action is enabled or disabled.' }),
    ),
  })
  .openapi({
    required: ['Action', 'Permission'],
    description:
      'Describes an action and whether the action is enabled or disabled for users during their streaming sessions.',
  })
  .openapi('UserSetting')

const UserSettingListSchema = z.array(UserSettingSchema).min(1).openapi('UserSettingList')

const SettingsGroupSchema = z.string().max(100).openapi('SettingsGroup')

const ApplicationSettingsResponseSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether persistent application settings are enabled for users during their streaming sessions.',
        }),
    ).exactOptional(),
    SettingsGroup: SettingsGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path prefix for the S3 bucket where users’ persistent application settings are stored.',
        }),
    ).exactOptional(),
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an AWS Region, an S3 bucket is created. The bucket is unique to the AWS account and the Region. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the persistent application settings for users of a stack.',
    required: [],
  })
  .openapi('ApplicationSettingsResponse')

const EmbedHostDomainSchema = z
  .string()
  .regex(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/)
  .max(128)
  .openapi({
    description:
      'Specifies a valid domain that can embed AppStream. Valid examples include: ["testorigin.tt--com", "testingorigin.com.us", "test.com.us"] Invalid examples include: ["test,com", ".com", "h*llo.com". ""]',
  })
  .openapi('EmbedHostDomain')

const EmbedHostDomainsSchema = z
  .array(EmbedHostDomainSchema)
  .min(1)
  .max(20)
  .openapi('EmbedHostDomains')

const PreferredProtocolSchema = z.enum(['TCP', 'UDP']).openapi('PreferredProtocol')

const StreamingExperienceSettingsSchema = z
  .object({
    PreferredProtocol: PreferredProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred protocol that you want to use while streaming your application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.',
    required: [],
  })
  .openapi('StreamingExperienceSettings')

const StackSchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the stack.' })).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the stack.' })),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The stack name to display.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the stack was created.' }),
    ).exactOptional(),
    StorageConnectors: StorageConnectorListSchema.and(
      z.any().openapi({ description: 'The storage connectors to enable.' }),
    ).exactOptional(),
    RedirectURL: RedirectURLSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL that users are redirected to after their streaming session ends.',
        }),
    ).exactOptional(),
    FeedbackURL: FeedbackURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.',
        }),
    ).exactOptional(),
    StackErrors: StackErrorsSchema.and(
      z.any().openapi({ description: 'The errors for the stack.' }),
    ).exactOptional(),
    UserSettings: UserSettingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.',
        }),
    ).exactOptional(),
    ApplicationSettings: ApplicationSettingsResponseSchema.and(
      z
        .any()
        .openapi({ description: 'The persistent application settings for users of the stack.' }),
    ).exactOptional(),
    AccessEndpoints: AccessEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints. ',
        }),
    ).exactOptional(),
    EmbedHostDomains: EmbedHostDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.',
        }),
    ).exactOptional(),
    StreamingExperienceSettings: StreamingExperienceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: 'Describes a stack.' })
  .openapi('Stack')

const CreateStackResultSchema = z
  .object({
    Stack: StackSchema.and(
      z.any().openapi({ description: 'Information about the stack.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStackResult')

const ApplicationSettingsSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables persistent application settings for users during their streaming sessions. ',
        }),
    ),
    SettingsGroup: SettingsGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description: 'The persistent application settings for users of a stack.',
  })
  .openapi('ApplicationSettings')

const CreateStackRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the stack.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The stack name to display.' }),
    ).exactOptional(),
    StorageConnectors: StorageConnectorListSchema.and(
      z.any().openapi({ description: 'The storage connectors to enable.' }),
    ).exactOptional(),
    RedirectURL: RedirectURLSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL that users are redirected to after their streaming session ends.',
        }),
    ).exactOptional(),
    FeedbackURL: FeedbackURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.',
        }),
    ).exactOptional(),
    UserSettings: UserSettingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. ',
        }),
    ).exactOptional(),
    ApplicationSettings: ApplicationSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags to associate with the stack. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p> <p>If you do not specify a value, the value is set to an empty string.</p> <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p> <p>_ . : / = + \\ - @</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    AccessEndpoints: AccessEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.',
        }),
    ).exactOptional(),
    EmbedHostDomains: EmbedHostDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. ',
        }),
    ).exactOptional(),
    StreamingExperienceSettings: StreamingExperienceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateStackRequest' })
  .openapi('CreateStackRequest')

const CreateStreamingURLResultSchema = z
  .object({
    StreamingURL: StringSchema.and(
      z.any().openapi({ description: 'The URL to start the AppStream 2.0 streaming session.' }),
    ).exactOptional(),
    Expires: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The elapsed time, in seconds after the Unix epoch, when this URL expires.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStreamingURLResult')

const StreamingUrlUserIdSchema = z
  .string()
  .regex(/[\w+=,.@-]*/)
  .min(2)
  .max(32)
  .openapi('StreamingUrlUserId')

const CreateStreamingURLRequestSchema = z
  .object({
    StackName: StringSchema.and(z.any().openapi({ description: 'The name of the stack.' })),
    FleetName: StringSchema.and(z.any().openapi({ description: 'The name of the fleet.' })),
    UserId: StreamingUrlUserIdSchema.and(
      z.any().openapi({ description: 'The identifier of the user.' }),
    ),
    ApplicationId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application to launch after the session starts. This is the name that you specified as <b>Name</b> in the Image Assistant. If your fleet is enabled for the <b>Desktop</b> stream view, you can also choose to launch directly to the operating system desktop. To do so, specify <b>Desktop</b>.',
        }),
    ).exactOptional(),
    Validity: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 60 seconds.',
        }),
    ).exactOptional(),
    SessionContext: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session context. For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/managing-stacks-fleets.html#managing-stacks-fleets-parameters">Session Context</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackName', 'FleetName', 'UserId'], title: 'CreateStreamingURLRequest' })
  .openapi('CreateStreamingURLRequest')

const ImageStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'FAILED', 'COPYING', 'DELETING', 'CREATING', 'IMPORTING'])
  .openapi('ImageState')

const VisibilityTypeSchema = z.enum(['PUBLIC', 'PRIVATE', 'SHARED']).openapi('VisibilityType')

const ImageStateChangeReasonCodeSchema = z
  .enum(['INTERNAL_ERROR', 'IMAGE_BUILDER_NOT_AVAILABLE', 'IMAGE_COPY_FAILURE'])
  .openapi('ImageStateChangeReasonCode')

const ImageStateChangeReasonSchema = z
  .object({
    Code: ImageStateChangeReasonCodeSchema.and(
      z.any().openapi({ description: 'The state change reason code.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The state change reason message.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the reason why the last image state change occurred.',
    required: [],
  })
  .openapi('ImageStateChangeReason')

const ApplicationsSchema = z.array(ApplicationSchema).openapi('Applications')

const ImagePermissionsSchema = z
  .object({
    allowFleet: BooleanObjectSchema.and(
      z.any().openapi({ description: 'Indicates whether the image can be used for a fleet.' }),
    ).exactOptional(),
    allowImageBuilder: BooleanObjectSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the image can be used for an image builder.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the permissions for an image. ', required: [] })
  .openapi('ImagePermissions')

const ImageSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the image.' })),
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the image.' })).exactOptional(),
    BaseImageArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the image from which this image was created.' }),
    ).exactOptional(),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The image name to display.' }),
    ).exactOptional(),
    State: ImageStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The image starts in the <code>PENDING</code> state. If image creation succeeds, the state is <code>AVAILABLE</code>. If image creation fails, the state is <code>FAILED</code>.',
        }),
    ).exactOptional(),
    Visibility: VisibilityTypeSchema.and(
      z.any().openapi({ description: 'Indicates whether the image is public or private.' }),
    ).exactOptional(),
    ImageBuilderSupported: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether an image builder can be launched from this image.',
        }),
    ).exactOptional(),
    ImageBuilderName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the image builder that was used to create the private image. If the image is shared, this value is null.',
        }),
    ).exactOptional(),
    Platform: PlatformTypeSchema.and(
      z.any().openapi({ description: 'The operating system platform of the image.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    StateChangeReason: ImageStateChangeReasonSchema.and(
      z.any().openapi({ description: 'The reason why the last state change occurred.' }),
    ).exactOptional(),
    Applications: ApplicationsSchema.and(
      z.any().openapi({ description: 'The applications associated with the image.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the image was created.' }),
    ).exactOptional(),
    PublicBaseImageReleasedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The release date of the public base image. For private images, this date is the release date of the base image from which the image was created.',
        }),
    ).exactOptional(),
    AppstreamAgentVersion: AppstreamAgentVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the AppStream 2.0 agent to use for instances that are launched from this image. ',
        }),
    ).exactOptional(),
    ImagePermissions: ImagePermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions to provide to the destination AWS account for the specified image.',
        }),
    ).exactOptional(),
    ImageErrors: ResourceErrorsSchema.and(
      z
        .any()
        .openapi({
          description: "Describes the errors that are returned when a new image can't be created.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: 'Describes an image.' })
  .openapi('Image')

const CreateUpdatedImageResultSchema = z
  .object({
    image: ImageSchema.exactOptional(),
    canUpdateImage: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether a new image can be created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUpdatedImageResult')

const CreateUpdatedImageRequestSchema = z
  .object({
    existingImageName: NameSchema.and(
      z.any().openapi({ description: 'The name of the image to update.' }),
    ),
    newImageName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the new image. The name must be unique within the AWS account and Region.',
        }),
    ),
    newImageDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'The description to display for the new image.' }),
    ).exactOptional(),
    newImageDisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name to display for the new image.' }),
    ).exactOptional(),
    newImageTags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags to associate with the new image. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p> <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p> <p>_ . : / = + \\ - @</p> <p>If you do not specify a value, the value is set to an empty string.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    dryRun: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to display the status of image update availability before AppStream 2.0 initiates the process of creating a new updated image. If this value is set to <code>true</code>, AppStream 2.0 displays whether image updates are available. If this value is set to <code>false</code>, AppStream 2.0 initiates the process of creating a new updated image without displaying whether image updates are available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['existingImageName', 'newImageName'], title: 'CreateUpdatedImageRequest' })
  .openapi('CreateUpdatedImageRequest')

const UsageReportScheduleSchema = z.literal('DAILY').openapi('UsageReportSchedule')

const CreateUsageReportSubscriptionResultSchema = z
  .object({
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon S3 bucket where generated reports are stored.</p> <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script configuration, AppStream 2.0 created an S3 bucket to store the script output. The bucket is unique to your account and Region. When you enable usage reporting in this case, AppStream 2.0 uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts, when you enable usage reports, AppStream 2.0 creates a new S3 bucket.</p>",
        }),
    ).exactOptional(),
    Schedule: UsageReportScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for generating usage reports.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUsageReportSubscriptionResult')

const CreateUsageReportSubscriptionRequestSchema = z
  .object({})
  .openapi({ title: 'CreateUsageReportSubscriptionRequest' })
  .openapi('CreateUsageReportSubscriptionRequest')

const CreateUserResultSchema = z.object({}).openapi('CreateUserResult')

const MessageActionSchema = z.enum(['SUPPRESS', 'RESEND']).openapi('MessageAction')

const UserAttributeValueSchema = z
  .string()
  .regex(/^[A-Za-z0-9_\-\s]+$/)
  .max(2048)
  .openapi('UserAttributeValue')

const CreateUserRequestSchema = z
  .object({
    UserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address of the user.</p> <note> <p>Users\' email addresses are case-sensitive. During login, if they specify an email address that doesn\'t use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.</p> </note>',
        }),
    ),
    MessageAction: MessageActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent. </p> <note> <p>The temporary password in the welcome email is valid for only 7 days. If users don’t set their passwords within 7 days, you must send them a new welcome email.</p> </note>',
        }),
    ).exactOptional(),
    FirstName: UserAttributeValueSchema.and(
      z.any().openapi({ description: 'The first name, or given name, of the user.' }),
    ).exactOptional(),
    LastName: UserAttributeValueSchema.and(
      z.any().openapi({ description: 'The last name, or surname, of the user.' }),
    ).exactOptional(),
    AuthenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The authentication type for the user. You must specify USERPOOL. ',
        }),
    ),
  })
  .openapi({ required: ['UserName', 'AuthenticationType'], title: 'CreateUserRequest' })
  .openapi('CreateUserRequest')

const DeleteAppBlockResultSchema = z.object({}).openapi('DeleteAppBlockResult')

const DeleteAppBlockRequestSchema = z
  .object({ Name: NameSchema.and(z.any().openapi({ description: 'The name of the app block.' })) })
  .openapi({ required: ['Name'], title: 'DeleteAppBlockRequest' })
  .openapi('DeleteAppBlockRequest')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const DeleteApplicationResultSchema = z.object({}).openapi('DeleteApplicationResult')

const DeleteApplicationRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the application.' })),
  })
  .openapi({ required: ['Name'], title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const DeleteDirectoryConfigResultSchema = z.object({}).openapi('DeleteDirectoryConfigResult')

const DeleteDirectoryConfigRequestSchema = z
  .object({
    DirectoryName: DirectoryNameSchema.and(
      z.any().openapi({ description: 'The name of the directory configuration.' }),
    ),
  })
  .openapi({ required: ['DirectoryName'], title: 'DeleteDirectoryConfigRequest' })
  .openapi('DeleteDirectoryConfigRequest')

const DeleteEntitlementResultSchema = z.object({}).openapi('DeleteEntitlementResult')

const DeleteEntitlementRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the entitlement.' })),
    StackName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stack with which the entitlement is associated.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'StackName'], title: 'DeleteEntitlementRequest' })
  .openapi('DeleteEntitlementRequest')

const DeleteFleetResultSchema = z.object({}).openapi('DeleteFleetResult')

const DeleteFleetRequestSchema = z
  .object({ Name: StringSchema.and(z.any().openapi({ description: 'The name of the fleet.' })) })
  .openapi({ required: ['Name'], title: 'DeleteFleetRequest' })
  .openapi('DeleteFleetRequest')

const DeleteImageResultSchema = z
  .object({
    Image: ImageSchema.and(
      z.any().openapi({ description: 'Information about the image.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteImageResult')

const DeleteImageRequestSchema = z
  .object({ Name: NameSchema.and(z.any().openapi({ description: 'The name of the image.' })) })
  .openapi({ required: ['Name'], title: 'DeleteImageRequest' })
  .openapi('DeleteImageRequest')

const DeleteImageBuilderResultSchema = z
  .object({
    ImageBuilder: ImageBuilderSchema.and(
      z.any().openapi({ description: 'Information about the image builder.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteImageBuilderResult')

const DeleteImageBuilderRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the image builder.' })),
  })
  .openapi({ required: ['Name'], title: 'DeleteImageBuilderRequest' })
  .openapi('DeleteImageBuilderRequest')

const DeleteImagePermissionsResultSchema = z.object({}).openapi('DeleteImagePermissionsResult')

const AwsAccountIdSchema = z.string().regex(/^\d+$/).openapi('AwsAccountId')

const DeleteImagePermissionsRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the private image.' })),
    SharedAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 12-digit identifier of the AWS account for which to delete image permissions.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'SharedAccountId'], title: 'DeleteImagePermissionsRequest' })
  .openapi('DeleteImagePermissionsRequest')

const DeleteStackResultSchema = z.object({}).openapi('DeleteStackResult')

const DeleteStackRequestSchema = z
  .object({ Name: StringSchema.and(z.any().openapi({ description: 'The name of the stack.' })) })
  .openapi({ required: ['Name'], title: 'DeleteStackRequest' })
  .openapi('DeleteStackRequest')

const DeleteUsageReportSubscriptionResultSchema = z
  .object({})
  .openapi('DeleteUsageReportSubscriptionResult')

const DeleteUsageReportSubscriptionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteUsageReportSubscriptionRequest' })
  .openapi('DeleteUsageReportSubscriptionRequest')

const DeleteUserResultSchema = z.object({}).openapi('DeleteUserResult')

const DeleteUserRequestSchema = z
  .object({
    UserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The email address of the user.</p> <note> <p>Users' email addresses are case-sensitive.</p> </note>",
        }),
    ),
    AuthenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The authentication type for the user. You must specify USERPOOL.',
        }),
    ),
  })
  .openapi({ required: ['UserName', 'AuthenticationType'], title: 'DeleteUserRequest' })
  .openapi('DeleteUserRequest')

const AppBlocksSchema = z.array(AppBlockSchema).openapi('AppBlocks')

const DescribeAppBlocksResultSchema = z
  .object({
    AppBlocks: AppBlocksSchema.and(
      z.any().openapi({ description: 'The app blocks in the list.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAppBlocksResult')

const ArnListSchema = z.array(ArnSchema).openapi('ArnList')

const DescribeAppBlocksRequestSchema = z
  .object({
    Arns: ArnListSchema.and(
      z.any().openapi({ description: 'The ARNs of the app blocks.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAppBlocksRequest', required: [] })
  .openapi('DescribeAppBlocksRequest')

const ApplicationFleetAssociationListSchema = z
  .array(ApplicationFleetAssociationSchema)
  .min(1)
  .max(25)
  .openapi('ApplicationFleetAssociationList')

const DescribeApplicationFleetAssociationsResultSchema = z
  .object({
    ApplicationFleetAssociations: ApplicationFleetAssociationListSchema.and(
      z.any().openapi({ description: 'The application fleet associations in the list.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeApplicationFleetAssociationsResult')

const DescribeApplicationFleetAssociationsRequestSchema = z
  .object({
    FleetName: NameSchema.and(
      z.any().openapi({ description: 'The name of the fleet.' }),
    ).exactOptional(),
    ApplicationArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the application.' }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeApplicationFleetAssociationsRequest', required: [] })
  .openapi('DescribeApplicationFleetAssociationsRequest')

const DescribeApplicationsResultSchema = z
  .object({
    Applications: ApplicationsSchema.and(
      z.any().openapi({ description: 'The applications in the list.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeApplicationsResult')

const DescribeApplicationsRequestSchema = z
  .object({
    Arns: ArnListSchema.and(
      z.any().openapi({ description: 'The ARNs for the applications.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeApplicationsRequest', required: [] })
  .openapi('DescribeApplicationsRequest')

const DirectoryConfigListSchema = z.array(DirectoryConfigSchema).openapi('DirectoryConfigList')

const DescribeDirectoryConfigsResultSchema = z
  .object({
    DirectoryConfigs: DirectoryConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the directory configurations. Note that although the response syntax in this topic includes the account password, this password is not returned in the actual response. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDirectoryConfigsResult')

const DirectoryNameListSchema = z.array(DirectoryNameSchema).openapi('DirectoryNameList')

const DescribeDirectoryConfigsRequestSchema = z
  .object({
    DirectoryNames: DirectoryNameListSchema.and(
      z.any().openapi({ description: 'The directory names.' }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDirectoryConfigsRequest', required: [] })
  .openapi('DescribeDirectoryConfigsRequest')

const EntitlementListSchema = z.array(EntitlementSchema).openapi('EntitlementList')

const DescribeEntitlementsResultSchema = z
  .object({
    Entitlements: EntitlementListSchema.and(
      z.any().openapi({ description: 'The entitlements.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEntitlementsResult')

const DescribeEntitlementsRequestSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the entitlement.' }),
    ).exactOptional(),
    StackName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stack with which the entitlement is associated.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackName'], title: 'DescribeEntitlementsRequest' })
  .openapi('DescribeEntitlementsRequest')

const FleetListSchema = z
  .array(FleetSchema)
  .openapi({ description: 'The fleets.' })
  .openapi('FleetList')

const DescribeFleetsResultSchema = z
  .object({
    Fleets: FleetListSchema.and(
      z.any().openapi({ description: 'Information about the fleets.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFleetsResult')

const DescribeFleetsRequestSchema = z
  .object({
    Names: StringListSchema.and(
      z.any().openapi({ description: 'The names of the fleets to describe.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeFleetsRequest', required: [] })
  .openapi('DescribeFleetsRequest')

const ImageBuilderListSchema = z.array(ImageBuilderSchema).openapi('ImageBuilderList')

const DescribeImageBuildersResultSchema = z
  .object({
    ImageBuilders: ImageBuilderListSchema.and(
      z.any().openapi({ description: 'Information about the image builders.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImageBuildersResult')

const DescribeImageBuildersRequestSchema = z
  .object({
    Names: StringListSchema.and(
      z.any().openapi({ description: 'The names of the image builders to describe.' }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeImageBuildersRequest', required: [] })
  .openapi('DescribeImageBuildersRequest')

const SharedImagePermissionsSchema = z
  .object({
    sharedAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit identifier of the AWS account with which the image is shared.',
        }),
    ),
    imagePermissions: ImagePermissionsSchema.and(
      z.any().openapi({ description: 'Describes the permissions for a shared image.' }),
    ),
  })
  .openapi({
    required: ['sharedAccountId', 'imagePermissions'],
    description:
      'Describes the permissions that are available to the specified AWS account for a shared image.',
  })
  .openapi('SharedImagePermissions')

const SharedImagePermissionsListSchema = z
  .array(SharedImagePermissionsSchema)
  .openapi('SharedImagePermissionsList')

const DescribeImagePermissionsResultSchema = z
  .object({
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the private image.' }),
    ).exactOptional(),
    SharedImagePermissionsList: SharedImagePermissionsListSchema.and(
      z.any().openapi({ description: 'The permissions for a private image that you own. ' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImagePermissionsResult')

const MaxResultsSchema = z.int().min(0).max(500).openapi('MaxResults')

const AwsAccountIdListSchema = z.array(AwsAccountIdSchema).min(1).max(5).openapi('AwsAccountIdList')

const DescribeImagePermissionsRequestSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the private image for which to describe permissions. The image must be one that you own. ',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
    SharedAwsAccountIds: AwsAccountIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 12-digit identifier of one or more AWS accounts with which the image is shared.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'DescribeImagePermissionsRequest' })
  .openapi('DescribeImagePermissionsRequest')

const ImageListSchema = z.array(ImageSchema).openapi('ImageList')

const DescribeImagesResultSchema = z
  .object({
    Images: ImageListSchema.and(
      z.any().openapi({ description: 'Information about the images.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImagesResult')

const DescribeImagesMaxResultsSchema = z.int().min(0).max(25).openapi('DescribeImagesMaxResults')

const DescribeImagesRequestSchema = z
  .object({
    Names: StringListSchema.and(
      z.any().openapi({ description: 'The names of the public or private images to describe.' }),
    ).exactOptional(),
    Arns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARNs of the public, private, and shared images to describe.',
        }),
    ).exactOptional(),
    Type: VisibilityTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of image (public, private, or shared) to describe. ' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    MaxResults: DescribeImagesMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeImagesRequest', required: [] })
  .openapi('DescribeImagesRequest')

const UserIdSchema = z.string().min(2).max(128).openapi('UserId')

const SessionStateSchema = z
  .enum(['ACTIVE', 'PENDING', 'EXPIRED'])
  .openapi({ description: 'Possible values for the state of a streaming session.' })
  .openapi('SessionState')

const SessionConnectionStateSchema = z
  .enum(['CONNECTED', 'NOT_CONNECTED'])
  .openapi('SessionConnectionState')

const SessionSchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the streaming session.' }),
    ),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the user for whom the session was created.' }),
    ),
    StackName: StringSchema.and(
      z.any().openapi({ description: 'The name of the stack for the streaming session.' }),
    ),
    FleetName: StringSchema.and(
      z.any().openapi({ description: 'The name of the fleet for the streaming session.' }),
    ),
    State: SessionStateSchema.and(
      z.any().openapi({ description: 'The current state of the streaming session.' }),
    ),
    ConnectionState: SessionConnectionStateSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether a user is connected to the streaming session.',
        }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time when a streaming instance is dedicated for the user.' }),
    ).exactOptional(),
    MaxExpirationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the streaming session is set to expire. This time is based on the <code>MaxUserDurationinSeconds</code> value, which determines the maximum length of time that a streaming session can run. A streaming session might end earlier than the time specified in <code>SessionMaxExpirationTime</code>, when the <code>DisconnectTimeOutInSeconds</code> elapses or the user chooses to end his or her session. If the <code>DisconnectTimeOutInSeconds</code> elapses, or the user chooses to end his or her session, the streaming instance is terminated and the streaming session ends.',
        }),
    ).exactOptional(),
    AuthenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication method. The user is authenticated using a streaming URL (<code>API</code>) or SAML 2.0 federation (<code>SAML</code>).',
        }),
    ).exactOptional(),
    NetworkAccessConfiguration: NetworkAccessConfigurationSchema.and(
      z.any().openapi({ description: 'The network details for the streaming session.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id', 'UserId', 'StackName', 'FleetName', 'State'],
    description: 'Describes a streaming session.',
  })
  .openapi('Session')

const SessionListSchema = z
  .array(SessionSchema)
  .openapi({ description: 'List of sessions.' })
  .openapi('SessionList')

const DescribeSessionsResultSchema = z
  .object({
    Sessions: SessionListSchema.and(
      z.any().openapi({ description: 'Information about the streaming sessions.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSessionsResult')

const DescribeSessionsRequestSchema = z
  .object({
    StackName: StringSchema.and(
      z.any().openapi({ description: 'The name of the stack. This value is case-sensitive.' }),
    ),
    FleetName: StringSchema.and(
      z.any().openapi({ description: 'The name of the fleet. This value is case-sensitive.' }),
    ),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user identifier (ID). If you specify a user ID, you must also specify the authentication type.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
    Limit: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of each page of results. The default value is 20 and the maximum value is 50.',
        }),
    ).exactOptional(),
    AuthenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication method. Specify <code>API</code> for a user authenticated using a streaming URL or <code>SAML</code> for a SAML federated user. The default is to authenticate users using a streaming URL.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackName', 'FleetName'], title: 'DescribeSessionsRequest' })
  .openapi('DescribeSessionsRequest')

const StackListSchema = z
  .array(StackSchema)
  .openapi({ description: 'The stacks.' })
  .openapi('StackList')

const DescribeStacksResultSchema = z
  .object({
    Stacks: StackListSchema.and(
      z.any().openapi({ description: 'Information about the stacks.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeStacksResult')

const DescribeStacksRequestSchema = z
  .object({
    Names: StringListSchema.and(
      z.any().openapi({ description: 'The names of the stacks to describe.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeStacksRequest', required: [] })
  .openapi('DescribeStacksRequest')

const UsageReportExecutionErrorCodeSchema = z
  .enum(['RESOURCE_NOT_FOUND', 'ACCESS_DENIED', 'INTERNAL_SERVICE_ERROR'])
  .openapi('UsageReportExecutionErrorCode')

const LastReportGenerationExecutionErrorSchema = z
  .object({
    ErrorCode: UsageReportExecutionErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The error code for the error that is returned when a usage report can't be generated.",
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The error message for the error that is returned when a usage report can't be generated.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "Describes the error that is returned when a usage report can't be generated.",
    required: [],
  })
  .openapi('LastReportGenerationExecutionError')

const LastReportGenerationExecutionErrorsSchema = z
  .array(LastReportGenerationExecutionErrorSchema)
  .openapi('LastReportGenerationExecutionErrors')

const UsageReportSubscriptionSchema = z
  .object({
    S3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon S3 bucket where generated reports are stored.</p> <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script configuration, AppStream 2.0 created an S3 bucket to store the script output. The bucket is unique to your account and Region. When you enable usage reporting in this case, AppStream 2.0 uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts, when you enable usage reports, AppStream 2.0 creates a new S3 bucket.</p>",
        }),
    ).exactOptional(),
    Schedule: UsageReportScheduleSchema.and(
      z.any().openapi({ description: 'The schedule for generating usage reports.' }),
    ).exactOptional(),
    LastGeneratedReportDate: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the last usage report was generated.' }),
    ).exactOptional(),
    SubscriptionErrors: LastReportGenerationExecutionErrorsSchema.and(
      z
        .any()
        .openapi({
          description: "The errors that were returned if usage reports couldn't be generated.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes information about the usage report subscription.',
    required: [],
  })
  .openapi('UsageReportSubscription')

const UsageReportSubscriptionListSchema = z
  .array(UsageReportSubscriptionSchema)
  .openapi('UsageReportSubscriptionList')

const DescribeUsageReportSubscriptionsResultSchema = z
  .object({
    UsageReportSubscriptions: UsageReportSubscriptionListSchema.and(
      z.any().openapi({ description: 'Information about the usage report subscription.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUsageReportSubscriptionsResult')

const DescribeUsageReportSubscriptionsRequestSchema = z
  .object({
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeUsageReportSubscriptionsRequest', required: [] })
  .openapi('DescribeUsageReportSubscriptionsRequest')

const DescribeUserStackAssociationsResultSchema = z
  .object({
    UserStackAssociations: UserStackAssociationListSchema.and(
      z.any().openapi({ description: 'The UserStackAssociation objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUserStackAssociationsResult')

const DescribeUserStackAssociationsRequestSchema = z
  .object({
    StackName: StringSchema.and(
      z.any().openapi({ description: 'The name of the stack that is associated with the user.' }),
    ).exactOptional(),
    UserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The email address of the user who is associated with the stack.</p> <note> <p>Users' email addresses are case-sensitive.</p> </note>",
        }),
    ).exactOptional(),
    AuthenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication type for the user who is associated with the stack. You must specify USERPOOL.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeUserStackAssociationsRequest', required: [] })
  .openapi('DescribeUserStackAssociationsRequest')

const UserSchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the user.' })).exactOptional(),
    UserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The email address of the user.</p> <note> <p>Users' email addresses are case-sensitive.</p> </note>",
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the user in the user pool is enabled.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the user in the user pool. The status can be one of the following:</p> <ul> <li> <p>UNCONFIRMED – The user is created but not confirmed.</p> </li> <li> <p>CONFIRMED – The user is confirmed.</p> </li> <li> <p>ARCHIVED – The user is no longer active.</p> </li> <li> <p>COMPROMISED – The user is disabled because of a potential security threat.</p> </li> <li> <p>UNKNOWN – The user status is not known.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FirstName: UserAttributeValueSchema.and(
      z.any().openapi({ description: 'The first name, or given name, of the user.' }),
    ).exactOptional(),
    LastName: UserAttributeValueSchema.and(
      z.any().openapi({ description: 'The last name, or surname, of the user.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the user was created in the user pool.' }),
    ).exactOptional(),
    AuthenticationType: AuthenticationTypeSchema.and(
      z.any().openapi({ description: 'The authentication type for the user.' }),
    ),
  })
  .openapi({ required: ['AuthenticationType'], description: 'Describes a user in the user pool.' })
  .openapi('User')

const UserListSchema = z.array(UserSchema).openapi('UserList')

const DescribeUsersResultSchema = z
  .object({
    Users: UserListSchema.and(
      z.any().openapi({ description: 'Information about users in the user pool.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUsersResult')

const DescribeUsersRequestSchema = z
  .object({
    AuthenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication type for the users in the user pool to describe. You must specify USERPOOL.',
        }),
    ),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AuthenticationType'], title: 'DescribeUsersRequest' })
  .openapi('DescribeUsersRequest')

const DisableUserResultSchema = z.object({}).openapi('DisableUserResult')

const DisableUserRequestSchema = z
  .object({
    UserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The email address of the user.</p> <note> <p>Users' email addresses are case-sensitive.</p> </note>",
        }),
    ),
    AuthenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The authentication type for the user. You must specify USERPOOL.',
        }),
    ),
  })
  .openapi({ required: ['UserName', 'AuthenticationType'], title: 'DisableUserRequest' })
  .openapi('DisableUserRequest')

const DisassociateApplicationFleetResultSchema = z
  .object({})
  .openapi('DisassociateApplicationFleetResult')

const DisassociateApplicationFleetRequestSchema = z
  .object({
    FleetName: NameSchema.and(z.any().openapi({ description: 'The name of the fleet.' })),
    ApplicationArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the application.' })),
  })
  .openapi({
    required: ['FleetName', 'ApplicationArn'],
    title: 'DisassociateApplicationFleetRequest',
  })
  .openapi('DisassociateApplicationFleetRequest')

const DisassociateApplicationFromEntitlementResultSchema = z
  .object({})
  .openapi('DisassociateApplicationFromEntitlementResult')

const DisassociateApplicationFromEntitlementRequestSchema = z
  .object({
    StackName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stack with which the entitlement is associated.',
        }),
    ),
    EntitlementName: NameSchema.and(
      z.any().openapi({ description: 'The name of the entitlement.' }),
    ),
    ApplicationIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the application to remove from the entitlement.',
        }),
    ),
  })
  .openapi({
    required: ['StackName', 'EntitlementName', 'ApplicationIdentifier'],
    title: 'DisassociateApplicationFromEntitlementRequest',
  })
  .openapi('DisassociateApplicationFromEntitlementRequest')

const DisassociateFleetResultSchema = z.object({}).openapi('DisassociateFleetResult')

const DisassociateFleetRequestSchema = z
  .object({
    FleetName: StringSchema.and(z.any().openapi({ description: 'The name of the fleet.' })),
    StackName: StringSchema.and(z.any().openapi({ description: 'The name of the stack.' })),
  })
  .openapi({ required: ['FleetName', 'StackName'], title: 'DisassociateFleetRequest' })
  .openapi('DisassociateFleetRequest')

const EnableUserResultSchema = z.object({}).openapi('EnableUserResult')

const EnableUserRequestSchema = z
  .object({
    UserName: UsernameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address of the user.</p> <note> <p>Users\' email addresses are case-sensitive. During login, if they specify an email address that doesn\'t use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays. </p> </note>',
        }),
    ),
    AuthenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The authentication type for the user. You must specify USERPOOL.',
        }),
    ),
  })
  .openapi({ required: ['UserName', 'AuthenticationType'], title: 'EnableUserRequest' })
  .openapi('EnableUserRequest')

const ExpireSessionResultSchema = z.object({}).openapi('ExpireSessionResult')

const ExpireSessionRequestSchema = z
  .object({
    SessionId: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the streaming session.' }),
    ),
  })
  .openapi({ required: ['SessionId'], title: 'ExpireSessionRequest' })
  .openapi('ExpireSessionRequest')

const ListAssociatedFleetsResultSchema = z
  .object({
    Names: StringListSchema.and(
      z.any().openapi({ description: 'The name of the fleet.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssociatedFleetsResult')

const ListAssociatedFleetsRequestSchema = z
  .object({
    StackName: StringSchema.and(z.any().openapi({ description: 'The name of the stack.' })),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackName'], title: 'ListAssociatedFleetsRequest' })
  .openapi('ListAssociatedFleetsRequest')

const ListAssociatedStacksResultSchema = z
  .object({
    Names: StringListSchema.and(
      z.any().openapi({ description: 'The name of the stack.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssociatedStacksResult')

const ListAssociatedStacksRequestSchema = z
  .object({
    FleetName: StringSchema.and(z.any().openapi({ description: 'The name of the fleet.' })),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FleetName'], title: 'ListAssociatedStacksRequest' })
  .openapi('ListAssociatedStacksRequest')

const EntitledApplicationSchema = z
  .object({
    ApplicationIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the application.' }),
    ),
  })
  .openapi({
    required: ['ApplicationIdentifier'],
    description:
      'The application associated to an entitlement. Access is controlled based on user attributes.',
  })
  .openapi('EntitledApplication')

const EntitledApplicationListSchema = z
  .array(EntitledApplicationSchema)
  .openapi('EntitledApplicationList')

const ListEntitledApplicationsResultSchema = z
  .object({
    EntitledApplications: EntitledApplicationListSchema.and(
      z.any().openapi({ description: 'The entitled applications.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEntitledApplicationsResult')

const ListEntitledApplicationsRequestSchema = z
  .object({
    StackName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stack with which the entitlement is associated.',
        }),
    ),
    EntitlementName: NameSchema.and(
      z.any().openapi({ description: 'The name of the entitlement.' }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token used to retrieve the next page of results for this operation.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum size of each page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StackName', 'EntitlementName'], title: 'ListEntitledApplicationsRequest' })
  .openapi('ListEntitledApplicationsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StartFleetResultSchema = z.object({}).openapi('StartFleetResult')

const StartFleetRequestSchema = z
  .object({ Name: StringSchema.and(z.any().openapi({ description: 'The name of the fleet.' })) })
  .openapi({ required: ['Name'], title: 'StartFleetRequest' })
  .openapi('StartFleetRequest')

const StartImageBuilderResultSchema = z
  .object({
    ImageBuilder: ImageBuilderSchema.and(
      z.any().openapi({ description: 'Information about the image builder.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartImageBuilderResult')

const StartImageBuilderRequestSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the image builder.' })),
    AppstreamAgentVersion: AppstreamAgentVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'StartImageBuilderRequest' })
  .openapi('StartImageBuilderRequest')

const StopFleetResultSchema = z.object({}).openapi('StopFleetResult')

const StopFleetRequestSchema = z
  .object({ Name: StringSchema.and(z.any().openapi({ description: 'The name of the fleet.' })) })
  .openapi({ required: ['Name'], title: 'StopFleetRequest' })
  .openapi('StopFleetRequest')

const StopImageBuilderResultSchema = z
  .object({
    ImageBuilder: ImageBuilderSchema.and(
      z.any().openapi({ description: 'Information about the image builder.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopImageBuilderResult')

const StopImageBuilderRequestSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the image builder.' })),
  })
  .openapi({ required: ['Name'], title: 'StopImageBuilderRequest' })
  .openapi('StopImageBuilderRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags to associate. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p> <p>If you do not specify a value, the value is set to an empty string.</p> <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p> <p>_ . : / = + \\ - @</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(^(?!aws:).[\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The tag keys for the tags to disassociate.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationResultSchema = z
  .object({ Application: ApplicationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateApplicationResult')

const ApplicationAttributeSchema = z
  .enum(['LAUNCH_PARAMETERS', 'WORKING_DIRECTORY'])
  .openapi('ApplicationAttribute')

const ApplicationAttributesSchema = z
  .array(ApplicationAttributeSchema)
  .max(2)
  .openapi('ApplicationAttributes')

const UpdateApplicationRequestSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application. This name is visible to users when display name is not specified.',
        }),
    ),
    DisplayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display name of the application. This name is visible to users in the application catalog.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
    IconS3Location: S3LocationSchema.and(
      z.any().openapi({ description: 'The icon S3 location of the application.' }),
    ).exactOptional(),
    LaunchPath: StringSchema.and(
      z.any().openapi({ description: 'The launch path of the application.' }),
    ).exactOptional(),
    WorkingDirectory: StringSchema.and(
      z.any().openapi({ description: 'The working directory of the application.' }),
    ).exactOptional(),
    LaunchParameters: StringSchema.and(
      z.any().openapi({ description: 'The launch parameters of the application.' }),
    ).exactOptional(),
    AppBlockArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the app block.' }),
    ).exactOptional(),
    AttributesToDelete: ApplicationAttributesSchema.and(
      z.any().openapi({ description: 'The attributes to delete for an application.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateApplicationRequest' })
  .openapi('UpdateApplicationRequest')

const UpdateDirectoryConfigResultSchema = z
  .object({
    DirectoryConfig: DirectoryConfigSchema.and(
      z.any().openapi({ description: 'Information about the Directory Config object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDirectoryConfigResult')

const UpdateDirectoryConfigRequestSchema = z
  .object({
    DirectoryName: DirectoryNameSchema.and(
      z.any().openapi({ description: 'The name of the Directory Config object.' }),
    ),
    OrganizationalUnitDistinguishedNames: OrganizationalUnitDistinguishedNamesListSchema.and(
      z
        .any()
        .openapi({
          description: 'The distinguished names of the organizational units for computer accounts.',
        }),
    ).exactOptional(),
    ServiceAccountCredentials: ServiceAccountCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The credentials for the service account used by the fleet or image builder to connect to the directory.',
        }),
    ).exactOptional(),
    CertificateBasedAuthProperties: CertificateBasedAuthPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is <b>Enabled</b> . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. <b>Enabled_no_directory_login_fallback</b> enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryName'], title: 'UpdateDirectoryConfigRequest' })
  .openapi('UpdateDirectoryConfigRequest')

const UpdateEntitlementResultSchema = z
  .object({
    Entitlement: EntitlementSchema.and(
      z.any().openapi({ description: 'The entitlement.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEntitlementResult')

const UpdateEntitlementRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the entitlement.' })),
    StackName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stack with which the entitlement is associated.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the entitlement.' }),
    ).exactOptional(),
    AppVisibility: AppVisibilitySchema.and(
      z.any().openapi({ description: 'Specifies whether all or only selected apps are entitled.' }),
    ).exactOptional(),
    Attributes: EntitlementAttributeListSchema.and(
      z.any().openapi({ description: 'The attributes of the entitlement.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'StackName'], title: 'UpdateEntitlementRequest' })
  .openapi('UpdateEntitlementRequest')

const UpdateFleetResultSchema = z
  .object({
    Fleet: FleetSchema.and(
      z.any().openapi({ description: 'Information about the fleet.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFleetResult')

const FleetAttributeSchema = z
  .enum([
    'VPC_CONFIGURATION',
    'VPC_CONFIGURATION_SECURITY_GROUP_IDS',
    'DOMAIN_JOIN_INFO',
    'IAM_ROLE_ARN',
    'USB_DEVICE_FILTER_STRINGS',
    'SESSION_SCRIPT_S3_LOCATION',
  ])
  .openapi({ description: 'The fleet attribute.' })
  .openapi('FleetAttribute')

const FleetAttributesSchema = z
  .array(FleetAttributeSchema)
  .openapi({ description: 'The fleet attributes.' })
  .openapi('FleetAttributes')

const UpdateFleetRequestSchema = z
  .object({
    ImageName: StringSchema.and(
      z.any().openapi({ description: 'The name of the image used to create the fleet.' }),
    ).exactOptional(),
    ImageArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the public, private, or shared image to use.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'A unique name for the fleet.' }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance type to use when launching fleet instances. The following instance types are available:</p> <ul> <li> <p>stream.standard.small</p> </li> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.standard.xlarge</p> </li> <li> <p>stream.standard.2xlarge</p> </li> <li> <p>stream.compute.large</p> </li> <li> <p>stream.compute.xlarge</p> </li> <li> <p>stream.compute.2xlarge</p> </li> <li> <p>stream.compute.4xlarge</p> </li> <li> <p>stream.compute.8xlarge</p> </li> <li> <p>stream.memory.large</p> </li> <li> <p>stream.memory.xlarge</p> </li> <li> <p>stream.memory.2xlarge</p> </li> <li> <p>stream.memory.4xlarge</p> </li> <li> <p>stream.memory.8xlarge</p> </li> <li> <p>stream.memory.z1d.large</p> </li> <li> <p>stream.memory.z1d.xlarge</p> </li> <li> <p>stream.memory.z1d.2xlarge</p> </li> <li> <p>stream.memory.z1d.3xlarge</p> </li> <li> <p>stream.memory.z1d.6xlarge</p> </li> <li> <p>stream.memory.z1d.12xlarge</p> </li> <li> <p>stream.graphics-design.large</p> </li> <li> <p>stream.graphics-design.xlarge</p> </li> <li> <p>stream.graphics-design.2xlarge</p> </li> <li> <p>stream.graphics-design.4xlarge</p> </li> <li> <p>stream.graphics-desktop.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.xlarge</p> </li> <li> <p>stream.graphics.g4dn.2xlarge</p> </li> <li> <p>stream.graphics.g4dn.4xlarge</p> </li> <li> <p>stream.graphics.g4dn.8xlarge</p> </li> <li> <p>stream.graphics.g4dn.12xlarge</p> </li> <li> <p>stream.graphics.g4dn.16xlarge</p> </li> <li> <p>stream.graphics-pro.4xlarge</p> </li> <li> <p>stream.graphics-pro.8xlarge</p> </li> <li> <p>stream.graphics-pro.16xlarge</p> </li> </ul> <p>The following instance types are available for Elastic fleets:</p> <ul> <li> <p>stream.standard.small</p> </li> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.standard.xlarge</p> </li> <li> <p>stream.standard.2xlarge</p> </li> </ul>',
        }),
    ).exactOptional(),
    ComputeCapacity: ComputeCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The desired capacity for the fleet. This is not allowed for Elastic fleets.',
        }),
    ).exactOptional(),
    VpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC configuration for the fleet. This is required for Elastic fleets, but not required for other fleet types. Elastic fleets require that you specify at least two subnets in different availability zones. ',
        }),
    ).exactOptional(),
    MaxUserDurationInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p> <p>Specify a value between 600 and 360000.</p>',
        }),
    ).exactOptional(),
    DisconnectTimeoutInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p> <p>Specify a value between 60 and 360000.</p>',
        }),
    ).exactOptional(),
    DeleteVpcConfig: BooleanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'Deletes the VPC association for the specified fleet.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The fleet name to display.' }),
    ).exactOptional(),
    EnableDefaultInternetAccess: BooleanObjectSchema.and(
      z
        .any()
        .openapi({ description: 'Enables or disables default internet access for the fleet.' }),
    ).exactOptional(),
    DomainJoinInfo: DomainJoinInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. ',
        }),
    ).exactOptional(),
    IdleDisconnectTimeoutInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time interval begins. Users are notified before they are disconnected due to inactivity. If users try to reconnect to the streaming session before the time interval specified in <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are disconnected. </p> <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p> <note> <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p> </note>",
        }),
    ).exactOptional(),
    AttributesToDelete: FleetAttributesSchema.and(
      z.any().openapi({ description: 'The fleet attributes to delete.' }),
    ).exactOptional(),
    IamRoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>appstream_machine_role</b> credential profile on the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
        }),
    ).exactOptional(),
    StreamView: StreamViewSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When <code>APP</code> is specified, only the windows of applications opened by users display. When <code>DESKTOP</code> is specified, the standard desktop that is provided by the operating system displays.</p> <p>The default value is <code>APP</code>.</p>',
        }),
    ).exactOptional(),
    Platform: PlatformTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform of the fleet. WINDOWS_SERVER_2019 and AMAZON_LINUX2 are supported for Elastic fleets. ',
        }),
    ).exactOptional(),
    MaxConcurrentSessions: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of concurrent sessions for a fleet.' }),
    ).exactOptional(),
    UsbDeviceFilterStrings: UsbDeviceFilterStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client. This is allowed but not required for Elastic fleets.',
        }),
    ).exactOptional(),
    SessionScriptS3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFleetRequest', required: [] })
  .openapi('UpdateFleetRequest')

const UpdateImagePermissionsResultSchema = z.object({}).openapi('UpdateImagePermissionsResult')

const UpdateImagePermissionsRequestSchema = z
  .object({
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the private image.' })),
    SharedAccountId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 12-digit identifier of the AWS account for which you want add or update image permissions.',
        }),
    ),
    ImagePermissions: ImagePermissionsSchema.and(
      z.any().openapi({ description: 'The permissions for the image.' }),
    ),
  })
  .openapi({
    required: ['Name', 'SharedAccountId', 'ImagePermissions'],
    title: 'UpdateImagePermissionsRequest',
  })
  .openapi('UpdateImagePermissionsRequest')

const UpdateStackResultSchema = z
  .object({
    Stack: StackSchema.and(
      z.any().openapi({ description: 'Information about the stack.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateStackResult')

const StackAttributeSchema = z
  .enum([
    'STORAGE_CONNECTORS',
    'STORAGE_CONNECTOR_HOMEFOLDERS',
    'STORAGE_CONNECTOR_GOOGLE_DRIVE',
    'STORAGE_CONNECTOR_ONE_DRIVE',
    'REDIRECT_URL',
    'FEEDBACK_URL',
    'THEME_NAME',
    'USER_SETTINGS',
    'EMBED_HOST_DOMAINS',
    'IAM_ROLE_ARN',
    'ACCESS_ENDPOINTS',
    'STREAMING_EXPERIENCE_SETTINGS',
  ])
  .openapi('StackAttribute')

const StackAttributesSchema = z.array(StackAttributeSchema).openapi('StackAttributes')

const UpdateStackRequestSchema = z
  .object({
    DisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The stack name to display.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description to display.' }),
    ).exactOptional(),
    Name: StringSchema.and(z.any().openapi({ description: 'The name of the stack.' })),
    StorageConnectors: StorageConnectorListSchema.and(
      z.any().openapi({ description: 'The storage connectors to enable.' }),
    ).exactOptional(),
    DeleteStorageConnectors: BooleanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'Deletes the storage connectors currently enabled for the stack.',
        }),
    ).exactOptional(),
    RedirectURL: RedirectURLSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL that users are redirected to after their streaming session ends.',
        }),
    ).exactOptional(),
    FeedbackURL: FeedbackURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that users are redirected to after they choose the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.',
        }),
    ).exactOptional(),
    AttributesToDelete: StackAttributesSchema.and(
      z.any().openapi({ description: 'The stack attributes to delete.' }),
    ).exactOptional(),
    UserSettings: UserSettingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.',
        }),
    ).exactOptional(),
    ApplicationSettings: ApplicationSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.',
        }),
    ).exactOptional(),
    AccessEndpoints: AccessEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.',
        }),
    ).exactOptional(),
    EmbedHostDomains: EmbedHostDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. ',
        }),
    ).exactOptional(),
    StreamingExperienceSettings: StreamingExperienceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateStackRequest' })
  .openapi('UpdateStackRequest')

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

export const postXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet',
  description:
    'Associates the specified application with the specified fleet. This is only supported for Elastic fleets.',
  operationId: 'AssociateApplicationFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.AssociateApplicationFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.AssociateApplicationFleet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateApplicationFleetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateApplicationFleetResultSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement',
    description: 'Associates an application to entitle.',
    operationId: 'AssociateApplicationToEntitlement',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('PhotonAdminProxyService.AssociateApplicationToEntitlement')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['PhotonAdminProxyService.AssociateApplicationToEntitlement'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateApplicationToEntitlementRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateApplicationToEntitlementResultSchema } },
      },
      480: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'EntitlementNotFoundException',
        content: { 'application/json': { schema: EntitlementNotFoundExceptionSchema } },
      },
      483: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetPhotonAdminProxyServiceAssociateFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.AssociateFleet',
  description: 'Associates the specified fleet with the specified stack.',
  operationId: 'AssociateFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.AssociateFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.AssociateFleet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateFleetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateFleetResultSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
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
      description: 'IncompatibleImageException',
      content: { 'application/json': { schema: IncompatibleImageExceptionSchema } },
    },
    485: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack',
  description:
    'Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.',
  operationId: 'BatchAssociateUserStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.BatchAssociateUserStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.BatchAssociateUserStack'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchAssociateUserStackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchAssociateUserStackResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack',
  description: 'Disassociates the specified users from the specified stacks.',
  operationId: 'BatchDisassociateUserStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.BatchDisassociateUserStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['PhotonAdminProxyService.BatchDisassociateUserStack'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDisassociateUserStackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDisassociateUserStackResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCopyImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CopyImage',
  description:
    'Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.',
  operationId: 'CopyImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CopyImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CopyImage'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CopyImageRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CopyImageResponseSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    485: {
      description: 'IncompatibleImageException',
      content: { 'application/json': { schema: IncompatibleImageExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateAppBlockRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock',
  description:
    '<p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>',
  operationId: 'CreateAppBlock',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateAppBlock')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateAppBlock'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAppBlockRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAppBlockResultSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    483: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateApplication',
  description:
    '<p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>',
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
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig',
  description:
    'Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.',
  operationId: 'CreateDirectoryConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateDirectoryConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateDirectoryConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDirectoryConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDirectoryConfigResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    485: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateEntitlementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement',
  description:
    "Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.",
  operationId: 'CreateEntitlement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateEntitlement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateEntitlement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEntitlementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEntitlementResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
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
      description: 'EntitlementAlreadyExistsException',
      content: { 'application/json': { schema: EntitlementAlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateFleet',
  description:
    'Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.',
  operationId: 'CreateFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateFleet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateFleetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFleetResultSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
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
      description: 'RequestLimitExceededException',
      content: { 'application/json': { schema: RequestLimitExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    486: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    487: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    488: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    489: {
      description: 'IncompatibleImageException',
      content: { 'application/json': { schema: IncompatibleImageExceptionSchema } },
    },
    490: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder',
  description:
    '<p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>',
  operationId: 'CreateImageBuilder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateImageBuilder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateImageBuilder'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateImageBuilderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateImageBuilderResultSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'RequestLimitExceededException',
      content: { 'application/json': { schema: RequestLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    483: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    487: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    488: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    489: {
      description: 'IncompatibleImageException',
      content: { 'application/json': { schema: IncompatibleImageExceptionSchema } },
    },
    490: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL',
    description: 'Creates a URL to start an image builder streaming session.',
    operationId: 'CreateImageBuilderStreamingURL',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('PhotonAdminProxyService.CreateImageBuilderStreamingURL')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['PhotonAdminProxyService.CreateImageBuilderStreamingURL'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateImageBuilderStreamingURLRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateImageBuilderStreamingURLResultSchema } },
      },
      480: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetPhotonAdminProxyServiceCreateStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateStack',
  description:
    'Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. ',
  operationId: 'CreateStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateStackRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStackResultSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateStreamingURLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL',
  description:
    'Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. ',
  operationId: 'CreateStreamingURL',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateStreamingURL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateStreamingURL'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateStreamingURLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStreamingURLResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage',
  description:
    '<p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
  operationId: 'CreateUpdatedImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateUpdatedImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateUpdatedImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUpdatedImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUpdatedImageResultSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    483: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    486: {
      description: 'IncompatibleImageException',
      content: { 'application/json': { schema: IncompatibleImageExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription',
  description: 'Creates a usage report subscription. Usage reports are generated daily.',
  operationId: 'CreateUsageReportSubscription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.CreateUsageReportSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['PhotonAdminProxyService.CreateUsageReportSubscription'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUsageReportSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUsageReportSubscriptionResultSchema } },
    },
    480: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    481: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceCreateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.CreateUser',
  description: 'Creates a new user in the user pool.',
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
        .literal('PhotonAdminProxyService.CreateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.CreateUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResultSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteAppBlockRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock',
  description: 'Deletes an app block.',
  operationId: 'DeleteAppBlock',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteAppBlock')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteAppBlock'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAppBlockRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAppBlockResultSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
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

export const postXAmzTargetPhotonAdminProxyServiceDeleteApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteApplication',
  description: 'Deletes an application.',
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
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig',
  description:
    'Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.',
  operationId: 'DeleteDirectoryConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteDirectoryConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteDirectoryConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDirectoryConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDirectoryConfigResultSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteEntitlementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement',
  description: 'Deletes the specified entitlement.',
  operationId: 'DeleteEntitlement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteEntitlement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteEntitlement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEntitlementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEntitlementResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'EntitlementNotFoundException',
      content: { 'application/json': { schema: EntitlementNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteFleet',
  description: 'Deletes the specified fleet.',
  operationId: 'DeleteFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteFleet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteFleetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFleetResultSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteImage',
  description:
    'Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.',
  operationId: 'DeleteImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteImage'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteImageRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteImageResultSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder',
  description: 'Deletes the specified image builder and releases the capacity.',
  operationId: 'DeleteImageBuilder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteImageBuilder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteImageBuilder'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteImageBuilderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteImageBuilderResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions',
  description:
    'Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.',
  operationId: 'DeleteImagePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteImagePermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteImagePermissions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteImagePermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteImagePermissionsResultSchema } },
    },
    480: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteStack',
  description:
    'Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.',
  operationId: 'DeleteStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteStackRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStackResultSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription',
  description: 'Disables usage report generation.',
  operationId: 'DeleteUsageReportSubscription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DeleteUsageReportSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['PhotonAdminProxyService.DeleteUsageReportSubscription'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteUsageReportSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUsageReportSubscriptionResultSchema } },
    },
    480: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DeleteUser',
  description: 'Deletes a user from the user pool.',
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
        .literal('PhotonAdminProxyService.DeleteUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DeleteUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUserResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks',
  description: 'Retrieves a list that describes one or more app blocks.',
  operationId: 'DescribeAppBlocks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeAppBlocks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeAppBlocks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAppBlocksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAppBlocksResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations',
    description:
      'Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.',
    operationId: 'DescribeApplicationFleetAssociations',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('PhotonAdminProxyService.DescribeApplicationFleetAssociations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['PhotonAdminProxyService.DescribeApplicationFleetAssociations'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeApplicationFleetAssociationsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeApplicationFleetAssociationsResultSchema },
        },
      },
      480: {
        description: 'InvalidParameterCombinationException',
        content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
      },
      481: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetPhotonAdminProxyServiceDescribeApplicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeApplications',
  description: 'Retrieves a list that describes one or more applications.',
  operationId: 'DescribeApplications',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeApplications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeApplications'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeApplicationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeApplicationsResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs',
  description:
    '<p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>',
  operationId: 'DescribeDirectoryConfigs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeDirectoryConfigs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeDirectoryConfigs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDirectoryConfigsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDirectoryConfigsResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements',
  description: 'Retrieves a list that describes one of more entitlements.',
  operationId: 'DescribeEntitlements',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeEntitlements')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeEntitlements'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEntitlementsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEntitlementsResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'EntitlementNotFoundException',
      content: { 'application/json': { schema: EntitlementNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeFleetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeFleets',
  description:
    'Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.',
  operationId: 'DescribeFleets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeFleets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeFleets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFleetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFleetsResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders',
  description:
    'Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.',
  operationId: 'DescribeImageBuilders',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeImageBuilders')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeImageBuilders'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeImageBuildersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeImageBuildersResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions',
  description:
    'Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. ',
  operationId: 'DescribeImagePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeImagePermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeImagePermissions'] },
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
      content: { 'application/json': { schema: DescribeImagePermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeImagePermissionsResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeImagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeImages',
  description:
    'Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.',
  operationId: 'DescribeImages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeImages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeImages'] },
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
      content: { 'application/json': { schema: DescribeImagesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeImagesResultSchema } },
    },
    480: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeSessions',
  description:
    'Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.',
  operationId: 'DescribeSessions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeSessions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSessionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSessionsResultSchema } },
    },
    480: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeStacksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeStacks',
  description:
    'Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.',
  operationId: 'DescribeStacks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeStacks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeStacks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStacksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStacksResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions',
    description: 'Retrieves a list that describes one or more usage report subscriptions.',
    operationId: 'DescribeUsageReportSubscriptions',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('PhotonAdminProxyService.DescribeUsageReportSubscriptions')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['PhotonAdminProxyService.DescribeUsageReportSubscriptions'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeUsageReportSubscriptionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeUsageReportSubscriptionsResultSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidAccountStatusException',
        content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
      },
    },
  })

export const postXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations',
  description:
    '<p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>',
  operationId: 'DescribeUserStackAssociations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeUserStackAssociations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['PhotonAdminProxyService.DescribeUserStackAssociations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUserStackAssociationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUserStackAssociationsResultSchema } },
    },
    480: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDescribeUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DescribeUsers',
  description: 'Retrieves a list that describes one or more specified users in the user pool.',
  operationId: 'DescribeUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DescribeUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DescribeUsers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUsersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUsersResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDisableUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DisableUser',
  description:
    "Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. ",
  operationId: 'DisableUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DisableUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DisableUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DisableUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableUserResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet',
  description: 'Disassociates the specified application from the fleet.',
  operationId: 'DisassociateApplicationFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DisassociateApplicationFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['PhotonAdminProxyService.DisassociateApplicationFleet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateApplicationFleetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateApplicationFleetResultSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement',
    description: 'Deletes the specified application from the specified entitlement.',
    operationId: 'DisassociateApplicationFromEntitlement',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('PhotonAdminProxyService.DisassociateApplicationFromEntitlement')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['PhotonAdminProxyService.DisassociateApplicationFromEntitlement'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DisassociateApplicationFromEntitlementRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DisassociateApplicationFromEntitlementResultSchema },
        },
      },
      480: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'EntitlementNotFoundException',
        content: { 'application/json': { schema: EntitlementNotFoundExceptionSchema } },
      },
      483: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetPhotonAdminProxyServiceDisassociateFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet',
  description: 'Disassociates the specified fleet from the specified stack.',
  operationId: 'DisassociateFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.DisassociateFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.DisassociateFleet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateFleetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateFleetResultSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceEnableUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.EnableUser',
  description:
    'Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.',
  operationId: 'EnableUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.EnableUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.EnableUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnableUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableUserResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceExpireSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.ExpireSession',
  description: 'Immediately stops the specified streaming session.',
  operationId: 'ExpireSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.ExpireSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.ExpireSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExpireSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExpireSessionResultSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets',
  description: 'Retrieves the name of the fleet that is associated with the specified stack.',
  operationId: 'ListAssociatedFleets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.ListAssociatedFleets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.ListAssociatedFleets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListAssociatedFleetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssociatedFleetsResultSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceListAssociatedStacksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks',
  description: 'Retrieves the name of the stack with which the specified fleet is associated.',
  operationId: 'ListAssociatedStacks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.ListAssociatedStacks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.ListAssociatedStacks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListAssociatedStacksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssociatedStacksResultSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications',
  description: 'Retrieves a list of entitled applications.',
  operationId: 'ListEntitledApplications',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.ListEntitledApplications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.ListEntitledApplications'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEntitledApplicationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEntitledApplicationsResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'EntitlementNotFoundException',
      content: { 'application/json': { schema: EntitlementNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource',
  description:
    '<p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
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
        .literal('PhotonAdminProxyService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.ListTagsForResource'] },
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
  },
})

export const postXAmzTargetPhotonAdminProxyServiceStartFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.StartFleet',
  description: 'Starts the specified fleet.',
  operationId: 'StartFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.StartFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.StartFleet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartFleetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFleetResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'RequestLimitExceededException',
      content: { 'application/json': { schema: RequestLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    486: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
    },
    487: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceStartImageBuilderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder',
  description: 'Starts the specified image builder.',
  operationId: 'StartImageBuilder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.StartImageBuilder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.StartImageBuilder'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartImageBuilderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartImageBuilderResultSchema } },
    },
    480: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    484: {
      description: 'IncompatibleImageException',
      content: { 'application/json': { schema: IncompatibleImageExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceStopFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.StopFleet',
  description: 'Stops the specified fleet.',
  operationId: 'StopFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.StopFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.StopFleet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopFleetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopFleetResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceStopImageBuilderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder',
  description: 'Stops the specified image builder.',
  operationId: 'StopImageBuilder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.StopImageBuilder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.StopImageBuilder'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopImageBuilderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopImageBuilderResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.TagResource',
  description:
    '<p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
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
        .literal('PhotonAdminProxyService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.TagResource'] },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.UntagResource',
  description:
    '<p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>',
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
        .literal('PhotonAdminProxyService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.UntagResource'] },
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
  },
})

export const postXAmzTargetPhotonAdminProxyServiceUpdateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.UpdateApplication',
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
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.UpdateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.UpdateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApplicationResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig',
  description:
    'Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.',
  operationId: 'UpdateDirectoryConfig',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.UpdateDirectoryConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.UpdateDirectoryConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDirectoryConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDirectoryConfigResultSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    484: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceUpdateEntitlementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement',
  description: 'Updates the specified entitlement.',
  operationId: 'UpdateEntitlement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.UpdateEntitlement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.UpdateEntitlement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEntitlementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEntitlementResultSchema } },
    },
    480: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'EntitlementNotFoundException',
      content: { 'application/json': { schema: EntitlementNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceUpdateFleetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.UpdateFleet',
  description:
    "<p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>",
  operationId: 'UpdateFleet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.UpdateFleet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.UpdateFleet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateFleetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFleetResultSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'RequestLimitExceededException',
      content: { 'application/json': { schema: RequestLimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    484: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
    },
    487: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    488: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    489: {
      description: 'IncompatibleImageException',
      content: { 'application/json': { schema: IncompatibleImageExceptionSchema } },
    },
    490: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions',
  description: 'Adds or updates permissions for the specified private image. ',
  operationId: 'UpdateImagePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.UpdateImagePermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.UpdateImagePermissions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateImagePermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateImagePermissionsResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceNotAvailableException',
      content: { 'application/json': { schema: ResourceNotAvailableExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetPhotonAdminProxyServiceUpdateStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=PhotonAdminProxyService.UpdateStack',
  description: 'Updates the specified fields for the specified stack.',
  operationId: 'UpdateStack',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('PhotonAdminProxyService.UpdateStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['PhotonAdminProxyService.UpdateStack'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateStackRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateStackResultSchema } },
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
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidAccountStatusException',
      content: { 'application/json': { schema: InvalidAccountStatusExceptionSchema } },
    },
    486: {
      description: 'IncompatibleImageException',
      content: { 'application/json': { schema: IncompatibleImageExceptionSchema } },
    },
    487: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
    488: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})
